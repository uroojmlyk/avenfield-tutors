// SEO-friendly slug helpers for tutor profile URLs.
// Turns "Sara Khan" + "O Level" + "Lahore" into "sara-khan-o-level-tutor-lahore"
// instead of exposing raw Mongo ObjectIds in the URL.

function slugify(input: string): string {
  return input
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // strip anything that isn't a letter/number/space/hyphen
    .replace(/\s+/g, '-')        // spaces -> hyphens
    .replace(/-+/g, '-')         // collapse repeated hyphens
    .replace(/^-|-$/g, '')       // trim leading/trailing hyphens
}

export function buildTutorSlugBase(name: string, subject: string, city: string): string {
  const parts = [name, subject, 'tutor', city].filter(Boolean)
  return slugify(parts.join(' '))
}

// A Mongo ObjectId is exactly 24 hex characters — used to detect legacy
// /tutors/<id> links so we can 301 them to the new slug URL.
export function looksLikeObjectId(value: string): boolean {
  return /^[a-f0-9]{24}$/i.test(value)
}

// Finds a free slug for this tutor, appending -2, -3, ... on collision.
// `excludeId` lets an existing tutor keep its own slug during backfill.
export async function ensureUniqueSlug(
  base: string,
  TutorModel: any,
  excludeId?: string
): Promise<string> {
  const safeBase = base || 'tutor'
  let candidate = safeBase
  let counter = 2

  // Cap the loop so a pathological case can't hang the request.
  for (let i = 0; i < 50; i++) {
    const query: Record<string, unknown> = { slug: candidate }
    if (excludeId) query._id = { $ne: excludeId }
    const exists = await TutorModel.findOne(query).select('_id').lean()
    if (!exists) return candidate
    candidate = `${safeBase}-${counter}`
    counter++
  }
  // Extremely unlikely fallback: guarantees uniqueness.
  return `${safeBase}-${Date.now()}`
}

// Lazily backfills a slug on tutors created before this field existed.
// Safe to call on every read — after the first run it's a no-op per tutor.
export async function ensureTutorSlug(tutorDoc: any, TutorModel: any): Promise<string> {
  if (tutorDoc.slug) return tutorDoc.slug

  const base = buildTutorSlugBase(
    tutorDoc.name || 'tutor',
    Array.isArray(tutorDoc.subjects) ? tutorDoc.subjects[0] : '',
    tutorDoc.city || ''
  )
  const slug = await ensureUniqueSlug(base, TutorModel, String(tutorDoc._id))
  await TutorModel.updateOne({ _id: tutorDoc._id }, { $set: { slug } })
  tutorDoc.slug = slug
  return slug
}