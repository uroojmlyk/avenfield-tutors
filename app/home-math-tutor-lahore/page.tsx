import type { Metadata } from 'next'
import SubjectLandingPage from '@/components/shared/SubjectLandingPage'
import { LAHORE_AREAS } from '@/lib/lahore-areas'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/home-math-tutor-lahore`

// NOTE: no "| Avenfield Tutors" suffix here. app/layout.tsx already appends it.
const TITLE = 'Home Maths Tutor in Lahore | O/A Level, Matric & FSc'
const DESCRIPTION =
  'Looking for a maths tutor in Lahore? Explore home tuition for O Level, A Level, IGCSE, Matric and FSc Mathematics. Share your grade, area and schedule.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'home maths tutor Lahore',
    'math tutor in Lahore',
    'mathematics tutor Lahore',
    'O Level maths tutor Lahore',
    'A Level maths tutor Lahore',
    'IGCSE maths tutor Lahore',
    'matric maths tutor Lahore',
    'FSc maths tutor Lahore',
    'additional mathematics tutor Lahore',
    'home tuition Lahore maths',
    'female maths tutor Lahore',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: TITLE,
    description: 'Explore home maths tutors in Lahore for O Level, A Level, IGCSE, Matric and FSc. Share your grade, area and preferred schedule.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Explore home maths tutors in Lahore for O Level, A Level, IGCSE, Matric and FSc. Share your grade, area and preferred schedule.',
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

export default function HomeMathTutorLahorePage() {
  return (
    <SubjectLandingPage
      subject="Mathematics"
      city="Lahore"
      slug="home-math-tutor-lahore"
      pageTitle={TITLE}
      pageDescription={DESCRIPTION}
      metaKeywords={[
        'home maths tutor Lahore',
        'math tutor in Lahore',
        'mathematics tutor Lahore',
        'O Level maths tutor Lahore',
        'A Level maths tutor Lahore',
        'IGCSE maths tutor Lahore',
        'matric maths tutor Lahore',
        'FSc maths tutor Lahore',
        'additional mathematics tutor Lahore',
        'home tuition Lahore maths',
        'female maths tutor Lahore',
      ]}
      subjectIcon="📐"
      subjectEmoji="📊"
      subjectOverview={[
        `Mathematics is usually the first subject Lahore parents look for a tutor for, and the difficulty is rarely the subject alone. A student in a Cambridge-system school in DHA or Gulberg is working towards O Level, IGCSE or A Level papers, while a Matric or FSc student follows Punjab textbooks and a different paper style. The topic names can be identical, but the questions, the expected working and the marking are not, so a tutor who suits one route can feel out of place on the other. That is why we ask about the board and syllabus before anything else.`,
        `<a class="blog-link" href="/home-tutor-lahore">Home tuition in Lahore</a> suits Mathematics well because the tutor can watch a student work through a problem, spot exactly where the method slips and correct it on the spot. Lahore is also a large city, and travel between areas such as DHA, Johar Town, Bahria Town and Model Town takes real time, so it helps to find a tutor who can reach your neighbourhood regularly. This is why we ask for your area and preferred timings at the start.`,
        `If travel is a problem, online Mathematics lessons are a practical alternative. You can browse <a class="blog-link" href="/tutors?subject=Mathematics&city=Lahore">Mathematics tutor profiles for Lahore</a>, or read why many students struggle in <a class="blog-link" href="/blog/why-students-struggle-in-o-level-a-level-mathematics">O Level and A Level Mathematics</a> to understand what to look for in a tutor.`,
      ]}
      subjectDetails={[
        `A useful first lesson is a short diagnostic rather than new content. Working through a handful of questions from different topics shows where understanding actually breaks down. Two students who both say they are weak in Maths often have very different gaps, such as algebra fundamentals for one and careless errors under time pressure for the other.`,
        `Students following Punjab textbooks benefit from a tutor who knows the exact chapters and exercise style, because board exam questions are closely tied to them. Students on Cambridge or Edexcel syllabuses need a tutor who works with past papers and mark schemes, and who teaches how to show method clearly enough to earn the marks.`,
        `For <a class="blog-link" href="/home-o-level-tutor-lahore">O Level</a> and <a class="blog-link" href="/home-a-level-tutor-lahore">A Level</a> students, Additional Mathematics, Pure Mathematics, Mechanics and Statistics each need a different approach. Practising past papers topic by topic, and not leaving them until the final weeks, lets a student see the same idea tested in several ways before sitting a full timed paper.`,
        `Whatever the board, regular short practice sets with corrected feedback work better than occasional long sessions. Ask your tutor how homework will be reviewed and how progress will be shared with you.`,
      ]}
      examBoards={[
        'Cambridge (CAIE)',
        'Edexcel',
        'BISE Lahore (Punjab Board)',
        'Federal Board',
      ]}
      targetExams={[
        'O Level',
        'IGCSE',
        'A Level (AS and A2)',
        'Matric',
        'FSc',
        'Entry Tests',
      ]}
      commonTopics={[
        'Algebra and Equations',
        'Geometry and Trigonometry',
        'Coordinate Geometry',
        'Functions and Graphs',
        'Differentiation and Integration',
        'Vectors and Matrices',
        'Sequences and Series',
        'Probability and Statistics',
        'Mechanics',
        'Additional Mathematics',
      ]}
      whyChoose={[
        `We ask for the board and syllabus first, because Cambridge, Edexcel and Punjab Board Mathematics are taught and tested differently.`,
        `We ask for your Lahore area and preferred timings so that the options we discuss are realistic to reach on a regular schedule.`,
        `You can review tutor profiles, qualifications and experience before deciding, and discuss the fee and schedule before tuition begins.`,
        `Home and online options are both available, subject to tutor availability.`,
      ]}
      faqs={[
        {
          q: `How can I find a home maths tutor in Lahore?`,
          a: `Share the student's grade, board, area and preferred timings through our <a href="/#inquiry-form" class="text-[#C43D24] hover:underline font-black">inquiry form</a> or on <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">WhatsApp</a>. We will help you explore suitable tutors based on your requirements and current tutor availability.`,
        },
        {
          q: `Which levels of Mathematics can a tutor help with?`,
          a: `Tutors can support school Mathematics, Matric and FSc, <a class="blog-link" href="/home-o-level-tutor-lahore">O Level</a> including Additional Mathematics, IGCSE, and <a class="blog-link" href="/home-a-level-tutor-lahore">A Level</a> Mathematics. Tell us the exact syllabus so the right tutor can be suggested.`,
        },
        {
          q: `Can I choose a male or female maths tutor?`,
          a: `You can tell us your preference and we will take it into account when exploring options, subject to tutor availability in your area.`,
        },
        {
          q: `How much does a maths tutor cost in Lahore?`,
          a: `Fees depend on the grade, syllabus, tutor's qualifications and experience, number of weekly sessions, lesson duration and travel distance. Please discuss the fee with the tutor or our team before confirming tuition. For general guidance, see our guide on <a class="blog-link" href="/blog/home-tutor-cost-pakistan">how much a home tutor costs in Pakistan</a>.`,
        },
        {
          q: `Is online Maths tuition available if my area is far away?`,
          a: `Yes, online lessons are an option when a suitable tutor is available. You can also <a class="blog-link" href="/tutors?mode=online">browse online tutors</a> directly.`,
        },
        {
          q: `Which areas of Lahore do you cover?`,
          a: `We help families in areas such as DHA, Gulberg, Johar Town, Bahria Town, Model Town, Cantt, Valencia, Wapda Town and Faisal Town, subject to tutor availability. If your area is not listed, <a href="https://wa.me/923095154253" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">message us on WhatsApp</a> and we will confirm what is possible.`,
        },
      ]}
      areas={LAHORE_AREAS}
      relatedSubjects={[
        { name: 'Home O Level Tutors Lahore', href: '/home-o-level-tutor-lahore', icon: '📚' },
        { name: 'Home A Level Tutors Lahore', href: '/home-a-level-tutor-lahore', icon: '🎯' },
        { name: 'Home MDCAT Tutors Lahore', href: '/home-mdcat-tutor-lahore', icon: '🩺' },
        { name: 'Home Tutor Lahore', href: '/home-tutor-lahore', icon: '🏠' },
        { name: 'Mathematics Tutors Islamabad', href: '/math-tutor-islamabad', icon: '📐' },
        { name: 'Online Tutors', href: '/tutors?mode=online', icon: '💻' },
        { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
        { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
      ]}
      nearbyCity="Islamabad"
      canonicalUrl={url}
    />
  )
}