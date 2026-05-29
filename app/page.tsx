

// import type { Metadata } from 'next'
// import Link from 'next/link'
// import TutorCard from '@/components/tutor/TutorCard'
// import { ITutor } from '@/types'

// export const metadata: Metadata = {
//   title: 'Learnova — Find Trusted Tutors For Every Subject',
//   description:
//     'Connect with verified, experienced tutors for online and home sessions across Pakistan, UAE, UK and beyond.',
// }

// async function getFeaturedTutors(): Promise<ITutor[]> {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tutors?limit=6`, {
//       next: { revalidate: 60 },
//     })
//     if (!res.ok) return []
//     return res.json()
//   } catch {
//     return []
//   }
// }

// const SUBJECTS = [
//   { name: 'Mathematics',      icon: '∑',    color: 'bg-[#E8C86A]/20 text-[#2E4F5E] border-[#E8C86A]' },
//   { name: 'English',          icon: 'Aa',   color: 'bg-[#3A9E8F]/15 text-[#2E4F5E] border-[#3A9E8F]' },
//   { name: 'Physics',          icon: '⚛',   color: 'bg-[#E8934A]/15 text-[#2E4F5E] border-[#E8934A]' },
//   { name: 'Chemistry',        icon: '🧪',   color: 'bg-[#3A9E8F]/15 text-[#2E4F5E] border-[#3A9E8F]' },
//   { name: 'Biology',          icon: '🧬',   color: 'bg-[#E8C86A]/20 text-[#2E4F5E] border-[#E8C86A]' },
//   { name: 'Computer Science', icon: '</>',  color: 'bg-[#E05C42]/12 text-[#2E4F5E] border-[#E05C42]' },
//   { name: 'IELTS',            icon: 'IEL',  color: 'bg-[#E8934A]/15 text-[#2E4F5E] border-[#E8934A]' },
//   { name: 'Spoken English',   icon: '💬',   color: 'bg-[#3A9E8F]/15 text-[#2E4F5E] border-[#3A9E8F]' },
//   { name: 'O Level',          icon: 'O/L',  color: 'bg-[#E8C86A]/20 text-[#2E4F5E] border-[#E8C86A]' },
//   { name: 'A Level',          icon: 'A/L',  color: 'bg-[#E8934A]/15 text-[#2E4F5E] border-[#E8934A]' },
//   { name: 'Entry Test Prep',  icon: '📝',   color: 'bg-[#E05C42]/12 text-[#2E4F5E] border-[#E05C42]' },
//   { name: 'Quran',            icon: 'ق',    color: 'bg-[#3A9E8F]/15 text-[#2E4F5E] border-[#3A9E8F]' },
// ]

// function SectionLabel({ text, center = false }: { text: string; center?: boolean }) {
//   return (
//     <div className={`flex items-center gap-2.5 mb-3 ${center ? 'justify-center' : ''}`}>
//       <span className="inline-block w-2 h-2 rounded-full bg-[#E05C42]" aria-hidden="true" />
//       <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#E05C42]">{text}</span>
//       <span className="inline-block w-2 h-2 rounded-full bg-[#E05C42]" aria-hidden="true" />
//     </div>
//   )
// }

// // Cute cartoon doodle SVG decorations
// function StarDoodle({ className = '' }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
//       <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" fill="currentColor"/>
//     </svg>
//   )
// }

// function WiggleLine({ className = '' }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 120 16" fill="none" className={className} aria-hidden="true">
//       <path d="M2 8 C12 2, 22 14, 32 8 C42 2, 52 14, 62 8 C72 2, 82 14, 92 8 C102 2, 112 14, 118 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
//     </svg>
//   )
// }

// export default async function HomePage() {
//   const tutors = await getFeaturedTutors()

//   return (
//     <div
//       className="bg-[#FFFDF7] text-[#2E4F5E] overflow-x-hidden"
//       style={{ fontFamily: "'Nunito', sans-serif" }}
//     >

//       {/* ═══════════════════════════════════════════
//           HERO
//       ════════════════════════════════════════════ */}
//       <section className="relative pt-16 sm:pt-24 pb-20 sm:pb-28 px-4 sm:px-8 overflow-hidden">

//         {/* Background decorative blobs */}
//         <div aria-hidden="true" className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-30"
//           style={{ background: 'radial-gradient(circle, #E8C86A 0%, transparent 70%)', transform: 'translate(30%, -20%)' }} />
//         <div aria-hidden="true" className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none opacity-20"
//           style={{ background: 'radial-gradient(circle, #3A9E8F 0%, transparent 70%)', transform: 'translate(-20%, 30%)' }} />

//         {/* Floating doodles */}
//         <StarDoodle className="absolute top-12 right-[15%] w-6 h-6 text-[#E8C86A] opacity-70 hidden sm:block" />
//         <StarDoodle className="absolute top-32 left-[8%] w-4 h-4 text-[#E05C42] opacity-60 hidden sm:block" />
//         <StarDoodle className="absolute bottom-20 right-[8%] w-5 h-5 text-[#3A9E8F] opacity-60 hidden sm:block" />

//         <div className="relative max-w-6xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//             {/* Left */}
//             <div>
//               {/* Social proof pill */}
//               <div className="inline-flex items-center gap-2 bg-[#E8C86A]/25 border-2 border-[#E8C86A] text-[#2E4F5E] text-[0.78rem] font-black px-4 py-2 rounded-full mb-7 shadow-[2px_2px_0_0_#E8C86A]">
//                 <span className="w-2 h-2 rounded-full bg-[#E05C42] animate-pulse" aria-hidden="true" />
//                 8,000+ happy students across 15 countries 🌟
//               </div>

//               {/* Headline — psychological: focus on outcome, not feature */}
//               <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[3.6rem] font-black leading-[1.08] tracking-[-0.025em] text-[#2E4F5E] mb-5">
//                 Stop Struggling.
//                 <br />
//                 <span className="relative inline-block">
//                   <span className="relative z-10">Start Excelling.</span>
//                   <WiggleLine className="absolute -bottom-2 left-0 w-full text-[#E8C86A] h-4" />
//                 </span>
//               </h1>

