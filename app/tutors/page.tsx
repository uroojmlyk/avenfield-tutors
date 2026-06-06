

// import type { Metadata } from 'next'
// import Link from 'next/link'
// import TutorCard from '@/components/tutor/TutorCard'
// import { ITutor } from '@/types'

// export const metadata: Metadata = {
//   title: 'Find Your Perfect Tutor Verified Educators Online & Home | Learnova',
//   description: 'Browse 500+ verified tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects. Online worldwide and home tutoring in Pakistan, UAE & UK.',
// }

// const ALL_SUBJECTS = [
//   'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Science',
//   'English', 'Urdu', 'Computer Science', 'Economics', 'Accounting',
//   'Statistics', 'History', 'Geography', 'Pakistan Studies', 'Islamic Studies',
//   'Political Science', 'Law', 'Quran', 'Arabic',
//   'O Level', 'A Level',
//   'CSS / PMS', 'PPSC / FPSC',
//   'IELTS', 'TOEFL', 'PTE Academic', 'Duolingo English Test', 'OET', 'CELPIP',
//   'MDCAT', 'Cadet College Entry Test', 'Atchison College Entry Test',
// ]

// const POPULAR_SUBJECTS = ['Mathematics', 'IELTS', 'O Level', 'A Level', 'CSS / PMS', 'MDCAT', 'Physics', 'English']

