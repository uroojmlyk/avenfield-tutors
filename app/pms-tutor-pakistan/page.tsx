// import type { Metadata } from 'next'
// import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
// const url = `${SITE_URL}/pms-tutor-pakistan`

// export const metadata: Metadata = {
//   title: 'Best PMS Tutor in Pakistan | Provincial Management Service Exam Preparation',
//   description:
//     'Find verified PMS tutors in Pakistan for compulsory and optional subjects. Expert preparation for PMS exam including Pakistan Affairs, Current Affairs, English & more. Free consultation.',
//   keywords: [
//     'PMS tutor Pakistan',
//     'PMS preparation Pakistan',
//     'PMS teacher Pakistan',
//     'best PMS tutor in Pakistan',
//     'PMS home tutor Pakistan',
//     'PMS exam preparation',
//     'PMS compulsory subjects tutor',
//     'PMS optional subjects tutor',
//     'Pakistan Affairs tutor',
//     'Current Affairs tutor',
//     'PMS English Essay tutor',
//     'PMS Urdu tutor',
//     'PMS Islamiat tutor',
//     'PMS online preparation',
//     'PMS coaching Pakistan',
//   ],
//   alternates: { canonical: url },
//   openGraph: {
//     title: 'Best PMS Tutor in Pakistan | Avenfield Tutors',
//     description: 'Verified PMS tutors in Pakistan for compulsory and optional subjects. Expert preparation for PMS exam including Pakistan Affairs, Current Affairs, English & more. Free consultation available.',
//     type: 'website',
//     locale: 'en_PK',
//     siteName: 'Avenfield Tutors',
//     url,
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Best PMS Tutor in Pakistan | Avenfield Tutors',
//     description: 'Verified PMS tutors in Pakistan for compulsory and optional subjects. Expert preparation for PMS exam.',
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

// // Pakistan-wide areas coverage
// const PAKISTAN_AREAS = {
//   majorCities: [
//     'Islamabad',
//     'Rawalpindi',
//     'Lahore',
//     'Karachi',
//     'Peshawar',
//     'Quetta',
//     'Faisalabad',
//     'Multan',
//     'Hyderabad',
//     'Gujranwala',
//     'Sialkot',
//     'Sargodha',
//     'Bahawalpur',
//     'Sukkur',
//     'Larkana',
//     'Mardan',
//     'Mingora',
//     'Abbottabad',
//     'Mansehra',
//     'Kohat',
//     'Dera Ismail Khan',
//     'Mirpur Khas',
//     'Nawabshah',
//     'Rahim Yar Khan',
//     'Okara',
//     'Sahiwal',
//     'Kasur',
//     'Sheikhupura',
//   ],
//   regions: [
//     'Punjab (All Major Cities)',
//     'Sindh (All Major Cities)',
//     'Khyber Pakhtunkhwa (All Major Cities)',
//     'Balochistan (All Major Cities)',
//     'Gilgit-Baltistan',
//     'Azad Jammu & Kashmir',
//     'FATA',
//   ],
//   onlineAvailable: ['Worldwide (Online PMS Preparation)'],
// }