//               {/* Sub — problem-aware, empathetic */}
//               <p className="text-[#4a6a78] text-[1rem] sm:text-[1.05rem] leading-relaxed mb-8 max-w-lg font-semibold">
//                 Falling behind feels awful — but the right tutor changes everything. Find verified, experienced educators for online and home sessions across Pakistan, UAE & UK.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-3 mb-10">
//                 <Link
//                   href="/tutors"
//                   className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#E05C42] hover:bg-[#c94e37] text-white font-black rounded-xl shadow-[0_4px_0_0_#a83c2a] hover:shadow-[0_2px_0_0_#a83c2a] hover:translate-y-[2px] transition-all duration-150 text-[0.95rem] border-2 border-[#a83c2a]"
//                 >
//                   Find My Tutor
//                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </Link>
//                 <Link
//                   href="/become-tutor"
//                   className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-[#2E4F5E] text-[#2E4F5E] hover:bg-[#2E4F5E] hover:text-white font-black rounded-xl transition-all duration-200 text-[0.95rem] shadow-[0_3px_0_0_#2E4F5E] hover:shadow-[0_1px_0_0_#2E4F5E] hover:translate-y-[2px]"
//                 >
//                   Teach on Learnova
//                 </Link>
//               </div>

//               {/* Stats */}
//               <div className="flex flex-wrap gap-4 sm:gap-6">
//                 {[
//                   { value: '500+',            label: 'Verified Tutors',   color: 'border-[#E8C86A] bg-[#E8C86A]/15' },
//                   { value: 'Online & Home',   label: 'Learning Modes',    color: 'border-[#3A9E8F] bg-[#3A9E8F]/10' },
//                   { value: '30+ Subjects',    label: 'Areas Covered',     color: 'border-[#E8934A] bg-[#E8934A]/10' },
//                   { value: '15+ Countries',   label: 'Students Served',   color: 'border-[#E05C42] bg-[#E05C42]/10' },
//                 ].map(({ value, label, color }) => (
//                   <div key={label} className={`px-4 py-2.5 rounded-xl border-2 ${color}`}>
//                     <p className="font-black text-[#2E4F5E] text-[0.9rem] leading-tight">{value}</p>
//                     <p className="text-[#4a6a78] text-[0.7rem] font-bold mt-0.5">{label}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right – Tutor preview card */}
//             <div className="hidden lg:block" aria-hidden="true">
//               <div className="relative">
//                 {/* Main card */}
//                 <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] p-7">
//                   {/* Card header */}
//                   <div className="flex items-center gap-3 mb-5 pb-5 border-b-2 border-dashed border-[#E8C86A]">
//                     <div className="w-12 h-12 rounded-xl bg-[#2E4F5E] flex items-center justify-center flex-shrink-0">
//                       <svg width="28" height="28" viewBox="0 0 38 38" fill="none">
//                         <path d="M19 27V13" stroke="#E8C86A" strokeWidth="2.5" strokeLinecap="round"/>
//                         <path d="M11 13.5C13.5 13 16.5 13.5 19 15C21.5 13.5 24.5 13 27 13.5V26C24.5 25.5 21.5 26 19 27.5C16.5 26 13.5 25.5 11 26V13.5Z" fill="#3A9E8F" stroke="#E8C86A" strokeWidth="1.5"/>
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="font-black text-[1rem] text-[#2E4F5E]">Learnova Tutors</p>
//                       <p className="text-[0.72rem] text-[#3A9E8F] font-bold">All verified ✓</p>
//                     </div>
//                     <div className="ml-auto flex items-center gap-1 bg-[#E8C86A]/25 border border-[#E8C86A] px-2.5 py-1 rounded-full">
//                       <span className="w-1.5 h-1.5 rounded-full bg-[#3A9E8F] animate-pulse"/>
//                       <span className="text-[0.68rem] font-black text-[#2E4F5E]">LIVE</span>
//                     </div>
//                   </div>

//                   <div className="space-y-2.5">
//                     {[
//                       { initials: 'AK', name: 'Ahmad Khan',   subject: 'O & A Level Mathematics', exp: '8 yrs', bg: 'bg-[#E8C86A]',   text: 'text-[#2E4F5E]' },
//                       { initials: 'SR', name: 'Sara Rehman',  subject: 'IELTS & English',          exp: '5 yrs', bg: 'bg-[#3A9E8F]',   text: 'text-white'     },
//                       { initials: 'MH', name: 'M. Hassan',    subject: 'Physics & Chemistry',      exp: '6 yrs', bg: 'bg-[#E8934A]',   text: 'text-white'     },
//                     ].map((t) => (
//                       <div key={t.name} className="flex items-center gap-3 p-3 rounded-xl bg-[#FFFDF7] border-2 border-transparent hover:border-[#E8C86A] hover:bg-[#E8C86A]/10 transition-all duration-150 cursor-pointer">
//                         <div className={`w-10 h-10 rounded-xl ${t.bg} ${t.text} flex items-center justify-center text-xs font-black flex-shrink-0 border-2 border-[#2E4F5E]`}>
//                           {t.initials}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <p className="text-[0.85rem] font-black text-[#2E4F5E] truncate">{t.name}</p>
//                           <p className="text-[0.72rem] text-[#3A9E8F] font-bold truncate">{t.subject}</p>
//                         </div>
//                         <span className="text-[0.72rem] font-black text-[#2E4F5E] bg-[#E8C86A] px-2.5 py-1 rounded-full border border-[#2E4F5E] flex-shrink-0">{t.exp}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <Link href="/tutors" className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3 border-2 border-[#2E4F5E] hover:bg-[#2E4F5E] hover:text-white text-[#2E4F5E] text-[0.85rem] font-black rounded-xl transition-all duration-150 shadow-[0_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[2px]">
//                     View All Tutors →
//                   </Link>
//                 </div>

//                 {/* Floating badge */}
//                 <div className="absolute -bottom-4 -left-4 bg-[#E05C42] text-white rounded-xl px-4 py-3 shadow-[3px_3px_0_0_#a83c2a] border-2 border-[#a83c2a]">
//                   <p className="text-[0.68rem] font-bold opacity-90 mb-0.5">Students Helped</p>
//                   <p className="font-black text-2xl leading-tight">8,000+</p>
//                 </div>

