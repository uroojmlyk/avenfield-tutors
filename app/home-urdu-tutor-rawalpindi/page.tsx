import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/home-urdu-tutor-rawalpindi`

export const metadata: Metadata = {
  title: 'Best Home Urdu Tutor in Rawalpindi | O Level, A Level, Matric & FSc Urdu',
  description:
    'Find qualified home Urdu tutors in Rawalpindi for O Level, A Level, Matric, FSc & University Urdu. Learn Urdu Grammar, Literature, Essay Writing & Poetry. Male & female tutors available. Free demo class.',
  keywords: [
    'home Urdu tutor Rawalpindi',
    'Urdu tutor Rawalpindi',
    'Urdu teacher Rawalpindi',
    'home tuition Rawalpindi',
    'O Level Urdu tutor Rawalpindi',
    'A Level Urdu tutor Rawalpindi',
    'FSc Urdu tutor Rawalpindi',
    'matric Urdu tutor Rawalpindi',
    'Urdu Literature tutor',
    'Urdu Grammar tutor',
    'Urdu Essay Writing tutor',
    'best Urdu tutor in Rawalpindi',
    'female Urdu tutor Rawalpindi',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Home Urdu Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home Urdu tutors in Rawalpindi for O Level, A Level, Matric, FSc & University. Male & female tutors available. Free demo class.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Home Urdu Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home Urdu tutors in Rawalpindi for O Level, A Level, Matric, FSc & University.',
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

export default function HomeUrduTutorRawalpindiPage() {
  return (
    <SubjectLandingPage
      subject="Urdu"
      city="Rawalpindi"
      slug="home-urdu-tutor-rawalpindi"
      pageTitle="Best Home Urdu Tutor in Rawalpindi | O Level, A Level, Matric & FSc Urdu"
      pageDescription="Find qualified home Urdu tutors in Rawalpindi for O Level, A Level, Matric, FSc & University Urdu. Learn Urdu Grammar, Literature, Essay Writing & Poetry. Male & female tutors available. Free demo class."
      metaKeywords={[
        'home Urdu tutor Rawalpindi',
        'Urdu tutor Rawalpindi',
        'Urdu teacher Rawalpindi',
        'home tuition Rawalpindi',
        'O Level Urdu tutor Rawalpindi',
        'A Level Urdu tutor Rawalpindi',
        'FSc Urdu tutor Rawalpindi',
        'matric Urdu tutor Rawalpindi',
        'Urdu Literature tutor',
        'Urdu Grammar tutor',
        'Urdu Essay Writing tutor',
        'best Urdu tutor in Rawalpindi',
        'female Urdu tutor Rawalpindi',
      ]}
      subjectIcon="🖋️"
      subjectEmoji="📜"
      subjectOverview={[
        `Urdu is Pakistan's national language and a vital subject for academic success. For students in Rawalpindi, mastering Urdu opens doors to better communication, cultural understanding, and academic opportunities. Many students struggle with Urdu because it requires a combination of skills — grammar, vocabulary, comprehension, essay writing, and literature analysis. A <a class="blog-link" href="/home-tutor-rawalpindi">home tutor in Rawalpindi</a> specialising in Urdu can provide the individual attention that makes all the difference.`,
        `At <a class="blog-link" href="/">Avenfield Tutors</a>, we understand that Urdu becomes accessible when taught with the right approach. Our qualified Urdu tutors in Rawalpindi help students build a strong foundation in grammar, develop their vocabulary, and master the art of writing and analysis. Whether your child is preparing for <a class="blog-link" href="/tutors?subject=O%20Level">O Level Urdu</a>, <a class="blog-link" href="/tutors?subject=A%20Level">A Level Urdu</a>, Matric, FSc, or university-level courses, our tutors provide the support needed to excel.`,
        `We offer <a class="blog-link" href="/home-tutor-rawalpindi">home tuition in Rawalpindi</a> as well as <a class="blog-link" href="/tutors">online tutoring</a> options, giving families the flexibility to choose the learning format that best suits their needs. Our tutors use interactive discussions, writing practice, and literary analysis to make Urdu engaging and practical. This approach not only helps students improve their grades but also builds lifelong communication skills.`,
        `Our Urdu tutors in Rawalpindi are not just subject experts; they are patient and supportive educators who understand the challenges students face. They take the time to identify each student's weaknesses and address them systematically, building confidence with every session. With the right guidance, Urdu can transform from a difficult subject into one of the most rewarding areas of study.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">home Urdu tutors in Rawalpindi</strong> are qualified educators with extensive experience teaching Urdu across multiple curricula. They hold advanced degrees in Urdu Literature, Linguistics, or related fields and have a proven track record of helping students achieve top grades. Our tutors are also experienced in preparing students for competitive exams and university entrance tests.`,
        `We offer tuition for <strong class="text-[#2E4F5E]">all Urdu levels</strong> including grammar, composition, essay writing, comprehension, literature analysis, poetry, drama, and creative writing. We cover curricula such as <strong class="text-[#2E4F5E]">CAIE (Cambridge International)</strong>, <strong class="text-[#2E4F5E]">Edexcel</strong>, Federal Board, Punjab Board, and other local boards. Our tutors are familiar with the specific requirements of each curriculum and exam board.`,
        `Our tutors focus on <strong class="text-[#2E4F5E]">building strong language foundations</strong> and developing <strong class="text-[#2E4F5E]">critical thinking skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. Regular assessments and progress reports ensure that both parents and students stay informed about progress and areas needing improvement.`,
        `We understand that Urdu requires both theoretical understanding and practical application. That is why our tutors use <strong class="text-[#2E4F5E]">interactive teaching methods</strong> including essay writing practice, poetry analysis, and detailed feedback on written work to help students develop both accuracy and fluency. Our tutors also provide guidance on effective study techniques and exam strategies.`,
      ]}
      examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA', 'Federal Board', 'Punjab Board', 'KPK Board', 'Sindh Board', 'Balochistan Board']}
      targetExams={['O Level', 'A Level', 'Matric', 'FSc', 'IGCSE', 'University Exams']}
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
        'Our Urdu tutors in Rawalpindi are <strong>qualified and experienced educators</strong> with advanced degrees in Urdu Literature, Linguistics, or related fields and proven track records of helping students achieve top grades.',
        'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals. Every student receives the individual attention they need to succeed.',
        'Our tutors use <strong>interactive teaching methods</strong> including essay writing practice, poetry analysis, and detailed feedback to make Urdu engaging and practical.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Urdu tutoring into your family\'s busy schedule. Progress reports keep parents informed every step of the way.',
      ]}
      faqs={[
        {
          q: 'How can I hire a home Urdu tutor in Rawalpindi?',
          a: 'Hiring a home Urdu tutor in Rawalpindi is simple. Contact <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Avenfield Tutors on WhatsApp</a> with your child\'s grade level, curriculum, and specific needs. We will match you with a qualified Urdu tutor in your area within 24 hours. A free demo class allows you to assess the tutor before committing to regular sessions.',
        },
        {
          q: 'Do you provide female Urdu tutors in Rawalpindi?',
          a: 'Yes, we provide both male and female Urdu tutors in Rawalpindi. Parents can request a tutor based on their preference. All our tutors are verified, qualified, and experienced educators. We understand that some families prefer female tutors for their daughters, and we respect and accommodate these preferences.',
        },
        {
          q: 'What are the charges for a home Urdu tutor in Rawalpindi?',
          a: 'Tuition charges for home Urdu tutors in Rawalpindi vary based on the student\'s grade level, curriculum, and the tutor\'s experience. Typically, rates range from PKR 1,500 to 4,000 per hour. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive pricing with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free demo class before hiring a tutor?',
          a: 'Yes, we offer a free demo class for all new students. This allows you to assess the tutor\'s teaching style and ensure they are the right fit for your child before committing to regular sessions. The demo class is risk-free and gives you the opportunity to ask questions and discuss your child\'s learning needs in detail.',
        },
        {
          q: 'Do you also offer online Urdu classes in Rawalpindi?',
          a: 'Yes, we offer online Urdu classes for students who prefer the flexibility of learning from home or who live in areas where home tuition may not be available. Our <a href="/tutors" class="text-[#E05C42] hover:underline font-black">online tutors</a> are experienced in delivering engaging and effective lessons through video calls, interactive whiteboards, and screen sharing.',
        },
        {
          q: 'Which areas of Rawalpindi do your home tutors cover?',
          a: 'Our home Urdu tutors cover all major areas of Rawalpindi including Bahria Town, DHA, Saddar, Satellite Town, Chaklala, Westridge, Gulraiz, Askari, Adiala Road, Rawat, Sixth Road, Tenant Colony, Lalazar, Peshawar Road, Fazal Town, Sadiqabad, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
        },
      ]}
      areas={RAWALPINDI_AREAS}
      relatedSubjects={[
        { name: 'Home Math Tutors', href: '/home-math-tutor-rawalpindi', icon: '📐' },
        { name: 'Home Physics Tutors', href: '/home-physics-tutor-rawalpindi', icon: '⚡' },
        { name: 'Home Chemistry Tutors', href: '/home-chemistry-tutor-rawalpindi', icon: '🧪' },
        { name: 'Home Biology Tutors', href: '/home-biology-tutor-rawalpindi', icon: '🧬' },
        { name: 'Home English Tutors', href: '/home-english-tutor-rawalpindi', icon: '📝' },
        { name: 'Home Computer Science Tutors', href: '/home-computer-science-tutor-rawalpindi', icon: '💻' },
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