import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/home-islamic-studies-tutor-rawalpindi`

export const metadata: Metadata = {
  title: 'Best Home Islamic Studies Tutor in Rawalpindi | O Level, A Level & Islamic History',
  description:
    'Find qualified home Islamic Studies tutors in Rawalpindi for O Level, A Level, IGCSE & University. Learn Quranic Studies, Hadith, Islamic History & Islamic Civilization. Male & female tutors. Free demo class.',
  keywords: [
    'home Islamic Studies tutor Rawalpindi',
    'Islamic Studies tutor Rawalpindi',
    'Islamic Studies tuition Rawalpindi',
    'O Level Islamic Studies tutor',
    'A Level Islamic Studies tutor',
    'Islamic History tutor',
    'Quranic Studies tutor',
    'Hadith tutor',
    'Islamic Civilization tutor',
    'home tuition Rawalpindi',
    'best Islamic Studies tutor in Rawalpindi',
    'female Islamic Studies tutor Rawalpindi',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Home Islamic Studies Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home Islamic Studies tutors in Rawalpindi for O Level, A Level, IGCSE & University. Expert tuition for all topics. Male & female tutors available. Free demo class.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Home Islamic Studies Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home Islamic Studies tutors in Rawalpindi for O Level, A Level, IGCSE & University. Expert tuition for all topics.',
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

export default function HomeIslamicStudiesTutorRawalpindiPage() {
  return (
    <SubjectLandingPage
      subject="Islamic Studies"
      city="Rawalpindi"
      slug="home-islamic-studies-tutor-rawalpindi"
      pageTitle="Best Home Islamic Studies Tutor in Rawalpindi | O Level, A Level & Islamic History"
      pageDescription="Find qualified home Islamic Studies tutors in Rawalpindi for O Level, A Level, IGCSE & University. Learn Quranic Studies, Hadith, Islamic History & Islamic Civilization. Male & female tutors. Free demo class."
      metaKeywords={[
        'home Islamic Studies tutor Rawalpindi',
        'Islamic Studies tutor Rawalpindi',
        'Islamic Studies tuition Rawalpindi',
        'O Level Islamic Studies tutor',
        'A Level Islamic Studies tutor',
        'Islamic History tutor',
        'Quranic Studies tutor',
        'Hadith tutor',
        'Islamic Civilization tutor',
        'home tuition Rawalpindi',
        'best Islamic Studies tutor in Rawalpindi',
        'female Islamic Studies tutor Rawalpindi',
      ]}
      subjectIcon="☪️"
      subjectEmoji="🕌"
      subjectOverview={[
        'Islamic Studies is a subject that combines academic rigour with spiritual depth, covering Quranic studies, Hadith, Islamic history, and contemporary issues. Students in Rawalpindi taking O Level, A Level, or university-level Islamic Studies often need guidance to navigate the breadth of the syllabus and develop critical analysis skills. A <a class="blog-link" href="/home-tutor-rawalpindi">home tutor in Rawalpindi</a> specialising in Islamic Studies can provide the focused support needed to excel in this subject.',
        'At <a class="blog-link" href="/">Avenfield Tutors</a>, we understand that Islamic Studies requires both academic understanding and sensitivity to the subject matter. Our qualified Islamic Studies tutors in Rawalpindi help students build a comprehensive understanding of Islamic civilisation, theology, and history. Whether your child is preparing for <a class="blog-link" href="/tutors?subject=O%20Level&city=Rawalpindi">O Level Islamic Studies</a>, <a class="blog-link" href="/tutors?subject=A%20Level&city=Rawalpindi">A Level Islamic Studies</a>, or university-level courses, our tutors provide the support needed to excel.',
        'We offer <a class="blog-link" href="/home-tutor-rawalpindi">home tuition in Rawalpindi</a> as well as <a class="blog-link" href="/tutors">online tutoring</a> options, giving families the flexibility to choose the learning format that best suits their needs. Our tutors use primary sources, scholarly commentaries, and critical analysis to make Islamic Studies engaging and academically rigorous.',
        'Our Islamic Studies tutors in Rawalpindi are experienced educators who understand the specific demands of the subject. They help students develop strong analytical and essay writing skills, which are essential for success in Islamic Studies examinations. With the right guidance, students can achieve their academic goals in this important subject.',
      ]}
      subjectDetails={[
        'Our <strong class="text-[#2E4F5E]">home Islamic Studies tutors in Rawalpindi</strong> are qualified educators with experience teaching Islamic Studies across multiple curricula. They hold relevant qualifications in Islamic Studies, Theology, or related fields and have a track record of helping students achieve strong results.',
        'We cover <strong class="text-[#2E4F5E]">all major Islamic Studies topics</strong> including Quranic studies, Hadith literature, Islamic history, Islamic jurisprudence, Islamic civilization, and contemporary Islamic issues. Our tutors use primary sources, scholarly commentaries, and critical analysis to make learning engaging and academically rigorous.',
        'Our tutors focus on <strong class="text-[#2E4F5E]">building strong conceptual foundations</strong> and developing <strong class="text-[#2E4F5E]">critical thinking skills</strong>. They use past papers, practice questions, and targeted revision strategies to help students achieve their target grades. For university students, tutors provide advanced guidance on research essays and source analysis.',
        'We understand that Islamic Studies requires both academic rigour and spiritual sensitivity. That is why our tutors use <strong class="text-[#2E4F5E]">interactive teaching methods</strong> including discussions, source analysis, and reflective exercises to help students develop a balanced and informed understanding of Islam.',
      ]}
      examBoards={['CAIE (Cambridge International)', 'Edexcel', 'Oxford AQA', 'FSc (Local Boards)', 'University']}
      targetExams={['O Level', 'A Level', 'IGCSE', 'FSc', 'University Exams']}
      commonTopics={[
        'Quranic Studies & Tafsir',
        'Hadith Literature',
        'Life of Prophet Muhammad (PBUH)',
        'Islamic History & Civilization',
        'Islamic Jurisprudence (Fiqh)',
        'Islamic Theology (Aqeedah)',
        'Islamic Ethics & Morality',
        'Contemporary Islamic Issues',
        'Islamic Art & Architecture',
        'Source Analysis & Critical Thinking',
      ]}
      whyChoose={[
        'Our Islamic Studies tutors in Rawalpindi are <strong>subject specialists</strong> with experience teaching Islamic Studies across multiple curricula, including O Level, A Level, and University courses.',
        'We provide <strong>personalised lesson plans</strong> tailored to each student\'s learning style, pace, and academic goals, ensuring efficient and effective learning.',
        'Our tutors use <strong>interactive teaching methods</strong> including discussions, source analysis, and reflective exercises to make Islamic Studies engaging and academically rigorous.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit Islamic Studies tutoring into your family\'s busy schedule.',
      ]}
      faqs={[
        {
          q: 'How can I hire a home Islamic Studies tutor in Rawalpindi?',
          a: 'Hiring a home Islamic Studies tutor in Rawalpindi is simple. Contact <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Avenfield Tutors on WhatsApp</a> with your child\'s level and specific needs. We will match you with a qualified Islamic Studies tutor in your area. A free demo class allows you to assess the tutor before committing to regular sessions.',
        },
        {
          q: 'Do you provide female Islamic Studies tutors in Rawalpindi?',
          a: 'Yes, we provide both male and female Islamic Studies tutors in Rawalpindi. Parents can request a tutor based on their preference. All our tutors are verified, qualified, and experienced educators. We understand that some families prefer female tutors, and we respect and accommodate these preferences.',
        },
        {
          q: 'Which Islamic Studies curricula do you offer tuition for?',
          a: 'We offer tuition for all major Islamic Studies curricula including CAIE (Cambridge International) O Level and A Level, Edexcel, Oxford AQA, IGCSE, FSc (local Pakistani boards), and University-level courses. Our tutors are familiar with the specific requirements of each curriculum and exam board.',
        },
        {
          q: 'What are the charges for a home Islamic Studies tutor in Rawalpindi?',
          a: 'Tuition charges for home Islamic Studies tutors in Rawalpindi vary based on the curriculum, the tutor\'s experience, and the student\'s level. Typically, rates range from PKR 1,500 to 4,000 per hour, though this can vary. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive pricing with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free demo class before hiring a tutor?',
          a: 'Yes, we offer a free demo class for all new students. This allows you to assess the tutor\'s teaching style and ensure they are the right fit for your child before committing to regular sessions. The demo class is risk-free and gives you the opportunity to discuss your child\'s learning needs in detail.',
        },
        {
          q: 'Which areas of Rawalpindi do your home tutors cover?',
          a: 'Our home Islamic Studies tutors cover all major areas of Rawalpindi including Bahria Town, DHA, Saddar, Satellite Town, Chaklala, Westridge, Gulraiz, Askari, Adiala Road, Rawat, Sixth Road, Tenant Colony, Lalazar, Peshawar Road, Fazal Town, Sadiqabad, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
        },
      ]}
      areas={RAWALPINDI_AREAS}
      relatedSubjects={[
        { name: 'Home O Level Tutors', href: '/home-o-level-tutor-rawalpindi', icon: '📚' },
        { name: 'Home A Level Tutors', href: '/home-a-level-tutor-rawalpindi', icon: '🎯' },
        { name: 'Home IELTS Tutors', href: '/home-ielts-tutor-rawalpindi', icon: '🎓' },
        { name: 'Home MDCAT Tutors', href: '/home-mdcat-tutor-rawalpindi', icon: '🩺' },
        { name: 'Home Math Tutors', href: '/home-math-tutor-rawalpindi', icon: '📐' },
        { name: 'Home Physics Tutors', href: '/home-physics-tutor-rawalpindi', icon: '⚡' },
        { name: 'Home Chemistry Tutors', href: '/home-chemistry-tutor-rawalpindi', icon: '🧪' },
        { name: 'Home Biology Tutors', href: '/home-biology-tutor-rawalpindi', icon: '🧬' },
        { name: 'Home English Tutors', href: '/home-english-tutor-rawalpindi', icon: '📝' },
        { name: 'Home Pakistan Studies Tutors', href: '/home-pakistan-studies-tutor-rawalpindi', icon: '🇵🇰' },
        { name: 'Home Tutor Rawalpindi', href: '/home-tutor-rawalpindi', icon: '🏠' },
        { name: 'Online Tutors', href: '/tutors', icon: '💻' },
        { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
        { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
      ]}
      nearbyCity="Islamabad"
      canonicalUrl={url}
    />
  )
}