// async function getTutors(subject?: string): Promise<ITutor[]> {
//   try {
//     const query = subject && subject !== 'All' ? `?subject=${encodeURIComponent(subject)}` : ''
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tutors${query}`, { cache: 'no-store' })
//     if (!res.ok) return []
//     return res.json()
//   } catch { return [] }
// }

// export default async function TutorsPage({
//   searchParams,
// }: {
//   searchParams: Promise<{ subject?: string; search?: string }>
// }) {
//   const resolvedParams = await searchParams
//   const activeSubject  = resolvedParams.subject || 'All'
//   const searchQuery    = resolvedParams.search  || ''

//   let tutors = await getTutors(activeSubject)
//   if (searchQuery && tutors.length > 0) {
//     tutors = tutors.filter(t =>
//       t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       t.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
//     )
//   }

//   const featuredTutors = tutors.filter(t => t.experience >= 5).slice(0, 3)
//   const regularTutors  = tutors.filter(t => !featuredTutors.includes(t))

//   return (
//     <div className="text-[#2E4F5E] overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>
//       <div className="bg-[#FFFDF7] min-h-screen">

//         {/* HERO HEADER */}
//         <div className="bg-[#2E4F5E] pt-10 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-8 relative overflow-hidden">
//           <div aria-hidden="true" className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
//             style={{ background: 'radial-gradient(circle,#3A9E8F,transparent 70%)', transform: 'translate(40%,-30%)' }} />
//           <div aria-hidden="true" className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-8 pointer-events-none"
//             style={{ background: 'radial-gradient(circle,#E8C86A,transparent 70%)', transform: 'translate(-40%,40%)' }} />
//           <div aria-hidden="true"
//             className="absolute inset-0 opacity-[0.04]"
//             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,#E8C86A 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

//           <div className="max-w-6xl mx-auto relative">
//             <div className="flex items-center gap-2 mb-4">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#E8C86A]" />
//               <span className="text-[0.62rem] font-black uppercase tracking-[0.25em] text-[#E8C86A]">Browse Tutors</span>
//               <span className="w-1.5 h-1.5 rounded-full bg-[#E8C86A]" />
//             </div>

//             <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
//               <div className="max-w-2xl">
//                 <h1 className="text-white text-[2rem] sm:text-[2.9rem] font-black tracking-tight leading-[1.1] mb-4">
//                   Every Subject.<br className="sm:hidden"/>
//                   <span className="text-[#E8C86A]"> Every Level.</span><br/>
//                   One Trusted Platform.
//                 </h1>
//                 <p className="text-[#7da8b8] text-[0.9rem] sm:text-[1rem] font-semibold leading-relaxed max-w-lg">
//                   Every tutor on Learnova is manually reviewed and verified before going live.
//                   No algorithms just real educators, hand-picked for quality.
//                 </p>
//               </div>

//               <div className="flex flex-wrap lg:flex-col gap-2.5 lg:items-end">
//                 {[
//                   { v: `${tutors.length}+`, l: 'Verified Tutors',  c: 'border-[#E8C86A] bg-[#E8C86A]/15 text-[#E8C86A]' },
//                   { v: '50+',              l: 'Subjects Covered', c: 'border-[#3A9E8F] bg-[#3A9E8F]/15 text-[#3A9E8F]'  },
//                   { v: '15+',              l: 'Countries Served', c: 'border-[#E8934A] bg-[#E8934A]/15 text-[#E8934A]'  },
//                 ].map(({ v, l, c }) => (
//                   <div key={l} className={`inline-flex items-center gap-2.5 border-2 rounded-xl px-4 py-2 ${c}`}>
//                     <span className="font-black text-[1.1rem] leading-none">{v}</span>
//                     <span className="text-white text-[0.72rem] font-bold">{l}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2">
//               {[
//                 { t: 'Manually verified tutors'      },
//                 { t: 'Online worldwide & home visits' },
//                 { t: 'Direct WhatsApp booking'        },
//                 { t: 'Flexible schedules'             },
//                 { t: 'Cancel anytime'                 },
//               ].map(item => (
//                 <span key={item.t} className="flex items-center gap-2 text-[0.72rem] font-bold text-white/70 whitespace-nowrap">
//                   <span className="w-4 h-4 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.5rem] font-black flex-shrink-0">✓</span>
//                   {item.t}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* STICKY SEARCH + FILTER BAR */}
//         <div className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b-2 border-[#E8C86A] px-4 sm:px-8 py-3.5 shadow-sm">
//           <div className="max-w-6xl mx-auto">
//             <form method="GET" action="/tutors" className="relative mb-3">
//               <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b0c4cc] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//               </svg>
//               <input
//                 type="text"
//                 name="search"
//                 defaultValue={searchQuery}
//                 placeholder="Search by tutor name or subject — e.g. IELTS, Maths, CSS..."
//                 className="w-full pl-10 pr-24 py-2.5 rounded-xl border-2 border-[#D4D0C5] focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/20 text-[0.85rem] font-semibold text-[#2E4F5E] bg-white placeholder:text-[#b0c4cc] transition-all"
//               />
//               <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
//                 {searchQuery && (
//                   <Link href="/tutors" className="text-[0.68rem] font-black text-[#E05C42] px-2 py-1">Clear</Link>
//                 )}
//                 <button type="submit" className="bg-[#2E4F5E] text-white text-[0.68rem] font-black px-3 py-1.5 rounded-lg hover:bg-[#1a3a44] transition-colors">
//                   Search
//                 </button>
//               </div>
//             </form>

//             {activeSubject !== 'All' && (
//               <div className="flex items-center gap-2 mb-2.5">
//                 <span className="text-[#7da8b8] text-[0.68rem] font-bold">Filtering by:</span>
//                 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#E8C86A] text-[#2E4F5E] text-[0.65rem] font-black rounded-full border border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E]">
//                   {activeSubject}
//                   <Link href="/tutors" className="hover:text-[#E05C42] transition-colors ml-0.5">
//                     <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
//                     </svg>
//                   </Link>
//                 </span>
//               </div>
//             )}

//             <div className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-hide">
//               <Link href="/tutors"
//                 className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[0.72rem] font-black border-2 transition-all duration-150 ${
//                   activeSubject === 'All'
//                     ? 'bg-[#E05C42] text-white border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]'
//                     : 'bg-white text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/10'
//                 }`}>
//                 All Tutors
//               </Link>
//               {POPULAR_SUBJECTS.map(s => (
//                 <Link key={s} href={`/tutors?subject=${encodeURIComponent(s)}`}
//                   className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[0.72rem] font-black border-2 transition-all duration-150 ${
//                     activeSubject === s
//                       ? 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]'
//                       : 'bg-white text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/10'
//                   }`}>
//                   {s}
//                 </Link>
//               ))}
//               <span className="flex-shrink-0 self-center w-1 h-1 rounded-full bg-[#D4D0C5] mx-1" />
//               {ALL_SUBJECTS.filter(s => !POPULAR_SUBJECTS.includes(s)).map(s => (
//                 <Link key={s} href={`/tutors?subject=${encodeURIComponent(s)}`}
//                   className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[0.68rem] font-bold border transition-all duration-150 ${
//                     activeSubject === s
//                       ? 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E]'
//                       : 'bg-white text-[#7da8b8] border-[#D4D0C5] hover:border-[#E8C86A] hover:text-[#2E4F5E]'
//                   }`}>
//                   {s}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* TUTOR GRID */}
//         <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
//           {tutors.length > 0 ? (
//             <>
//               <div className="flex items-center justify-between mb-6">
//                 <p className="text-[0.75rem] font-bold text-[#7da8b8]">
//                   {activeSubject !== 'All'
//                     ? `${tutors.length} tutor${tutors.length !== 1 ? 's' : ''} found for "${activeSubject}"`
//                     : `${tutors.length} verified tutor${tutors.length !== 1 ? 's' : ''} available`
//                   }
//                 </p>
//                 {searchQuery && (
//                   <span className="text-[0.7rem] font-bold text-[#E8934A]">
//                     Results for "{searchQuery}"
//                   </span>
//                 )}
//               </div>

