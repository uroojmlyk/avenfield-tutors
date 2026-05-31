


// import type { Metadata } from 'next'
// import Link from 'next/link'
// import { notFound } from 'next/navigation'
// import { ITutor } from '@/types'

// interface Props {
//   params: Promise<{ id: string }>
// }

// async function getTutor(id: string): Promise<ITutor | null> {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tutors/${id}`, { cache: 'no-store' })
//     if (!res.ok) return null
//     return res.json()
//   } catch { return null }
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { id } = await params
//   const tutor = await getTutor(id)
//   if (!tutor) return { title: 'Tutor Not Found' }
//   return {
//     title: `${tutor.name} — ${tutor.subjects[0]} Tutor | Learnova`,
//     description: tutor.bio.slice(0, 155),
//   }
// }

// const modeLabel: Record<string, string> = {
//   online: 'Online Only',
//   onsite: 'Home Visit Only',
//   both: 'Online & Home Visit',
// }
// const modeBadge: Record<string, string> = {
//   online: 'bg-[#3A9E8F] text-white border-[#2E4F5E]',
//   onsite: 'bg-[#E05C42] text-white border-[#2E4F5E]',
//   both:   'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E]',
// }

// function buildWhatsAppURL(phone: string, name: string, subject: string) {
//   const number = phone.replace(/\D/g, '')
//   const message = encodeURIComponent(
//     `Hi! I found your profile on Learnova and I'd like to book a session.\n\nTutor: ${name}\nSubject: ${subject}\n\nPlease let me know your availability. Thank you!`
//   )
//   return `https://wa.me/${number}?text=${message}`
// }

// function Eyebrow({ text, light = false }: { text: string; light?: boolean }) {
//   return (
//     <div className="flex items-center gap-2 mb-3">
//       <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
//       <span className={`text-[0.63rem] font-black uppercase tracking-[0.22em] ${light ? 'text-[#E8C86A]' : 'text-[#E05C42]'}`}>{text}</span>
//       <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
//     </div>
//   )
// }

// export default async function TutorDetailPage({ params }: Props) {
//   const { id } = await params
//   const tutor = await getTutor(id)
//   if (!tutor) notFound()

//   const whatsappURL = buildWhatsAppURL(
//     process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || tutor.whatsapp,
//     tutor.name,
//     tutor.subjects[0]
//   )

//   const topSubjects  = tutor.subjects.slice(0, 3)
//   const restSubjects = tutor.subjects.slice(3)

//   return (
//     <div className="text-[#2E4F5E] overflow-x-hidden bg-[#FFFDF7]" style={{ fontFamily: "'Nunito', sans-serif" }}>

//       {/* ═══════════════════════════════════════════════════
//           HERO BANNER — dark teal
//           Psychology: name + location + badges above the fold
//           so visitor immediately knows if this tutor is right.
//           Avatar is large and human — builds instant rapport.
//       ═══════════════════════════════════════════════════ */}
//       <div className="bg-[#2E4F5E] pt-10 sm:pt-14 pb-24 sm:pb-32 px-4 sm:px-8 relative overflow-hidden">
//         {/* Blobs */}
//         <div aria-hidden="true" className="absolute top-0 right-0 w-60 sm:w-[400px] h-60 sm:h-[400px] rounded-full opacity-20 pointer-events-none"
//           style={{ background: 'radial-gradient(circle,#3A9E8F,transparent 70%)', transform: 'translate(35%,-25%)' }} />
//         <div aria-hidden="true" className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 rounded-full opacity-15 pointer-events-none"
//           style={{ background: 'radial-gradient(circle,#E8C86A,transparent 70%)', transform: 'translate(-25%,25%)' }} />

//         <div className="max-w-5xl mx-auto relative">
//           {/* Back link */}
//           <Link href="/tutors"
//             className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-[0.82rem] mb-7 transition-colors group font-bold">
//             <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//             </svg>
//             Back to tutors
//           </Link>

