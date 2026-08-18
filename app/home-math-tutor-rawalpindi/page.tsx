// import type { Metadata } from 'next'
// import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
// const url = `${SITE_URL}/home-math-tutor-rawalpindi`

// export const metadata: Metadata = {
//   title: 'Best Home Math Tutor in Rawalpindi | O Level, A Level, Matric & FSc Maths',
//   description:
//     'Find qualified home math tutors in Rawalpindi for O Level, A Level, Matric, FSc & University Mathematics. Male & female tutors available for personalized home tuition. Free demo class.',
//   keywords: [
//     'home math tutor Rawalpindi',
//     'math tutor Rawalpindi',
//     'mathematics tutor Rawalpindi',
//     'home tuition Rawalpindi',
//     'O Level math tutor Rawalpindi',
//     'A Level math tutor Rawalpindi',
//     'FSc math tutor Rawalpindi',
//     'matric math tutor Rawalpindi',
//     'math teacher Rawalpindi',
//     'best math tutor in Rawalpindi',
//     'female math tutor Rawalpindi',
//   ],
//   alternates: { canonical: url },
//   openGraph: {
//     title: 'Best Home Math Tutor in Rawalpindi | Avenfield Tutors',
//     description: 'Qualified home math tutors in Rawalpindi for O Level, A Level, Matric, FSc & University. Male & female tutors available. Free demo class.',
//     type: 'website',
//     locale: 'en_PK',
//     siteName: 'Avenfield Tutors',
//     url,
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Best Home Math Tutor in Rawalpindi | Avenfield Tutors',
//     description: 'Qualified home math tutors in Rawalpindi for O Level, A Level, Matric, FSc & University.',
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

