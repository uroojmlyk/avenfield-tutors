import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Tutor from '@/lib/models/Tutor'

// GET — all tutors filtered by status (middleware handles auth)
export async function GET(req: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(req.url)
    const status = searchParams.get('status') || 'pending'
    const tutors = await Tutor.find({ status }).sort({ createdAt: -1 }).lean()
    return NextResponse.json(tutors)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
}