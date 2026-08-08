import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/home-quran-tutor-rawalpindi`

export const metadata: Metadata = {
  title: 'Best Home Quran Tutor in Rawalpindi | Quran Teaching with Tajweed & Hifz',
  description:
    'Find qualified home Quran tutors in Rawalpindi for Nazra Quran, Tajweed, Hifz, and Arabic language. Male & female tutors available for kids and adults. Free demo class.',
  keywords: [
    'home Quran tutor Rawalpindi',
    'Quran tutor Rawalpindi',
    'Quran teacher Rawalpindi',
    'home tuition Rawalpindi',
    'Tajweed tutor Rawalpindi',
    'Hifz tutor Rawalpindi',
    'Nazra Quran tutor',
    'Quran with Tajweed Rawalpindi',
    'Arabic tutor Rawalpindi',
    'Quran learning Rawalpindi',
    'best Quran tutor in Rawalpindi',
    'female Quran tutor Rawalpindi',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Home Quran Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home Quran tutors in Rawalpindi for Nazra Quran, Tajweed, Hifz, and Arabic language. Male & female tutors available. Free demo class.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Home Quran Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home Quran tutors in Rawalpindi for Nazra Quran, Tajweed, Hifz, and Arabic language.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const RAWALPINDI_AREAS = {
  housingSocieties: [
    'Bahria Town Rawalpindi (All Phases)',
    'DHA Rawalpindi (All Phases)',
    'Askari Housing Schemes',
    'Gulraiz Housing Scheme',
    'Westridge Housing Scheme',
    'Saddar',
    'Satellite Town',
    'Chaklala',
    'Adiala Road',
    'Rawat',
    'Sixth Road',
    'Tenant Colony',
    'Lalazar',
    'Peshawar Road',
    'Fazal Town',
    'Sadiqabad',
    'Chah Sultan',
    'Dhoke Kala Khan',
    'Dhoke Ratta',
    'Dhoke Chaudhry',
    'Dhoke Jee',
    'Dhoke Khabba',
    'Dhoke Mohri',
    'Dhoke Syedan',
    'Dhoke Mangal',
    'Dhoke Chohan',
    'Gulshan-e-Abid',
    'Gulshan-e-Asghar',
    'Gulshan-e-Mehran',
    'Gulshan-e-Noor',
    'Gulshan-e-Rafiq',
    'Gulshan-e-Rehman',
    'Gulshan-e-Shaheen',
    'Gulshan-e-Zafar',
  ],
  localities: [
    'Saddar',
    'Satellite Town',
    'Chaklala',
    'Westridge',
    'Gulraiz',
    'Askari',
    'Adiala Road',
    'Rawat',
    'Sixth Road',
    'Tenant Colony',
    'Lalazar',
    'Peshawar Road',
    'Fazal Town',
    'Sadiqabad',
    'Chah Sultan',
    'Dhoke Kala Khan',
    'Dhoke Ratta',
    'Dhoke Chaudhry',
    'Dhoke Jee',
    'Dhoke Khabba',
  ],
  commercial: [
    'Saddar Bazaar',
    'Raja Bazaar',
    'Committee Chowk',
    'Murree Road',
    'Mall Road',
    'Jinnah Road',
    'Bank Road',
    'City Saddar Road',
  ],
}

export default function HomeQuranTutorRawalpindiPage() {
  return (
    <SubjectLandingPage
      subject="Quran"
      city="Rawalpindi"
      slug="home-quran-tutor-rawalpindi"
      pageTitle="Best Home Quran Tutor in Rawalpindi | Quran Teaching with Tajweed & Hifz"
      pageDescription="Find qualified home Quran tutors in Rawalpindi for Nazra Quran, Tajweed, Hifz, and Arabic language. Male & female tutors available for kids and adults. Free demo class."
      metaKeywords={[
        'home Quran tutor Rawalpindi',
        'Quran tutor Rawalpindi',
        'Quran teacher Rawalpindi',
        'home tuition Rawalpindi',
        'Tajweed tutor Rawalpindi',
        'Hifz tutor Rawalpindi',
        'Nazra Quran tutor',
        'Quran with Tajweed Rawalpindi',
        'Arabic tutor Rawalpindi',
        'Quran learning Rawalpindi',
        'best Quran tutor in Rawalpindi',
        'female Quran tutor Rawalpindi',
      ]}
      subjectIcon="🕌"
      subjectEmoji="📖"
      subjectOverview={[
        `Learning the Quran with proper Tajweed and understanding is a spiritual journey that requires expert guidance. For families in Rawalpindi, finding a qualified home Quran tutor who can teach with patience, sincerity, and expertise is essential for developing a strong connection with the Quran. A <a class="blog-link" href="/home-tutor-rawalpindi">home tutor in Rawalpindi</a> specialising in Quran teaching can provide the individual attention needed to master correct pronunciation and recitation.`,
        `At <a class="blog-link" href="/">Avenfield Tutors</a>, we understand that Quran learning is a sacred responsibility. Our qualified Quran tutors in Rawalpindi are certified Islamic scholars and experienced teachers who help students of all ages develop a deep connection with the Quran. Whether your child needs help with <a class="blog-link" href="/tutors?subject=Quran%20%26%20Arabic">Nazra Quran</a>, <a class="blog-link" href="/tutors?subject=Tajweed">Tajweed</a>, <a class="blog-link" href="/tutors?subject=Hifz">Hifz</a>, or <a class="blog-link" href="/tutors?subject=Arabic">Arabic language</a>, our tutors provide the support needed to excel.`,
        `We offer <a class="blog-link" href="/home-tutor-rawalpindi">home tuition in Rawalpindi</a> as well as <a class="blog-link" href="/tutors">online tutoring</a> options, giving families the flexibility to choose the learning format that best suits their needs. Our tutors use proven teaching methodologies, including repetition, listening exercises, and regular progress assessments, to help students build fluency and confidence in their recitation. This approach not only helps students learn the Quran but also fosters a lifelong connection with it.`,
        `Our Quran tutors in Rawalpindi are not just subject experts; they are patient and supportive educators who understand the spiritual and educational importance of Quran learning. They take the time to identify each student's level and address their specific needs, building confidence with every session. With the right guidance, Quran learning can become a rewarding and transformative experience.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">home Quran tutors in Rawalpindi</strong> are certified Islamic scholars and qualified Quran teachers with deep knowledge of the Quran, Tajweed, and Islamic studies. They have extensive experience teaching students of all ages — from young children to adults — and are skilled at making Quran learning accessible and enjoyable. Many of our tutors have formal Ijazah (certification) in Quran recitation.`,
        `We offer <strong class="text-[#2E4F5E]">comprehensive Quran tuition</strong> including Nazra (reading), Tajweed (pronunciation rules), Hifz (memorisation), and Arabic language and Tafseer. Our tutors tailor their approach based on each student's current level, learning pace, and goals — whether it's completing the Quran, memorising specific Surahs, or understanding the meaning of the verses.`,
        `Our tutors focus on <strong class="text-[#2E4F5E]">correct pronunciation (Makharij)</strong>, <strong class="text-[#2E4F5E]">application of Tajweed rules</strong>, and <strong class="text-[#2E4F5E]">consistent practice</strong>. They use proven teaching methodologies, including repetition, listening exercises, and regular progress assessments, to help students build fluency and confidence in their recitation.`,
        `We understand that Quran learning is a spiritual journey that requires patience and dedication. That is why our tutors provide <strong class="text-[#2E4F5E]">positive and encouraging learning environments</strong> that motivate students to stay consistent and develop a lifelong connection with the Quran.`,
      ]}
      examBoards={['Nazra Quran', 'Quran with Tajweed', 'Hifz Program', 'Arabic Language & Tafseer']}
      targetExams={['Quran Completion', 'Hifz Completion', 'Tajweed Certification']}
      commonTopics={[
        'Arabic Alphabets & Pronunciation',
        'Tajweed Rules & Application',
        'Makharij (Articulation Points)',
        'Surah Memorisation',
        'Recitation Practice',
        'Arabic Grammar Basics',
        'Tafseer & Understanding',
        'Duas & Supplications',
        'Islamic Studies Basics',
        'Daily Quran Reading Practice',
      ]}
      whyChoose={[
        'Our Quran tutors in Rawalpindi are <strong>certified Islamic scholars</strong> and qualified Quran teachers with deep knowledge of Tajweed, Hifz, and Arabic, and proven track records of helping students achieve their Quran learning goals.',
        'We provide <strong>personalised lesson plans</strong> tailored to each student\'s current level and goals, ensuring efficient and effective learning of Quran recitation and understanding.',
        'Our tutors use <strong>proven teaching methodologies</strong> including repetition, listening exercises, and regular assessments to help students build fluency, confidence, and a deep connection with the Quran.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Quran learning into your family\'s busy schedule. We also offer separate tutors for children and adults based on their learning needs.',
      ]}
      faqs={[
        {
          q: 'How can I hire a home Quran tutor in Rawalpindi?',
          a: 'Hiring a home Quran tutor in Rawalpindi is simple. Contact <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Avenfield Tutors on WhatsApp</a> with your requirements — whether you need Nazra, Tajweed, Hifz, or Arabic. We will match you with a qualified Quran tutor in your area within 24 hours. A free demo class allows you to assess the tutor before committing to regular sessions.',
        },
        {
          q: 'Do you provide female Quran tutors in Rawalpindi?',
          a: 'Yes, we provide both male and female Quran tutors in Rawalpindi. Parents can request a tutor based on their preference. All our tutors are verified, qualified, and experienced educators. We understand that some families prefer female tutors for their daughters, and we respect and accommodate these preferences.',
        },
        {
          q: 'Do you offer Hifz (Quran memorisation) tutoring?',
          a: 'Yes! We offer comprehensive Hifz programs for students who wish to memorise the Quran. Our tutors use structured memorisation techniques, regular revision schedules, and progress tracking to help students achieve their Hifz goals at a comfortable and sustainable pace. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> for more details.',
        },
        {
          q: 'What are the charges for a home Quran tutor in Rawalpindi?',
          a: 'Tuition charges for home Quran tutors in Rawalpindi vary based on the type of programme (Nazra, Tajweed, Hifz, Arabic) and the tutor\'s experience. Typically, rates range from PKR 1,500 to 3,500 per hour. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive pricing with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free demo class before hiring a tutor?',
          a: 'Yes, we offer a free demo class for all new students. This allows you to assess the tutor\'s teaching style and ensure they are the right fit for your child before committing to regular sessions. The demo class is risk-free and gives you the opportunity to ask questions and discuss your child\'s learning needs in detail.',
        },
        {
          q: 'Which areas of Rawalpindi do your home tutors cover?',
          a: 'Our home Quran tutors cover all major areas of Rawalpindi including Bahria Town, DHA, Saddar, Satellite Town, Chaklala, Westridge, Gulraiz, Askari, Adiala Road, Rawat, Sixth Road, Tenant Colony, Lalazar, Peshawar Road, Fazal Town, Sadiqabad, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
        },
      ]}
      areas={RAWALPINDI_AREAS}
      relatedSubjects={[
        { name: 'Home Math Tutors', href: '/home-math-tutor-rawalpindi', icon: '📐' },
        { name: 'Home Physics Tutors', href: '/home-physics-tutor-rawalpindi', icon: '⚡' },
        { name: 'Home Chemistry Tutors', href: '/home-chemistry-tutor-rawalpindi', icon: '🧪' },
        { name: 'Home Biology Tutors', href: '/home-biology-tutor-rawalpindi', icon: '🧬' },
        { name: 'Home English Tutors', href: '/home-english-tutor-rawalpindi', icon: '📝' },
        { name: 'Home Urdu Tutors', href: '/home-urdu-tutor-rawalpindi', icon: '🖋️' },
        { name: 'Home Computer Science Tutors', href: '/home-computer-science-tutor-rawalpindi', icon: '💻' },
        { name: 'Home Tutor Rawalpindi', href: '/home-tutor-rawalpindi', icon: '🏠' },
        { name: 'Online Tutors', href: '/tutors', icon: '💻' },
        { name: 'O Level Tutors', href: '/o-level-tutor-islamabad', icon: '📚' },
        { name: 'A Level Tutors', href: '/a-level-tutor-islamabad', icon: '🎯' },
        { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
        { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
      ]}
      nearbyCity="Islamabad"
      canonicalUrl={url}
    />
  )
}