// export default function PmsTutorPakistanPage() {
//   return (
//     <SubjectLandingPage
//       subject="PMS"
//       city="Pakistan"
//       slug="pms-tutor-pakistan"
//       pageTitle="Best PMS Tutor in Pakistan | Provincial Management Service Exam Preparation"
//       pageDescription="Find verified PMS tutors in Pakistan for compulsory and optional subjects. Expert preparation for PMS exam including Pakistan Affairs, Current Affairs, English & more. Free consultation."
//       metaKeywords={[
//         'PMS tutor Pakistan',
//         'PMS preparation Pakistan',
//         'PMS teacher Pakistan',
//         'best PMS tutor in Pakistan',
//         'PMS home tutor Pakistan',
//         'PMS exam preparation',
//         'PMS compulsory subjects tutor',
//         'PMS optional subjects tutor',
//         'Pakistan Affairs tutor',
//         'Current Affairs tutor',
//         'PMS English Essay tutor',
//         'PMS Urdu tutor',
//         'PMS Islamiat tutor',
//         'PMS online preparation',
//         'PMS coaching Pakistan',
//       ]}
//       subjectIcon="🏛️"
//       subjectEmoji="📜"
//       subjectOverview={[
//         `The <a href="/tutors?subject=CSS%20%2F%20PMS&city=Pakistan" class="text-[#E05C42} hover:underline font-black">PMS tutor in Pakistan</a> market is growing as aspirants seek to join provincial civil services through the Provincial Management Service (PMS) exam. The PMS exam is conducted by each province's Public Service Commission (PPSC, SPSC, BPSC, KPKPSC) and offers a prestigious career in provincial administration. Our verified PMS tutors in Pakistan provide expert guidance to help candidates achieve their career goals.`,
//         `Whether you need assistance with <a href="/tutors?subject=PMS%20Pakistan%20Affairs" class="text-[#E05C42} hover:underline font-black">Pakistan Affairs</a>, <a href="/tutors?subject=PMS%20Current%20Affairs" class="text-[#E05C42} hover:underline font-black">Current Affairs</a>, <a href="/tutors?subject=PMS%20English%20Essay" class="text-[#E05C42} hover:underline font-black">English Essay &amp; Precis</a>, or <a href="/tutors?subject=PMS%20Optional%20Subjects" class="text-[#E05C42} hover:underline font-black">optional subjects</a>, our experienced tutors provide personalised support tailored to the PMS syllabus of each province. They understand the unique challenges of the PMS examination and help aspirants develop the skills needed for success.`,
//         `With a focus on building conceptual understanding and exam technique, our <a href="/tutors" class="text-[#E05C42} hover:underline font-black">online tutors</a> and <a href="/tutors" class="text-[#E05C42} hover:underline font-black">home tutors</a> provide the undivided attention that PMS preparation demands. This personalised approach is particularly effective for aspirants who need help with complex topics like provincial governance, economic development, and current affairs.`,
//       ]}
//       subjectDetails={[
//         `Our <strong class="text-[#2E4F5E]">PMS tutors in Pakistan</strong> are subject matter experts with extensive experience in PMS preparation. Many have themselves cleared the PMS or CSS exam and understand the examination's demands firsthand. They have deep knowledge of the <strong class="text-[#2E4F5E]">PMS syllabus</strong> for each province — PPSC, SPSC, BPSC, and KPKPSC.`,
//         `We cover <strong class="text-[#2E4F5E]">all compulsory PMS subjects</strong> including English Essay, English Precis &amp; Composition, Pakistan Affairs, Current Affairs, General Knowledge, and Islamic Studies. We also offer tuition for <strong class="text-[#2E4F5E]">all optional subjects</strong> including Political Science, Economics, International Relations, History, Geography, Public Administration, Sociology, and more.`,
//         `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">critical writing skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target scores. Special emphasis is placed on essay writing, precis writing, and analytical skills — which are crucial for success in PMS.`,
//         `We understand that PMS preparation requires a comprehensive approach. That's why our tutors provide <strong class="text-[#2E4F5E]">complete guidance</strong> — from subject mastery to exam strategy, time management, and interview preparation. Our goal is to help every aspirant reach their full potential and achieve their dream of serving in provincial government.`,
//       ]}
//       examBoards={['PPSC PMS', 'SPSC PMS', 'BPSC PMS', 'KPKPSC PMS']}
//       targetExams={['PMS', 'Provincial Management Service', 'PPSC', 'SPSC', 'BPSC', 'KPKPSC']}
//       commonTopics={[
//         'Pakistan Affairs',
//         'Current Affairs',
//         'English Essay & Precis',
//         'General Knowledge',
//         'Islamic Studies',
//         'Political Science',
//         'International Relations',
//         'Economics',
//         'Public Administration',
//         'Provincial Governance',
//       ]}
//       whyChoose={[
//         'Our PMS tutors in Pakistan are <strong>subject matter experts</strong> with extensive experience in PMS preparation — many have themselves cleared the PMS or CSS exam.',
//         'We provide <strong>personalised study plans</strong> tailored to each student\'s strengths, weaknesses, and target PMS attempt. Each session is focused on your specific needs and goals.',
//         'Our tutors use <strong>proven teaching methodologies</strong> — including past paper analysis, mock tests, essay writing practice, and detailed feedback — to ensure comprehensive preparation.',
//         'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit PMS preparation into your busy schedule. We also provide guidance on optional subject selection based on your background and interests.',
//       ]}
//       faqs={[
//         {
//           q: 'What qualifications do your PMS tutors in Pakistan have?',
//           a: 'All our PMS tutors are highly qualified professionals with extensive experience in PMS preparation. Many have themselves cleared the PMS or CSS exam and are serving or retired civil servants. They have deep knowledge of the PMS syllabus for each province — PPSC, SPSC, BPSC, and KPKPSC — and understand the specific requirements of each provincial examination.',
//         },
//         {
//           q: 'Which PMS subjects do you offer tuition for?',
//           a: 'We offer tuition for all compulsory PMS subjects including English Essay, English Precis & Composition, Pakistan Affairs, Current Affairs, General Knowledge, and Islamic Studies. We also offer tuition for all optional subjects including Political Science, Economics, International Relations, History, Geography, Public Administration, Sociology, Psychology, and more. If you need a specific subject not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">contact us on WhatsApp</a> and we\'ll find a tutor for you.',
//         },
//         {
//           q: 'How much do PMS tutors in Pakistan charge?',
//           a: 'PMS tutor rates in Pakistan vary based on the subject, the tutor\'s experience, and the student\'s requirements. Typically, rates range from PKR 2,500 to 5,000 per hour for home tuition. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive rates with complete transparency and no hidden charges.',
//         },
//         {
//           q: 'Can I get a free trial session with a PMS tutor?',
//           a: 'Yes! We offer a free initial consultation and trial session. This allows you to assess the tutor\'s teaching style and ensure they\'re the right fit for your PMS preparation before committing to regular sessions. It\'s a risk-free way to experience the quality of our tutoring services.',
//         },
//         {
//           q: 'Do you offer online PMS tutoring as well?',
//           a: 'Yes! While we specialise in <a href="/home-tutor-islamabad" class="text-[#E05C42] hover:underline font-black">home tuition</a>, we also offer <a href="/tutors?subject=CSS%20%2F%20PMS" class="text-[#E05C42] hover:underline font-black">online PMS tutoring</a> for students who prefer the flexibility of learning from home or who are based outside major cities. Our online sessions are conducted via video call with interactive whiteboards and screen sharing, making them just as effective as in-person sessions.',
//         },
//         {
//           q: 'Which cities in Pakistan do your home tutors cover?',
//           a: 'Our PMS home tutors cover all major cities in Pakistan including Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Quetta, Faisalabad, Multan, Hyderabad, and many more. We also offer online PMS tutoring available worldwide. If you\'re in a city not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we\'ll confirm availability.',
//         },
//       ]}
//       areas={PAKISTAN_AREAS}
//       relatedSubjects={[
//         { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
//         { name: 'O Level Tutors', href: '/o-level-tutor-islamabad', icon: '📚' },
//         { name: 'A Level Tutors', href: '/a-level-tutor-islamabad', icon: '🎯' },
//         { name: 'IELTS Tutors', href: '/ielts-tutor-islamabad', icon: '🎓' },
//         { name: 'MDCAT Tutors', href: '/mdcat-tutor-islamabad', icon: '🩺' },
//         { name: 'Pakistan Studies Tutors', href: '/pakistan-studies-tutor-islamabad', icon: '🇵🇰' },
//         { name: 'Economics Tutors', href: '/economics-tutor-islamabad', icon: '📊' },
//         { name: 'English Tutors', href: '/english-tutor-islamabad', icon: '📝' },
//       ]}
//       nearbyCity=""
//       canonicalUrl={url}
//     />
//   )
// }

