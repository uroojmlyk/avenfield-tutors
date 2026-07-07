// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Tutoring Services – Online & Home Tuition | Avenfield Tutors',
//   description:
//     'Avenfield Tutors offers verified online and home tutoring for O Level, A Level, IELTS, MDCAT, CSS/PMS and 50+ subjects across Pakistan, UAE & UK.',
//   keywords: [
//     'online tutoring Pakistan', 'home tuition Lahore', 'O Level tutor',
//     'A Level tutor', 'IELTS coaching', 'MDCAT preparation', 'CSS PMS coaching',
//     'Avenfield Tutors services',
//   ],
//   openGraph: {
//     title: 'Tutoring Services – Online & Home Tuition | Avenfield Tutors',
//     description:
//       'Expert online and home tutoring for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects. Verified tutors. Flexible schedules.',
//     type: 'website',
//     locale: 'en_PK',
//     siteName: 'Avenfield Tutors',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Tutoring Services | Avenfield Tutors',
//     description: 'Verified online and home tutoring across Pakistan, UAE & UK.',
//   },
//   alternates: {
//     canonical: 'https://avenfield-tutors.vercel.app/services',
//   },
// }

// export default function ServicesLayout({ children }: { children: React.ReactNode }) {
//   return children
// }




import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Online & Home Tutoring Services in Pakistan | O Level, A Level, IELTS, MDCAT | Avenfield Tutors',

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
    title:
      'Online & Home Tutoring Services in Pakistan | O Level, A Level, IELTS & MDCAT',

    description:
      'Find verified online and home tutoring for O Level, A Level, IGCSE, IELTS, MDCAT, CSS and 50+ subjects. 500+ qualified tutors in Lahore, Karachi, Islamabad & worldwide.',

    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',

    url: `${process.env.NEXT_PUBLIC_SITE_URL!}/services`,

    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL!}/avenfield.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Avenfield Tutors - Online and Home Tutoring Services in Pakistan',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Online & Home Tutoring Services in Pakistan | Avenfield Tutors',

    description:
      'Find verified online and home tutoring for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects. 500+ qualified tutors.',

    images: [
      `${process.env.NEXT_PUBLIC_SITE_URL!}/avenfield.jpeg`,
    ],
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL!}/services`,
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}