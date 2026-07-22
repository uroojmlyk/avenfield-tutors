




import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/mdcat-tutor-islamabad`

export const metadata: Metadata = {
  title: 'Best MDCAT Tutor in Islamabad | Medical College Test Preparation',
  description:
    'Find verified MDCAT tutors in Islamabad for Biology, Chemistry, Physics & English. Expert preparation for PMC & UHS MDCAT exam. Free consultation.',
  keywords: [
    'MDCAT tutor Islamabad',
    'MDCAT preparation Islamabad',
    'MDCAT teacher Islamabad',
    'best MDCAT tutor in Islamabad',
    'MDCAT home tutor Islamabad',
    'PMC MDCAT tutor',
    'UHS MDCAT tutor',
    'MDCAT Biology tutor',
    'MDCAT Chemistry tutor',
    'MDCAT Physics tutor',
    'MDCAT English tutor',
    'medical college test preparation Islamabad',
    'entry test tutor Islamabad',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best MDCAT Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified MDCAT tutors in Islamabad for Biology, Chemistry, Physics & English. Expert preparation for PMC & UHS MDCAT exam. Free consultation available.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best MDCAT Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified MDCAT tutors in Islamabad for Biology, Chemistry, Physics & English. Expert preparation for PMC & UHS MDCAT exam.',
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

export default function MdcatTutorIslamabadPage() {
  return (
    <SubjectLandingPage
      subject="MDCAT"
      city="Islamabad"
      slug="mdcat-tutor-islamabad"
      pageTitle="Best MDCAT Tutor in Islamabad | Medical College Test Preparation"
      pageDescription="Find verified MDCAT tutors in Islamabad for Biology, Chemistry, Physics & English. Expert preparation for PMC & UHS MDCAT exam. Free consultation."
      metaKeywords={[
        'MDCAT tutor Islamabad',
        'MDCAT preparation Islamabad',
        'MDCAT teacher Islamabad',
        'best MDCAT tutor in Islamabad',
        'MDCAT home tutor Islamabad',
        'PMC MDCAT tutor',
        'UHS MDCAT tutor',
        'MDCAT Biology tutor',
        'MDCAT Chemistry tutor',
        'MDCAT Physics tutor',
        'MDCAT English tutor',
        'medical college test preparation Islamabad',
        'entry test tutor Islamabad',
      ]}
      subjectIcon="🩺"
      subjectEmoji="🏥"
      subjectOverview={[
        `The <a href="/tutors?subject=MDCAT&city=Islamabad" class="text-[#E05C42] hover:underline font-black">MDCAT tutor in Islamabad</a> market is highly competitive, with thousands of students vying for limited seats in medical and dental colleges across Pakistan. MDCAT (Medical & Dental College Admission Test) is the gateway to a medical career, and a high score is essential for admission to top institutions. Our verified MDCAT tutors in Islamabad provide expert guidance across all four subjects: <strong>Biology</strong>, <strong>Chemistry</strong>, <strong>Physics</strong>, and <strong>English</strong>.`,
        `Whether you need to master <a href="/tutors?subject=Biology&city=Islamabad" class="text-[#E05C42] hover:underline font-black">MDCAT Biology</a>, <a href="/tutors?subject=Chemistry&city=Islamabad" class="text-[#E05C42] hover:underline font-black">Chemistry</a>, <a href="/tutors?subject=Physics&city=Islamabad" class="text-[#E05C42] hover:underline font-black">Physics</a>, or <a href="/tutors?subject=English&city=Islamabad" class="text-[#E05C42] hover:underline font-black">English</a>, our experienced tutors provide targeted practice and comprehensive coverage of the entire syllabus. They are familiar with the latest <a href="/tutors?subject=MDCAT&exam=PMC" class="text-[#E05C42] hover:underline font-black">PMC</a> and <a href="/tutors?subject=MDCAT&exam=UHS" class="text-[#E05C42] hover:underline font-black">UHS</a> MDCAT patterns and provide strategies to help students achieve top percentiles.`,
        `With a focus on building conceptual understanding and exam technique, our <a href="/home-tutor-islamabad" class="text-[#E05C42] hover:underline font-black">home tutors in Islamabad</a> provide the undivided attention that MDCAT preparation demands. This personalised approach helps students identify their weaknesses, master difficult topics, and build the confidence needed to succeed in this high-stakes exam.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">MDCAT tutors in Islamabad</strong> are subject matter experts with advanced degrees in their fields. Many have themselves excelled in the MDCAT and have extensive experience teaching medical entrance test preparation. They are up-to-date with the latest PMC and UHS guidelines and syllabus.`,
        `We offer comprehensive coverage of <strong class="text-[#2E4F5E]">all four MDCAT subjects</strong> — Biology, Chemistry, Physics, and English — with special emphasis on the high-weightage topics. Our tutors use a combination of concept-building, practice MCQs, and past paper analysis to ensure thorough preparation.`,
        `Special attention is given to <strong class="text-[#2E4F5E]">time management</strong> and <strong class="text-[#2E4F5E]">test-taking strategies</strong>, which are crucial for the 200 MCQs in 3.5 hours. Our tutors also provide regular mock tests under timed conditions, followed by detailed performance analysis to track progress and identify areas for improvement.`,
        `We also provide <strong class="text-[#2E4F5E]">one-on-one doubt clearing</strong> sessions and <strong class="text-[#2E4F5E]">topic-wise revision</strong> to ensure that students are fully prepared for every section of the exam. Our tutors adapt their teaching methods to suit each student's learning style and pace.`,
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
        'Our MDCAT tutors in Islamabad are <strong>subject matter experts</strong> with proven track records of helping students achieve top percentiles in the MDCAT. Many have also successfully coached students for entry into prestigious medical colleges.',
        'We provide <strong>personalised study plans</strong> based on your current level and target score. Each session is tailored to address your specific weaknesses and build on your strengths, ensuring efficient preparation.',
        'Our tutors are <strong>up-to-date with the latest MDCAT syllabus and exam patterns</strong> from PMC and UHS. They use authentic practice materials and past papers to give you the most realistic preparation possible.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit MDCAT preparation into your busy schedule. We also provide regular mock tests and detailed feedback to track your progress.',
      ]}
      faqs={[
        {
          q: 'What is the MDCAT and why is it important?',
          a: 'MDCAT (Medical & Dental College Admission Test) is a national entrance exam required for admission to all public and private medical and dental colleges in Pakistan. A high MDCAT score is essential for securing a seat in your desired medical college. Our tutors provide expert preparation to help you achieve a competitive score.',
        },
        {
          q: 'Which subjects are covered in the MDCAT?',
          a: 'The MDCAT consists of 200 MCQs across four subjects: Biology (80 MCQs), Chemistry (60 MCQs), Physics (40 MCQs), and English (20 MCQs). Our tutors provide comprehensive coverage of all subjects, with special emphasis on high-weightage topics and time management strategies.',
        },
        {
          q: 'How much do MDCAT tutors in Islamabad charge?',
          a: 'MDCAT tutor rates in Islamabad vary based on the tutor\'s experience and the student\'s target score. Typically, rates range from PKR 2,500 to 5,000 per hour for home tuition. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive rates with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free trial session with an MDCAT tutor?',
          a: 'Yes! We offer a free initial consultation and trial session. This allows you to assess the tutor\'s teaching style and ensure they\'re the right fit for you before committing to regular sessions. It\'s a risk-free way to experience the quality of our tutoring services.',
        },
        {
          q: 'Do you offer online MDCAT tutoring as well?',
          a: 'Yes! While we specialise in <a href="/home-tutor-islamabad" class="text-[#E05C42] hover:underline font-black">home tuition in Islamabad</a>, we also offer <a href="/tutors?subject=MDCAT" class="text-[#E05C42] hover:underline font-black">online MDCAT tutoring</a> for students who prefer the flexibility of learning from home. Our online sessions are conducted via video call with interactive whiteboards and screen sharing, making them just as effective as in-person sessions.',
        },
        {
          q: 'Which areas of Islamabad do your home tutors cover?',
          a: 'Our MDCAT home tutors cover all major areas of Islamabad including F-5 to F-17, G-5 to G-16, E-7 to E-17, D-12, I-8 to I-14, B-10 to B-17, C-12 to C-17, H-8 to H-13, DHA Islamabad (all phases), Bahria Enclave, Gulberg Greens, Park View City, Capital Smart City, and many more. If you don\'t see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we\'ll confirm availability.',
        },
      ]}
      areas={ISLAMABAD_AREAS}
      relatedSubjects={[
        { name: 'O Level Tutors', href: '/o-level-tutor-islamabad', icon: '📚' },
        { name: 'A Level Tutors', href: '/a-level-tutor-islamabad', icon: '🎯' },
        { name: 'IELTS Tutors', href: '/ielts-tutor-islamabad', icon: '🎓' },
        { name: 'Biology Tutors', href: '/tutors?subject=Biology&city=Islamabad', icon: '🧬' },
        { name: 'Chemistry Tutors', href: '/tutors?subject=Chemistry&city=Islamabad', icon: '🧪' },
        { name: 'Physics Tutors', href: '/tutors?subject=Physics&city=Islamabad', icon: '⚡' },
        { name: 'English Tutors', href: '/tutors?subject=English&city=Islamabad', icon: '📝' },
        { name: 'CSS / PMS Tutors', href: '/tutors?subject=CSS%20%2F%20PMS&city=Islamabad', icon: '🏛️' },
      ]}
      nearbyCity="Rawalpindi"
      canonicalUrl={url}
    />
  )
}