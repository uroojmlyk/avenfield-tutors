



// import type { MetadataRoute } from 'next'
// import { connectDB } from '@/lib/db'
// import Tutor from '@/lib/models/Tutor'
// import { blogPosts } from '@/lib/blog-posts'
// import { ensureTutorSlug } from '@/lib/utils/slug'
// const BASE_URL = 'https://avenfieldtutors.com'

// // Update this manually whenever you actually make meaningful content changes
// // to a static page (not on every deploy). Using new Date() here made every
// // single page look "modified today" on every build, even when nothing
// // changed — a misleading signal to Google.
// const LAST_UPDATED = new Date('2026-07-23') // ← optional: aaj ki date bhi kar sakte ho

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   // Static routes
//   const staticRoutes: MetadataRoute.Sitemap = [
//     {
//       url: BASE_URL,
//       lastModified: LAST_UPDATED,
//       changeFrequency: 'weekly',
//       priority: 1,
//     },
//     {
//       url: `${BASE_URL}/tutors`,
//       lastModified: LAST_UPDATED,
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${BASE_URL}/services`,
//       lastModified: LAST_UPDATED,
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${BASE_URL}/home-tutor-islamabad`,
//       lastModified: LAST_UPDATED,
//       changeFrequency: 'monthly',
//       priority: 0.85,
//     },
//     {
//       url: `${BASE_URL}/home-tutor-rawalpindi`,
//       lastModified: LAST_UPDATED,
//       changeFrequency: 'monthly',
//       priority: 0.85,
//     },
//     {
//       url: `${BASE_URL}/home-tutor-lahore`,
//       lastModified: LAST_UPDATED,
//       changeFrequency: 'monthly',
//       priority: 0.85,
//     },
//     // ─── ✅ NEW SUBJECT PAGES (Islamabad) ───
//     {
//       url: `${BASE_URL}/o-level-tutor-islamabad`,
//       lastModified: LAST_UPDATED,
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${BASE_URL}/a-level-tutor-islamabad`,
//       lastModified: LAST_UPDATED,
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${BASE_URL}/ielts-tutor-islamabad`,
//       lastModified: LAST_UPDATED,
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${BASE_URL}/mdcat-tutor-islamabad`,
//       lastModified: LAST_UPDATED,
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     // ─── ──────────────────────────────── ───
//     {
//       url: `${BASE_URL}/become-tutor`,
//       lastModified: LAST_UPDATED,
//       changeFrequency: 'monthly',
//       priority: 0.7,
//     },
//     {
//       url: `${BASE_URL}/contact`,
//       lastModified: LAST_UPDATED,
//       changeFrequency: 'monthly',
//       priority: 0.6,
//     },
//     {
//       url: `${BASE_URL}/blog`,
//       lastModified: LAST_UPDATED,
//       changeFrequency: 'weekly',
//       priority: 0.7,
//     },
//   ]

//   // Blog post routes — these correctly use each post's real publish date already
//   const blogRoutes: MetadataRoute.Sitemap = blogPosts.map(post => ({
//     url: `${BASE_URL}/blog/${post.slug}`,
//     lastModified: new Date(post.date),
//     changeFrequency: 'monthly' as const,
//     priority: 0.5,
//   }))

//   // Dynamic tutor profile routes — only approved tutors, so pending/rejected
//   // applications never get indexed. These correctly use each tutor's real
//   // updatedAt from the database already.
//   //
//   // URLs use each tutor's SEO slug (e.g. /tutors/sara-khan-o-level-tutor-lahore)
//   // instead of the raw Mongo _id — readable, keyword-rich URLs instead of
//   // /tutors/64f3a2b1c9e77a1234567890. Legacy tutors without a slug yet are
//   // backfilled here too, so the sitemap never emits a bare ObjectId URL.
//   let tutorRoutes: MetadataRoute.Sitemap = []
//   try {
//     await connectDB()
//     const tutors = await Tutor.find(
//       { status: 'approved' },
//       { _id: 1, slug: 1, name: 1, subjects: 1, city: 1, updatedAt: 1 }
//     ).lean()

//     await Promise.all(
//       tutors.map((t: any) => (t.slug ? Promise.resolve() : ensureTutorSlug(t, Tutor)))
//     )

//     tutorRoutes = tutors.map((tutor: any) => ({
//       url: `${BASE_URL}/tutors/${tutor.slug}`,
//       lastModified: tutor.updatedAt ?? LAST_UPDATED,
//       changeFrequency: 'weekly' as const,
//       priority: 0.6,
//     }))
//   } catch {
//     // If DB isn't reachable at build time, still ship the static routes
//     tutorRoutes = []
//   }

//   return [...staticRoutes, ...blogRoutes, ...tutorRoutes]
// }






import type { MetadataRoute } from 'next'
import { connectDB } from '@/lib/db'
import Tutor from '@/lib/models/Tutor'
import { blogPosts } from '@/lib/blog-posts'
import { ensureTutorSlug } from '@/lib/utils/slug'
const BASE_URL = 'https://avenfieldtutors.com'

// Update this manually whenever you actually make meaningful content changes
// to a static page (not on every deploy). Using new Date() here made every
// single page look "modified today" on every build, even when nothing
// changed — a misleading signal to Google.
const LAST_UPDATED = new Date('2026-07-23')

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/tutors`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/home-tutor-islamabad`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/home-tutor-rawalpindi`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/home-tutor-lahore`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // ─── SUBJECT PAGES (Islamabad) ───
    {
      url: `${BASE_URL}/o-level-tutor-islamabad`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/a-level-tutor-islamabad`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ielts-tutor-islamabad`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/mdcat-tutor-islamabad`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ─── ✅ NEW SUBJECT PAGES (Added Today) ───
    {
      url: `${BASE_URL}/biology-tutor-islamabad`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/chemistry-tutor-islamabad`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/physics-tutor-islamabad`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/math-tutor-islamabad`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ─── ───────────────────────────────────── ───
    {
      url: `${BASE_URL}/become-tutor`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  // Blog post routes — these correctly use each post's real publish date already
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  // Dynamic tutor profile routes — only approved tutors, so pending/rejected
  // applications never get indexed. These correctly use each tutor's real
  // updatedAt from the database already.
  //
  // URLs use each tutor's SEO slug (e.g. /tutors/sara-khan-o-level-tutor-lahore)
  // instead of the raw Mongo _id — readable, keyword-rich URLs instead of
  // /tutors/64f3a2b1c9e77a1234567890. Legacy tutors without a slug yet are
  // backfilled here too, so the sitemap never emits a bare ObjectId URL.
  let tutorRoutes: MetadataRoute.Sitemap = []
  try {
    await connectDB()
    const tutors = await Tutor.find(
      { status: 'approved' },
      { _id: 1, slug: 1, name: 1, subjects: 1, city: 1, updatedAt: 1 }
    ).lean()

    await Promise.all(
      tutors.map((t: any) => (t.slug ? Promise.resolve() : ensureTutorSlug(t, Tutor)))
    )

    tutorRoutes = tutors.map((tutor: any) => ({
      url: `${BASE_URL}/tutors/${tutor.slug}`,
      lastModified: tutor.updatedAt ?? LAST_UPDATED,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  } catch {
    // If DB isn't reachable at build time, still ship the static routes
    tutorRoutes = []
  }

  return [...staticRoutes, ...blogRoutes, ...tutorRoutes]
}