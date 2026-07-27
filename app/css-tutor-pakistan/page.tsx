// import type { Metadata } from 'next'
// import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
// const url = `${SITE_URL}/css-tutor-pakistan`

// export const metadata: Metadata = {
//   title: 'Best CSS Tutor in Pakistan | Central Superior Services Exam Preparation',
//   description:
//     'Find verified CSS tutors in Pakistan for compulsory and optional subjects. Expert preparation for CSS exam including Pakistan Affairs, Current Affairs, English Essay & more. Free consultation.',
//   keywords: [
//     'CSS tutor Pakistan',
//     'CSS preparation Pakistan',
//     'CSS teacher Pakistan',
//     'best CSS tutor in Pakistan',
//     'CSS home tutor Pakistan',
//     'CSS exam preparation',
//     'CSS compulsory subjects tutor',
//     'CSS optional subjects tutor',
//     'Pakistan Affairs tutor',
//     'Current Affairs tutor',
//     'CSS English Essay tutor',
//     'CSS Urdu tutor',
//     'CSS Islamiat tutor',
//     'CSS online preparation',
//     'CSS coaching Pakistan',
//   ],
//   alternates: { canonical: url },
//   openGraph: {
//     title: 'Best CSS Tutor in Pakistan | Avenfield Tutors',
//     description: 'Verified CSS tutors in Pakistan for compulsory and optional subjects. Expert preparation for CSS exam including Pakistan Affairs, Current Affairs, English Essay & more. Free consultation available.',
//     type: 'website',
//     locale: 'en_PK',
//     siteName: 'Avenfield Tutors',
//     url,
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Best CSS Tutor in Pakistan | Avenfield Tutors',
//     description: 'Verified CSS tutors in Pakistan for compulsory and optional subjects. Expert preparation for CSS exam.',
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
//   onlineAvailable: ['Worldwide (Online CSS Preparation)'],
// }