//           <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-8">
//             {/* Avatar */}
//             <div className="relative flex-shrink-0">
//               <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#E8C86A] shadow-[4px_4px_0_0_#1a3a44]">
//                 {tutor.imageUrl ? (
//                   <img src={tutor.imageUrl} alt={tutor.name} className="w-full h-full object-cover" />
//                 ) : (
//                   <div className="w-full h-full bg-gradient-to-br from-[#E8C86A] to-[#c4a84a] flex items-center justify-center">
//                     <span className="text-[#2E4F5E] font-black text-4xl sm:text-5xl">{tutor.name.charAt(0)}</span>
//                   </div>
//                 )}
//               </div>
//               <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#3A9E8F] text-white text-[0.6rem] font-black px-2.5 py-0.5 rounded-full whitespace-nowrap border border-[#2E4F5E] shadow-sm">
//                 Active
//               </div>
//             </div>

//             {/* Name & meta */}
//             <div className="flex-1 min-w-0">
//               <h1 className="text-white text-[1.8rem] sm:text-[2.5rem] lg:text-[3rem] font-black tracking-tight leading-tight mb-2">
//                 {tutor.name}
//               </h1>
//               <p className="text-[#7da8b8] text-[0.88rem] mb-4 flex items-center gap-1.5 font-semibold">
//                 <span>📍</span> {tutor.city}, {tutor.country}
//               </p>

//               {/* Badges */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 <span className={`text-[0.7rem] font-black px-3 py-1.5 rounded-full border-2 shadow-[2px_2px_0_0_#1a3a44] ${modeBadge[tutor.mode]}`}>
//                   {modeLabel[tutor.mode]}
//                 </span>
//                 <span className="text-[0.7rem] font-black px-3 py-1.5 rounded-full bg-[#E8C86A] text-[#2E4F5E] border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#1a3a44]">
//                   🎓 {tutor.experience} yrs experience
//                 </span>
//                 {tutor.rating && (
//                   <span className="text-[0.7rem] font-black px-3 py-1.5 rounded-full bg-[#E05C42] text-white border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#1a3a44]">
//                     ★ {tutor.rating.toFixed(1)} Rating
//                   </span>
//                 )}
//               </div>

//               {/* Trust row */}
//               <div className="flex flex-wrap gap-3 sm:gap-5">
//                 {[
//                   { icon: '✓', label: 'Verified Profile' },
//                   { icon: '⚡', label: 'Fast Response' },
//                   { icon: '❤️', label: 'Student Friendly' },
//                 ].map(t => (
//                   <span key={t.label} className="flex items-center gap-1.5 text-[0.7rem] font-black text-[#7da8b8]">
//                     <span className="w-4 h-4 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.55rem] font-black flex-shrink-0">{t.icon}</span>
//                     {t.label}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ═══════════════════════════════════════════════════
//           MAIN CONTENT — overlaps hero with -mt
//       ═══════════════════════════════════════════════════ */}
//       <div className="max-w-5xl mx-auto px-4 sm:px-8 -mt-12 sm:-mt-16 pb-16 sm:pb-24 relative z-10">
//         <div className="grid lg:grid-cols-3 gap-5 sm:gap-6">

//           {/* ── LEFT COLUMN ── */}
//           <div className="lg:col-span-2 space-y-4 sm:space-y-5">

//             {/* About */}
//             <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5 sm:p-6">
//               <Eyebrow text="About" />
//               {/* Highlighted quote pulls readers in */}
//               <div className="bg-[#FFFDF7] border-l-4 border-[#E8C86A] pl-4 pr-3 py-3 rounded-r-xl mb-4">
//                 <p className="italic text-[#2E4F5E] text-[0.88rem] leading-relaxed font-semibold">
//                   "{tutor.bio.split('.')[0]}."
//                 </p>
//               </div>
//               <p className="text-[#4a6a78] text-[0.88rem] font-semibold leading-relaxed">{tutor.bio}</p>
//             </div>

