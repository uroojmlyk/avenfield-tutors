import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'
import { LAHORE_AREAS } from '@/lib/lahore-areas'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/home-mdcat-tutor-lahore`

// NOTE: no "| Avenfield Tutors" suffix here. app/layout.tsx already appends it.
const TITLE = 'MDCAT Tutor in Lahore | Home & Online Preparation'
const DESCRIPTION =
  'Find an MDCAT tutor in Lahore for Biology, Chemistry, Physics, English and Logical Reasoning. Explore home or online preparation to suit your schedule.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'MDCAT tutor Lahore',
    'MDCAT preparation Lahore',
    'home MDCAT tutor Lahore',
    'MDCAT biology tutor Lahore',
    'MDCAT chemistry tutor Lahore',
    'MDCAT physics tutor Lahore',
    'MDCAT online tutor Lahore',
    'MDCAT tuition Lahore',
    'entry test tutor Lahore',
    'pre-medical tutor Lahore',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: TITLE,
    description: 'Explore MDCAT tutors in Lahore for Biology, Chemistry, Physics, English and Logical Reasoning, with home or online lessons.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Explore MDCAT tutors in Lahore for Biology, Chemistry, Physics, English and Logical Reasoning, with home or online lessons.',
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

export default function HomeMdcatTutorLahorePage() {
  return (
    <SubjectLandingPage
      subject="MDCAT"
      city="Lahore"
      slug="home-mdcat-tutor-lahore"
      pageTitle={TITLE}
      pageDescription={DESCRIPTION}
      metaKeywords={[
        'MDCAT tutor Lahore',
        'MDCAT preparation Lahore',
        'home MDCAT tutor Lahore',
        'MDCAT biology tutor Lahore',
        'MDCAT chemistry tutor Lahore',
        'MDCAT physics tutor Lahore',
        'MDCAT online tutor Lahore',
        'MDCAT tuition Lahore',
        'entry test tutor Lahore',
        'pre-medical tutor Lahore',
      ]}
      subjectIcon="🩺"
      subjectEmoji="🧬"
      subjectOverview={[
        `MDCAT, the Medical and Dental College Admission Test, is the national entry test for MBBS and BDS admissions in Pakistan, and it is a major step for Lahore students who want a place in one of the city's medical or dental colleges. The test covers Biology, Chemistry, Physics, English and Logical Reasoning, and it rewards students who can recall and apply a lot of material accurately under time pressure. That is a different skill from the FSc or A Level exams students may be sitting at the same time.`,
        `Because the exam date, pattern, syllabus and registration rules can change from year to year, please always confirm them on the official PMDC website. We do not list dates on this page so that you are never relying on out-of-date information. Students taking Cambridge qualifications should also check the equivalence requirements with the relevant authorities before applying. Our <a class="blog-link" href="/blog/mdcat-preparation-guide-islamabad-rawalpindi">MDCAT preparation guide</a> covers study planning in more detail.`,
        `<a class="blog-link" href="/home-tutor-lahore">Home tuition in Lahore</a> and online lessons are both useful. Home lessons suit students who prefer face-to-face revision, while online lessons help when the best subject tutor is not in your part of Lahore. Tell us your area, your subjects of concern and your timetable, and we will explore suitable tutors from there. You can also <a class="blog-link" href="/tutors?subject=MDCAT&city=Lahore">browse MDCAT tutor profiles</a> directly.`,
      ]}
      subjectDetails={[
        `MDCAT is multiple-choice, so progress depends on timed practice and on understanding why wrong options are wrong. A good tutor builds in regular timed question sets, reviews every mistake and tracks which topics keep costing marks.`,
        `Most students are strong in one or two subjects and weak in the others. Subject-wise tutoring lets a student put the most effort into the weakest area, for example Physics numerical problems or Chemistry concepts, without paying for sessions they do not need.`,
        `Students preparing from <a class="blog-link" href="/home-a-level-tutor-lahore">A Level</a> or FSc often need help bridging the gap between school syllabus and the entry-test syllabus. A tutor should compare the two clearly so that nothing is missed and time is not wasted on content the test does not cover.`,
        `English and Logical Reasoning are often left until last, yet they are quick marks for well-prepared students. Ask your tutor how these sections will fit into the study plan.`,
      ]}
      examBoards={[
        'PMDC (MDCAT)',
        'Punjab Board FSc Pre-Medical',
        'Cambridge A Level Sciences',
      ]}
      targetExams={[
        'MDCAT',
        'FSc Pre-Medical',
        'A Level Sciences',
        'Entry Tests',
      ]}
      commonTopics={[
        'Biology',
        'Chemistry',
        'Physics',
        'English',
        'Logical Reasoning',
        'Timed MCQ Practice',
        'Mock Tests',
        'Weak-Topic Revision',
      ]}
      whyChoose={[
        `We ask which subjects feel weakest and when the student plans to sit the test, so the plan matches the time available.`,
        `Tutors can be explored subject by subject, so students can focus on the area that needs the most improvement.`,
        `You can review tutor profiles, qualifications and experience before deciding, and discuss the fee and schedule before tuition begins.`,
        `Home tuition in your Lahore area and online options are both available, subject to tutor availability.`,
      ]}
      faqs={[
        {
          q: `How can I find an MDCAT tutor in Lahore?`,
          a: `Share the student's current level (FSc or A Level), subjects of concern, area and preferred timings through our <a href="/#inquiry-form" class="text-[#C43D24] hover:underline font-black">inquiry form</a> or on <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">WhatsApp</a>. We will help you explore suitable tutors based on your requirements and tutor availability.`,
        },
        {
          q: `Which subjects does MDCAT cover?`,
          a: `MDCAT covers Biology, Chemistry, Physics, English and Logical Reasoning. Please check the latest pattern, weightage and syllabus on the official PMDC website, because these can change between years.`,
        },
        {
          q: `Are home and online MDCAT tutors available?`,
          a: `Yes, both options are available subject to tutor availability. Online lessons can be helpful if the best subject tutor is not in your part of Lahore.`,
        },
        {
          q: `Can A Level students prepare for MDCAT?`,
          a: `Yes, but students with Cambridge qualifications should check the equivalence requirements with the relevant authorities before applying. A tutor can then help bridge the syllabus. See our page on <a class="blog-link" href="/home-a-level-tutor-lahore">A Level tutors in Lahore</a> for related support.`,
        },
        {
          q: `How much does MDCAT tuition cost in Lahore?`,
          a: `Fees depend on the number of subjects, tutor's qualifications and experience, number of weekly sessions, lesson duration and teaching mode. Please discuss fee and payment arrangements before confirming tuition. For general guidance, see <a class="blog-link" href="/blog/home-tutor-cost-pakistan">how much a home tutor costs in Pakistan</a>.`,
        },
        {
          q: `Which areas of Lahore do you cover?`,
          a: `We help families in areas such as DHA, Gulberg, Johar Town, Bahria Town, Model Town, Cantt, Valencia, Wapda Town and Faisal Town, subject to tutor availability. If your area is not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">message us on WhatsApp</a> and we will confirm what is possible.`,
        },
      ]}
      areas={LAHORE_AREAS}
      relatedSubjects={[
        { name: 'Home A Level Tutors Lahore', href: '/home-a-level-tutor-lahore', icon: '🎯' },
        { name: 'Home O Level Tutors Lahore', href: '/home-o-level-tutor-lahore', icon: '📚' },
        { name: 'Home Maths Tutors Lahore', href: '/home-math-tutor-lahore', icon: '📐' },
        { name: 'Home Tutor Lahore', href: '/home-tutor-lahore', icon: '🏠' },
        { name: 'MDCAT Tutors Islamabad', href: '/mdcat-tutor-islamabad', icon: '🩺' },
        { name: 'Online Tutors', href: '/tutors?mode=online', icon: '💻' },
        { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
        { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
      ]}
      nearbyCity="Islamabad"
      canonicalUrl={url}
    />
  )
}