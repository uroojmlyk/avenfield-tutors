import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/physics-tutor-islamabad`

export const metadata: Metadata = {
  title: 'Best Physics Tutor in Islamabad | O Level, A Level & FSc Physics',
  description:
    'Find verified Physics tutors in Islamabad for O Level, A Level, IGCSE, FSc & MDCAT Physics. Expert tuition for Mechanics, Electricity, Magnetism & more. Free consultation.',
  keywords: [
    'Physics tutor Islamabad',
    'Physics tuition Islamabad',
    'Physics teacher Islamabad',
    'best Physics tutor in Islamabad',
    'Physics home tutor Islamabad',
    'O Level Physics tutor',
    'A Level Physics tutor',
    'FSc Physics tutor',
    'MDCAT Physics tutor',
    'Mechanics tutor',
    'Electricity & Magnetism tutor',
    'Waves & Optics tutor',
    'IGCSE Physics tutor',
    'Physics teacher near me Islamabad',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Physics Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified Physics tutors in Islamabad for O Level, A Level, IGCSE, FSc & MDCAT Physics. Expert tuition for all topics. Free consultation available.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Physics Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified Physics tutors in Islamabad for O Level, A Level, IGCSE, FSc & MDCAT Physics. Expert tuition for all topics.',
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

export default function PhysicsTutorIslamabadPage() {
  return (
    <SubjectLandingPage
      subject="Physics"
      city="Islamabad"
      slug="physics-tutor-islamabad"
      pageTitle="Best Physics Tutor in Islamabad | O Level, A Level & FSc Physics"
      pageDescription="Find verified Physics tutors in Islamabad for O Level, A Level, IGCSE, FSc & MDCAT Physics. Expert tuition for Mechanics, Electricity, Magnetism & more. Free consultation."
      metaKeywords={[
        'Physics tutor Islamabad',
        'Physics tuition Islamabad',
        'Physics teacher Islamabad',
        'best Physics tutor in Islamabad',
        'Physics home tutor Islamabad',
        'O Level Physics tutor',
        'A Level Physics tutor',
        'FSc Physics tutor',
        'MDCAT Physics tutor',
        'Mechanics tutor',
        'Electricity & Magnetism tutor',
        'Waves & Optics tutor',
        'IGCSE Physics tutor',
        'Physics teacher near me Islamabad',
      ]}
      subjectIcon="⚡"
      subjectEmoji="🔭"
      subjectOverview={[
        `The <a href="/tutors?subject=Physics&city=Islamabad" class="text-[#E05C42] hover:underline font-black">Physics tutor in Islamabad</a> market is thriving as students seek expert guidance in one of the most fundamental and challenging sciences. Physics forms the foundation for careers in engineering, technology, medicine, research, and space sciences. Our verified Physics tutors in Islamabad help students master everything from mechanics to quantum physics with clarity and confidence.`,
        `Whether your child is preparing for <a href="/tutors?subject=O%20Level&city=Islamabad" class="text-[#E05C42] hover:underline font-black">O Level Physics</a>, <a href="/tutors?subject=A%20Level&city=Islamabad" class="text-[#E05C42] hover:underline font-black">A Level Physics</a>, <a href="/tutors?subject=MDCAT&city=Islamabad" class="text-[#E05C42} hover:underline font-black">MDCAT Physics</a>, or <a href="/tutors?subject=FSc&city=Islamabad" class="text-[#E05C42} hover:underline font-black">FSc Physics</a>, our experienced tutors provide personalised support tailored to the specific curriculum. They understand the unique challenges of each exam board and syllabus from Cambridge CAIE and Edexcel to local Pakistani boards and help students develop a deep understanding of physical principles.`,
        `With a focus on building conceptual understanding and exam technique, our <a href="/home-tutor-islamabad" class="text-[#E05C42} hover:underline font-black">home tutors in Islamabad</a> provide the undivided attention that Physics requires. This personalised approach is particularly effective for students who need help with complex topics like kinematics, dynamics, electromagnetism, and wave behaviour.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">Physics tutors in Islamabad</strong> are subject matter experts with advanced degrees in physics or engineering. They have extensive experience teaching Physics across multiple curricula — <strong class="text-[#2E4F5E]">O Level</strong>, <strong class="text-[#2E4F5E]">A Level</strong>, <strong class="text-[#2E4F5E]">IGCSE</strong>, <strong class="text-[#2E4F5E]">FSc</strong>, and <strong class="text-[#2E4F5E]">MDCAT</strong> preparation. Their deep understanding of the subject enables them to explain complex physical concepts in simple, relatable terms.`,
        `We cover <strong class="text-[#2E4F5E]">all major Physics topics</strong> including mechanics, electricity and magnetism, waves and optics, thermodynamics, nuclear physics, and quantum physics. Our tutors use practical experiments, demonstrations, and real-world applications to make learning engaging and effective.`,
        `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">problem-solving skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. For MDCAT students, special emphasis is placed on the high-weightage Physics topics that appear most frequently on the exam.`,
        `We understand that Physics requires strong mathematical skills and logical reasoning. That's why our tutors use <strong class="text-[#2E4F5E]">interactive teaching methods</strong> including practical demonstrations, visual models, and step-by-step problem-solving to help students master both concepts and calculations.`,
      ]}
      examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA', 'FSc (Local Boards)', 'MDCAT']}
      targetExams={['O Level', 'A Level', 'IGCSE', 'FSc', 'MDCAT']}
      commonTopics={[
        'Mechanics & Dynamics',
        'Electricity & Magnetism',
        'Waves & Optics',
        'Thermodynamics & Heat',
        'Nuclear Physics & Radioactivity',
        'Quantum Physics',
        'Kinematics & Motion',
        'Forces & Energy',
        'Circuits & Electronics',
        'Gravitation & Astrophysics',
      ]}
      whyChoose={[
        'Our Physics tutors in Islamabad are <strong>subject matter experts</strong> with advanced degrees in physics or engineering and proven track records of helping students achieve top grades.',
        'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals, ensuring efficient and effective learning of complex physical concepts.',
        'Our tutors use <strong>interactive teaching methods</strong> including practical experiments, demonstrations, and visual models to make Physics engaging and easy to understand.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Physics tutoring into your family\'s busy schedule.',
      ]}
      faqs={[
        {
          q: 'What qualifications do your Physics tutors in Islamabad have?',
          a: 'All our Physics tutors hold at least a bachelor\'s or master\'s degree in Physics or Engineering, with many holding PhDs. They have extensive experience teaching Physics across multiple curricula including O Level, A Level, IGCSE, FSc, and MDCAT preparation. Many tutors are also certified teachers or examiners with deep understanding of assessment criteria.',
        },
        {
          q: 'Which Physics curricula do you offer tuition for?',
          a: 'We offer tuition for all major Physics curricula including CAIE (Cambridge International) O Level and A Level, Edexcel, Oxford AQA, IGCSE, FSc (local Pakistani boards), and MDCAT preparation. Our tutors are familiar with the specific requirements of each curriculum and exam board. If you need a specific syllabus not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">contact us on WhatsApp</a> and we\'ll find a tutor for you.',
        },
        {
          q: 'How much do Physics tutors in Islamabad charge?',
          a: 'Physics tutor rates in Islamabad vary based on the curriculum, the tutor\'s experience, and the student\'s level. Typically, rates range from PKR 2,000 to 4,500 per hour for home tuition. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive rates with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free trial session with a Physics tutor?',
          a: 'Yes! We offer a free initial consultation and trial session. This allows you to assess the tutor\'s teaching style and ensure they\'re the right fit for your child before committing to regular sessions. It\'s a risk-free way to experience the quality of our tutoring services.',
        },
        {
          q: 'Do you offer online Physics tutoring as well?',
          a: 'Yes! While we specialise in <a href="/home-tutor-islamabad" class="text-[#E05C42] hover:underline font-black">home tuition in Islamabad</a>, we also offer <a href="/tutors?subject=Physics" class="text-[#E05C42] hover:underline font-black">online Physics tutoring</a> for students who prefer the flexibility of learning from home. Our online sessions are conducted via video call with interactive whiteboards and screen sharing, making them just as effective as in-person sessions.',
        },
        {
          q: 'Which areas of Islamabad do your home tutors cover?',
          a: 'Our Physics home tutors cover all major areas of Islamabad including F-5 to F-17, G-5 to G-16, E-7 to E-17, D-12, I-8 to I-14, B-10 to B-17, C-12 to C-17, H-8 to H-13, DHA Islamabad (all phases), Bahria Enclave, Gulberg Greens, Park View City, Capital Smart City, and many more. If you don\'t see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we\'ll confirm availability.',
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
        { name: 'Mathematics Tutors', href: '/math-tutor-islamabad', icon: '📐' },
        { name: 'English Tutors', href: '/tutors?subject=English&city=Islamabad', icon: '📝' },
      ]}
      nearbyCity="Rawalpindi"
      canonicalUrl={url}
    />
  )
}