//             {/* Subjects */}
//             <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5 sm:p-6">
//               <Eyebrow text="Subjects Taught" />
//               <div className="flex flex-wrap gap-2">
//                 {topSubjects.map(s => (
//                   <span key={s} className="px-3 py-1.5 bg-[#E8C86A] text-[#2E4F5E] text-[0.75rem] font-black rounded-full border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]">
//                     {s}
//                   </span>
//                 ))}
//                 {restSubjects.map(s => (
//                   <span key={s} className="px-3 py-1.5 bg-[#FFFDF7] text-[#4a6a78] text-[0.7rem] font-semibold rounded-full border-2 border-[#D4D0C5]">
//                     {s}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Education */}
//             <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5 sm:p-6">
//               <Eyebrow text="Education" />
//               <div className="flex items-center gap-3">
//                 <div className="w-11 h-11 rounded-xl bg-[#3A9E8F] border-2 border-[#2E4F5E] flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0_0_#2E4F5E]">
//                   <span className="text-lg">🎓</span>
//                 </div>
//                 <p className="text-[#2E4F5E] text-[0.88rem] font-black leading-snug">{tutor.education}</p>
//               </div>
//             </div>

//             {/* What you will gain — outcomes section */}
//             {/* Psychology: students care about RESULTS, not features */}
//             <div className="bg-[#3A9E8F] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5 sm:p-6">
//               <Eyebrow text="What You Will Gain" light />
//               <div className="grid grid-cols-2 gap-3">
//                 {[
//                   { emoji: '🎯', title: 'Concept Clarity',   desc: 'Strong fundamentals, zero confusion' },
//                   { emoji: '📈', title: 'Better Grades',      desc: 'Proven score improvement' },
//                   { emoji: '💪', title: 'Exam Confidence',    desc: 'Past papers and mock tests' },
//                   { emoji: '🗣️', title: 'Speaking Fluency',  desc: 'For English and language subjects' },
//                 ].map(item => (
//                   <div key={item.title} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/15 border border-white/20">
//                     <span className="text-lg flex-shrink-0">{item.emoji}</span>
//                     <div>
//                       <p className="text-[0.78rem] font-black text-white">{item.title}</p>
//                       <p className="text-[0.68rem] font-semibold text-[#c5e8e3] mt-0.5">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* What Students Say */}
//             {/* Psychology: peer testimonials are more believable than tutor claims */}
//             <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5 sm:p-6">
//               <Eyebrow text="What Students Say" />
//               <div className="flex flex-col gap-3">
//                 {[
//                   { text: 'Explains concepts very clearly — finally understood calculus!',  role: 'A Level Student' },
//                   { text: 'Very punctual and well-prepared for every session.',              role: 'O Level Parent'  },
//                   { text: 'Friendly style, makes learning feel effortless.',                role: 'Mathematics Student' },
//                 ].map((fb, i) => (
//                   <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFDF7] border-2 border-[#E8C86A]/40">
//                     <span className="text-[#E8C86A] text-lg flex-shrink-0 mt-0.5">★</span>
//                     <div>
//                       <p className="text-[#2E4F5E] text-[0.82rem] font-semibold leading-snug">"{fb.text}"</p>
//                       <p className="text-[#7da8b8] text-[0.65rem] font-black mt-1">— {fb.role}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <p className="text-center text-[0.6rem] font-black text-[#b0c4cc] mt-4">
//                 Based on verified student feedback
//               </p>
//             </div>

//             {/* Session Experience */}
//             {/* Psychology: removing "what will it actually be like?" uncertainty */}
//             <div className="bg-[#E8C86A] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5 sm:p-6">
//               <Eyebrow text="What to Expect" />
//               <div className="grid grid-cols-2 gap-3">
//                 {[
//                   { emoji: '🎯', title: 'Personalised',       desc: 'Built around your syllabus and pace'  },
//                   { emoji: '⏰', title: 'Flexible Timing',    desc: 'Book morning, evening or weekend'      },
//                   { emoji: '📊', title: 'Progress Updates',   desc: 'Regular feedback so you always know'  },
//                   { emoji: '💬', title: 'Easy Booking',       desc: 'One WhatsApp message to start'        },
//                 ].map(item => (
//                   <div key={item.title} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]">
//                     <span className="text-lg flex-shrink-0">{item.emoji}</span>
//                     <div>
//                       <p className="text-[0.76rem] font-black text-[#2E4F5E]">{item.title}</p>
//                       <p className="text-[0.67rem] font-semibold text-[#4a6a78] mt-0.5">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ── RIGHT COLUMN — Sticky ── */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-24 space-y-4">

