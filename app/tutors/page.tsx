


// import type { Metadata } from 'next'
// import Link from 'next/link'
// import TutorCard from '@/components/tutor/TutorCard'
// import { ITutor } from '@/types'

// export const metadata: Metadata = {
//   title: 'Browse Tutors — Find Verified Tutors Online & Home | Learnova',
//   description: 'Find verified tutors by subject, location, and teaching mode. Online and home tutors available across Pakistan, UAE, UK and more.',
// }

// const ALL_SUBJECTS = [
//   'Mathematics', 'Physics', 'Chemistry', 'Biology',
//   'English', 'O Level', 'A Level', 'IELTS', 'Computer Science',
//   'Economics', 'Quran', 'Arabic',
// ]

// const POPULAR_SUBJECTS = ['Mathematics', 'IELTS', 'O Level', 'A Level']

// async function getTutors(subject?: string): Promise<ITutor[]> {
//   try {
//     const query = subject && subject !== 'All' ? `?subject=${encodeURIComponent(subject)}` : ''
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tutors${query}`, {
//       cache: 'no-store',
//     })
//     if (!res.ok) return []
//     return res.json()
//   } catch {
//     return []
//   }
// }

// // Eyebrow component matching Services page
// function Eyebrow({ text, center = false }: { text: string; center?: boolean }) {
//   return (
//     <div className={`flex items-center gap-2 mb-4 ${center ? 'justify-center' : ''}`}>
//       <span className="w-1.5 h-1.5 rounded-full bg-[#E05C42]" />
//       <span className="text-[0.68rem] font-black uppercase tracking-[0.25em] text-[#E05C42]">{text}</span>
//       <span className="w-1.5 h-1.5 rounded-full bg-[#E05C42]" />
//     </div>
//   )
// }

// export default async function TutorsPage({
//   searchParams,
// }: {
//   searchParams: Promise<{ subject?: string; search?: string }>
// }) {
//   const resolvedParams = await searchParams
//   const activeSubject = resolvedParams.subject || 'All'
//   const searchQuery = resolvedParams.search || ''
  
//   let tutors = await getTutors(activeSubject)
  
//   if (searchQuery && tutors.length > 0) {
//     tutors = tutors.filter(tutor => 
//       tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       tutor.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
//     )
//   }

//   const featuredTutors = tutors.filter(t => t.experience >= 5).slice(0, 3)
//   const regularTutors = tutors.filter(t => !featuredTutors.includes(t))

//   return (
//     <div className="text-[#2E4F5E] overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>
//       <div className="bg-[#FFFDF7] min-h-screen">

//         {/* ========== HEADER SECTION ========== */}
//         <div className="bg-[#2E4F5E] pt-12 sm:pt-16 pb-10 sm:pb-14 px-4 sm:px-8 relative overflow-hidden">
//           <div aria-hidden="true" className="absolute top-0 right-0 w-72 h-72 sm:w-[450px] sm:h-[450px] rounded-full opacity-15 pointer-events-none"
//             style={{ background: 'radial-gradient(circle, #3A9E8F, transparent 70%)', transform: 'translate(35%,-25%)' }} />
          
//           <div className="max-w-6xl mx-auto relative">
//             <h1 className="text-white text-3xl sm:text-4xl font-black tracking-tight mb-3">
//               Find Verified Tutors
//             </h1>
//             <p className="text-[#7da8b8] text-base sm:text-lg font-semibold mb-4">
//               Connect with trusted tutors for personalized learning
//             </p>
//             <div className="inline-flex items-center gap-2 bg-[#E8C86A]/20 border-2 border-[#E8C86A] rounded-full px-4 py-1.5">
//               <span className="text-[#E8C86A] text-xl font-black">{tutors.length}+</span>
//               <span className="text-white text-sm font-bold">verified tutors available</span>
//             </div>
//           </div>
//         </div>

//         {/* ========== TRUST STRIP ========== */}
//         <div className="bg-[#FFFDF7] border-b-2 border-[#E8C86A] py-3 px-4 sm:px-8">
//           <div className="max-w-6xl mx-auto">
//             <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
//               {[
//                 { text: 'Verified tutors', emoji: '✓' },
//                 { text: 'Direct WhatsApp booking', emoji: '💬' },
//                 { text: 'Online & home tutoring', emoji: '🌍' },
//               ].map((item) => (
//                 <span key={item.text} className="flex items-center gap-1.5 text-[0.7rem] font-black text-[#2E4F5E]">
//                   <span className="w-4 h-4 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.6rem]">{item.emoji}</span>
//                   {item.text}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ========== STATS STRIP ========== */}
//         <div className="bg-[#FFFDF7] border-b border-[#D4D0C5] py-4 px-4 sm:px-8">
//           <div className="max-w-6xl mx-auto">
//             <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
//               {[
//                 { value: '500+', label: 'Students Helped' },
//                 { value: '30+', label: 'Subjects' },
//                 { value: '15+', label: 'Countries' },
//                 { value: '24h', label: 'Response Time' },
//               ].map((stat) => (
//                 <div key={stat.label} className="flex items-center gap-2">
//                   <div className="w-0.5 h-5 bg-[#E05C42] rounded-full" />
//                   <div>
//                     <p className="font-black text-[#2E4F5E] text-sm">{stat.value}</p>
//                     <p className="text-[#7da8b8] text-[9px] font-black tracking-wide">{stat.label}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ========== SEARCH BAR + FILTERS ========== */}
//         <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b-2 border-[#E8C86A] px-4 sm:px-8 py-4 shadow-sm">
//           <div className="max-w-6xl mx-auto">
            
//             {/* Search Bar */}
//             <div className="relative mb-4">
//               <form method="GET" action="/tutors">
//                 <input
//                   type="text"
//                   name="search"
//                   defaultValue={searchQuery}
//                   placeholder="Search by subject, tutor name, or keyword..."
//                   className="w-full px-4 py-3 pl-11 rounded-xl border-2 border-[#D4D0C5] focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/30 text-sm font-semibold text-[#2E4F5E] bg-white placeholder:text-[#a5b8c2] transition-all"
//                 />
//                 <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a5b8c2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//                 {searchQuery && (
//                   <Link
//                     href="/tutors"
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-[0.7rem] font-black text-[#E05C42] hover:text-[#c44d36] transition-colors"
//                   >
//                     Clear
//                   </Link>
//                 )}
//               </form>
//             </div>

//             {/* Active filter indicator */}
//             {activeSubject !== 'All' && (
//               <div className="flex items-center gap-2 mb-3">
//                 <span className="text-[#7da8b8] text-[0.7rem] font-bold">Showing tutors for:</span>
//                 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#E8C86A] text-[#2E4F5E] text-[0.65rem] font-black rounded-full border border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E]">
//                   {activeSubject}
//                   <Link href="/tutors" className="hover:text-[#E05C42]">
//                     <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </Link>
//                 </span>
//               </div>
//             )}

//             {/* Subject filters */}
//             <div className="flex flex-wrap gap-2">
//               {/* All button */}
//               <Link
//                 href="/tutors"
//                 className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[0.75rem] font-black transition-all duration-150 border-2 ${
//                   activeSubject === 'All'
//                     ? 'bg-[#E05C42] text-white border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]'
//                     : 'bg-white text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/20'
//                 }`}
//               >
//                 All
//               </Link>
              
