import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/quran-tutor-islamabad`

export const metadata: Metadata = {
  title: 'Best Quran Tutor in Islamabad | Quran Teaching with Tajweed & Arabic',
  description:
    'Find verified Quran tutors in Islamabad for Quran reading, Tajweed, Hifz, and Arabic language. Expert tuition for kids and adults with proper pronunciation and understanding. Free consultation.',
  keywords: [
    'Quran tutor Islamabad',
    'Quran teaching Islamabad',
    'Quran teacher Islamabad',
    'best Quran tutor in Islamabad',
    'Quran home tutor Islamabad',
    'Tajweed tutor Islamabad',
    'Hifz tutor Islamabad',
    'Arabic tutor Islamabad',
    'Quran learning Islamabad',
    'Quran teacher near me Islamabad',
    'online Quran tutor Islamabad',
    'Quran with Tajweed Islamabad',
    'Quran for kids Islamabad',
    'Nazra Quran tutor',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Quran Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified Quran tutors in Islamabad for Quran reading, Tajweed, Hifz, and Arabic language. Expert tuition for kids and adults. Free consultation available.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Quran Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified Quran tutors in Islamabad for Quran reading, Tajweed, Hifz, and Arabic language.',
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

const ISLAMABAD_AREAS = {
  sectors: [
    'F-5', 'F-6', 'F-7', 'F-8', 'F-10', 'F-11', 'F-15', 'F-17',
    'G-5', 'G-6', 'G-7', 'G-8', 'G-9', 'G-10', 'G-11', 'G-13', 'G-14', 'G-15', 'G-16',
    'E-7', 'E-8', 'E-11', 'E-16', 'E-17',
    'D-12', 'D-17',
    'I-8', 'I-9', 'I-10', 'I-11', 'I-12', 'I-14',
    'B-10', 'B-11', 'B-12', 'B-15', 'B-17',
    'C-12', 'C-14', 'C-15', 'C-16', 'C-17',
    'H-8', 'H-9', 'H-10', 'H-11', 'H-12', 'H-13',
  ],
  housingSocieties: [
    'DHA Islamabad (All Phases)',
    'Bahria Enclave',
    'Gulberg Greens',
    'Gulberg Residencia',
    'Naval Anchorage',
    'Park View City',
    'Capital Smart City',
    'Top City-1',
    'University Town',
    'Faisal Town',
    'Mumtaz City',
    'Multi Gardens B-17',
    'MPCHS',
    'Faisal Hills',
    'Eighteen Islamabad',
    'Blue World City',
    'Kingdom Valley',
    'Discovery Gardens',
    'PECHS',
    'CBR Town',
    'Pakistan Town',
    'Soan Garden',
    'River Garden',
    'Jinnah Gardens',
    'PWD Housing Society',
    'Korang Town',
    'Korang Enclave',
    'Media Town',
    'FGEHA Housing Scheme',
    'OPF Housing Scheme',
    'Gulshan-e-Sehat',
    'Doctors Housing Society',
    'Engineers Cooperative Housing Society',
  ],
  localities: [
    'Bani Gala',
    'Chak Shahzad',
    'Bhara Kahu',
    'Shah Allah Ditta',
    'Bari Imam',
    'Saidpur',
    'Rawal Town',
    'Model Town Humak',
    'Humak',
    'Sihala',
    'Tarlai',
    'Lehtrar Road',
    'Nilore',
    'Simly Dam Road',
    'Tramri',
    'Khanna',
    'Koral',
    'Loi Bher',
    'Alipur Farash',
    'Golra',
    'Tarnol',
    'Sangjani',
    'Golra Sharif',
    'Noon',
    'Kirpa',
    'Phulgran',
    'Jhangi Syedan',
    'Islamabad Expressway Corridor',
  ],
  commercial: [
    'Diplomatic Enclave',
    'Blue Area',
    'Red Zone',
    'Constitution Avenue',
    'Melody',
    'Aabpara',
    'Super Market',
    'Jinnah Super',
    'Sitara Market',
    'Karachi Company',
    'F-10 Markaz',
    'F-11 Markaz',
    'I-8 Markaz',
  ],
}

export default function QuranTutorIslamabadPage() {
  return (
    <SubjectLandingPage
      subject="Quran"
      city="Islamabad"
      slug="quran-tutor-islamabad"
      pageTitle="Best Quran Tutor in Islamabad | Quran Teaching with Tajweed & Arabic"
      pageDescription="Find verified Quran tutors in Islamabad for Quran reading, Tajweed, Hifz, and Arabic language. Expert tuition for kids and adults with proper pronunciation and understanding. Free consultation."
      metaKeywords={[
        'Quran tutor Islamabad',
        'Quran teaching Islamabad',
        'Quran teacher Islamabad',
        'best Quran tutor in Islamabad',
        'Quran home tutor Islamabad',
        'Tajweed tutor Islamabad',
        'Hifz tutor Islamabad',
        'Arabic tutor Islamabad',
        'Quran learning Islamabad',
        'Quran teacher near me Islamabad',
        'online Quran tutor Islamabad',
        'Quran with Tajweed Islamabad',
        'Quran for kids Islamabad',
        'Nazra Quran tutor',
      ]}
      subjectIcon="🕌"
      subjectEmoji="📖"
      subjectOverview={[
        `The <a href="/tutors?subject=Quran%20%26%20Arabic&city=Islamabad" class="text-[#E05C42] hover:underline font-black">Quran tutor in Islamabad</a> market is growing as more families seek qualified teachers to help their children and themselves learn Quran with proper Tajweed and understanding. Learning the Quran is a spiritual and educational journey that requires expert guidance to ensure correct pronunciation, recitation, and comprehension. Our verified Quran tutors in Islamabad help students of all ages develop a deep connection with the Quran through structured, personalised instruction.`,
        `Whether you need <a href="/tutors?subject=Quran&type=Nazra&city=Islamabad" class="text-[#E05C42] hover:underline font-black">Nazra Quran</a> with proper <a href="/tutors?subject=Quran&type=Tajweed&city=Islamabad" class="text-[#E05C42] hover:underline font-black">Tajweed</a>, <a href="/tutors?subject=Quran&type=Hifz&city=Islamabad" class="text-[#E05C42} hover:underline font-black">Hifz</a> (memorisation), or <a href="/tutors?subject=Arabic&city=Islamabad" class="text-[#E05C42} hover:underline font-black">Arabic language</a> and Tafseer, our experienced tutors provide personalised support tailored to each student's level and goals. They understand the importance of correct pronunciation (Makharij) and the rules of Tajweed, ensuring that students recite the Quran as it was revealed.`,
        `With a focus on building a strong foundation and consistent practice, our <a href="/home-tutor-islamabad" class="text-[#E05C42} hover:underline font-black">home tutors in Islamabad</a> provide the undivided attention that Quran learning requires. This personalised approach is particularly effective for children, who benefit from structured lessons, positive reinforcement, and a comfortable learning environment.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">Quran tutors in Islamabad</strong> are qualified Islamic scholars and certified Quran teachers with deep knowledge of the Quran, Tajweed, and Islamic studies. They have extensive experience teaching students of all ages — from young children to adults — and are skilled at making Quran learning accessible and enjoyable.`,
        `We offer <strong class="text-[#2E4F5E]">comprehensive Quran tuition</strong> including <strong class="text-[#2E4F5E]">Nazra (reading)</strong>, <strong class="text-[#2E4F5E]">Tajweed (pronunciation rules)</strong>, <strong class="text-[#2E4F5E]">Hifz (memorisation)</strong>, and <strong class="text-[#2E4F5E]">Arabic language and Tafseer</strong>. Our tutors tailor their approach based on each student's current level, learning pace, and goals — whether it's completing the Quran, memorising specific Surahs, or understanding the meaning of the verses.`,
        `Our tutors focus on <strong class="text-[#2E4F5E]">correct pronunciation (Makharij)</strong>, <strong class="text-[#2E4F5E]">application of Tajweed rules</strong>, and <strong class="text-[#2E4F5E]">consistent practice</strong>. They use proven teaching methodologies, including repetition, listening exercises, and regular progress assessments, to help students build fluency and confidence in their recitation.`,
        `We understand that Quran learning is a spiritual journey that requires patience and dedication. That's why our tutors provide <strong class="text-[#2E4F5E]">positive and encouraging learning environments</strong> that motivate students to stay consistent and develop a lifelong connection with the Quran.`,
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
        'Our Quran tutors in Islamabad are <strong>certified Islamic scholars</strong> and qualified Quran teachers with deep knowledge of Tajweed, Hifz, and Arabic, and proven track records of helping students achieve their Quran learning goals.',
        'We provide <strong>personalised lesson plans</strong> tailored to each student\'s current level and goals, ensuring efficient and effective learning of Quran recitation and understanding.',
        'Our tutors use <strong>proven teaching methodologies</strong> including repetition, listening exercises, and regular assessments to help students build fluency, confidence, and a deep connection with the Quran.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Quran learning into your family\'s busy schedule. We also offer separate tutors for children and adults based on their learning needs.',
      ]}
      faqs={[
        {
          q: 'What qualifications do your Quran tutors in Islamabad have?',
          a: 'All our Quran tutors are certified Islamic scholars or qualified Quran teachers with deep knowledge of Tajweed, Hifz, and Arabic. They have extensive experience teaching students of all ages and are skilled at making Quran learning accessible and enjoyable. Many tutors have formal Ijazah (certification) in Quran recitation.',
        },
        {
          q: 'Do you offer Quran tuition for children?',
          a: 'Yes! We have specialised Quran tutors who are experienced in teaching children. They use engaging methods, positive reinforcement, and age-appropriate lessons to help children learn Quran reading, Tajweed, and memorisation in a fun and nurturing environment.',
        },
        {
          q: 'Do you offer Hifz (Quran memorisation) tutoring?',
          a: 'Yes! We offer comprehensive Hifz programs for students who wish to memorise the Quran. Our tutors use structured memorisation techniques, regular revision schedules, and progress tracking to help students achieve their Hifz goals at a comfortable and sustainable pace.',
        },
        {
          q: 'Can I learn Quran with Tajweed without prior knowledge?',
          a: 'Absolutely! We welcome beginners of all ages. Our tutors start with the basics of Arabic alphabets and pronunciation, gradually introducing Tajweed rules as students build their reading skills. Everyone can start their Quran learning journey with us at any level.',
        },
        {
          q: 'How much do Quran tutors in Islamabad charge?',
          a: 'Quran tutor rates in Islamabad vary based on the type of programme (Nazra, Tajweed, Hifz, Arabic), the tutor\'s experience, and the student\'s level. Typically, rates range from PKR 1,500 to 3,500 per hour for home tuition. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote.',
        },
        {
          q: 'Which areas of Islamabad do your home tutors cover?',
          a: 'Our Quran home tutors cover all major areas of Islamabad including F-5 to F-17, G-5 to G-16, E-7 to E-17, D-12, I-8 to I-14, B-10 to B-17, C-12 to C-17, H-8 to H-13, DHA Islamabad (all phases), Bahria Enclave, Gulberg Greens, Park View City, Capital Smart City, and many more. If you don\'t see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we\'ll confirm availability.',
        },
      ]}
      areas={ISLAMABAD_AREAS}
    //   relatedSubjects={[
    //     { name: 'O Level Tutors', href: '/o-level-tutor-islamabad', icon: '📚' },
    //     { name: 'A Level Tutors', href: '/a-level-tutor-islamabad', icon: '🎯' },
    //     { name: 'IELTS Tutors', href: '/ielts-tutor-islamabad', icon: '🎓' },
    //     { name: 'MDCAT Tutors', href: '/mdcat-tutor-islamabad', icon: '🩺' },
    //     { name: 'English Tutors', href: '/english-tutor-islamabad', icon: '📝' },
    //     { name: 'Urdu Tutors', href: '/urdu-tutor-islamabad', icon: '🖋️' },
    //     { name: 'Computer Science Tutors', href: '/computer-science-tutor-islamabad', icon: '💻' },
    //     { name: 'Mathematics Tutors', href: '/math-tutor-islamabad', icon: '📐' },
    //   ]}
    relatedSubjects={[
  { name: 'O Level Tutors', href: '/o-level-tutor-islamabad', icon: '📚' },
  { name: 'A Level Tutors', href: '/a-level-tutor-islamabad', icon: '🎯' },
  { name: 'IELTS Tutors', href: '/ielts-tutor-islamabad', icon: '🎓' },
  { name: 'MDCAT Tutors', href: '/mdcat-tutor-islamabad', icon: '🩺' },
  { name: 'Biology Tutors', href: '/biology-tutor-islamabad', icon: '🧬' },
  { name: 'Chemistry Tutors', href: '/chemistry-tutor-islamabad', icon: '🧪' },
  { name: 'Physics Tutors', href: '/physics-tutor-islamabad', icon: '⚡' },
  { name: 'Mathematics Tutors', href: '/math-tutor-islamabad', icon: '📐' },
  { name: 'Computer Science Tutors', href: '/computer-science-tutor-islamabad', icon: '💻' },
  { name: 'English Tutors', href: '/english-tutor-islamabad', icon: '📝' },
  { name: 'Urdu Tutors', href: '/urdu-tutor-islamabad', icon: '🖋️' },
  { name: 'Arabic Tutors', href: '/tutors?subject=Arabic&city=Islamabad', icon: '📖' },
]}
      nearbyCity="Rawalpindi"
      canonicalUrl={url}
    />
  )
}