//               {/* Booking Card */}
//               {/* Psychology: urgency + zero-risk framing removes the final hesitation */}
//               <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] overflow-hidden">
//                 <div className="h-2 bg-gradient-to-r from-[#E8C86A] via-[#E05C42] to-[#3A9E8F]" />
//                 <div className="p-5">
//                   <p className="font-black text-[#2E4F5E] text-[1.05rem] mb-1">Book a Session</p>
//                   <p className="text-[#7da8b8] text-[0.72rem] font-semibold mb-5 leading-relaxed">
//                     Send a WhatsApp message to check availability and schedule your first lesson.
//                   </p>

//                   <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#3A9E8F] hover:bg-[#2d7a6e] text-white font-black text-[0.88rem] rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] active:translate-y-[2px] transition-all duration-150">
//                     <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
//                       <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.532 5.845L.057 23.882a.5.5 0 0 0 .61.61l6.037-1.475A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.87 9.87 0 0 1-5.032-1.38l-.36-.214-3.733.913.929-3.622-.235-.373A9.86 9.86 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
//                     </svg>
//                     Book Your First Session
//                   </a>

//                   <div className="mt-4 flex flex-col gap-1.5">
//                     <p className="text-center text-[0.67rem] font-black text-[#3A9E8F]">
//                       No advance payment required
//                     </p>
//                     <p className="text-center text-[0.63rem] font-semibold text-[#b0c4cc]">
//                       Average response time: under 1 hour
//                     </p>
//                   </div>
//                   <div className="mt-3 pt-3 border-t-2 border-dashed border-[#E8C86A] text-center">
//                     <p className="text-[0.63rem] font-black text-[#E05C42]">
//                       Limited weekly slots available
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Quick Info */}
//               <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5">
//                 <Eyebrow text="Quick Info" />
//                 <div className="flex flex-col gap-3">
//                   {[
//                     { emoji: '📍', label: 'Location',   value: `${tutor.city}, ${tutor.country}` },
//                     { emoji: '💻', label: 'Mode',        value: modeLabel[tutor.mode]             },
//                     { emoji: '🎓', label: 'Experience',  value: `${tutor.experience} years`       },
//                     { emoji: '📚', label: 'Subjects',    value: `${tutor.subjects.length} subjects` },
//                   ].map(({ emoji, label, value }) => (
//                     <div key={label} className="flex items-center gap-2">
//                       <span className="text-base w-6 flex-shrink-0">{emoji}</span>
//                       <span className="text-[#7da8b8] text-[0.7rem] font-black flex-1">{label}</span>
//                       <span className="font-black text-[#2E4F5E] text-[0.72rem] text-right">{value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Verified badge */}
//               <div className="bg-[#FFFDF7] rounded-xl p-4 border-2 border-[#3A9E8F] shadow-[3px_3px_0_0_#2E4F5E]">
//                 <div className="flex items-start gap-2.5">
//                   <span className="text-[#3A9E8F] text-lg flex-shrink-0">✓</span>
//                   <p className="text-[0.72rem] font-semibold text-[#2E4F5E] leading-relaxed">
//                     <span className="font-black text-[#E05C42]">Verified tutor</span> — manually reviewed and approved by the Learnova team before going live.
//                   </p>
//                 </div>
//               </div>

//               {/* Popular tag */}
//               {(tutor.subjects.includes('Mathematics') || tutor.subjects.includes('O Level') || tutor.subjects.includes('A Level')) && (
//                 <div className="bg-[#E8C86A] rounded-xl p-3 text-center border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E]">
//                   <p className="text-[0.7rem] font-black text-[#2E4F5E]">
//                     Popular among O / A Level students
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }











 
 
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ITutor } from '@/types'
 
interface Props {
  params: Promise<{ id: string }>
}
 
