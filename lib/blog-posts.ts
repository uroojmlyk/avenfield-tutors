



export interface BlogSection {
  heading: string
  paragraphs: string[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string        // ISO format, e.g. '2026-07-01'
  readTime: string     // e.g. '5 min read'
  category: string
  sections: BlogSection[]
}

// To add a new post: copy an existing object, give it a unique slug, and
// add it to this array. app/blog/page.tsx and app/blog/[slug]/page.tsx
// both read from here automatically — no other file needs to change.
export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-choose-the-right-online-tutor',
    title: 'How to Choose the Right Online Tutor for Your Child',
    excerpt:
      'Not all tutors are the same. Here\'s a practical checklist for picking someone who actually fits your child\'s subject, level, and learning style.',
    date: '2026-06-27', // update this to your real publish date when the post actually goes live
    readTime: '5 min read',
    category: 'Choosing a Tutor',
    sections: [
      {
        heading: 'Start with the subject and level, not just the price',
        paragraphs: [
          'It\'s tempting to compare tutors mainly by rate, but the more useful starting point is matching the tutor\'s specific experience to your child\'s exact syllabus O Level, A Level, IGCSE, or a specific exam like IELTS or MDCAT. A tutor who is excellent at teaching university-level maths isn\'t automatically the right fit for a Grade 9 student struggling with basics.',
          'Ask directly: how many students has this tutor taught at this exact level, and what results have they seen? A verified platform should make this information easy to find on the tutor\'s profile.',
        ],
      },
      {
        heading: 'Check how they explain, not just what they know',
        paragraphs: [
          'Subject knowledge matters, but teaching ability is a separate skill. A tutor can be brilliant at a subject and still struggle to explain it in a way a specific student understands. Where possible, ask for a short trial session before committing to a long-term arrangement most good tutors are happy to do this.',
          'Pay attention to whether the tutor asks questions to check understanding, or just talks through material without pausing to see if it\'s landing.',
        ],
      },
      {
        heading: 'Decide between online and home tuition early',
        paragraphs: [
          'Online tutoring offers flexibility and a wider pool of tutors to choose from, since location isn\'t a constraint. Home tuition offers in-person structure, which some younger students find easier to stay focused with. Neither is universally "better"  it depends on your child\'s learning style and your household\'s schedule.',
        ],
      },
      {
        heading: 'Verify before you commit',
        paragraphs: [
          'Look for tutors who have been manually reviewed rather than self-listed with no vetting. On Avenfield Tutors, every tutor is verified before their profile goes live, so you\'re not starting from zero when it comes to trust.',
        ],
      },
    ],
  },
  {
    slug: 'home-tuition-vs-online-tuition',
    title: 'Home Tuition vs Online Tuition: Which Is Right for You?',
    excerpt:
      'Both formats work but they work for different students and different situations. Here\'s how to decide.',
    date: '2026-07-04', // update this to your real publish date when the post actually goes live
    readTime: '4 min read',
    category: 'Learning Formats',
    sections: [
      {
        heading: 'Home tuition: structure and undivided attention',
        paragraphs: [
          'Home tuition removes the biggest distraction most students face during online learning: the temptation to multitask. A tutor physically present in the room tends to keep younger students more focused, and it also makes hands-on subjects like diagrams in Biology or working through Maths problems on paper easier to walk through together.',
          'The tradeoff is availability. Home tuition is limited to tutors who can travel to your area, which narrows your options compared to online.',
        ],
      },
      {
        heading: 'Online tuition: flexibility and a wider choice of tutors',
        paragraphs: [
          'Online tutoring opens up your options to any verified tutor regardless of city useful if you\'re looking for a specialist in a less common subject, or if you\'re based outside Pakistan entirely (UAE and UK families use this a lot for O Level and A Level support).',
          'It also tends to be easier to reschedule, and sessions can be recorded for revision later, which home sessions typically can\'t offer.',
        ],
      },
      {
        heading: 'A simple way to decide',
        paragraphs: [
          'If your child is younger, gets distracted easily by screens, or the subject is very hands-on, home tuition is usually the safer starting point. If your child is a self-directed learner, needs a specific specialist, or you\'re not based near a large city, online tuition is likely the better fit.',
          'Many families end up using a mix home tuition for core subjects like Mathematics, and online tuition for exam-specific coaching like IELTS or MDCAT prep.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-prepare-for-o-level-exams',
    title: 'How to Prepare for O Level Exams: A Practical Study Guide',
    excerpt:
      'A realistic, no-fluff plan for O Level revision covering timelines, past papers, and how to actually retain what you study.',
    date: '2026-07-11', // update this to your real publish date when the post actually goes live
    readTime: '6 min read',
    category: 'Exam Preparation',
    sections: [
      {
        heading: 'Start with past papers, not the textbook',
        paragraphs: [
          'The single highest-leverage thing an O Level student can do is work through 5-10 years of past papers per subject before diving deep into revision. This shows you exactly what examiners actually ask, which topics repeat, and where you\'re currently weak instead of guessing which chapters "feel" important.',
          'CAIE (Cambridge) publishes past papers and mark schemes publicly, and a good tutor will already have a structured set organized by topic.',
        ],
      },
      {
        heading: 'Build a topic-by-topic weakness list',
        paragraphs: [
          'After your first pass through past papers, write down every topic where you lost marks not just "I struggled with this paper," but specifically which concept. Rank these by how often they appear in past papers. This becomes your actual revision priority list, rather than revising every chapter equally.',
        ],
      },
      {
        heading: 'Use active recall, not just re-reading',
        paragraphs: [
          'Re-reading notes feels productive but is one of the least effective ways to retain information for an exam. Active recall closing the book and trying to write out what you remember, then checking against your notes builds much stronger retention, even though it feels harder in the moment.',
          'Spacing this out over several weeks (rather than cramming in the final days) also matters more than most students expect.',
        ],
      },
      {
        heading: 'Time yourself on full papers close to the exam',
        paragraphs: [
          'In the final 2-3 weeks, shift from topic practice to full timed papers under exam conditions. This builds the pacing instinct you need on exam day many students who know the content still lose marks simply because they run out of time on the last section.',
        ],
      },
      {
        heading: 'Get feedback on your answers, not just the marks',
        paragraphs: [
          'A mark alone tells you what you got wrong, not why. Working with a tutor to review exactly where marks were lost wrong method vs. careless mistake vs. missing knowledge  makes each past paper far more useful than doing it alone.',
        ],
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}