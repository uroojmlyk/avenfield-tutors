// import type { Metadata } from 'next'
// import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
// const url = `${SITE_URL}/home-o-level-tutor-rawalpindi`

// export const metadata: Metadata = {
//   title: 'Best Home O Level Tutor in Rawalpindi | Cambridge O Level Tuition',
//   description:
//     'Find qualified home O Level tutors in Rawalpindi for Cambridge CAIE & Edexcel. Expert tuition for all O Level subjects — Mathematics, Physics, Chemistry, Biology, English & more. Male & female tutors. Free demo class.',
//   keywords: [
//     'home O Level tutor Rawalpindi',
//     'O Level tutor Rawalpindi',
//     'O Level tuition Rawalpindi',
//     'Cambridge O Level tutor Rawalpindi',
//     'O Level teacher Rawalpindi',
//     'home tuition Rawalpindi',
//     'O Level Maths tutor Rawalpindi',
//     'O Level Physics tutor Rawalpindi',
//     'O Level Chemistry tutor Rawalpindi',
//     'O Level Biology tutor Rawalpindi',
//     'O Level English tutor Rawalpindi',
//     'best O Level tutor in Rawalpindi',
//     'female O Level tutor Rawalpindi',
//     'CAIE O Level tutor',
//     'Edexcel O Level tutor',
//   ],
//   alternates: { canonical: url },
//   openGraph: {
//     title: 'Best Home O Level Tutor in Rawalpindi | Avenfield Tutors',
//     description: 'Qualified home O Level tutors in Rawalpindi for Cambridge CAIE & Edexcel. Expert tuition for all subjects. Male & female tutors available. Free demo class.',
//     type: 'website',
//     locale: 'en_PK',
//     siteName: 'Avenfield Tutors',
//     url,
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Best Home O Level Tutor in Rawalpindi | Avenfield Tutors',
//     description: 'Qualified home O Level tutors in Rawalpindi for Cambridge CAIE & Edexcel. Expert tuition for all subjects.',
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

// // ─── CLEANED AREAS: Genuine housing schemes only in housingSocieties ───
// const RAWALPINDI_AREAS = {
//   housingSocieties: [
//     'Bahria Town Rawalpindi (All Phases)',
//     'DHA Rawalpindi (All Phases)',
//     'Askari Housing Schemes',
//     'Gulraiz Housing Scheme',
//     'Westridge Housing Scheme',
//     'CBR Town Phase I',
//     'CBR Town Phase II',
//     'Media Town',
//     'Soan Garden',
//     'River Garden',
//     'Pakistan Town',
//     'Korang Town',
//     'Korang Enclave',
//     'Doctors Town',
//     'Green Valley',
//     'Capital Enclave',
//     'Safari Villas',
//     'Bahria Green',
//     'Bahria Springs',
//     'Bahria Paradise',
//     'Bahria Intellectual Village',
//     'Bahria Overseas Enclave',
//     'Falcon Complex',
//     'Faisal Colony',
//     'Al-Haram City',
//     'Rawalpindi Cooperative Housing Society',
//     'National Police Foundation (NPF)',
//     'Fazaia Housing Scheme',
//     'Naval Anchorage',
//     'Judicial Colony',
//     'Police Foundation',
//     'Blue World City',
//     'Rudn Enclave',
//     'Faisal Hills',
//     'Faisal Town',
//     'Top City-1',
//     'Mumtaz City',
//     'Capital Smart City',
//     'Nova City',
//     'Kingdom Valley',
//     'University Town',
//     'Silver City',
//     'Multi Gardens B-17',
//   ],
//   localities: [
//     'Saddar',
//     'Satellite Town',
//     'Chaklala',
//     'Cantt',
//     'Morgah',
//     'Adiala Road',
//     'Gulraiz',
//     'Chakri Road',
//     'Chak Jalal Din',
//     'Misrial Road',
//     'Tulsa Road',
//     'Dhamial',
//     'Adiala',
//     'New Katarian',
//     'Gulshan Abad',
//     'Gulshan Colony',
//     'Chakri Interchange Area',
//     'Afshan Colony',
//     'Chungi No. 22',
//     'High Court Road',
//     'Rawat',
//     'Kallar Syedan Road',
//     'Chak Beli Khan',
//     'Girja Road',
//     'Dhok Mangtal',
//     'Dhok Banaras',
//     'Dhok Sayedan',
//     'Chakri',
//     'Thalian',
//     'Mandrah',
//     'Dhoke Kala Khan',
//     'Dhoke Kashmirian',
//     'Dhoke Paracha',
//     'Dhoke Hassu',
//     'Dhoke Chaudhrian',
//     'Sadiqabad',
//     'Rehmanabad',
//     'Shamsabad',
//     'Committee Chowk',
//     'Raja Bazaar',
//     'Banni',
//     'Gawalmandi',
//     'Pirwadhai',
//     'Tench Bhata',
//     'Khyaban-e-Sir Syed',
//     'Gulistan Colony',
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

