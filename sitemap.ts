// import type { MetadataRoute } from 'next'
// import { connectDB } from '@/lib/db'
// import Tutor from '@/lib/models/Tutor'
// import { blogPosts } from '@/lib/blog-posts'

// const BASE_URL = 'https://avenfieldtutors.com'

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   // Static routes
//   const staticRoutes: MetadataRoute.Sitemap = [
//     {
//       url: BASE_URL,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 1,
//     },
//     {
//       url: `${BASE_URL}/tutors`,
//       lastModified: new Date(),
//       changeFrequency: 'daily',
//       priority: 0.9,
//     },
//     {
//       url: `${BASE_URL}/services`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${BASE_URL}/become-tutor`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.7,
//     },
//     {
//       url: `${BASE_URL}/contact`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.6,
//     },
//     {
//       url: `${BASE_URL}/blog`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.7,
//     },
//   ]

//   // Blog post routes
//   const blogRoutes: MetadataRoute.Sitemap = blogPosts.map(post => ({
//     url: `${BASE_URL}/blog/${post.slug}`,
//     lastModified: new Date(post.date),
//     changeFrequency: 'monthly' as const,
//     priority: 0.5,
//   }))

//   // Dynamic tutor profile routes — only approved tutors, so pending/rejected
//   // applications never get indexed
//   let tutorRoutes: MetadataRoute.Sitemap = []
//   try {
//     await connectDB()
//     const tutors = await Tutor.find({ status: 'approved' }, { _id: 1, updatedAt: 1 }).lean()
//     tutorRoutes = tutors.map((tutor: any) => ({
//       url: `${BASE_URL}/tutors/${tutor._id}`,
//       lastModified: tutor.updatedAt ?? new Date(),
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

const BASE_URL = 'https://avenfieldtutors.com'

// Update this manually whenever you actually make meaningful content changes
// to a static page (not on every deploy). Using new Date() here made every
// single page look "modified today" on every build, even when nothing
// changed — a misleading signal to Google.
const LAST_UPDATED = new Date('2026-07-11')

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
  let tutorRoutes: MetadataRoute.Sitemap = []
  try {
    await connectDB()
    const tutors = await Tutor.find({ status: 'approved' }, { _id: 1, updatedAt: 1 }).lean()
    tutorRoutes = tutors.map((tutor: any) => ({
      url: `${BASE_URL}/tutors/${tutor._id}`,
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