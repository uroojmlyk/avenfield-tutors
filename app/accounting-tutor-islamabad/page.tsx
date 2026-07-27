// import type { Metadata } from 'next'
// import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
// const url = `${SITE_URL}/accounting-tutor-islamabad`

// export const metadata: Metadata = {
//   title: 'Best Accounting Tutor in Islamabad | O Level, A Level & IGCSE Accounting',
//   description:
//     'Find verified Accounting tutors in Islamabad for O Level, A Level, IGCSE, CA, ACCA & University Accounting. Expert tuition for Financial, Cost & Management Accounting. Free consultation.',
//   keywords: [
//     'Accounting tutor Islamabad',
//     'Accounting tuition Islamabad',
//     'Accounting teacher Islamabad',
//     'best Accounting tutor in Islamabad',
//     'Accounting home tutor Islamabad',
//     'O Level Accounting tutor',
//     'A Level Accounting tutor',
//     'IGCSE Accounting tutor',
//     'Financial Accounting tutor',
//     'Cost Accounting tutor',
//     'Management Accounting tutor',
//     'CA tutor Islamabad',
//     'ACCA tutor Islamabad',
//     'Accounting teacher near me Islamabad',
//   ],
//   alternates: { canonical: url },
//   openGraph: {
//     title: 'Best Accounting Tutor in Islamabad | Avenfield Tutors',
//     description: 'Verified Accounting tutors in Islamabad for O Level, A Level, IGCSE, CA, ACCA & University Accounting. Expert tuition for all topics. Free consultation available.',
//     type: 'website',
//     locale: 'en_PK',
//     siteName: 'Avenfield Tutors',
//     url,
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Best Accounting Tutor in Islamabad | Avenfield Tutors',
//     description: 'Verified Accounting tutors in Islamabad for O Level, A Level, IGCSE, CA, ACCA & University Accounting. Expert tuition for all topics.',
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
// }

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

