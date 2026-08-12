import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/home-ielts-tutor-rawalpindi`

export const metadata: Metadata = {
  title: 'Best Home IELTS Tutor in Rawalpindi | Band 7+ Preparation',
  description:
    'Find qualified home IELTS tutors in Rawalpindi for Academic & General Training. Expert preparation for Speaking, Writing, Reading & Listening. Male & female tutors. Free demo class.',
  keywords: [
    'home IELTS tutor Rawalpindi',
    'IELTS tutor Rawalpindi',
    'IELTS preparation Rawalpindi',
    'IELTS teacher Rawalpindi',
    'home tuition Rawalpindi',
    'IELTS Academic tutor',
    'IELTS General Training tutor',
    'IELTS speaking tutor',
    'IELTS writing tutor',
    'IELTS reading tutor',
    'IELTS listening tutor',
    'band 7 IELTS tutor',
    'best IELTS tutor in Rawalpindi',
    'female IELTS tutor Rawalpindi',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Home IELTS Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home IELTS tutors in Rawalpindi for Academic & General Training. Expert preparation for all modules. Male & female tutors available. Free demo class.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Home IELTS Tutor in Rawalpindi | Avenfield Tutors',
    description: 'Qualified home IELTS tutors in Rawalpindi for Academic & General Training. Expert preparation for all modules.',
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

export default function HomeIeltsTutorRawalpindiPage() {
  return (
    <SubjectLandingPage
      subject="IELTS"
      city="Rawalpindi"
      slug="home-ielts-tutor-rawalpindi"
      pageTitle="Best Home IELTS Tutor in Rawalpindi | Band 7+ Preparation"
      pageDescription="Find qualified home IELTS tutors in Rawalpindi for Academic & General Training. Expert preparation for Speaking, Writing, Reading & Listening. Male & female tutors. Free demo class."
      metaKeywords={[
        'home IELTS tutor Rawalpindi',
        'IELTS tutor Rawalpindi',
        'IELTS preparation Rawalpindi',
        'IELTS teacher Rawalpindi',
        'home tuition Rawalpindi',
        'IELTS Academic tutor',
        'IELTS General Training tutor',
        'IELTS speaking tutor',
        'IELTS writing tutor',
        'IELTS reading tutor',
        'IELTS listening tutor',
        'band 7 IELTS tutor',
        'best IELTS tutor in Rawalpindi',
        'female IELTS tutor Rawalpindi',
      ]}
      subjectIcon="🎓"
      subjectEmoji="🌍"
      subjectOverview={[
        'IELTS is a critical requirement for students and professionals in Rawalpindi who plan to study, work, or migrate abroad. The test assesses English language proficiency across four modules: Speaking, Writing, Reading, and Listening. Many candidates find IELTS challenging, especially the Writing and Speaking sections, which require structured argumentation and fluency. A <a class="blog-link" href="/home-tutor-rawalpindi">home tutor in Rawalpindi</a> specialising in IELTS can provide focused preparation to help you achieve your target band score.',
        'At <a class="blog-link" href="/">Avenfield Tutors</a>, we understand that IELTS success requires targeted practice and expert feedback. Our qualified IELTS tutors in Rawalpindi help students build skills across all four modules, with special emphasis on Writing Task 2 and Speaking Part 3, which are often the most challenging for Pakistani candidates. Whether you need <a class="blog-link" href="/tutors?subject=IELTS&city=Rawalpindi">IELTS Academic</a> or <a class="blog-link" href="/tutors?subject=IELTS&city=Rawalpindi">General Training</a> preparation, our tutors provide the support needed to achieve your target score.',
        'We offer <a class="blog-link" href="/home-tutor-rawalpindi">home tuition in Rawalpindi</a> as well as <a class="blog-link" href="/tutors">online tutoring</a> options, giving you the flexibility to choose the learning format that best suits your schedule. Our tutors use authentic IELTS materials, past papers, and detailed feedback to help you build confidence and improve your performance.',
        'Our IELTS tutors in Rawalpindi are experienced educators who understand the specific challenges faced by Pakistani test-takers. They provide personalised feedback on your writing and speaking, helping you identify patterns in your mistakes and develop effective strategies for improvement. With consistent practice and expert guidance, achieving your target IELTS band score becomes achievable.',
      ]}
      subjectDetails={[
        'Our <strong class="text-[#2E4F5E]">home IELTS tutors in Rawalpindi</strong> are experienced educators with a strong track record of helping students achieve their target band scores. They are familiar with the IELTS band descriptors and provide detailed feedback on practice tests. Many of our tutors have experience with both Academic and General Training modules.',
        'We offer comprehensive preparation for <strong class="text-[#2E4F5E]">all four IELTS modules</strong> Speaking, Writing, Reading, and Listening. Our tutors focus on developing fluency, accuracy, and exam technique through targeted practice and feedback. We use official IELTS materials and past papers to ensure authentic test preparation.',
        'Our tutors pay special attention to <strong class="text-[#2E4F5E]">Writing Task 2</strong> and <strong class="text-[#2E4F5E]">Speaking Part 3</strong>, which are often the most challenging sections for Pakistani students. They teach structured essay writing, critical thinking, and sustained argument development — key skills for achieving Band 7 and above.',
        'We also provide <strong class="text-[#2E4F5E]">mock tests</strong> under timed conditions, followed by detailed performance analysis. This helps students familiarise themselves with the test format, manage time effectively, and build the stamina needed for the real exam. Our tutors also provide guidance on effective study techniques and exam strategies.',
      ]}
      examBoards={['IELTS Academic', 'IELTS General Training', 'UKVI IELTS']}
      targetExams={['Band 6.5', 'Band 7', 'Band 7.5', 'Band 8+']}
      commonTopics={[
        'Speaking Fluency & Coherence',
        'Writing Task 2 Essay Structure',
        'Writing Task 1 Data Interpretation',
        'Reading Skimming & Scanning',
        'Listening Note-taking',
        'Vocabulary for IELTS',
        'Grammar for IELTS',
        'Pronunciation & Intonation',
        'Task Response & Cohesion',
        'Time Management',
      ]}
      whyChoose={[
        'Our IELTS tutors in Rawalpindi are <strong>experienced educators</strong> with a strong track record of helping students achieve their target band scores. Many are familiar with IELTS band descriptors and assessment criteria.',
        'We provide <strong>personalised lesson plans</strong> based on your current band score and target score. Each session focuses on your specific weaknesses, ensuring efficient progress and improvement.',
        'Our tutors use <strong>authentic IELTS materials</strong> and past papers, giving you the most realistic test preparation possible. They also teach proven strategies to tackle each question type effectively.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit IELTS preparation into your busy schedule. We also provide mock tests and detailed feedback to track your progress.',
      ]}
      faqs={[
        {
          q: 'How can I hire a home IELTS tutor in Rawalpindi?',
          a: 'Hiring a home IELTS tutor in Rawalpindi is simple. Contact <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Avenfield Tutors on WhatsApp</a> with your target band score and specific needs. We will match you with a qualified IELTS tutor in your area. A free demo class allows you to assess the tutor before committing to regular sessions.',
        },
        {
          q: 'Do you provide female IELTS tutors in Rawalpindi?',
          a: 'Yes, we provide both male and female IELTS tutors in Rawalpindi. Parents can request a tutor based on their preference. All our tutors are verified, qualified, and experienced educators. We understand that some families prefer female tutors, and we respect and accommodate these preferences.',
        },
        {
          q: 'Do you offer IELTS preparation for both Academic and General Training?',
          a: 'Yes, we offer preparation for both IELTS Academic (for university admissions and professional registration) and IELTS General Training (for migration and work purposes). Our tutors tailor the content to your specific module and target band score.',
        },
        {
          q: 'What are the charges for a home IELTS tutor in Rawalpindi?',
          a: 'Tuition charges for home IELTS tutors in Rawalpindi vary based on the tutor\'s experience and the student\'s target band. Typically, rates range from PKR 2,000 to 4,500 per hour, though this can vary. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive pricing with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free demo class before hiring a tutor?',
          a: 'Yes, we offer a free demo class for all new students. This allows you to assess the tutor\'s teaching style and ensure they are the right fit for you before committing to regular sessions. The demo class is risk-free and gives you the opportunity to discuss your learning needs in detail.',
        },
        {
          q: 'Which areas of Rawalpindi do your home tutors cover?',
          a: 'Our home IELTS tutors cover all major areas of Rawalpindi including Bahria Town, DHA, Saddar, Satellite Town, Chaklala, Westridge, Gulraiz, Askari, Adiala Road, Rawat, Sixth Road, Tenant Colony, Lalazar, Peshawar Road, Fazal Town, Sadiqabad, and many more. If you do not see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we will confirm availability.',
        },
      ]}
      areas={RAWALPINDI_AREAS}
      relatedSubjects={[
        { name: 'Home O Level Tutors', href: '/home-o-level-tutor-rawalpindi', icon: '📚' },
        { name: 'Home A Level Tutors', href: '/home-a-level-tutor-rawalpindi', icon: '🎯' },
        { name: 'Home Math Tutors', href: '/home-math-tutor-rawalpindi', icon: '📐' },
        { name: 'Home Physics Tutors', href: '/home-physics-tutor-rawalpindi', icon: '⚡' },
        { name: 'Home Chemistry Tutors', href: '/home-chemistry-tutor-rawalpindi', icon: '🧪' },
        { name: 'Home Biology Tutors', href: '/home-biology-tutor-rawalpindi', icon: '🧬' },
        { name: 'Home English Tutors', href: '/home-english-tutor-rawalpindi', icon: '📝' },
        { name: 'Home Tutor Rawalpindi', href: '/home-tutor-rawalpindi', icon: '🏠' },
        { name: 'Online Tutors', href: '/tutors', icon: '💻' },
        { name: 'Home MDCAT Tutors', href: '/home-mdcat-tutor-rawalpindi', icon: '🩺' },
        { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
        { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
      ]}
      nearbyCity="Islamabad"
      canonicalUrl={url}
    />
  )
}