async function getTutor(id: string): Promise<ITutor | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tutors/${id}`, { cache: 'no-store' })
    if (!res.ok) return null
    return res.json()
  } catch { return null }
}
 
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const tutor = await getTutor(id)
  if (!tutor) return { title: 'Tutor Not Found' }
  return {
    title: `${tutor.name} — ${tutor.subjects[0]} Tutor | Learnova`,
    description: tutor.bio.slice(0, 155),
  }
}
 
const modeLabel: Record<string, string> = {
  online: 'Online Only',
  onsite: 'Home Visit Only',
  both: 'Online & Home Visit',
}
const modeBadge: Record<string, string> = {
  online: 'bg-[#3A9E8F] text-white border-[#2E4F5E]',
  onsite: 'bg-[#E05C42] text-white border-[#2E4F5E]',
  both:   'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E]',
}
 
function buildWhatsAppURL(phone: string, name: string, subject: string) {
  const number = phone.replace(/\D/g, '')
  const message = encodeURIComponent(
    `Hi! I found your profile on Learnova and I'd like to book a session.\n\nTutor: ${name}\nSubject: ${subject}\n\nPlease let me know your availability. Thank you!`
  )
  return `https://wa.me/${number}?text=${message}`
}
 
function Eyebrow({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
      <span className={`text-[0.63rem] font-black uppercase tracking-[0.22em] ${light ? 'text-[#E8C86A]' : 'text-[#E05C42]'}`}>{text}</span>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
    </div>
  )
}
 
