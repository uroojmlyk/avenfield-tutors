import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://learnovaedu.com'),
  title: {
    default: 'Learnova — Find Trusted Tutors For Every Subject',
    template: '%s | Learnova',
  },
  description:
    'Learnova connects students with verified, experienced tutors for online and home sessions. Browse tutors by subject across Pakistan, UAE, UK and beyond.',
  keywords: [
    'online tutor Pakistan', 'home tutor', 'private tutor', 'O Level tutor',
    'A Level tutor', 'IELTS tutor', 'maths tutor', 'Learnova',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://learnovaedu.com',
    siteName: 'Learnova',
    title: 'Learnova — Find Trusted Tutors For Every Subject',
    description: 'Connect with verified tutors for personalized learning.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learnova — Find Trusted Tutors For Every Subject',
    description: 'Connect with verified tutors for personalized learning.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&family=Jost:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAFAF7]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}