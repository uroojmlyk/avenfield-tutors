




// import type { Metadata } from 'next'
// import { notFound } from 'next/navigation'
// import { ITutor } from '@/types'

// // Next.js 16 — params is a Promise
// interface Props {
//   params: Promise<{ id: string }>
// }

// async function getTutor(id: string): Promise<ITutor | null> {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tutors/${id}`, {
//       cache: 'no-store',
//     })
//     if (!res.ok) return null
//     return res.json()
//   } catch {
//     return null
//   }
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
//   both:   'Online & Home Visit',
// }

// const modeBadge: Record<string, string> = {
//   online: 'bg-[#EEF0FF] text-[#6C5CE7]',
//   onsite: 'bg-[#E6F9F2] text-[#0F7A5A]',
//   both:   'bg-[#FFF4E6] text-[#D4820A]',
// }

// function buildWhatsAppURL(phone: string, name: string, subject: string) {
//   const number = phone.replace(/\D/g, '')
//   const message = encodeURIComponent(
//     `Hi! I found your profile on Learnova and I'd like to book a session.\n\nTutor: ${name}\nSubject: ${subject}\n\nPlease let me know your availability. Thank you!`
//   )
//   return `https://wa.me/${number}?text=${message}`
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

//   // Get top 2 subjects for highlighting
//   const topSubjects = tutor.subjects.slice(0, 2)
//   const otherSubjects = tutor.subjects.slice(2)

//   return (
//     <div className="min-h-screen bg-[#FAFAF8]">

//       {/* ========== HERO SECTION ========== */}
//       <div className="bg-gradient-to-br from-[#1A1730] via-[#2C2844] to-[#1A1730] pt-16 pb-32 px-5 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#6C5CE7] opacity-[0.08] blur-[120px] pointer-events-none" />
//         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0F7A5A] opacity-[0.06] blur-[100px] pointer-events-none" />
        
//         <div className="max-w-5xl mx-auto relative">
//           <a href="/tutors" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors group">
//             <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//             </svg>
//             Back to tutors
//           </a>

//           <div className="flex flex-col sm:flex-row items-start gap-6">
//             {/* Avatar with Active Badge */}
//             <div className="relative flex-shrink-0">
//               <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl">
//                 {tutor.imageUrl ? (
//                   <img src={tutor.imageUrl} alt={tutor.name} className="w-full h-full object-cover" />
//                 ) : (
//                   <div className="w-full h-full bg-gradient-to-br from-[#6C5CE7] to-[#5A4BD1] flex items-center justify-center">
//                     <span className="text-white font-bold text-4xl">{tutor.name.charAt(0)}</span>
//                   </div>
//                 )}
//               </div>
//               {/* Active badge instead of just dot */}
//               <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#1D9E75] text-white text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap shadow-lg">
//                 Active
//               </div>
//             </div>

//             {/* Name & meta */}
//             <div className="flex-1">
//               <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
//                 {tutor.name}
//               </h1>
//               <p className="text-white/40 text-sm mb-4 flex items-center gap-1">
//                 <span>📍</span> {tutor.city}, {tutor.country}
//               </p>
              
//               {/* Badges */}
//               <div className="flex flex-wrap gap-2 mb-5">
//                 <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${modeBadge[tutor.mode]}`}>
//                   {modeLabel[tutor.mode]}
//                 </span>
//                 <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 text-white/80">
//                   🎓 {tutor.experience} yrs experience
//                 </span>
//                 {tutor.rating && (
//                   <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#F0A500]/20 text-[#F0A500]">
//                     ★ {tutor.rating.toFixed(1)} rating
//                   </span>
//                 )}
//               </div>

//               {/* TRUST STRIP — New! */}
//               <div className="flex flex-wrap gap-4 text-xs text-white/50">
//                 <span className="flex items-center gap-1.5">
//                   <svg className="w-3.5 h-3.5 text-[#1D9E75]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   Verified Profile
//                 </span>
//                 <span className="flex items-center gap-1.5">
//                   <svg className="w-3.5 h-3.5 text-[#1D9E75]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                   Fast Response
//                 </span>
//                 <span className="flex items-center gap-1.5">
//                   <svg className="w-3.5 h-3.5 text-[#1D9E75]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
//                   </svg>
//                   Student Friendly
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ========== MAIN CONTENT ========== */}
//       <div className="max-w-5xl mx-auto px-5 -mt-16 pb-20 relative z-10">
//         <div className="grid lg:grid-cols-3 gap-6">

