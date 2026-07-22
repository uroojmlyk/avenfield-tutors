// import type { Metadata } from 'next'
// import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
// const url = `${SITE_URL}/o-level-tutor-islamabad`

// export const metadata: Metadata = {
//   title: 'Best O Level Tutor in Islamabad | Cambridge O Level Tuition',
//   description:
//     'Find verified O Level tutors in Islamabad for Cambridge CAIE & Edexcel. Expert tuition for all subjects — Mathematics, Physics, Chemistry, Biology, English & more. Free consultation.',
//   keywords: [
//     'O Level tutor Islamabad',
//     'O Level tuition Islamabad',
//     'Cambridge O Level tutor',
//     'O Level teacher Islamabad',
//     'best O Level tutor in Islamabad',
//     'O Level home tutor Islamabad',
//     'CAIE O Level tutor',
//     'Edexcel O Level tutor',
//     'O Level Maths tutor',
//     'O Level Physics tutor',
//     'O Level Chemistry tutor',
//     'O Level Biology tutor',
//     'O Level English tutor',
//     'IGCSE tutor Islamabad',
//   ],
//   alternates: { canonical: url },
//   openGraph: {
//     title: 'Best O Level Tutor in Islamabad | Avenfield Tutors',
//     description: 'Verified O Level tutors in Islamabad for Cambridge CAIE & Edexcel. Expert tuition for all subjects. Free consultation available.',
//     type: 'website',
//     locale: 'en_PK',
//     siteName: 'Avenfield Tutors',
//     url,
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Best O Level Tutor in Islamabad | Avenfield Tutors',
//     description: 'Verified O Level tutors in Islamabad for Cambridge CAIE & Edexcel. Expert tuition for all subjects.',
//   },
// }

// // Islamabad Areas Data
// const ISLAMABAD_AREAS = {
//   sectors: [
//     'F-5', 'F-6', 'F-7', 'F-8', 'F-10', 'F-11', 'F-15', 'F-17',
//     'G-5', 'G-6', 'G-7', 'G-8', 'G-9', 'G-10', 'G-11', 'G-13', 'G-14', 'G-15', 'G-16',
//     'E-7', 'E-8', 'E-11', 'E-16', 'E-17',
//     'D-12', 'D-17',
//     'I-8', 'I-9', 'I-10', 'I-11', 'I-12', 'I-14',
//     'B-10', 'B-11', 'B-12', 'B-15', 'B-17',
//     'C-12', 'C-14', 'C-15', 'C-16', 'C-17',
//     'H-8', 'H-9', 'H-10', 'H-11', 'H-12', 'H-13',
//   ],
//   housingSocieties: [
//     'DHA Islamabad (All Phases)',
//     'Bahria Enclave',
//     'Gulberg Greens',
//     'Gulberg Residencia',
//     'Naval Anchorage',
//     'Park View City',
//     'Capital Smart City',
//     'Top City-1',
//     'University Town',
//     'Faisal Town',
//     'Mumtaz City',
//     'Multi Gardens B-17',
//     'MPCHS',
//     'Faisal Hills',
//     'Eighteen Islamabad',
//     'Blue World City',
//     'Kingdom Valley',
//     'Discovery Gardens',
//     'PECHS',
//     'CBR Town',
//     'Pakistan Town',
//     'Soan Garden',
//     'River Garden',
//     'Jinnah Gardens',
//     'PWD Housing Society',
//     'Korang Town',
//     'Korang Enclave',
//     'Media Town',
//     'FGEHA Housing Scheme',
//     'OPF Housing Scheme',
//     'Gulshan-e-Sehat',
//     'Doctors Housing Society',
//     'Engineers Cooperative Housing Society',
//   ],
//   localities: [
//     'Bani Gala',
//     'Chak Shahzad',
//     'Bhara Kahu',
//     'Shah Allah Ditta',
//     'Bari Imam',
//     'Saidpur',
//     'Rawal Town',
//     'Model Town Humak',
//     'Humak',
//     'Sihala',
//     'Tarlai',
//     'Lehtrar Road',
//     'Nilore',
//     'Simly Dam Road',
//     'Tramri',
//     'Khanna',
//     'Koral',
//     'Loi Bher',
//     'Alipur Farash',
//     'Golra',
//     'Tarnol',
//     'Sangjani',
//     'Golra Sharif',
//     'Noon',
//     'Kirpa',
//     'Phulgran',
//     'Jhangi Syedan',
//     'Islamabad Expressway Corridor',
//   ],
//   commercial: [
//     'Diplomatic Enclave',
//     'Blue Area',
//     'Red Zone',
//     'Constitution Avenue',
//     'Melody',
//     'Aabpara',
//     'Super Market',
//     'Jinnah Super',
//     'Sitara Market',
//     'Karachi Company',
//     'F-10 Markaz',
//     'F-11 Markaz',
//     'I-8 Markaz',
//   ],
// }