//               {featuredTutors.length > 0 && activeSubject === 'All' && !searchQuery && (
//                 <div className="mb-10 sm:mb-14">
//                   <div className="flex items-center gap-3 mb-5">
//                     <div className="h-6 w-1 bg-[#E8C86A] rounded-full border border-[#2E4F5E]" />
//                     <h2 className="font-black text-[1.05rem] text-[#2E4F5E]">Featured Tutors</h2>
//                     <span className="text-[0.62rem] font-black text-[#7da8b8] bg-[#FFFDF7] border border-[#D4D0C5] px-2.5 py-0.5 rounded-full">5+ years experience</span>
//                   </div>
//                   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
//                     {featuredTutors.map(tutor => (
//                       <TutorCard key={tutor._id} tutor={tutor} featured />
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {(regularTutors.length > 0 || featuredTutors.length === 0 || activeSubject !== 'All' || searchQuery) && (
//                 <div>
//                   {featuredTutors.length > 0 && activeSubject === 'All' && !searchQuery && (
//                     <div className="flex items-center gap-3 mb-5">
//                       <div className="h-5 w-1 bg-[#D4D0C5] rounded-full" />
//                       <h2 className="font-black text-[1rem] text-[#2E4F5E]">All Tutors</h2>
//                     </div>
//                   )}
//                   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
//                     {(regularTutors.length > 0 ? regularTutors : tutors).map(tutor => (
//                       <TutorCard key={tutor._id} tutor={tutor} />
//                     ))}
//                   </div>
//                 </div>
//               )}

//               <p className="text-center text-[0.62rem] font-black text-[#b0c4cc] mt-12">
//                 All {tutors.length} tutor{tutors.length !== 1 ? 's' : ''} manually verified by the Learnova team
//               </p>
//             </>
//           ) : (
//             <div className="text-center py-16 sm:py-28">
//               <div className="w-20 h-20 bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] flex items-center justify-center text-4xl mx-auto mb-6">🔍</div>
//               <h2 className="font-black text-[1.25rem] sm:text-[1.5rem] text-[#2E4F5E] mb-3">
//                 No tutors found{activeSubject !== 'All' ? ` for "${activeSubject}"` : ''}
//               </h2>
//               <p className="text-[#4a6a78] text-[0.88rem] font-semibold max-w-sm mx-auto mb-8 leading-relaxed">
//                 We may not have added tutors for this subject yet but new tutors join every week.
//                 Try browsing all tutors or request one for your subject.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                 <Link href="/tutors"
//                   className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E05C42] text-white text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all">
//                   Browse All Tutors
//                 </Link>
//                 <Link href="/become-tutor"
//                   className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#2E4F5E] text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all">
//                   Teach on Learnova
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* BOTTOM CTA */}
//         {tutors.length > 5 && (
//           <div className="bg-[#2E4F5E] border-t-2 border-[#E8C86A] py-10 px-4 sm:px-8">
//             <div className="max-w-3xl mx-auto text-center">
//               <p className="text-white font-black text-[1.05rem] mb-1">Can't find the right tutor?</p>
//               <p className="text-[#7da8b8] text-[0.82rem] font-semibold mb-5">
//                 Tell us your subject and requirements we'll match you with the right educator within 24 hours.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                 <Link href="/become-tutor"
//                   className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E8C86A] text-[#2E4F5E] text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_rgba(232,200,106,0.4)] hover:shadow-none hover:translate-y-[2px] transition-all">
//                   Request a Tutor
//                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
//                   </svg>
//                 </Link>
//                 <Link href="/services"
//                   className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white text-[0.85rem] font-black rounded-xl border-2 border-white/20 hover:bg-white/15 transition-all">
//                   View All Services
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   )
// }




