




import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import StructuredData from '@/components/shared/StructuredData'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://avenfield-tutors.vercel.app'),
  title: {
    default: 'Avenfield Tutors — Expert Online & Home Tutoring | O Level, A Level, IELTS, MDCAT',
    template: '%s | Avenfield Tutors',
  },
  description:
    'Avenfield Tutors connects students with verified, expert tutors for online and home sessions across Pakistan, UAE & UK. Browse tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects.',
  keywords: [
    'Avenfield Tutors', 'online tutor Pakistan', 'home tutor Lahore',
    'home tutor Islamabad', 'home tutor Karachi', 'private tutor Pakistan',
    'O Level tutor', 'A Level tutor', 'IELTS preparation', 'MDCAT tutor',
    'CSS PMS coaching', 'online tutoring UAE', 'online tutoring UK',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://avenfield-tutors.vercel.app',
    siteName: 'Avenfield Tutors',
    title: 'Avenfield Tutors — Expert Online & Home Tutoring',
    description:
      'Verified tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects. Online worldwide · Home visits in Pakistan, UAE & UK.',
    images: [{ url: '//avenfield.jpeg', width: 1200, height: 630, alt: 'Avenfield Tutors' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avenfield Tutors — Expert Online & Home Tutoring',
    description:
      'Verified tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects.',
    images: ['/avenfield.jpeg'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/avenfield-logo.jpeg',
    apple: '/avenfield-logo.jpeg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FFFDF7]">
         <StructuredData />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}