// export default function CssTutorPakistanPage() {
//   return (
//     <SubjectLandingPage
//       subject="CSS"
//       city="Pakistan"
//       slug="css-tutor-pakistan"
//       pageTitle="Best CSS Tutor in Pakistan | Central Superior Services Exam Preparation"
//       pageDescription="Find verified CSS tutors in Pakistan for compulsory and optional subjects. Expert preparation for CSS exam including Pakistan Affairs, Current Affairs, English Essay & more. Free consultation."
//       metaKeywords={[
//         'CSS tutor Pakistan',
//         'CSS preparation Pakistan',
//         'CSS teacher Pakistan',
//         'best CSS tutor in Pakistan',
//         'CSS home tutor Pakistan',
//         'CSS exam preparation',
//         'CSS compulsory subjects tutor',
//         'CSS optional subjects tutor',
//         'Pakistan Affairs tutor',
//         'Current Affairs tutor',
//         'CSS English Essay tutor',
//         'CSS Urdu tutor',
//         'CSS Islamiat tutor',
//         'CSS online preparation',
//         'CSS coaching Pakistan',
//       ]}
//       subjectIcon="🏛️"
//       subjectEmoji="📋"
//       subjectOverview={[
//         `The <a href="/tutors?subject=CSS%20%2F%20PMS&city=Pakistan" class="text-[#E05C42] hover:underline font-black">CSS tutor in Pakistan</a> market is crucial for aspirants seeking to join the country's premier civil service. The Central Superior Services (CSS) exam is one of the most competitive examinations in Pakistan, requiring extensive preparation across compulsory and optional subjects. Our verified CSS tutors in Pakistan provide expert guidance to help candidates achieve their dream of joining the civil service.`,
//         `Whether you need assistance with <a href="/tutors?subject=CSS%20Pakistan%20Affairs" class="text-[#E05C42} hover:underline font-black">Pakistan Affairs</a>, <a href="/tutors?subject=CSS%20Current%20Affairs" class="text-[#E05C42} hover:underline font-black">Current Affairs</a>, <a href="/tutors?subject=CSS%20English%20Essay" class="text-[#E05C42} hover:underline font-black">English Essay &amp; Precis</a>, or <a href="/tutors?subject=CSS%20Optional%20Subjects" class="text-[#E05C42} hover:underline font-black">optional subjects</a>, our experienced tutors provide personalised support tailored to the CSS syllabus. They understand the unique challenges of the CSS examination — including the extensive syllabus, time management, and the need for critical analysis and effective writing skills.`,
//         `With a focus on building conceptual understanding and exam technique, our <a href="/tutors" class="text-[#E05C42} hover:underline font-black">online tutors</a> and <a href="/tutors" class="text-[#E05C42} hover:underline font-black">home tutors</a> provide the undivided attention that CSS preparation demands. This personalised approach is particularly effective for aspirants who need help with complex topics like Pakistan's constitutional history, economic policies, and international relations.`,
//       ]}
//       subjectDetails={[
//         `Our <strong class="text-[#2E4F5E]">CSS tutors in Pakistan</strong> are subject matter experts with advanced degrees and extensive experience in CSS preparation. Many have themselves cleared the CSS exam and understand the examination's demands firsthand. They have deep knowledge of the <strong class="text-[#2E4F5E]">CSS syllabus</strong>, marking schemes, and examiner expectations.`,
//         `We cover <strong class="text-[#2E4F5E]">all compulsory CSS subjects</strong> including English Essay, English Precis &amp; Composition, Pakistan Affairs, Current Affairs, General Science &amp; Ability, and Islamic Studies. We also offer tuition for <strong class="text-[#2E4F5E]">all optional subjects</strong> including Political Science, Economics, International Relations, History, Geography, and more.`,
//         `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">critical writing skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target scores. Special emphasis is placed on essay writing, precis writing, and analytical skills — which are crucial for success in CSS.`,
//         `We understand that CSS preparation is a long and demanding journey. That's why our tutors provide <strong class="text-[#2E4F5E]">comprehensive guidance</strong> — from subject mastery to exam strategy, time management, and interview preparation. Our goal is to help every aspirant reach their full potential and achieve their dream of serving Pakistan.`,
//       ]}
//       examBoards={['CSS (Central Superior Services)', 'CE 2025', 'CE 2026']}
//       targetExams={['CSS Competitive Exam', 'PMS', 'Central Superior Services']}
//       commonTopics={[
//         'Pakistan Affairs',
//         'Current Affairs',
//         'English Essay & Precis',
//         'General Science & Ability',
//         'Islamic Studies',
//         'Political Science',
//         'International Relations',
//         'Economics',
//         'History & Geography',
//         'Constitutional Law',
//       ]}
//       whyChoose={[
//         'Our CSS tutors in Pakistan are <strong>subject matter experts</strong> with advanced degrees and extensive experience in CSS preparation — many have themselves cleared the CSS exam.',
//         'We provide <strong>personalised study plans</strong> tailored to each student\'s strengths, weaknesses, and target CSS attempt. Each session is focused on your specific needs and goals.',
//         'Our tutors use <strong>proven teaching methodologies</strong> — including past paper analysis, mock tests, essay writing practice, and detailed feedback — to ensure comprehensive preparation.',
//         'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit CSS preparation into your busy schedule. We also provide guidance on optional subject selection based on your background and interests.',
//       ]}
//       faqs={[
//         {
//           q: 'What qualifications do your CSS tutors in Pakistan have?',
//           a: 'All our CSS tutors are highly qualified professionals with advanced degrees and extensive experience in CSS preparation. Many have themselves cleared the CSS exam and are serving or retired civil servants. They have deep knowledge of the CSS syllabus, marking schemes, and examiner expectations. Our tutors also include subject specialists for optional subjects like Political Science, Economics, International Relations, and more.',
//         },
//         {
//           q: 'Which CSS subjects do you offer tuition for?',
//           a: 'We offer tuition for all compulsory CSS subjects including English Essay, English Precis & Composition, Pakistan Affairs, Current Affairs, General Science & Ability, and Islamic Studies. We also offer tuition for all optional subjects including Political Science, Economics, International Relations, History, Geography, Public Administration, Sociology, Psychology, and more. If you need a specific subject not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">contact us on WhatsApp</a> and we\'ll find a tutor for you.',
//         },
//         {
//           q: 'How much do CSS tutors in Pakistan charge?',
//           a: 'CSS tutor rates in Pakistan vary based on the subject, the tutor\'s experience, and the student\'s requirements. Typically, rates range from PKR 2,500 to 5,000 per hour for home tuition. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive rates with complete transparency and no hidden charges.',
//         },
//         {
//           q: 'Can I get a free trial session with a CSS tutor?',
//           a: 'Yes! We offer a free initial consultation and trial session. This allows you to assess the tutor\'s teaching style and ensure they\'re the right fit for your CSS preparation before committing to regular sessions. It\'s a risk-free way to experience the quality of our tutoring services.',
//         },
//         {
//           q: 'Do you offer online CSS tutoring as well?',
//           a: 'Yes! While we specialise in <a href="/home-tutor-islamabad" class="text-[#E05C42] hover:underline font-black">home tuition</a>, we also offer <a href="/tutors?subject=CSS%20%2F%20PMS" class="text-[#E05C42] hover:underline font-black">online CSS tutoring</a> for students who prefer the flexibility of learning from home or who are based outside major cities. Our online sessions are conducted via video call with interactive whiteboards and screen sharing, making them just as effective as in-person sessions.',
//         },
//         {
//           q: 'Which cities in Pakistan do your home tutors cover?',
//           a: 'Our CSS home tutors cover all major cities in Pakistan including Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Quetta, Faisalabad, Multan, Hyderabad, and many more. We also offer online CSS tutoring available worldwide. If you\'re in a city not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we\'ll confirm availability.',
//         },
//       ]}
//       areas={PAKISTAN_AREAS}
//       relatedSubjects={[
//         { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
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
const url = `${SITE_URL}/css-tutor-pakistan`