import type { Metadata } from 'next'
import Link from 'next/link'
import TutorCard from '@/components/tutor/TutorCard'
import { ITutor } from '@/types'

export const metadata: Metadata = {
  title: 'Find Verified Tutors for O Level, A Level, IELTS & MDCAT | Avenfield Tutors',
  description: 'Browse 500+ hand-verified tutors for O Level, A Level, IELTS, MDCAT, CSS, GCSE and 50+ subjects. Online tuition worldwide and home tutoring in Pakistan, UAE & UK.',
  keywords: 'O Level tutor, A Level tutor, IELTS preparation online, MDCAT tutor, CSS coaching, GCSE tutor, find tutors online, home tutoring Pakistan, online tuition UAE, verified tutors',
  openGraph: {
    title: 'Find Your Perfect Tutor | Avenfield Tutors',
    description: 'Hand-verified educators for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects. Book directly via WhatsApp.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find Verified Tutors | Avenfield Tutors',
    description: 'O Level, A Level, IELTS, MDCAT, CSS tutors — all manually verified.',
  },
  alternates: {
    canonical: 'https://www.avenfieldtutors.com/tutors',
  },
}

// ──────────────────────────────────────────────────────────────────
// Reusable components (exactly matching home page style)
// ──────────────────────────────────────────────────────────────────

function Eyebrow({ text, light = false, center = false }: { text: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2 mb-3 ${center ? 'justify-center' : ''}`} aria-hidden="true">
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
      <span className={`text-[0.62rem] font-black uppercase tracking-[0.22em] ${light ? 'text-[#E8C86A]' : 'text-[#E05C42]'}`}>{text}</span>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
    </div>
  )
}

function Wiggle({ color = '#E8C86A' }: { color?: string }) {
  return (
    <svg viewBox="0 0 160 10" fill="none" className="absolute -bottom-1 left-0 w-full h-3 pointer-events-none" aria-hidden="true">
      <path d="M2 5 C20 1,38 9,56 5 C74 1,92 9,110 5 C128 1,146 9,158 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

// ──────────────────────────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────────────────────────

const ALL_SUBJECTS = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Science',
  'English', 'Urdu', 'Computer Science', 'Economics', 'Accounting',
  'Statistics', 'History', 'Geography', 'Pakistan Studies', 'Islamic Studies',
  'Political Science', 'Law', 'Quran', 'Arabic',
  'O Level', 'A Level',
  'CSS / PMS', 'PPSC / FPSC',
  'IELTS', 'TOEFL', 'PTE Academic', 'Duolingo English Test', 'OET', 'CELPIP',
  'MDCAT', 'Cadet College Entry Test', 'Atchison College Entry Test',
]

const POPULAR_SUBJECTS = ['Mathematics', 'IELTS', 'O Level', 'A Level', 'CSS / PMS', 'MDCAT', 'Physics', 'English']

// ──────────────────────────────────────────────────────────────────
// Fetch function
// ──────────────────────────────────────────────────────────────────

async function getTutors(subject?: string): Promise<ITutor[]> {
  try {
    const query = subject && subject !== 'All' ? `?subject=${encodeURIComponent(subject)}` : ''
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tutors${query}`, { cache: 'no-store' })
    if (!res.ok) return []
    return res.json()
  } catch { return [] }
}

// ──────────────────────────────────────────────────────────────────
// Main Component
// ──────────────────────────────────────────────────────────────────

