

import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/ielts-tutor-islamabad`

export const metadata: Metadata = {
  title: 'Best IELTS Tutor in Islamabad | Band 7+ Preparation',
  description:
    'Find verified IELTS tutors in Islamabad for Academic & General Training. Expert preparation for all 4 modules Speaking, Writing, Reading & Listening. Free consultation.',
  keywords: [
    'IELTS tutor Islamabad',
    'IELTS preparation Islamabad',
    'IELTS teacher Islamabad',
    'best IELTS tutor in Islamabad',
    'IELTS home tutor Islamabad',
    'IELTS band 7 tutor',
    'IELTS Academic tutor',
    'IELTS General Training tutor',
    'IELTS speaking tutor',
    'IELTS writing tutor',
    'IELTS reading tutor',
    'IELTS listening tutor',
    'IELTS coaching Islamabad',
    'IELTS preparation near me',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best IELTS Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified IELTS tutors in Islamabad for Academic & General Training. Expert preparation for all 4 modules. Free consultation available.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best IELTS Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified IELTS tutors in Islamabad for Academic & General Training. Expert preparation for all 4 modules.',
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

export default function IeltsTutorIslamabadPage() {
  return (
    <SubjectLandingPage
      subject="IELTS"
      city="Islamabad"
      slug="ielts-tutor-islamabad"
      pageTitle="Best IELTS Tutor in Islamabad | Band 7+ Preparation"
      pageDescription="Find verified IELTS tutors in Islamabad for Academic & General Training. Expert preparation for all 4 modules — Speaking, Writing, Reading & Listening. Free consultation."
      metaKeywords={[
        'IELTS tutor Islamabad',
        'IELTS preparation Islamabad',
        'IELTS teacher Islamabad',
        'best IELTS tutor in Islamabad',
        'IELTS home tutor Islamabad',
        'IELTS band 7 tutor',
        'IELTS Academic tutor',
        'IELTS General Training tutor',
        'IELTS speaking tutor',
        'IELTS writing tutor',
        'IELTS reading tutor',
        'IELTS listening tutor',
        'IELTS coaching Islamabad',
        'IELTS preparation near me',
      ]}
      subjectIcon="🎓"
      subjectEmoji="🌍"
      subjectOverview={[
        `The <a href="/tutors?subject=IELTS&city=Islamabad" class="text-[#E05C42] hover:underline font-black">IELTS tutor in Islamabad</a> market is growing rapidly as more students and professionals seek to study, work, or migrate abroad. IELTS (International English Language Testing System) is a critical requirement for UK, Australian, Canadian, and New Zealand visa applications, as well as for university admissions in many English-speaking countries. Our verified IELTS tutors in Islamabad help students achieve their target band scores with focused, personalised preparation.`,
        `Whether you need to achieve <a href="/tutors?subject=IELTS&band=7" class="text-[#E05C42] hover:underline font-black">Band 7</a> or <a href="/tutors?subject=IELTS&band=8" class="text-[#E05C42] hover:underline font-black">Band 8+</a>, our experienced tutors provide targeted practice and feedback on all four modules: <strong>Speaking</strong>, <strong>Writing</strong>, <strong>Reading</strong>, and <strong>Listening</strong>. They understand the specific challenges faced by Pakistani students — particularly in <a href="/tutors?subject=IELTS&module=Writing" class="text-[#E05C42] hover:underline font-black">IELTS Writing Task 2</a> and <a href="/tutors?subject=IELTS&module=Speaking" class="text-[#E05C42] hover:underline font-black">IELTS Speaking Part 3</a> — and provide strategies to overcome them.`,
        `With a focus on building fluency, accuracy, and exam technique, our <a href="/home-tutor-islamabad" class="text-[#E05C42] hover:underline font-black">home tutors in Islamabad</a> provide the undivided attention that IELTS preparation demands. This personalised approach helps students build confidence, identify their weaknesses, and make rapid progress toward their target band score.`,
      ]}
      subjectDetails={[
        `Our <strong class="text-[#2E4F5E]">IELTS tutors in Islamabad</strong> are highly experienced in preparing students for both <strong class="text-[#2E4F5E]">Academic</strong> and <strong class="text-[#2E4F5E]">General Training</strong> modules. They are familiar with the specific band descriptors and provide detailed feedback on practice tests to help students understand exactly what examiners are looking for.`,
        `We focus on <strong class="text-[#2E4F5E]">all four skills</strong> — Listening, Reading, Writing, and Speaking — with equal emphasis, while also providing targeted support in areas where students are weakest. Our tutors use official IELTS materials and past papers to give students an authentic test experience.`,
        `Special attention is given to <strong class="text-[#2E4F5E]">Writing Task 2</strong> and <strong class="text-[#2E4F5E]">Speaking Part 3</strong>, which are the most challenging sections for Pakistani students. Our tutors teach structured essay writing, critical thinking, and sustained argument development — key skills for scoring Band 7 and above.`,
        `We also provide <strong class="text-[#2E4F5E]">mock tests</strong> under timed conditions, followed by detailed performance analysis. This helps students familiarise themselves with the test format, manage time effectively, and build the stamina needed for the real exam.`,
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
        'Our IELTS tutors in Islamabad are <strong>native-level English speakers</strong> with extensive experience in IELTS preparation. Many are also certified IELTS examiners who deeply understand the scoring criteria.',
        'We provide <strong>personalised lesson plans</strong> based on your current band score and target score. Each session focuses on your specific weaknesses, ensuring efficient progress and maximum improvement.',
        'Our tutors use <strong>authentic IELTS materials</strong> and past papers, giving you the most realistic test preparation possible. They also teach proven strategies to tackle each question type effectively.',
        'We offer <strong>flexible scheduling</strong> for both home tuition and online sessions, making it easy to fit IELTS preparation into your busy schedule. We also provide mock tests and detailed feedback to track your progress.',
      ]}
      faqs={[
        {
          q: 'What IELTS band score can I expect with your tutors?',
          a: 'Most students see an improvement of 1-2 bands within 6-8 weeks of consistent tutoring. Our tutors have helped students achieve Band 7, 7.5, and even 8+ with targeted practice. The actual score depends on your starting level and the effort you put in, but we provide the strategies and feedback to maximise your potential.',
        },
        {
          q: 'Do you offer IELTS preparation for both Academic and General Training?',
          a: 'Yes! We offer preparation for both IELTS Academic (for university admissions and professional registration) and IELTS General Training (for migration and work purposes). Our tutors tailor the content to your specific module and target band score.',
        },
        {
          q: 'How much do IELTS tutors in Islamabad charge?',
          a: 'IELTS tutor rates in Islamabad vary based on the tutor\'s experience and the student\'s target band. Typically, rates range from PKR 2,000 to 4,500 per hour for home tuition. <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your specific requirements for a detailed quote. We offer competitive rates with complete transparency and no hidden charges.',
        },
        {
          q: 'Can I get a free trial session with an IELTS tutor?',
          a: 'Yes! We offer a free initial consultation and trial session. This allows you to assess the tutor\'s teaching style and ensure they\'re the right fit for you before committing to regular sessions. It\'s a risk-free way to experience the quality of our tutoring services.',
        },
        {
          q: 'Do you offer online IELTS tutoring as well?',
          a: 'Yes! While we specialise in <a href="/home-tutor-islamabad" class="text-[#E05C42] hover:underline font-black">home tuition in Islamabad</a>, we also offer <a href="/tutors?subject=IELTS" class="text-[#E05C42] hover:underline font-black">online IELTS tutoring</a> for students who prefer the flexibility of learning from home. Our online sessions are conducted via video call with interactive whiteboards and screen sharing, making them just as effective as in-person sessions.',
        },
        {
          q: 'Which areas of Islamabad do your home tutors cover?',
          a: 'Our IELTS home tutors cover all major areas of Islamabad including F-5 to F-17, G-5 to G-16, E-7 to E-17, D-12, I-8 to I-14, B-10 to B-17, C-12 to C-17, H-8 to H-13, DHA Islamabad (all phases), Bahria Enclave, Gulberg Greens, Park View City, Capital Smart City, and many more. If you don\'t see your area listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we\'ll confirm availability.',
        },
      ]}
      areas={ISLAMABAD_AREAS}
      relatedSubjects={[
        { name: 'O Level Tutors', href: '/o-level-tutor-islamabad', icon: '📚' },
        { name: 'A Level Tutors', href: '/a-level-tutor-islamabad', icon: '🎯' },
        { name: 'MDCAT Tutors', href: '/mdcat-tutor-islamabad', icon: '🩺' },
        { name: 'TOEFL Tutors', href: '/tutors?subject=TOEFL&city=Islamabad', icon: '🌎' },
        { name: 'PTE Academic Tutors', href: '/tutors?subject=PTE%20Academic&city=Islamabad', icon: '📋' },
        { name: 'Spoken English Tutors', href: '/tutors?subject=Spoken%20English&city=Islamabad', icon: '💬' },
        { name: 'English Tutors', href: '/tutors?subject=English&city=Islamabad', icon: '📝' },
      ]}
      nearbyCity="Rawalpindi"
      canonicalUrl={url}
    />
  )
}