import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/pms-tutor-pakistan`

export const metadata: Metadata = {
  title: 'Best PMS Tutor in Pakistan | Provincial Management Service Exam Preparation',
  description:
    'Qualified PMS tutors in Pakistan for compulsory and optional subjects. Prepare for PPSC, SPSC, BPSC & KPKPSC PMS exams with expert guidance on Pakistan Affairs, Current Affairs & more. Free consultation.',
  keywords: [
    'PMS tutor Pakistan',
    'PMS preparation Pakistan',
    'PMS teacher Pakistan',
    'best PMS tutor in Pakistan',
    'PMS home tutor Pakistan',
    'PMS exam preparation',
    'PMS compulsory subjects tutor',
    'PMS optional subjects tutor',
    'Pakistan Affairs tutor',
    'Current Affairs tutor',
    'PMS English Essay tutor',
    'PMS Urdu tutor',
    'PMS Islamiat tutor',
    'PMS online preparation',
    'PMS coaching Pakistan',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best PMS Tutor in Pakistan | Avenfield Tutors',
    description: 'Qualified PMS tutors in Pakistan for compulsory and optional subjects. Prepare for PPSC, SPSC, BPSC & KPKPSC PMS exams with expert guidance. Free consultation.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best PMS Tutor in Pakistan | Avenfield Tutors',
    description: 'Qualified PMS tutors in Pakistan for compulsory and optional subjects. Free consultation.',
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

const PAKISTAN_AREAS = {
  majorCities: [
    'Islamabad', 'Rawalpindi', 'Lahore', 'Karachi', 'Peshawar', 'Quetta',
    'Faisalabad', 'Multan', 'Hyderabad', 'Gujranwala', 'Sialkot', 'Sargodha',
    'Bahawalpur', 'Sukkur', 'Larkana', 'Mardan', 'Mingora', 'Abbottabad',
    'Mansehra', 'Kohat', 'Dera Ismail Khan', 'Mirpur Khas', 'Nawabshah',
    'Rahim Yar Khan', 'Okara', 'Sahiwal', 'Kasur', 'Sheikhupura',
  ],
  regions: [
    'Punjab (All Major Cities)',
    'Sindh (All Major Cities)',
    'Khyber Pakhtunkhwa (All Major Cities)',
    'Balochistan (All Major Cities)',
    'Gilgit-Baltistan',
    'Azad Jammu & Kashmir',
    'FATA',
  ],
  onlineAvailable: ['Worldwide (Online PMS Preparation)'],
}

export default function PmsTutorPakistanPage() {
  return (
    <SubjectLandingPage
      subject="PMS"
      city="Pakistan"
      slug="pms-tutor-pakistan"
      pageTitle="Best PMS Tutor in Pakistan | Provincial Management Service Exam Preparation"
      pageDescription="Qualified PMS tutors in Pakistan for compulsory and optional subjects. Prepare for PPSC, SPSC, BPSC & KPKPSC PMS exams with expert guidance on Pakistan Affairs, Current Affairs & more. Free consultation."
      metaKeywords={[
        'PMS tutor Pakistan',
        'PMS preparation Pakistan',
        'PMS teacher Pakistan',
        'best PMS tutor in Pakistan',
        'PMS home tutor Pakistan',
        'PMS exam preparation',
        'PMS compulsory subjects tutor',
        'PMS optional subjects tutor',
        'Pakistan Affairs tutor',
        'Current Affairs tutor',
        'PMS English Essay tutor',
        'PMS Urdu tutor',
        'PMS Islamiat tutor',
        'PMS online preparation',
        'PMS coaching Pakistan',
      ]}
      subjectIcon="📋"
      subjectEmoji="📜"
      subjectOverview={[
        `The <a href="/tutors?subject=CSS%20%2F%20PMS&city=Pakistan" class="text-[#E05C42] hover:underline font-black">PMS tutor in Pakistan</a> market is growing as aspirants seek to join provincial civil services through the Provincial Management Service (PMS) exam. The PMS exam is conducted by each province Public Service Commission (PPSC, SPSC, BPSC, KPKPSC) and offers a prestigious career in provincial administration. Our verified PMS tutors in Pakistan provide expert guidance to help candidates achieve their career goals.`,
        `Whether you need assistance with <a href="/tutors?subject=PMS%20Pakistan%20Affairs" class="text-[#E05C42] hover:underline font-black">Pakistan Affairs</a>, <a href="/tutors?subject=PMS%20Current%20Affairs" class="text-[#E05C42] hover:underline font-black">Current Affairs</a>, <a href="/tutors?subject=PMS%20English%20Essay" class="text-[#E05C42] hover:underline font-black">English Essay &amp; Precis</a>, or <a href="/tutors?subject=PMS%20Optional%20Subjects" class="text-[#E05C42] hover:underline font-black">optional subjects</a>, our experienced tutors provide personalised support tailored to the PMS syllabus of each province. They understand the unique challenges of the PMS examination and help aspirants develop the skills needed for success.`,
        `With a focus on building conceptual understanding and exam technique, our <a href="/tutors" class="text-[#E05C42] hover:underline font-black">online tutors</a> and <a href="/tutors" class="text-[#E05C42] hover:underline font-black">home tutors</a> provide the undivided attention that PMS preparation demands. This personalised approach is particularly effective for aspirants who need help with complex topics like provincial governance, economic development, and current affairs.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">PMS tutors in Pakistan</strong> are subject matter experts with extensive experience in PMS preparation. Many have themselves cleared the PMS or CSS exam and understand the examination demands firsthand. They have deep knowledge of the <strong class="text-[#2E4F5E]">PMS syllabus</strong> for each province — PPSC, SPSC, BPSC, and KPKPSC.`,
        `We cover <strong class="text-[#2E4F5E]">all compulsory PMS subjects</strong> including English Essay, English Precis &amp; Composition, Pakistan Affairs, Current Affairs, General Knowledge, and Islamic Studies. We also offer tuition for <strong class="text-[#2E4F5E]">all optional subjects</strong> including Political Science, Economics, International Relations, History, Geography, Public Administration, Sociology, and more.`,
        `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">critical writing skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target scores. Special emphasis is placed on essay writing, precis writing, and analytical skills which are crucial for success in PMS.`,
        `We understand that PMS preparation requires a comprehensive approach. That is why our tutors provide <strong class="text-[#2E4F5E]">complete guidance</strong> from subject mastery to exam strategy, time management, and interview preparation. Our goal is to help every aspirant reach their full potential and achieve their dream of serving in provincial government.`,
      ]}
      examBoards={['PPSC PMS', 'SPSC PMS', 'BPSC PMS', 'KPKPSC PMS']}
      targetExams={['PMS', 'Provincial Management Service', 'PPSC', 'SPSC', 'BPSC', 'KPKPSC']}
      commonTopics={[
        'Pakistan Affairs',
        'Current Affairs',
        'English Essay & Precis',
        'General Knowledge',
        'Islamic Studies',
        'Political Science',
        'International Relations',
        'Economics',
        'Public Administration',
        'Provincial Governance',
      ]}
      whyChoose={[
        'Our PMS tutors in Pakistan are <strong>subject matter experts</strong> with extensive experience in PMS preparation — many have themselves cleared the PMS or CSS exam.',
        'We provide <strong>personalised study plans</strong> tailored to each student strengths, weaknesses, and target PMS attempt. Each session is focused on your specific needs and goals.',
        'Our tutors use <strong>proven teaching methodologies</strong> including past paper analysis, mock tests, essay writing practice, and detailed feedback to ensure comprehensive preparation.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit PMS preparation into your busy schedule. We also provide guidance on optional subject selection based on your background and interests.',
      ]}
      faqs={[
        {
          q: 'What qualifications do your PMS tutors in Pakistan have?',
          a: 'All our PMS tutors are highly qualified professionals with extensive experience in PMS preparation. Many have themselves cleared the PMS or CSS exam and are serving or retired civil servants. They have deep knowledge of the PMS syllabus for each province — PPSC, SPSC, BPSC, and KPKPSC — and understand the specific requirements of each provincial examination.',
        },
        {
          q: 'Which PMS subjects do you offer tuition for?',
          a: 'We offer tuition for all compulsory PMS subjects including English Essay, English Precis & Composition, Pakistan Affairs, Current Affairs, General Knowledge, and Islamic Studies. We also offer tuition for all optional subjects including Political Science, Economics, International Relations, History, Geography, Public Administration, Sociology, Psychology, and more. If you need a specific subject not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">contact us on WhatsApp</a> and we will find a tutor for you.',
        },
        {
          q: 'How much do PMS tutors in Pakistan charge?',
          a: 'PMS tutor rates in Pakistan vary based on the subject, the tutor experience, and the student requirements. Typically, rates range from PKR 2,500 to 5,000 per hour for home tuition. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive rates with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free trial session with a PMS tutor?',
          a: 'Yes! We offer a free initial consultation and trial session. This allows you to assess the tutor teaching style and ensure they are the right fit for your PMS preparation before committing to regular sessions. It is a risk-free way to experience the quality of our tutoring services.',
        },
        {
          q: 'Do you offer online PMS tutoring as well?',
          a: 'Yes! While we specialise in <a href="/home-tutor-islamabad" class="text-[#E05C42] hover:underline font-black">home tuition</a>, we also offer <a href="/tutors?subject=CSS%20%2F%20PMS" class="text-[#E05C42] hover:underline font-black">online PMS tutoring</a> for students who prefer the flexibility of learning from home or who are based outside major cities. Our online sessions are conducted via video call with interactive whiteboards and screen sharing, making them just as effective as in-person sessions.',
        },
        {
          q: 'Which cities in Pakistan do your home tutors cover?',
          a: 'Our PMS home tutors cover all major cities in Pakistan including Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Quetta, Faisalabad, Multan, Hyderabad, and many more. We also offer online PMS tutoring available worldwide. If you are in a city not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
        },
      ]}
      areas={PAKISTAN_AREAS}
      relatedSubjects={[
        { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
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
        { name: 'Accounting Tutors', href: '/accounting-tutor-islamabad', icon: '📊' },
        { name: 'Economics Tutors', href: '/economics-tutor-islamabad', icon: '📈' },
      ]}
      nearbyCity=""
      canonicalUrl={url}
    />
  )
}