export const metadata: Metadata = {
  title: 'Best CSS Tutor in Pakistan | Central Superior Services Exam Preparation',
  description:
    'Expert CSS tutors in Pakistan for compulsory and optional subjects. Prepare for Pakistan Affairs, Current Affairs, English Essay, and more with personalised guidance. Free consultation.',
  keywords: [
    'CSS tutor Pakistan',
    'CSS preparation Pakistan',
    'CSS teacher Pakistan',
    'best CSS tutor in Pakistan',
    'CSS home tutor Pakistan',
    'CSS exam preparation',
    'CSS compulsory subjects tutor',
    'CSS optional subjects tutor',
    'Pakistan Affairs tutor',
    'Current Affairs tutor',
    'CSS English Essay tutor',
    'CSS Urdu tutor',
    'CSS Islamiat tutor',
    'CSS online preparation',
    'CSS coaching Pakistan',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best CSS Tutor in Pakistan | Avenfield Tutors',
    description: 'Expert CSS tutors in Pakistan for compulsory and optional subjects. Prepare for Pakistan Affairs, Current Affairs, English Essay, and more. Free consultation.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best CSS Tutor in Pakistan | Avenfield Tutors',
    description: 'Expert CSS tutors in Pakistan for compulsory and optional subjects. Free consultation.',
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
  onlineAvailable: ['Worldwide (Online CSS Preparation)'],
}

export default function CssTutorPakistanPage() {
  return (
    <SubjectLandingPage
      subject="CSS"
      city="Pakistan"
      slug="css-tutor-pakistan"
      pageTitle="Best CSS Tutor in Pakistan | Central Superior Services Exam Preparation"
      pageDescription="Expert CSS tutors in Pakistan for compulsory and optional subjects. Prepare for Pakistan Affairs, Current Affairs, English Essay, and more with personalised guidance. Free consultation."
      metaKeywords={[
        'CSS tutor Pakistan',
        'CSS preparation Pakistan',
        'CSS teacher Pakistan',
        'best CSS tutor in Pakistan',
        'CSS home tutor Pakistan',
        'CSS exam preparation',
        'CSS compulsory subjects tutor',
        'CSS optional subjects tutor',
        'Pakistan Affairs tutor',
        'Current Affairs tutor',
        'CSS English Essay tutor',
        'CSS Urdu tutor',
        'CSS Islamiat tutor',
        'CSS online preparation',
        'CSS coaching Pakistan',
      ]}
      subjectIcon="🏛️"
      subjectEmoji="📋"
      subjectOverview={[
        `The <a href="/tutors?subject=CSS%20%2F%20PMS&city=Pakistan" class="text-[#E05C42] hover:underline font-black">CSS tutor in Pakistan</a> market is crucial for aspirants seeking to join the country premier civil service. The Central Superior Services (CSS) exam is one of the most competitive examinations in Pakistan, requiring extensive preparation across compulsory and optional subjects. Our verified CSS tutors in Pakistan provide expert guidance to help candidates achieve their dream of joining the civil service.`,
        `Whether you need assistance with <a href="/tutors?subject=CSS%20Pakistan%20Affairs" class="text-[#E05C42] hover:underline font-black">Pakistan Affairs</a>, <a href="/tutors?subject=CSS%20Current%20Affairs" class="text-[#E05C42] hover:underline font-black">Current Affairs</a>, <a href="/tutors?subject=CSS%20English%20Essay" class="text-[#E05C42] hover:underline font-black">English Essay &amp; Precis</a>, or <a href="/tutors?subject=CSS%20Optional%20Subjects" class="text-[#E05C42] hover:underline font-black">optional subjects</a>, our experienced tutors provide personalised support tailored to the CSS syllabus. They understand the unique challenges of the CSS examination including the extensive syllabus, time management, and the need for critical analysis and effective writing skills.`,
        `With a focus on building conceptual understanding and exam technique, our <a href="/tutors" class="text-[#E05C42] hover:underline font-black">online tutors</a> and <a href="/tutors" class="text-[#E05C42] hover:underline font-black">home tutors</a> provide the undivided attention that CSS preparation demands. This personalised approach is particularly effective for aspirants who need help with complex topics like Pakistan constitutional history, economic policies, and international relations.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">CSS tutors in Pakistan</strong> are subject matter experts with advanced degrees and extensive experience in CSS preparation. Many have themselves cleared the CSS exam and understand the examination demands firsthand. They have deep knowledge of the <strong class="text-[#2E4F5E]">CSS syllabus</strong>, marking schemes, and examiner expectations.`,
        `We cover <strong class="text-[#2E4F5E]">all compulsory CSS subjects</strong> including English Essay, English Precis &amp; Composition, Pakistan Affairs, Current Affairs, General Science &amp; Ability, and Islamic Studies. We also offer tuition for <strong class="text-[#2E4F5E]">all optional subjects</strong> including Political Science, Economics, International Relations, History, Geography, and more.`,
        `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">critical writing skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target scores. Special emphasis is placed on essay writing, precis writing, and analytical skills which are crucial for success in CSS.`,
        `We understand that CSS preparation is a long and demanding journey. That is why our tutors provide <strong class="text-[#2E4F5E]">comprehensive guidance</strong> from subject mastery to exam strategy, time management, and interview preparation. Our goal is to help every aspirant reach their full potential and achieve their dream of serving Pakistan.`,
      ]}
      examBoards={['CSS (Central Superior Services)', 'CE 2025', 'CE 2026']}
      targetExams={['CSS Competitive Exam', 'PMS', 'Central Superior Services']}
      commonTopics={[
        'Pakistan Affairs',
        'Current Affairs',
        'English Essay & Precis',
        'General Science & Ability',
        'Islamic Studies',
        'Political Science',
        'International Relations',
        'Economics',
        'History & Geography',
        'Constitutional Law',
      ]}
      whyChoose={[
        'Our CSS tutors in Pakistan are <strong>subject matter experts</strong> with advanced degrees and extensive experience in CSS preparation — many have themselves cleared the CSS exam.',
        'We provide <strong>personalised study plans</strong> tailored to each student strengths, weaknesses, and target CSS attempt. Each session is focused on your specific needs and goals.',
        'Our tutors use <strong>proven teaching methodologies</strong> including past paper analysis, mock tests, essay writing practice, and detailed feedback to ensure comprehensive preparation.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit CSS preparation into your busy schedule. We also provide guidance on optional subject selection based on your background and interests.',
      ]}
      faqs={[
        {
          q: 'What qualifications do your CSS tutors in Pakistan have?',
          a: 'All our CSS tutors are highly qualified professionals with advanced degrees and extensive experience in CSS preparation. Many have themselves cleared the CSS exam and are serving or retired civil servants. They have deep knowledge of the CSS syllabus, marking schemes, and examiner expectations. Our tutors also include subject specialists for optional subjects like Political Science, Economics, International Relations, and more.',
        },
        {
          q: 'Which CSS subjects do you offer tuition for?',
          a: 'We offer tuition for all compulsory CSS subjects including English Essay, English Precis & Composition, Pakistan Affairs, Current Affairs, General Science & Ability, and Islamic Studies. We also offer tuition for all optional subjects including Political Science, Economics, International Relations, History, Geography, Public Administration, Sociology, Psychology, and more. If you need a specific subject not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">contact us on WhatsApp</a> and we will find a tutor for you.',
        },
        {
          q: 'How much do CSS tutors in Pakistan charge?',
          a: 'CSS tutor rates in Pakistan vary based on the subject, the tutor experience, and the student requirements. Typically, rates range from PKR 2,500 to 5,000 per hour for home tuition. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive rates with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free trial session with a CSS tutor?',
          a: 'Yes! We offer a free initial consultation and trial session. This allows you to assess the tutor teaching style and ensure they are the right fit for your CSS preparation before committing to regular sessions. It is a risk-free way to experience the quality of our tutoring services.',
        },
        {
          q: 'Do you offer online CSS tutoring as well?',
          a: 'Yes! While we specialise in <a href="/home-tutor-islamabad" class="text-[#E05C42] hover:underline font-black">home tuition</a>, we also offer <a href="/tutors?subject=CSS%20%2F%20PMS" class="text-[#E05C42] hover:underline font-black">online CSS tutoring</a> for students who prefer the flexibility of learning from home or who are based outside major cities. Our online sessions are conducted via video call with interactive whiteboards and screen sharing, making them just as effective as in-person sessions.',
        },
        {
          q: 'Which cities in Pakistan do your home tutors cover?',
          a: 'Our CSS home tutors cover all major cities in Pakistan including Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Quetta, Faisalabad, Multan, Hyderabad, and many more. We also offer online CSS tutoring available worldwide. If you are in a city not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
        },
      ]}
      areas={PAKISTAN_AREAS}
      relatedSubjects={[
        { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
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