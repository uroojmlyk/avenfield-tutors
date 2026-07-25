import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/urdu-tutor-islamabad`

export const metadata: Metadata = {
  title: 'Best Urdu Tutor in Islamabad | O Level, A Level & FSc Urdu',
  description:
    'Find verified Urdu tutors in Islamabad for O Level, A Level, IGCSE, FSc & University Urdu. Expert tuition for Grammar, Literature, Essay Writing & Poetry. Free consultation.',
  keywords: [
    'Urdu tutor Islamabad',
    'Urdu tuition Islamabad',
    'Urdu teacher Islamabad',
    'best Urdu tutor in Islamabad',
    'Urdu home tutor Islamabad',
    'O Level Urdu tutor',
    'A Level Urdu tutor',
    'Urdu Literature tutor',
    'Urdu Grammar tutor',
    'Urdu Essay Writing tutor',
    'IGCSE Urdu tutor',
    'Urdu Poetry tutor',
    'Urdu teacher near me Islamabad',
    'FSc Urdu tutor',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Urdu Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified Urdu tutors in Islamabad for O Level, A Level, IGCSE, FSc & University Urdu. Expert tuition for all topics. Free consultation available.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Urdu Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified Urdu tutors in Islamabad for O Level, A Level, IGCSE, FSc & University Urdu. Expert tuition for all topics.',
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

export default function UrduTutorIslamabadPage() {
  return (
    <SubjectLandingPage
      subject="Urdu"
      city="Islamabad"
      slug="urdu-tutor-islamabad"
      pageTitle="Best Urdu Tutor in Islamabad | O Level, A Level & FSc Urdu"
      pageDescription="Find verified Urdu tutors in Islamabad for O Level, A Level, IGCSE, FSc & University Urdu. Expert tuition for Grammar, Literature, Essay Writing & Poetry. Free consultation."
      metaKeywords={[
        'Urdu tutor Islamabad',
        'Urdu tuition Islamabad',
        'Urdu teacher Islamabad',
        'best Urdu tutor in Islamabad',
        'Urdu home tutor Islamabad',
        'O Level Urdu tutor',
        'A Level Urdu tutor',
        'Urdu Literature tutor',
        'Urdu Grammar tutor',
        'Urdu Essay Writing tutor',
        'IGCSE Urdu tutor',
        'Urdu Poetry tutor',
        'Urdu teacher near me Islamabad',
        'FSc Urdu tutor',
      ]}
      subjectIcon="🖋️"
      subjectEmoji="📜"
      subjectOverview={[
        `The <a href="/tutors?subject=Urdu&city=Islamabad" class="text-[#E05C42] hover:underline font-black">Urdu tutor in Islamabad</a> market is active as students seek expert guidance in Pakistan's national language. Urdu is essential for academic success, cultural identity, and professional communication in Pakistan. Our verified Urdu tutors in Islamabad help students master everything from grammar and composition to literature and poetry with clarity and confidence.`,
        `Whether your child is preparing for <a href="/tutors?subject=O%20Level&city=Islamabad" class="text-[#E05C42] hover:underline font-black">O Level Urdu</a>, <a href="/tutors?subject=A%20Level&city=Islamabad" class="text-[#E05C42] hover:underline font-black">A Level Urdu</a>, <a href="/tutors?subject=IGCSE&city=Islamabad" class="text-[#E05C42} hover:underline font-black">IGCSE Urdu</a>, or <a href="/tutors?subject=FSc&city=Islamabad" class="text-[#E05C42} hover:underline font-black">FSc Urdu</a>, our experienced tutors provide personalised support tailored to the specific curriculum. They understand the unique challenges of each exam board and syllabus — from Cambridge CAIE and Edexcel to local Pakistani boards — and help students develop strong language and analytical skills.`,
        `With a focus on building conceptual understanding and exam technique, our <a href="/home-tutor-islamabad" class="text-[#E05C42} hover:underline font-black">home tutors in Islamabad</a> provide the undivided attention that Urdu requires. This personalised approach is particularly effective for students who need help with complex topics like essay writing, poetry analysis, grammar, and comprehension.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">Urdu tutors in Islamabad</strong> are subject matter experts with advanced degrees in Urdu Literature, Linguistics, or related fields. They have extensive experience teaching Urdu across multiple curricula — <strong class="text-[#2E4F5E]">O Level</strong>, <strong class="text-[#2E4F5E]">A Level</strong>, <strong class="text-[#2E4F5E]">IGCSE</strong>, <strong class="text-[#2E4F5E]">FSc</strong>, and <strong class="text-[#2E4F5E]">University</strong> level courses. Their deep understanding of the subject enables them to explain complex concepts in simple, relatable terms.`,
        `We cover <strong class="text-[#2E4F5E]">all major Urdu topics</strong> including grammar, essay writing, comprehension, literature analysis, poetry, drama, and prose. Our tutors use practical exercises, real-world examples, and interactive discussions to make learning engaging and effective.`,
        `Our tutors focus on <strong class="text-[#2E4F5E]">building strong language foundations</strong> and developing <strong class="text-[#2E4F5E]">critical thinking skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. Special emphasis is placed on developing strong essay writing and literary analysis skills.`,
        `We understand that Urdu is a skill-based subject that requires practice and feedback. That's why our tutors use <strong class="text-[#2E4F5E]">interactive teaching methods</strong> — including essay writing practice, poetry analysis, and detailed feedback on written work — to help students develop both accuracy and fluency.`,
      ]}
      examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA', 'FSc (Local Boards)']}
      targetExams={['O Level', 'A Level', 'IGCSE', 'FSc', 'University Exams']}
      commonTopics={[
        'Urdu Grammar & Composition',
        'Essay Writing & Applications',
        'Urdu Literature & Prose',
        'Poetry & Ghazal Analysis',
        'Comprehension & Summary',
        'Translation Skills',
        'Creative Writing',
        'Urdu Linguistics',
        'Drama & Play Analysis',
        'Vocabulary Development',
      ]}
      whyChoose={[
        'Our Urdu tutors in Islamabad are <strong>subject matter experts</strong> with advanced degrees in Urdu Literature, Linguistics, or related fields and proven track records of helping students achieve top grades.',
        'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals, ensuring efficient and effective learning of complex Urdu concepts.',
        'Our tutors use <strong>interactive teaching methods</strong> — including essay writing practice, poetry analysis, and detailed feedback — to make Urdu engaging and practical.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Urdu tutoring into your family\'s busy schedule.',
      ]}
      faqs={[
        {
          q: 'What qualifications do your Urdu tutors in Islamabad have?',
          a: 'All our Urdu tutors hold at least a bachelor\'s or master\'s degree in Urdu Literature, Linguistics, or related fields, with many holding PhDs. They have extensive experience teaching Urdu across multiple curricula including O Level, A Level, IGCSE, FSc, and University courses. Many tutors are also certified teachers or examiners with deep understanding of assessment criteria.',
        },
        {
          q: 'Which Urdu curricula do you offer tuition for?',
          a: 'We offer tuition for all major Urdu curricula including CAIE (Cambridge International) O Level and A Level, Edexcel, Oxford AQA, IGCSE, FSc (local Pakistani boards), and University-level courses. Our tutors are familiar with the specific requirements of each curriculum and exam board. If you need a specific syllabus not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">contact us on WhatsApp</a> and we\'ll find a tutor for you.',
        },
        {
          q: 'Do you offer Urdu tuition for O Level and A Level students?',
          a: 'Yes! We offer comprehensive Urdu tuition for O Level and A Level students following the Cambridge syllabus. Our tutors are familiar with the specific past paper patterns, mark schemes, and examiner expectations for both CAIE and Edexcel boards. They provide targeted practice and feedback to help students achieve top grades.',
        },
        {
          q: 'How much do Urdu tutors in Islamabad charge?',
          a: 'Urdu tutor rates in Islamabad vary based on the curriculum, the tutor\'s experience, and the student\'s level. Typically, rates range from PKR 2,000 to 4,500 per hour for home tuition. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive rates with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free trial session with an Urdu tutor?',
          a: 'Yes! We offer a free initial consultation and trial session. This allows you to assess the tutor\'s teaching style and ensure they\'re the right fit for your child before committing to regular sessions. It\'s a risk-free way to experience the quality of our tutoring services.',
        },
        {
          q: 'Which areas of Islamabad do your home tutors cover?',
          a: 'Our Urdu home tutors cover all major areas of Islamabad including F-5 to F-17, G-5 to G-16, E-7 to E-17, D-12, I-8 to I-14, B-10 to B-17, C-12 to C-17, H-8 to H-13, DHA Islamabad (all phases), Bahria Enclave, Gulberg Greens, Park View City, Capital Smart City, and many more. If you don\'t see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we\'ll confirm availability.',
        },
      ]}
      areas={ISLAMABAD_AREAS}
    //   relatedSubjects={[
    //     { name: 'O Level Tutors', href: '/o-level-tutor-islamabad', icon: '📚' },
    //     { name: 'A Level Tutors', href: '/a-level-tutor-islamabad', icon: '🎯' },
    //     { name: 'IELTS Tutors', href: '/ielts-tutor-islamabad', icon: '🎓' },
    //     { name: 'MDCAT Tutors', href: '/mdcat-tutor-islamabad', icon: '🩺' },
    //     { name: 'English Tutors', href: '/english-tutor-islamabad', icon: '📝' },
    //     { name: 'Quran Tutors', href: '/quran-tutor-islamabad', icon: '🕌' },
    //     { name: 'Computer Science Tutors', href: '/computer-science-tutor-islamabad', icon: '💻' },
    //     { name: 'Mathematics Tutors', href: '/math-tutor-islamabad', icon: '📐' },
    //   ]}
relatedSubjects={[
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
  { name: 'Economics Tutors', href: '/tutors?subject=Economics&city=Islamabad', icon: '📊' },
]}
      nearbyCity="Rawalpindi"
      canonicalUrl={url}
    />
  )
}