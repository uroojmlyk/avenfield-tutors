import type { MetadataRoute } from 'next'

// ⚠️ Keep this in sync with the BASE_URL in sitemap.ts (same domain question applies)
const BASE_URL = 'https://avenfield-tutors.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/login', '/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}