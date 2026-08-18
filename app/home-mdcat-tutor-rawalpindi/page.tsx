// import type { Metadata } from 'next'
// import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
// const url = `${SITE_URL}/home-mdcat-tutor-rawalpindi`

// export const metadata: Metadata = {
//   title: 'Best Home MDCAT Tutor in Rawalpindi | Medical College Test Preparation',
//   description:
//     'Find qualified home MDCAT tutors in Rawalpindi for Biology, Chemistry, Physics & English. Expert preparation for PMC & UHS MDCAT exam. Male & female tutors. Free demo class.',
//   keywords: [
//     'home MDCAT tutor Rawalpindi',
//     'MDCAT tutor Rawalpindi',
//     'MDCAT preparation Rawalpindi',
//     'MDCAT teacher Rawalpindi',
//     'home tuition Rawalpindi',
//     'PMC MDCAT tutor',
//     'UHS MDCAT tutor',
//     'MDCAT Biology tutor',
//     'MDCAT Chemistry tutor',
//     'MDCAT Physics tutor',
//     'MDCAT English tutor',
//     'medical college test preparation',
//     'best MDCAT tutor in Rawalpindi',
//     'female MDCAT tutor Rawalpindi',
//   ],
//   alternates: { canonical: url },
//   openGraph: {
//     title: 'Best Home MDCAT Tutor in Rawalpindi | Avenfield Tutors',
//     description: 'Qualified home MDCAT tutors in Rawalpindi for Biology, Chemistry, Physics & English. Expert preparation for PMC & UHS MDCAT exam. Male & female tutors available. Free demo class.',
//     type: 'website',
//     locale: 'en_PK',
//     siteName: 'Avenfield Tutors',
//     url,
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Best Home MDCAT Tutor in Rawalpindi | Avenfield Tutors',
//     description: 'Qualified home MDCAT tutors in Rawalpindi for Biology, Chemistry, Physics & English. Expert preparation for PMC & UHS MDCAT exam.',
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

