import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Tutor from '@/lib/models/Tutor'

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const { id } = await context.params
    const body = await req.json()

    const allowed = ['name','subjects','experience','city','country','whatsapp','bio','education','mode','imageUrl','status']
    const updates: Record<string, unknown> = {}
    for (const key of allowed) {
      if (body[key] !== undefined) updates[key] = body[key]
    }

    if (updates.status && !['approved','rejected','pending'].includes(updates.status as string)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
    }

    const tutor = await Tutor.findByIdAndUpdate(id, updates, { returnDocument: 'after' })
    if (!tutor) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    return NextResponse.json({ success: true, tutor })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
  }
}

export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const { id } = await context.params
    await Tutor.findByIdAndDelete(id)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 })
  }
}