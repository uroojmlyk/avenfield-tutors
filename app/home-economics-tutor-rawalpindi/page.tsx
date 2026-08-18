// import type { Metadata } from 'next'
// import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
// const url = `${SITE_URL}/home-economics-tutor-rawalpindi`

// export const metadata: Metadata = {
//   title: 'Best Home Economics Tutor in Rawalpindi | O Level, A Level, FSc & University Economics',
//   description:
//     'Find qualified home economics tutors in Rawalpindi for O Level, A Level, FSc, University & Business Economics. Learn Microeconomics, Macroeconomics & International Trade. Male & female tutors available. Free demo class.',
//   keywords: [
//     'home economics tutor Rawalpindi',
//     'economics tutor Rawalpindi',
//     'economics teacher Rawalpindi',
//     'home tuition Rawalpindi',
//     'O Level economics tutor Rawalpindi',
//     'A Level economics tutor Rawalpindi',
//     'FSc economics tutor Rawalpindi',
//     'Microeconomics tutor',
//     'Macroeconomics tutor',
//     'International Trade tutor',
//     'best economics tutor in Rawalpindi',
//     'female economics tutor Rawalpindi',
//   ],
//   alternates: { canonical: url },
//   openGraph: {
//     title: 'Best Home Economics Tutor in Rawalpindi | Avenfield Tutors',
//     description: 'Qualified home economics tutors in Rawalpindi for O Level, A Level, FSc, University & Business Economics. Male & female tutors available. Free demo class.',
//     type: 'website',
//     locale: 'en_PK',
//     siteName: 'Avenfield Tutors',
//     url,
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Best Home Economics Tutor in Rawalpindi | Avenfield Tutors',
//     description: 'Qualified home economics tutors in Rawalpindi for O Level, A Level, FSc, University & Business Economics.',
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

// const RAWALPINDI_AREAS = {
//   housingSocieties: [
//     'Bahria Town Rawalpindi (All Phases)',
//     'DHA Rawalpindi (All Phases)',
//     'Askari Housing Schemes',
//     'Gulraiz Housing Scheme',
//     'Westridge Housing Scheme',
//     'Saddar',
//     'Satellite Town',
//     'Chaklala',
//     'Adiala Road',
//     'Rawat',
//     'Sixth Road',
//     'Tenant Colony',
//     'Lalazar',
//     'Peshawar Road',
//     'Fazal Town',
//     'Sadiqabad',
//     'Chah Sultan',
//     'Dhoke Kala Khan',
//     'Dhoke Ratta',
//     'Dhoke Chaudhry',
//     'Dhoke Jee',
//     'Dhoke Khabba',
//     'Dhoke Mohri',
//     'Dhoke Syedan',
//     'Dhoke Mangal',
//     'Dhoke Chohan',
//     'Gulshan-e-Abid',
//     'Gulshan-e-Asghar',
//     'Gulshan-e-Mehran',
//     'Gulshan-e-Noor',
//     'Gulshan-e-Rafiq',
//     'Gulshan-e-Rehman',
//     'Gulshan-e-Shaheen',
//     'Gulshan-e-Zafar',
//   ],
//   localities: [
//     'Saddar',
//     'Satellite Town',
//     'Chaklala',
//     'Westridge',
//     'Gulraiz',
//     'Askari',
//     'Adiala Road',
//     'Rawat',
//     'Sixth Road',
//     'Tenant Colony',
//     'Lalazar',
//     'Peshawar Road',
//     'Fazal Town',
//     'Sadiqabad',
//     'Chah Sultan',
//     'Dhoke Kala Khan',
//     'Dhoke Ratta',
//     'Dhoke Chaudhry',
//     'Dhoke Jee',
//     'Dhoke Khabba',
//   ],
//   commercial: [
//     'Saddar Bazaar',
//     'Raja Bazaar',
//     'Committee Chowk',
//     'Murree Road',
//     'Mall Road',
//     'Jinnah Road',
//     'Bank Road',
//     'City Saddar Road',
//   ],
// }

