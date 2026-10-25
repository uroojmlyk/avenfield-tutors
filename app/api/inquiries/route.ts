import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Inquiry from '@/lib/models/Inquiry'

// Best-effort, in-memory rate limit (per server instance). It stops casual
// spam and double-submits; it is not a substitute for a real WAF.
const hits = new Map<string, number[]>()
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter(t => now - t < WINDOW_MS)
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  return false
}

const clean = (v: unknown, max: number) =>
  typeof v === 'string' ? v.replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max) : ''

// "0309 5154253", "+92 309 5154253", "(0309) 515-4253" -> "923095154253"
function normalisePhone(raw: string) {
  const digits = raw.replace(/[^\d]/g, '')
  if (digits.startsWith('0092')) return digits.slice(2)
  if (digits.startsWith('92')) return digits
  if (digits.startsWith('0') && digits.length === 11) return '92' + digits.slice(1)
  return digits
}

const MODES = ['home', 'online', 'either'] as const

// Optional email notification. Does nothing unless both env vars are set, and
// a failure here never turns a saved inquiry into an error for the parent.
async function notifyByEmail(summary: string) {
  const key = process.env.RESEND_API_KEY
  const to = process.env.INQUIRY_NOTIFY_EMAIL
  if (!key || !to) return
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.INQUIRY_FROM_EMAIL || 'Avenfield Tutors <onboarding@resend.dev>',
        to: [to],
        subject: 'New tutor inquiry from the website',
        text: summary,
      }),
      signal: AbortSignal.timeout(4000),
    })
  } catch {
    /* ignore: the inquiry is already stored */
  }
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a few minutes or message us on WhatsApp.' },
        { status: 429 }
      )
    }

    const body = await req.json()

    // Honeypot: real visitors never fill this hidden field.
    if (clean(body?.website, 200)) {
      return NextResponse.json({ success: true }, { status: 201 })
    }

    const data = {
      parentName: clean(body?.parentName, 80),
      whatsapp: normalisePhone(clean(body?.whatsapp, 25)),
      grade: clean(body?.grade, 60),
      subject: clean(body?.subject, 80),
      curriculum: clean(body?.curriculum, 80),
      cityArea: clean(body?.cityArea, 120),
      mode: clean(body?.mode, 10),
      preferredTiming: clean(body?.preferredTiming, 160),
      sourcePage: clean(body?.sourcePage, 120) || '/',
    }

    if (!data.parentName || !data.grade || !data.subject || !data.cityArea) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 })
    }
    if (!/^\d{10,15}$/.test(data.whatsapp)) {
      return NextResponse.json({ error: 'Please enter a valid WhatsApp number.' }, { status: 400 })
    }
    if (!(MODES as readonly string[]).includes(data.mode)) {
      return NextResponse.json({ error: 'Please choose a preferred learning mode.' }, { status: 400 })
    }

    await connectDB()
    const inquiry = await Inquiry.create(data)

    await notifyByEmail(
      [
        `Parent: ${data.parentName}`,
        `WhatsApp: +${data.whatsapp}`,
        `Grade: ${data.grade}`,
        `Subject: ${data.subject}`,
        `Curriculum: ${data.curriculum || '-'}`,
        `City / area: ${data.cityArea}`,
        `Mode: ${data.mode}`,
        `Preferred timing: ${data.preferredTiming || '-'}`,
        `Source page: ${data.sourcePage}`,
      ].join('\n')
    )

    // Only reached after the document is really stored.
    return NextResponse.json({ success: true, id: String(inquiry._id) }, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: 'We could not submit your inquiry. Please try again or message us on WhatsApp.' },
      { status: 500 }
    )
  }
}