//           {/* LEFT COLUMN — Main Info */}
//           <div className="lg:col-span-2 space-y-6">

//             {/* About Section — Enhanced with Quote */}
//             <div className="bg-white rounded-2xl border border-[#E8E4F0] p-6 shadow-sm">
//               <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#6C5CE7] mb-4">About</h2>
              
//               {/* Highlighted quote for emotional connection */}
//               <div className="bg-[#FAFAF8] border-l-4 border-[#6C5CE7] p-4 rounded-r-xl mb-5">
//                 <p className="italic text-[#1A1730] text-sm leading-relaxed">
//                   "{tutor.bio.split('.')[0]}. I focus on conceptual clarity rather than memorization."
//                 </p>
//               </div>
              
//               <p className="text-[#5A5870] text-sm leading-relaxed">{tutor.bio}</p>
//             </div>

//             {/* Subjects — Expertise Hierarchy */}
//             <div className="bg-white rounded-2xl border border-[#E8E4F0] p-6 shadow-sm">
//               <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#6C5CE7] mb-4">Subjects Taught</h2>
//               <div className="flex flex-wrap gap-2">
//                 {/* Top 2 subjects — highlighted */}
//                 {topSubjects.map((s) => (
//                   <span key={s} className="px-4 py-2 bg-gradient-to-r from-[#6C5CE7] to-[#5A4BD1] text-white text-sm font-semibold rounded-xl shadow-md shadow-[#6C5CE7]/25">
//                     {s}
//                   </span>
//                 ))}
//                 {/* Other subjects — muted */}
//                 {otherSubjects.map((s) => (
//                   <span key={s} className="px-3 py-2 bg-[#EEF0FF] text-[#6C5CE7] text-sm font-medium rounded-xl">
//                     {s}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Education */}
//             <div className="bg-white rounded-2xl border border-[#E8E4F0] p-6 shadow-sm">
//               <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#6C5CE7] mb-4">Education & Qualifications</h2>
//               <div className="flex items-start gap-3">
//                 <div className="w-10 h-10 rounded-xl bg-[#EEF0FF] flex items-center justify-center flex-shrink-0">
//                   <span className="text-lg">🎓</span>
//                 </div>
//                 <p className="text-[#1A1730] text-sm leading-relaxed pt-1 font-medium">{tutor.education}</p>
//               </div>
//             </div>

//             {/* SOCIAL PROOF — Student Feedback Placeholder */}
//             <div className="bg-white rounded-2xl border border-[#E8E4F0] p-6 shadow-sm">
//               <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#6C5CE7] mb-4">What Students Say</h2>
//               <div className="space-y-3">
//                 {[
//                   { text: "Explains concepts very clearly", author: "— A Level Student" },
//                   { text: "Very punctual and well-prepared", author: "— O Level Parent" },
//                   { text: "Friendly teaching style, makes learning fun", author: "— Mathematics Student" },
//                 ].map((feedback, i) => (
//                   <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAFAF8] border border-[#E8E4F0]">
//                     <svg className="w-4 h-4 text-[#F0A500] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                     </svg>
//                     <div>
//                       <p className="text-sm text-[#1A1730]">"{feedback.text}"</p>
//                       <p className="text-xs text-[#A89EC6] mt-1">{feedback.author}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <p className="text-center text-xs text-[#A89EC6] mt-4">Based on student feedback • Verified sessions</p>
//             </div>

