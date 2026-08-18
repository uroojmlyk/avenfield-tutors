// import type { Metadata } from 'next'
// import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
// const url = `${SITE_URL}/home-geography-tutor-rawalpindi`

// export const metadata: Metadata = {
//   title: 'Best Home Geography Tutor in Rawalpindi | O Level, A Level & CSS Geography',
//   description:
//     'Find qualified home Geography tutors in Rawalpindi for O Level, A Level, IGCSE & CSS. Learn Physical Geography, Human Geography, Map Skills & Pakistan Geography. Male & female tutors. Free demo class.',
//   keywords: [
//     'home Geography tutor Rawalpindi',
//     'Geography tutor Rawalpindi',
//     'Geography tuition Rawalpindi',
//     'Geography teacher Rawalpindi',
//     'home tuition Rawalpindi',
//     'O Level Geography tutor',
//     'A Level Geography tutor',
//     'CSS Geography tutor',
//     'Physical Geography tutor',
//     'Human Geography tutor',
//     'Map Skills tutor',
//     'Pakistan Geography tutor',
//     'best Geography tutor in Rawalpindi',
//     'female Geography tutor Rawalpindi',
//   ],
//   alternates: { canonical: url },
//   openGraph: {
//     title: 'Best Home Geography Tutor in Rawalpindi | Avenfield Tutors',
//     description: 'Qualified home Geography tutors in Rawalpindi for O Level, A Level, IGCSE & CSS. Learn Physical Geography, Human Geography, Map Skills & Pakistan Geography. Male & female tutors available. Free demo class.',
//     type: 'website',
//     locale: 'en_PK',
//     siteName: 'Avenfield Tutors',
//     url,
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Best Home Geography Tutor in Rawalpindi | Avenfield Tutors',
//     description: 'Qualified home Geography tutors in Rawalpindi for O Level, A Level, IGCSE & CSS. Expert tuition for all topics.',
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

