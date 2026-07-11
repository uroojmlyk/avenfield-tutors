

'use client'

import React from 'react'
import Link from 'next/link'
import { useState, useMemo } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// SEO NOTE: Metadata is in layout.tsx
// ─────────────────────────────────────────────────────────────────────────────

// ── General subjects grid ──
const SUBJECTS = [
  { label: 'O & A Level',         icon: '📖', bg: 'bg-[#2E4F5E]', t: 'text-[#E8C86A]' },
  { label: 'Mathematics',         icon: '📐', bg: 'bg-[#E8C86A]', t: 'text-[#2E4F5E]' },
  { label: 'Physics',             icon: '⚗️', bg: 'bg-[#3A9E8F]', t: 'text-white'     },
  { label: 'Chemistry',           icon: '🧪', bg: 'bg-[#E05C42]', t: 'text-white'     },
  { label: 'Biology',             icon: '🧬', bg: 'bg-[#3A9E8F]', t: 'text-white'     },
  { label: 'Science',             icon: '🔬', bg: 'bg-[#E8934A]', t: 'text-white'     },
  { label: 'English',             icon: '✍️', bg: 'bg-[#E8C86A]', t: 'text-[#2E4F5E]' },
  { label: 'Urdu',                icon: 'اردو', bg: 'bg-[#2E4F5E]', t: 'text-[#E8C86A]' },
  { label: 'Pakistan Studies',    icon: '🇵🇰', bg: 'bg-[#3A9E8F]', t: 'text-white'     },
  { label: 'Islamic Studies',     icon: '☪️',  bg: 'bg-[#E8C86A]', t: 'text-[#2E4F5E]' },
  { label: 'Computer Science',    icon: '💻', bg: 'bg-[#2E4F5E]', t: 'text-[#E8C86A]' },
  { label: 'Economics',           icon: '📊', bg: 'bg-[#E8934A]', t: 'text-white'     },
  { label: 'Statistics',          icon: '📈', bg: 'bg-[#E05C42]', t: 'text-white'     },
  { label: 'Accounting',          icon: '🧾', bg: 'bg-[#E05C42]', t: 'text-white'     },
  { label: 'Political Science',   icon: '🏛️', bg: 'bg-[#3A9E8F]', t: 'text-white'     },
  { label: 'Law',                 icon: '⚖️', bg: 'bg-[#E8C86A]', t: 'text-[#2E4F5E]' },
  { label: 'History & Geography', icon: '🗺️', bg: 'bg-[#2E4F5E]', t: 'text-[#E8C86A]' },
  { label: 'Quran & Arabic',      icon: '📿', bg: 'bg-[#3A9E8F]', t: 'text-white'     },
  { label: 'CSS / PMS',           icon: '🎓', bg: 'bg-[#2E4F5E]', t: 'text-[#E8C86A]' },
  { label: 'PPSC / FPSC',         icon: '📋', bg: 'bg-[#E8934A]', t: 'text-white'     },
  { label: 'MDCAT',               icon: '🏥', bg: 'bg-[#E05C42]', t: 'text-white'     },
  { label: 'IELTS',               icon: '🌍', bg: 'bg-[#3A9E8F]', t: 'text-white'     },
  { label: 'Cadet College Prep',  icon: '🎖️', bg: 'bg-[#E8C86A]', t: 'text-[#2E4F5E]' },
]

// ── Specialised exam data ──
const CSS_COMPULSORY = [
  'English Essay', 'Precis & Composition', 'General Science & Ability',
  'Current Affairs', 'Pakistan Affairs', 'Islamic Studies',
]
const CSS_OPTIONAL = [
  'Accountancy & Auditing', 'Economics', 'Computer Science', 'Political Science',
  'International Relations', 'Physics', 'Chemistry', 'Applied Mathematics',
  'Pure Mathematics', 'Statistics', 'Geology', 'Business Administration',
  'Public Administration', 'Governance & Public Policies',
  'Town Planning & Urban Management', 'History of Pakistan & India',
  'Islamic History & Culture', 'British History', 'European History',
  'History of USA', 'Gender Studies', 'Environmental Sciences',
  'Agriculture & Forestry', 'Botany', 'Zoology', 'English Literature',
  'Urdu Literature', 'Law', 'Constitutional Law', 'International Law',
  'Muslim Law & Jurisprudence', 'Mercantile Law', 'Criminology', 'Philosophy',
  'Journalism & Mass Communication', 'Psychology', 'Geography', 'Sociology',
  'Anthropology', 'Punjabi', 'Sindhi', 'Pashto', 'Balochi', 'Persian', 'Arabic',
]
const CADET_COLLEGES = [
  'Cadet College Hasanabdal', 'Cadet College Petaro', 'Cadet College Kohat',
  'Cadet College Jhelum Valley', 'Cadet College Larkana',
  'Cadet College Uch Sharif', 'Cadet College Fateh Jang',
  'Cadet College Warsak', 'PAF College Sargodha',
  'PAF College Lower Topa', 'Pakistan Navy College Ormara',
]
const ATCHISON_LEVELS = ['KG-1 (K1)', 'KG-2 (K2)', 'Entry-2 (E2)']
const ENGLISH_PROFICIENCY = [
  'IELTS', 'TOEFL', 'PTE Academic', 'Duolingo English Test',
  'Cambridge B2 First', 'Cambridge C1 Advanced', 'Cambridge C2 Proficiency',
  'OET', 'LanguageCert International ESOL', 'Trinity ISE',
  'Michigan English Test', 'CELPIP',
]
const MEDICAL_EXAMS = ['MDCAT', 'PLAB-I', 'PLAB-II', 'ALS', 'MRCEM', 'MBBS Entry Test']
const PMS_SUBJECTS = [
  'English Essay', 'General Knowledge', 'Current Affairs',
  'Pakistan Affairs', 'Islamiat', 'Economics',
  'Political Science', 'History', 'Geography',
]