// export default function OLevelTutorIslamabadPage() {
//   return (
//     <SubjectLandingPage
//       subject="O Level"
//       city="Islamabad"
//       slug="o-level-tutor-islamabad"
//       pageTitle="Best O Level Tutor in Islamabad | Cambridge O Level Tuition"
//       pageDescription="Find verified O Level tutors in Islamabad for Cambridge CAIE & Edexcel. Expert tuition for all subjects — Mathematics, Physics, Chemistry, Biology, English & more. Free consultation."
//       metaKeywords={[
//         'O Level tutor Islamabad',
//         'O Level tuition Islamabad',
//         'Cambridge O Level tutor',
//         'O Level teacher Islamabad',
//         'best O Level tutor in Islamabad',
//         'O Level home tutor Islamabad',
//         'CAIE O Level tutor',
//         'Edexcel O Level tutor',
//         'O Level Maths tutor',
//         'O Level Physics tutor',
//         'O Level Chemistry tutor',
//         'O Level Biology tutor',
//         'O Level English tutor',
//         'IGCSE tutor Islamabad',
//       ]}
//       subjectIcon="📚"
//       subjectEmoji="📖"
//       subjectOverview={[
//         `The <a href="/tutors?subject=O%20Level&city=Islamabad" class="text-[#E05C42] hover:underline font-black">O Level tutor in Islamabad</a> market is highly competitive, and finding the right tutor can make all the difference in a student's academic journey. The Cambridge O Level curriculum is known for its rigour and depth, requiring students to develop strong analytical skills, critical thinking, and a deep understanding of core concepts. Our verified O Level tutors in Islamabad specialise in helping students navigate these challenges with confidence.`,
//         `Whether your child is struggling with <a href="/tutors?subject=Mathematics&city=Islamabad" class="text-[#E05C42] hover:underline font-black">O Level Mathematics</a>, <a href="/tutors?subject=Physics&city=Islamabad" class="text-[#E05C42] hover:underline font-black">Physics</a>, <a href="/tutors?subject=Chemistry&city=Islamabad" class="text-[#E05C42} hover:underline font-black">Chemistry</a>, <a href="/tutors?subject=Biology&city=Islamabad" class="text-[#E05C42] hover:underline font-black">Biology</a>, or <a href="/tutors?subject=English&city=Islamabad" class="text-[#E05C42} hover:underline font-black">English</a>, our experienced tutors provide personalised support tailored to the Cambridge syllabus. They understand the specific requirements of both <a href="/tutors?subject=O%20Level&exam=CAIE" class="text-[#E05C42} hover:underline font-black">CAIE</a> and <a href="/tutors?subject=O%20Level&exam=Edexcel" class="text-[#E05C42} hover:underline font-black">Edexcel</a> exam boards, ensuring students are fully prepared for their examinations.`,
//         `With a focus on building foundational knowledge and exam technique, our <a href="/home-tutor-islamabad" class="text-[#E05C42} hover:underline font-black">home tutors in Islamabad</a> provide the undivided attention that classroom settings often cannot offer. This personalised approach is particularly effective for O Level students, who need to master complex concepts across multiple subjects while developing the critical thinking skills required for success in higher education.`,
//       ]}
//       subjectDetails={[
//         `Our <strong class="text-[#2E4F5E]">O Level tutors in Islamabad</strong> are subject matter experts with extensive experience teaching the Cambridge syllabus. They are familiar with the specific requirements of each subject and provide targeted support to help students excel in their examinations.`,
//         `We offer tuition for <strong class="text-[#2E4F5E]">all O Level subjects</strong> across <strong class="text-[#2E4F5E]">CAIE (Cambridge International)</strong> and <strong class="text-[#2E4F5E]">Edexcel</strong> exam boards. Our tutors cover everything from core sciences to humanities and languages, ensuring comprehensive support for every student.`,
//         `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual understanding</strong> and developing <strong class="text-[#2E4F5E]">exam technique</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. Whether your child is aiming for A* or needs to build confidence in a challenging subject, our tutors are here to help.`,
//         `We understand that every student learns differently. That's why we offer <strong class="text-[#2E4F5E]">personalised tuition</strong> tailored to your child's learning style, pace, and academic goals. Our tutors adapt their teaching methods to ensure that each student receives the support they need to succeed.`,
//       ]}
//       examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA']}
//       targetExams={['O Level', 'IGCSE', 'Cambridge International']}
//       commonTopics={[
//         'Algebra & Geometry',
//         'Mechanics & Electricity',
//         'Organic Chemistry',
//         'Cell Biology & Genetics',
//         'Grammar & Literature',
//         'Statistics & Probability',
//         'Thermodynamics',
//         'Inorganic Chemistry',
//         'Human Physiology',
//         'Essay Writing',
//       ]}
//       whyChoose={[
//         'Our O Level tutors in Islamabad are <strong>subject specialists</strong> with proven track records of helping students achieve A* and A grades in Cambridge examinations.',
//         'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals, ensuring efficient and effective learning.',
//         'Our tutors are <strong>familiar with the specific requirements</strong> of both CAIE and Edexcel exam boards, including mark schemes, past paper patterns, and examiner expectations.',
//         'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit tutoring into your family\'s busy schedule.',
//       ]}
//       faqs={[
//         {
//           q: 'What qualifications do your O Level tutors in Islamabad have?',
//           a: 'All our O Level tutors hold at least a bachelor\'s degree in their subject area, with many holding master\'s degrees or PhDs. They have extensive experience teaching the Cambridge syllabus and a proven track record of helping students achieve top grades. Many tutors are also Cambridge-certified teachers or examiners.',
//         },
//         {
//           q: 'Which O Level subjects do you offer tuition for?',
//           a: 'We offer tuition for all O Level subjects including Mathematics, Physics, Chemistry, Biology, English, Urdu, Economics, Computer Science, Accounting, Business Studies, History, Geography, and more. Our tutors cover both CAIE and Edexcel exam boards. If you need a specific subject not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">contact us on WhatsApp</a> and we\'ll find a tutor for you.',
//         },
//         {
//           q: 'How much do O Level tutors in Islamabad charge?',
//           a: 'O Level tutor rates in Islamabad vary based on the subject, the tutor\'s experience, and the student\'s level. Typically, rates range from PKR 2,000 to 4,500 per hour for home tuition. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive rates with complete transparency and no hidden charges.',
//         },
//         {
//           q: 'Can I get a free trial session with an O Level tutor?',
//           a: 'Yes! We offer a free initial consultation and trial session. This allows you to assess the tutor\'s teaching style and ensure they\'re the right fit for your child before committing to regular sessions. It\'s a risk-free way to experience the quality of our tutoring services.',
//         },
//         {
//           q: 'Do you offer online O Level tutoring as well?',
//           a: 'Yes! While we specialise in <a href="/home-tutor-islamabad" class="text-[#E05C42} hover:underline font-black">home tuition in Islamabad</a>, we also offer <a href="/tutors?subject=O%20Level" class="text-[#E05C42} hover:underline font-black">online O Level tutoring</a> for students who prefer the flexibility of learning from home or who live outside Islamabad. Our online sessions are conducted via video call with interactive whiteboards and screen sharing for an effective learning experience.',
//         },
//         {
//           q: 'Which areas of Islamabad do your home tutors cover?',
//           a: 'Our O Level home tutors cover all major areas of Islamabad including F-5 to F-17, G-5 to G-16, E-7 to E-17, D-12, I-8 to I-14, B-10 to B-17, C-12 to C-17, H-8 to H-13, DHA Islamabad (all phases), Bahria Enclave, Gulberg Greens, Park View City, Capital Smart City, and many more. If you don\'t see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we\'ll confirm availability.',
//         },
//       ]}
//       areas={ISLAMABAD_AREAS}
//       relatedSubjects={[
//         { name: 'A Level Tutors', href: '/a-level-tutor-islamabad', icon: '🎯' },
//         { name: 'IELTS Tutors', href: '/ielts-tutor-islamabad', icon: '🎓' },
//         { name: 'MDCAT Tutors', href: '/mdcat-tutor-islamabad', icon: '🩺' },
//         { name: 'Mathematics Tutors', href: '/tutors?subject=Mathematics&city=Islamabad', icon: '📐' },
//         { name: 'Physics Tutors', href: '/tutors?subject=Physics&city=Islamabad', icon: '⚡' },
//         { name: 'Chemistry Tutors', href: '/tutors?subject=Chemistry&city=Islamabad', icon: '🧪' },
//         { name: 'Biology Tutors', href: '/tutors?subject=Biology&city=Islamabad', icon: '🧬' },
//         { name: 'English Tutors', href: '/tutors?subject=English&city=Islamabad', icon: '📝' },
//       ]}
//       nearbyCity="Rawalpindi"
//       canonicalUrl={url}
//     />
//   )
// }