// export default function HomeEconomicsTutorRawalpindiPage() {
//   return (
//     <SubjectLandingPage
//       subject="Economics"
//       city="Rawalpindi"
//       slug="home-economics-tutor-rawalpindi"
//       pageTitle="Best Home Economics Tutor in Rawalpindi | O Level, A Level, FSc & University Economics"
//       pageDescription="Find qualified home economics tutors in Rawalpindi for O Level, A Level, FSc, University & Business Economics. Learn Microeconomics, Macroeconomics & International Trade. Male & female tutors available. Free demo class."
//       metaKeywords={[
//         'home economics tutor Rawalpindi',
//         'economics tutor Rawalpindi',
//         'economics teacher Rawalpindi',
//         'home tuition Rawalpindi',
//         'O Level economics tutor Rawalpindi',
//         'A Level economics tutor Rawalpindi',
//         'FSc economics tutor Rawalpindi',
//         'Microeconomics tutor',
//         'Macroeconomics tutor',
//         'International Trade tutor',
//         'best economics tutor in Rawalpindi',
//         'female economics tutor Rawalpindi',
//       ]}
//       subjectIcon="📈"
//       subjectEmoji="🌐"
//       subjectOverview={[
//         `Economics is the study of how societies allocate resources and make decisions. For students in Rawalpindi, understanding Economics is essential for careers in business, finance, public policy, and international relations. However, many students struggle with Economics because it requires a combination of analytical thinking, data interpretation, and essay writing. A <a class="blog-link" href="/home-tutor-rawalpindi">home tutor in Rawalpindi</a> specialising in Economics can provide the individual attention that makes all the difference.`,
//         `At <a class="blog-link" href="/">Avenfield Tutors</a>, we understand that Economics becomes accessible when taught with the right approach. Our qualified economics tutors in Rawalpindi help students build a strong foundation in microeconomics, macroeconomics, and international trade. Whether your child is preparing for <a class="blog-link" href="/tutors?subject=O%20Level">O Level Economics</a>, <a class="blog-link" href="/tutors?subject=A%20Level">A Level Economics</a>, FSc, or university-level courses, our tutors provide the support needed to excel.`,
//         `We offer <a class="blog-link" href="/home-tutor-rawalpindi">home tuition in Rawalpindi</a> as well as <a class="blog-link" href="/tutors">online tutoring</a> options, giving families the flexibility to choose the learning format that best suits their needs. Our tutors use real-world examples, case studies, and current affairs to make Economics engaging and relevant. This approach not only helps students improve their grades but also builds critical thinking skills for future careers.`,
//         `Our economics tutors in Rawalpindi are not just subject experts; they are patient and supportive educators who understand the challenges students face. They take the time to identify each student's weaknesses and address them systematically, building confidence with every session. With the right guidance, Economics can become one of the most rewarding subjects to study.`,
//       ]}
//       subjectDetails={[
//         `Our <strong class="text-[#2E4F5E]">home economics tutors in Rawalpindi</strong> are qualified educators with extensive experience teaching Economics across multiple curricula. They hold advanced degrees in Economics, Finance, or related fields and have a proven track record of helping students achieve top grades. Our tutors are also experienced in preparing students for competitive exams and university entrance tests.`,
//         `We offer tuition for <strong class="text-[#2E4F5E]">all Economics levels</strong> including microeconomics, macroeconomics, international economics, development economics, and business economics. We cover curricula such as <strong class="text-[#2E4F5E]">CAIE (Cambridge International)</strong>, <strong class="text-[#2E4F5E]">Edexcel</strong>, Federal Board, Punjab Board, and other local boards.`,
//         `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">critical thinking skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. Regular assessments and progress reports ensure that both parents and students stay informed about progress and areas needing improvement.`,
//         `We understand that Economics requires both theoretical understanding and practical application. That is why our tutors use <strong class="text-[#2E4F5E]">interactive teaching methods</strong> including discussions, debates, and case studies to help students develop a nuanced understanding of economic issues. Our tutors also provide guidance on effective study techniques and exam strategies.`,
//       ]}
//       examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA', 'Federal Board', 'Punjab Board', 'KPK Board', 'Sindh Board', 'Balochistan Board']}
//       targetExams={['O Level', 'A Level', 'Matric', 'FSc', 'IGCSE', 'University Exams']}
//       commonTopics={[
//         'Microeconomics & Market Structures',
//         'Macroeconomics & National Income',
//         'International Economics & Trade',
//         'Development Economics',
//         'Fiscal & Monetary Policy',
//         'Business Economics',
//         'Economic Growth & Development',
//         'Inflation & Unemployment',
//         'Exchange Rates & Balance of Payments',
//         'Economic Data Analysis & Evaluation',
//       ]}
//       whyChoose={[
//         'Our economics tutors in Rawalpindi are <strong>qualified and experienced educators</strong> with advanced degrees in Economics, Finance, or related fields and proven track records of helping students achieve top grades.',
//         'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals. Every student receives the individual attention they need to succeed.',
//         'Our tutors use <strong>interactive teaching methods</strong> including discussions, debates, and case studies to make Economics engaging and relevant to real-world issues.',
//         'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Economics tutoring into your family\'s busy schedule. Progress reports keep parents informed every step of the way.',
//       ]}
//       faqs={[
//         {
//           q: 'How can I hire a home economics tutor in Rawalpindi?',
//           a: 'Hiring a home economics tutor in Rawalpindi is simple. Contact <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Avenfield Tutors on WhatsApp</a> with your child\'s grade level, curriculum, and specific needs. We will match you with a qualified economics tutor in your area within 24 hours. A free demo class allows you to assess the tutor before committing to regular sessions.',
//         },
//         {
//           q: 'Do you provide female economics tutors in Rawalpindi?',
//           a: 'Yes, we provide both male and female economics tutors in Rawalpindi. Parents can request a tutor based on their preference. All our tutors are verified, qualified, and experienced educators. We understand that some families prefer female tutors for their daughters, and we respect and accommodate these preferences.',
//         },
//         {
//           q: 'What are the charges for a home economics tutor in Rawalpindi?',
//           a: 'Tuition charges for home economics tutors in Rawalpindi vary based on the student\'s grade level, curriculum, and the tutor\'s experience. Typically, rates range from PKR 1,500 to 4,000 per hour. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive pricing with complete transparency and no hidden charges.',
//         },
//         {
//           q: 'Can I get a free demo class before hiring a tutor?',
//           a: 'Yes, we offer a free demo class for all new students. This allows you to assess the tutor\'s teaching style and ensure they are the right fit for your child before committing to regular sessions. The demo class is risk-free and gives you the opportunity to ask questions and discuss your child\'s learning needs in detail.',
//         },
//         {
//           q: 'Do you also offer online economics classes in Rawalpindi?',
//           a: 'Yes, we offer online economics classes for students who prefer the flexibility of learning from home or who live in areas where home tuition may not be available. Our <a href="/tutors" class="text-[#E05C42] hover:underline font-black">online tutors</a> are experienced in delivering engaging and effective lessons through video calls, interactive whiteboards, and screen sharing.',
//         },
//         {
//           q: 'Which areas of Rawalpindi do your home tutors cover?',
//           a: 'Our home economics tutors cover all major areas of Rawalpindi including Bahria Town, DHA, Saddar, Satellite Town, Chaklala, Westridge, Gulraiz, Askari, Adiala Road, Rawat, Sixth Road, Tenant Colony, Lalazar, Peshawar Road, Fazal Town, Sadiqabad, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
//         },
//       ]}
//       areas={RAWALPINDI_AREAS}
//       relatedSubjects={[
//         { name: 'Home Math Tutors', href: '/home-math-tutor-rawalpindi', icon: '📐' },
//         { name: 'Home Physics Tutors', href: '/home-physics-tutor-rawalpindi', icon: '⚡' },
//         { name: 'Home Chemistry Tutors', href: '/home-chemistry-tutor-rawalpindi', icon: '🧪' },
//         { name: 'Home Biology Tutors', href: '/home-biology-tutor-rawalpindi', icon: '🧬' },
//         { name: 'Home English Tutors', href: '/home-english-tutor-rawalpindi', icon: '📝' },
//         { name: 'Home Accounting Tutors', href: '/home-accounting-tutor-rawalpindi', icon: '📊' },
//         { name: 'Home Tutor Rawalpindi', href: '/home-tutor-rawalpindi', icon: '🏠' },
//         { name: 'Online Tutors', href: '/tutors', icon: '💻' },
//         { name: 'O Level Tutors', href: '/o-level-tutor-islamabad', icon: '📚' },
//         { name: 'A Level Tutors', href: '/a-level-tutor-islamabad', icon: '🎯' },
//         { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
//         { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
//       ]}
//       nearbyCity="Islamabad"
//       canonicalUrl={url}
//     />
//   )
// }