// ── Exam categories for tab panel ──
const EXAM_CATEGORIES = [
  {
    id: 'css',
    label: 'CSS',
    emoji: '🏛️',
    title: 'CSS — Civil Services of Pakistan',
    subtitle: 'Compulsory & Optional Subjects',
    accentBg: 'bg-[#1a2f3a]',
    accentText: 'text-[#E8C86A]',
    sections: [
      { heading: 'Compulsory Subjects', items: CSS_COMPULSORY },
      { heading: `Optional Subjects (${CSS_OPTIONAL.length})`, items: CSS_OPTIONAL },
    ],
  },
  {
    id: 'pms',
    label: 'PMS',
    emoji: '📋',
    title: 'PMS / PPSC / FPSC',
    subtitle: 'Provincial & Federal Service Preparation',
    accentBg: 'bg-[#E8934A]',
    accentText: 'text-white',
    sections: [
      { heading: 'PMS Core Subjects', items: PMS_SUBJECTS },
      { heading: 'PPSC / FPSC Topics', items: ['General Knowledge', 'English', 'Pakistan Studies', 'Islamic Studies', 'Arithmetic', 'Computer Basics', 'Current Affairs', 'Past Papers Practice'] },
    ],
  },
  {
    id: 'english',
    label: 'English Proficiency',
    emoji: '🌍',
    title: 'English Proficiency Exams',
    subtitle: 'International Language Certifications',
    accentBg: 'bg-[#3A9E8F]',
    accentText: 'text-white',
    sections: [
      { heading: 'All Supported Exams', items: ENGLISH_PROFICIENCY },
    ],
  },
  {
    id: 'medical',
    label: 'Medical',
    emoji: '🏥',
    title: 'Medical Exams',
    subtitle: 'Entry & Licensing Examinations',
    accentBg: 'bg-[#E05C42]',
    accentText: 'text-white',
    sections: [
      { heading: 'Supported Exams', items: MEDICAL_EXAMS },
    ],
  },
  {
    id: 'cadet',
    label: 'Cadet College',
    emoji: '🎖️',
    title: 'Cadet College Entry Tests',
    subtitle: 'Top Military & Cadet Institutions',
    accentBg: 'bg-[#2E4F5E]',
    accentText: 'text-[#E8C86A]',
    sections: [
      { heading: 'Cadet Colleges', items: CADET_COLLEGES },
      { heading: 'Atchison College Levels', items: ATCHISON_LEVELS },
    ],
  },
]

// ── Utility components ──
function Eyebrow({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-2 mb-4" aria-hidden="true">
      <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
      <span className={`text-[0.68rem] font-black uppercase tracking-[0.25em] ${light ? 'text-[#E8C86A]' : 'text-[#E05C42]'}`}>{text}</span>
      <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
    </div>
  )
}