//                 {/* Another floating badge */}
//                 <div className="absolute -top-4 -right-4 bg-[#E8C86A] text-[#2E4F5E] rounded-xl px-3 py-2 shadow-[3px_3px_0_0_#2E4F5E] border-2 border-[#2E4F5E] rotate-3">
//                   <p className="text-[0.72rem] font-black">⭐ Top Rated</p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ═══════════════════════════════════════════
//           TRUST SIGNALS
//       ════════════════════════════════════════════ */}
//       <div className="bg-[#2E4F5E] border-y-2 border-[#2E4F5E] py-4 px-4 sm:px-8 overflow-hidden">
//         <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
//           {[
//             { icon: '✓', text: 'CAIE Aligned' },
//             { icon: '✓', text: 'Edexcel Tutors' },
//             { icon: '✓', text: 'MDCAT & ECAT Prep' },
//             { icon: '✓', text: 'IELTS Band 7+' },
//             { icon: '✓', text: 'Online & At-Home' },
//           ].map((t) => (
//             <span key={t.text} className="flex items-center gap-1.5 text-[0.82rem] font-bold text-[#E8C86A] whitespace-nowrap">
//               <span className="w-4 h-4 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.6rem] font-black flex-shrink-0">{t.icon}</span>
//               {t.text}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* ═══════════════════════════════════════════
//           WHY CHOOSE US
//       ════════════════════════════════════════════ */}
//       <section className="bg-[#FFFDF7] py-16 sm:py-24 px-4 sm:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <SectionLabel text="Why Choose Us" center />
//             <h2 className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-[#2E4F5E] mb-4">
//               Why 8,000 Families Trust Us 🤝
//             </h2>
//             <p className="text-[#4a6a78] text-[0.95rem] max-w-md mx-auto font-semibold leading-relaxed">
//               Not just a directory — a platform built on real verification, flexibility, and results that matter.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {[
//               {
//                 icon: '🛡️',
//                 title: 'Verified Tutors',
//                 desc: 'Every tutor is manually reviewed. Only qualified, experienced educators make it through.',
//                 color: 'border-[#E8C86A] hover:bg-[#E8C86A]/10',
//                 shadow: 'hover:shadow-[4px_4px_0_0_#E8C86A]',
//               },
//               {
//                 icon: '📅',
//                 title: 'Flexible Scheduling',
//                 desc: 'Morning, evening, weekends — online or in-person. Your schedule, your terms, always.',
//                 color: 'border-[#3A9E8F] hover:bg-[#3A9E8F]/10',
//                 shadow: 'hover:shadow-[4px_4px_0_0_#3A9E8F]',
//               },
//               {
//                 icon: '🎯',
//                 title: 'Personalised',
//                 desc: 'Sessions tailored to your goals, learning pace, and academic level — not one-size-fits-all.',
//                 color: 'border-[#E8934A] hover:bg-[#E8934A]/10',
//                 shadow: 'hover:shadow-[4px_4px_0_0_#E8934A]',
//               },
//               {
//                 icon: '💬',
//                 title: 'Direct WhatsApp',
//                 desc: "No middlemen, no delays. Contact tutors directly and start your first session today.",
//                 color: 'border-[#E05C42] hover:bg-[#E05C42]/10',
//                 shadow: 'hover:shadow-[4px_4px_0_0_#E05C42]',
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className={`group p-6 rounded-2xl border-2 bg-white ${item.color} ${item.shadow} transition-all duration-200 cursor-default`}
//               >
//                 <div className="w-12 h-12 rounded-xl bg-[#FFFDF7] border-2 border-[#2E4F5E] flex items-center justify-center text-2xl mb-5 shadow-[2px_2px_0_0_#2E4F5E] group-hover:rotate-[-6deg] transition-transform duration-200">
//                   {item.icon}
//                 </div>
//                 <h3 className="font-black text-[1rem] text-[#2E4F5E] mb-2">{item.title}</h3>
//                 <p className="text-[#4a6a78] text-[0.84rem] font-semibold leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ═══════════════════════════════════════════
//           SUBJECTS
//       ════════════════════════════════════════════ */}
//       <section className="bg-[#2E4F5E] py-16 sm:py-24 px-4 sm:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
//             <div>
//               <div className="flex items-center gap-2.5 mb-3">
//                 <span className="inline-block w-2 h-2 rounded-full bg-[#E8C86A]" />
//                 <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#E8C86A]">What We Offer</span>
//                 <span className="inline-block w-2 h-2 rounded-full bg-[#E8C86A]" />
//               </div>
//               <h2 className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-white">
//                 Every Subject You Need 📚
//               </h2>
//             </div>
//             <p className="text-[#7da8b8] text-[0.85rem] max-w-xs font-semibold leading-relaxed">
//               From school fundamentals to professional certifications — we've got you covered.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
//             {SUBJECTS.map(({ name, icon, color }) => (
//               <Link
//                 key={name}
//                 href={`/tutors?subject=${encodeURIComponent(name)}`}
//                 className="group flex items-center gap-3 p-3.5 bg-[#FFFDF7] rounded-xl border-2 border-transparent hover:border-[#E8C86A] hover:shadow-[3px_3px_0_0_#E8C86A] hover:-translate-y-0.5 transition-all duration-150"
//               >
//                 <span className={`w-9 h-9 rounded-lg ${color} border-2 flex items-center justify-center text-[0.78rem] font-mono font-black flex-shrink-0 group-hover:rotate-[-8deg] transition-transform duration-150`} aria-hidden="true">
//                   {icon}
//                 </span>
//                 <span className="text-[0.82rem] font-black text-[#2E4F5E] group-hover:text-[#E05C42] transition-colors leading-tight">
//                   {name}
//                 </span>
//               </Link>
//             ))}
//           </div>

//           <div className="text-center mt-10">
//             <Link
//               href="/tutors"
//               className="inline-flex items-center gap-2 text-[0.88rem] font-black text-[#2E4F5E] bg-[#E8C86A] hover:bg-[#d4b558] border-2 border-[#2E4F5E] px-6 py-3 rounded-xl shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150"
//             >
//               Browse all tutors
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ═══════════════════════════════════════════
//           FEATURED TUTORS
//       ════════════════════════════════════════════ */}
//       {tutors.length > 0 && (
//         <section className="bg-[#FFFDF7] py-16 sm:py-24 px-4 sm:px-8">
//           <div className="max-w-6xl mx-auto">
//             <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
//               <div>
//                 <SectionLabel text="Our Tutors" />
//                 <h2 className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-[#2E4F5E]">
//                   Meet Your Future Tutor 👋
//                 </h2>
//               </div>
//               <Link
//                 href="/tutors"
//                 className="inline-flex items-center gap-2 text-[0.85rem] font-black text-[#2E4F5E] bg-[#E8C86A] border-2 border-[#2E4F5E] px-4 py-2.5 rounded-xl shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[2px] transition-all duration-150 flex-shrink-0"
//               >
//                 View all tutors →
//               </Link>
//             </div>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//               {tutors.map((tutor) => (
//                 <TutorCard key={tutor._id} tutor={tutor} />
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* ═══════════════════════════════════════════
//           HOW IT WORKS
//       ════════════════════════════════════════════ */}
//       <section className="bg-[#E8C86A]/20 py-16 sm:py-24 px-4 sm:px-8 border-y-2 border-[#E8C86A]">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-14">
//             <SectionLabel text="Simple Process" center />
//             <h2 className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-[#2E4F5E] mb-4">
//               From Search to First Session in Minutes ⚡
//             </h2>
//             <p className="text-[#4a6a78] text-[0.95rem] max-w-md mx-auto font-semibold">
//               No lengthy forms, no waiting weeks. Seriously — start today.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-3 gap-5 relative">
//             {/* Connector */}
//             <div aria-hidden="true"
//               className="hidden sm:block absolute top-[52px] left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-0.5 border-t-2 border-dashed border-[#2E4F5E] opacity-40" />