import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/home-economics-tutor-rawalpindi`

export const metadata: Metadata = {
  title: 'Best Home Economics Tutor in Rawalpindi | O Level, A Level, FSc & University Economics',
  description:
    'Find qualified home economics tutors in Rawalpindi for O Level, A Level, FSc, University & Business Economics. Learn Microeconomics, Macroeconomics & International Trade. Male & female tutors available. Free demo class.',
  keywords: [
    'home economics tutor Rawalpindi',
    'economics tutor Rawalpindi',
    'economics teacher Rawalpindi',
    'home tuition Rawalpindi',
    'O Level economics tutor Rawalpindi',
    'A Level economics tutor Rawalpindi',
    'FSc economics tutor Rawalpindi',
    'Microeconomics tutor',
    'Macroeconomics tutor',
    'International Trade tutor',
    'best economics tutor in Rawalpindi',
    'female economics tutor Rawalpindi',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Home Economics Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home economics tutors in Rawalpindi for O Level, A Level, FSc, University & Business Economics. Male & female tutors available. Free demo class.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Home Economics Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home economics tutors in Rawalpindi for O Level, A Level, FSc, University & Business Economics.',
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

export default function HomeEconomicsTutorRawalpindiPage() {
  return (
    <SubjectLandingPage
      subject="Economics"
      city="Rawalpindi"
      slug="home-economics-tutor-rawalpindi"
      pageTitle="Best Home Economics Tutor in Rawalpindi | O Level, A Level, FSc & University Economics"
      pageDescription="Find qualified home economics tutors in Rawalpindi for O Level, A Level, FSc, University & Business Economics. Learn Microeconomics, Macroeconomics & International Trade. Male & female tutors available. Free demo class."
      metaKeywords={[
        'home economics tutor Rawalpindi',
        'economics tutor Rawalpindi',
        'economics teacher Rawalpindi',
        'home tuition Rawalpindi',
        'O Level economics tutor Rawalpindi',
        'A Level economics tutor Rawalpindi',
        'FSc economics tutor Rawalpindi',
        'Microeconomics tutor',
        'Macroeconomics tutor',
        'International Trade tutor',
        'best economics tutor in Rawalpindi',
        'female economics tutor Rawalpindi',
      ]}
      subjectIcon="📈"
      subjectEmoji="🌐"
      subjectOverview={[
        `Economics is the study of how societies allocate resources and make decisions. For students in Rawalpindi, understanding Economics is essential for careers in business, finance, public policy, and international relations. However, many students struggle with Economics because it requires a combination of analytical thinking, data interpretation, and essay writing. A <a class="blog-link" href="/home-tutor-rawalpindi">home tutor in Rawalpindi</a> specialising in Economics can provide the individual attention that makes all the difference.`,
        `At <a class="blog-link" href="/">Avenfield Tutors</a>, we understand that Economics becomes accessible when taught with the right approach. Our qualified economics tutors in Rawalpindi help students build a strong foundation in microeconomics, macroeconomics, and international trade. Whether your child is preparing for <a class="blog-link" href="/tutors?subject=O%20Level">O Level Economics</a>, <a class="blog-link" href="/tutors?subject=A%20Level">A Level Economics</a>, FSc, or university-level courses, our tutors provide the support needed to excel.`,
        `We offer <a class="blog-link" href="/home-tutor-rawalpindi">home tuition in Rawalpindi</a> as well as <a class="blog-link" href="/tutors">online tutoring</a> options, giving families the flexibility to choose the learning format that best suits their needs. Our tutors use real-world examples, case studies, and current affairs to make Economics engaging and relevant. This approach not only helps students improve their grades but also builds critical thinking skills for future careers.`,
        `Our economics tutors in Rawalpindi are not just subject experts; they are patient and supportive educators who understand the challenges students face. They take the time to identify each student's weaknesses and address them systematically, building confidence with every session. With the right guidance, Economics can become one of the most rewarding subjects to study.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">home economics tutors in Rawalpindi</strong> are qualified educators with extensive experience teaching Economics across multiple curricula. They hold advanced degrees in Economics, Finance, or related fields and have a proven track record of helping students achieve top grades. Our tutors are also experienced in preparing students for competitive exams and university entrance tests.`,
        `We offer tuition for <strong class="text-[#2E4F5E]">all Economics levels</strong> including microeconomics, macroeconomics, international economics, development economics, and business economics. We cover curricula such as <strong class="text-[#2E4F5E]">CAIE (Cambridge International)</strong>, <strong class="text-[#2E4F5E]">Edexcel</strong>, Federal Board, Punjab Board, and other local boards.`,
        `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">critical thinking skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. Regular assessments and progress reports ensure that both parents and students stay informed about progress and areas needing improvement.`,
        `We understand that Economics requires both theoretical understanding and practical application. That is why our tutors use <strong class="text-[#2E4F5E]">interactive teaching methods</strong> including discussions, debates, and case studies to help students develop a nuanced understanding of economic issues. Our tutors also provide guidance on effective study techniques and exam strategies.`,
      ]}
      examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA', 'Federal Board', 'Punjab Board', 'KPK Board', 'Sindh Board', 'Balochistan Board']}
      targetExams={['O Level', 'A Level', 'Matric', 'FSc', 'IGCSE', 'University Exams']}
      commonTopics={[
        'Microeconomics & Market Structures',
        'Macroeconomics & National Income',
        'International Economics & Trade',
        'Development Economics',
        'Fiscal & Monetary Policy',
        'Business Economics',
        'Economic Growth & Development',
        'Inflation & Unemployment',
        'Exchange Rates & Balance of Payments',
        'Economic Data Analysis & Evaluation',
      ]}
      whyChoose={[
        'Our economics tutors in Rawalpindi are <strong>qualified and experienced educators</strong> with advanced degrees in Economics, Finance, or related fields and proven track records of helping students achieve top grades.',
        'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals. Every student receives the individual attention they need to succeed.',
        'Our tutors use <strong>interactive teaching methods</strong> including discussions, debates, and case studies to make Economics engaging and relevant to real-world issues.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Economics tutoring into your family\'s busy schedule. Progress reports keep parents informed every step of the way.',
      ]}
      faqs={[
        {
          q: 'How can I hire a home economics tutor in Rawalpindi?',
          a: 'Hiring a home economics tutor in Rawalpindi is simple. Contact <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">Avenfield Tutors on WhatsApp</a> with your child\'s grade level, curriculum, and specific needs. We will match you with a qualified economics tutor in your area within 24 hours. A free demo class allows you to assess the tutor before committing to regular sessions.',
        },
        {
          q: 'Do you provide female economics tutors in Rawalpindi?',
          a: 'Yes, we provide both male and female economics tutors in Rawalpindi. Parents can request a tutor based on their preference. All our tutors are verified, qualified, and experienced educators. We understand that some families prefer female tutors for their daughters, and we respect and accommodate these preferences.',
        },
        {
          q: 'What are the charges for a home economics tutor in Rawalpindi?',
          a: 'Tuition charges for home economics tutors in Rawalpindi vary based on the student\'s grade level, curriculum, and the tutor\'s experience. Typically, rates range from PKR 1,500 to 4,000 per hour. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive pricing with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free demo class before hiring a tutor?',
          a: 'Yes, we offer a free demo class for all new students. This allows you to assess the tutor\'s teaching style and ensure they are the right fit for your child before committing to regular sessions. The demo class is risk-free and gives you the opportunity to ask questions and discuss your child\'s learning needs in detail.',
        },
        {
          q: 'Do you also offer online economics classes in Rawalpindi?',
          a: 'Yes, we offer online economics classes for students who prefer the flexibility of learning from home or who live in areas where home tuition may not be available. Our <a href="/tutors" class="text-[#C43D24] hover:underline font-black">online tutors</a> are experienced in delivering engaging and effective lessons through video calls, interactive whiteboards, and screen sharing.',
        },
        {
          q: 'Which areas of Rawalpindi do your home tutors cover?',
          a: 'Our home economics tutors cover all major areas of Rawalpindi including Bahria Town, DHA, Saddar, Satellite Town, Chaklala, Westridge, Gulraiz, Askari, Adiala Road, Rawat, Sixth Road, Tenant Colony, Lalazar, Peshawar Road, Fazal Town, Sadiqabad, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
        },
      ]}
      areas={RAWALPINDI_AREAS}
      relatedSubjects={[
        { name: 'Home Math Tutors', href: '/home-math-tutor-rawalpindi', icon: '📐' },
        { name: 'Home Physics Tutors', href: '/home-physics-tutor-rawalpindi', icon: '⚡' },
        { name: 'Home Chemistry Tutors', href: '/home-chemistry-tutor-rawalpindi', icon: '🧪' },
        { name: 'Home Biology Tutors', href: '/home-biology-tutor-rawalpindi', icon: '🧬' },
        { name: 'Home English Tutors', href: '/home-english-tutor-rawalpindi', icon: '📝' },
        { name: 'Home Accounting Tutors', href: '/home-accounting-tutor-rawalpindi', icon: '📊' },
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