// export default function HomeMdcatTutorRawalpindiPage() {
//   return (
//     <SubjectLandingPage
//       subject="MDCAT"
//       city="Rawalpindi"
//       slug="home-mdcat-tutor-rawalpindi"
//       pageTitle="Best Home MDCAT Tutor in Rawalpindi | Medical College Test Preparation"
//       pageDescription="Find qualified home MDCAT tutors in Rawalpindi for Biology, Chemistry, Physics & English. Expert preparation for PMC & UHS MDCAT exam. Male & female tutors. Free demo class."
//       metaKeywords={[
//         'home MDCAT tutor Rawalpindi',
//         'MDCAT tutor Rawalpindi',
//         'MDCAT preparation Rawalpindi',
//         'MDCAT teacher Rawalpindi',
//         'home tuition Rawalpindi',
//         'PMC MDCAT tutor',
//         'UHS MDCAT tutor',
//         'MDCAT Biology tutor',
//         'MDCAT Chemistry tutor',
//         'MDCAT Physics tutor',
//         'MDCAT English tutor',
//         'medical college test preparation',
//         'best MDCAT tutor in Rawalpindi',
//         'female MDCAT tutor Rawalpindi',
//       ]}
//       subjectIcon="🩺"
//       subjectEmoji="🏥"
//       subjectOverview={[
//         'MDCAT is the gateway to medical and dental colleges in Pakistan, and competition for seats is intense. Students in Rawalpindi face significant pressure to achieve high scores in this high-stakes exam. MDCAT tests knowledge across four subjects: Biology, Chemistry, Physics, and English, with 200 MCQs to be completed in 3.5 hours. A <a class="blog-link" href="/home-tutor-rawalpindi">home tutor in Rawalpindi</a> specialising in MDCAT can provide the focused preparation needed to achieve a competitive score.',
//         'At <a class="blog-link" href="/">Avenfield Tutors</a>, we understand that MDCAT success requires a strategic approach. Our qualified MDCAT tutors in Rawalpindi help students master all four subjects, with special emphasis on high-weightage topics and time management. Whether you need help with <a class="blog-link" href="/tutors?subject=Biology&city=Rawalpindi">Biology</a>, <a class="blog-link" href="/tutors?subject=Chemistry&city=Rawalpindi">Chemistry</a>, <a class="blog-link" href="/tutors?subject=Physics&city=Rawalpindi">Physics</a>, or <a class="blog-link" href="/tutors?subject=English&city=Rawalpindi">English</a>, our tutors provide the support needed to excel.',
//         'We offer <a class="blog-link" href="/home-tutor-rawalpindi">home tuition in Rawalpindi</a> as well as <a class="blog-link" href="/tutors">online tutoring</a> options, giving you the flexibility to choose the learning format that best suits your schedule. Our tutors use past papers, practice MCQs, and mock tests to help you build confidence and improve your performance. They are familiar with the latest <a class="blog-link" href="/tutors?subject=MDCAT&exam=PMC">PMC</a> and <a class="blog-link" href="/tutors?subject=MDCAT&exam=UHS">UHS</a> MDCAT patterns.',
//         'Our MDCAT tutors in Rawalpindi are experienced educators who understand the challenges of medical entrance exams. They provide personalised guidance, helping you identify your weak areas and develop effective strategies for improvement. With consistent practice and expert guidance, achieving a competitive MDCAT score becomes achievable.',
//       ]}
//       subjectDetails={[
//         'Our <strong class="text-[#2E4F5E]">home MDCAT tutors in Rawalpindi</strong> are qualified educators with experience in medical entrance exam preparation. They are familiar with the latest PMC and UHS guidelines and syllabus. Many of our tutors have a strong background in the sciences and understand the specific demands of the MDCAT exam.',
//         'We offer comprehensive coverage of <strong class="text-[#2E4F5E]">all four MDCAT subjects</strong> — Biology (80 MCQs), Chemistry (60 MCQs), Physics (40 MCQs), and English (20 MCQs). Our tutors focus on high-weightage topics and provide targeted practice to help students improve their performance.',
//         'Our tutors emphasise <strong class="text-[#2E4F5E]">time management</strong> and <strong class="text-[#2E4F5E]">test-taking strategies</strong>, which are crucial for the 200 MCQs in 3.5 hours. They provide regular mock tests under timed conditions, followed by detailed performance analysis to track progress and identify areas for improvement.',
//         'We also provide <strong class="text-[#2E4F5E]">one-on-one doubt clearing</strong> sessions and <strong class="text-[#2E4F5E]">topic-wise revision</strong> to ensure that students are fully prepared for every section of the exam. Our tutors adapt their teaching methods to suit each student\'s learning style and pace.',
//       ]}
//       examBoards={['PMC MDCAT', 'UHS MDCAT', 'NUMS MDCAT']}
//       targetExams={['Top 1%ile', 'Top 5%ile', 'Top 10%ile', 'Medical College Admission']}
//       commonTopics={[
//         'Human Physiology & Anatomy',
//         'Organic Chemistry Reactions',
//         'Mechanics & Electricity',
//         'Genetics & Evolution',
//         'Inorganic Chemistry',
//         'Thermodynamics & Kinetics',
//         'Cell Biology & Biochemistry',
//         'Electromagnetism',
//         'English Vocabulary & Grammar',
//         'Logical Reasoning',
//       ]}
//       whyChoose={[
//         'Our MDCAT tutors in Rawalpindi are <strong>experienced educators</strong> with a strong background in medical entrance exam preparation. They are familiar with the latest PMC and UHS guidelines and syllabus.',
//         'We provide <strong>personalised study plans</strong> based on your current level and target score. Each session is tailored to address your specific weaknesses and build on your strengths, ensuring efficient preparation.',
//         'Our tutors use <strong>authentic practice materials</strong> and past papers to give you the most realistic preparation possible. They also teach effective strategies for time management and test-taking.',
//         'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit MDCAT preparation into your busy schedule. We also provide regular mock tests and detailed feedback to track your progress.',
//       ]}
//       faqs={[
//         {
//           q: 'How can I hire a home MDCAT tutor in Rawalpindi?',
//           a: 'Hiring a home MDCAT tutor in Rawalpindi is simple. Contact <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Avenfield Tutors on WhatsApp</a> with your target score and specific needs. We will match you with a qualified MDCAT tutor in your area. A free demo class allows you to assess the tutor before committing to regular sessions.',
//         },
//         {
//           q: 'Do you provide female MDCAT tutors in Rawalpindi?',
//           a: 'Yes, we provide both male and female MDCAT tutors in Rawalpindi. Parents can request a tutor based on their preference. All our tutors are verified, qualified, and experienced educators. We understand that some families prefer female tutors, and we respect and accommodate these preferences.',
//         },
//         {
//           q: 'Which subjects are covered in the MDCAT exam?',
//           a: 'The MDCAT consists of 200 MCQs across four subjects: Biology (80 MCQs), Chemistry (60 MCQs), Physics (40 MCQs), and English (20 MCQs). Our tutors provide comprehensive coverage of all subjects, with special emphasis on high-weightage topics and time management strategies.',
//         },
//         {
//           q: 'What are the charges for a home MDCAT tutor in Rawalpindi?',
//           a: 'Tuition charges for home MDCAT tutors in Rawalpindi vary based on the tutor\'s experience and the student\'s target score. Typically, rates range from PKR 2,500 to 5,000 per hour, though this can vary. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive pricing with complete transparency and no hidden charges.',
//         },
//         {
//           q: 'Can I get a free demo class before hiring a tutor?',
//           a: 'Yes, we offer a free demo class for all new students. This allows you to assess the tutor\'s teaching style and ensure they are the right fit for you before committing to regular sessions. The demo class is risk-free and gives you the opportunity to discuss your learning needs in detail.',
//         },
//         {
//           q: 'Which areas of Rawalpindi do your home tutors cover?',
//           a: 'Our home MDCAT tutors cover all major areas of Rawalpindi including Bahria Town, DHA, Saddar, Satellite Town, Chaklala, Westridge, Gulraiz, Askari, Adiala Road, Rawat, Sixth Road, Tenant Colony, Lalazar, Peshawar Road, Fazal Town, Sadiqabad, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
//         },
//       ]}
//       areas={RAWALPINDI_AREAS}
//       relatedSubjects={[
//         { name: 'Home O Level Tutors', href: '/home-o-level-tutor-rawalpindi', icon: '📚' },
//         { name: 'Home A Level Tutors', href: '/home-a-level-tutor-rawalpindi', icon: '🎯' },
//         { name: 'Home Math Tutors', href: '/home-math-tutor-rawalpindi', icon: '📐' },
//         { name: 'Home Physics Tutors', href: '/home-physics-tutor-rawalpindi', icon: '⚡' },
//         { name: 'Home Chemistry Tutors', href: '/home-chemistry-tutor-rawalpindi', icon: '🧪' },
//         { name: 'Home Biology Tutors', href: '/home-biology-tutor-rawalpindi', icon: '🧬' },
//         { name: 'Home English Tutors', href: '/home-english-tutor-rawalpindi', icon: '📝' },
//         { name: 'Home Tutor Rawalpindi', href: '/home-tutor-rawalpindi', icon: '🏠' },
//         { name: 'Online Tutors', href: '/tutors', icon: '💻' },
//         { name: 'Home IELTS Tutors', href: '/home-ielts-tutor-rawalpindi', icon: '🎓' },
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
const url = `${SITE_URL}/home-mdcat-tutor-rawalpindi`

