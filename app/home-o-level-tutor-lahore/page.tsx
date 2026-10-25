import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'
import { LAHORE_AREAS } from '@/lib/lahore-areas'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/home-o-level-tutor-lahore`

// NOTE: no "| Avenfield Tutors" suffix here. app/layout.tsx already appends it.
const TITLE = 'O Level Home Tutor in Lahore | Cambridge & IGCSE Subjects'
const DESCRIPTION =
  'Find an O Level home tutor in Lahore for Maths, Sciences, English and more. Share your subjects, area and schedule to explore suitable tutors.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'O Level tutor Lahore',
    'O Level home tutor in Lahore',
    'O Level tuition Lahore',
    'Cambridge O Level tutor Lahore',
    'IGCSE tutor Lahore',
    'O Level maths tutor Lahore',
    'O Level physics tutor Lahore',
    'O Level chemistry tutor Lahore',
    'O Level biology tutor Lahore',
    'O Level english tutor Lahore',
    'O Level online tutor Lahore',
    'female O Level tutor Lahore',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: TITLE,
    description: 'Explore O Level home tutors in Lahore for Maths, Sciences, English, Commerce and more. Share your subjects, area and schedule.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Explore O Level home tutors in Lahore for Maths, Sciences, English, Commerce and more. Share your subjects, area and schedule.',
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

export default function HomeOLevelTutorLahorePage() {
  return (
    <SubjectLandingPage
      subject="O Level"
      city="Lahore"
      slug="home-o-level-tutor-lahore"
      pageTitle={TITLE}
      pageDescription={DESCRIPTION}
      metaKeywords={[
        'O Level tutor Lahore',
        'O Level home tutor in Lahore',
        'O Level tuition Lahore',
        'Cambridge O Level tutor Lahore',
        'IGCSE tutor Lahore',
        'O Level maths tutor Lahore',
        'O Level physics tutor Lahore',
        'O Level chemistry tutor Lahore',
        'O Level biology tutor Lahore',
        'O Level english tutor Lahore',
        'O Level online tutor Lahore',
        'female O Level tutor Lahore',
      ]}
      subjectIcon="📚"
      subjectEmoji="🎓"
      subjectOverview={[
        `Cambridge O Level is the main route for students in many Lahore schools, especially across DHA, Gulberg, Cantt, Johar Town and Bahria Town, and Edexcel and IGCSE families are common too. Most students study several subjects at once over two to three years, and the pressure rarely comes from one subject alone. It comes from managing the whole load: coursework, school tests, past papers and the exam sessions in May/June or October/November. A tutor is most useful when they focus on the one or two subjects that need the most help.`,
        `<a class="blog-link" href="/home-tutor-lahore">Home tuition in Lahore</a> works well for O Level because lessons can be built around the student's own weak topics and school timetable. Many Lahore students are also juggling academy classes and long commutes, so we ask for your area and preferred timings first and then explore suitable tutors from there. For help picking subjects, see our guide to <a class="blog-link" href="/blog/how-to-choose-o-level-subjects-pakistan">choosing O Level subjects in Pakistan</a>.`,
        `Parents often ask how O Level compares with the local system. If you are weighing the two, our article on <a class="blog-link" href="/blog/o-level-vs-matric-pakistan">O Level vs Matric in Pakistan</a> covers fees, equivalence and university admission. Once the student is ready, the <a class="blog-link" href="/blog/o-level-to-a-level-transition-guide-pakistan">O Level to A Level transition guide</a> explains what changes next.`,
      ]}
      subjectDetails={[
        `Strong O Level tutoring is built around past papers and mark schemes. A tutor should teach how each subject's questions are worded, what examiners look for in a full-mark answer and how to manage time, not just explain the syllabus content.`,
        `Science papers include a practical-skills component or an alternative-to-practical paper that students often under-prepare for. A good science tutor covers experiments, data handling and evaluation questions alongside theory.`,
        `Pakistani students usually also study Pakistan Studies and Islamiyat, which are commonly required for IBCC equivalence. These are content-heavy subjects where structured notes and essay practice make a real difference, so it is worth planning support for them early.`,
        `If a student has to resit a paper, the <a class="blog-link" href="/blog/pass-supply-exam-60-day-study-plan">60-day supply exam study plan</a> is a useful starting point, and you can pair it with a tutor to keep revision focused. For general exam habits, see our <a class="blog-link" href="/blog/how-to-prepare-for-o-level-exams">O Level preparation guide</a> and <a class="blog-link" href="/blog/top-10-study-tips-for-o-level-students-pakistan">study tips for O Level students</a>.`,
      ]}
      examBoards={[
        'Cambridge (CAIE)',
        'Edexcel',
        'IGCSE',
      ]}
      targetExams={[
        'O Level',
        'IGCSE',
        'Edexcel International GCSE',
        'Mock Exams',
        'Supply / Resit Exams',
      ]}
      commonTopics={[
        'Mathematics and Additional Mathematics',
        'Physics',
        'Chemistry',
        'Biology',
        'English Language and Literature',
        'Computer Science',
        'Accounting',
        'Economics',
        'Business Studies',
        'Urdu',
        'Islamiyat',
        'Pakistan Studies',
      ]}
      whyChoose={[
        `We ask for your exact syllabus and exam session first, so the tutor suggested is familiar with what the student will actually sit.`,
        `Tutors can be suggested subject by subject, so a student can get focused support where it is needed instead of a general tutor for everything.`,
        `You can review tutor profiles, qualifications and experience before deciding, and discuss the fee and schedule before tuition begins.`,
        `Home tuition in your Lahore area and online options are both available, subject to tutor availability.`,
      ]}
      faqs={[
        {
          q: `How can I find an O Level home tutor in Lahore?`,
          a: `Share the student's subjects, syllabus, area and preferred timings through our <a href="/#inquiry-form" class="text-[#C43D24] hover:underline font-black">inquiry form</a> or on <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">WhatsApp</a>. We will help you explore suitable tutors based on your requirements and current tutor availability.`,
        },
        {
          q: `Which O Level subjects can a tutor help with?`,
          a: `Common requests include <a class="blog-link" href="/home-math-tutor-lahore">Mathematics</a>, Physics, Chemistry, Biology, English, Computer Science, Accounting, Economics, Business Studies, Urdu, Islamiyat and Pakistan Studies. Availability depends on the tutor, so please tell us the subjects you need.`,
        },
        {
          q: `What is the difference between O Level and IGCSE tutoring?`,
          a: `Both are Cambridge qualifications at a similar level, but their syllabuses and papers differ. Tell us which one the student is sitting, and ideally the exact subject syllabus, so the tutor can prepare accordingly.`,
        },
        {
          q: `Can I get a tutor for just one O Level subject?`,
          a: `Yes. Many families only need support in one or two subjects. We can explore tutors for a single subject or for several, depending on what the student needs.`,
        },
        {
          q: `How much does an O Level tutor cost in Lahore?`,
          a: `Fees depend on the subject, tutor's qualifications and experience, number of weekly sessions, lesson duration and travel distance. Please discuss fee and payment arrangements before confirming tuition. For general guidance, see <a class="blog-link" href="/blog/home-tutor-cost-pakistan">how much a home tutor costs in Pakistan</a>.`,
        },
        {
          q: `Which areas of Lahore do you cover?`,
          a: `We help families in areas such as DHA, Gulberg, Johar Town, Bahria Town, Model Town, Cantt, Valencia, Wapda Town and Faisal Town, subject to tutor availability. If your area is not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">message us on WhatsApp</a> and we will confirm what is possible.`,
        },
      ]}
      areas={LAHORE_AREAS}
      relatedSubjects={[
        { name: 'Home A Level Tutors Lahore', href: '/home-a-level-tutor-lahore', icon: '🎯' },
        { name: 'Home Maths Tutors Lahore', href: '/home-math-tutor-lahore', icon: '📐' },
        { name: 'Home MDCAT Tutors Lahore', href: '/home-mdcat-tutor-lahore', icon: '🩺' },
        { name: 'Home Tutor Lahore', href: '/home-tutor-lahore', icon: '🏠' },
        { name: 'O Level Tutors Islamabad', href: '/o-level-tutor-islamabad', icon: '📚' },
        { name: 'Online Tutors', href: '/tutors?mode=online', icon: '💻' },
        { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
        { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
      ]}
      nearbyCity="Islamabad"
      canonicalUrl={url}
    />
  )
}