//             {[
//               { n: '01', emoji: '🔍', title: 'Explore Tutors',    desc: 'Browse by subject, city, and mode. Every tutor is manually verified — no fakes.',          bg: 'bg-[#E8C86A]' },
//               { n: '02', emoji: '💡', title: 'Choose Your Match', desc: 'Read bio, qualifications and experience. You\'ll know who\'s right within minutes.',         bg: 'bg-[#3A9E8F]' },
//               { n: '03', emoji: '🚀', title: 'Connect & Learn',   desc: 'Message on WhatsApp, book a session and start learning the same day. That\'s it!',           bg: 'bg-[#E05C42]' },
//             ].map((step) => (
//               <div
//                 key={step.n}
//                 className="flex flex-col items-center text-center p-7 bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] hover:-translate-y-1 hover:shadow-[4px_6px_0_0_#2E4F5E] transition-all duration-200"
//               >
//                 <div className={`w-14 h-14 rounded-2xl ${step.bg} border-2 border-[#2E4F5E] flex items-center justify-center mb-4 relative z-10 shadow-[2px_2px_0_0_#2E4F5E]`}>
//                   <span className="text-2xl">{step.emoji}</span>
//                 </div>
//                 <span className="text-[0.7rem] font-black text-[#4a6a78] tracking-widest mb-2">STEP {step.n}</span>
//                 <h3 className="font-black text-[1rem] text-[#2E4F5E] mb-3">{step.title}</h3>
//                 <p className="text-[#4a6a78] text-[0.84rem] font-semibold leading-relaxed">{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ═══════════════════════════════════════════
//           TESTIMONIALS
//       ════════════════════════════════════════════ */}
//       <section className="bg-[#FFFDF7] py-16 sm:py-24 px-4 sm:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <SectionLabel text="Student Stories" center />
//             <h2 className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-[#2E4F5E]">
//               Real Students. Real Results. 🏆
//             </h2>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {[
//               {
//                 quote: "My son's O Level Maths grade went from a D to an A in just three months. The tutor was patient and genuinely invested in his progress.",
//                 name: 'Sara M.',
//                 role: 'Parent · Islamabad',
//                 initials: 'SM',
//                 bg: 'bg-[#E8C86A]',
//                 text: 'text-[#2E4F5E]',
//                 accent: '#E8C86A',
//               },
//               {
//                 quote: "I had been struggling with IELTS for two years. Eight weeks with my tutor and I finally achieved the band score I needed for university!",
//                 name: 'Ahmed R.',
//                 role: 'Student · Lahore',
//                 initials: 'AR',
//                 bg: 'bg-[#3A9E8F]',
//                 text: 'text-white',
//                 accent: '#3A9E8F',
//               },
//               {
//                 quote: "Finding a qualified Quran teacher in Dubai was always difficult. Connected with a wonderful teacher within 24 hours on Learnova.",
//                 name: 'Fatima K.',
//                 role: 'Parent · Dubai, UAE',
//                 initials: 'FK',
//                 bg: 'bg-[#E05C42]',
//                 text: 'text-white',
//                 accent: '#E05C42',
//               },
//             ].map((t) => (
//               <div key={t.name}
//                 className="bg-white rounded-2xl border-2 border-[#2E4F5E] p-6 flex flex-col shadow-[4px_4px_0_0_#2E4F5E] hover:-translate-y-1 hover:shadow-[4px_6px_0_0_#2E4F5E] transition-all duration-200">
//                 {/* Stars */}
//                 <div className="flex gap-0.5 mb-4" aria-label="5 stars">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <svg key={i} className="w-4 h-4 text-[#E8C86A]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="text-[#4a6a78] text-[0.85rem] font-semibold leading-relaxed flex-1 mb-5">"{t.quote}"</p>
//                 <div className="flex items-center gap-3 pt-4 border-t-2 border-dashed border-[#E8C86A]">
//                   <div className={`w-10 h-10 rounded-xl ${t.bg} ${t.text} flex items-center justify-center text-xs font-black flex-shrink-0 border-2 border-[#2E4F5E]`}>
//                     {t.initials}
//                   </div>
//                   <div>
//                     <p className="text-[0.85rem] font-black text-[#2E4F5E]">{t.name}</p>
//                     <p className="text-[0.72rem] text-[#3A9E8F] font-bold">{t.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ═══════════════════════════════════════════
//           FOR EDUCATORS
//       ════════════════════════════════════════════ */}
//       <section className="bg-[#3A9E8F] py-16 sm:py-20 px-4 sm:px-8 border-y-2 border-[#2E4F5E]">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
//             <div>
//               <div className="flex items-center gap-2.5 mb-3">
//                 <span className="inline-block w-2 h-2 rounded-full bg-[#E8C86A]" />
//                 <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#E8C86A]">For Educators</span>
//                 <span className="inline-block w-2 h-2 rounded-full bg-[#E8C86A]" />
//               </div>
//               <h2 className="text-[1.7rem] sm:text-[2.1rem] font-black tracking-[-0.02em] text-white mb-3">
//                 Share Your Knowledge. <br className="hidden sm:block" />Earn What You Deserve. 🎓
//               </h2>
//               <p className="text-[#c5e8e3] text-[0.95rem] font-semibold max-w-lg leading-relaxed">
//                 Apply as a tutor and connect with motivated students who need exactly what you teach — no marketing, no hustle.
//               </p>
//             </div>
//             <Link
//               href="/become-tutor"
//               className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8C86A] hover:bg-[#d4b558] text-[#2E4F5E] font-black rounded-xl shadow-[0_4px_0_0_#2E4F5E] hover:shadow-[0_2px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150 text-[0.95rem] border-2 border-[#2E4F5E] whitespace-nowrap"
//             >
//               Become a Tutor
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ═══════════════════════════════════════════
//           FINAL CTA
//       ════════════════════════════════════════════ */}
//       <section className="bg-[#2E4F5E] py-20 sm:py-28 px-4 sm:px-8 relative overflow-hidden">
//         {/* Decorative dots */}
//         <div aria-hidden="true" className="absolute top-8 right-8 opacity-20">
//           <div className="grid grid-cols-5 gap-2">
//             {Array.from({ length: 25 }).map((_, i) => (
//               <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#E8C86A]" />
//             ))}
//           </div>
//         </div>
//         <div aria-hidden="true" className="absolute bottom-8 left-8 opacity-20">
//           <div className="grid grid-cols-5 gap-2">
//             {Array.from({ length: 25 }).map((_, i) => (
//               <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#3A9E8F]" />
//             ))}
//           </div>
//         </div>