// export default function HomeOLevelTutorRawalpindiPage() {
//   return (
//     <SubjectLandingPage
//       subject="O Level"
//       city="Rawalpindi"
//       slug="home-o-level-tutor-rawalpindi"
//       pageTitle="Best Home O Level Tutor in Rawalpindi | Cambridge O Level Tuition"
//       pageDescription="Find qualified home O Level tutors in Rawalpindi for Cambridge CAIE & Edexcel. Expert tuition for all O Level subjects — Mathematics, Physics, Chemistry, Biology, English & more. Male & female tutors. Free demo class."
//       metaKeywords={[
//         'home O Level tutor Rawalpindi',
//         'O Level tutor Rawalpindi',
//         'O Level tuition Rawalpindi',
//         'Cambridge O Level tutor Rawalpindi',
//         'O Level teacher Rawalpindi',
//         'home tuition Rawalpindi',
//         'O Level Maths tutor Rawalpindi',
//         'O Level Physics tutor Rawalpindi',
//         'O Level Chemistry tutor Rawalpindi',
//         'O Level Biology tutor Rawalpindi',
//         'O Level English tutor Rawalpindi',
//         'best O Level tutor in Rawalpindi',
//         'female O Level tutor Rawalpindi',
//         'CAIE O Level tutor',
//         'Edexcel O Level tutor',
//       ]}
//       subjectIcon="📚"
//       subjectEmoji="📖"
//       subjectOverview={[
//         `The Cambridge O Level programme is one of the most respected international qualifications, and students in Rawalpindi are increasingly choosing this pathway for their secondary education. However, the O Level curriculum is demanding — it requires students to develop critical thinking, analytical skills, and a deep understanding of their subjects. A <a class="blog-link" href="/home-tutor-rawalpindi">home tutor in Rawalpindi</a> specialising in O Level subjects can provide the personalised support needed to excel in this challenging programme.`,
//         `At <a class="blog-link" href="/">Avenfield Tutors</a>, we understand that O Level success requires more than just memorising facts. Our qualified O Level tutors in Rawalpindi help students build a strong foundation across all subjects, develop effective study habits, and master exam techniques. Whether your child is preparing for <a class="blog-link" href="/tutors?subject=O%20Level&city=Rawalpindi">O Level Mathematics</a>, <a class="blog-link" href="/tutors?subject=O%20Level&city=Rawalpindi">Physics</a>, <a class="blog-link" href="/tutors?subject=O%20Level&city=Rawalpindi">Chemistry</a>, <a class="blog-link" href="/tutors?subject=O%20Level&city=Rawalpindi">Biology</a>, or <a class="blog-link" href="/tutors?subject=O%20Level&city=Rawalpindi">English</a>, our tutors provide the support needed to achieve top grades.`,
//         `We offer <a class="blog-link" href="/home-tutor-rawalpindi">home tuition in Rawalpindi</a> as well as <a class="blog-link" href="/tutors">online tutoring</a> options, giving families the flexibility to choose the learning format that best suits their needs. Our tutors are familiar with both <a class="blog-link" href="/tutors?subject=O%20Level&board=CAIE">CAIE</a> and <a class="blog-link" href="/tutors?subject=O%20Level&board=Edexcel">Edexcel</a> exam boards, ensuring students are fully prepared for their examinations.`,
//         `Our O Level tutors in Rawalpindi are not just subject experts; they are patient and supportive educators who understand the challenges students face. They take the time to identify each student's strengths and weaknesses, building confidence with every session. With the right guidance, O Level students can achieve their full potential and build a strong foundation for <a class="blog-link" href="/home-a-level-tutor-rawalpindi">A Level</a> and beyond.`,
//       ]}
//       subjectDetails={[
//         `Our <strong class="text-[#2E4F5E]">home O Level tutors in Rawalpindi</strong> are qualified educators with experience teaching the Cambridge syllabus. They hold relevant qualifications in their subject areas and have a track record of helping students achieve strong results. Our tutors are familiar with Cambridge marking and assessment approaches.`,
//         `We offer tuition for <strong class="text-[#2E4F5E]">all O Level subjects</strong> including Mathematics, Physics, Chemistry, Biology, English, Urdu, Economics, Computer Science, Accounting, Business Studies, History, Geography, and more. We cover both <strong class="text-[#2E4F5E]">CAIE (Cambridge International)</strong> and <strong class="text-[#2E4F5E]">Edexcel</strong> exam boards.`,
//         `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">exam technique</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. Regular assessments and progress reports ensure that both parents and students stay informed about progress and areas needing improvement.`,
//         `We understand that O Level is a significant step in a student's academic journey. That is why our tutors provide <strong class="text-[#2E4F5E]">comprehensive support</strong> — from concept building to exam preparation and study skills development. Our goal is to help every student build the confidence and competence they need to succeed.`,
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
//         'Our O Level tutors in Rawalpindi are <strong>subject specialists</strong> with experience helping students achieve strong results in Cambridge examinations.',
//         'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals, ensuring efficient and effective learning.',
//         'Our tutors are <strong>familiar with the specific requirements</strong> of both CAIE and Edexcel exam boards, including mark schemes, past paper patterns, and examiner expectations.',
//         'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit O Level tutoring into your family\'s busy schedule.',
//       ]}
//       faqs={[
//         {
//           q: 'How can I hire a home O Level tutor in Rawalpindi?',
//           a: 'Hiring a home O Level tutor in Rawalpindi is simple. Contact <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Avenfield Tutors on WhatsApp</a> with your child\'s subject and specific needs. We will match you with a qualified O Level tutor in your area. A free demo class allows you to assess the tutor before committing to regular sessions.',
//         },
//         {
//           q: 'Do you provide female O Level tutors in Rawalpindi?',
//           a: 'Yes, we provide both male and female O Level tutors in Rawalpindi. Parents can request a tutor based on their preference. All our tutors are verified, qualified, and experienced educators. We understand that some families prefer female tutors for their daughters, and we respect and accommodate these preferences.',
//         },
//         {
//           q: 'Which O Level subjects do you offer tuition for?',
//           a: 'We offer tuition for all O Level subjects including Mathematics, Physics, Chemistry, Biology, English, Urdu, Economics, Computer Science, Accounting, Business Studies, History, Geography, and more. Our tutors cover both CAIE and Edexcel exam boards. If you need a specific subject not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">contact us on WhatsApp</a> and we will find a tutor for you.',
//         },
//         {
//           q: 'What are the charges for a home O Level tutor in Rawalpindi?',
//           a: 'Tuition charges for home O Level tutors in Rawalpindi vary based on the subject, the tutor\'s experience, and the student\'s level. Typically, rates range from PKR 1,500 to 4,000 per hour, though this can vary. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive pricing with complete transparency and no hidden charges.',
//         },
//         {
//           q: 'Can I get a free demo class before hiring a tutor?',
//           a: 'Yes, we offer a free demo class for all new students. This allows you to assess the tutor\'s teaching style and ensure they are the right fit for your child before committing to regular sessions. The demo class is risk-free and gives you the opportunity to ask questions and discuss your child\'s learning needs in detail.',
//         },
//         {
//           q: 'Which areas of Rawalpindi do your home tutors cover?',
//           a: 'Our home O Level tutors cover all major areas of Rawalpindi including Bahria Town, DHA, Saddar, Satellite Town, Chaklala, Westridge, Gulraiz, Askari, Adiala Road, Rawat, Sixth Road, Tenant Colony, Lalazar, Peshawar Road, Fazal Town, Sadiqabad, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
//         },
//       ]}
//       areas={RAWALPINDI_AREAS}
//       relatedSubjects={[
//         { name: 'Home A Level Tutors', href: '/home-a-level-tutor-rawalpindi', icon: '🎯' },
//         { name: 'Home Math Tutors', href: '/home-math-tutor-rawalpindi', icon: '📐' },
//         { name: 'Home Physics Tutors', href: '/home-physics-tutor-rawalpindi', icon: '⚡' },
//         { name: 'Home Chemistry Tutors', href: '/home-chemistry-tutor-rawalpindi', icon: '🧪' },
//         { name: 'Home Biology Tutors', href: '/home-biology-tutor-rawalpindi', icon: '🧬' },
//         { name: 'Home English Tutors', href: '/home-english-tutor-rawalpindi', icon: '📝' },
//         { name: 'Home Tutor Rawalpindi', href: '/home-tutor-rawalpindi', icon: '🏠' },
//         { name: 'Online Tutors', href: '/tutors', icon: '💻' },
//         // ─── Future pages (will be created) ───
//         { name: 'Home IELTS Tutors', href: '/home-ielts-tutor-rawalpindi', icon: '🎓' },
//         { name: 'Home MDCAT Tutors', href: '/home-mdcat-tutor-rawalpindi', icon: '🩺' },
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
const url = `${SITE_URL}/home-o-level-tutor-rawalpindi`