//               {/* Popular subjects */}
//               {POPULAR_SUBJECTS.map((s) => (
//                 <Link
//                   key={s}
//                   href={`/tutors?subject=${encodeURIComponent(s)}`}
//                   className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[0.75rem] font-black transition-all duration-150 border-2 ${
//                     activeSubject === s
//                       ? 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]'
//                       : 'bg-white text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/20'
//                   }`}
//                 >
//                   {s}
//                 </Link>
//               ))}
              
//               {/* Other subjects */}
//               {ALL_SUBJECTS.filter(s => !POPULAR_SUBJECTS.includes(s)).map((s) => (
//                 <Link
//                   key={s}
//                   href={`/tutors?subject=${encodeURIComponent(s)}`}
//                   className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[0.7rem] font-bold transition-all duration-150 border ${
//                     activeSubject === s
//                       ? 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E]'
//                       : 'bg-white text-[#7da8b8] border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/10'
//                   }`}
//                 >
//                   {s}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ========== TUTOR GRID ========== */}
//         <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
          
//           {tutors.length > 0 ? (
//             <>
//               {/* Featured Tutors Section */}
//               {featuredTutors.length > 0 && activeSubject === 'All' && !searchQuery && (
//                 <div className="mb-12">
//                   <div className="flex items-center gap-2 mb-5">
//                     <div className="w-1 h-6 bg-[#E8C86A] rounded-full" />
//                     <h2 className="font-black text-xl text-[#2E4F5E]">Featured Tutors</h2>
//                     <span className="text-[0.65rem] font-black text-[#7da8b8]">Curated for you</span>
//                   </div>
//                   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//                     {featuredTutors.map((tutor) => (
//                       <div key={tutor._id} className="relative">
//                         <div className="absolute -top-2 -left-2 z-10">
//                           <span className="bg-[#E8C86A] text-[#2E4F5E] text-[0.65rem] font-black px-2 py-0.5 rounded-full border border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E]">
//                             ⭐ Featured
//                           </span>
//                         </div>
//                         <TutorCard tutor={tutor} />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Regular Tutors */}
//               {(regularTutors.length > 0 || featuredTutors.length === 0 || activeSubject !== 'All' || searchQuery) && (
//                 <div>
//                   {(featuredTutors.length > 0 && activeSubject === 'All' && !searchQuery) && (
//                     <div className="flex items-center gap-2 mb-5">
//                       <div className="w-1 h-5 bg-[#D4D0C5] rounded-full" />
//                       <h2 className="font-black text-lg text-[#2E4F5E]">All Tutors</h2>
//                     </div>
//                   )}
//                   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//                     {(regularTutors.length > 0 ? regularTutors : tutors).map((tutor) => (
//                       <TutorCard key={tutor._id} tutor={tutor} />
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Results count */}
//               <div className="mt-10 text-center">
//                 <p className="text-[0.65rem] font-black text-[#7da8b8]">
//                   Showing {tutors.length} verified {tutors.length === 1 ? 'tutor' : 'tutors'}
//                 </p>
//               </div>
//             </>
//           ) : (
//             /* ========== EMPTY STATE ========== */
//             <div className="text-center py-16 sm:py-24">
//               <div className="w-20 h-20 bg-[#FFFDF7] rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] flex items-center justify-center text-4xl mx-auto mb-6">
//                 🔍
//               </div>
//               <h2 className="font-black text-xl sm:text-2xl text-[#2E4F5E] mb-3">
//                 No tutors found for {activeSubject !== 'All' ? activeSubject : 'this search'}
//               </h2>
//               <p className="text-[#4a6a78] text-sm font-semibold max-w-md mx-auto mb-6">
//                 We couldn't find tutors for this subject yet. Try another category or explore all verified tutors.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                 <Link
//                   href="/tutors"
//                   className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#E05C42] text-white text-[0.8rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150"
//                 >
//                   View All Tutors
//                 </Link>
//                 <Link
//                   href="/become-tutor"
//                   className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#2E4F5E] text-[0.8rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150"
//                 >
//                   Become a Tutor
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* ========== BOTTOM CTA ========== */}
//         {tutors.length > 5 && (
//           <div className="bg-white border-t-2 border-[#E8C86A] py-8 px-4 sm:px-8">
//             <div className="max-w-4xl mx-auto text-center">
//               <p className="text-[#4a6a78] text-sm font-bold mb-4">
//                 Don't see the right match?
//               </p>
//               <Link
//                 href="/become-tutor"
//                 className="inline-flex items-center gap-2 text-sm font-black text-[#E05C42] hover:text-[#c44d36] transition-colors"
//               >
//                 Request a tutor
//                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </Link>
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
  title: 'Browse Tutors — Find Verified Tutors Online & Home | Learnova',
  description: 'Find verified tutors by subject, location, and teaching mode. Online and home tutors available across Pakistan, UAE, UK and more.',
}