import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/o-level-tutor-islamabad`

export const metadata: Metadata = {
  title: 'Best O Level Tutor in Islamabad | Cambridge O Level Tuition',
  description:
    'Find verified O Level tutors in Islamabad for Cambridge CAIE & Edexcel. Expert tuition for all subjects — Mathematics, Physics, Chemistry, Biology, English & more. Free consultation.',
  keywords: [
    'O Level tutor Islamabad',
    'O Level tuition Islamabad',
    'Cambridge O Level tutor',
    'O Level teacher Islamabad',
    'best O Level tutor in Islamabad',
    'O Level home tutor Islamabad',
    'CAIE O Level tutor',
    'Edexcel O Level tutor',
    'O Level Maths tutor',
    'O Level Physics tutor',
    'O Level Chemistry tutor',
    'O Level Biology tutor',
    'O Level English tutor',
    'IGCSE tutor Islamabad',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best O Level Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified O Level tutors in Islamabad for Cambridge CAIE & Edexcel. Expert tuition for all subjects. Free consultation available.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best O Level Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified O Level tutors in Islamabad for Cambridge CAIE & Edexcel. Expert tuition for all subjects.',
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

export default function OLevelTutorIslamabadPage() {
  return (
    <SubjectLandingPage
      subject="O Level"
      city="Islamabad"
      slug="o-level-tutor-islamabad"
      pageTitle="Best O Level Tutor in Islamabad | Cambridge O Level Tuition"
      pageDescription="Find verified O Level tutors in Islamabad for Cambridge CAIE & Edexcel. Expert tuition for all subjects — Mathematics, Physics, Chemistry, Biology, English & more. Free consultation."
      metaKeywords={[
        'O Level tutor Islamabad',
        'O Level tuition Islamabad',
        'Cambridge O Level tutor',
        'O Level teacher Islamabad',
        'best O Level tutor in Islamabad',
        'O Level home tutor Islamabad',
        'CAIE O Level tutor',
        'Edexcel O Level tutor',
        'O Level Maths tutor',
        'O Level Physics tutor',
        'O Level Chemistry tutor',
        'O Level Biology tutor',
        'O Level English tutor',
        'IGCSE tutor Islamabad',
      ]}
      subjectIcon="📚"
      subjectEmoji="📖"
      subjectOverview={[
        `The <a href="/tutors?subject=O%20Level&city=Islamabad" class="text-[#E05C42] hover:underline font-black">O Level tutor in Islamabad</a> market is highly competitive, and finding the right tutor can make all the difference in a student's academic journey. The Cambridge O Level curriculum is known for its rigour and depth, requiring students to develop strong analytical skills, critical thinking, and a deep understanding of core concepts. Our verified O Level tutors in Islamabad specialise in helping students navigate these challenges with confidence.`,
        `Whether your child is struggling with <a href="/tutors?subject=Mathematics&city=Islamabad" class="text-[#E05C42] hover:underline font-black">O Level Mathematics</a>, <a href="/tutors?subject=Physics&city=Islamabad" class="text-[#E05C42] hover:underline font-black">Physics</a>, <a href="/tutors?subject=Chemistry&city=Islamabad" class="text-[#E05C42] hover:underline font-black">Chemistry</a>, <a href="/tutors?subject=Biology&city=Islamabad" class="text-[#E05C42] hover:underline font-black">Biology</a>, or <a href="/tutors?subject=English&city=Islamabad" class="text-[#E05C42] hover:underline font-black">English</a>, our experienced tutors provide personalised support tailored to the Cambridge syllabus. They understand the specific requirements of both <a href="/tutors?subject=O%20Level&exam=CAIE" class="text-[#E05C42] hover:underline font-black">CAIE</a> and <a href="/tutors?subject=O%20Level&exam=Edexcel" class="text-[#E05C42] hover:underline font-black">Edexcel</a> exam boards, ensuring students are fully prepared for their examinations.`,
        `With a focus on building foundational knowledge and exam technique, our <a href="/home-tutor-islamabad" class="text-[#E05C42] hover:underline font-black">home tutors in Islamabad</a> provide the undivided attention that classroom settings often cannot offer. This personalised approach is particularly effective for O Level students, who need to master complex concepts across multiple subjects while developing the critical thinking skills required for success in higher education.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">O Level tutors in Islamabad</strong> are subject matter experts with extensive experience teaching the Cambridge syllabus. They are familiar with the specific requirements of each subject and provide targeted support to help students excel in their examinations.`,
        `We offer tuition for <strong class="text-[#2E4F5E]">all O Level subjects</strong> across <strong class="text-[#2E4F5E]">CAIE (Cambridge International)</strong> and <strong class="text-[#2E4F5E]">Edexcel</strong> exam boards. Our tutors cover everything from core sciences to humanities and languages, ensuring comprehensive support for every student.`,
        `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual understanding</strong> and developing <strong class="text-[#2E4F5E]">exam technique</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. Whether your child is aiming for A* or needs to build confidence in a challenging subject, our tutors are here to help.`,
        `We understand that every student learns differently. That's why we offer <strong class="text-[#2E4F5E]">personalised tuition</strong> tailored to your child's learning style, pace, and academic goals. Our tutors adapt their teaching methods to ensure that each student receives the support they need to succeed.`,
      ]}
      examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA']}
      targetExams={['O Level', 'IGCSE', 'Cambridge International']}
      commonTopics={[
        'Algebra & Geometry',
        'Mechanics & Electricity',
        'Organic Chemistry',
        'Cell Biology & Genetics',
        'Grammar & Literature',
        'Statistics & Probability',
        'Thermodynamics',
        'Inorganic Chemistry',
        'Human Physiology',
        'Essay Writing',
      ]}
      whyChoose={[
        'Our O Level tutors in Islamabad are <strong>subject specialists</strong> with proven track records of helping students achieve A* and A grades in Cambridge examinations.',
        'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals, ensuring efficient and effective learning.',
        'Our tutors are <strong>familiar with the specific requirements</strong> of both CAIE and Edexcel exam boards, including mark schemes, past paper patterns, and examiner expectations.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit tutoring into your family\'s busy schedule.',
      ]}
      faqs={[
        {
          q: 'What qualifications do your O Level tutors in Islamabad have?',
          a: 'All our O Level tutors hold at least a bachelor\'s degree in their subject area, with many holding master\'s degrees or PhDs. They have extensive experience teaching the Cambridge syllabus and a proven track record of helping students achieve top grades. Many tutors are also Cambridge-certified teachers or examiners.',
        },
        {
          q: 'Which O Level subjects do you offer tuition for?',
          a: 'We offer tuition for all O Level subjects including Mathematics, Physics, Chemistry, Biology, English, Urdu, Economics, Computer Science, Accounting, Business Studies, History, Geography, and more. Our tutors cover both CAIE and Edexcel exam boards. If you need a specific subject not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">contact us on WhatsApp</a> and we\'ll find a tutor for you.',
        },
        {
          q: 'How much do O Level tutors in Islamabad charge?',
          a: 'O Level tutor rates in Islamabad vary based on the subject, the tutor\'s experience, and the student\'s level. Typically, rates range from PKR 2,000 to 4,500 per hour for home tuition. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive rates with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free trial session with an O Level tutor?',
          a: 'Yes! We offer a free initial consultation and trial session. This allows you to assess the tutor\'s teaching style and ensure they\'re the right fit for your child before committing to regular sessions. It\'s a risk-free way to experience the quality of our tutoring services.',
        },
        {
          q: 'Do you offer online O Level tutoring as well?',
          a: 'Yes! While we specialise in <a href="/home-tutor-islamabad" class="text-[#E05C42] hover:underline font-black">home tuition in Islamabad</a>, we also offer <a href="/tutors?subject=O%20Level" class="text-[#E05C42] hover:underline font-black">online O Level tutoring</a> for students who prefer the flexibility of learning from home or who live outside Islamabad. Our online sessions are conducted via video call with interactive whiteboards and screen sharing for an effective learning experience.',
        },
        {
          q: 'Which areas of Islamabad do your home tutors cover?',
          a: 'Our O Level home tutors cover all major areas of Islamabad including F-5 to F-17, G-5 to G-16, E-7 to E-17, D-12, I-8 to I-14, B-10 to B-17, C-12 to C-17, H-8 to H-13, DHA Islamabad (all phases), Bahria Enclave, Gulberg Greens, Park View City, Capital Smart City, and many more. If you don\'t see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we\'ll confirm availability.',
        },
      ]}
      areas={ISLAMABAD_AREAS}
      relatedSubjects={[
        { name: 'A Level Tutors', href: '/a-level-tutor-islamabad', icon: '🎯' },
        { name: 'IELTS Tutors', href: '/ielts-tutor-islamabad', icon: '🎓' },
        { name: 'MDCAT Tutors', href: '/mdcat-tutor-islamabad', icon: '🩺' },
        { name: 'Mathematics Tutors', href: '/tutors?subject=Mathematics&city=Islamabad', icon: '📐' },
        { name: 'Physics Tutors', href: '/tutors?subject=Physics&city=Islamabad', icon: '⚡' },
        { name: 'Chemistry Tutors', href: '/tutors?subject=Chemistry&city=Islamabad', icon: '🧪' },
        { name: 'Biology Tutors', href: '/tutors?subject=Biology&city=Islamabad', icon: '🧬' },
        { name: 'English Tutors', href: '/tutors?subject=English&city=Islamabad', icon: '📝' },
      ]}
      nearbyCity="Rawalpindi"
      canonicalUrl={url}
    />
  )
}