// export default function HomeMathTutorRawalpindiPage() {
//   return (
//     <SubjectLandingPage
//       subject="Mathematics"
//       city="Rawalpindi"
//       slug="home-math-tutor-rawalpindi"
//       pageTitle="Best Home Math Tutor in Rawalpindi | O Level, A Level, Matric & FSc Maths"
//       pageDescription="Find qualified home math tutors in Rawalpindi for O Level, A Level, Matric, FSc & University Mathematics. Male & female tutors available for personalized home tuition. Free demo class."
//       metaKeywords={[
//         'home math tutor Rawalpindi',
//         'math tutor Rawalpindi',
//         'mathematics tutor Rawalpindi',
//         'home tuition Rawalpindi',
//         'O Level math tutor Rawalpindi',
//         'A Level math tutor Rawalpindi',
//         'FSc math tutor Rawalpindi',
//         'matric math tutor Rawalpindi',
//         'math teacher Rawalpindi',
//         'best math tutor in Rawalpindi',
//         'female math tutor Rawalpindi',
//       ]}
//       subjectIcon="📐"
//       subjectEmoji="📊"
//       subjectOverview={[
//         `Mathematics is a subject that either builds confidence or creates anxiety. For many students in Rawalpindi, the difference between these two outcomes often comes down to the quality of guidance they receive. From basic arithmetic to advanced calculus, Mathematics requires a strong conceptual foundation and consistent practice. Without the right support, students can fall behind quickly, struggling to catch up as the syllabus progresses. A <a class="blog-link" href="/home-math-tutor-rawalpindi">home math tutor in Rawalpindi</a> can bridge this gap by providing personalised attention that addresses each student's unique learning needs.`,
//         `At <a class="blog-link" href="/">Avenfield Tutors</a>, we understand that every student learns differently. Some grasp concepts quickly but struggle with application, while others need more time to build their foundation. Our verified math tutors in Rawalpindi tailor their teaching approach to match each student's learning style and pace. Whether your child is preparing for <a class="blog-link" href="/tutors?subject=O%20Level">O Level Mathematics</a>, <a class="blog-link" href="/tutors?subject=A%20Level">A Level Mathematics</a>, Matric, FSc, or university-level courses, our tutors provide the support needed to excel.`,
//         `We offer both <a class="blog-link" href="/home-tutor-rawalpindi">home tuition in Rawalpindi</a> and <a class="blog-link" href="/tutors">online tutoring</a> options to suit your family's schedule and preferences. Our flexible approach allows students to learn in the environment where they feel most comfortable, whether that is at home with a visiting tutor or through interactive online sessions. The result is a learning experience that is effective, convenient, and built around the student's needs.`,
//         `What sets our <a class="blog-link" href="/home-math-tutor-rawalpindi">math tutors in Rawalpindi</a> apart is their genuine commitment to student success. They do not just teach formulas; they explain the reasoning behind them, helping students develop critical thinking skills that extend beyond the classroom. With patience, encouragement, and expertise, our tutors help students build the confidence they need to approach mathematics with a positive mindset. Whether your child is struggling to keep up or aiming for top grades, our tutors are here to help them achieve their academic goals.`,
//       ]}
//       subjectDetails={[
//         `Our <strong class="text-[#2E4F5E]">home math tutors in Rawalpindi</strong> are qualified educators with extensive experience teaching Mathematics across multiple curricula. They hold advanced degrees in Mathematics, Engineering, or related fields and have a proven track record of helping students achieve top grades. Many of our tutors are also experienced in preparing students for competitive exams and university entrance tests.`,
//         `We offer tuition for <strong class="text-[#2E4F5E]">all Mathematics levels</strong> including Basic Mathematics, General Mathematics, Additional Mathematics, O Level Mathematics, A Level Mathematics, Matric Mathematics, FSc Mathematics, and University-level Mathematics. Our tutors are familiar with the specific requirements of each curriculum and exam board, including <strong class="text-[#2E4F5E]">CAIE (Cambridge International)</strong>, <strong class="text-[#2E4F5E]">Edexcel</strong>, and local Pakistani boards.`,
//         `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">problem-solving skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. Regular assessments and progress reports ensure that both parents and students stay informed about progress and areas needing improvement.`,
//         `We understand that Mathematics can be challenging and sometimes intimidating. That is why our tutors create a <strong class="text-[#2E4F5E]">supportive and encouraging learning environment</strong> where students feel comfortable asking questions and making mistakes. They break down complex problems into manageable steps, helping students build confidence gradually. With the right guidance, every student can succeed in Mathematics.`,
//       ]}
//       examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA', 'Federal Board', 'Punjab Board', 'KPK Board', 'Sindh Board', 'Balochistan Board']}
//       targetExams={['O Level', 'A Level', 'Matric', 'FSc', 'IGCSE', 'University Exams', 'Entry Tests']}
//       commonTopics={[
//         'Algebra & Linear Equations',
//         'Geometry & Trigonometry',
//         'Calculus (Differentiation & Integration)',
//         'Statistics & Probability',
//         'Vectors & Matrices',
//         'Number Theory',
//         'Coordinate Geometry',
//         'Sequences & Series',
//         'Functions & Graphs',
//         'Mechanics & Kinematics',
//       ]}
//       whyChoose={[
//         'Our math tutors in Rawalpindi are <strong>qualified and experienced educators</strong> with advanced degrees in Mathematics, Engineering, or related fields and proven track records of helping students achieve top grades.',
//         'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals. Every student receives the individual attention they need to succeed.',
//         'Our tutors use <strong>interactive teaching methods</strong> including practical examples, visual aids, and real-world applications to make Mathematics engaging and easy to understand.',
//         'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Mathematics tutoring into your family\'s busy schedule. Progress reports keep parents informed every step of the way.',
//       ]}
//       faqs={[
//         {
//           q: 'How can I hire a home math tutor in Rawalpindi?',
//           a: 'Hiring a home math tutor in Rawalpindi is simple. Contact <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Avenfield Tutors on WhatsApp</a> with your child\'s grade level, curriculum, and specific needs. We will match you with a qualified math tutor in your area within 24 hours. A free demo class allows you to assess the tutor before committing to regular sessions.',
//         },
//         {
//           q: 'Do you provide female math tutors in Rawalpindi?',
//           a: 'Yes, we provide both male and female math tutors in Rawalpindi. Parents can request a tutor based on their preference. All our tutors are verified, qualified, and experienced educators. We understand that some families prefer female tutors for their daughters, and we respect and accommodate these preferences.',
//         },
//         {
//           q: 'What are the charges for a home math tutor in Rawalpindi?',
//           a: 'Tuition charges for home math tutors in Rawalpindi vary based on the student\'s grade level, curriculum, and the tutor\'s experience. Typically, rates range from PKR 1,500 to 4,000 per hour. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive pricing with complete transparency and no hidden charges.',
//         },
//         {
//           q: 'Can I get a free demo class before hiring a tutor?',
//           a: 'Yes, we offer a free demo class for all new students. This allows you to assess the tutor\'s teaching style and ensure they are the right fit for your child before committing to regular sessions. The demo class is risk-free and gives you the opportunity to ask questions and discuss your child\'s learning needs in detail.',
//         },
//         {
//           q: 'Do you also offer online math classes in Rawalpindi?',
//           a: 'Yes, we offer online math classes for students who prefer the flexibility of learning from home or who live in areas where home tuition may not be available. Our <a href="/tutors" class="text-[#E05C42] hover:underline font-black">online tutors</a> are experienced in delivering engaging and effective lessons through video calls, interactive whiteboards, and screen sharing.',
//         },
//         {
//           q: 'Which areas of Rawalpindi do your home tutors cover?',
//           a: 'Our home math tutors cover all major areas of Rawalpindi including Bahria Town, DHA, Saddar, Satellite Town, Chaklala, Westridge, Gulraiz, Askari, Adiala Road, Rawat, Sixth Road, Tenant Colony, Lalazar, Peshawar Road, Fazal Town, Sadiqabad, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
//         },
//       ]}
//       areas={RAWALPINDI_AREAS}
//       relatedSubjects={[
//         { name: 'Home Physics Tutors', href: '/home-physics-tutor-rawalpindi', icon: '⚡' },
//         { name: 'Home Chemistry Tutors', href: '/home-chemistry-tutor-rawalpindi', icon: '🧪' },
//         { name: 'Home Biology Tutors', href: '/home-biology-tutor-rawalpindi', icon: '🧬' },
//         { name: 'Home English Tutors', href: '/home-english-tutor-rawalpindi', icon: '📝' },
//         { name: 'Home Tutor Rawalpindi', href: '/home-tutor-rawalpindi', icon: '🏠' },
//         { name: 'Online Tutors', href: '/tutors', icon: '💻' },
//         { name: 'O Level Tutors', href: '/o-level-tutor-islamabad', icon: '📚' },
//         { name: 'A Level Tutors', href: '/a-level-tutor-islamabad', icon: '🎯' },
//         { name: 'IELTS Tutors', href: '/ielts-tutor-islamabad', icon: '🎓' },
//         { name: 'MDCAT Tutors', href: '/mdcat-tutor-islamabad', icon: '🩺' },
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
const url = `${SITE_URL}/home-math-tutor-rawalpindi`