export const metadata: Metadata = {
  title: 'Best Home MDCAT Tutor in Rawalpindi | Medical College Test Preparation',
  description:
    'Find qualified home MDCAT tutors in Rawalpindi for Biology, Chemistry, Physics & English. Expert preparation for PMC & UHS MDCAT exam. Male & female tutors. Free demo class.',
  keywords: [
    'home MDCAT tutor Rawalpindi',
    'MDCAT tutor Rawalpindi',
    'MDCAT preparation Rawalpindi',
    'MDCAT teacher Rawalpindi',
    'home tuition Rawalpindi',
    'PMC MDCAT tutor',
    'UHS MDCAT tutor',
    'MDCAT Biology tutor',
    'MDCAT Chemistry tutor',
    'MDCAT Physics tutor',
    'MDCAT English tutor',
    'medical college test preparation',
    'best MDCAT tutor in Rawalpindi',
    'female MDCAT tutor Rawalpindi',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Home MDCAT Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home MDCAT tutors in Rawalpindi for Biology, Chemistry, Physics & English. Expert preparation for PMC & UHS MDCAT exam. Male & female tutors available. Free demo class.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Home MDCAT Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home MDCAT tutors in Rawalpindi for Biology, Chemistry, Physics & English. Expert preparation for PMC & UHS MDCAT exam.',
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

export default function HomeMdcatTutorRawalpindiPage() {
  return (
    <SubjectLandingPage
      subject="MDCAT"
      city="Rawalpindi"
      slug="home-mdcat-tutor-rawalpindi"
      pageTitle="Best Home MDCAT Tutor in Rawalpindi | Medical College Test Preparation"
      pageDescription="Find qualified home MDCAT tutors in Rawalpindi for Biology, Chemistry, Physics & English. Expert preparation for PMC & UHS MDCAT exam. Male & female tutors. Free demo class."
      metaKeywords={[
        'home MDCAT tutor Rawalpindi',
        'MDCAT tutor Rawalpindi',
        'MDCAT preparation Rawalpindi',
        'MDCAT teacher Rawalpindi',
        'home tuition Rawalpindi',
        'PMC MDCAT tutor',
        'UHS MDCAT tutor',
        'MDCAT Biology tutor',
        'MDCAT Chemistry tutor',
        'MDCAT Physics tutor',
        'MDCAT English tutor',
        'medical college test preparation',
        'best MDCAT tutor in Rawalpindi',
        'female MDCAT tutor Rawalpindi',
      ]}
      subjectIcon="🩺"
      subjectEmoji="🏥"
      subjectOverview={[
        'MDCAT is the gateway to medical and dental colleges in Pakistan, and competition for seats is intense. Students in Rawalpindi face significant pressure to achieve high scores in this high-stakes exam. MDCAT tests knowledge across four subjects: Biology, Chemistry, Physics, and English, with 200 MCQs to be completed in 3.5 hours. A <a class="blog-link" href="/home-tutor-rawalpindi">home tutor in Rawalpindi</a> specialising in MDCAT can provide the focused preparation needed to achieve a competitive score.',
        'At <a class="blog-link" href="/">Avenfield Tutors</a>, we understand that MDCAT success requires a strategic approach. Our qualified MDCAT tutors in Rawalpindi help students master all four subjects, with special emphasis on high-weightage topics and time management. Whether you need help with <a class="blog-link" href="/tutors?subject=Biology&city=Rawalpindi">Biology</a>, <a class="blog-link" href="/tutors?subject=Chemistry&city=Rawalpindi">Chemistry</a>, <a class="blog-link" href="/tutors?subject=Physics&city=Rawalpindi">Physics</a>, or <a class="blog-link" href="/tutors?subject=English&city=Rawalpindi">English</a>, our tutors provide the support needed to excel.',
        'We offer <a class="blog-link" href="/home-tutor-rawalpindi">home tuition in Rawalpindi</a> as well as <a class="blog-link" href="/tutors">online tutoring</a> options, giving you the flexibility to choose the learning format that best suits your schedule. Our tutors use past papers, practice MCQs, and mock tests to help you build confidence and improve your performance. They are familiar with the latest <a class="blog-link" href="/tutors?subject=MDCAT&exam=PMC">PMC</a> and <a class="blog-link" href="/tutors?subject=MDCAT&exam=UHS">UHS</a> MDCAT patterns.',
        'Our MDCAT tutors in Rawalpindi are experienced educators who understand the challenges of medical entrance exams. They provide personalised guidance, helping you identify your weak areas and develop effective strategies for improvement. With consistent practice and expert guidance, achieving a competitive MDCAT score becomes achievable.',
      ]}
      subjectDetails={[
        'Our <strong class="text-[#2E4F5E]">home MDCAT tutors in Rawalpindi</strong> are qualified educators with experience in medical entrance exam preparation. They are familiar with the latest PMC and UHS guidelines and syllabus. Many of our tutors have a strong background in the sciences and understand the specific demands of the MDCAT exam.',
        'We offer comprehensive coverage of <strong class="text-[#2E4F5E]">all four MDCAT subjects</strong> — Biology (80 MCQs), Chemistry (60 MCQs), Physics (40 MCQs), and English (20 MCQs). Our tutors focus on high-weightage topics and provide targeted practice to help students improve their performance.',
        'Our tutors emphasise <strong class="text-[#2E4F5E]">time management</strong> and <strong class="text-[#2E4F5E]">test-taking strategies</strong>, which are crucial for the 200 MCQs in 3.5 hours. They provide regular mock tests under timed conditions, followed by detailed performance analysis to track progress and identify areas for improvement.',
        'We also provide <strong class="text-[#2E4F5E]">one-on-one doubt clearing</strong> sessions and <strong class="text-[#2E4F5E]">topic-wise revision</strong> to ensure that students are fully prepared for every section of the exam. Our tutors adapt their teaching methods to suit each student\'s learning style and pace.',
      ]}
      examBoards={['PMC MDCAT', 'UHS MDCAT', 'NUMS MDCAT']}
      targetExams={['Top 1%ile', 'Top 5%ile', 'Top 10%ile', 'Medical College Admission']}
      commonTopics={[
        'Human Physiology & Anatomy',
        'Organic Chemistry Reactions',
        'Mechanics & Electricity',
        'Genetics & Evolution',
        'Inorganic Chemistry',
        'Thermodynamics & Kinetics',
        'Cell Biology & Biochemistry',
        'Electromagnetism',
        'English Vocabulary & Grammar',
        'Logical Reasoning',
      ]}
      whyChoose={[
        'Our MDCAT tutors in Rawalpindi are <strong>experienced educators</strong> with a strong background in medical entrance exam preparation. They are familiar with the latest PMC and UHS guidelines and syllabus.',
        'We provide <strong>personalised study plans</strong> based on your current level and target score. Each session is tailored to address your specific weaknesses and build on your strengths, ensuring efficient preparation.',
        'Our tutors use <strong>authentic practice materials</strong> and past papers to give you the most realistic preparation possible. They also teach effective strategies for time management and test-taking.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit MDCAT preparation into your busy schedule. We also provide regular mock tests and detailed feedback to track your progress.',
      ]}
      faqs={[
        {
          q: 'How can I hire a home MDCAT tutor in Rawalpindi?',
          a: 'Hiring a home MDCAT tutor in Rawalpindi is simple. Contact <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">Avenfield Tutors on WhatsApp</a> with your target score and specific needs. We will match you with a qualified MDCAT tutor in your area. A free demo class allows you to assess the tutor before committing to regular sessions.',
        },
        {
          q: 'Do you provide female MDCAT tutors in Rawalpindi?',
          a: 'Yes, we provide both male and female MDCAT tutors in Rawalpindi. Parents can request a tutor based on their preference. All our tutors are verified, qualified, and experienced educators. We understand that some families prefer female tutors, and we respect and accommodate these preferences.',
        },
        {
          q: 'Which subjects are covered in the MDCAT exam?',
          a: 'The MDCAT consists of 200 MCQs across four subjects: Biology (80 MCQs), Chemistry (60 MCQs), Physics (40 MCQs), and English (20 MCQs). Our tutors provide comprehensive coverage of all subjects, with special emphasis on high-weightage topics and time management strategies.',
        },
        {
          q: 'What are the charges for a home MDCAT tutor in Rawalpindi?',
          a: 'Tuition charges for home MDCAT tutors in Rawalpindi vary based on the tutor\'s experience and the student\'s target score. Typically, rates range from PKR 2,500 to 5,000 per hour, though this can vary. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive pricing with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free demo class before hiring a tutor?',
          a: 'Yes, we offer a free demo class for all new students. This allows you to assess the tutor\'s teaching style and ensure they are the right fit for you before committing to regular sessions. The demo class is risk-free and gives you the opportunity to discuss your learning needs in detail.',
        },
        {
          q: 'Which areas of Rawalpindi do your home tutors cover?',
          a: 'Our home MDCAT tutors cover all major areas of Rawalpindi including Bahria Town, DHA, Saddar, Satellite Town, Chaklala, Westridge, Gulraiz, Askari, Adiala Road, Rawat, Sixth Road, Tenant Colony, Lalazar, Peshawar Road, Fazal Town, Sadiqabad, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
        },
      ]}
      areas={RAWALPINDI_AREAS}
      relatedSubjects={[
        { name: 'Home O Level Tutors', href: '/home-o-level-tutor-rawalpindi', icon: '📚' },
        { name: 'Home A Level Tutors', href: '/home-a-level-tutor-rawalpindi', icon: '🎯' },
        { name: 'Home Math Tutors', href: '/home-math-tutor-rawalpindi', icon: '📐' },
        { name: 'Home Physics Tutors', href: '/home-physics-tutor-rawalpindi', icon: '⚡' },
        { name: 'Home Chemistry Tutors', href: '/home-chemistry-tutor-rawalpindi', icon: '🧪' },
        { name: 'Home Biology Tutors', href: '/home-biology-tutor-rawalpindi', icon: '🧬' },
        { name: 'Home English Tutors', href: '/home-english-tutor-rawalpindi', icon: '📝' },
        { name: 'Home Tutor Rawalpindi', href: '/home-tutor-rawalpindi', icon: '🏠' },
        { name: 'Online Tutors', href: '/tutors', icon: '💻' },
        { name: 'Home IELTS Tutors', href: '/home-ielts-tutor-rawalpindi', icon: '🎓' },
        { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
        { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
      ]}
      nearbyCity="Islamabad"
      canonicalUrl={url}
    />
  )
}