import type { Metadata } from 'next'

// ⚠️ SITE_URL: falls back to your live custom domain if the env var isn't
// set for some reason — safer than letting it become "undefined" at runtime.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'

export const metadata: Metadata = {
  // NOTE: no "| Avenfield Tutors" suffix here — app/layout.tsx already has
  // title.template: '%s | Avenfield Tutors', so it's appended automatically.
  title: 'Become a Tutor – Apply Now',
  description:
    'Apply to become a verified tutor at Avenfield Tutors. Teach O Level, A Level, IELTS, MDCAT, CSS/PMS and more — connect with motivated students, no marketing needed.',
  keywords: [
    'become a tutor Pakistan', 'online tutoring jobs', 'teach O Level',
    'teach A Level', 'tutor application', 'Avenfield Tutors apply',
  ],
  openGraph: {
    title: 'Become a Tutor – Apply Now | Avenfield Tutors',
    description:
      'Share your knowledge and earn what you deserve. Apply to teach on Avenfield Tutors today.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url: `${SITE_URL}/become-tutor`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become a Tutor | Avenfield Tutors',
    description: 'Apply to teach on Avenfield Tutors connect with motivated students.',
  },
  alternates: {
    canonical: `${SITE_URL}/become-tutor`,
  },
}

export default function BecomeTutorLayout({ children }: { children: React.ReactNode }) {
  return children
}