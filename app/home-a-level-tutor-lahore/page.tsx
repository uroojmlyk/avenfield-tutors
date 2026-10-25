import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'
import { LAHORE_AREAS } from '@/lib/lahore-areas'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/home-a-level-tutor-lahore`

// NOTE: no "| Avenfield Tutors" suffix here. app/layout.tsx already appends it.
const TITLE = 'A Level Home Tutor in Lahore | AS & A2, Cambridge & Edexcel'
const DESCRIPTION =
  'Find an A Level home tutor in Lahore for Maths, Physics, Chemistry, Biology, Economics and more. Explore AS and A2 tutors by syllabus, area and schedule.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'A Level tutor Lahore',
    'A Level home tutor in Lahore',
    'A Level tuition Lahore',
    'Cambridge A Level tutor Lahore',
    'Edexcel A Level tutor Lahore',
    'A Level maths tutor Lahore',
    'A Level physics tutor Lahore',
    'A Level chemistry tutor Lahore',
    'A Level biology tutor Lahore',
    'A Level economics tutor Lahore',
    'AS Level tutor Lahore',
    'A Level online tutor Lahore',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: TITLE,
    description: 'Explore A Level home tutors in Lahore for AS and A2 Maths, Sciences, Economics and more. Share your syllabus, area and schedule.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Explore A Level home tutors in Lahore for AS and A2 Maths, Sciences, Economics and more. Share your syllabus, area and schedule.',
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

export default function HomeALevelTutorLahorePage() {
  return (
    <SubjectLandingPage
      subject="A Level"
      city="Lahore"
      slug="home-a-level-tutor-lahore"
      pageTitle={TITLE}
      pageDescription={DESCRIPTION}
      metaKeywords={[
        'A Level tutor Lahore',
        'A Level home tutor in Lahore',
        'A Level tuition Lahore',
        'Cambridge A Level tutor Lahore',
        'Edexcel A Level tutor Lahore',
        'A Level maths tutor Lahore',
        'A Level physics tutor Lahore',
        'A Level chemistry tutor Lahore',
        'A Level biology tutor Lahore',
        'A Level economics tutor Lahore',
        'AS Level tutor Lahore',
        'A Level online tutor Lahore',
      ]}
      subjectIcon="🎯"
      subjectEmoji="📈"
      subjectOverview={[
        `A Level is where many Lahore students find that O Level habits are no longer enough. The jump in depth is real, particularly in Mathematics, Physics and Chemistry, and the course is split into AS Level in the first year and A2 in the second. Students from Cambridge and Edexcel schools in DHA, Gulberg, Cantt and Bahria Town often have fewer subjects but far more to understand in each one, so a tutor needs genuine subject depth and not just exam technique.`,
        `<a class="blog-link" href="/home-tutor-lahore">Home tuition in Lahore</a> is especially useful at this level because A Level questions reward clear reasoning, and a tutor sitting next to the student can see where the thinking goes wrong. We ask for the exact syllabus, the subject combination and your area, then explore tutors who are comfortable at AS or A2 depth. If you are still choosing subjects, our guide to <a class="blog-link" href="/blog/how-to-choose-a-level-subjects-pakistan">choosing A Level subjects in Pakistan</a> is a good place to start.`,
        `Students coming from O Level can read the <a class="blog-link" href="/blog/o-level-to-a-level-transition-guide-pakistan">O Level to A Level transition guide</a> before the new year starts. Pre-medical students aiming for entry tests may also want to read about <a class="blog-link" href="/home-mdcat-tutor-lahore">MDCAT preparation in Lahore</a>.`,
      ]}
      subjectDetails={[
        `A tutor at this level should be able to teach beyond the textbook: derivations in Physics, mechanisms in Chemistry, data interpretation in Biology and extended reasoning in Economics. Ask about the tutor's qualification in the subject, not only their experience with the exam.`,
        `Practical and data-handling papers matter in the sciences, and they are where many students lose marks. A good tutor works through experiment planning, analysis and evaluation questions alongside theory.`,
        `Mathematics is usually split into Pure Mathematics, Mechanics and Statistics, and Further Mathematics is a separate challenge. If this is the main concern, see our page on <a class="blog-link" href="/home-math-tutor-lahore">home maths tutors in Lahore</a>.`,
        `Revision works best when planned early. Past papers by topic, examiner-style answers and regular timed practice are standard tools. Our <a class="blog-link" href="/blog/how-to-prepare-for-a-level-exams-pakistan">A Level exam preparation guide</a> sets out a practical approach you can share with your tutor.`,
      ]}
      examBoards={[
        'Cambridge International AS & A Level (CAIE)',
        'Edexcel International A Level',
      ]}
      targetExams={[
        'AS Level',
        'A2 Level',
        'Mock Exams',
        'University Admissions',
      ]}
      commonTopics={[
        'Mathematics and Further Mathematics',
        'Physics',
        'Chemistry',
        'Biology',
        'Economics',
        'Accounting',
        'Business',
        'Computer Science',
        'English',
        'Psychology',
      ]}
      whyChoose={[
        `We ask for the exact syllabus and subject combination first, because AS and A2 content differs between Cambridge and Edexcel.`,
        `We look for subject depth, so that students can be taught beyond the textbook, not just drilled on past papers.`,
        `You can review tutor profiles, qualifications and experience before deciding, and discuss the fee and schedule before tuition begins.`,
        `Home tuition in your Lahore area and online options are both available, subject to tutor availability.`,
      ]}
      faqs={[
        {
          q: `How can I find an A Level home tutor in Lahore?`,
          a: `Share the student's subjects, syllabus, AS or A2 stage, area and preferred timings through our <a href="/#inquiry-form" class="text-[#C43D24] hover:underline font-black">inquiry form</a> or on <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">WhatsApp</a>. We will help you explore suitable tutors based on your requirements and tutor availability.`,
        },
        {
          q: `Which A Level subjects can a tutor help with?`,
          a: `Common requests include Mathematics, Further Mathematics, Physics, Chemistry, Biology, Economics, Accounting, Business and Computer Science. Availability depends on the tutor, so please tell us the exact subjects and syllabus.`,
        },
        {
          q: `Do you offer tutors for both AS and A2?`,
          a: `Yes, we can explore tutors for AS Level and A2 Level, depending on availability. Please mention the stage and the exam session so the tutor can plan the remaining time.`,
        },
        {
          q: `Can a tutor help with Cambridge and Edexcel A Levels?`,
          a: `Tutors can support Cambridge International and Edexcel International A Level subjects. Because syllabuses differ, please tell us which board the student is following.`,
        },
        {
          q: `How much does an A Level tutor cost in Lahore?`,
          a: `Fees depend on the subject, level of the tutor's qualification and experience, number of weekly sessions, lesson duration and travel distance. Please discuss fee and payment arrangements before confirming tuition. For general guidance, see <a class="blog-link" href="/blog/home-tutor-cost-pakistan">how much a home tutor costs in Pakistan</a>.`,
        },
        {
          q: `Which areas of Lahore do you cover?`,
          a: `We help families in areas such as DHA, Gulberg, Johar Town, Bahria Town, Model Town, Cantt, Valencia, Wapda Town and Faisal Town, subject to tutor availability. If your area is not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">message us on WhatsApp</a> and we will confirm what is possible.`,
        },
      ]}
      areas={LAHORE_AREAS}
      relatedSubjects={[
        { name: 'Home O Level Tutors Lahore', href: '/home-o-level-tutor-lahore', icon: '📚' },
        { name: 'Home Maths Tutors Lahore', href: '/home-math-tutor-lahore', icon: '📐' },
        { name: 'Home MDCAT Tutors Lahore', href: '/home-mdcat-tutor-lahore', icon: '🩺' },
        { name: 'Home Tutor Lahore', href: '/home-tutor-lahore', icon: '🏠' },
        { name: 'A Level Tutors Islamabad', href: '/a-level-tutor-islamabad', icon: '🎯' },
        { name: 'Online Tutors', href: '/tutors?mode=online', icon: '💻' },
        { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
        { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
      ]}
      nearbyCity="Islamabad"
      canonicalUrl={url}
    />
  )
}