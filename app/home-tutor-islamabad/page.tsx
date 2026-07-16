// import type { Metadata } from 'next'
// import CityLandingPage from '@/components/shared/CityLandingPage'

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
// const url = `${SITE_URL}/home-tutor-islamabad`

// export const metadata: Metadata = {
//   title: 'Home Tutor in Islamabad Verified O Level, A Level, IELTS & MDCAT Tutors',
//   description:
//     'Find verified home tutors in Islamabad for O Level, A Level, IELTS, MDCAT and 50+ subjects. Free consultation, direct WhatsApp booking. Covering F-6 to G-15, DHA, Bahria Town and more.',
//   keywords: [
//     'home tutor Islamabad', 'home tuition Islamabad', 'private tutor Islamabad',
//     'O Level tutor Islamabad', 'A Level tutor Islamabad', 'IELTS tutor Islamabad',
//     'MDCAT tutor Islamabad', 'home tutor near me Islamabad',
//   ],
//   alternates: { canonical: url },
//   openGraph: {
//     title: 'Home Tutor in Islamabad | Avenfield Tutors',
//     description: 'Verified home tutors in Islamabad for O Level, A Level, IELTS, MDCAT and 50+ subjects.',
//     type: 'website',
//     locale: 'en_PK',
//     siteName: 'Avenfield Tutors',
//     url,
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Home Tutor in Islamabad | Avenfield Tutors',
//     description: 'Verified home tutors in Islamabad for O Level, A Level, IELTS, MDCAT and 50+ subjects.',
//   },
// }

// const ISLAMABAD_AREAS = [
//   'F-6', 'F-7', 'F-8', 'F-10', 'F-11', 'G-6', 'G-9', 'G-10', 'G-11', 'G-13', 'G-15',
//   'E-7', 'E-11', 'DHA Islamabad', 'Bahria Town', 'Bani Gala', 'PWD', 'Chak Shahzad',
// ]

// export default function HomeTutorIslamabadPage() {
//   return <CityLandingPage city="Islamabad" areas={ISLAMABAD_AREAS} nearbyCity="Rawalpindi" />
// }




// home-tutor-islamabad/page.tsx
import type { Metadata } from 'next'
import CityLandingPage from '@/components/shared/CityLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/home-tutor-islamabad`

export const metadata: Metadata = {
  title: 'Best Home Tutor in Islamabad | O Level, A Level, IELTS & MDCAT | Avenfield Tutors',
  description:
    'Find verified home tutors in Islamabad for O Level, A Level, IELTS, MDCAT & 50+ subjects. Free consultation, direct WhatsApp booking. Covering F-6 to G-15, DHA, Bahria Town & more. 100% verified tutors.',
  keywords: [
    'home tutor Islamabad', 
    'best home tutor in Islamabad',
    'home tuition Islamabad', 
    'private tutor Islamabad',
    'O Level tutor Islamabad', 
    'A Level tutor Islamabad', 
    'IELTS tutor Islamabad',
    'MDCAT tutor Islamabad', 
    'home tutor near me Islamabad',
    'tutor for O Level in Islamabad',
    'tuition teacher in Islamabad',
    'academy in Islamabad',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Home Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified home tutors in Islamabad for O Level, A Level, IELTS, MDCAT and 50+ subjects. Free consultation available.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Home Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified home tutors in Islamabad for O Level, A Level, IELTS, MDCAT and 50+ subjects.',
  },
}

const ISLAMABAD_AREAS = [
  'F-6', 'F-7', 'F-8', 'F-10', 'F-11', 'G-6', 'G-9', 'G-10', 'G-11', 'G-13', 'G-15',
  'E-7', 'E-11', 'DHA Islamabad', 'Bahria Town Islamabad', 'Bani Gala', 'PWD', 'Chak Shahzad',
]

export default function HomeTutorIslamabadPage() {
  return <CityLandingPage city="Islamabad" areas={ISLAMABAD_AREAS} nearbyCity="Rawalpindi" />
}