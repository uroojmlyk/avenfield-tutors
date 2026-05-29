import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Tutor from '@/lib/models/Tutor'

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const { id } = await context.params
    const tutor = await Tutor.findOne({ _id: id, status: 'approved' }).lean()
    if (!tutor) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(tutor)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch tutor' }, { status: 500 })
  }
}