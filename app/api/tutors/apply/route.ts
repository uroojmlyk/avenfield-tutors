import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Tutor from '@/lib/models/Tutor'

export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const body = await req.json()
    const { name, subjects, experience, city, country, whatsapp, bio, education, mode } = body

    if (!name || !subjects?.length || !whatsapp || !bio || !education) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const tutor = await Tutor.create({
      name, subjects, experience, city, country,
      whatsapp, bio, education, mode,
      status: 'pending',
    })

    return NextResponse.json({ success: true, id: tutor._id }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 })
  }
}