// export default function HomeGeographyTutorRawalpindiPage() {
//   return (
//     <SubjectLandingPage
//       subject="Geography"
//       city="Rawalpindi"
//       slug="home-geography-tutor-rawalpindi"
//       pageTitle="Best Home Geography Tutor in Rawalpindi | O Level, A Level & CSS Geography"
//       pageDescription="Find qualified home Geography tutors in Rawalpindi for O Level, A Level, IGCSE & CSS. Learn Physical Geography, Human Geography, Map Skills & Pakistan Geography. Male & female tutors. Free demo class."
//       metaKeywords={[
//         'home Geography tutor Rawalpindi',
//         'Geography tutor Rawalpindi',
//         'Geography tuition Rawalpindi',
//         'Geography teacher Rawalpindi',
//         'home tuition Rawalpindi',
//         'O Level Geography tutor',
//         'A Level Geography tutor',
//         'CSS Geography tutor',
//         'Physical Geography tutor',
//         'Human Geography tutor',
//         'Map Skills tutor',
//         'Pakistan Geography tutor',
//         'best Geography tutor in Rawalpindi',
//         'female Geography tutor Rawalpindi',
//       ]}
//       subjectIcon="🌍"
//       subjectEmoji="🗺️"
//       subjectOverview={[
//         'Geography is a subject that connects the physical world with human activity, making it both fascinating and challenging for students in Rawalpindi. The subject covers physical geography, human geography, map skills, and regional geography. Many students find Geography requires both factual knowledge and analytical skills to understand complex relationships between people and their environment. A <a class="blog-link" href="/home-tutor-rawalpindi">home tutor in Rawalpindi</a> specialising in Geography can provide the focused guidance needed to excel.',
//         'At <a class="blog-link" href="/">Avenfield Tutors</a>, we understand that Geography requires a balanced approach combining theoretical understanding with practical map skills. Our qualified Geography tutors in Rawalpindi help students build a strong foundation in physical and human geography, develop map reading skills, and understand the geography of Pakistan. Whether your child is preparing for <a class="blog-link" href="/tutors?subject=O%20Level&city=Rawalpindi">O Level Geography</a>, <a class="blog-link" href="/tutors?subject=A%20Level&city=Rawalpindi">A Level Geography</a>, or <a class="blog-link" href="/tutors?subject=CSS%20Geography">CSS Geography</a>, our tutors provide the support needed to achieve strong results.',
//         'We offer <a class="blog-link" href="/home-tutor-rawalpindi">home tuition in Rawalpindi</a> as well as <a class="blog-link" href="/tutors">online tutoring</a> options, giving families the flexibility to choose the learning format that best suits their needs. Our tutors use maps, diagrams, satellite images, and case studies to make Geography engaging and relevant.',
//         'Our Geography tutors in Rawalpindi are experienced educators who understand the specific demands of each curriculum. They help students develop strong analytical skills, data interpretation abilities, and the capacity to evaluate complex geographical issues. With the right guidance, students can develop a deep appreciation for the world around them and achieve strong academic results.',
//       ]}
//       subjectDetails={[
//         'Our <strong class="text-[#2E4F5E]">home Geography tutors in Rawalpindi</strong> are qualified educators with experience teaching Geography across multiple curricula. They hold relevant qualifications in Geography, Environmental Science, or related fields and have a track record of helping students achieve strong results.',
//         'We offer tuition for <strong class="text-[#2E4F5E]">all Geography topics</strong> including physical geography (landforms, climate, ecosystems), human geography (population, urbanisation, economic activities), map skills, and regional geography with a focus on Pakistan. We cover curricula such as <strong class="text-[#2E4F5E]">CAIE (Cambridge International)</strong>, <strong class="text-[#2E4F5E]">Edexcel</strong>, and local Pakistani boards.',
//         'Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">analytical skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. Regular assessments and progress reports ensure that both parents and students stay informed about progress and areas needing improvement.',
//         'We understand that Geography requires both theoretical understanding and practical map skills. That is why our tutors use <strong class="text-[#2E4F5E]">interactive teaching methods</strong> including map work, case studies, and data analysis to help students develop a comprehensive understanding of geographical concepts.',
//       ]}
//       examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA', 'Federal Board', 'Punjab Board', 'CSS']}
//       targetExams={['O Level', 'A Level', 'IGCSE', 'Matric', 'FSc', 'CSS']}
//       commonTopics={[
//         'Physical Geography & Landforms',
//         'Climate & Weather Patterns',
//         'Ecosystems & Biodiversity',
//         'Population Geography',
//         'Urbanisation & Settlement',
//         'Economic Geography',
//         'Map Reading & Interpretation',
//         'Pakistan Geography',
//         'Environmental Issues',
//         'Data Interpretation & Analysis',
//       ]}
//       whyChoose={[
//         'Our Geography tutors in Rawalpindi are <strong>experienced educators</strong> with relevant qualifications in Geography, Environmental Science, or related fields and a track record of helping students achieve strong results.',
//         'We provide <strong>personalised lesson plans</strong> tailored to each students learning style, pace, and academic goals, ensuring efficient and effective learning of complex geographical concepts.',
//         'Our tutors use <strong>interactive teaching methods</strong> including map work, case studies, and data analysis to make Geography engaging and relevant.',
//         'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Geography tutoring into your family busy schedule. Progress reports keep parents informed every step of the way.',
//       ]}
//       faqs={[
//         {
//           q: 'How can I hire a home Geography tutor in Rawalpindi?',
//           a: 'Hiring a home Geography tutor in Rawalpindi is simple. Contact <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Avenfield Tutors on WhatsApp</a> with your child grade level and curriculum. We will match you with a qualified Geography tutor in your area. A free demo class allows you to assess the tutor before committing to regular sessions.',
//         },
//         {
//           q: 'Do you provide female Geography tutors in Rawalpindi?',
//           a: 'Yes, we provide both male and female Geography tutors in Rawalpindi. Parents can request a tutor based on their preference. All our tutors are verified, qualified, and experienced educators. We understand that some families prefer female tutors, and we respect and accommodate these preferences.',
//         },
//         {
//           q: 'Which Geography curricula do you offer tuition for?',
//           a: 'We offer tuition for all major Geography curricula including CAIE (Cambridge International) O Level and A Level, Edexcel, Oxford AQA, Federal Board, Punjab Board, and CSS Geography preparation. Our tutors are familiar with the specific requirements of each curriculum and exam board. If you need a specific syllabus not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">contact us on WhatsApp</a> and we will find a tutor for you.',
//         },
//         {
//           q: 'What are the charges for a home Geography tutor in Rawalpindi?',
//           a: 'Tuition charges for home Geography tutors in Rawalpindi vary based on the curriculum, the tutor experience, and the student level. Typically, rates range from PKR 1,500 to 4,000 per hour, though this can vary. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive pricing with complete transparency and no hidden charges.',
//         },
//         {
//           q: 'Can I get a free demo class before hiring a tutor?',
//           a: 'Yes, we offer a free demo class for all new students. This allows you to assess the tutor teaching style and ensure they are the right fit for your child before committing to regular sessions. The demo class is risk-free and gives you the opportunity to ask questions and discuss your child learning needs in detail.',
//         },
//         {
//           q: 'Which areas of Rawalpindi do your home tutors cover?',
//           a: 'Our home Geography tutors cover all major areas of Rawalpindi including Bahria Town, DHA, Saddar, Satellite Town, Chaklala, Westridge, Gulraiz, Askari, Adiala Road, Rawat, Sixth Road, Tenant Colony, Lalazar, Peshawar Road, Fazal Town, Sadiqabad, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
//         },
//       ]}
//       areas={RAWALPINDI_AREAS}
//       relatedSubjects={[
//         { name: 'Home O Level Tutors', href: '/home-o-level-tutor-rawalpindi', icon: '📚' },
//         { name: 'Home A Level Tutors', href: '/home-a-level-tutor-rawalpindi', icon: '🎯' },
//         { name: 'Home IELTS Tutors', href: '/home-ielts-tutor-rawalpindi', icon: '🎓' },
//         { name: 'Home MDCAT Tutors', href: '/home-mdcat-tutor-rawalpindi', icon: '🩺' },
//         { name: 'Home Pakistan Studies Tutors', href: '/home-pakistan-studies-tutor-rawalpindi', icon: '🇵🇰' },
//         { name: 'Home Islamic Studies Tutors', href: '/home-islamic-studies-tutor-rawalpindi', icon: '☪️' },
//         { name: 'Home Psychology Tutors', href: '/home-psychology-tutor-rawalpindi', icon: '🧠' },
//         { name: 'Home Sociology Tutors', href: '/home-sociology-tutor-rawalpindi', icon: '👥' },
//         { name: 'Home Tutor Rawalpindi', href: '/home-tutor-rawalpindi', icon: '🏠' },
//         { name: 'Online Tutors', href: '/tutors', icon: '💻' },
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
const url = `${SITE_URL}/home-geography-tutor-rawalpindi`