function Wiggle({ color = '#E8C86A' }: { color?: string }) {
  return (
    <svg viewBox="0 0 160 10" fill="none" className="absolute -bottom-1.5 left-0 w-full h-3 pointer-events-none" aria-hidden="true">
      <path d="M2 5 C20 1, 38 9, 56 5 C74 1, 92 9, 110 5 C128 1, 146 9, 158 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

// ── Subject search + tab explorer (client component) ──
function SubjectsSection() {
  const [search, setSearch]     = useState('')
  const [activeTab, setActiveTab] = useState('css')

  const ALL_FLAT: { label: string; category: string }[] = [
    ...SUBJECTS.map(s => ({ label: s.label, category: 'General Subjects' })),
    ...CSS_COMPULSORY.map(s => ({ label: s, category: 'CSS Compulsory' })),
    ...CSS_OPTIONAL.map(s => ({ label: s, category: 'CSS Optional' })),
    ...PMS_SUBJECTS.map(s => ({ label: s, category: 'PMS' })),
    ...CADET_COLLEGES.map(s => ({ label: s, category: 'Cadet College' })),
    ...ATCHISON_LEVELS.map(s => ({ label: s, category: 'Atchison Entry Test' })),
    ...ENGLISH_PROFICIENCY.map(s => ({ label: s, category: 'English Proficiency' })),
    ...MEDICAL_EXAMS.map(s => ({ label: s, category: 'Medical Exams' })),
  ]

  const filtered = useMemo(() => {
    if (!search.trim()) return []
    const q = search.toLowerCase()
    return ALL_FLAT.filter(i =>
      i.label.toLowerCase().includes(q) || i.category.toLowerCase().includes(q)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  const activeCategory = EXAM_CATEGORIES.find(c => c.id === activeTab)!

  return (
    <section
      aria-labelledby="subjects-heading"
      className="bg-[#2E4F5E] py-16 sm:py-24 px-4 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-10">
          <Eyebrow text="Academic Coverage" light />
          <h2 id="subjects-heading" className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-white mb-4">
            Tutors for Every Subject at Avenfield 📚
          </h2>
          <p className="text-[#7da8b8] text-[0.93rem] max-w-md mx-auto font-semibold mb-8">
            From school fundamentals to CSS, MDCAT, and international certifications we cover it all.
          </p>

          {/* Search bar */}
          <div className="relative max-w-xl mx-auto">
            <label htmlFor="subject-search" className="sr-only">Search for a subject</label>
            <input
              id="subject-search"
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search any subject — IELTS, CSS, MDCAT, Cadet College..."
              className="w-full px-5 py-3.5 pl-12 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder:text-white/40 font-semibold text-[0.88rem] focus:outline-none focus:border-[#E8C86A] focus:bg-white/15 transition-all"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            {search && (
              <button
                onClick={() => setSearch('')}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xl leading-none transition-colors"
              >
                ×
              </button>
            )}
          </div>

          {/* Search results */}
          {search.trim() && (
            <div className="max-w-xl mx-auto mt-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 text-left">
              {filtered.length === 0 ? (
                <p className="text-white/50 text-[0.82rem] font-semibold text-center py-2">No subjects found. Try a different keyword.</p>
              ) : (
                <>
                  <p className="text-[#E8C86A] text-[0.65rem] font-black uppercase tracking-widest mb-3">
                    {filtered.length} result{filtered.length !== 1 ? 's' : ''}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {filtered.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={`/tutors?subject=${encodeURIComponent(item.label)}`}
                          className="flex items-center justify-between px-3.5 py-2.5 bg-white/8 hover:bg-[#E8C86A]/20 rounded-lg border border-white/10 hover:border-[#E8C86A]/50 transition-all"
                        >
                          <span className="text-white text-[0.82rem] font-bold">{item.label}</span>
                          <span className="text-white/40 text-[0.65rem] font-bold">{item.category} →</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>

        {/* General subjects grid + specialised tabs — only when not searching */}
        {!search.trim() && (
          <>
            {/* General subjects */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-14">
              {SUBJECTS.map(({ label, icon, bg, t }) => (
                <Link
                  key={label}
                  href={`/tutors?subject=${encodeURIComponent(label)}`}
                  aria-label={`Find ${label} tutors at Avenfield Tutors`}
                  className="group flex items-center gap-3 p-3.5 bg-white/8 rounded-xl border-2 border-white/10 hover:border-[#E8C86A] hover:bg-white/15 hover:shadow-[3px_3px_0_0_#E8C86A] hover:-translate-y-0.5 transition-all duration-150"
                >
                  <span className={`w-9 h-9 rounded-lg ${bg} ${t} border-2 border-white/30 flex items-center justify-center text-base flex-shrink-0 group-hover:rotate-[-8deg] transition-transform duration-150`} aria-hidden="true">
                    {icon}
                  </span>
                  <span className="text-[0.8rem] font-black text-white group-hover:text-[#E8C86A] transition-colors leading-tight">
                    {label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Specialised exam tab explorer */}
            <div>
              <p className="text-[#E8C86A] text-[0.68rem] font-black uppercase tracking-[0.22em] mb-5 text-center">
                Specialised Exam Preparation
              </p>

              {/* Tab buttons */}
              <div className="flex flex-wrap justify-center gap-2 mb-6" role="tablist" aria-label="Exam categories">
                {EXAM_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={activeTab === cat.id}
                    aria-controls={`tab-panel-${cat.id}`}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-[0.75rem] font-black border-2 transition-all duration-150 ${
                      activeTab === cat.id
                        ? 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]'
                        : 'bg-white/8 text-white border-white/15 hover:border-[#E8C86A]/60 hover:bg-white/15'
                    }`}
                  >
                    <span aria-hidden="true">{cat.emoji}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>

              {/* Active tab panel */}
              <div
                id={`tab-panel-${activeCategory.id}`}
                role="tabpanel"
                aria-label={activeCategory.title}
                className="bg-white/8 rounded-2xl border-2 border-white/15 overflow-hidden"
              >
                <div className={`${activeCategory.accentBg} px-6 py-4 flex items-center gap-3`}>
                  <span className="text-2xl" aria-hidden="true">{activeCategory.emoji}</span>
                  <div>
                    <p className={`font-black text-[0.95rem] ${activeCategory.accentText}`}>{activeCategory.title}</p>
                    <p className="text-white/60 text-[0.7rem] font-bold mt-0.5">{activeCategory.subtitle}</p>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-6">
                  {activeCategory.sections.map(section => (
                    <div key={section.heading}>
                      <h3 className="text-[#E8C86A] text-[0.65rem] font-black uppercase tracking-wider mb-3">
                        {section.heading}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {section.items.map(s => (
                          <Link
                            key={s}
                            href={`/tutors?subject=${encodeURIComponent(s)}`}
                            aria-label={`Find ${s} tutors`}
                            className="inline-flex items-center px-3.5 py-2 bg-white/10 hover:bg-[#E8C86A] hover:text-[#2E4F5E] text-white text-[0.75rem] font-bold rounded-xl border border-white/20 hover:border-[#E8C86A] transition-all duration-150"
                          >
                            {s}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/tutors"
            aria-label="Browse all verified tutors at Avenfield Tutors"
            className="inline-flex items-center gap-2 text-[0.88rem] font-black text-[#2E4F5E] bg-[#E8C86A] border-2 border-[#2E4F5E] px-6 py-3 rounded-xl shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150"
          >
            Browse All Tutors by Subject →
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── FAQ Schema Component ──
function FAQSchema() {
  const faqs = [
    {
      question: 'What tutoring services do you offer?',
      answer: 'We offer comprehensive online tutoring and home tuition services across Pakistan and worldwide. Our services cover O Level, A Level, IGCSE, GCSE, IELTS, MDCAT, CSS, PMS, PPSC, FPSC, and 50+ academic subjects including Mathematics, Physics, Chemistry, Biology, English, Urdu, Quran, and more.'
    },
    {
      question: 'Do you provide home tuition in Pakistan?',
      answer: 'Yes, we provide home tuition services in Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, and other major cities across Pakistan. Our verified home tutors visit your residence for personalized, face-to-face learning sessions.'
    },
    {
      question: 'Do you offer online tutoring services?',
      answer: 'Absolutely. We offer online tutoring worldwide through live video sessions, interactive whiteboards, and screen sharing. Our online tutors are available for all subjects and exams, providing flexible scheduling and recorded sessions for revision.'
    },
    {
      question: 'Which cities do you cover for home tuition?',
      answer: 'We provide home tuition in Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, and other major cities across Pakistan. Our online tutoring services are available globally including UK, USA, Canada, Australia, UAE, and Europe.'
    },
    {
      question: 'Are your tutors verified and qualified?',
      answer: 'Yes, all tutors at Avenfield Tutors are manually verified. We screen their qualifications, teaching experience, and subject expertise. Only qualified educators with proven teaching experience are approved to teach on our platform.'
    },
    {
      question: 'How do I book a tutor?',
      answer: 'Booking a tutor is simple. Browse our tutor directory, filter by subject, city, and learning mode (online or home), review tutor profiles, and connect directly via WhatsApp. You can start learning the same day with no long forms or waiting periods.'
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── Breadcrumb Schema ──
function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://avenfieldtutors.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tutoring Services',
        item: 'https://avenfieldtutors.com/services'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main page export
// ─────────────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <div className="text-[#2E4F5E] overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>

      {/* JSON-LD Schemas */}
      <BreadcrumbSchema />
      <FAQSchema />

      {/* ══════════════════════════════════════════════════════
          §1  HERO — SEO Optimized H1 with Keyword-Rich Paragraph
      ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="services-hero-heading"
        className="bg-[#FFFDF7] relative pt-14 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-8 overflow-hidden"
      >
        <div aria-hidden="true" className="absolute top-0 right-0 w-72 h-72 sm:w-[450px] sm:h-[450px] rounded-full opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #3A9E8F, transparent 70%)', transform: 'translate(35%,-25%)' }} />

        <div className="relative max-w-4xl mx-auto text-center">
          <Eyebrow text="Avenfield Tutors Services" />

          {/* Social proof pill */}
          <div className="inline-flex items-center gap-2 bg-[#E8C86A]/30 border-2 border-[#E8C86A] text-[#2E4F5E] text-[0.74rem] font-black px-4 py-1.5 rounded-full mb-6 shadow-[2px_2px_0_0_#d4b558]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E05C42] animate-pulse" aria-hidden="true" />
            500+ Verified Tutors · 50+ Subjects · 15+ Countries
          </div>

          {/* H1 — Only ONE H1 on the page */}
          <h1 id="services-hero-heading" className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] font-black leading-[1.07] tracking-[-0.025em] text-[#2E4F5E] mb-6">
            Online &amp; Home Tutoring Services in Pakistan
          </h1>

          {/* Keyword-Rich Intro Paragraph (120-180 words) */}
          <div className="text-[#4a6a78] text-[0.95rem] sm:text-[1.02rem] leading-[1.75] mb-8 max-w-2xl mx-auto font-semibold space-y-3">
            <p>
              <Link href="/" className="font-black text-[#2E4F5E]">Avenfield Tutors</Link> provides professional{' '}
              <Link href="/tutors?mode=online" className="text-[#E05C42] hover:underline font-black">online tutoring</Link> and{' '}
              <Link href="/tutors?mode=home" className="text-[#E05C42] hover:underline font-black">home tuition services</Link> across{' '}
              <Link href="/" className="text-[#E05C42] hover:underline font-black">Pakistan</Link>. We connect students with{' '}
              <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">verified tutors</Link> for{' '}
              <Link href="/tutors?subject=O%20Level" className="text-[#E05C42] hover:underline font-black">O Level</Link>,{' '}
              <Link href="/tutors?subject=A%20Level" className="text-[#E05C42] hover:underline font-black">A Level</Link>,{' '}
              <Link href="/tutors?subject=IGCSE" className="text-[#E05C42] hover:underline font-black">IGCSE</Link>,{' '}
              <Link href="/tutors?subject=IELTS" className="text-[#E05C42] hover:underline font-black">IELTS</Link>,{' '}
              <Link href="/tutors?subject=MDCAT" className="text-[#E05C42] hover:underline font-black">MDCAT</Link>, and{' '}
              <Link href="/tutors?subject=CSS%20%2F%20PMS" className="text-[#E05C42] hover:underline font-black">CSS</Link> exam preparation.
            </p>
            <p>
              Whether you need{' '}
              <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">online tutoring</Link> from anywhere in the world or prefer{' '}
              <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">home tuition</Link> in{' '}
              <Link href="/tutors?city=Lahore" className="text-[#E05C42] hover:underline font-black">Lahore</Link>,{' '}
              <Link href="/tutors?city=Karachi" className="text-[#E05C42] hover:underline font-black">Karachi</Link>, or{' '}
              <Link href="/tutors?city=Islamabad" className="text-[#E05C42] hover:underline font-black">Islamabad</Link>, our{' '}
              <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">qualified tutors</Link> provide personalized{' '}
              <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">private tutoring</Link> designed for your success.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/tutors"
              aria-label="Find a verified tutor at Avenfield Tutors"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E05C42] text-white font-black rounded-xl border-2 border-[#a83c2a] shadow-[0_4px_0_0_#a83c2a] hover:shadow-[0_2px_0_0_#a83c2a] hover:translate-y-[2px] transition-all duration-150 text-[0.92rem]"
            >
              Find My Tutor →
            </Link>
            <Link
              href="/become-tutor"
              aria-label="Apply to become a tutor at Avenfield Tutors"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#2E4F5E] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[0_3px_0_0_#2E4F5E] hover:shadow-[0_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150 text-[0.92rem]"
            >
              Teach at Avenfield
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §2  TRUST STRIP
      ══════════════════════════════════════════════════════ */}
      <div className="bg-[#2E4F5E] py-4 px-4 sm:px-8" aria-label="Key stats">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {['500+ Verified Tutors', '50+ Subjects', '15+ Countries', '24hr Response', 'Free Consultation'].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-[0.8rem] font-bold text-[#E8C86A] whitespace-nowrap">
              <span className="w-4 h-4 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.58rem] font-black flex-shrink-0" aria-hidden="true">✓</span>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          §3  ONLINE vs HOME TUTORING — H2 SEO Optimized
      ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="learning-modes-heading"
        className="bg-[#FFFDF7] py-16 sm:py-24 px-4 sm:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Eyebrow text="How We Help" />
            <h2 id="learning-modes-heading" className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-[#2E4F5E] mb-4">
              Online Tutoring &amp; Home Tuition Services 🎓
            </h2>
            <p className="text-[#4a6a78] text-[0.93rem] max-w-lg mx-auto font-semibold leading-relaxed">
              Choose the mode that works for you. Both include verified tutors and personalised lesson plans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Online tutoring card */}
            <article className="group bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-7 hover:-translate-y-1 hover:shadow-[5px_7px_0_0_#2E4F5E] transition-all duration-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#3A9E8F] border-2 border-[#2E4F5E] flex items-center justify-center text-2xl shadow-[2px_2px_0_0_#2E4F5E] group-hover:rotate-[-6deg] transition-transform duration-200" aria-hidden="true">💻</div>
                <div>
                  <h3 className="text-[1.1rem] font-black text-[#2E4F5E]">Online Tutoring</h3>
                  <p className="text-[0.74rem] font-bold text-[#3A9E8F]">Learn from anywhere in the world</p>
                </div>
              </div>
              <p className="text-[#4a6a78] text-[0.86rem] font-semibold leading-relaxed mb-6">
                Live one-on-one sessions built around your curriculum. Whether you're in Pakistan, UAE, UK or Canada distance is no barrier to quality education at Avenfield Tutors.
              </p>
              <ul className="flex flex-col gap-2.5 mb-7" aria-label="Online tutoring features">
                {[
                  'Live video sessions (Zoom, Google Meet, etc.)',
                  'Interactive whiteboard & screen sharing',
                  'Session recordings available on request',
                  'Flexible scheduling — morning, evening, weekends',
                  'Progress tracking & study materials provided',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-lg bg-[#3A9E8F] border border-[#2E4F5E] flex items-center justify-center text-white text-[0.6rem] font-black flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                    <span className="text-[#4a6a78] text-[0.83rem] font-semibold">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/tutors?mode=online"
                aria-label="Find online tutors at Avenfield Tutors"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3A9E8F] text-white text-[0.84rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[2px] transition-all duration-150"
              >
                Find Online Tutors →
              </Link>
            </article>

            {/* Home tutoring card */}
            <article className="group bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-7 hover:-translate-y-1 hover:shadow-[5px_7px_0_0_#2E4F5E] transition-all duration-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#E8C86A] border-2 border-[#2E4F5E] flex items-center justify-center text-2xl shadow-[2px_2px_0_0_#2E4F5E] group-hover:rotate-[-6deg] transition-transform duration-200" aria-hidden="true">🏠</div>
                <div>
                  <h3 className="text-[1.1rem] font-black text-[#2E4F5E]">Home Tutoring</h3>
                  <p className="text-[0.74rem] font-bold text-[#E8934A]">A qualified tutor comes to you</p>
                </div>
              </div>
              <p className="text-[#4a6a78] text-[0.86rem] font-semibold leading-relaxed mb-6">
                Prefer face to face learning? Our home tutors visit your residence across Pakistan for hands on, personalised sessions in a comfortable, distraction-free environment.
              </p>
              <ul className="flex flex-col gap-2.5 mb-7" aria-label="Home tutoring features">
                {[
                  'Available in Islamabad, Rawalpindi, Lahore, Karachi',
                  'Tutor selected based on your area & subject',
                  'Consistent weekly schedule',
                  'Parents can sit in on sessions',
                  'Textbook-aligned teaching',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-lg bg-[#E8C86A] border border-[#2E4F5E] flex items-center justify-center text-[#2E4F5E] text-[0.6rem] font-black flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                    <span className="text-[#4a6a78] text-[0.83rem] font-semibold">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/tutors?mode=home"
                aria-label="Find home tutors at Avenfield Tutors"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E8C86A] text-[#2E4F5E] text-[0.84rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[2px] transition-all duration-150"
              >
                Find Home Tutors →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §4  SUBJECTS + SEARCH
      ══════════════════════════════════════════════════════ */}
      <SubjectsSection />

      {/* ══════════════════════════════════════════════════════
          §5  WHY AVENFIELD TUTORS — H2 SEO Optimized
      ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="why-avenfield-heading"
        className="bg-[#E8C86A] py-16 sm:py-24 px-4 sm:px-8 border-y-2 border-[#2E4F5E]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Eyebrow text="Our Promise" />
            <h2 id="why-avenfield-heading" className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-[#2E4F5E] mb-4">
              Why Choose Avenfield Tutors for Online &amp; Home Tuition ✨
            </h2>
            <p className="text-[#4a6a78] text-[0.93rem] max-w-md mx-auto font-semibold leading-relaxed">
              We don't just connect you with tutors every session moves you closer to your goals.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🛡️', title: 'Verified Quality',    desc: 'Every tutor passes manual screening, qualification check, and a teaching demo before approval.' },
              { icon: '⏰', title: 'Flexible Scheduling', desc: 'Morning, evening, or weekend sessions we work around your calendar, not the other way around.' },
              { icon: '📋', title: 'Personalised Plans',  desc: 'Sessions tailored to your learning style, pace, and academic goals never cookie-cutter.' },
              { icon: '💬', title: 'Direct Contact',      desc: 'No middlemen. Chat with tutors on WhatsApp and start learning immediately same day.' },
            ].map((c) => (
              <div key={c.title} className="group bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] p-6 hover:-translate-y-0.5 hover:shadow-[4px_5px_0_0_#2E4F5E] transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-[#FFFDF7] border-2 border-[#2E4F5E] flex items-center justify-center text-2xl mb-5 shadow-[2px_2px_0_0_#2E4F5E] group-hover:rotate-[-6deg] transition-transform duration-200" aria-hidden="true">{c.icon}</div>
                <h3 className="font-black text-[0.98rem] text-[#2E4F5E] mb-2">{c.title}</h3>
                <p className="text-[#4a6a78] text-[0.82rem] font-semibold leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §6  HOW IT WORKS
      ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="how-it-works-heading"
        className="bg-[#FFFDF7] py-16 sm:py-24 px-4 sm:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Eyebrow text="Simple Process" />
            <h2 id="how-it-works-heading" className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-[#2E4F5E] mb-4">
              From First Visit to First Lesson ⚡
            </h2>
            <p className="text-[#4a6a78] text-[0.93rem] max-w-sm mx-auto font-semibold">
              Simple, fast, and frustration-free by design.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 relative">
            <div aria-hidden="true" className="hidden sm:block absolute top-[52px] left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] border-t-2 border-dashed border-[#2E4F5E] opacity-30" />
            {[
              { n: '01', emoji: '🗣️', title: 'Tell Us Your Needs',  desc: 'Share your subject, grade level, city, and preferred mode online or home.',                     bg: 'bg-[#E8C86A]' },
              { n: '02', emoji: '🎯', title: 'Get Matched',          desc: 'We recommend 2, 3 verified Avenfield tutors who fit your criteria and learning style perfectly.',  bg: 'bg-[#3A9E8F]' },
              { n: '03', emoji: '🚀', title: 'Start Learning',       desc: 'Connect on WhatsApp, schedule your first session, and begin your journey today.',                 bg: 'bg-[#E05C42]' },
            ].map((s) => (
              <div key={s.n} className="flex flex-col items-center text-center p-7 bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] hover:-translate-y-1 hover:shadow-[4px_6px_0_0_#2E4F5E] transition-all duration-200">
                <div className={`w-14 h-14 rounded-2xl ${s.bg} border-2 border-[#2E4F5E] flex items-center justify-center mb-4 shadow-[2px_2px_0_0_rgba(0,0,0,0.15)] relative z-10`} aria-hidden="true">
                  <span className="text-2xl">{s.emoji}</span>
                </div>
                <span className="text-[0.66rem] font-black text-[#4a6a78] tracking-widest mb-2">STEP {s.n}</span>
                <h3 className="font-black text-[0.98rem] text-[#2E4F5E] mb-2">{s.title}</h3>
                <p className="text-[#4a6a78] text-[0.82rem] font-semibold leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §7  STUDENT SUCCESS STORIES
      ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="testimonials-heading"
        className="bg-[#3A9E8F] py-16 sm:py-24 px-4 sm:px-8 border-y-2 border-[#2E4F5E]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Eyebrow text="Success Stories" light />
            <h2 id="testimonials-heading" className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-white">
              Students Who Transformed Their Results 🏆
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { quote: 'The online tutoring was seamless whiteboard, session recordings, the works. Went from a C to an A in 4 months.', name: 'Omar F.', role: 'A Level Student · Karachi',  init: 'OF', bg: 'bg-[#E8C86A]', t: 'text-[#2E4F5E]' },
              { quote: 'Home tutoring made all the difference for my daughter. The tutor follows her curriculum and she is finally confident in Maths.', name: 'Hina T.', role: 'Parent · Islamabad', init: 'HT', bg: 'bg-[#2E4F5E]', t: 'text-[#E8C86A]' },
              { quote: 'I needed an IELTS tutor urgently. Within 6 hours I was connected. Got my band 7.5 in just 6 weeks!', name: 'Bilal A.', role: 'Student · Lahore', init: 'BA', bg: 'bg-[#E05C42]', t: 'text-white' },
            ].map((r) => (
              <article key={r.name} className="bg-white rounded-2xl border-2 border-[#2E4F5E] p-6 flex flex-col shadow-[4px_4px_0_0_#2E4F5E] hover:-translate-y-1 hover:shadow-[4px_6px_0_0_#2E4F5E] transition-all duration-200">
                <div className="flex gap-0.5 mb-4" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#E8C86A]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[#4a6a78] text-[0.84rem] font-semibold leading-relaxed flex-1 mb-5">"{r.quote}"</blockquote>
                <div className="flex items-center gap-3 pt-4 border-t-2 border-dashed border-[#E8C86A]">
                  <div className={`w-10 h-10 rounded-xl ${r.bg} ${r.t} text-[0.72rem] font-black flex items-center justify-center border-2 border-[#2E4F5E] flex-shrink-0`} aria-hidden="true">{r.init}</div>
                  <div>
                    <p className="text-[0.84rem] font-black text-[#2E4F5E]">{r.name}</p>
                    <p className="text-[0.7rem] text-[#3A9E8F] font-bold">{r.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §8  PROFESSIONAL ONLINE & HOME TUTORING SERVICES
          — SEO Content Block (400-700 words)
      ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="professional-services-heading"
        className="bg-[#FFFDF7] py-16 sm:py-20 px-4 sm:px-8 border-y border-[#E8C86A]/30"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Eyebrow text="Our Services" />
            <h2 id="professional-services-heading" className="text-[1.8rem] sm:text-[2.2rem] font-black tracking-[-0.02em] text-[#2E4F5E]">
              Professional Online &amp; Home Tutoring Services
            </h2>
          </div>
          <div className="space-y-5 text-[#4a6a78] text-[0.9rem] sm:text-[0.95rem] leading-[1.8] font-semibold">
            <p>
              <strong className="text-[#2E4F5E]">Comprehensive Tutoring Solutions:</strong> Avenfield Tutors offers professional{' '}
              <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">online tutoring</Link> and{' '}
              <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">home tuition services</Link> designed to help students excel. Our{' '}
              <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">verified tutors</Link> are experts in{' '}
              <Link href="/tutors?subject=O%20Level" className="text-[#E05C42] hover:underline font-black">O Level</Link>,{' '}
              <Link href="/tutors?subject=A%20Level" className="text-[#E05C42] hover:underline font-black">A Level</Link>,{' '}
              <Link href="/tutors?subject=IGCSE" className="text-[#E05C42] hover:underline font-black">IGCSE</Link>,{' '}
              <Link href="/tutors?subject=GCSE" className="text-[#E05C42] hover:underline font-black">GCSE</Link>, and various other curricula.
            </p>
            <p>
              <strong className="text-[#2E4F5E]">Exam Preparation Services:</strong> We specialize in{' '}
              <Link href="/tutors?subject=IELTS" className="text-[#E05C42] hover:underline font-black">IELTS preparation</Link>,{' '}
              <Link href="/tutors?subject=MDCAT" className="text-[#E05C42] hover:underline font-black">MDCAT coaching</Link>,{' '}
              <Link href="/tutors?subject=CSS%20%2F%20PMS" className="text-[#E05C42] hover:underline font-black">CSS coaching</Link>,{' '}
              <Link href="/tutors?subject=PPSC%20%2F%20FPSC" className="text-[#E05C42] hover:underline font-black">PPSC</Link>, and{' '}
              <Link href="/tutors?subject=PPSC%20%2F%20FPSC" className="text-[#E05C42] hover:underline font-black">FPSC</Link> exam preparation. Our{' '}
              <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">qualified tutors</Link> provide targeted guidance for competitive exams, ensuring students achieve their desired scores.
            </p>
            <p>
              <strong className="text-[#2E4F5E]">Academic Subjects:</strong> We cover 50+ subjects including{' '}
              <Link href="/tutors?subject=Mathematics" className="text-[#E05C42] hover:underline font-black">Mathematics</Link>,{' '}
              <Link href="/tutors?subject=Physics" className="text-[#E05C42] hover:underline font-black">Physics</Link>,{' '}
              <Link href="/tutors?subject=Chemistry" className="text-[#E05C42] hover:underline font-black">Chemistry</Link>,{' '}
              <Link href="/tutors?subject=Biology" className="text-[#E05C42] hover:underline font-black">Biology</Link>,{' '}
              <Link href="/tutors?subject=English" className="text-[#E05C42] hover:underline font-black">English</Link>,{' '}
              <Link href="/tutors?subject=Urdu" className="text-[#E05C42] hover:underline font-black">Urdu</Link>,{' '}
              <Link href="/tutors?subject=Quran%20%26%20Arabic" className="text-[#E05C42] hover:underline font-black">Quran &amp; Arabic</Link>,{' '}
              <Link href="/tutors?subject=Computer%20Science" className="text-[#E05C42] hover:underline font-black">Computer Science</Link>,{' '}
              <Link href="/tutors?subject=Economics" className="text-[#E05C42] hover:underline font-black">Economics</Link>,{' '}
              <Link href="/tutors?subject=Statistics" className="text-[#E05C42] hover:underline font-black">Statistics</Link>, and more. Our tutors are subject matter experts with years of teaching experience.
            </p>
            <p>
              <strong className="text-[#2E4F5E]">Why Choose Avenfield Tutors?</strong> We are Pakistan's most trusted platform for{' '}
              <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">private tutoring</Link>. With 500+{' '}
              <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">verified tutors</Link>, 50+ subjects, and{' '}
              <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">online tutoring</Link> available worldwide plus{' '}
              <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">home tuition</Link> in major Pakistani cities, we make quality education accessible to everyone.
            </p>
            <p>
              <strong className="text-[#2E4F5E]">Home Tuition in Pakistan:</strong> Our{' '}
              <Link href="/tutors?mode=home" className="text-[#E05C42] hover:underline font-black">home tutors</Link> serve{' '}
              <Link href="/tutors?city=Lahore" className="text-[#E05C42] hover:underline font-black">Lahore</Link>,{' '}
              <Link href="/tutors?city=Karachi" className="text-[#E05C42] hover:underline font-black">Karachi</Link>,{' '}
              <Link href="/tutors?city=Islamabad" className="text-[#E05C42] hover:underline font-black">Islamabad</Link>, Rawalpindi, Faisalabad, and other cities. Students receive personalized attention in a comfortable home environment, with lessons tailored to their individual learning styles.
            </p>
            <p>
              <strong className="text-[#2E4F5E]">Online Tutoring Worldwide:</strong> Our{' '}
              <Link href="/tutors?mode=online" className="text-[#E05C42] hover:underline font-black">online tutors</Link> connect with students across the UK, USA, Canada, Australia, UAE, and Europe. Using modern teaching tools, we deliver engaging, effective lessons that match the quality of in-person tutoring.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §9  FAQ SECTION — with FAQ Schema
      ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="faq-heading"
        className="bg-[#FFFDF7] py-16 sm:py-20 px-4 sm:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <Eyebrow text="Got Questions?" />
            <h2 id="faq-heading" className="text-[1.8rem] sm:text-[2.2rem] font-black tracking-[-0.02em] text-[#2E4F5E]">
              Frequently Asked Questions
            </h2>
            <p className="text-[#4a6a78] text-[0.88rem] mt-2 font-semibold">
              Everything you need to know about our tutoring services
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'What tutoring services do you offer?',
                a: 'We offer comprehensive online tutoring and home tuition services across Pakistan and worldwide. Our services cover O Level, A Level, IGCSE, GCSE, IELTS, MDCAT, CSS, PMS, PPSC, FPSC, and 50+ academic subjects including Mathematics, Physics, Chemistry, Biology, English, Urdu, Quran, and more.'
              },
              {
                q: 'Do you provide home tuition in Pakistan?',
                a: 'Yes, we provide home tuition services in Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, and other major cities across Pakistan. Our verified home tutors visit your residence for personalized, face-to-face learning sessions.'
              },
              {
                q: 'Do you offer online tutoring services?',
                a: 'Absolutely. We offer online tutoring worldwide through live video sessions, interactive whiteboards, and screen sharing. Our online tutors are available for all subjects and exams, providing flexible scheduling and recorded sessions for revision.'
              },
              {
                q: 'Which cities do you cover for home tuition?',
                a: 'We provide home tuition in Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, and other major cities across Pakistan. Our online tutoring services are available globally including UK, USA, Canada, Australia, UAE, and Europe.'
              },
              {
                q: 'Are your tutors verified and qualified?',
                a: 'Yes, all tutors at Avenfield Tutors are manually verified. We screen their qualifications, teaching experience, and subject expertise. Only qualified educators with proven teaching experience are approved to teach on our platform.'
              },
              {
                q: 'How do I book a tutor?',
                a: 'Booking a tutor is simple. Browse our tutor directory, filter by subject, city, and learning mode (online or home), review tutor profiles, and connect directly via WhatsApp. You can start learning the same day with no long forms or waiting periods.'
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white border-2 border-[#E8C86A] rounded-xl overflow-hidden shadow-[2px_2px_0_0_#c9ab4a] transition-all hover:shadow-[3px_3px_0_0_#c9ab4a]"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary className="flex items-center justify-between w-full px-5 py-4 cursor-pointer list-none hover:bg-[#FFFDF7] transition-colors">
                  <span className="text-[0.9rem] sm:text-[0.95rem] font-black text-[#2E4F5E] pr-4" itemProp="name">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8C86A] flex items-center justify-center text-[#2E4F5E] font-black text-sm transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-5" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div className="pt-2 border-t-2 border-dashed border-[#E8C86A]/30" itemProp="text">
                    <p className="text-[#4a6a78] text-[0.88rem] sm:text-[0.92rem] font-semibold leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §10  FINAL CTA — SEO Optimized
      ══════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="services-cta-heading"
        className="bg-[#2E4F5E] py-20 sm:py-28 px-4 sm:px-8 relative overflow-hidden"
      >
        {[{ pos: 'top-6 right-6', color: 'bg-[#E8C86A]' }, { pos: 'bottom-6 left-6', color: 'bg-[#3A9E8F]' }].map((d, i) => (
          <div key={i} aria-hidden="true" className={`absolute ${d.pos} grid grid-cols-5 gap-2 opacity-20`}>
            {Array.from({ length: 25 }).map((_, j) => <div key={j} className={`w-1.5 h-1.5 rounded-full ${d.color}`}/>)}
          </div>
        ))}
        <div className="relative max-w-2xl mx-auto text-center">
          <Eyebrow text="Get Started Today" light />
          <h2 id="services-cta-heading" className="text-[2rem] sm:text-[2.6rem] md:text-[2.8rem] font-black text-white leading-[1.1] tracking-[-0.025em] mb-5">
            Find Your Online or<br/>
            <span className="relative inline-block text-[#E8C86A]">
              <span className="relative z-10">Home Tutor Today</span>
              <Wiggle color="#E05C42" />
            </span>
          </h2>
          <p className="text-white/55 text-[0.95rem] sm:text-[0.97rem] mb-10 max-w-lg mx-auto font-semibold leading-relaxed">
            Browse verified tutor profiles at Avenfield Tutors and start learning in under two minutes. No commitment needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tutors"
              aria-label="Find a verified online or home tutor at Avenfield Tutors"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E8C86A] text-[#2E4F5E] font-black text-[0.92rem] rounded-xl border-2 border-[#a88e3a] shadow-[0_4px_0_0_#a88e3a] hover:shadow-[0_2px_0_0_#a88e3a] hover:translate-y-[2px] transition-all duration-150"
            >
              Find a Tutor Now →
            </Link>
            <Link
              href="/become-tutor"
              aria-label="Apply to become a qualified tutor at Avenfield Tutors"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 hover:border-white/60 text-white font-black text-[0.92rem] rounded-xl transition-all duration-200"
            >
              Become a Tutor
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}