// export default function AccountingTutorIslamabadPage() {
//   return (
//     <SubjectLandingPage
//       subject="Accounting"
//       city="Islamabad"
//       slug="accounting-tutor-islamabad"
//       pageTitle="Best Accounting Tutor in Islamabad | O Level, A Level & IGCSE Accounting"
//       pageDescription="Find verified Accounting tutors in Islamabad for O Level, A Level, IGCSE, CA, ACCA & University Accounting. Expert tuition for Financial, Cost & Management Accounting. Free consultation."
//       metaKeywords={[
//         'Accounting tutor Islamabad',
//         'Accounting tuition Islamabad',
//         'Accounting teacher Islamabad',
//         'best Accounting tutor in Islamabad',
//         'Accounting home tutor Islamabad',
//         'O Level Accounting tutor',
//         'A Level Accounting tutor',
//         'IGCSE Accounting tutor',
//         'Financial Accounting tutor',
//         'Cost Accounting tutor',
//         'Management Accounting tutor',
//         'CA tutor Islamabad',
//         'ACCA tutor Islamabad',
//         'Accounting teacher near me Islamabad',
//       ]}
//       subjectIcon="📊"
//       subjectEmoji="🧾"
//       subjectOverview={[
//         `The <a href="/tutors?subject=Accounting&city=Islamabad" class="text-[#E05C42] hover:underline font-black">Accounting tutor in Islamabad</a> market is growing as students pursue careers in finance, business, and professional accounting qualifications. Accounting is a core subject for O Level, A Level, IGCSE, and university students, covering financial accounting, cost accounting, and management accounting. Our verified Accounting tutors in Islamabad help students develop a strong foundation in accounting principles with practical applications.`,
//         `Whether your child is preparing for <a href="/tutors?subject=O%20Level&city=Islamabad" class="text-[#E05C42] hover:underline font-black">O Level Accounting</a>, <a href="/tutors?subject=A%20Level&city=Islamabad" class="text-[#E05C42] hover:underline font-black">A Level Accounting</a>, <a href="/tutors?subject=IGCSE&city=Islamabad" class="text-[#E05C42} hover:underline font-black">IGCSE</a>, or professional qualifications like <a href="/tutors?subject=CA&city=Islamabad" class="text-[#E05C42} hover:underline font-black">CA</a> and <a href="/tutors?subject=ACCA&city=Islamabad" class="text-[#E05C42} hover:underline font-black">ACCA</a>, our experienced tutors provide personalised support tailored to the specific curriculum. They understand the unique challenges of each exam board and syllabus — from Cambridge CAIE and Edexcel to professional accounting bodies — and help students develop strong analytical and problem-solving skills.`,
//         `With a focus on building conceptual understanding and exam technique, our <a href="/home-tutor-islamabad" class="text-[#E05C42} hover:underline font-black">home tutors in Islamabad</a> provide the undivided attention that Accounting requires. This personalised approach is particularly effective for students who need help with complex topics like financial statements, double-entry bookkeeping, and ratio analysis.`,
//       ]}
//       subjectDetails={[
//         `Our <strong class="text-[#2E4F5E]">Accounting tutors in Islamabad</strong> are subject matter experts with advanced degrees in Accounting, Finance, or Commerce. They have extensive experience teaching Accounting across multiple curricula — <strong class="text-[#2E4F5E]">O Level</strong>, <strong class="text-[#2E4F5E]">A Level</strong>, <strong class="text-[#2E4F5E]">IGCSE</strong>, <strong class="text-[#2E4F5E]">University</strong>, and professional qualifications like <strong class="text-[#2E4F5E]">CA</strong> and <strong class="text-[#2E4F5E]">ACCA</strong>. Their deep understanding of the subject enables them to explain complex accounting concepts in simple, relatable terms.`,
//         `We cover <strong class="text-[#2E4F5E]">all major Accounting topics</strong> including financial accounting, cost accounting, management accounting, auditing, taxation, and financial reporting. Our tutors use practical examples, case studies, and real-world scenarios to make learning engaging and relevant.`,
//         `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">practical problem-solving skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. For professional qualification students, tutors provide advanced guidance on complex topics and exam techniques.`,
//         `We understand that Accounting requires both theoretical understanding and practical application. That's why our tutors use <strong class="text-[#2E4F5E]">interactive teaching methods</strong> — including practical exercises, case studies, and real-world examples — to help students master both concepts and applications.`,
//       ]}
//       examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA', 'ICAP (CA)', 'ACCA']}
//       targetExams={['O Level', 'A Level', 'IGCSE', 'CA', 'ACCA', 'University Exams']}
//       commonTopics={[
//         'Financial Accounting & Reporting',
//         'Cost Accounting',
//         'Management Accounting',
//         'Auditing & Assurance',
//         'Taxation',
//         'Financial Statements Analysis',
//         'Ratio Analysis',
//         'Budgeting & Variance Analysis',
//         'Accounting Standards (IFRS)',
//         'Bookkeeping & Double-Entry System',
//       ]}
//       whyChoose={[
//         'Our Accounting tutors in Islamabad are <strong>subject matter experts</strong> with advanced degrees in Accounting, Finance, or Commerce and proven track records of helping students achieve top grades.',
//         'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals, ensuring efficient and effective learning of complex accounting concepts.',
//         'Our tutors use <strong>interactive teaching methods</strong> — including practical exercises, case studies, and real-world examples — to make Accounting engaging and relevant.',
//         'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Accounting tutoring into your family\'s busy schedule.',
//       ]}
//       faqs={[
//         {
//           q: 'What qualifications do your Accounting tutors in Islamabad have?',
//           a: 'All our Accounting tutors hold at least a bachelor\'s or master\'s degree in Accounting, Finance, or Commerce, with many holding professional qualifications like CA or ACCA. They have extensive experience teaching Accounting across multiple curricula including O Level, A Level, IGCSE, University, and professional qualifications. Many tutors are also certified teachers or examiners with deep understanding of assessment criteria.',
//         },
//         {
//           q: 'Which Accounting curricula do you offer tuition for?',
//           a: 'We offer tuition for all major Accounting curricula including CAIE (Cambridge International) O Level and A Level, Edexcel, Oxford AQA, IGCSE, University-level courses, and professional qualifications like CA and ACCA. Our tutors are familiar with the specific requirements of each curriculum and exam board. If you need a specific syllabus not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">contact us on WhatsApp</a> and we\'ll find a tutor for you.',
//         },
//         {
//           q: 'How much do Accounting tutors in Islamabad charge?',
//           a: 'Accounting tutor rates in Islamabad vary based on the curriculum, the tutor\'s experience, and the student\'s level. Typically, rates range from PKR 2,000 to 4,500 per hour for home tuition. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive rates with complete transparency and no hidden charges.',
//         },
//         {
//           q: 'Can I get a free trial session with an Accounting tutor?',
//           a: 'Yes! We offer a free initial consultation and trial session. This allows you to assess the tutor\'s teaching style and ensure they\'re the right fit for your child before committing to regular sessions. It\'s a risk-free way to experience the quality of our tutoring services.',
//         },
//         {
//           q: 'Do you offer online Accounting tutoring as well?',
//           a: 'Yes! While we specialise in <a href="/home-tutor-islamabad" class="text-[#E05C42] hover:underline font-black">home tuition in Islamabad</a>, we also offer <a href="/tutors?subject=Accounting" class="text-[#E05C42] hover:underline font-black">online Accounting tutoring</a> for students who prefer the flexibility of learning from home. Our online sessions are conducted via video call with interactive whiteboards and screen sharing, making them just as effective as in-person sessions.',
//         },
//         {
//           q: 'Which areas of Islamabad do your home tutors cover?',
//           a: 'Our Accounting home tutors cover all major areas of Islamabad including F-5 to F-17, G-5 to G-16, E-7 to E-17, D-12, I-8 to I-14, B-10 to B-17, C-12 to C-17, H-8 to H-13, DHA Islamabad (all phases), Bahria Enclave, Gulberg Greens, Park View City, Capital Smart City, and many more. If you don\'t see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we\'ll confirm availability.',
//         },
//       ]}
//       areas={ISLAMABAD_AREAS}
//       relatedSubjects={[
//         { name: 'O Level Tutors', href: '/o-level-tutor-islamabad', icon: '📚' },
//         { name: 'A Level Tutors', href: '/a-level-tutor-islamabad', icon: '🎯' },
//         { name: 'IELTS Tutors', href: '/ielts-tutor-islamabad', icon: '🎓' },
//         { name: 'MDCAT Tutors', href: '/mdcat-tutor-islamabad', icon: '🩺' },
//         { name: 'Economics Tutors', href: '/economics-tutor-islamabad', icon: '📊' },
//         { name: 'Mathematics Tutors', href: '/math-tutor-islamabad', icon: '📐' },
//         { name: 'English Tutors', href: '/english-tutor-islamabad', icon: '📝' },
//         { name: 'Computer Science Tutors', href: '/computer-science-tutor-islamabad', icon: '💻' },
//       ]}
//       nearbyCity="Rawalpindi"
//       canonicalUrl={url}
//     />
//   )
// }