export const metadata: Metadata = {
  title: 'Best Home Math Tutor in Rawalpindi | O Level, A Level, Matric & FSc Maths',
  description:
    'Find qualified home math tutors in Rawalpindi for O Level, A Level, Matric, FSc & University Mathematics. Male & female tutors available for personalized home tuition. Free demo class.',
  keywords: [
    'home math tutor Rawalpindi',
    'math tutor Rawalpindi',
    'mathematics tutor Rawalpindi',
    'home tuition Rawalpindi',
    'O Level math tutor Rawalpindi',
    'A Level math tutor Rawalpindi',
    'FSc math tutor Rawalpindi',
    'matric math tutor Rawalpindi',
    'math teacher Rawalpindi',
    'best math tutor in Rawalpindi',
    'female math tutor Rawalpindi',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Home Math Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home math tutors in Rawalpindi for O Level, A Level, Matric, FSc & University. Male & female tutors available. Free demo class.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Home Math Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home math tutors in Rawalpindi for O Level, A Level, Matric, FSc & University.',
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

export default function HomeMathTutorRawalpindiPage() {
  return (
    <SubjectLandingPage
      subject="Mathematics"
      city="Rawalpindi"
      slug="home-math-tutor-rawalpindi"
      pageTitle="Best Home Math Tutor in Rawalpindi | O Level, A Level, Matric & FSc Maths"
      pageDescription="Find qualified home math tutors in Rawalpindi for O Level, A Level, Matric, FSc & University Mathematics. Male & female tutors available for personalized home tuition. Free demo class."
      metaKeywords={[
        'home math tutor Rawalpindi',
        'math tutor Rawalpindi',
        'mathematics tutor Rawalpindi',
        'home tuition Rawalpindi',
        'O Level math tutor Rawalpindi',
        'A Level math tutor Rawalpindi',
        'FSc math tutor Rawalpindi',
        'matric math tutor Rawalpindi',
        'math teacher Rawalpindi',
        'best math tutor in Rawalpindi',
        'female math tutor Rawalpindi',
      ]}
      subjectIcon="📐"
      subjectEmoji="📊"
      subjectOverview={[
        `Mathematics is a subject that either builds confidence or creates anxiety. For many students in Rawalpindi, the difference between these two outcomes often comes down to the quality of guidance they receive. From basic arithmetic to advanced calculus, Mathematics requires a strong conceptual foundation and consistent practice. Without the right support, students can fall behind quickly, struggling to catch up as the syllabus progresses. A <a class="blog-link" href="/home-math-tutor-rawalpindi">home math tutor in Rawalpindi</a> can bridge this gap by providing personalised attention that addresses each student's unique learning needs.`,
        `At <a class="blog-link" href="/">Avenfield Tutors</a>, we understand that every student learns differently. Some grasp concepts quickly but struggle with application, while others need more time to build their foundation. Our verified math tutors in Rawalpindi tailor their teaching approach to match each student's learning style and pace. Whether your child is preparing for <a class="blog-link" href="/tutors?subject=O%20Level">O Level Mathematics</a>, <a class="blog-link" href="/tutors?subject=A%20Level">A Level Mathematics</a>, Matric, FSc, or university-level courses, our tutors provide the support needed to excel.`,
        `We offer both <a class="blog-link" href="/home-tutor-rawalpindi">home tuition in Rawalpindi</a> and <a class="blog-link" href="/tutors">online tutoring</a> options to suit your family's schedule and preferences. Our flexible approach allows students to learn in the environment where they feel most comfortable, whether that is at home with a visiting tutor or through interactive online sessions. The result is a learning experience that is effective, convenient, and built around the student's needs.`,
        `What sets our <a class="blog-link" href="/home-math-tutor-rawalpindi">math tutors in Rawalpindi</a> apart is their genuine commitment to student success. They do not just teach formulas; they explain the reasoning behind them, helping students develop critical thinking skills that extend beyond the classroom. With patience, encouragement, and expertise, our tutors help students build the confidence they need to approach mathematics with a positive mindset. Whether your child is struggling to keep up or aiming for top grades, our tutors are here to help them achieve their academic goals.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">home math tutors in Rawalpindi</strong> are qualified educators with extensive experience teaching Mathematics across multiple curricula. They hold advanced degrees in Mathematics, Engineering, or related fields and have a proven track record of helping students achieve top grades. Many of our tutors are also experienced in preparing students for competitive exams and university entrance tests.`,
        `We offer tuition for <strong class="text-[#2E4F5E]">all Mathematics levels</strong> including Basic Mathematics, General Mathematics, Additional Mathematics, O Level Mathematics, A Level Mathematics, Matric Mathematics, FSc Mathematics, and University-level Mathematics. Our tutors are familiar with the specific requirements of each curriculum and exam board, including <strong class="text-[#2E4F5E]">CAIE (Cambridge International)</strong>, <strong class="text-[#2E4F5E]">Edexcel</strong>, and local Pakistani boards.`,
        `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">problem-solving skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. Regular assessments and progress reports ensure that both parents and students stay informed about progress and areas needing improvement.`,
        `We understand that Mathematics can be challenging and sometimes intimidating. That is why our tutors create a <strong class="text-[#2E4F5E]">supportive and encouraging learning environment</strong> where students feel comfortable asking questions and making mistakes. They break down complex problems into manageable steps, helping students build confidence gradually. With the right guidance, every student can succeed in Mathematics.`,
      ]}
      examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA', 'Federal Board', 'Punjab Board', 'KPK Board', 'Sindh Board', 'Balochistan Board']}
      targetExams={['O Level', 'A Level', 'Matric', 'FSc', 'IGCSE', 'University Exams', 'Entry Tests']}
      commonTopics={[
        'Algebra & Linear Equations',
        'Geometry & Trigonometry',
        'Calculus (Differentiation & Integration)',
        'Statistics & Probability',
        'Vectors & Matrices',
        'Number Theory',
        'Coordinate Geometry',
        'Sequences & Series',
        'Functions & Graphs',
        'Mechanics & Kinematics',
      ]}
      whyChoose={[
        'Our math tutors in Rawalpindi are <strong>qualified and experienced educators</strong> with advanced degrees in Mathematics, Engineering, or related fields and proven track records of helping students achieve top grades.',
        'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals. Every student receives the individual attention they need to succeed.',
        'Our tutors use <strong>interactive teaching methods</strong> including practical examples, visual aids, and real-world applications to make Mathematics engaging and easy to understand.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Mathematics tutoring into your family\'s busy schedule. Progress reports keep parents informed every step of the way.',
      ]}
      faqs={[
        {
          q: 'How can I hire a home math tutor in Rawalpindi?',
          a: 'Hiring a home math tutor in Rawalpindi is simple. Contact <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">Avenfield Tutors on WhatsApp</a> with your child\'s grade level, curriculum, and specific needs. We will match you with a qualified math tutor in your area within 24 hours. A free demo class allows you to assess the tutor before committing to regular sessions.',
        },
        {
          q: 'Do you provide female math tutors in Rawalpindi?',
          a: 'Yes, we provide both male and female math tutors in Rawalpindi. Parents can request a tutor based on their preference. All our tutors are verified, qualified, and experienced educators. We understand that some families prefer female tutors for their daughters, and we respect and accommodate these preferences.',
        },
        {
          q: 'What are the charges for a home math tutor in Rawalpindi?',
          a: 'Tuition charges for home math tutors in Rawalpindi vary based on the student\'s grade level, curriculum, and the tutor\'s experience. Typically, rates range from PKR 1,500 to 4,000 per hour. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive pricing with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free demo class before hiring a tutor?',
          a: 'Yes, we offer a free demo class for all new students. This allows you to assess the tutor\'s teaching style and ensure they are the right fit for your child before committing to regular sessions. The demo class is risk-free and gives you the opportunity to ask questions and discuss your child\'s learning needs in detail.',
        },
        {
          q: 'Do you also offer online math classes in Rawalpindi?',
          a: 'Yes, we offer online math classes for students who prefer the flexibility of learning from home or who live in areas where home tuition may not be available. Our <a href="/tutors" class="text-[#C43D24] hover:underline font-black">online tutors</a> are experienced in delivering engaging and effective lessons through video calls, interactive whiteboards, and screen sharing.',
        },
        {
          q: 'Which areas of Rawalpindi do your home tutors cover?',
          a: 'Our home math tutors cover all major areas of Rawalpindi including Bahria Town, DHA, Saddar, Satellite Town, Chaklala, Westridge, Gulraiz, Askari, Adiala Road, Rawat, Sixth Road, Tenant Colony, Lalazar, Peshawar Road, Fazal Town, Sadiqabad, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
        },
      ]}
      areas={RAWALPINDI_AREAS}
      relatedSubjects={[
        { name: 'Home Physics Tutors', href: '/home-physics-tutor-rawalpindi', icon: '⚡' },
        { name: 'Home Chemistry Tutors', href: '/home-chemistry-tutor-rawalpindi', icon: '🧪' },
        { name: 'Home Biology Tutors', href: '/home-biology-tutor-rawalpindi', icon: '🧬' },
        { name: 'Home English Tutors', href: '/home-english-tutor-rawalpindi', icon: '📝' },
        { name: 'Home Tutor Rawalpindi', href: '/home-tutor-rawalpindi', icon: '🏠' },
        { name: 'Online Tutors', href: '/tutors', icon: '💻' },
        { name: 'O Level Tutors', href: '/o-level-tutor-islamabad', icon: '📚' },
        { name: 'A Level Tutors', href: '/a-level-tutor-islamabad', icon: '🎯' },
        { name: 'IELTS Tutors', href: '/ielts-tutor-islamabad', icon: '🎓' },
        { name: 'MDCAT Tutors', href: '/mdcat-tutor-islamabad', icon: '🩺' },
        { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
        { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
      ]}
      nearbyCity="Islamabad"
      canonicalUrl={url}
    />
  )
}