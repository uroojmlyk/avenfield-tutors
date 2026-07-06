import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become a Tutor – Apply Now | Avenfield Tutors',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become a Tutor | Avenfield Tutors',
    description: 'Apply to teach on Avenfield Tutors connect with motivated students.',
  },
  alternates: {
    canonical: 'https://avenfield-tutors.vercel.app/become-tutor',
  },
}

export default function BecomeTutorLayout({ children }: { children: React.ReactNode }) {
  return children
}