//         <div className="relative max-w-3xl mx-auto text-center">
//           <div className="flex items-center justify-center gap-3 mb-5">
//             <span className="block w-8 h-0.5 rounded-full bg-[#E8C86A]" aria-hidden="true" />
//             <span className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#E8C86A]">Start Today</span>
//             <span className="block w-8 h-0.5 rounded-full bg-[#E8C86A]" aria-hidden="true" />
//           </div>

//           {/* Emotional, outcome-focused headline */}
//           <h2 className="text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-black text-white leading-[1.1] tracking-[-0.025em] mb-5">
//             Your Best Grade Is
//             <br />
//             <span className="relative inline-block">
//               <span className="relative z-10 text-[#E8C86A]">Waiting For You.</span>
//               <WiggleLine className="absolute -bottom-2 left-0 w-full text-[#E05C42] h-4" />
//             </span>
//           </h2>
//           <p className="text-white/60 text-[1rem] mb-10 max-w-xl mx-auto font-semibold leading-relaxed">
//             Browse verified tutor profiles and start learning in under two minutes. No commitment needed. 🎯
//           </p>
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <Link
//               href="/tutors"
//               className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E8C86A] hover:bg-[#d4b558] text-[#2E4F5E] font-black text-[0.95rem] rounded-xl shadow-[0_4px_0_0_#a88e3a] hover:shadow-[0_2px_0_0_#a88e3a] hover:translate-y-[2px] transition-all duration-150 border-2 border-[#a88e3a]"
//             >
//               Find a Tutor Now
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </Link>
//             <Link
//               href="/become-tutor"
//               className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 hover:border-white/60 text-white font-black text-[0.95rem] rounded-xl transition-all duration-200 hover:bg-white/8"
//             >
//               Become a Tutor
//             </Link>
//           </div>
//         </div>
//       </section>

//     </div>
//   )
// }








import type { Metadata } from 'next'
import Link from 'next/link'
import TutorCard from '@/components/tutor/TutorCard'
import { ITutor } from '@/types'

export const metadata: Metadata = {
  title: 'Learnova — Find Trusted Tutors For Every Subject',
  description: 'Connect with verified, experienced tutors for online and home sessions across Pakistan, UAE, UK and beyond.',
}