const ALL_SUBJECTS = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology',
  'English', 'O Level', 'A Level', 'IELTS', 'Computer Science',
  'Economics', 'Quran', 'Arabic',
]
const POPULAR_SUBJECTS = ['Mathematics', 'IELTS', 'O Level', 'A Level']

async function getTutors(subject?: string): Promise<ITutor[]> {
  try {
    const query = subject && subject !== 'All' ? `?subject=${encodeURIComponent(subject)}` : ''
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tutors${query}`, { cache: 'no-store' })
    if (!res.ok) return []
    return res.json()
  } catch { return [] }
}

export default async function TutorsPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string; search?: string }>
}) {
  const resolvedParams  = await searchParams
  const activeSubject   = resolvedParams.subject || 'All'
  const searchQuery     = resolvedParams.search  || ''

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

        {/* ═══════════════════════════════════════════════════
            HEADER — dark teal
            Psychology: lead with count + outcome framing
            ("find your match") not dry "browse tutors".
        ═══════════════════════════════════════════════════ */}
        <div className="bg-[#2E4F5E] pt-10 sm:pt-14 pb-10 sm:pb-14 px-4 sm:px-8 relative overflow-hidden">
          <div aria-hidden="true" className="absolute top-0 right-0 w-60 sm:w-[400px] h-60 sm:h-[400px] rounded-full opacity-15 pointer-events-none"
            style={{ background: 'radial-gradient(circle,#3A9E8F,transparent 70%)', transform: 'translate(35%,-25%)' }} />

          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8C86A]" />
              <span className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-[#E8C86A]">Find Your Tutor</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8C86A]" />
            </div>
            <h1 className="text-white text-[1.9rem] sm:text-[2.8rem] font-black tracking-tight mb-2 leading-tight">
              Every Subject.<br className="sm:hidden"/> Every Level. One Platform.
            </h1>
            <p className="text-[#7da8b8] text-[0.88rem] sm:text-[1rem] font-semibold mb-5 max-w-lg">
              All tutors are manually verified before going live. No guesswork — just great educators ready to help.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 bg-[#E8C86A]/20 border-2 border-[#E8C86A] rounded-full px-4 py-1.5">
                <span className="text-[#E8C86A] font-black text-[0.95rem]">{tutors.length}+</span>
                <span className="text-white text-[0.78rem] font-bold">verified tutors</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#3A9E8F]/20 border-2 border-[#3A9E8F] rounded-full px-4 py-1.5">
                <span className="text-[#3A9E8F] font-black text-[0.95rem]">24h</span>
                <span className="text-white text-[0.78rem] font-bold">avg response</span>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            TRUST STRIP — yellow
        ═══════════════════════════════════════════════════ */}
        <div className="bg-[#E8C86A] border-y-2 border-[#2E4F5E] py-3 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              { icon: '✓', text: 'Manually verified tutors' },
              { icon: '💬', text: 'Direct WhatsApp booking'  },
              { icon: '🌍', text: 'Online and home sessions'  },
            ].map(item => (
              <span key={item.text} className="flex items-center gap-1.5 text-[0.75rem] font-black text-[#2E4F5E] whitespace-nowrap">
                <span className="w-4 h-4 rounded-full bg-[#2E4F5E] flex items-center justify-center text-[#E8C86A] text-[0.55rem] font-black flex-shrink-0">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            STICKY SEARCH + FILTERS
            Psychology: sticky so filters are always reachable
            no matter how far the user has scrolled.
        ═══════════════════════════════════════════════════ */}
        <div className="sticky top-0 z-40 bg-white/97 backdrop-blur-sm border-b-2 border-[#E8C86A] px-4 sm:px-8 py-3.5 shadow-sm">
          <div className="max-w-6xl mx-auto">

            {/* Search bar */}
            <form method="GET" action="/tutors" className="relative mb-3">
              <input
                type="text"
                name="search"
                defaultValue={searchQuery}
                placeholder="Search by subject or tutor name..."
                className="w-full px-4 py-2.5 pl-10 rounded-xl border-2 border-[#D4D0C5] focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/25 text-[0.85rem] font-semibold text-[#2E4F5E] bg-white placeholder:text-[#b0c4cc] transition-all"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b0c4cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              {searchQuery && (
                <Link href="/tutors" className="absolute right-3 top-1/2 -translate-y-1/2 text-[0.68rem] font-black text-[#E05C42] hover:text-[#c44d36] transition-colors">
                  Clear
                </Link>
              )}
            </form>

            {/* Active subject chip */}
            {activeSubject !== 'All' && (
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-[#7da8b8] text-[0.68rem] font-bold">Showing:</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#E8C86A] text-[#2E4F5E] text-[0.65rem] font-black rounded-full border border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E]">
                  {activeSubject}
                  <Link href="/tutors" className="hover:text-[#E05C42] transition-colors">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </Link>
                </span>
              </div>
            )}

            {/* Filter chips — overflow scroll on mobile */}
            <div className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-hide">
              <Link href="/tutors"
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[0.72rem] font-black border-2 transition-all duration-150 ${
                  activeSubject === 'All'
                    ? 'bg-[#E05C42] text-white border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]'
                    : 'bg-white text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/15'
                }`}>
                All
              </Link>
              {POPULAR_SUBJECTS.map(s => (
                <Link key={s} href={`/tutors?subject=${encodeURIComponent(s)}`}
                  className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[0.72rem] font-black border-2 transition-all duration-150 ${
                    activeSubject === s
                      ? 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]'
                      : 'bg-white text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/15'
                  }`}>
                  {s}
                </Link>
              ))}
              {ALL_SUBJECTS.filter(s => !POPULAR_SUBJECTS.includes(s)).map(s => (
                <Link key={s} href={`/tutors?subject=${encodeURIComponent(s)}`}
                  className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[0.7rem] font-bold border transition-all duration-150 ${
                    activeSubject === s
                      ? 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E]'
                      : 'bg-white text-[#7da8b8] border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/10'
                  }`}>
                  {s}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            TUTOR GRID
        ═══════════════════════════════════════════════════ */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-14">

          {tutors.length > 0 ? (
            <>
              {/* Featured tutors */}
              {featuredTutors.length > 0 && activeSubject === 'All' && !searchQuery && (
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="w-1 h-6 bg-[#E8C86A] rounded-full border border-[#2E4F5E]" />
                    <h2 className="font-black text-[1.05rem] text-[#2E4F5E]">Featured Tutors</h2>
                    <span className="text-[0.65rem] font-black text-[#7da8b8] bg-[#FFFDF7] border border-[#D4D0C5] px-2 py-0.5 rounded-full">
                      Highly experienced
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {featuredTutors.map(tutor => (
                      <div key={tutor._id} className="relative">
                        <div className="absolute -top-2 -left-2 z-10">
                          <span className="bg-[#E8C86A] text-[#2E4F5E] text-[0.62rem] font-black px-2.5 py-0.5 rounded-full border border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E]">
                            Featured
                          </span>
                        </div>
                        <TutorCard tutor={tutor} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* All tutors */}
              {(regularTutors.length > 0 || featuredTutors.length === 0 || activeSubject !== 'All' || searchQuery) && (
                <div>
                  {featuredTutors.length > 0 && activeSubject === 'All' && !searchQuery && (
                    <div className="flex items-center gap-2.5 mb-5">
                      <div className="w-1 h-5 bg-[#D4D0C5] rounded-full" />
                      <h2 className="font-black text-[1rem] text-[#2E4F5E]">All Tutors</h2>
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {(regularTutors.length > 0 ? regularTutors : tutors).map(tutor => (
                      <TutorCard key={tutor._id} tutor={tutor} />
                    ))}
                  </div>
                </div>
              )}

              <p className="text-center text-[0.62rem] font-black text-[#b0c4cc] mt-10">
                Showing {tutors.length} verified {tutors.length === 1 ? 'tutor' : 'tutors'}
              </p>
            </>
          ) : (
            /* Empty state */
            <div className="text-center py-16 sm:py-24">
              <div className="w-20 h-20 bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] flex items-center justify-center text-4xl mx-auto mb-6">
                🔍
              </div>
              <h2 className="font-black text-[1.2rem] sm:text-[1.5rem] text-[#2E4F5E] mb-3">
                No tutors found{activeSubject !== 'All' ? ` for ${activeSubject}` : ''}
              </h2>
              <p className="text-[#4a6a78] text-[0.85rem] font-semibold max-w-sm mx-auto mb-7 leading-relaxed">
                We haven't added tutors for this subject yet. Try another category or explore all verified tutors.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/tutors"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#E05C42] text-white text-[0.82rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all">
                  View All Tutors
                </Link>
                <Link href="/become-tutor"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-[#2E4F5E] text-[0.82rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all">
                  Become a Tutor
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        {tutors.length > 5 && (
          <div className="bg-white border-t-2 border-[#E8C86A] py-7 px-4 sm:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-[#4a6a78] text-[0.85rem] font-bold mb-3">
                Can't find the right tutor?
              </p>
              <Link href="/become-tutor"
                className="inline-flex items-center gap-2 text-[0.85rem] font-black text-[#E05C42] hover:text-[#c44d36] transition-colors">
                Request a tutor for your subject
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}