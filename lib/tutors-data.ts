import { unstable_cache } from 'next/cache'
import { connectDB } from '@/lib/db'
import Tutor from '@/lib/models/Tutor'
import { ensureTutorSlug } from '@/lib/utils/slug'

// Same query logic as app/api/tutors/route.ts, but called directly from the
// server components. This skips the HTTP round trip to our own API (which was
// slow on every request) and caches the result for 60 seconds, so repeated
// visits and navigation do not hit MongoDB each time.
async function queryTutors(subject: string, limit: number) {
  await connectDB()

  const query: Record<string, unknown> = { status: 'approved' }

  if (subject && subject !== 'All') {
    const escaped = subject.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const pattern = new RegExp(escaped, 'i')
    query.$or = [
      { subjects: { $elemMatch: { $regex: pattern } } },
      { bio: { $regex: pattern } },
    ]
  }

  let q = Tutor.find(query).sort({ createdAt: -1 })
  if (limit > 0) q = q.limit(limit)

  const tutors: any[] = await q.lean()

  // Backfill slug for old tutors (only runs for tutors that have no slug yet)
  await Promise.all(tutors.map((t) => (t.slug ? Promise.resolve() : ensureTutorSlug(t, Tutor))))

  // JSON round trip converts ObjectId and Date to plain strings, which is the
  // exact shape the API used to return, so ITutor consumers stay unchanged.
  return JSON.parse(JSON.stringify(tutors))
}

const cachedTutors = unstable_cache(queryTutors, ['tutors-list-v1'], {
  revalidate: 60,
  tags: ['tutors'],
})

export async function getTutors(opts: { subject?: string; limit?: number } = {}) {
  return cachedTutors(opts.subject ?? '', opts.limit ?? 0)
}