import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/biology-tutor-islamabad`

export const metadata: Metadata = {
  title: 'Best Biology Tutor in Islamabad | O Level, A Level & FSc Biology',
  description:
    'Find verified Biology tutors in Islamabad for O Level, A Level, IGCSE, FSc & MDCAT Biology. Expert tuition for Cell Biology, Human Physiology, Genetics & more. Free consultation.',
  keywords: [
    'Biology tutor Islamabad',
    'Biology tuition Islamabad',
    'Biology teacher Islamabad',
    'best Biology tutor in Islamabad',
    'Biology home tutor Islamabad',
    'O Level Biology tutor',
    'A Level Biology tutor',
    'FSc Biology tutor',
    'MDCAT Biology tutor',
    'Cell Biology tutor',
    'Human Physiology tutor',
    'Genetics tutor',
    'IGCSE Biology tutor',
    'Biology teacher near me Islamabad',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Biology Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified Biology tutors in Islamabad for O Level, A Level, IGCSE, FSc & MDCAT Biology. Expert tuition for all topics. Free consultation available.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Biology Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified Biology tutors in Islamabad for O Level, A Level, IGCSE, FSc & MDCAT Biology. Expert tuition for all topics.',
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

export default function BiologyTutorIslamabadPage() {
  return (
    <SubjectLandingPage
      subject="Biology"
      city="Islamabad"
      slug="biology-tutor-islamabad"
      pageTitle="Best Biology Tutor in Islamabad | O Level, A Level & FSc Biology"
      pageDescription="Find verified Biology tutors in Islamabad for O Level, A Level, IGCSE, FSc & MDCAT Biology. Expert tuition for Cell Biology, Human Physiology, Genetics & more. Free consultation."
      metaKeywords={[
        'Biology tutor Islamabad',
        'Biology tuition Islamabad',
        'Biology teacher Islamabad',
        'best Biology tutor in Islamabad',
        'Biology home tutor Islamabad',
        'O Level Biology tutor',
        'A Level Biology tutor',
        'FSc Biology tutor',
        'MDCAT Biology tutor',
        'Cell Biology tutor',
        'Human Physiology tutor',
        'Genetics tutor',
        'IGCSE Biology tutor',
        'Biology teacher near me Islamabad',
      ]}
      subjectIcon="🧬"
      subjectEmoji="🔬"
      subjectOverview={[
        `The <a href="/tutors?subject=Biology&city=Islamabad" class="text-[#E05C42] hover:underline font-black">Biology tutor in Islamabad</a> market is thriving as students seek expert guidance in one of the most important and fascinating subjects. Biology forms the foundation for careers in medicine, healthcare, biotechnology, environmental science, and research. Our verified Biology tutors in Islamabad help students master everything from cell biology to human physiology with clarity and confidence.`,
        `Whether your child is preparing for <a href="/tutors?subject=O%20Level&city=Islamabad" class="text-[#E05C42] hover:underline font-black">O Level Biology</a>, <a href="/tutors?subject=A%20Level&city=Islamabad" class="text-[#E05C42] hover:underline font-black">A Level Biology</a>, <a href="/tutors?subject=MDCAT&city=Islamabad" class="text-[#E05C42] hover:underline font-black">MDCAT Biology</a>, or <a href="/tutors?subject=FSc&city=Islamabad" class="text-[#E05C42} hover:underline font-black">FSc Biology</a>, our experienced tutors provide personalised support tailored to the specific curriculum. They understand the unique challenges of each exam board and syllabus from Cambridge CAIE and Edexcel to local Pakistani boards and help students develop a deep understanding of biological concepts.`,
        `With a focus on building conceptual understanding and exam technique, our <a href="/home-tutor-islamabad" class="text-[#E05C42} hover:underline font-black">home tutors in Islamabad</a> provide the undivided attention that Biology requires. This personalised approach is particularly effective for students who need help with complex topics like genetics, evolution, human anatomy, and biochemical pathways.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">Biology tutors in Islamabad</strong> are subject matter experts with advanced degrees in biological sciences. They have extensive experience teaching Biology across multiple curricula <strong class="text-[#2E4F5E]">O Level</strong>, <strong class="text-[#2E4F5E]">A Level</strong>, <strong class="text-[#2E4F5E]">IGCSE</strong>, <strong class="text-[#2E4F5E]">FSc</strong>, and <strong class="text-[#2E4F5E]">MDCAT</strong> preparation. Their deep understanding of the subject enables them to explain complex biological processes in simple, relatable terms.`,
        `We cover <strong class="text-[#2E4F5E]">all major Biology topics</strong> including cell biology, genetics, human physiology, ecology, evolution, biochemistry, microbiology, and biotechnology. Our tutors use diagrams, models, animations, and real-world examples to make learning engaging and effective.`,
        `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">exam technique</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. For MDCAT students, special emphasis is placed on the high-weightage Biology topics that appear most frequently on the exam.`,
        `We understand that Biology is a visual and analytical subject. That's why our tutors use <strong class="text-[#2E4F5E]">interactive teaching methods</strong> including diagrams, flowcharts, and practical examples to help students visualise biological processes and retain information more effectively.`,
      ]}
      examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA', 'FSc (Local Boards)', 'MDCAT']}
      targetExams={['O Level', 'A Level', 'IGCSE', 'FSc', 'MDCAT']}
      commonTopics={[
        'Cell Biology & Biochemistry',
        'Human Physiology & Anatomy',
        'Genetics & Evolution',
        'Ecology & Environment',
        'Plant Biology',
        'Microbiology & Immunology',
        'Biotechnology',
        'Molecular Biology',
        'Enzymes & Metabolism',
        'Homeostasis & Excretion',
      ]}
      whyChoose={[
        'Our Biology tutors in Islamabad are <strong>subject matter experts</strong> with advanced degrees in biological sciences and proven track records of helping students achieve top grades.',
        'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals, ensuring efficient and effective learning of complex biological concepts.',
        'Our tutors use <strong>visual and interactive teaching methods</strong> including diagrams, models, animations, and real-world examples to make Biology engaging and easy to understand.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Biology tutoring into your family\'s busy schedule.',
      ]}
      faqs={[
        {
          q: 'What qualifications do your Biology tutors in Islamabad have?',
          a: 'All our Biology tutors hold at least a bachelor\'s or master\'s degree in Biological Sciences, with many holding PhDs. They have extensive experience teaching Biology across multiple curricula including O Level, A Level, IGCSE, FSc, and MDCAT preparation. Many tutors are also certified teachers or examiners with deep understanding of assessment criteria.',
        },
        {
          q: 'Which Biology curricula do you offer tuition for?',
          a: 'We offer tuition for all major Biology curricula including CAIE (Cambridge International) O Level and A Level, Edexcel, Oxford AQA, IGCSE, FSc (local Pakistani boards), and MDCAT preparation. Our tutors are familiar with the specific requirements of each curriculum and exam board. If you need a specific syllabus not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">contact us on WhatsApp</a> and we\'ll find a tutor for you.',
        },
        {
          q: 'How much do Biology tutors in Islamabad charge?',
          a: 'Biology tutor rates in Islamabad vary based on the curriculum, the tutor\'s experience, and the student\'s level. Typically, rates range from PKR 2,000 to 4,500 per hour for home tuition. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive rates with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free trial session with a Biology tutor?',
          a: 'Yes! We offer a free initial consultation and trial session. This allows you to assess the tutor\'s teaching style and ensure they\'re the right fit for your child before committing to regular sessions. It\'s a risk-free way to experience the quality of our tutoring services.',
        },
        {
          q: 'Do you offer online Biology tutoring as well?',
          a: 'Yes! While we specialise in <a href="/home-tutor-islamabad" class="text-[#E05C42] hover:underline font-black">home tuition in Islamabad</a>, we also offer <a href="/tutors?subject=Biology" class="text-[#E05C42] hover:underline font-black">online Biology tutoring</a> for students who prefer the flexibility of learning from home. Our online sessions are conducted via video call with interactive whiteboards and screen sharing, making them just as effective as in-person sessions.',
        },
        {
          q: 'Which areas of Islamabad do your home tutors cover?',
          a: 'Our Biology home tutors cover all major areas of Islamabad including F-5 to F-17, G-5 to G-16, E-7 to E-17, D-12, I-8 to I-14, B-10 to B-17, C-12 to C-17, H-8 to H-13, DHA Islamabad (all phases), Bahria Enclave, Gulberg Greens, Park View City, Capital Smart City, and many more. If you don\'t see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we\'ll confirm availability.',
        },
      ]}
      areas={ISLAMABAD_AREAS}
      relatedSubjects={[
        { name: 'O Level Tutors', href: '/o-level-tutor-islamabad', icon: '📚' },
        { name: 'A Level Tutors', href: '/a-level-tutor-islamabad', icon: '🎯' },
        { name: 'IELTS Tutors', href: '/ielts-tutor-islamabad', icon: '🎓' },
        { name: 'MDCAT Tutors', href: '/mdcat-tutor-islamabad', icon: '🩺' },
        { name: 'Chemistry Tutors', href: '/chemistry-tutor-islamabad', icon: '🧪' },
        { name: 'Physics Tutors', href: '/physics-tutor-islamabad', icon: '⚡' },
        { name: 'Mathematics Tutors', href: '/math-tutor-islamabad', icon: '📐' },
        { name: 'English Tutors', href: '/tutors?subject=English&city=Islamabad', icon: '📝' },
      ]}
      nearbyCity="Rawalpindi"
      canonicalUrl={url}
    />
  )
}