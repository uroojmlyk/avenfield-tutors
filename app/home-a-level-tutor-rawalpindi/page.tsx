import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/home-a-level-tutor-rawalpindi`

export const metadata: Metadata = {
  title: 'Best Home A Level Tutor in Rawalpindi | Cambridge A Level Tuition',
  description:
    'Find qualified home A Level tutors in Rawalpindi for Cambridge CAIE & Edexcel. Expert tuition for all A Level subjects — Mathematics, Physics, Chemistry, Biology, Economics & more. Male & female tutors. Free demo class.',
  keywords: [
    'home A Level tutor Rawalpindi',
    'A Level tutor Rawalpindi',
    'A Level tuition Rawalpindi',
    'Cambridge A Level tutor Rawalpindi',
    'A Level teacher Rawalpindi',
    'home tuition Rawalpindi',
    'A Level Maths tutor Rawalpindi',
    'A Level Physics tutor Rawalpindi',
    'A Level Chemistry tutor Rawalpindi',
    'A Level Biology tutor Rawalpindi',
    'A Level Economics tutor Rawalpindi',
    'A Level English tutor Rawalpindi',
    'best A Level tutor in Rawalpindi',
    'female A Level tutor Rawalpindi',
    'CAIE A Level tutor',
    'Edexcel A Level tutor',
    'AS Level tutor',
    'A2 Level tutor',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Home A Level Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home A Level tutors in Rawalpindi for Cambridge CAIE & Edexcel. Expert tuition for all subjects. Male & female tutors available. Free demo class.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Home A Level Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home A Level tutors in Rawalpindi for Cambridge CAIE & Edexcel. Expert tuition for all subjects.',
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

// ─── CLEANED AREAS: Genuine housing schemes only in housingSocieties ───
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

export default function HomeALevelTutorRawalpindiPage() {
  return (
    <SubjectLandingPage
      subject="A Level"
      city="Rawalpindi"
      slug="home-a-level-tutor-rawalpindi"
      pageTitle="Best Home A Level Tutor in Rawalpindi | Cambridge A Level Tuition"
      pageDescription="Find qualified home A Level tutors in Rawalpindi for Cambridge CAIE & Edexcel. Expert tuition for all A Level subjects Mathematics, Physics, Chemistry, Biology, Economics & more. Male & female tutors. Free demo class."
      metaKeywords={[
        'home A Level tutor Rawalpindi',
        'A Level tutor Rawalpindi',
        'A Level tuition Rawalpindi',
        'Cambridge A Level tutor Rawalpindi',
        'A Level teacher Rawalpindi',
        'home tuition Rawalpindi',
        'A Level Maths tutor Rawalpindi',
        'A Level Physics tutor Rawalpindi',
        'A Level Chemistry tutor Rawalpindi',
        'A Level Biology tutor Rawalpindi',
        'A Level Economics tutor Rawalpindi',
        'A Level English tutor Rawalpindi',
        'best A Level tutor in Rawalpindi',
        'female A Level tutor Rawalpindi',
        'CAIE A Level tutor',
        'Edexcel A Level tutor',
        'AS Level tutor',
        'A2 Level tutor',
      ]}
      subjectIcon="🎯"
      subjectEmoji="📘"
      subjectOverview={[
        `The Cambridge A Level programme is a widely recognised pre-university qualification taken by students in Rawalpindi who are aiming for admission to top universities worldwide. A Level demands advanced analytical skills, independent research capabilities, and a deep understanding of chosen subjects. A <a class="blog-link" href="/home-tutor-rawalpindi">home tutor in Rawalpindi</a> specialising in A Level subjects can provide the expert guidance needed to excel in this rigorous programme.`,
        `At <a class="blog-link" href="/">Avenfield Tutors</a>, we understand that A Level success requires more than just hard work — it requires the right strategies and expert guidance. Our qualified A Level tutors in Rawalpindi help students master complex concepts, develop critical thinking skills, and build the confidence needed to achieve strong grades. Whether your child is preparing for <a class="blog-link" href="/tutors?subject=A%20Level&city=Rawalpindi">A Level Mathematics</a>, <a class="blog-link" href="/tutors?subject=A%20Level&city=Rawalpindi">Physics</a>, <a class="blog-link" href="/tutors?subject=A%20Level&city=Rawalpindi">Chemistry</a>, <a class="blog-link" href="/tutors?subject=A%20Level&city=Rawalpindi">Biology</a>, <a class="blog-link" href="/tutors?subject=A%20Level&city=Rawalpindi">Economics</a>, or <a class="blog-link" href="/tutors?subject=A%20Level&city=Rawalpindi">English Literature</a>, our tutors provide the support needed to achieve strong results.`,
        `We offer <a class="blog-link" href="/home-tutor-rawalpindi">home tuition in Rawalpindi</a> as well as <a class="blog-link" href="/tutors">online tutoring</a> options, giving families the flexibility to choose the learning format that best suits their needs. Our tutors are familiar with both <a class="blog-link" href="/tutors?subject=A%20Level&board=CAIE">CAIE</a> and <a class="blog-link" href="/tutors?subject=A%20Level&board=Edexcel">Edexcel</a> exam boards, ensuring students are fully prepared for their AS and A2 examinations.`,
        `Our A Level tutors in Rawalpindi are passionate educators who understand the demands of the A Level programme. They take the time to identify each student's strengths and weaknesses, building confidence with every session. With the right guidance, A Level students can achieve their full potential and secure places at competitive universities.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">home A Level tutors in Rawalpindi</strong> are qualified educators with experience teaching the Cambridge syllabus at both AS and A2 levels. They hold relevant qualifications in their subject areas and have a track record of helping students achieve strong results. Our tutors are familiar with Cambridge marking and assessment approaches.`,
        `We offer tuition for <strong class="text-[#2E4F5E]">all A Level subjects</strong> including Mathematics, Further Mathematics, Physics, Chemistry, Biology, Economics, Accounting, Business Studies, English Literature, History, Geography, Psychology, Computer Science, and more. We cover both <strong class="text-[#2E4F5E]">CAIE (Cambridge International)</strong> and <strong class="text-[#2E4F5E]">Edexcel</strong> exam boards.`,
        `Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">advanced exam technique</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. Regular assessments and progress reports ensure that both parents and students stay informed about progress and areas needing improvement.`,
        `We understand that A Level is a significant step up from O Level. That is why our tutors provide <strong class="text-[#2E4F5E]">comprehensive support</strong> — from concept building to exam preparation and university application guidance. Our goal is to help every student build the confidence and competence they need to succeed at the highest level.`,
      ]}
      examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA']}
      targetExams={['AS Level', 'A2 Level', 'Cambridge International A Level']}
      commonTopics={[
        'Calculus & Mechanics',
        'Quantum Physics & Electromagnetism',
        'Organic Chemistry Mechanisms',
        'Molecular Biology & Genetics',
        'Microeconomics & Macroeconomics',
        'Statistical Analysis',
        'Thermodynamics & Kinetics',
        'Inorganic Chemistry Reactions',
        'Human Physiology & Disease',
        'Literary Criticism & Essay Writing',
      ]}
      whyChoose={[
        'Our A Level tutors in Rawalpindi are <strong>subject specialists</strong> with experience helping students achieve strong results in Cambridge examinations — many tutors are familiar with Cambridge assessment approaches.',
        'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals, ensuring efficient and effective learning for the demanding A Level curriculum.',
        'Our tutors are <strong>familiar with the specific requirements</strong> of both CAIE and Edexcel exam boards, including mark schemes, past paper patterns, and examiner expectations at both AS and A2 levels.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit A Level tutoring into your family\'s busy schedule and ensure consistency throughout the two-year A Level programme.',
      ]}
      faqs={[
        {
          q: 'How can I hire a home A Level tutor in Rawalpindi?',
          a: 'Hiring a home A Level tutor in Rawalpindi is simple. Contact <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Avenfield Tutors on WhatsApp</a> with your child\'s subject and specific needs. We will match you with a qualified A Level tutor in your area. A free demo class allows you to assess the tutor before committing to regular sessions.',
        },
        {
          q: 'Do you provide female A Level tutors in Rawalpindi?',
          a: 'Yes, we provide both male and female A Level tutors in Rawalpindi. Parents can request a tutor based on their preference. All our tutors are verified, qualified, and experienced educators. We understand that some families prefer female tutors for their daughters, and we respect and accommodate these preferences.',
        },
        {
          q: 'Which A Level subjects do you offer tuition for?',
          a: 'We offer tuition for all A Level subjects including Mathematics, Further Mathematics, Physics, Chemistry, Biology, Economics, Accounting, Business Studies, English Literature, History, Geography, Psychology, Computer Science, and more. Our tutors cover both CAIE and Edexcel exam boards. If you need a specific subject not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">contact us on WhatsApp</a> and we will find a tutor for you.',
        },
        {
          q: 'What are the charges for a home A Level tutor in Rawalpindi?',
          a: 'Tuition charges for home A Level tutors in Rawalpindi vary based on the subject, the tutor\'s experience, and the student\'s level (AS or A2). Typically, rates range from PKR 2,000 to 4,500 per hour, though this can vary. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive pricing with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free demo class before hiring a tutor?',
          a: 'Yes, we offer a free demo class for all new students. This allows you to assess the tutor\'s teaching style and ensure they are the right fit for your child before committing to regular sessions. The demo class is risk-free and gives you the opportunity to ask questions and discuss your child\'s learning needs in detail.',
        },
        {
          q: 'Which areas of Rawalpindi do your home tutors cover?',
          a: 'Our home A Level tutors cover all major areas of Rawalpindi including Bahria Town, DHA, Saddar, Satellite Town, Chaklala, Westridge, Gulraiz, Askari, Adiala Road, Rawat, Sixth Road, Tenant Colony, Lalazar, Peshawar Road, Fazal Town, Sadiqabad, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
        },
      ]}
      areas={RAWALPINDI_AREAS}
      relatedSubjects={[
        { name: 'Home O Level Tutors', href: '/home-o-level-tutor-rawalpindi', icon: '📚' },
        { name: 'Home Math Tutors', href: '/home-math-tutor-rawalpindi', icon: '📐' },
        { name: 'Home Physics Tutors', href: '/home-physics-tutor-rawalpindi', icon: '⚡' },
        { name: 'Home Chemistry Tutors', href: '/home-chemistry-tutor-rawalpindi', icon: '🧪' },
        { name: 'Home Biology Tutors', href: '/home-biology-tutor-rawalpindi', icon: '🧬' },
        { name: 'Home English Tutors', href: '/home-english-tutor-rawalpindi', icon: '📝' },
        { name: 'Home Economics Tutors', href: '/home-economics-tutor-rawalpindi', icon: '📈' },
        { name: 'Home Tutor Rawalpindi', href: '/home-tutor-rawalpindi', icon: '🏠' },
        { name: 'Online Tutors', href: '/tutors', icon: '💻' },
        // ─── Future pages (will be created) ───
        { name: 'Home IELTS Tutors', href: '/home-ielts-tutor-rawalpindi', icon: '🎓' },
        { name: 'Home MDCAT Tutors', href: '/home-mdcat-tutor-rawalpindi', icon: '🩺' },
        { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
        { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
      ]}
      nearbyCity="Islamabad"
      canonicalUrl={url}
    />
  )
}