export default async function TutorsPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string; search?: string }>
}) {
  const resolvedParams = await searchParams
  const activeSubject  = resolvedParams.subject || 'All'
  const searchQuery    = resolvedParams.search  || ''

  let tutors = await getTutors(activeSubject)
  if (searchQuery && tutors.length > 0) {
    tutors = tutors.filter(t =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  }

  const featuredTutors = tutors.filter(t => t.experience >= 5).slice(0, 3)
  const regularTutors  = tutors.filter(t => !featuredTutors.includes(t))

  return (
    <div className="text-[#2E4F5E] overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <div className="bg-[#FFFDF7] min-h-screen">

        {/* ══════════════════════════════════════════════════════
            §1  HERO SECTION (matches home page style)
        ══════════════════════════════════════════════════════ */}
        <section
          aria-label="Find verified tutors at Avenfield Tutors"
          className="bg-[#2E4F5E] pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 relative overflow-hidden"
        >
          {/* Background blobs (same as home page) */}
          <div aria-hidden="true" className="absolute top-0 right-0 w-64 sm:w-80 md:w-[400px] h-64 sm:h-80 md:h-[400px] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle,#3A9E8F,transparent 70%)', transform: 'translate(40%,-30%)' }} />
          <div aria-hidden="true" className="absolute bottom-0 left-0 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-full opacity-8 pointer-events-none"
            style={{ background: 'radial-gradient(circle,#E8C86A,transparent 70%)', transform: 'translate(-30%,30%)' }} />
          <div aria-hidden="true"
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,#E8C86A 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

          <div className="relative max-w-6xl mx-auto">
            <Eyebrow text="Browse Tutors" light />

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-2xl">
                {/* H1 - Primary SEO keyword target */}
                <h1 className="text-white text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-black leading-[1.1] tracking-[-0.025em] mb-4">
                  Find <span className="relative inline-block text-[#E8C86A]">
                    <span className="relative z-10">Verified Tutors</span>
                    <Wiggle color="#E05C42" />
                  </span><br className="hidden sm:block"/>
                  for <span className="text-[#E8C86A]">O Level, A Level & Beyond</span>
                </h1>
                <p className="text-[#7da8b8] text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] font-semibold leading-relaxed max-w-lg">
                  Every tutor on Avenfield Tutors is manually reviewed and verified before going live.
                  No algorithms just real educators, hand picked for{' '}
                  <Link href="/tutors?subject=O%20Level" className="text-[#E8C86A] hover:underline">O Level</Link>,{' '}
                  <Link href="/tutors?subject=A%20Level" className="text-[#E8C86A] hover:underline">A Level</Link>,{' '}
                  <Link href="/tutors?subject=IELTS" className="text-[#E8C86A] hover:underline">IELTS</Link>,{' '}
                  <Link href="/tutors?subject=MDCAT" className="text-[#E8C86A] hover:underline">MDCAT</Link>{' '}
                  and 50+ subjects.
                </p>
              </div>

              {/* Stats chips (same style as home page) */}
              <div className="flex flex-wrap lg:flex-col gap-2.5 lg:items-end">
                {[
                  { v: `${tutors.length}+`, l: 'Verified Tutors',  c: 'border-[#E8C86A] bg-[#E8C86A]/15 text-[#E8C86A]' },
                  { v: '50+',              l: 'Subjects Covered', c: 'border-[#3A9E8F] bg-[#3A9E8F]/15 text-[#3A9E8F]'  },
                  { v: '15+',              l: 'Countries Served', c: 'border-[#E8934A] bg-[#E8934A]/15 text-[#E8934A]'  },
                ].map(({ v, l, c }) => (
                  <div key={l} className={`inline-flex items-center gap-2.5 border-2 rounded-xl px-4 py-2 ${c}`}>
                    <span className="font-black text-[1.1rem] leading-none">{v}</span>
                    <span className="text-white text-[0.72rem] font-bold">{l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges (same as home page) */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2">
              {[
                { t: 'Manually verified tutors'      },
                { t: 'Online worldwide & home visits' },
                { t: 'Direct WhatsApp booking'        },
                { t: 'Flexible schedules'             },
                { t: 'Cancel anytime'                 },
              ].map(item => (
                <span key={item.t} className="flex items-center gap-2 text-[0.72rem] font-bold text-white/70 whitespace-nowrap">
                  <span className="w-4 h-4 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.5rem] font-black flex-shrink-0">✓</span>
                  {item.t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            §2  SEARCH & FILTER BAR (sticky, matches home page style)
        ══════════════════════════════════════════════════════ */}
        <section aria-labelledby="search-heading">
          <div className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b-2 border-[#E8C86A] px-4 sm:px-6 md:px-8 py-3.5 shadow-sm">
            <div className="max-w-6xl mx-auto">
              <h2 id="search-heading" className="sr-only">Search and filter tutors by subject or name</h2>

              <form method="GET" action="/tutors" className="relative mb-3">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b0c4cc] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <input
                  type="text"
                  name="search"
                  defaultValue={searchQuery}
                  placeholder="Search by tutor name or subject — e.g. O Level Maths, IELTS, MDCAT, CSS..."
                  className="w-full pl-10 pr-24 py-2.5 rounded-xl border-2 border-[#D4D0C5] focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/20 text-[0.85rem] font-semibold text-[#2E4F5E] bg-white placeholder:text-[#b0c4cc] transition-all"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  {searchQuery && (
                    <Link href="/tutors" className="text-[0.68rem] font-black text-[#E05C42] px-2 py-1">Clear</Link>
                  )}
                  <button type="submit" className="bg-[#2E4F5E] text-white text-[0.68rem] font-black px-3 py-1.5 rounded-lg hover:bg-[#1a3a44] transition-colors">
                    Search
                  </button>
                </div>
              </form>

              {activeSubject !== 'All' && (
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[#7da8b8] text-[0.68rem] font-bold">Filtering by:</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#E8C86A] text-[#2E4F5E] text-[0.65rem] font-black rounded-full border border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E]">
                    {activeSubject}
                    <Link href="/tutors" className="hover:text-[#E05C42] transition-colors ml-0.5">
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </Link>
                  </span>
                </div>
              )}

              <div className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-hide">
                <Link href="/tutors"
                  className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[0.72rem] font-black border-2 transition-all duration-150 ${
                    activeSubject === 'All'
                      ? 'bg-[#E05C42] text-white border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]'
                      : 'bg-white text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/10'
                  }`}>
                  All Tutors
                </Link>
                {POPULAR_SUBJECTS.map(s => (
                  <Link key={s} href={`/tutors?subject=${encodeURIComponent(s)}`}
                    className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[0.72rem] font-black border-2 transition-all duration-150 ${
                      activeSubject === s
                        ? 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]'
                        : 'bg-white text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/10'
                    }`}>
                    {s}
                  </Link>
                ))}
                <span className="flex-shrink-0 self-center w-1 h-1 rounded-full bg-[#D4D0C5] mx-1" aria-hidden="true" />
                {ALL_SUBJECTS.filter(s => !POPULAR_SUBJECTS.includes(s)).map(s => (
                  <Link key={s} href={`/tutors?subject=${encodeURIComponent(s)}`}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[0.68rem] font-bold border transition-all duration-150 ${
                      activeSubject === s
                        ? 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E]'
                        : 'bg-white text-[#7da8b8] border-[#D4D0C5] hover:border-[#E8C86A] hover:text-[#2E4F5E]'
                    }`}>
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            §3  TUTOR GRID SECTION
        ══════════════════════════════════════════════════════ */}
        <section aria-labelledby="tutors-heading" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            {tutors.length > 0 ? (
              <>
                {/* Results count */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[0.75rem] font-bold text-[#7da8b8]">
                    {activeSubject !== 'All'
                      ? `${tutors.length} tutor${tutors.length !== 1 ? 's' : ''} found for "${activeSubject}"`
                      : `${tutors.length} verified tutor${tutors.length !== 1 ? 's' : ''} available`
                    }
                  </p>
                  {searchQuery && (
                    <span className="text-[0.7rem] font-bold text-[#E8934A]">
                      Results for "{searchQuery}"
                    </span>
                  )}
                </div>

                {/* Featured Tutors Section */}
                {featuredTutors.length > 0 && activeSubject === 'All' && !searchQuery && (
                  <div className="mb-10 sm:mb-14">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-6 w-1 bg-[#E8C86A] rounded-full border border-[#2E4F5E]" />
                      <h2 className="font-black text-[1.05rem] text-[#2E4F5E]">Experienced Tutors</h2>
                      <span className="text-[0.62rem] font-black text-[#7da8b8] bg-[#FFFDF7] border border-[#D4D0C5] px-2.5 py-0.5 rounded-full">5+ years experience</span>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                      {featuredTutors.map(tutor => (
                        <TutorCard key={tutor._id} tutor={tutor} featured />
                      ))}
                    </div>
                  </div>
                )}

                {/* All Tutors Section */}
                {(regularTutors.length > 0 || featuredTutors.length === 0 || activeSubject !== 'All' || searchQuery) && (
                  <div>
                    {featuredTutors.length > 0 && activeSubject === 'All' && !searchQuery && (
                      <div className="flex items-center gap-3 mb-5">
                        <div className="h-5 w-1 bg-[#D4D0C5] rounded-full" />
                        <h3 className="font-black text-[1rem] text-[#2E4F5E]">All Qualified Tutors</h3>
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                      {(regularTutors.length > 0 ? regularTutors : tutors).map(tutor => (
                        <TutorCard key={tutor._id} tutor={tutor} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Verification note */}
                <p className="text-center text-[0.62rem] font-black text-[#b0c4cc] mt-12">
                  All {tutors.length} tutor{tutors.length !== 1 ? 's' : ''} manually verified by the Avenfield Tutors team
                </p>
              </>
            ) : (
              // No Results State (matches home page style)
              <div className="text-center py-16 sm:py-28">
                <div className="w-20 h-20 bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] flex items-center justify-center text-4xl mx-auto mb-6" aria-hidden="true">
                  🔍
                </div>
                <h2 className="font-black text-[1.25rem] sm:text-[1.5rem] text-[#2E4F5E] mb-3">
                  No tutors found{activeSubject !== 'All' ? ` for "${activeSubject}"` : ''}
                </h2>
                <p className="text-[#4a6a78] text-[0.88rem] font-semibold max-w-sm mx-auto mb-8 leading-relaxed">
                  We may not have added tutors for this subject yet. New tutors join every week.
                  Try browsing all tutors or request one for your subject.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/tutors"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E05C42] text-white text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all">
                    Browse All Tutors
                  </Link>
                  <Link href="/become-tutor"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#2E4F5E] text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all">
                    Become a Tutor
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            §4  BOTTOM CTA SECTION (matches home page "For Educators" style)
        ══════════════════════════════════════════════════════ */}
        {tutors.length > 3 && (
          <section aria-labelledby="bottom-cta-heading">
            <div className="bg-[#2E4F5E] py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t-2 border-[#E8C86A]">
              <div className="max-w-4xl mx-auto text-center">
                <Eyebrow text="Still Looking?" light center />
                <h2 id="bottom-cta-heading" className="text-white text-[1.5rem] sm:text-[2rem] md:text-[2.4rem] font-black tracking-[-0.02em] mb-3">
                  Can't Find the <span className="text-[#E8C86A]">Right Tutor?</span>
                </h2>
                <p className="text-[#7da8b8] text-[0.9rem] sm:text-[0.95rem] font-semibold max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed">
                  Tell us your subject and requirements we'll match you with the perfect educator within 24 hours. Free consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 md:px-7 py-3 bg-[#E8C86A] text-[#2E4F5E] font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_4px_0_0_#2E4F5E] hover:shadow-[0_2px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150">
                    Request a Tutor
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </Link>
                  <Link href="/become-tutor"
                    className="inline-flex items-center justify-center gap-2 px-6 md:px-7 py-3 border-2 border-white/30 hover:border-white/60 text-white font-black text-[0.85rem] md:text-[0.9rem] rounded-xl transition-all duration-200">
                    Become a Tutor
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════════════
            §5  JSON-LD Schema for SEO
        ══════════════════════════════════════════════════════ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Verified Tutors at Avenfield Tutors",
              "description": "Browse hand-verified tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects. Online and home tuition in UK, Pakistan, UAE.",
              "url": "https://avenfieldtutors.com/tutors",
              "numberOfItems": tutors.length,
              "itemListElement": tutors.slice(0, 10).map((tutor, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Person",
                  "name": tutor.name,
                  "description": `${tutor.subjects?.slice(0, 3).join(', ')} tutor with ${tutor.experience}+ years experience`,
                  "knowsAbout": tutor.subjects,
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Avenfield Tutors"
                  }
                }
              }))
            })
          }}
        />
      </div>
    </div>
  )
}