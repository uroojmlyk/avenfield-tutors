// import type { Metadata } from 'next'
// import CityLandingPage from '@/components/shared/CityLandingPage'

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
// const url = `${SITE_URL}/home-tutor-rawalpindi`

// export const metadata: Metadata = {
//   title: 'Home Tutor in Rawalpindi — Verified O Level, A Level, IELTS & MDCAT Tutors',
//   description:
//     'Find verified home tutors in Rawalpindi for O Level, A Level, IELTS, MDCAT and 50+ subjects. Free consultation, direct WhatsApp booking. Covering Satellite Town, Bahria Town, Askari and more.',
//   keywords: [
//     'home tutor Rawalpindi', 'home tuition Rawalpindi', 'private tutor Rawalpindi',
//     'O Level tutor Rawalpindi', 'A Level tutor Rawalpindi', 'IELTS tutor Rawalpindi',
//     'MDCAT tutor Rawalpindi', 'home tutor near me Rawalpindi',
//   ],
//   alternates: { canonical: url },
//   openGraph: {
//     title: 'Home Tutor in Rawalpindi | Avenfield Tutors',
//     description: 'Verified home tutors in Rawalpindi for O Level, A Level, IELTS, MDCAT and 50+ subjects.',
//     type: 'website',
//     locale: 'en_PK',
//     siteName: 'Avenfield Tutors',
//     url,
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Home Tutor in Rawalpindi | Avenfield Tutors',
//     description: 'Verified home tutors in Rawalpindi for O Level, A Level, IELTS, MDCAT and 50+ subjects.',
//   },
// }

// const RAWALPINDI_AREAS = [
//   'Satellite Town', 'Bahria Town Rawalpindi', 'Askari', 'Chaklala', 'Westridge',
//   'Cantt', 'Gulraiz', 'Adiala Road', 'Committee Chowk', 'Saddar', 'Peshawar Road',
// ]

// export default function HomeTutorRawalpindiPage() {
//   return <CityLandingPage city="Rawalpindi" areas={RAWALPINDI_AREAS} nearbyCity="Islamabad" />
// }





// home-tutor-rawalpindi/page.tsx
import type { Metadata } from 'next'
import CityLandingPage from '@/components/shared/CityLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/home-tutor-rawalpindi`

export const metadata: Metadata = {
  title: 'Best Home Tutor in Rawalpindi | O Level, A Level, IELTS & MDCAT | Avenfield Tutors',
  description:
    'Find verified home tutors in Rawalpindi for O Level, A Level, IELTS, MDCAT & 50+ subjects. Free consultation, direct WhatsApp booking. Covering Satellite Town, Bahria Town, Askari & more. Qualified tutors available.',
  keywords: [
    'home tutor Rawalpindi', 
    'best home tutor in Rawalpindi',
    'home tuition Rawalpindi', 
    'private tutor Rawalpindi',
    'O Level tutor Rawalpindi', 
    'A Level tutor Rawalpindi', 
    'IELTS tutor Rawalpindi',
    'MDCAT tutor Rawalpindi', 
    'home tutor near me Rawalpindi',
    'tutor for O Level in Rawalpindi',
    'tuition teacher in Rawalpindi',
    'academy in Rawalpindi',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Home Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Verified home tutors in Rawalpindi for O Level, A Level, IELTS, MDCAT and 50+ subjects. Free consultation available.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Home Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Verified home tutors in Rawalpindi for O Level, A Level, IELTS, MDCAT and 50+ subjects.',
  },
}

const RAWALPINDI_AREAS = [
  'Satellite Town', 'Bahria Town Rawalpindi', 'Askari', 'Chaklala', 'Westridge',
  'Rawalpindi Cantt', 'Gulraiz', 'Adiala Road', 'Committee Chowk', 'Saddar', 'Peshawar Road',
]

export default function HomeTutorRawalpindiPage() {
  return <CityLandingPage city="Rawalpindi" areas={RAWALPINDI_AREAS} nearbyCity="Islamabad" />
}