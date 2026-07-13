import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Tutor from '@/lib/models/Tutor'
import { ensureTutorSlug, looksLikeObjectId } from '@/lib/utils/slug'

// This route lives at app/api/tutors/[slug]/route.ts, so the params key
// MUST be `slug` — Next.js names it after the folder, not after whatever
// we call it in comments. Using `id` here was silently reading `undefined`
// on every request, which broke the lookup for every tutor.
//
// `slug` is a real slug for every new link (e.g.
// /tutors/sara-khan-o-level-tutor-lahore), but we still accept a raw
// ObjectId so any old /tutors/<id> link that's already shared or indexed
// keeps working instead of 404ing.
export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB()
    const { slug } = await context.params

    let tutor = await Tutor.findOne({ slug, status: 'approved' }).lean()

    if (!tutor && looksLikeObjectId(slug)) {
      tutor = await Tutor.findOne({ _id: slug, status: 'approved' }).lean()
    }

    if (!tutor) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    // Legacy tutors created before the slug field existed get one now,
    // so every profile self-heals into a clean URL the first time it's viewed.
    await ensureTutorSlug(tutor, Tutor)

    return NextResponse.json(tutor)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch tutor' }, { status: 500 })
  }
}