import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/accounting-tutor-islamabad`

export const metadata: Metadata = {
  title: 'Best Accounting Tutor in Islamabad | O Level, A Level & IGCSE Accounting',
  description:
    'Qualified Accounting tutors in Islamabad for O Level, A Level, IGCSE, CA & ACCA. Learn Financial Accounting, Cost & Management Accounting with practical examples. Free consultation.',
  keywords: [
    'Accounting tutor Islamabad',
    'Accounting tuition Islamabad',
    'Accounting teacher Islamabad',
    'best Accounting tutor in Islamabad',
    'Accounting home tutor Islamabad',
    'O Level Accounting tutor',
    'A Level Accounting tutor',
    'IGCSE Accounting tutor',
    'Financial Accounting tutor',
    'Cost Accounting tutor',
    'Management Accounting tutor',
    'CA tutor Islamabad',
    'ACCA tutor Islamabad',
    'Accounting teacher near me Islamabad',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Accounting Tutor in Islamabad | Avenfield Tutors',
    description: 'Qualified Accounting tutors in Islamabad for O Level, A Level, IGCSE, CA & ACCA. Learn Financial Accounting, Cost & Management Accounting. Free consultation.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Accounting Tutor in Islamabad | Avenfield Tutors',
    description: 'Qualified Accounting tutors in Islamabad for O Level, A Level, IGCSE, CA & ACCA.',
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

export default function AccountingTutorIslamabadPage() {
  return (
    <SubjectLandingPage
      subject="Accounting"
      city="Islamabad"
      slug="accounting-tutor-islamabad"
      pageTitle="Best Accounting Tutor in Islamabad | O Level, A Level & IGCSE Accounting"
      pageDescription="Qualified Accounting tutors in Islamabad for O Level, A Level, IGCSE, CA & ACCA. Learn Financial Accounting, Cost & Management Accounting with practical examples. Free consultation."
      metaKeywords={[
        'Accounting tutor Islamabad',
        'Accounting tuition Islamabad',
        'Accounting teacher Islamabad',
        'best Accounting tutor in Islamabad',
        'Accounting home tutor Islamabad',
        'O Level Accounting tutor',
        'A Level Accounting tutor',
        'IGCSE Accounting tutor',
        'Financial Accounting tutor',
        'Cost Accounting tutor',
        'Management Accounting tutor',
        'CA tutor Islamabad',
        'ACCA tutor Islamabad',
        'Accounting teacher near me Islamabad',
      ]}
      subjectIcon="📊"
      subjectEmoji="🧾"
      subjectOverview={[
        `The <a href="/tutors?subject=Accounting&city=Islamabad" class="text-[#E05C42] hover:underline font-black">Accounting tutor in Islamabad</a> market is growing as students pursue careers in finance, business, and professional accounting qualifications. Accounting is a core subject for O Level, A Level, IGCSE, and university students, covering financial accounting, cost accounting, and management accounting. Our verified Accounting tutors in Islamabad help students develop a strong foundation in accounting principles with practical applications.`,
        `Whether your child is preparing for <a href="/tutors?subject=O%20Level&city=Islamabad" class="text-[#E05C42] hover:underline font-black">O Level Accounting</a>, <a href="/tutors?subject=A%20Level&city=Islamabad" class="text-[#E05C42] hover:underline font-black">A Level Accounting</a>, <a href="/tutors?subject=IGCSE&city=Islamabad" class="text-[#E05C42] hover:underline font-black">IGCSE</a>, or professional qualifications like <a href="/tutors?subject=CA&city=Islamabad" class="text-[#E05C42] hover:underline font-black">CA</a> and <a href="/tutors?subject=ACCA&city=Islamabad" class="text-[#E05C42] hover:underline font-black">ACCA</a>, our experienced tutors provide personalised support tailored to the specific curriculum. They understand the unique challenges of each exam board and syllabus from Cambridge CAIE and Edexcel to professional accounting bodies and help students develop strong analytical and problem-solving skills.`,
        `With a focus on building conceptual understanding and exam technique, our <a href="/home-tutor-islamabad" class="text-[#E05C42] hover:underline font-black">home tutors in Islamabad</a> provide the undivided attention that Accounting requires. This personalised approach is particularly effective for students who need help with complex topics like financial statements, double-entry bookkeeping, and ratio analysis.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">Accounting tutors in Islamabad</strong> are subject matter experts with advanced degrees in Accounting, Finance, or Commerce. They have extensive experience teaching Accounting across multiple curricula <strong class="text-[#2E4F5E]">O Level</strong>, <strong class="text-[#2E4F5E]">A Level</strong>, <strong class="text-[#2E4F5E]">IGCSE</strong>, <strong class="text-[#2E4F5E]">University</strong>, and professional qualifications like <strong class="text-[#2E4F5E]">CA</strong> and <strong class="text-[#2E4F5E]">ACCA</strong>. Their deep understanding of the subject enables them to explain complex accounting concepts in simple, relatable terms.`,
        `We cover <strong class="text-[#2E4F5E]">all major Accounting topics</strong> including financial accounting, cost accounting, management accounting, auditing, taxation, and financial reporting. Our tutors use practical examples, case studies, and real-world scenarios to make learning engaging and relevant.`,
        `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">practical problem-solving skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. For professional qualification students, tutors provide advanced guidance on complex topics and exam techniques.`,
        `We understand that Accounting requires both theoretical understanding and practical application. That is why our tutors use <strong class="text-[#2E4F5E]">interactive teaching methods</strong> including practical exercises, case studies, and real-world examples to help students master both concepts and applications.`,
      ]}
      examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA', 'ICAP (CA)', 'ACCA']}
      targetExams={['O Level', 'A Level', 'IGCSE', 'CA', 'ACCA', 'University Exams']}
      commonTopics={[
        'Financial Accounting & Reporting',
        'Cost Accounting',
        'Management Accounting',
        'Auditing & Assurance',
        'Taxation',
        'Financial Statements Analysis',
        'Ratio Analysis',
        'Budgeting & Variance Analysis',
        'Accounting Standards (IFRS)',
        'Bookkeeping & Double-Entry System',
      ]}
      whyChoose={[
        'Our Accounting tutors in Islamabad are <strong>subject matter experts</strong> with advanced degrees in Accounting, Finance, or Commerce and proven track records of helping students achieve top grades.',
        'We provide <strong>personalised lesson plans</strong> tailored to each student learning style, pace, and academic goals, ensuring efficient and effective learning of complex accounting concepts.',
        'Our tutors use <strong>interactive teaching methods</strong> including practical exercises, case studies, and real-world examples to make Accounting engaging and relevant.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Accounting tutoring into your family busy schedule.',
      ]}
      faqs={[
        {
          q: 'What qualifications do your Accounting tutors in Islamabad have?',
          a: 'All our Accounting tutors hold at least a bachelor or master degree in Accounting, Finance, or Commerce, with many holding professional qualifications like CA or ACCA. They have extensive experience teaching Accounting across multiple curricula including O Level, A Level, IGCSE, University, and professional qualifications. Many tutors are also certified teachers or examiners with deep understanding of assessment criteria.',
        },
        {
          q: 'Which Accounting curricula do you offer tuition for?',
          a: 'We offer tuition for all major Accounting curricula including CAIE (Cambridge International) O Level and A Level, Edexcel, Oxford AQA, IGCSE, University-level courses, and professional qualifications like CA and ACCA. Our tutors are familiar with the specific requirements of each curriculum and exam board. If you need a specific syllabus not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">contact us on WhatsApp</a> and we will find a tutor for you.',
        },
        {
          q: 'How much do Accounting tutors in Islamabad charge?',
          a: 'Accounting tutor rates in Islamabad vary based on the curriculum, the tutor experience, and the student level. Typically, rates range from PKR 2,000 to 4,500 per hour for home tuition. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive rates with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free trial session with an Accounting tutor?',
          a: 'Yes! We offer a free initial consultation and trial session. This allows you to assess the tutor teaching style and ensure they are the right fit for your child before committing to regular sessions. It is a risk-free way to experience the quality of our tutoring services.',
        },
        {
          q: 'Do you offer online Accounting tutoring as well?',
          a: 'Yes! While we specialise in <a href="/home-tutor-islamabad" class="text-[#E05C42] hover:underline font-black">home tuition in Islamabad</a>, we also offer <a href="/tutors?subject=Accounting" class="text-[#E05C42] hover:underline font-black">online Accounting tutoring</a> for students who prefer the flexibility of learning from home. Our online sessions are conducted via video call with interactive whiteboards and screen sharing, making them just as effective as in-person sessions.',
        },
        {
          q: 'Which areas of Islamabad do your home tutors cover?',
          a: 'Our Accounting home tutors cover all major areas of Islamabad including F-5 to F-17, G-5 to G-16, E-7 to E-17, D-12, I-8 to I-14, B-10 to B-17, C-12 to C-17, H-8 to H-13, DHA Islamabad (all phases), Bahria Enclave, Gulberg Greens, Park View City, Capital Smart City, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
        },
      ]}
      areas={ISLAMABAD_AREAS}
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
        { name: 'Quran Tutors', href: '/quran-tutor-islamabad', icon: '🕌' },
        { name: 'Urdu Tutors', href: '/urdu-tutor-islamabad', icon: '🖋️' },
        { name: 'Pakistan Studies Tutors', href: '/pakistan-studies-tutor-islamabad', icon: '🇵🇰' },
        { name: 'Islamic Studies Tutors', href: '/islamic-studies-tutor-islamabad', icon: '☪️' },
        { name: 'Economics Tutors', href: '/economics-tutor-islamabad', icon: '📈' },
        { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
        { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
      ]}
      nearbyCity="Rawalpindi"
      canonicalUrl={url}
    />
  )
}