export const metadata: Metadata = {
  title: 'Best Home Geography Tutor in Rawalpindi | O Level, A Level & CSS Geography',
  description:
    'Find qualified home Geography tutors in Rawalpindi for O Level, A Level, IGCSE & CSS. Learn Physical Geography, Human Geography, Map Skills & Pakistan Geography. Male & female tutors. Free demo class.',
  keywords: [
    'home Geography tutor Rawalpindi',
    'Geography tutor Rawalpindi',
    'Geography tuition Rawalpindi',
    'Geography teacher Rawalpindi',
    'home tuition Rawalpindi',
    'O Level Geography tutor',
    'A Level Geography tutor',
    'CSS Geography tutor',
    'Physical Geography tutor',
    'Human Geography tutor',
    'Map Skills tutor',
    'Pakistan Geography tutor',
    'best Geography tutor in Rawalpindi',
    'female Geography tutor Rawalpindi',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Home Geography Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home Geography tutors in Rawalpindi for O Level, A Level, IGCSE & CSS. Learn Physical Geography, Human Geography, Map Skills & Pakistan Geography. Male & female tutors available. Free demo class.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Home Geography Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home Geography tutors in Rawalpindi for O Level, A Level, IGCSE & CSS. Expert tuition for all topics.',
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

export default function HomeGeographyTutorRawalpindiPage() {
  return (
    <SubjectLandingPage
      subject="Geography"
      city="Rawalpindi"
      slug="home-geography-tutor-rawalpindi"
      pageTitle="Best Home Geography Tutor in Rawalpindi | O Level, A Level & CSS Geography"
      pageDescription="Find qualified home Geography tutors in Rawalpindi for O Level, A Level, IGCSE & CSS. Learn Physical Geography, Human Geography, Map Skills & Pakistan Geography. Male & female tutors. Free demo class."
      metaKeywords={[
        'home Geography tutor Rawalpindi',
        'Geography tutor Rawalpindi',
        'Geography tuition Rawalpindi',
        'Geography teacher Rawalpindi',
        'home tuition Rawalpindi',
        'O Level Geography tutor',
        'A Level Geography tutor',
        'CSS Geography tutor',
        'Physical Geography tutor',
        'Human Geography tutor',
        'Map Skills tutor',
        'Pakistan Geography tutor',
        'best Geography tutor in Rawalpindi',
        'female Geography tutor Rawalpindi',
      ]}
      subjectIcon="🌍"
      subjectEmoji="🗺️"
      subjectOverview={[
        'Geography is a subject that connects the physical world with human activity, making it both fascinating and challenging for students in Rawalpindi. The subject covers physical geography, human geography, map skills, and regional geography. Many students find Geography requires both factual knowledge and analytical skills to understand complex relationships between people and their environment. A <a class="blog-link" href="/home-tutor-rawalpindi">home tutor in Rawalpindi</a> specialising in Geography can provide the focused guidance needed to excel.',
        'At <a class="blog-link" href="/">Avenfield Tutors</a>, we understand that Geography requires a balanced approach combining theoretical understanding with practical map skills. Our qualified Geography tutors in Rawalpindi help students build a strong foundation in physical and human geography, develop map reading skills, and understand the geography of Pakistan. Whether your child is preparing for <a class="blog-link" href="/tutors?subject=O%20Level&city=Rawalpindi">O Level Geography</a>, <a class="blog-link" href="/tutors?subject=A%20Level&city=Rawalpindi">A Level Geography</a>, or <a class="blog-link" href="/tutors?subject=CSS%20Geography">CSS Geography</a>, our tutors provide the support needed to achieve strong results.',
        'We offer <a class="blog-link" href="/home-tutor-rawalpindi">home tuition in Rawalpindi</a> as well as <a class="blog-link" href="/tutors">online tutoring</a> options, giving families the flexibility to choose the learning format that best suits their needs. Our tutors use maps, diagrams, satellite images, and case studies to make Geography engaging and relevant.',
        'Our Geography tutors in Rawalpindi are experienced educators who understand the specific demands of each curriculum. They help students develop strong analytical skills, data interpretation abilities, and the capacity to evaluate complex geographical issues. With the right guidance, students can develop a deep appreciation for the world around them and achieve strong academic results.',
      ]}
      subjectDetails={[
        'Our <strong class="text-[#2E4F5E]">home Geography tutors in Rawalpindi</strong> are qualified educators with experience teaching Geography across multiple curricula. They hold relevant qualifications in Geography, Environmental Science, or related fields and have a track record of helping students achieve strong results.',
        'We offer tuition for <strong class="text-[#2E4F5E]">all Geography topics</strong> including physical geography (landforms, climate, ecosystems), human geography (population, urbanisation, economic activities), map skills, and regional geography with a focus on Pakistan. We cover curricula such as <strong class="text-[#2E4F5E]">CAIE (Cambridge International)</strong>, <strong class="text-[#2E4F5E]">Edexcel</strong>, and local Pakistani boards.',
        'Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">analytical skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. Regular assessments and progress reports ensure that both parents and students stay informed about progress and areas needing improvement.',
        'We understand that Geography requires both theoretical understanding and practical map skills. That is why our tutors use <strong class="text-[#2E4F5E]">interactive teaching methods</strong> including map work, case studies, and data analysis to help students develop a comprehensive understanding of geographical concepts.',
      ]}
      examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA', 'Federal Board', 'Punjab Board', 'CSS']}
      targetExams={['O Level', 'A Level', 'IGCSE', 'Matric', 'FSc', 'CSS']}
      commonTopics={[
        'Physical Geography & Landforms',
        'Climate & Weather Patterns',
        'Ecosystems & Biodiversity',
        'Population Geography',
        'Urbanisation & Settlement',
        'Economic Geography',
        'Map Reading & Interpretation',
        'Pakistan Geography',
        'Environmental Issues',
        'Data Interpretation & Analysis',
      ]}
      whyChoose={[
        'Our Geography tutors in Rawalpindi are <strong>experienced educators</strong> with relevant qualifications in Geography, Environmental Science, or related fields and a track record of helping students achieve strong results.',
        'We provide <strong>personalised lesson plans</strong> tailored to each students learning style, pace, and academic goals, ensuring efficient and effective learning of complex geographical concepts.',
        'Our tutors use <strong>interactive teaching methods</strong> including map work, case studies, and data analysis to make Geography engaging and relevant.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Geography tutoring into your family busy schedule. Progress reports keep parents informed every step of the way.',
      ]}
      faqs={[
        {
          q: 'How can I hire a home Geography tutor in Rawalpindi?',
          a: 'Hiring a home Geography tutor in Rawalpindi is simple. Contact <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">Avenfield Tutors on WhatsApp</a> with your child grade level and curriculum. We will match you with a qualified Geography tutor in your area. A free demo class allows you to assess the tutor before committing to regular sessions.',
        },
        {
          q: 'Do you provide female Geography tutors in Rawalpindi?',
          a: 'Yes, we provide both male and female Geography tutors in Rawalpindi. Parents can request a tutor based on their preference. All our tutors are verified, qualified, and experienced educators. We understand that some families prefer female tutors, and we respect and accommodate these preferences.',
        },
        {
          q: 'Which Geography curricula do you offer tuition for?',
          a: 'We offer tuition for all major Geography curricula including CAIE (Cambridge International) O Level and A Level, Edexcel, Oxford AQA, Federal Board, Punjab Board, and CSS Geography preparation. Our tutors are familiar with the specific requirements of each curriculum and exam board. If you need a specific syllabus not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">contact us on WhatsApp</a> and we will find a tutor for you.',
        },
        {
          q: 'What are the charges for a home Geography tutor in Rawalpindi?',
          a: 'Tuition charges for home Geography tutors in Rawalpindi vary based on the curriculum, the tutor experience, and the student level. Typically, rates range from PKR 1,500 to 4,000 per hour, though this can vary. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive pricing with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free demo class before hiring a tutor?',
          a: 'Yes, we offer a free demo class for all new students. This allows you to assess the tutor teaching style and ensure they are the right fit for your child before committing to regular sessions. The demo class is risk-free and gives you the opportunity to ask questions and discuss your child learning needs in detail.',
        },
        {
          q: 'Which areas of Rawalpindi do your home tutors cover?',
          a: 'Our home Geography tutors cover all major areas of Rawalpindi including Bahria Town, DHA, Saddar, Satellite Town, Chaklala, Westridge, Gulraiz, Askari, Adiala Road, Rawat, Sixth Road, Tenant Colony, Lalazar, Peshawar Road, Fazal Town, Sadiqabad, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
        },
      ]}
      areas={RAWALPINDI_AREAS}
      relatedSubjects={[
        { name: 'Home O Level Tutors', href: '/home-o-level-tutor-rawalpindi', icon: '📚' },
        { name: 'Home A Level Tutors', href: '/home-a-level-tutor-rawalpindi', icon: '🎯' },
        { name: 'Home IELTS Tutors', href: '/home-ielts-tutor-rawalpindi', icon: '🎓' },
        { name: 'Home MDCAT Tutors', href: '/home-mdcat-tutor-rawalpindi', icon: '🩺' },
        { name: 'Home Pakistan Studies Tutors', href: '/home-pakistan-studies-tutor-rawalpindi', icon: '🇵🇰' },
        { name: 'Home Islamic Studies Tutors', href: '/home-islamic-studies-tutor-rawalpindi', icon: '☪️' },
        { name: 'Home Psychology Tutors', href: '/home-psychology-tutor-rawalpindi', icon: '🧠' },
        { name: 'Home Sociology Tutors', href: '/home-sociology-tutor-rawalpindi', icon: '👥' },
        { name: 'Home Tutor Rawalpindi', href: '/home-tutor-rawalpindi', icon: '🏠' },
        { name: 'Online Tutors', href: '/tutors', icon: '💻' },
        { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
        { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
      ]}
      nearbyCity="Islamabad"
      canonicalUrl={url}
    />
  )
}