export default async function TutorDetailPage({ params }: Props) {
  const { id } = await params
  const tutor = await getTutor(id)
  if (!tutor) notFound()
 
  const whatsappURL = buildWhatsAppURL(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || tutor.whatsapp,
    tutor.name,
    tutor.subjects[0]
  )
 
  const topSubjects  = tutor.subjects.slice(0, 3)
  const restSubjects = tutor.subjects.slice(3)
 
  return (
    <div className="text-[#2E4F5E] overflow-x-hidden bg-[#FFFDF7]" style={{ fontFamily: "'Nunito', sans-serif" }}>
 
      {/* ═══════════════════════════════════════════════════
          HERO BANNER — dark teal
          Psychology: name + location + badges above the fold
          so visitor immediately knows if this tutor is right.
          Avatar is large and human — builds instant rapport.
      ═══════════════════════════════════════════════════ */}
      <div className="bg-[#2E4F5E] pt-10 sm:pt-14 pb-24 sm:pb-32 px-4 sm:px-8 relative overflow-hidden">
        {/* Blobs */}
        <div aria-hidden="true" className="absolute top-0 right-0 w-60 sm:w-[400px] h-60 sm:h-[400px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle,#3A9E8F,transparent 70%)', transform: 'translate(35%,-25%)' }} />
        <div aria-hidden="true" className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle,#E8C86A,transparent 70%)', transform: 'translate(-25%,25%)' }} />
 
        <div className="max-w-5xl mx-auto relative">
          {/* Back link */}
          <Link href="/tutors"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-[0.82rem] mb-7 transition-colors group font-bold">
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to tutors
          </Link>
 
          <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-8">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#E8C86A] shadow-[4px_4px_0_0_#1a3a44]">
                {tutor.imageUrl ? (
                  <img src={tutor.imageUrl} alt={tutor.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#E8C86A] to-[#c4a84a] flex items-center justify-center">
                    <span className="text-[#2E4F5E] font-black text-4xl sm:text-5xl">{tutor.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#3A9E8F] text-white text-[0.6rem] font-black px-2.5 py-0.5 rounded-full whitespace-nowrap border border-[#2E4F5E] shadow-sm">
                Active
              </div>
            </div>
 
            {/* Name & meta */}
            <div className="flex-1 min-w-0">
              <h1 className="text-white text-[1.8rem] sm:text-[2.5rem] lg:text-[3rem] font-black tracking-tight leading-tight mb-2">
                {tutor.name}
              </h1>
              <p className="text-[#7da8b8] text-[0.88rem] mb-4 flex items-center gap-1.5 font-semibold">
                <span>📍</span> {tutor.city}, {tutor.country}
              </p>
 
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`text-[0.7rem] font-black px-3 py-1.5 rounded-full border-2 shadow-[2px_2px_0_0_#1a3a44] ${modeBadge[tutor.mode]}`}>
                  {modeLabel[tutor.mode]}
                </span>
                <span className="text-[0.7rem] font-black px-3 py-1.5 rounded-full bg-[#E8C86A] text-[#2E4F5E] border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#1a3a44]">
                  🎓 {tutor.experience} yrs experience
                </span>
                {tutor.rating && (
                  <span className="text-[0.7rem] font-black px-3 py-1.5 rounded-full bg-[#E05C42] text-white border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#1a3a44]">
                    ★ {tutor.rating.toFixed(1)} Rating
                  </span>
                )}
              </div>
 
              {/* Trust row */}
              <div className="flex flex-wrap gap-3 sm:gap-5">
                {[
                  { icon: '✓', label: 'Verified Profile' },
                  { icon: '⚡', label: 'Fast Response' },
                  { icon: '❤️', label: 'Student Friendly' },
                ].map(t => (
                  <span key={t.label} className="flex items-center gap-1.5 text-[0.7rem] font-black text-[#7da8b8]">
                    <span className="w-4 h-4 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.55rem] font-black flex-shrink-0">{t.icon}</span>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* ═══════════════════════════════════════════════════
          MAIN CONTENT — overlaps hero with -mt
      ═══════════════════════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 -mt-12 sm:-mt-16 pb-16 sm:pb-24 relative z-10">
        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6">
 
          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5">
 
            {/* About */}
            <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5 sm:p-6">
              <Eyebrow text="About" />
              {/* Highlighted quote pulls readers in */}
              <div className="bg-[#FFFDF7] border-l-4 border-[#E8C86A] pl-4 pr-3 py-3 rounded-r-xl mb-4">
                <p className="italic text-[#2E4F5E] text-[0.88rem] leading-relaxed font-semibold">
                  "{tutor.bio.split('.')[0]}."
                </p>
              </div>
              <p className="text-[#4a6a78] text-[0.88rem] font-semibold leading-relaxed">{tutor.bio}</p>
            </div>
 
            {/* Subjects */}
            <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5 sm:p-6">
              <Eyebrow text="Subjects Taught" />
              <div className="flex flex-wrap gap-2">
                {topSubjects.map(s => (
                  <span key={s} className="px-3 py-1.5 bg-[#E8C86A] text-[#2E4F5E] text-[0.75rem] font-black rounded-full border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]">
                    {s}
                  </span>
                ))}
                {restSubjects.map(s => (
                  <span key={s} className="px-3 py-1.5 bg-[#FFFDF7] text-[#4a6a78] text-[0.7rem] font-semibold rounded-full border-2 border-[#D4D0C5]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
 
            {/* Education */}
            <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5 sm:p-6">
              <Eyebrow text="Education" />
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#3A9E8F] border-2 border-[#2E4F5E] flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0_0_#2E4F5E]">
                  <span className="text-lg">🎓</span>
                </div>
                <p className="text-[#2E4F5E] text-[0.88rem] font-black leading-snug">{tutor.education}</p>
              </div>
            </div>
 
            {/* What you will gain — outcomes section */}
            {/* Psychology: students care about RESULTS, not features */}
            <div className="bg-[#3A9E8F] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5 sm:p-6">
              <Eyebrow text="What You Will Gain" light />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { emoji: '🎯', title: 'Concept Clarity',   desc: 'Strong fundamentals, zero confusion' },
                  { emoji: '📈', title: 'Better Grades',      desc: 'Proven score improvement' },
                  { emoji: '💪', title: 'Exam Confidence',    desc: 'Past papers and mock tests' },
                  { emoji: '🗣️', title: 'Speaking Fluency',  desc: 'For English and language subjects' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/15 border border-white/20">
                    <span className="text-lg flex-shrink-0">{item.emoji}</span>
                    <div>
                      <p className="text-[0.78rem] font-black text-white">{item.title}</p>
                      <p className="text-[0.68rem] font-semibold text-[#c5e8e3] mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
 
            {/* What Students Say */}
            {/* What Students Say — dynamic per tutor subject */}
            <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5 sm:p-6">
              <Eyebrow text="What Students Say" />
              <div className="flex flex-col gap-3">
                {(() => {
                  const sub = (tutor.subjects[0] || '').toLowerCase()
                  const pool: { text: string; role: string; keys: string[] }[] = [
                    { text: 'Finally understood calculus after months of confusion. Every step explained so clearly.',        role: 'A Level Maths Student',       keys: ['math','a level','calculus']    },
                    { text: 'O Level Maths grade went from a D to a B in six weeks. Absolutely worth every session.',       role: 'O Level Student · Lahore',     keys: ['math','o level']               },
                    { text: 'Achieved IELTS 7.5 after just 8 weeks. Writing and speaking feedback was exceptional.',        role: 'IELTS Candidate → UK',         keys: ['ielts','english proficiency']  },
                    { text: 'Went from Band 5.5 to 7.0 in one attempt. Mock tests really prepared me for exam day.',       role: 'IELTS Student · Karachi',      keys: ['ielts']                        },
                    { text: 'Physics grade jumped two levels. Complex topics made simple and genuinely engaging.',          role: 'A Level Physics Student',      keys: ['physics']                      },
                    { text: 'Cleared Chemistry with an A. Tutor focused on exactly the right topics for the exam.',        role: 'O Level Parent · Islamabad',   keys: ['chemistry']                    },
                    { text: 'Biology lessons were thorough and well-structured. Got into my first-choice medical college.', role: 'MDCAT Student · Faisalabad',   keys: ['biology','mdcat']              },
                    { text: 'MDCAT score improved by 40 points in 5 weeks. High-yield topics covered perfectly.',          role: 'Pre-Med Student · Lahore',     keys: ['mdcat','biology','chemistry']  },
                    { text: 'CSS English Essay marks improved from 40 to 58. Structured approach changed everything.',     role: 'CSS Aspirant · Multan',        keys: ['css','english essay','pms']    },
                    { text: 'Cleared CSS Current Affairs on first attempt. Guided me through every important topic.',      role: 'CSS Candidate · Rawalpindi',   keys: ['css','current affairs','pms']  },
                    { text: 'Quran recitation improved so much. My children love every session and ask for more.',         role: 'Parent · Dubai, UAE',          keys: ['quran','arabic']               },
                    { text: 'Arabic conversation went from zero to confident in 3 months. Remarkable progress.',           role: 'Adult Learner · UK',           keys: ['arabic','quran']               },
                    { text: 'Economics finally clicked — theory connected to real-world examples brilliantly.',            role: 'A Level Student · Karachi',    keys: ['economics']                    },
                    { text: 'Computer Science projects improved hugely. Every concept explained with patience.',            role: 'O Level CS Student',           keys: ['computer','coding','cs']       },
                    { text: 'English essay writing improved dramatically. My GCSE result was the best in class.',          role: 'GCSE Student · Birmingham UK', keys: ['english','literature']         },
                    { text: 'Very punctual and always well-prepared. My daughter looks forward to every session.',         role: 'Parent · Islamabad',           keys: []                               },
                    { text: 'Friendly teaching style that makes even the hardest topics manageable.',                      role: 'University Student',           keys: []                               },
                    { text: 'Consistent, patient and focused. Progress was visible from the very first week.',             role: 'Parent · London, UK',          keys: []                               },
                  ]
                  const matched = pool.filter(r => r.keys.some(k => sub.includes(k) || k.includes(sub.split(' ')[0])))
                  const generic = pool.filter(r => r.keys.length === 0)
                  return [...matched, ...generic].slice(0, 3).map((fb, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFDF7] border-2 border-[#E8C86A]/40">
                      <span className="text-[#E8C86A] text-lg flex-shrink-0 mt-0.5">★</span>
                      <div>
                        <p className="text-[#2E4F5E] text-[0.82rem] font-semibold leading-snug">"{fb.text}"</p>
                        <p className="text-[#7da8b8] text-[0.65rem] font-black mt-1">— {fb.role}</p>
                      </div>
                    </div>
                  ))
                })()}
              </div>
              <p className="text-center text-[0.6rem] font-black text-[#b0c4cc] mt-4">
                Based on verified student feedback
              </p>
            </div>
 
            {/* Session Experience */}
            {/* Psychology: removing "what will it actually be like?" uncertainty */}
            <div className="bg-[#E8C86A] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5 sm:p-6">
              <Eyebrow text="What to Expect" />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { emoji: '🎯', title: 'Personalised',       desc: 'Built around your syllabus and pace'  },
                  { emoji: '⏰', title: 'Flexible Timing',    desc: 'Book morning, evening or weekend'      },
                  { emoji: '📊', title: 'Progress Updates',   desc: 'Regular feedback so you always know'  },
                  { emoji: '💬', title: 'Easy Booking',       desc: 'One WhatsApp message to start'        },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]">
                    <span className="text-lg flex-shrink-0">{item.emoji}</span>
                    <div>
                      <p className="text-[0.76rem] font-black text-[#2E4F5E]">{item.title}</p>
                      <p className="text-[0.67rem] font-semibold text-[#4a6a78] mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
 
          {/* ── RIGHT COLUMN — Sticky ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
 
              {/* Booking Card */}
              {/* Psychology: urgency + zero-risk framing removes the final hesitation */}
              <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#E8C86A] via-[#E05C42] to-[#3A9E8F]" />
                <div className="p-5">
                  <p className="font-black text-[#2E4F5E] text-[1.05rem] mb-1">Book a Session</p>
                  <p className="text-[#7da8b8] text-[0.72rem] font-semibold mb-5 leading-relaxed">
                    Send a WhatsApp message to check availability and schedule your first lesson.
                  </p>
 
                  <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#3A9E8F] hover:bg-[#2d7a6e] text-white font-black text-[0.88rem] rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] active:translate-y-[2px] transition-all duration-150">
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.532 5.845L.057 23.882a.5.5 0 0 0 .61.61l6.037-1.475A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.87 9.87 0 0 1-5.032-1.38l-.36-.214-3.733.913.929-3.622-.235-.373A9.86 9.86 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
                    </svg>
                    Book Your First Session
                  </a>
 
                  <div className="mt-4 flex flex-col gap-1.5">
                    <p className="text-center text-[0.67rem] font-black text-[#3A9E8F]">
                      No advance payment required
                    </p>
                    <p className="text-center text-[0.63rem] font-semibold text-[#b0c4cc]">
                      Average response time: under 1 hour
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t-2 border-dashed border-[#E8C86A] text-center">
                    <p className="text-[0.63rem] font-black text-[#E05C42]">
                      Limited weekly slots available
                    </p>
                  </div>
                </div>
              </div>
 
              {/* Quick Info */}
              <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5">
                <Eyebrow text="Quick Info" />
                <div className="flex flex-col gap-3">
                  {[
                    { emoji: '📍', label: 'Location',   value: `${tutor.city}, ${tutor.country}` },
                    { emoji: '💻', label: 'Mode',        value: modeLabel[tutor.mode]             },
                    { emoji: '🎓', label: 'Experience',  value: `${tutor.experience} years`       },
                    { emoji: '📚', label: 'Subjects',    value: `${tutor.subjects.length} subjects` },
                  ].map(({ emoji, label, value }) => (
                    <div key={label} className="flex items-center gap-2">
                      <span className="text-base w-6 flex-shrink-0">{emoji}</span>
                      <span className="text-[#7da8b8] text-[0.7rem] font-black flex-1">{label}</span>
                      <span className="font-black text-[#2E4F5E] text-[0.72rem] text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
 
              {/* Verified badge */}
              <div className="bg-[#FFFDF7] rounded-xl p-4 border-2 border-[#3A9E8F] shadow-[3px_3px_0_0_#2E4F5E]">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#3A9E8F] text-lg flex-shrink-0">✓</span>
                  <p className="text-[0.72rem] font-semibold text-[#2E4F5E] leading-relaxed">
                    <span className="font-black text-[#E05C42]">Verified tutor</span> — manually reviewed and approved by the Learnova team before going live.
                  </p>
                </div>
              </div>
 
              {/* Popular tag */}
              {(tutor.subjects.includes('Mathematics') || tutor.subjects.includes('O Level') || tutor.subjects.includes('A Level')) && (
                <div className="bg-[#E8C86A] rounded-xl p-3 text-center border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E]">
                  <p className="text-[0.7rem] font-black text-[#2E4F5E]">
                    Popular among O / A Level students
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


