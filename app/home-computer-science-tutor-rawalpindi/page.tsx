import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/home-computer-science-tutor-rawalpindi`

export const metadata: Metadata = {
  title: 'Best Home Computer Science Tutor in Rawalpindi | O Level, A Level, FSc & University CS',
  description:
    'Find qualified home computer science tutors in Rawalpindi for O Level, A Level, FSc, University & Programming. Learn Python, Java, C++, Databases & more. Male & female tutors available. Free demo class.',
  keywords: [
    'home computer science tutor Rawalpindi',
    'CS tutor Rawalpindi',
    'computer science teacher Rawalpindi',
    'home tuition Rawalpindi',
    'O Level computer science tutor Rawalpindi',
    'A Level computer science tutor Rawalpindi',
    'FSc computer science tutor Rawalpindi',
    'programming tutor Rawalpindi',
    'Python tutor Rawalpindi',
    'Java tutor Rawalpindi',
    'C++ tutor Rawalpindi',
    'best computer science tutor in Rawalpindi',
    'female computer science tutor Rawalpindi',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Home Computer Science Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home computer science tutors in Rawalpindi for O Level, A Level, FSc, University & Programming. Male & female tutors available. Free demo class.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Home Computer Science Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home computer science tutors in Rawalpindi for O Level, A Level, FSc, University & Programming.',
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

export default function HomeComputerScienceTutorRawalpindiPage() {
  return (
    <SubjectLandingPage
      subject="Computer Science"
      city="Rawalpindi"
      slug="home-computer-science-tutor-rawalpindi"
      pageTitle="Best Home Computer Science Tutor in Rawalpindi | O Level, A Level, FSc & University CS"
      pageDescription="Find qualified home computer science tutors in Rawalpindi for O Level, A Level, FSc, University & Programming. Learn Python, Java, C++, Databases & more. Male & female tutors available. Free demo class."
      metaKeywords={[
        'home computer science tutor Rawalpindi',
        'CS tutor Rawalpindi',
        'computer science teacher Rawalpindi',
        'home tuition Rawalpindi',
        'O Level computer science tutor Rawalpindi',
        'A Level computer science tutor Rawalpindi',
        'FSc computer science tutor Rawalpindi',
        'programming tutor Rawalpindi',
        'Python tutor Rawalpindi',
        'Java tutor Rawalpindi',
        'C++ tutor Rawalpindi',
        'best computer science tutor in Rawalpindi',
        'female computer science tutor Rawalpindi',
      ]}
      subjectIcon="💻"
      subjectEmoji="🖥️"
      subjectOverview={[
        `Computer Science is one of the fastest-growing subjects in Pakistan, with increasing demand for qualified tutors in Rawalpindi. As technology continues to transform every industry, students who develop strong programming and computational thinking skills are better prepared for future careers. A <a class="blog-link" href="/home-tutor-rawalpindi">home tutor in Rawalpindi</a> specialising in Computer Science can provide the personalised guidance needed to master this dynamic subject.`,
        `At <a class="blog-link" href="/">Avenfield Tutors</a>, we understand that Computer Science requires both theoretical understanding and practical coding skills. Our qualified computer science tutors in Rawalpindi help students build a strong foundation in programming, algorithms, and computational thinking. Whether your child is preparing for <a class="blog-link" href="/tutors?subject=O%20Level">O Level Computer Science</a>, <a class="blog-link" href="/tutors?subject=A%20Level">A Level Computer Science</a>, FSc, or university-level courses, our tutors provide the support needed to excel.`,
        `We offer <a class="blog-link" href="/home-tutor-rawalpindi">home tuition in Rawalpindi</a> as well as <a class="blog-link" href="/tutors">online tutoring</a> options, giving families the flexibility to choose the learning format that best suits their needs. Our tutors use practical coding exercises, project-based learning, and real-world examples to make Computer Science engaging and relevant. This approach not only helps students improve their grades but also builds valuable skills for future careers in technology.`,
        `Our computer science tutors in Rawalpindi are not just subject experts; they are patient and supportive educators who understand the challenges students face. They take the time to identify each student's strengths and weaknesses, building confidence with every session. With the right guidance, Computer Science can become one of the most rewarding subjects to study.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">home computer science tutors in Rawalpindi</strong> are qualified educators with extensive experience teaching Computer Science across multiple curricula. They hold advanced degrees in Computer Science, Software Engineering, or related fields and have a proven track record of helping students achieve top grades. Many of our tutors are also industry professionals with practical programming experience.`,
        `We offer tuition for <strong class="text-[#2E4F5E]">all Computer Science levels</strong> including programming fundamentals, object-oriented programming, data structures and algorithms, databases, networking, web development, cybersecurity, and artificial intelligence. We cover curricula such as <strong class="text-[#2E4F5E]">CAIE (Cambridge International)</strong>, <strong class="text-[#2E4F5E]">Edexcel</strong>, Federal Board, Punjab Board, and other local boards.`,
        `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">practical coding skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. Regular assessments and progress reports ensure that both parents and students stay informed about progress and areas needing improvement.`,
        `We understand that Computer Science requires both theoretical understanding and practical application. That is why our tutors use <strong class="text-[#2E4F5E]">interactive teaching methods</strong> including live coding, project-based learning, and problem-solving sessions to help students master both concepts and implementation. Our tutors also provide guidance on effective study techniques and exam strategies.`,
      ]}
      examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA', 'Federal Board', 'Punjab Board', 'KPK Board', 'Sindh Board', 'Balochistan Board']}
      targetExams={['O Level', 'A Level', 'Matric', 'FSc', 'IGCSE', 'University Exams', 'Programming Certifications']}
      commonTopics={[
        'Programming Fundamentals',
        'Object-Oriented Programming',
        'Data Structures & Algorithms',
        'Databases & SQL',
        'Computer Networks',
        'Web Development',
        'Cybersecurity',
        'Artificial Intelligence',
        'Operating Systems',
        'Software Engineering',
      ]}
      whyChoose={[
        'Our computer science tutors in Rawalpindi are <strong>qualified and experienced educators</strong> with advanced degrees in Computer Science, Software Engineering, or related fields and proven track records of helping students achieve top grades.',
        'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals. Every student receives the individual attention they need to succeed.',
        'Our tutors use <strong>interactive teaching methods</strong> including live coding, project-based learning, and problem-solving sessions to make Computer Science engaging and practical.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Computer Science tutoring into your family\'s busy schedule. Progress reports keep parents informed every step of the way.',
      ]}
      faqs={[
        {
          q: 'How can I hire a home computer science tutor in Rawalpindi?',
          a: 'Hiring a home computer science tutor in Rawalpindi is simple. Contact <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Avenfield Tutors on WhatsApp</a> with your child\'s grade level, curriculum, and specific needs. We will match you with a qualified computer science tutor in your area within 24 hours. A free demo class allows you to assess the tutor before committing to regular sessions.',
        },
        {
          q: 'Do you provide female computer science tutors in Rawalpindi?',
          a: 'Yes, we provide both male and female computer science tutors in Rawalpindi. Parents can request a tutor based on their preference. All our tutors are verified, qualified, and experienced educators. We understand that some families prefer female tutors for their daughters, and we respect and accommodate these preferences.',
        },
        {
          q: 'Which programming languages do your tutors teach?',
          a: 'Our tutors teach a wide range of programming languages including Python, Java, C++, C#, JavaScript, HTML/CSS, SQL, and more. They can also help with specific frameworks and technologies based on your needs. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements and we will find the right tutor for you.',
        },
        {
          q: 'What are the charges for a home computer science tutor in Rawalpindi?',
          a: 'Tuition charges for home computer science tutors in Rawalpindi vary based on the student\'s grade level, curriculum, and the tutor\'s experience. Typically, rates range from PKR 1,500 to 4,000 per hour. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive pricing with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free demo class before hiring a tutor?',
          a: 'Yes, we offer a free demo class for all new students. This allows you to assess the tutor\'s teaching style and ensure they are the right fit for your child before committing to regular sessions. The demo class is risk-free and gives you the opportunity to ask questions and discuss your child\'s learning needs in detail.',
        },
        {
          q: 'Which areas of Rawalpindi do your home tutors cover?',
          a: 'Our home computer science tutors cover all major areas of Rawalpindi including Bahria Town, DHA, Saddar, Satellite Town, Chaklala, Westridge, Gulraiz, Askari, Adiala Road, Rawat, Sixth Road, Tenant Colony, Lalazar, Peshawar Road, Fazal Town, Sadiqabad, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
        },
      ]}
      areas={RAWALPINDI_AREAS}
      relatedSubjects={[
        { name: 'Home Math Tutors', href: '/home-math-tutor-rawalpindi', icon: '📐' },
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