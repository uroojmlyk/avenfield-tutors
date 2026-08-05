import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/home-biology-tutor-rawalpindi`

export const metadata: Metadata = {
  title: 'Best Home Biology Tutor in Rawalpindi | O Level, A Level, Matric & FSc Biology',
  description:
    'Find qualified home biology tutors in Rawalpindi for O Level, A Level, Matric, FSc & University Biology. Male & female tutors available for personalized home tuition. Free demo class.',
  keywords: [
    'home biology tutor Rawalpindi',
    'biology tutor Rawalpindi',
    'biology teacher Rawalpindi',
    'home tuition Rawalpindi',
    'O Level biology tutor Rawalpindi',
    'A Level biology tutor Rawalpindi',
    'FSc biology tutor Rawalpindi',
    'matric biology tutor Rawalpindi',
    'best biology tutor in Rawalpindi',
    'female biology tutor Rawalpindi',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Home Biology Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home biology tutors in Rawalpindi for O Level, A Level, Matric, FSc & University. Male & female tutors available. Free demo class.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Home Biology Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home biology tutors in Rawalpindi for O Level, A Level, Matric, FSc & University.',
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

export default function HomeBiologyTutorRawalpindiPage() {
  return (
    <SubjectLandingPage
      subject="Biology"
      city="Rawalpindi"
      slug="home-biology-tutor-rawalpindi"
      pageTitle="Best Home Biology Tutor in Rawalpindi | O Level, A Level, Matric & FSc Biology"
      pageDescription="Find qualified home biology tutors in Rawalpindi for O Level, A Level, Matric, FSc & University Biology. Male & female tutors available for personalized home tuition. Free demo class."
      metaKeywords={[
        'home biology tutor Rawalpindi',
        'biology tutor Rawalpindi',
        'biology teacher Rawalpindi',
        'home tuition Rawalpindi',
        'O Level biology tutor Rawalpindi',
        'A Level biology tutor Rawalpindi',
        'FSc biology tutor Rawalpindi',
        'matric biology tutor Rawalpindi',
        'best biology tutor in Rawalpindi',
        'female biology tutor Rawalpindi',
      ]}
      subjectIcon="🧬"
      subjectEmoji="🔬"
      subjectOverview={[
        `Biology is the study of life itself — from the smallest cells to entire ecosystems. For students in Rawalpindi, Biology is often a subject of fascination, but it can also be overwhelming due to the sheer volume of content and the need to understand complex processes that are not always visible. The human body, genetics, ecology, and evolution are just a few of the topics that require deep understanding and memorisation. A <a class="blog-link" href="/home-biology-tutor-rawalpindi">home biology tutor in Rawalpindi</a> can provide the individual attention that makes all the difference.`,
        `At <a class="blog-link" href="/">Avenfield Tutors</a>, we understand that Biology becomes accessible when taught with the right approach. Our qualified biology tutors in Rawalpindi help students build a strong conceptual foundation by breaking down complex topics into simple, relatable ideas. Whether your child is preparing for <a class="blog-link" href="/tutors?subject=O%20Level">O Level Biology</a>, <a class="blog-link" href="/tutors?subject=A%20Level">A Level Biology</a>, Matric, FSc, or university-level courses, our tutors provide the support needed to master both theory and application.`,
        `We offer <a class="blog-link" href="/home-tutor-rawalpindi">home tuition in Rawalpindi</a> as well as <a class="blog-link" href="/tutors">online tutoring</a> options, giving families the flexibility to choose the learning format that best suits their needs. Our tutors use diagrams, models, practical examples, and interactive discussions to make Biology engaging and understandable. This approach not only helps students improve their grades but also fosters a genuine interest in the life sciences.`,
        `Our <a class="blog-link" href="/home-biology-tutor-rawalpindi">biology tutors in Rawalpindi</a> are not just subject experts; they are patient and supportive educators who understand the challenges students face. They take the time to identify each student's weaknesses and address them systematically, building confidence with every session. With the right guidance, Biology can transform from a difficult subject into one of the most rewarding areas of study.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">home biology tutors in Rawalpindi</strong> are qualified educators with extensive experience teaching Biology across multiple curricula. They hold advanced degrees in Biology, Life Sciences, or related fields and have a proven track record of helping students achieve top grades. Our tutors are also experienced in preparing students for competitive exams and university entrance tests.`,
        `We offer tuition for <strong class="text-[#2E4F5E]">all Biology levels</strong> including cell biology, human physiology, genetics, ecology, evolution, microbiology, biochemistry, and biotechnology. We cover curricula such as <strong class="text-[#2E4F5E]">CAIE (Cambridge International)</strong>, <strong class="text-[#2E4F5E]">Edexcel</strong>, Federal Board, Punjab Board, and other local boards. Our tutors are familiar with the specific requirements of each curriculum and exam board.`,
        `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual understanding</strong> and developing <strong class="text-[#2E4F5E]">analytical skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. Regular assessments and progress reports ensure that both parents and students stay informed about progress and areas needing improvement.`,
        `We understand that Biology requires both theoretical understanding and practical application. That is why our tutors use <strong class="text-[#2E4F5E]">interactive teaching methods</strong> including diagrams, models, practical examples, and discussions to help students master both concepts and applications. Our tutors also provide guidance on effective study techniques and exam strategies.`,
      ]}
      examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA', 'Federal Board', 'Punjab Board', 'KPK Board', 'Sindh Board', 'Balochistan Board']}
      targetExams={['O Level', 'A Level', 'Matric', 'FSc', 'IGCSE', 'University Exams', 'Entry Tests']}
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
        'Our biology tutors in Rawalpindi are <strong>qualified and experienced educators</strong> with advanced degrees in Biology, Life Sciences, or related fields and proven track records of helping students achieve top grades.',
        'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals. Every student receives the individual attention they need to succeed.',
        'Our tutors use <strong>interactive teaching methods</strong> including diagrams, models, practical examples, and discussions to make Biology engaging and easy to understand.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Biology tutoring into your family\'s busy schedule. Progress reports keep parents informed every step of the way.',
      ]}
      faqs={[
        {
          q: 'How can I hire a home biology tutor in Rawalpindi?',
          a: 'Hiring a home biology tutor in Rawalpindi is simple. Contact <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Avenfield Tutors on WhatsApp</a> with your child\'s grade level, curriculum, and specific needs. We will match you with a qualified biology tutor in your area within 24 hours. A free demo class allows you to assess the tutor before committing to regular sessions.',
        },
        {
          q: 'Do you provide female biology tutors in Rawalpindi?',
          a: 'Yes, we provide both male and female biology tutors in Rawalpindi. Parents can request a tutor based on their preference. All our tutors are verified, qualified, and experienced educators. We understand that some families prefer female tutors for their daughters, and we respect and accommodate these preferences.',
        },
        {
          q: 'What are the charges for a home biology tutor in Rawalpindi?',
          a: 'Tuition charges for home biology tutors in Rawalpindi vary based on the student\'s grade level, curriculum, and the tutor\'s experience. Typically, rates range from PKR 1,500 to 4,000 per hour. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive pricing with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free demo class before hiring a tutor?',
          a: 'Yes, we offer a free demo class for all new students. This allows you to assess the tutor\'s teaching style and ensure they are the right fit for your child before committing to regular sessions. The demo class is risk-free and gives you the opportunity to ask questions and discuss your child\'s learning needs in detail.',
        },
        {
          q: 'Do you also offer online biology classes in Rawalpindi?',
          a: 'Yes, we offer online biology classes for students who prefer the flexibility of learning from home or who live in areas where home tuition may not be available. Our <a href="/tutors" class="text-[#E05C42] hover:underline font-black">online tutors</a> are experienced in delivering engaging and effective lessons through video calls, interactive whiteboards, and screen sharing.',
        },
        {
          q: 'Which areas of Rawalpindi do your home tutors cover?',
          a: 'Our home biology tutors cover all major areas of Rawalpindi including Bahria Town, DHA, Saddar, Satellite Town, Chaklala, Westridge, Gulraiz, Askari, Adiala Road, Rawat, Sixth Road, Tenant Colony, Lalazar, Peshawar Road, Fazal Town, Sadiqabad, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
        },
      ]}
      areas={RAWALPINDI_AREAS}
      relatedSubjects={[
        { name: 'Home Math Tutors', href: '/home-math-tutor-rawalpindi', icon: '📐' },
        { name: 'Home Physics Tutors', href: '/home-physics-tutor-rawalpindi', icon: '⚡' },
        { name: 'Home Chemistry Tutors', href: '/home-chemistry-tutor-rawalpindi', icon: '🧪' },
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