import type { MetadataRoute } from 'next'
import { connectDB } from '@/lib/db'
import Tutor from '@/lib/models/Tutor'

// ⚠️ IMPORTANT: make sure this matches whatever domain you actually submit
// to Google Search Console. Right now your metadataBase (layout.tsx) uses
// avenfield-tutors.vercel.app, but some pages' canonical tags point to
// www.avenfieldtutors.com. Pick ONE live domain and use it everywhere —
// mixing both confuses Google about which URL is the "real" one.
const BASE_URL = 'https://avenfield-tutors.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/tutors`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/become-tutor`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Dynamic tutor profile routes — only approved tutors, so pending/rejected
  // applications never get indexed
  let tutorRoutes: MetadataRoute.Sitemap = []
  try {
    await connectDB()
    const tutors = await Tutor.find({ status: 'approved' }, { _id: 1, updatedAt: 1 }).lean()
    tutorRoutes = tutors.map((tutor: any) => ({
      url: `${BASE_URL}/tutors/${tutor._id}`,
      lastModified: tutor.updatedAt ?? new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  } catch {
    // If DB isn't reachable at build time, still ship the static routes
    tutorRoutes = []
  }

  return [...staticRoutes, ...tutorRoutes]
}