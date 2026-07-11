import type { Metadata } from 'next'

// ⚠️ SITE_URL: falls back to your live custom domain if the env var isn't
// set for some reason — safer than letting it become "undefined" at runtime.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'

export const metadata: Metadata = {
  // NOTE: no "| Avenfield Tutors" suffix here — app/layout.tsx already has
  // title.template: '%s | Avenfield Tutors', so it's appended automatically.
  title: 'Online & Home Tutoring Services in Pakistan | O Level, A Level, IELTS, MDCAT',

  description:
    'Find verified online and home tutoring services for O Level, A Level, IGCSE, IELTS, MDCAT, CSS and 50+ subjects in Lahore, Karachi, Islamabad & worldwide. 500+ qualified tutors. Book a verified online or home tutor today.',

  keywords: [
    'online tutoring services Pakistan',
    'home tuition services Pakistan',
    'online tutors Pakistan',
    'home tutors Pakistan',
    'O Level tutoring',
    'A Level tutoring',
    'IELTS tutoring',
    'MDCAT tutoring',
    'CSS coaching',
    'private tutoring',
    'verified tutors',
    'Avenfield Tutors services',
  ],

  openGraph: {
    title: 'Online & Home Tutoring Services in Pakistan | O Level, A Level, IELTS & MDCAT | Avenfield Tutors',
    description:
      'Find verified online and home tutoring for O Level, A Level, IGCSE, IELTS, MDCAT, CSS and 50+ subjects. 500+ qualified tutors in Lahore, Karachi, Islamabad & worldwide.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url: `${SITE_URL}/services`,
    images: [
      {
        url: `${SITE_URL}/avenfieldtutors-newlogo.png`,
        width: 1200,
        height: 630,
        alt: 'Avenfield Tutors - Online and Home Tutoring Services in Pakistan',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Online & Home Tutoring Services in Pakistan | Avenfield Tutors',
    description:
      'Find verified online and home tutoring for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects. 500+ qualified tutors.',
    images: [`${SITE_URL}/avenfieldtutors-newlogo.png`],
  },

  alternates: {
    canonical: `${SITE_URL}/services`,
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}