import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Tutor from '@/lib/models/Tutor'

export async function GET(req: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(req.url)
    const subject = searchParams.get('subject')
    const limit   = parseInt(searchParams.get('limit') || '50')

    const query: Record<string, unknown> = { status: 'approved' }
    if (subject) query.subjects = { $in: [subject] }

    const tutors = await Tutor.find(query).sort({ createdAt: -1 }).limit(limit).lean()
    return NextResponse.json(tutors)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch tutors' }, { status: 500 })
  }
}