//             {/* What Students Improve — Outcome oriented */}
//             <div className="bg-white rounded-2xl border border-[#E8E4F0] p-6 shadow-sm">
//               <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#6C5CE7] mb-4">What Students Improve</h2>
//               <div className="grid sm:grid-cols-2 gap-3">
//                 {[
//                   { icon: '🎯', title: 'Concept Clarity', desc: 'Strong fundamentals, no more confusion' },
//                   { icon: '📈', title: 'Exam Confidence', desc: 'Practice tests & past paper mastery' },
//                   { icon: '⭐', title: 'Better Grades', desc: 'Proven improvement in test scores' },
//                   { icon: '🗣️', title: 'Speaking Fluency', desc: 'For English & language subjects' },
//                 ].map((item) => (
//                   <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAFAF8] border border-[#E8E4F0] hover:border-[#C8BEFF] transition-all duration-200">
//                     <span className="text-xl">{item.icon}</span>
//                     <div>
//                       <p className="text-sm font-semibold text-[#1A1730]">{item.title}</p>
//                       <p className="text-xs text-[#A89EC6] mt-0.5">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* What to Expect */}
//             <div className="bg-white rounded-2xl border border-[#E8E4F0] p-6 shadow-sm">
//               <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#6C5CE7] mb-4">What to Expect</h2>
//               <div className="grid sm:grid-cols-2 gap-3">
//                 {[
//                   { icon: '🎯', title: 'Personalized Sessions', desc: 'Curriculum tailored to your level and goals' },
//                   { icon: '⏰', title: 'Flexible Timing', desc: 'Schedule sessions at your convenience' },
//                   { icon: '📊', title: 'Progress Tracking', desc: 'Regular feedback and improvement tracking' },
//                   { icon: '💬', title: 'Direct Communication', desc: 'Easy booking via WhatsApp' },
//                 ].map((item) => (
//                   <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAFAF8]">
//                     <span className="text-xl">{item.icon}</span>
//                     <div>
//                       <p className="text-sm font-semibold text-[#1A1730]">{item.title}</p>
//                       <p className="text-xs text-[#A89EC6] mt-0.5">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN — Sticky Booking Card */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-24 space-y-4">

//               {/* Booking Card */}
//               <div className="bg-white rounded-2xl border border-[#E8E4F0] p-6 shadow-lg">
//                 <div className="h-1 -mx-6 -mt-6 mb-6 rounded-t-2xl bg-gradient-to-r from-[#6C5CE7] via-[#C8BEFF] to-[#0F7A5A]" />

//                 <p className="font-bold text-[#1A1730] text-lg mb-1">Book a Session</p>
//                 <p className="text-xs text-[#A89EC6] mb-5 leading-relaxed">
//                   Send a WhatsApp message to check availability.
//                 </p>

//                 <a
//                   href={whatsappURL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#25D366] hover:bg-[#20bf5b] text-white font-bold rounded-xl shadow-md shadow-[#25D366]/30 hover:scale-[1.02] transition-all duration-200 text-sm"
//                 >
//                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
//                     <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.532 5.845L.057 23.882a.5.5 0 0 0 .61.61l6.037-1.475A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.87 9.87 0 0 1-5.032-1.38l-.36-.214-3.733.913.929-3.622-.235-.373A9.86 9.86 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
//                   </svg>
//                   Book Your First Session
//                 </a>

//                 {/* Safety + low friction messages */}
//                 <div className="mt-3 space-y-2">
//                   <p className="text-center text-xs text-[#1D9E75] font-medium">
//                     ✓ No advance payment required
//                   </p>
//                   <p className="text-center text-xs text-[#A89EC6] flex items-center justify-center gap-1">
//                     <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     ⚡ Average response time: under 1 hour
//                   </p>
//                 </div>

//                 {/* Scarcity subtle hint */}
//                 <div className="mt-3 pt-3 border-t border-[#E8E4F0] text-center">
//                   <p className="text-[10px] text-[#D4820A] font-medium">
//                     Limited weekly slots available
//                   </p>
//                 </div>
//               </div>

//               {/* Quick Info Card — Premium with Icons */}
//               <div className="bg-white rounded-2xl border border-[#E8E4F0] p-5 shadow-sm">
//                 <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#6C5CE7] mb-4">Quick Info</h3>
//                 <div className="space-y-3">
//                   {[
//                     { icon: '📍', label: 'Location', value: `${tutor.city}, ${tutor.country}` },
//                     { icon: '💻', label: 'Mode', value: modeLabel[tutor.mode] },
//                     { icon: '🎓', label: 'Experience', value: `${tutor.experience} years` },
//                     { icon: '📚', label: 'Subjects', value: `${tutor.subjects.length} subjects` },
//                   ].map(({ icon, label, value }) => (
//                     <div key={label} className="flex items-center gap-3 text-sm">
//                       <span className="text-base w-6">{icon}</span>
//                       <span className="text-[#A89EC6] flex-1">{label}</span>
//                       <span className="font-semibold text-[#1A1730] text-right">{value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Safety Note */}
//               <div className="bg-[#EEF0FF] rounded-xl p-4 border border-[#C8BEFF]">
//                 <p className="text-xs text-[#1A1730] leading-relaxed flex items-start gap-2">
//                   <span className="text-[#6C5CE7]">✓</span>
//                   <span><strong>Verified tutor</strong> — manually reviewed and approved by Learnova team.</span>
//                 </p>
//               </div>

