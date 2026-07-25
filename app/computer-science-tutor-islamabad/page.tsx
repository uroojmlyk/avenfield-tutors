import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/computer-science-tutor-islamabad`

export const metadata: Metadata = {
  title: 'Best Computer Science Tutor in Islamabad | Programming, O Level & A Level CS',
  description:
    'Find verified Computer Science tutors in Islamabad for O Level, A Level, IGCSE, FSc & University level. Expert tuition for Programming, Python, Java, C++, Databases & more. Free consultation.',
  keywords: [
    'Computer Science tutor Islamabad',
    'CS tutor Islamabad',
    'Programming tutor Islamabad',
    'Computer Science tuition Islamabad',
    'best Computer Science tutor in Islamabad',
    'CS home tutor Islamabad',
    'O Level Computer Science tutor',
    'A Level Computer Science tutor',
    'Python tutor Islamabad',
    'Java tutor Islamabad',
    'C++ tutor Islamabad',
    'Data Structures tutor',
    'Database tutor',
    'IGCSE Computer Science tutor',
    'Programming teacher near me Islamabad',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Computer Science Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified Computer Science tutors in Islamabad for O Level, A Level, IGCSE, FSc & University level. Expert tuition for Programming, Python, Java, C++ & more. Free consultation available.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Computer Science Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified Computer Science tutors in Islamabad for O Level, A Level, IGCSE, FSc & University level. Expert tuition for all topics.',
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

export default function ComputerScienceTutorIslamabadPage() {
  return (
    <SubjectLandingPage
      subject="Computer Science"
      city="Islamabad"
      slug="computer-science-tutor-islamabad"
      pageTitle="Best Computer Science Tutor in Islamabad | Programming, O Level & A Level CS"
      pageDescription="Find verified Computer Science tutors in Islamabad for O Level, A Level, IGCSE, FSc & University level. Expert tuition for Programming, Python, Java, C++, Databases & more. Free consultation."
      metaKeywords={[
        'Computer Science tutor Islamabad',
        'CS tutor Islamabad',
        'Programming tutor Islamabad',
        'Computer Science tuition Islamabad',
        'best Computer Science tutor in Islamabad',
        'CS home tutor Islamabad',
        'O Level Computer Science tutor',
        'A Level Computer Science tutor',
        'Python tutor Islamabad',
        'Java tutor Islamabad',
        'C++ tutor Islamabad',
        'Data Structures tutor',
        'Database tutor',
        'IGCSE Computer Science tutor',
        'Programming teacher near me Islamabad',
      ]}
      subjectIcon="💻"
      subjectEmoji="🖥️"
      subjectOverview={[
        `The <a href="/tutors?subject=Computer%20Science&city=Islamabad" class="text-[#E05C42] hover:underline font-black">Computer Science tutor in Islamabad</a> market is rapidly growing as technology becomes increasingly central to education and careers. Computer Science is essential for careers in software development, artificial intelligence, cybersecurity, data science, and game development. Our verified Computer Science tutors in Islamabad help students master everything from programming fundamentals to advanced algorithms with clarity and confidence.`,
        `Whether your child is preparing for <a href="/tutors?subject=O%20Level&city=Islamabad" class="text-[#E05C42] hover:underline font-black">O Level Computer Science</a>, <a href="/tutors?subject=A%20Level&city=Islamabad" class="text-[#E05C42] hover:underline font-black">A Level Computer Science</a>, <a href="/tutors?subject=IGCSE&city=Islamabad" class="text-[#E05C42] hover:underline font-black">IGCSE</a>, or university-level programming courses, our experienced tutors provide personalised support tailored to the specific curriculum. They understand the unique challenges of each exam board and syllabus — from Cambridge CAIE and Edexcel to local Pakistani boards — and help students develop strong programming and problem-solving skills.`,
        `With a focus on building conceptual understanding and practical coding skills, our <a href="/home-tutor-islamabad" class="text-[#E05C42] hover:underline font-black">home tutors in Islamabad</a> provide the undivided attention that Computer Science requires. This personalised approach is particularly effective for students who need help with complex topics like object-oriented programming, data structures, algorithms, and database design.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">Computer Science tutors in Islamabad</strong> are industry professionals and academics with advanced degrees in Computer Science, Software Engineering, or related fields. They have extensive experience teaching Computer Science across multiple curricula — <strong class="text-[#2E4F5E]">O Level</strong>, <strong class="text-[#2E4F5E]">A Level</strong>, <strong class="text-[#2E4F5E]">IGCSE</strong>, <strong class="text-[#2E4F5E]">FSc</strong>, and <strong class="text-[#2E4F5E]">University</strong> level courses. Their deep understanding of the subject enables them to explain complex concepts in simple, relatable terms.`,
        `We cover <strong class="text-[#2E4F5E]">all major Computer Science topics</strong> including programming fundamentals, object-oriented programming, data structures and algorithms, databases, networking, web development, cybersecurity, and artificial intelligence. Our tutors use practical coding exercises, projects, and real-world applications to make learning engaging and effective.`,
        `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">practical coding skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. For university students, tutors provide advanced guidance on programming assignments, projects, and exam preparation.`,
        `We understand that Computer Science requires both theoretical understanding and practical application. That's why our tutors use <strong class="text-[#2E4F5E]">interactive teaching methods</strong> — including live coding, project-based learning, and problem-solving sessions — to help students master both concepts and implementation.`,
      ]}
      examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA', 'FSc (Local Boards)', 'University']}
      targetExams={['O Level', 'A Level', 'IGCSE', 'FSc', 'University Exams']}
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
        'Our Computer Science tutors in Islamabad are <strong>industry professionals and academics</strong> with advanced degrees in Computer Science, Software Engineering, or related fields and proven track records of helping students achieve top grades.',
        'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals, ensuring efficient and effective learning of complex Computer Science concepts.',
        'Our tutors use <strong>interactive teaching methods</strong> — including live coding, project-based learning, and problem-solving sessions — to make Computer Science engaging and practical.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Computer Science tutoring into your family\'s busy schedule.',
      ]}
      faqs={[
        {
          q: 'What qualifications do your Computer Science tutors in Islamabad have?',
          a: 'All our Computer Science tutors hold at least a bachelor\'s or master\'s degree in Computer Science, Software Engineering, or related fields, with many holding PhDs. They have extensive experience teaching Computer Science across multiple curricula including O Level, A Level, IGCSE, FSc, and University courses. Many tutors are also industry professionals with practical programming experience.',
        },
        {
          q: 'Which Computer Science curricula do you offer tuition for?',
          a: 'We offer tuition for all major Computer Science curricula including CAIE (Cambridge International) O Level and A Level, Edexcel, Oxford AQA, IGCSE, FSc (local Pakistani boards), and University-level courses. Our tutors are familiar with the specific requirements of each curriculum and exam board. If you need a specific syllabus not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">contact us on WhatsApp</a> and we\'ll find a tutor for you.',
        },
        {
          q: 'Which programming languages do your tutors teach?',
          a: 'Our tutors teach a wide range of programming languages including Python, Java, C++, C#, JavaScript, HTML/CSS, SQL, and more. They can also help with specific frameworks and technologies based on your needs. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements and we\'ll find the right tutor for you.',
        },
        {
          q: 'How much do Computer Science tutors in Islamabad charge?',
          a: 'Computer Science tutor rates in Islamabad vary based on the curriculum, the tutor\'s experience, and the student\'s level. Typically, rates range from PKR 2,000 to 4,500 per hour for home tuition. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive rates with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free trial session with a Computer Science tutor?',
          a: 'Yes! We offer a free initial consultation and trial session. This allows you to assess the tutor\'s teaching style and ensure they\'re the right fit for your child before committing to regular sessions. It\'s a risk-free way to experience the quality of our tutoring services.',
        },
        {
          q: 'Which areas of Islamabad do your home tutors cover?',
          a: 'Our Computer Science home tutors cover all major areas of Islamabad including F-5 to F-17, G-5 to G-16, E-7 to E-17, D-12, I-8 to I-14, B-10 to B-17, C-12 to C-17, H-8 to H-13, DHA Islamabad (all phases), Bahria Enclave, Gulberg Greens, Park View City, Capital Smart City, and many more. If you don\'t see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we\'ll confirm availability.',
        },
      ]}
      areas={ISLAMABAD_AREAS}
    //   relatedSubjects={[
    //     { name: 'O Level Tutors', href: '/o-level-tutor-islamabad', icon: '📚' },
    //     { name: 'A Level Tutors', href: '/a-level-tutor-islamabad', icon: '🎯' },
    //     { name: 'IELTS Tutors', href: '/ielts-tutor-islamabad', icon: '🎓' },
    //     { name: 'MDCAT Tutors', href: '/mdcat-tutor-islamabad', icon: '🩺' },
    //     { name: 'Mathematics Tutors', href: '/math-tutor-islamabad', icon: '📐' },
    //     { name: 'Physics Tutors', href: '/physics-tutor-islamabad', icon: '⚡' },
    //     { name: 'English Tutors', href: '/english-tutor-islamabad', icon: '📝' },
    //     { name: 'Economics Tutors', href: '/tutors?subject=Economics&city=Islamabad', icon: '📊' },
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
  { name: 'English Tutors', href: '/english-tutor-islamabad', icon: '📝' },
  { name: 'Quran Tutors', href: '/quran-tutor-islamabad', icon: '🕌' },
  { name: 'Urdu Tutors', href: '/urdu-tutor-islamabad', icon: '🖋️' },
  { name: 'Economics Tutors', href: '/tutors?subject=Economics&city=Islamabad', icon: '📊' },
]}
      nearbyCity="Rawalpindi"
      canonicalUrl={url}
    />
  )
}