export const metadata: Metadata = {
  title: 'Best Home O Level Tutor in Rawalpindi | Cambridge O Level Tuition',
  description:
    'Find qualified home O Level tutors in Rawalpindi for Cambridge CAIE & Edexcel. Expert tuition for all O Level subjects — Mathematics, Physics, Chemistry, Biology, English & more. Male & female tutors. Free demo class.',
  keywords: [
    'home O Level tutor Rawalpindi',
    'O Level tutor Rawalpindi',
    'O Level tuition Rawalpindi',
    'Cambridge O Level tutor Rawalpindi',
    'O Level teacher Rawalpindi',
    'home tuition Rawalpindi',
    'O Level Maths tutor Rawalpindi',
    'O Level Physics tutor Rawalpindi',
    'O Level Chemistry tutor Rawalpindi',
    'O Level Biology tutor Rawalpindi',
    'O Level English tutor Rawalpindi',
    'best O Level tutor in Rawalpindi',
    'female O Level tutor Rawalpindi',
    'CAIE O Level tutor',
    'Edexcel O Level tutor',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Home O Level Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home O Level tutors in Rawalpindi for Cambridge CAIE & Edexcel. Expert tuition for all subjects. Male & female tutors available. Free demo class.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Home O Level Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home O Level tutors in Rawalpindi for Cambridge CAIE & Edexcel. Expert tuition for all subjects.',
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

// ─── CLEANED AREAS: Genuine housing schemes only in housingSocieties ───
const RAWALPINDI_AREAS = {
  housingSocieties: [
    'Bahria Town Rawalpindi (All Phases)',
    'DHA Rawalpindi (All Phases)',
    'Askari Housing Schemes',
    'Gulraiz Housing Scheme',
    'Westridge Housing Scheme',
    'CBR Town Phase I',
    'CBR Town Phase II',
    'Media Town',
    'Soan Garden',
    'River Garden',
    'Pakistan Town',
    'Korang Town',
    'Korang Enclave',
    'Doctors Town',
    'Green Valley',
    'Capital Enclave',
    'Safari Villas',
    'Bahria Green',
    'Bahria Springs',
    'Bahria Paradise',
    'Bahria Intellectual Village',
    'Bahria Overseas Enclave',
    'Falcon Complex',
    'Faisal Colony',
    'Al-Haram City',
    'Rawalpindi Cooperative Housing Society',
    'National Police Foundation (NPF)',
    'Fazaia Housing Scheme',
    'Naval Anchorage',
    'Judicial Colony',
    'Police Foundation',
    'Blue World City',
    'Rudn Enclave',
    'Faisal Hills',
    'Faisal Town',
    'Top City-1',
    'Mumtaz City',
    'Capital Smart City',
    'Nova City',
    'Kingdom Valley',
    'University Town',
    'Silver City',
    'Multi Gardens B-17',
  ],
  localities: [
    'Saddar',
    'Satellite Town',
    'Chaklala',
    'Cantt',
    'Morgah',
    'Adiala Road',
    'Gulraiz',
    'Chakri Road',
    'Chak Jalal Din',
    'Misrial Road',
    'Tulsa Road',
    'Dhamial',
    'Adiala',
    'New Katarian',
    'Gulshan Abad',
    'Gulshan Colony',
    'Chakri Interchange Area',
    'Afshan Colony',
    'Chungi No. 22',
    'High Court Road',
    'Rawat',
    'Kallar Syedan Road',
    'Chak Beli Khan',
    'Girja Road',
    'Dhok Mangtal',
    'Dhok Banaras',
    'Dhok Sayedan',
    'Chakri',
    'Thalian',
    'Mandrah',
    'Dhoke Kala Khan',
    'Dhoke Kashmirian',
    'Dhoke Paracha',
    'Dhoke Hassu',
    'Dhoke Chaudhrian',
    'Sadiqabad',
    'Rehmanabad',
    'Shamsabad',
    'Committee Chowk',
    'Raja Bazaar',
    'Banni',
    'Gawalmandi',
    'Pirwadhai',
    'Tench Bhata',
    'Khyaban-e-Sir Syed',
    'Gulistan Colony',
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

export default function HomeOLevelTutorRawalpindiPage() {
  return (
    <SubjectLandingPage
      subject="O Level"
      city="Rawalpindi"
      slug="home-o-level-tutor-rawalpindi"
      pageTitle="Best Home O Level Tutor in Rawalpindi | Cambridge O Level Tuition"
      pageDescription="Find qualified home O Level tutors in Rawalpindi for Cambridge CAIE & Edexcel. Expert tuition for all O Level subjects — Mathematics, Physics, Chemistry, Biology, English & more. Male & female tutors. Free demo class."
      metaKeywords={[
        'home O Level tutor Rawalpindi',
        'O Level tutor Rawalpindi',
        'O Level tuition Rawalpindi',
        'Cambridge O Level tutor Rawalpindi',
        'O Level teacher Rawalpindi',
        'home tuition Rawalpindi',
        'O Level Maths tutor Rawalpindi',
        'O Level Physics tutor Rawalpindi',
        'O Level Chemistry tutor Rawalpindi',
        'O Level Biology tutor Rawalpindi',
        'O Level English tutor Rawalpindi',
        'best O Level tutor in Rawalpindi',
        'female O Level tutor Rawalpindi',
        'CAIE O Level tutor',
        'Edexcel O Level tutor',
      ]}
      subjectIcon="📚"
      subjectEmoji="📖"
      subjectOverview={[
        `The Cambridge O Level programme is one of the most respected international qualifications, and students in Rawalpindi are increasingly choosing this pathway for their secondary education. However, the O Level curriculum is demanding — it requires students to develop critical thinking, analytical skills, and a deep understanding of their subjects. A <a class="blog-link" href="/home-tutor-rawalpindi">home tutor in Rawalpindi</a> specialising in O Level subjects can provide the personalised support needed to excel in this challenging programme.`,
        `At <a class="blog-link" href="/">Avenfield Tutors</a>, we understand that O Level success requires more than just memorising facts. Our qualified O Level tutors in Rawalpindi help students build a strong foundation across all subjects, develop effective study habits, and master exam techniques. Whether your child is preparing for <a class="blog-link" href="/tutors?subject=O%20Level&city=Rawalpindi">O Level Mathematics</a>, <a class="blog-link" href="/tutors?subject=O%20Level&city=Rawalpindi">Physics</a>, <a class="blog-link" href="/tutors?subject=O%20Level&city=Rawalpindi">Chemistry</a>, <a class="blog-link" href="/tutors?subject=O%20Level&city=Rawalpindi">Biology</a>, or <a class="blog-link" href="/tutors?subject=O%20Level&city=Rawalpindi">English</a>, our tutors provide the support needed to achieve top grades.`,
        `We offer <a class="blog-link" href="/home-tutor-rawalpindi">home tuition in Rawalpindi</a> as well as <a class="blog-link" href="/tutors">online tutoring</a> options, giving families the flexibility to choose the learning format that best suits their needs. Our tutors are familiar with both <a class="blog-link" href="/tutors?subject=O%20Level&board=CAIE">CAIE</a> and <a class="blog-link" href="/tutors?subject=O%20Level&board=Edexcel">Edexcel</a> exam boards, ensuring students are fully prepared for their examinations.`,
        `Our O Level tutors in Rawalpindi are not just subject experts; they are patient and supportive educators who understand the challenges students face. They take the time to identify each student's strengths and weaknesses, building confidence with every session. With the right guidance, O Level students can achieve their full potential and build a strong foundation for <a class="blog-link" href="/home-a-level-tutor-rawalpindi">A Level</a> and beyond.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">home O Level tutors in Rawalpindi</strong> are qualified educators with experience teaching the Cambridge syllabus. They hold relevant qualifications in their subject areas and have a track record of helping students achieve strong results. Our tutors are familiar with Cambridge marking and assessment approaches.`,
        `We offer tuition for <strong class="text-[#2E4F5E]">all O Level subjects</strong> including Mathematics, Physics, Chemistry, Biology, English, Urdu, Economics, Computer Science, Accounting, Business Studies, History, Geography, and more. We cover both <strong class="text-[#2E4F5E]">CAIE (Cambridge International)</strong> and <strong class="text-[#2E4F5E]">Edexcel</strong> exam boards.`,
        `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">exam technique</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. Regular assessments and progress reports ensure that both parents and students stay informed about progress and areas needing improvement.`,
        `We understand that O Level is a significant step in a student's academic journey. That is why our tutors provide <strong class="text-[#2E4F5E]">comprehensive support</strong> — from concept building to exam preparation and study skills development. Our goal is to help every student build the confidence and competence they need to succeed.`,
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
        'Our O Level tutors in Rawalpindi are <strong>subject specialists</strong> with experience helping students achieve strong results in Cambridge examinations.',
        'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals, ensuring efficient and effective learning.',
        'Our tutors are <strong>familiar with the specific requirements</strong> of both CAIE and Edexcel exam boards, including mark schemes, past paper patterns, and examiner expectations.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit O Level tutoring into your family\'s busy schedule.',
      ]}
      faqs={[
        {
          q: 'How can I hire a home O Level tutor in Rawalpindi?',
          a: 'Hiring a home O Level tutor in Rawalpindi is simple. Contact <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">Avenfield Tutors on WhatsApp</a> with your child\'s subject and specific needs. We will match you with a qualified O Level tutor in your area. A free demo class allows you to assess the tutor before committing to regular sessions.',
        },
        {
          q: 'Do you provide female O Level tutors in Rawalpindi?',
          a: 'Yes, we provide both male and female O Level tutors in Rawalpindi. Parents can request a tutor based on their preference. All our tutors are verified, qualified, and experienced educators. We understand that some families prefer female tutors for their daughters, and we respect and accommodate these preferences.',
        },
        {
          q: 'Which O Level subjects do you offer tuition for?',
          a: 'We offer tuition for all O Level subjects including Mathematics, Physics, Chemistry, Biology, English, Urdu, Economics, Computer Science, Accounting, Business Studies, History, Geography, and more. Our tutors cover both CAIE and Edexcel exam boards. If you need a specific subject not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">contact us on WhatsApp</a> and we will find a tutor for you.',
        },
        {
          q: 'What are the charges for a home O Level tutor in Rawalpindi?',
          a: 'Tuition charges for home O Level tutors in Rawalpindi vary based on the subject, the tutor\'s experience, and the student\'s level. Typically, rates range from PKR 1,500 to 4,000 per hour, though this can vary. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive pricing with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free demo class before hiring a tutor?',
          a: 'Yes, we offer a free demo class for all new students. This allows you to assess the tutor\'s teaching style and ensure they are the right fit for your child before committing to regular sessions. The demo class is risk-free and gives you the opportunity to ask questions and discuss your child\'s learning needs in detail.',
        },
        {
          q: 'Which areas of Rawalpindi do your home tutors cover?',
          a: 'Our home O Level tutors cover all major areas of Rawalpindi including Bahria Town, DHA, Saddar, Satellite Town, Chaklala, Westridge, Gulraiz, Askari, Adiala Road, Rawat, Sixth Road, Tenant Colony, Lalazar, Peshawar Road, Fazal Town, Sadiqabad, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
        },
      ]}
      areas={RAWALPINDI_AREAS}
      relatedSubjects={[
        { name: 'Home A Level Tutors', href: '/home-a-level-tutor-rawalpindi', icon: '🎯' },
        { name: 'Home Math Tutors', href: '/home-math-tutor-rawalpindi', icon: '📐' },
        { name: 'Home Physics Tutors', href: '/home-physics-tutor-rawalpindi', icon: '⚡' },
        { name: 'Home Chemistry Tutors', href: '/home-chemistry-tutor-rawalpindi', icon: '🧪' },
        { name: 'Home Biology Tutors', href: '/home-biology-tutor-rawalpindi', icon: '🧬' },
        { name: 'Home English Tutors', href: '/home-english-tutor-rawalpindi', icon: '📝' },
        { name: 'Home Tutor Rawalpindi', href: '/home-tutor-rawalpindi', icon: '🏠' },
        { name: 'Online Tutors', href: '/tutors', icon: '💻' },
        // ─── Future pages (will be created) ───
        { name: 'Home IELTS Tutors', href: '/home-ielts-tutor-rawalpindi', icon: '🎓' },
        { name: 'Home MDCAT Tutors', href: '/home-mdcat-tutor-rawalpindi', icon: '🩺' },
        { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
        { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
      ]}
      nearbyCity="Islamabad"
      canonicalUrl={url}
    />
  )
}