//               {/* Popular tag for social proof */}
//               {tutor.subjects.includes('Mathematics') || tutor.subjects.includes('O Level') ? (
//                 <div className="bg-[#FFF4E6] rounded-xl p-3 text-center border border-[#F0A500]/30">
//                   <p className="text-xs text-[#D4820A] font-medium">
//                     🌟 Popular among O/A Level students
//                   </p>
//                 </div>
//               ) : null}
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

// Next.js 16 — params is a Promise
interface Props {
  params: Promise<{ id: string }>
}

async function getTutor(id: string): Promise<ITutor | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tutors/${id}`, {
      cache: 'no-store',
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
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
  online: 'bg-[#3A9E8F] text-white',
  onsite: 'bg-[#E05C42] text-white',
  both: 'bg-[#E8C86A] text-[#2E4F5E]',
}

function buildWhatsAppURL(phone: string, name: string, subject: string) {
  const number = phone.replace(/\D/g, '')
  const message = encodeURIComponent(
    `Hi! I found your profile on Learnova and I'd like to book a session.\n\nTutor: ${name}\nSubject: ${subject}\n\nPlease let me know your availability. Thank you!`
  )
  return `https://wa.me/${number}?text=${message}`
}

// Eyebrow component matching Services page
function Eyebrow({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
      <span className={`text-[0.68rem] font-black uppercase tracking-[0.25em] ${light ? 'text-[#E8C86A]' : 'text-[#E05C42]'}`}>{text}</span>
      <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
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

  const topSubjects = tutor.subjects.slice(0, 2)
  const otherSubjects = tutor.subjects.slice(2)

  return (
    <div className="text-[#2E4F5E] overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <div className="bg-[#FFFDF7] min-h-screen">

        {/* ========== HERO SECTION ========== */}
        <div className="bg-[#2E4F5E] pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-8 relative overflow-hidden">
          <div aria-hidden="true" className="absolute top-0 right-0 w-72 h-72 sm:w-[450px] sm:h-[450px] rounded-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #3A9E8F, transparent 70%)', transform: 'translate(35%,-25%)' }} />
          <div aria-hidden="true" className="absolute bottom-0 left-0 w-56 h-56 sm:w-80 sm:h-80 rounded-full opacity-15 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #E8C86A, transparent 70%)', transform: 'translate(-25%,25%)' }} />

          <div className="max-w-5xl mx-auto relative">
            <Link href="/tutors" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors group font-semibold">
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to tutors
            </Link>

            <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-8">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#E8C86A] shadow-[4px_4px_0_0_#1a3a44]">
                  {tutor.imageUrl ? (
                    <img src={tutor.imageUrl} alt={tutor.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#E8C86A] to-[#c4a84a] flex items-center justify-center">
                      <span className="text-[#2E4F5E] font-black text-3xl sm:text-4xl">{tutor.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                {/* Active badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#3A9E8F] text-white text-[9px] sm:text-[10px] font-black px-2.5 py-0.5 rounded-full whitespace-nowrap shadow-md border border-[#2E4F5E]">
                  Active
                </div>
              </div>

              {/* Name & meta */}
              <div className="flex-1">
                <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-2">
                  {tutor.name}
                </h1>
                <p className="text-[#7da8b8] text-sm mb-3 flex items-center gap-1 font-semibold">
                  <span>📍</span> {tutor.city}, {tutor.country}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`text-[0.7rem] font-black px-3 py-1 rounded-full border-2 border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E] ${modeBadge[tutor.mode]}`}>
                    {modeLabel[tutor.mode]}
                  </span>
                  <span className="text-[0.7rem] font-black px-3 py-1 rounded-full bg-[#E8C86A] text-[#2E4F5E] border-2 border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E]">
                    🎓 {tutor.experience} yrs exp
                  </span>
                  {tutor.rating && (
                    <span className="text-[0.7rem] font-black px-3 py-1 rounded-full bg-[#E05C42] text-white border-2 border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E]">
                      ★ {tutor.rating.toFixed(1)}
                    </span>
                  )}
                </div>

                {/* Trust strip */}
                <div className="flex flex-wrap gap-3 sm:gap-4 text-[0.65rem] font-black text-[#7da8b8]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.5rem]">✓</span>
                    Verified Profile
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.5rem]">⚡</span>
                    Fast Response
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.5rem]">❤️</span>
                    Student Friendly
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========== MAIN CONTENT ========== */}
        <div className="max-w-5xl mx-auto px-4 sm:px-8 -mt-8 pb-16 sm:pb-20 relative z-10">
          <div className="grid lg:grid-cols-3 gap-6">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-5">

              {/* About Section */}
              <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] p-5 sm:p-6">
                <Eyebrow text="About" />
                <div className="bg-[#FFFDF7] border-l-4 border-[#E8C86A] p-3 sm:p-4 rounded-r-xl mb-4">
                  <p className="italic text-[#2E4F5E] text-sm leading-relaxed font-semibold">
                    "{tutor.bio.split('.')[0]}. I focus on conceptual clarity rather than memorization."
                  </p>
                </div>
                <p className="text-[#4a6a78] text-sm font-semibold leading-relaxed">{tutor.bio}</p>
              </div>

              {/* Subjects */}
              <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] p-5 sm:p-6">
                <Eyebrow text="Subjects Taught" />
                <div className="flex flex-wrap gap-2">
                  {topSubjects.map((s) => (
                    <span key={s} className="px-3 py-1.5 bg-[#E8C86A] text-[#2E4F5E] text-[0.75rem] font-black rounded-full border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]">
                      {s}
                    </span>
                  ))}
                  {otherSubjects.map((s) => (
                    <span key={s} className="px-3 py-1.5 bg-[#FFFDF7] text-[#4a6a78] text-[0.7rem] font-semibold rounded-full border-2 border-[#D4D0C5] hover:border-[#E8C86A] transition-colors">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] p-5 sm:p-6">
                <Eyebrow text="Education" />
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#3A9E8F] border-2 border-[#2E4F5E] flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0_0_#2E4F5E]">
                    <span className="text-white text-base">🎓</span>
                  </div>
                  <p className="text-[#2E4F5E] text-sm font-black leading-relaxed pt-1">{tutor.education}</p>
                </div>
              </div>

              {/* Student Feedback */}
              <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] p-5 sm:p-6">
                <Eyebrow text="What Students Say" />
                <div className="space-y-3">
                  {[
                    { text: "Explains concepts very clearly", author: "— A Level Student" },
                    { text: "Very punctual and well-prepared", author: "— O Level Parent" },
                    { text: "Friendly teaching style, makes learning fun", author: "— Mathematics Student" },
                  ].map((feedback, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFFDF7] border-2 border-[#E8C86A]/40">
                      <span className="text-[#E8C86A] text-base flex-shrink-0">★</span>
                      <div>
                        <p className="text-[#2E4F5E] text-sm font-semibold">"{feedback.text}"</p>
                        <p className="text-[#7da8b8] text-[0.65rem] font-bold mt-0.5">{feedback.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-[0.6rem] font-black text-[#7da8b8] mt-4">Based on student feedback • Verified sessions</p>
              </div>

              {/* What Students Improve */}
              <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] p-5 sm:p-6">
                <Eyebrow text="Outcomes" />
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    { emoji: '🎯', title: 'Concept Clarity', desc: 'Strong fundamentals, no confusion' },
                    { emoji: '📈', title: 'Exam Confidence', desc: 'Practice tests & past paper mastery' },
                    { emoji: '⭐', title: 'Better Grades', desc: 'Proven improvement in scores' },
                    { emoji: '🗣️', title: 'Speaking Fluency', desc: 'For English & language subjects' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FFFDF7] border border-[#D4D0C5] hover:border-[#E8C86A] transition-all">
                      <span className="text-lg">{item.emoji}</span>
                      <div>
                        <p className="text-[0.75rem] font-black text-[#2E4F5E]">{item.title}</p>
                        <p className="text-[0.65rem] font-semibold text-[#7da8b8]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] p-5 sm:p-6">
                <Eyebrow text="What to Expect" />
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    { emoji: '🎯', title: 'Personalized Sessions', desc: 'Tailored to your goals' },
                    { emoji: '⏰', title: 'Flexible Timing', desc: 'Schedule at your convenience' },
                    { emoji: '📊', title: 'Progress Tracking', desc: 'Regular feedback & updates' },
                    { emoji: '💬', title: 'Direct Communication', desc: 'Easy booking via WhatsApp' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FFFDF7]">
                      <span className="text-lg">{item.emoji}</span>
                      <div>
                        <p className="text-[0.75rem] font-black text-[#2E4F5E]">{item.title}</p>
                        <p className="text-[0.65rem] font-semibold text-[#7da8b8]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — Sticky Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">

                {/* Booking Card */}
                <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[8px_8px_0_0_#2E4F5E] p-5 sm:p-6">
                  <div className="h-1 -mx-5 -mt-5 mb-5 rounded-t-2xl bg-gradient-to-r from-[#E8C86A] via-[#E05C42] to-[#3A9E8F]" />

                  <p className="font-black text-[#2E4F5E] text-lg mb-1">Book a Session</p>
                  <p className="text-[#7da8b8] text-[0.7rem] font-semibold mb-5 leading-relaxed">
                    Send a WhatsApp message to check availability.
                  </p>

                  <a
                    href={whatsappURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#3A9E8F] hover:bg-[#2d7a6e] text-white font-black text-[0.85rem] rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.532 5.845L.057 23.882a.5.5 0 0 0 .61.61l6.037-1.475A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.87 9.87 0 0 1-5.032-1.38l-.36-.214-3.733.913.929-3.622-.235-.373A9.86 9.86 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
                    </svg>
                    Book Your First Session
                  </a>

                  <div className="mt-3 space-y-1.5">
                    <p className="text-center text-[0.65rem] font-black text-[#3A9E8F]">
                      ✓ No advance payment required
                    </p>
                    <p className="text-center text-[0.6rem] font-semibold text-[#7da8b8] flex items-center justify-center gap-1">
                      ⚡ Average response time: under 1 hour
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t-2 border-[#E8C86A] text-center">
                    <p className="text-[0.6rem] font-black text-[#E05C42]">
                      ⭐ Limited weekly slots available
                    </p>
                  </div>
                </div>

                {/* Quick Info Card */}
                <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] p-5">
                  <h3 className="text-[0.65rem] font-black text-[#E05C42] uppercase tracking-[0.2em] mb-4">Quick Info</h3>
                  <div className="space-y-3">
                    {[
                      { emoji: '📍', label: 'Location', value: `${tutor.city}, ${tutor.country}` },
                      { emoji: '💻', label: 'Mode', value: modeLabel[tutor.mode] },
                      { emoji: '🎓', label: 'Experience', value: `${tutor.experience} years` },
                      { emoji: '📚', label: 'Subjects', value: `${tutor.subjects.length} subjects` },
                    ].map(({ emoji, label, value }) => (
                      <div key={label} className="flex items-center gap-2 text-sm">
                        <span className="text-base w-6">{emoji}</span>
                        <span className="text-[#7da8b8] text-[0.7rem] font-black flex-1">{label}</span>
                        <span className="font-black text-[#2E4F5E] text-[0.7rem] text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Safety Note */}
                <div className="bg-[#FFFDF7] rounded-xl p-3 border-2 border-[#3A9E8F] shadow-[3px_3px_0_0_#2E4F5E]">
                  <p className="text-[0.65rem] font-black text-[#2E4F5E] leading-relaxed flex items-start gap-2">
                    <span className="text-[#3A9E8F] text-sm">✓</span>
                    <span><span className="text-[#E05C42]">Verified tutor</span> — manually reviewed and approved by Learnova team.</span>
                  </p>
                </div>

                {/* Popular tag */}
                {(tutor.subjects.includes('Mathematics') || tutor.subjects.includes('O Level') || tutor.subjects.includes('A Level')) && (
                  <div className="bg-[#E8C86A]/20 rounded-xl p-3 text-center border-2 border-[#E8C86A] shadow-[3px_3px_0_0_#c4a84a]">
                    <p className="text-[0.65rem] font-black text-[#2E4F5E]">
                      🌟 Popular among O/A Level students
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}