async function getFeaturedTutors(): Promise<ITutor[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tutors?limit=6`, { next: { revalidate: 60 } })
    if (!res.ok) return []
    return res.json()
  } catch { return [] }
}

const SUBJECTS = [
  { name: 'Mathematics',      icon: '∑',    bg: 'bg-[#E8C86A]',  text: 'text-[#2E4F5E]' },
  { name: 'English',          icon: 'Aa',   bg: 'bg-[#3A9E8F]',  text: 'text-white'     },
  { name: 'Physics',          icon: '⚛',   bg: 'bg-[#E8934A]',  text: 'text-white'     },
  { name: 'Chemistry',        icon: '🧪',   bg: 'bg-[#E05C42]',  text: 'text-white'     },
  { name: 'Biology',          icon: '🧬',   bg: 'bg-[#3A9E8F]',  text: 'text-white'     },
  { name: 'Computer Science', icon: '</>',  bg: 'bg-[#2E4F5E]',  text: 'text-[#E8C86A]' },
  { name: 'IELTS',            icon: 'IEL',  bg: 'bg-[#E8934A]',  text: 'text-white'     },
  { name: 'Spoken English',   icon: '💬',   bg: 'bg-[#E8C86A]',  text: 'text-[#2E4F5E]' },
  { name: 'O Level',          icon: 'O/L',  bg: 'bg-[#2E4F5E]',  text: 'text-[#E8C86A]' },
  { name: 'A Level',          icon: 'A/L',  bg: 'bg-[#E05C42]',  text: 'text-white'     },
  { name: 'Entry Test Prep',  icon: '📝',   bg: 'bg-[#3A9E8F]',  text: 'text-white'     },
  { name: 'Quran',            icon: 'ق',    bg: 'bg-[#E8C86A]',  text: 'text-[#2E4F5E]' },
]

/* ── Reusable pill label ── */
function Eyebrow({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
      <span className={`text-[0.68rem] font-black uppercase tracking-[0.25em] ${light ? 'text-[#E8C86A]' : 'text-[#E05C42]'}`}>{text}</span>
      <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
    </div>
  )
}

/* ── Wiggle underline ── */
function Wiggle({ color = '#E8C86A' }: { color?: string }) {
  return (
    <svg viewBox="0 0 160 10" fill="none" className="absolute -bottom-1.5 left-0 w-full h-3 pointer-events-none" aria-hidden="true">
      <path d="M2 5 C20 1, 38 9, 56 5 C74 1, 92 9, 110 5 C128 1, 146 9, 158 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

export default async function HomePage() {
  const tutors = await getFeaturedTutors()

  return (
    <div className="text-[#2E4F5E] overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>

      {/* ══════════════════════════════════════════════════════
          § 1  HERO — bg: cream  (Problem → Aspiration)
          Psychological: speak to fear of falling behind,
          then offer the hopeful outcome immediately.
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#FFFDF7] relative pt-14 sm:pt-22 pb-20 sm:pb-28 px-4 sm:px-8 overflow-hidden">
        {/* Decorative blobs */}
        <div aria-hidden="true" className="absolute top-0 right-0 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #E8C86A, transparent 70%)', transform: 'translate(35%,-25%)' }} />
        <div aria-hidden="true" className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #3A9E8F, transparent 70%)', transform: 'translate(-25%,30%)' }} />

        {/* Floating stars — hidden on mobile */}
        {[
          { top: '10%', right: '14%', size: 'w-5 h-5', color: 'text-[#E8C86A]' },
          { top: '28%', left: '6%',  size: 'w-3 h-3', color: 'text-[#E05C42]' },
          { bottom: '18%', right: '7%', size: 'w-4 h-4', color: 'text-[#3A9E8F]' },
        ].map((s, i) => (
          <svg key={i} viewBox="0 0 24 24" className={`absolute hidden sm:block ${s.size} ${s.color} opacity-60`}
            style={{ top: s.top, right: s.right, left: s.left, bottom: s.bottom }} aria-hidden="true">
            <path d="M12 2 L13.8 8.2 L20 10 L13.8 11.8 L12 18 L10.2 11.8 L4 10 L10.2 8.2 Z" fill="currentColor"/>
          </svg>
        ))}

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Left copy ── */}
            <div>
              {/* Social proof badge */}
              <div className="inline-flex items-center gap-2 bg-[#E8C86A]/30 border-2 border-[#E8C86A] text-[#2E4F5E] text-[0.76rem] font-black px-4 py-2 rounded-full mb-8 shadow-[2px_2px_0_0_#d4b558]">
                <span className="w-2 h-2 rounded-full bg-[#E05C42] animate-pulse" />
                Trusted by 8,000+ students in 15 countries 🌍
              </div>

              <h1 className="text-[2.6rem] sm:text-[3.4rem] lg:text-[3.8rem] font-black leading-[1.06] tracking-[-0.025em] text-[#2E4F5E] mb-6">
                Stop Struggling.
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">Start Excelling.</span>
                  <Wiggle />
                </span>
              </h1>

              {/* Empathetic — names the pain, then the solution */}
              <p className="text-[#4a6a78] text-[1rem] sm:text-[1.06rem] leading-[1.75] mb-9 max-w-lg font-semibold">
                Falling behind feels terrible — but one great tutor changes
                everything. Find verified educators for online & home sessions
                across Pakistan, UAE & UK.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link href="/tutors"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#E05C42] text-white font-black rounded-xl border-2 border-[#a83c2a] shadow-[0_4px_0_0_#a83c2a] hover:shadow-[0_2px_0_0_#a83c2a] hover:translate-y-[2px] transition-all duration-150 text-[0.92rem] whitespace-nowrap">
                  Find My Tutor →
                </Link>
                <Link href="/become-tutor"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#2E4F5E] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[0_3px_0_0_#2E4F5E] hover:shadow-[0_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150 text-[0.92rem] whitespace-nowrap">
                  Teach on Learnova
                </Link>
              </div>

              {/* Stat chips */}
              <div className="flex flex-wrap gap-3">
                {[
                  { v: '500+',          l: 'Verified Tutors',  bg: 'bg-[#E8C86A]/25 border-[#E8C86A]' },
                  { v: 'Online & Home', l: 'Learning Modes',   bg: 'bg-[#3A9E8F]/15 border-[#3A9E8F]' },
                  { v: '30+ Subjects',  l: 'Areas Covered',    bg: 'bg-[#E8934A]/15 border-[#E8934A]' },
                  { v: '15+ Countries', l: 'Students Served',  bg: 'bg-[#E05C42]/12 border-[#E05C42]' },
                ].map(({ v, l, bg }) => (
                  <div key={l} className={`px-4 py-2.5 rounded-xl border-2 ${bg}`}>
                    <p className="font-black text-[#2E4F5E] text-[0.88rem] leading-tight">{v}</p>
                    <p className="text-[#4a6a78] text-[0.68rem] font-bold mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right — preview card ── */}
            <div className="hidden lg:flex justify-center" aria-hidden="true">
              <div className="relative w-full max-w-sm">
                <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] p-6">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-dashed border-[#E8C86A]">
                    <div className="w-11 h-11 rounded-xl bg-[#2E4F5E] flex items-center justify-center flex-shrink-0">
                      <svg width="22" height="22" viewBox="0 0 38 38" fill="none">
                        <path d="M19 27V13" stroke="#E8C86A" strokeWidth="2.5" strokeLinecap="round"/>
                        <path d="M11 13.5C13.5 13 16.5 13.5 19 15C21.5 13.5 24.5 13 27 13.5V26C24.5 25.5 21.5 26 19 27.5C16.5 26 13.5 25.5 11 26V13.5Z" fill="#3A9E8F" stroke="#E8C86A" strokeWidth="1.5"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-black text-[0.95rem] text-[#2E4F5E]">Learnova Tutors</p>
                      <p className="text-[0.7rem] text-[#3A9E8F] font-bold">All manually verified ✓</p>
                    </div>
                    <div className="flex items-center gap-1 bg-[#E8C86A]/25 border border-[#E8C86A] px-2 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3A9E8F] animate-pulse"/>
                      <span className="text-[0.62rem] font-black text-[#2E4F5E]">LIVE</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { i: 'AK', name: 'Ahmad Khan',  sub: 'O & A Level Mathematics', exp: '8 yrs', bg: 'bg-[#E8C86A]',  t: 'text-[#2E4F5E]' },
                      { i: 'SR', name: 'Sara Rehman', sub: 'IELTS & English',          exp: '5 yrs', bg: 'bg-[#3A9E8F]',  t: 'text-white'    },
                      { i: 'MH', name: 'M. Hassan',   sub: 'Physics & Chemistry',      exp: '6 yrs', bg: 'bg-[#E8934A]',  t: 'text-white'    },
                    ].map((t) => (
                      <div key={t.name} className="flex items-center gap-3 p-3 rounded-xl bg-[#FFFDF7] border-2 border-transparent hover:border-[#E8C86A] transition-all duration-150">
                        <div className={`w-9 h-9 rounded-xl ${t.bg} ${t.t} text-[0.7rem] font-black flex items-center justify-center border-2 border-[#2E4F5E] flex-shrink-0`}>{t.i}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[0.82rem] font-black text-[#2E4F5E] truncate">{t.name}</p>
                          <p className="text-[0.68rem] text-[#3A9E8F] font-bold truncate">{t.sub}</p>
                        </div>
                        <span className="text-[0.68rem] font-black text-[#2E4F5E] bg-[#E8C86A] px-2 py-0.5 rounded-full border border-[#2E4F5E] flex-shrink-0">{t.exp}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/tutors" className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 border-2 border-[#2E4F5E] hover:bg-[#2E4F5E] hover:text-white text-[#2E4F5E] text-[0.82rem] font-black rounded-xl transition-all duration-150 shadow-[0_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[2px]">
                    View All Tutors →
                  </Link>
                </div>
                {/* Floating badges */}
                <div className="absolute -bottom-4 -left-5 bg-[#E05C42] text-white rounded-xl px-4 py-2.5 border-2 border-[#a83c2a] shadow-[3px_3px_0_0_#a83c2a]">
                  <p className="text-[0.62rem] font-bold opacity-80 mb-0.5">Students Helped</p>
                  <p className="font-black text-xl leading-tight">8,000+</p>
                </div>
                <div className="absolute -top-4 -right-4 bg-[#E8C86A] text-[#2E4F5E] rounded-xl px-3 py-1.5 border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] rotate-3">
                  <p className="text-[0.7rem] font-black">⭐ Top Rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          § 2  TRUST STRIP — bg: dark teal
          Just proof, scannable, no fluff.
      ══════════════════════════════════════════════════════ */}
      <div className="bg-[#2E4F5E] py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {['CAIE Aligned', 'Edexcel Tutors', 'MDCAT & ECAT Prep', 'IELTS Band 7+', 'Online & At-Home'].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-[0.8rem] font-bold text-[#E8C86A] whitespace-nowrap">
              <span className="w-4 h-4 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.58rem] font-black flex-shrink-0">✓</span>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          § 3  WHY US — bg: teal  (Build Trust)
          Psychological: address objections before they arise.
          "Is this legit?" — Yes, here's why.
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#3A9E8F] py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Eyebrow text="Why Choose Us" light />
            <h2 className="text-[1.9rem] sm:text-[2.5rem] font-black tracking-[-0.02em] text-white mb-4">
              Why 8,000 Families Trust Learnova
            </h2>
            <p className="text-[#c5e8e3] text-[0.93rem] max-w-md mx-auto font-semibold leading-relaxed">
              Not just a tutor list — a platform built on real verification, genuine flexibility, and outcomes that matter.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🛡️', title: 'Verified Tutors',     desc: 'Every tutor is manually reviewed. Only qualified educators make it through our screening.',     border: 'border-[#E8C86A]', hover: 'hover:bg-[#E8C86A]/10 hover:shadow-[4px_4px_0_0_#E8C86A]' },
              { icon: '📅', title: 'Flexible Scheduling', desc: 'Morning, evening, weekends — online or in-person. Your schedule, not ours.',                     border: 'border-white',     hover: 'hover:bg-white/10 hover:shadow-[4px_4px_0_0_white]'     },
              { icon: '🎯', title: 'Personalised',        desc: 'Sessions built around your goals, learning pace, and academic level. No one-size-fits-all.',     border: 'border-[#E8934A]', hover: 'hover:bg-[#E8934A]/10 hover:shadow-[4px_4px_0_0_#E8934A]' },
              { icon: '💬', title: 'Direct WhatsApp',     desc: 'No middlemen. Contact tutors directly on WhatsApp and start your first session the same day.',   border: 'border-[#E05C42]', hover: 'hover:bg-[#E05C42]/10 hover:shadow-[4px_4px_0_0_#E05C42]' },
            ].map((c) => (
              <div key={c.title} className={`group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 ${c.border} ${c.hover} transition-all duration-200`}>
                <div className="w-12 h-12 rounded-xl bg-white/15 border-2 border-white/40 flex items-center justify-center text-2xl mb-5 shadow-[2px_2px_0_0_rgba(255,255,255,0.3)] group-hover:rotate-[-6deg] transition-transform duration-200">
                  {c.icon}
                </div>
                <h3 className="font-black text-[1rem] text-white mb-2">{c.title}</h3>
                <p className="text-[#c5e8e3] text-[0.82rem] font-semibold leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          § 4  SUBJECTS — bg: dark teal  (Desire / breadth)
          Psychological: show range so no one feels excluded.
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#2E4F5E] py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <Eyebrow text="What We Offer" light />
              <h2 className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-white">
                Every Subject You Need 📚
              </h2>
            </div>
            <p className="text-[#7da8b8] text-[0.84rem] max-w-xs font-semibold leading-relaxed">
              From school fundamentals to professional certifications — fully covered.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {SUBJECTS.map(({ name, icon, bg, text }) => (
              <Link key={name} href={`/tutors?subject=${encodeURIComponent(name)}`}
                className="group flex items-center gap-3 p-3.5 bg-white/8 rounded-xl border-2 border-white/10 hover:border-[#E8C86A] hover:bg-white/15 hover:shadow-[3px_3px_0_0_#E8C86A] hover:-translate-y-0.5 transition-all duration-150">
                <span className={`w-9 h-9 rounded-lg ${bg} ${text} border-2 border-white/30 flex items-center justify-center text-[0.75rem] font-mono font-black flex-shrink-0 group-hover:rotate-[-8deg] transition-transform duration-150`}>
                  {icon}
                </span>
                <span className="text-[0.8rem] font-black text-white group-hover:text-[#E8C86A] transition-colors leading-tight">
                  {name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/tutors"
              className="inline-flex items-center gap-2 text-[0.88rem] font-black text-[#2E4F5E] bg-[#E8C86A] hover:bg-[#d4b558] border-2 border-[#2E4F5E] px-6 py-3 rounded-xl shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150">
              Browse all tutors →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          § 5  FEATURED TUTORS — bg: cream  (Meet the people)
          Psychological: faces & names build personal connection.
      ══════════════════════════════════════════════════════ */}
      {tutors.length > 0 && (
        <section className="bg-[#FFFDF7] py-16 sm:py-24 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
              <div>
                <Eyebrow text="Our Tutors" />
                <h2 className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-[#2E4F5E]">
                  Meet Your Future Tutor 👋
                </h2>
              </div>
              <Link href="/tutors"
                className="inline-flex items-center gap-2 text-[0.84rem] font-black text-[#2E4F5E] bg-[#E8C86A] border-2 border-[#2E4F5E] px-4 py-2.5 rounded-xl shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[2px] transition-all duration-150 flex-shrink-0">
                View all tutors →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {tutors.map((tutor) => <TutorCard key={tutor._id} tutor={tutor} />)}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          § 6  HOW IT WORKS — bg: yellow  (Remove friction)
          Psychological: simplicity reduces anxiety about starting.
          3 steps = feels manageable.
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#E8C86A] py-16 sm:py-24 px-4 sm:px-8 border-y-2 border-[#2E4F5E]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Eyebrow text="Simple Process" />
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-[#2E4F5E] mb-4">
              Search to First Session in Minutes ⚡
            </h2>
            <p className="text-[#4a6a78] text-[0.93rem] max-w-sm mx-auto font-semibold">
              No long forms. No waiting weeks. Start today — seriously.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 relative">
            {/* Connector dashes */}
            <div aria-hidden="true"
              className="hidden sm:block absolute top-[52px] left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] border-t-2 border-dashed border-[#2E4F5E] opacity-40" />
            {[
              { n: '01', emoji: '🔍', title: 'Explore Tutors',    desc: 'Browse by subject, city & mode. Every tutor is manually verified — zero fakes.',    bg: 'bg-[#2E4F5E]' },
              { n: '02', emoji: '💡', title: 'Choose Your Match', desc: 'Read bio, qualifications & experience. You\'ll know who is right within minutes.',   bg: 'bg-[#E05C42]' },
              { n: '03', emoji: '🚀', title: 'Connect & Learn',   desc: 'Message on WhatsApp, book a slot and start learning the same day. That\'s it!',      bg: 'bg-[#3A9E8F]' },
            ].map((s) => (
              <div key={s.n} className="flex flex-col items-center text-center p-7 bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] hover:-translate-y-1 hover:shadow-[4px_6px_0_0_#2E4F5E] transition-all duration-200">
                <div className={`w-14 h-14 rounded-2xl ${s.bg} border-2 border-[#2E4F5E] flex items-center justify-center mb-4 shadow-[2px_2px_0_0_rgba(0,0,0,0.18)] relative z-10`}>
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
          § 7  TESTIMONIALS — bg: cream  (Overcome scepticism)
          Psychological: real names, real transformations,
          emotion-first ("I finally…", "went from D to A").
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#FFFDF7] py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Eyebrow text="Student Stories" />
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-[#2E4F5E]">
              Real Students. Real Transformations. 🏆
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { quote: "My son went from a D to an A in O Level Maths in just three months. The tutor was patient and genuinely invested in his progress.", name: 'Sara M.', role: 'Parent · Islamabad', init: 'SM', bg: 'bg-[#E8C86A]', t: 'text-[#2E4F5E]' },
              { quote: "I struggled with IELTS for two years. Eight weeks with my tutor and I finally got the band score I needed for university!", name: 'Ahmed R.', role: 'Student · Lahore', init: 'AR', bg: 'bg-[#3A9E8F]', t: 'text-white' },
              { quote: "Finding a Quran teacher in Dubai was always hard. Connected with a wonderful teacher within 24 hours on Learnova.", name: 'Fatima K.', role: 'Parent · Dubai, UAE', init: 'FK', bg: 'bg-[#E05C42]', t: 'text-white' },
            ].map((r) => (
              <div key={r.name} className="bg-white rounded-2xl border-2 border-[#2E4F5E] p-6 flex flex-col shadow-[4px_4px_0_0_#2E4F5E] hover:-translate-y-1 hover:shadow-[4px_6px_0_0_#2E4F5E] transition-all duration-200">
                <div className="flex gap-0.5 mb-4" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#E8C86A]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[#4a6a78] text-[0.84rem] font-semibold leading-relaxed flex-1 mb-5">"{r.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t-2 border-dashed border-[#E8C86A]">
                  <div className={`w-10 h-10 rounded-xl ${r.bg} ${r.t} text-[0.72rem] font-black flex items-center justify-center border-2 border-[#2E4F5E] flex-shrink-0`}>{r.init}</div>
                  <div>
                    <p className="text-[0.84rem] font-black text-[#2E4F5E]">{r.name}</p>
                    <p className="text-[0.7rem] text-[#3A9E8F] font-bold">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          § 8  FOR EDUCATORS — bg: orange  (Secondary audience)
          Psychological: separate CTA so tutors don't feel ignored.
          "Earn what you deserve" — autonomy + reward.
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#E8934A] py-16 sm:py-20 px-4 sm:px-8 border-y-2 border-[#2E4F5E]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <Eyebrow text="For Educators" />
            <h2 className="text-[1.7rem] sm:text-[2.1rem] font-black tracking-[-0.02em] text-white mb-3">
              Share Your Knowledge.<br className="hidden sm:block"/> Earn What You Deserve. 🎓
            </h2>
            <p className="text-white/80 text-[0.93rem] font-semibold max-w-lg leading-relaxed">
              Apply as a tutor and connect with motivated students who need exactly what you teach — no marketing hustle needed.
            </p>
          </div>
          <Link href="/become-tutor"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-[#2E4F5E] text-[#E8C86A] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[0_4px_0_0_#1a3240] hover:shadow-[0_2px_0_0_#1a3240] hover:translate-y-[2px] transition-all duration-150 text-[0.92rem] whitespace-nowrap">
            Become a Tutor →
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          § 9  FINAL CTA — bg: dark teal  (Action)
          Psychological: outcome-focused headline, low friction
          copy ("under two minutes"), dual CTAs.
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#2E4F5E] py-20 sm:py-28 px-4 sm:px-8 relative overflow-hidden">
        {/* Dot grid decorations */}
        {[{ pos: 'top-6 right-6', color: 'bg-[#E8C86A]' }, { pos: 'bottom-6 left-6', color: 'bg-[#3A9E8F]' }].map((d, i) => (
          <div key={i} aria-hidden="true" className={`absolute ${d.pos} grid grid-cols-5 gap-2 opacity-20`}>
            {Array.from({ length: 25 }).map((_, j) => <div key={j} className={`w-1.5 h-1.5 rounded-full ${d.color}`}/>)}
          </div>
        ))}

        <div className="relative max-w-2xl mx-auto text-center">
          <Eyebrow text="Start Today" light />
          <h2 className="text-[2.2rem] sm:text-[3rem] font-black text-white leading-[1.1] tracking-[-0.025em] mb-5">
            Your Best Grade Is
            <br />
            <span className="relative inline-block text-[#E8C86A]">
              <span className="relative z-10">Waiting For You.</span>
              <Wiggle color="#E05C42" />
            </span>
          </h2>
          <p className="text-white/55 text-[0.97rem] mb-10 max-w-lg mx-auto font-semibold leading-relaxed">
            Browse verified tutor profiles and start learning in under two minutes. No commitment needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/tutors"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E8C86A] text-[#2E4F5E] font-black text-[0.92rem] rounded-xl border-2 border-[#a88e3a] shadow-[0_4px_0_0_#a88e3a] hover:shadow-[0_2px_0_0_#a88e3a] hover:translate-y-[2px] transition-all duration-150">
              Find a Tutor Now →
            </Link>
            <Link href="/become-tutor"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 hover:border-white/60 text-white font-black text-[0.92rem] rounded-xl transition-all duration-200">
              Become a Tutor
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}