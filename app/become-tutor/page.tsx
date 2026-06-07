
// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import type { IApplication } from '@/types'

// // Grouped subjects for organised chip selector
// const SUBJECT_GROUPS = [
//   {
//     group: 'School & O/A Levels',
//     emoji: '📖',
//     subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Science', 'English', 'Urdu', 'Computer Science', 'Economics', 'Accounting', 'History', 'Geography', 'Pakistan Studies', 'Islamic Studies', 'Statistics', 'Political Science', 'Law', 'Coding'],
//   },
//   {
//     group: 'O Level / A Level',
//     emoji: '🎓',
//     subjects: ['O Level', 'A Level', 'Arabic', 'Quran', 'English Literature', 'Mathematics', 'Additional Mathematics', 'Urdu', 'Islamiat / Islamic Studies', 'Pakistan Studies', 'Physics', 'Chemistry', 'Biology', 'Computer Science / ICT', 'Economics', 'Business Studies', 'Accounting', 'Sociology', 'Psychology', 'History', 'Geography', 'Law', 'Media Studies', 'Art & Design', 'Further Mathematics'],
//   },
//   {
//     group: 'CSS Preparation',
//     emoji: '🏛️',
//     subjects: ['English Essay', 'Precis & Composition', 'General Science & Ability', 'Current Affairs', 'Pakistan Affairs', 'Islamic Studies', 'Political Science', 'International Relations', 'Public Administration', 'Governance & Public Policies', 'Islamic History & Culture', 'Gender Studies', 'Environmental Sciences', 'English Literature', 'Urdu Literature', 'Law', 'Constitutional Law', 'International Law', 'Criminology', 'Journalism & Mass Communication', 'Psychology', 'Sociology', 'Anthropology'],
//   },
//   {
//     group: 'PMS / PPSC / FPSC',
//     emoji: '📋',
//     subjects: ['CSS / PMS', 'PPSC / FPSC', 'General Knowledge', 'Pakistan Studies', 'Islamiat', 'Arithmetic', 'Computer Basics'],
//   },
//   {
//     group: 'English Proficiency',
//     emoji: '🌍',
//     subjects: ['IELTS', 'TOEFL', 'PTE Academic', 'Duolingo English Test', 'OET', 'CELPIP', 'Cambridge B2 First', 'Cambridge C1 Advanced', 'Cambridge C2 Proficiency', 'LanguageCert ESOL', 'Trinity ISE', 'Michigan English Test'],
//   },
//   {
//     group: 'Medical Exams',
//     emoji: '🏥',
//     subjects: ['MDCAT', 'PLAB-I', 'PLAB-II', 'ALS', 'MRCEM', 'MBBS Entry Test'],
//   },
//   {
//     group: 'Entry Tests',
//     emoji: '🎖️',
//     subjects: ['Cadet College Entry Test', 'Atchison College Entry Test (K1)', 'Atchison College Entry Test (K2)', 'Atchison College Entry Test (E2)', 'Entry Test Prep'],
//   },
// ]

// const emptyForm: IApplication = {
//   name: '', subject: '', subjects: [], experience: 0,
//   city: '', country: '', whatsapp: '', bio: '', education: '', mode: 'both',
// }

// // Reusable components (matching home page)
// function Eyebrow({ text, light = false, center = false }: { text: string; light?: boolean; center?: boolean }) {
//   return (
//     <div className={`flex items-center gap-2 mb-3 ${center ? 'justify-center' : ''}`}>
//       <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
//       <span className={`text-[0.62rem] font-black uppercase tracking-[0.22em] ${light ? 'text-[#E8C86A]' : 'text-[#E05C42]'}`}>{text}</span>
//       <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
//     </div>
//   )
// }

// function Wiggle({ color = '#E8C86A' }: { color?: string }) {
//   return (
//     <svg viewBox="0 0 160 10" fill="none" className="absolute -bottom-1 left-0 w-full h-3 pointer-events-none" aria-hidden="true">
//       <path d="M2 5 C20 1,38 9,56 5 C74 1,92 9,110 5 C128 1,146 9,158 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
//     </svg>
//   )
// }

// // Shared input classes with better font visibility
// const inp = "w-full px-4 py-3 rounded-xl border-2 border-[#D4D0C5] focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/25 text-[0.9rem] font-semibold text-[#2E4F5E] bg-white transition-all placeholder:text-[#b0c4cc] placeholder:font-medium"
// const lbl = "block text-[0.7rem] font-black text-[#2E4F5E] uppercase tracking-[0.15em] mb-1.5"

// export default function BecomeTutorPage() {
//   const [form, setForm] = useState<IApplication>(emptyForm)
//   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

//   function toggleSubject(s: string) {
//     setForm(f => ({
//       ...f,
//       subjects: f.subjects.includes(s) ? f.subjects.filter(x => x !== s) : [...f.subjects, s],
//     }))
//   }

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault()
//     if (form.subjects.length === 0) return alert('Please select at least one subject.')
//     setStatus('loading')
//     try {
//       const res = await fetch('/api/tutors/apply', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ...form, subject: form.subjects[0] }),
//       })
//       if (!res.ok) throw new Error()
//       setStatus('success')
//       setForm(emptyForm)
//     } catch {
//       setStatus('error')
//     }
//   }

//   // Success state
//   if (status === 'success') {
//     return (
//       <div className="min-h-screen bg-[#FFFDF7] flex items-center justify-center px-4 py-16" style={{ fontFamily: "'Nunito', sans-serif" }}>
//         <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[8px_8px_0_0_#2E4F5E] p-8 sm:p-12 text-center max-w-md w-full">
//           <div className="w-20 h-20 bg-[#E8C86A] rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E]">🎉</div>
//           <Eyebrow text="You are In!" center />
//           <h2 className="font-black text-2xl text-[#2E4F5E] mb-3">Application Received!</h2>
//           <p className="text-[#4a6a78] text-[0.88rem] font-semibold leading-relaxed mb-6">
//             Thank you for applying to join Avenfield Tutors network. Our team will review your application shortly.
//           </p>
//           <div className="bg-[#FFFDF7] rounded-xl p-4 mb-6 text-left border-2 border-[#E8C86A] shadow-[2px_2px_0_0_#c9ab4a]">
//             <p className="text-[0.65rem] font-black text-[#E05C42] uppercase tracking-[0.2em] mb-3">What happens next?</p>
//             {[
//               { icon: '📋', t: 'Our team reviews your application within 24 to 48 hours' },
//               { icon: '💬', t: 'You will receive a WhatsApp verification message' },
//               { icon: '🚀', t: 'Once approved, your profile goes live to students' },
//             ].map((x, i) => (
//               <div key={i} className="flex items-start gap-2.5 mb-2 last:mb-0">
//                 <span className="text-base flex-shrink-0">{x.icon}</span>
//                 <span className="text-[#2E4F5E] text-[0.82rem] font-semibold leading-snug">{x.t}</span>
//               </div>
//             ))}
//           </div>
//           <Link href="/" className="inline-flex items-center gap-1.5 text-[0.85rem] font-black text-[#E05C42] hover:text-[#c44d36] transition-colors">
//             ← Back to homepage
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="text-[#2E4F5E] overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>

//       {/* SECTION 1 - HERO */}
//       <section className="bg-[#FFFDF7] relative pt-12 sm:pt-20 pb-10 sm:pb-16 px-4 sm:px-8 overflow-hidden">
//         <div aria-hidden="true" className="absolute top-0 right-0 w-60 h-60 sm:w-[420px] sm:h-[420px] rounded-full opacity-20 pointer-events-none"
//           style={{ background: 'radial-gradient(circle, #E8C86A, transparent 70%)', transform: 'translate(40%, -30%)' }} />
//         <div aria-hidden="true" className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 rounded-full opacity-15 pointer-events-none"
//           style={{ background: 'radial-gradient(circle, #3A9E8F, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

//         <div className="relative max-w-3xl mx-auto text-center">
//           <Eyebrow text="Join Our Network" center />

//           {/* Social proof pill */}
//           <div className="inline-flex items-center gap-2 bg-[#E8C86A]/30 border-2 border-[#E8C86A] text-[#2E4F5E] text-[0.7rem] font-black px-3.5 py-1.5 rounded-full mb-6 shadow-[2px_2px_0_0_#c9ab4a]">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#E05C42] animate-pulse flex-shrink-0" />
//             500+ Verified Tutors · 8,000+ Students · 15+ Countries
//           </div>

//           <h1 className="text-[2.1rem] sm:text-[3rem] lg:text-[3.4rem] font-black leading-[1.07] tracking-[-0.025em] text-[#2E4F5E] mb-5">
//             Teach Students Who Are<br />
//             <span className="relative inline-block">
//               <span className="relative z-10">Already Looking For You</span>
//               <Wiggle />
//             </span>
//           </h1>
//           <p className="text-[#4a6a78] text-[0.92rem] sm:text-[1.02rem] leading-[1.8] mb-7 max-w-xl mx-auto font-semibold">
//             Join Avenfield Tutors and connect directly with motivated students through WhatsApp.
//             Share your expertise we handle the visibility.
//           </p>

//           {/* Time pill */}
//           <div className="inline-flex items-center gap-2 bg-white border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] text-[#2E4F5E] text-[0.7rem] font-black px-4 py-2 rounded-full">
//             <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             Only takes 2 minutes to apply
//           </div>
//         </div>
//       </section>

//       {/* SECTION 2 - BENEFITS (dark teal) */}
//       <section className="bg-[#2E4F5E] py-7 sm:py-10 px-4 sm:px-8">
//         <div className="max-w-3xl mx-auto grid grid-cols-3 gap-2.5 sm:gap-4">
//           {[
//             { emoji: '📚', t: 'Students seek your subject', bg: 'bg-[#3A9E8F]' },
//             { emoji: '💬', t: 'Direct WhatsApp booking', bg: 'bg-[#E05C42]' },
//             { emoji: '🌍', t: 'Online or at-home sessions', bg: 'bg-[#E8C86A]' },
//           ].map(b => (
//             <div key={b.t} className={`${b.bg} rounded-xl p-3 sm:p-4 text-center border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#1a3240] hover:-translate-y-0.5 transition-all duration-150`}>
//               <span className="text-xl sm:text-2xl block mb-1">{b.emoji}</span>
//               <p className="text-[0.7rem] sm:text-[0.78rem] font-black text-white leading-snug">{b.t}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SECTION 3 - SOCIAL PROOF (yellow) */}
//       <section className="bg-[#E8C86A] border-y-2 border-[#2E4F5E] py-5 px-4 sm:px-8">
//         <div className="max-w-3xl mx-auto flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
//           {[
//             { v: '500+', l: 'Verified Tutors' },
//             { v: '8,000+', l: 'Students Helped' },
//             { v: '15+', l: 'Countries Served' },
//           ].map(stat => (
//             <div key={stat.l} className="flex items-center gap-2.5">
//               <div className="w-0.5 h-7 bg-[#2E4F5E] rounded-full opacity-30" />
//               <div>
//                 <p className="font-black text-[#2E4F5E] text-[1.05rem] leading-tight">{stat.v}</p>
//                 <p className="text-[#4a6a78] text-[0.65rem] font-black tracking-wide">{stat.l}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SECTION 4 - APPLICATION FORM */}
//       <section className="bg-[#FFFDF7] py-12 sm:py-16 px-4 sm:px-8">
//         <div className="max-w-2xl mx-auto">

//           {/* Form header */}
//           <div className="text-center mb-8">
//             <Eyebrow text="Your Application" center />
//             <h2 className="text-[1.6rem] sm:text-[2rem] font-black text-[#2E4F5E] mb-2">
//               Tell Us About Yourself
//             </h2>
//             <p className="text-[#4a6a78] text-[0.85rem] font-semibold">
//               Fill in the details below our team reviews every application personally.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] overflow-hidden">

//             {/* Top accent bar */}
//             <div className="h-2 bg-gradient-to-r from-[#E8C86A] via-[#E05C42] to-[#3A9E8F]" />

//             <div className="p-5 sm:p-7 flex flex-col gap-5">

//               {/* Row 1: Name + WhatsApp */}
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className={lbl}>Full Name <span className="text-[#E05C42]">*</span></label>
//                   <input required className={inp} placeholder="e.g. Ahmad Hassan"
//                     value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
//                 </div>
//                 <div>
//                   <label className={lbl}>WhatsApp Number <span className="text-[#E05C42]">*</span></label>
//                   <input required className={inp} placeholder="+92 300 0000000"
//                     value={form.whatsapp} onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))} />
//                 </div>
//               </div>

//               {/* Subjects (grouped accordion selector) */}
//               <div>
//                 <label className={lbl}>
//                   Subjects You Teach <span className="text-[#E05C42]">*</span>
//                   {form.subjects.length > 0 && (
//                     <span className="ml-2 bg-[#E8C86A] text-[#2E4F5E] px-2 py-0.5 rounded-full normal-case tracking-normal font-black text-[0.6rem]">
//                       {form.subjects.length} selected
//                     </span>
//                   )}
//                 </label>
//                 <div className="mt-2 flex flex-col gap-2">
//                   {SUBJECT_GROUPS.map(group => {
//                     const selectedInGroup = group.subjects.filter(s => form.subjects.includes(s)).length
//                     return (
//                       <details key={group.group} className="rounded-xl border-2 border-[#D4D0C5] overflow-hidden group/acc">
//                         <summary className="flex items-center justify-between px-4 py-3 bg-[#FFFDF7] cursor-pointer select-none hover:bg-[#F5F2E8] transition-colors list-none">
//                           <div className="flex items-center gap-2">
//                             <span className="text-base">{group.emoji}</span>
//                             <span className="text-[0.8rem] font-black text-[#2E4F5E]">{group.group}</span>
//                             {selectedInGroup > 0 && (
//                               <span className="bg-[#E8C86A] text-[#2E4F5E] text-[0.58rem] font-black px-1.5 py-0.5 rounded-full border border-[#2E4F5E]">
//                                 {selectedInGroup} selected
//                               </span>
//                             )}
//                           </div>
//                           <svg className="w-3.5 h-3.5 text-[#4a6a78] transition-transform duration-200 group-open/acc:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                           </svg>
//                         </summary>
//                         <div className="px-4 py-3 bg-white border-t border-[#E8E4D8] flex flex-wrap gap-2">
//                           {group.subjects.map(s => (
//                             <button type="button" key={s} onClick={() => toggleSubject(s)}
//                               className={`px-3 py-1.5 rounded-lg text-[0.72rem] font-black border-2 transition-all duration-150 ${form.subjects.includes(s)
//                                   ? 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]'
//                                   : 'bg-[#FFFDF7] text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/15'
//                                 }`}>
//                               {s}
//                             </button>
//                           ))}
//                         </div>
//                       </details>
//                     )
//                   })}
//                 </div>
//               </div>

//               {/* Row 2: Experience + Mode */}
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className={lbl}>Years of Experience <span className="text-[#E05C42]">*</span></label>
//                   <input required type="number" min={0} max={50} className={inp} placeholder="e.g. 5"
//                     value={form.experience || ''}
//                     onChange={e => setForm(f => ({ ...f, experience: parseInt(e.target.value) || 0 }))} />
//                 </div>
//                 <div>
//                   <label className={lbl}>Teaching Mode <span className="text-[#E05C42]">*</span></label>
//                   <select required className={inp}
//                     value={form.mode}
//                     onChange={e => setForm(f => ({ ...f, mode: e.target.value as IApplication['mode'] }))}>
//                     <option value="both">Both Online & Home Visit</option>
//                     <option value="online">Online Only</option>
//                     <option value="onsite">Home Visit Only</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Row 3: City + Country */}
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className={lbl}>City <span className="text-[#E05C42]">*</span></label>
//                   <input required className={inp} placeholder="e.g. Islamabad"
//                     value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} />
//                 </div>
//                 <div>
//                   <label className={lbl}>Country <span className="text-[#E05C42]">*</span></label>
//                   <input required className={inp} placeholder="e.g. Pakistan"
//                     value={form.country} onChange={e => setForm(f => ({ ...f, country: e.target.value }))} />
//                 </div>
//               </div>

//               {/* Education */}
//               <div>
//                 <label className={lbl}>Education / Qualification <span className="text-[#E05C42]">*</span></label>
//                 <input required className={inp} placeholder="e.g. BS Computer Science, NUST"
//                   value={form.education} onChange={e => setForm(f => ({ ...f, education: e.target.value }))} />
//               </div>

//               {/* Bio */}
//               <div>
//                 <label className={lbl}>About Yourself <span className="text-[#E05C42]">*</span></label>
//                 <textarea required rows={4}
//                   className={`${inp} resize-none`}
//                   placeholder='Example: "I help O Level Mathematics students improve grades through concept based learning and weekly practice sessions."'
//                   value={form.bio}
//                   onChange={e => setForm(f => ({ ...f, bio: e.target.value }))} />
//                 <p className="text-[0.62rem] font-semibold text-[#7da8b8] mt-1.5">Minimum 100 characters recommended helps students choose you</p>
//               </div>

//               {/* Error state */}
//               {status === 'error' && (
//                 <div className="flex items-center gap-2.5 bg-[#E05C42]/10 border-2 border-[#E05C42] text-[#E05C42] text-[0.82rem] font-black px-4 py-3 rounded-xl">
//                   <span>⚠️</span> Something went wrong. Please try again.
//                 </div>
//               )}

//               {/* Submit button */}
//               <div className="pt-1">
//                 <button type="submit" disabled={status === 'loading'}
//                   className="w-full py-3.5 bg-[#E05C42] text-white font-black text-[0.9rem] rounded-xl border-2 border-[#a83c2a] shadow-[0_4px_0_0_#a83c2a] hover:shadow-[0_2px_0_0_#a83c2a] hover:translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150">
//                   {status === 'loading' ? 'Submitting...' : 'Submit Application →'}
//                 </button>
//                 <p className="text-center text-[0.62rem] font-black text-[#7da8b8] mt-2.5">
//                   We only approve tutors who meet our quality standards
//                 </p>
//               </div>
//             </div>
//           </form>
//         </div>
//       </section>

//       {/* SECTION 5 - WHAT HAPPENS NEXT (teal bg) */}
//       <section className="bg-[#3A9E8F] py-12 sm:py-16 px-4 sm:px-8 border-t-2 border-[#2E4F5E]">
//         <div className="max-w-2xl mx-auto">
//           <div className="text-center mb-8">
//             <Eyebrow text="After You Apply" light center />
//             <h2 className="text-[1.5rem] sm:text-[1.9rem] font-black text-white">
//               Here is What Happens Next
//             </h2>
//           </div>
//           <div className="grid sm:grid-cols-3 gap-4">
//             {[
//               { n: '01', icon: '📋', t: 'Application Review', d: 'Our team manually reviews your qualifications and experience within 24 to 48 hours.', bg: 'bg-[#E8C86A]', tc: 'text-[#2E4F5E]' },
//               { n: '02', icon: '💬', t: 'WhatsApp Verification', d: 'We reach out to confirm your identity and teaching availability personally.', bg: 'bg-[#2E4F5E]', tc: 'text-[#E8C86A]' },
//               { n: '03', icon: '🚀', t: 'Profile Goes Live', d: 'Once approved, students across Pakistan, UAE and UK can find and contact you.', bg: 'bg-[#E05C42]', tc: 'text-white' },
//             ].map(s => (
//               <div key={s.n} className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] p-5 text-center hover:-translate-y-1 hover:shadow-[4px_6px_0_0_#2E4F5E] transition-all duration-200">
//                 <div className={`w-12 h-12 rounded-xl ${s.bg} border-2 border-[#2E4F5E] flex items-center justify-center text-xl mx-auto mb-3 shadow-[2px_2px_0_0_#2E4F5E]`}>
//                   {s.icon}
//                 </div>
//                 <span className="text-[0.6rem] font-black text-[#7da8b8] tracking-widest block mb-1">STEP {s.n}</span>
//                 <h3 className="font-black text-[0.88rem] text-[#2E4F5E] mb-2">{s.t}</h3>
//                 <p className="text-[#4a6a78] text-[0.74rem] font-semibold leading-relaxed">{s.d}</p>
//               </div>
//             ))}
//           </div>
//           <p className="text-center text-[0.62rem] font-black text-[#c5e8e3] mt-7">
//             Simple application · Manual review · Fast approval
//           </p>
//         </div>
//       </section>

//       {/* SECTION 6 - TUTOR TESTIMONIALS (cream) */}
//       <section className="bg-[#FFFDF7] py-12 sm:py-16 px-4 sm:px-8">
//         <div className="max-w-2xl mx-auto">
//           <div className="text-center mb-8">
//             <Eyebrow text="Tutor Voices" center />
//             <h2 className="text-[1.5rem] sm:text-[1.9rem] font-black text-[#2E4F5E]">
//               What Our Tutors Say
//             </h2>
//           </div>
//           <div className="grid sm:grid-cols-2 gap-4">
//             {[
//               { q: "Within a week of approval I had 3 students. Avenfield Tutors made growing my tutoring career effortless.", name: 'Bilal A.', role: 'Mathematics Tutor · Lahore', init: 'BA', bg: 'bg-[#E8C86A]', t: 'text-[#2E4F5E]' },
//               { q: "I teach IELTS online. My student base went from 2 to 12 in two months after joining Avenfield Tutors.", name: 'Nadia S.', role: 'IELTS Tutor · Islamabad', init: 'NS', bg: 'bg-[#3A9E8F]', t: 'text-white' },
//             ].map(r => (
//               <div key={r.name} className="bg-white rounded-2xl border-2 border-[#2E4F5E] p-5 flex flex-col shadow-[4px_4px_0_0_#2E4F5E] hover:-translate-y-1 hover:shadow-[4px_6px_0_0_#2E4F5E] transition-all duration-200">
//                 <div className="flex gap-0.5 mb-3">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <svg key={i} className="w-3.5 h-3.5 text-[#E8C86A]" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="text-[#4a6a78] text-[0.82rem] font-semibold leading-relaxed flex-1 mb-4">"{r.q}"</p>
//                 <div className="flex items-center gap-3 pt-3 border-t-2 border-dashed border-[#E8C86A]">
//                   <div className={`w-9 h-9 rounded-xl ${r.bg} ${r.t} text-[0.68rem] font-black flex items-center justify-center border-2 border-[#2E4F5E] flex-shrink-0`}>{r.init}</div>
//                   <div>
//                     <p className="text-[0.82rem] font-black text-[#2E4F5E]">{r.name}</p>
//                     <p className="text-[0.67rem] text-[#3A9E8F] font-bold">{r.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SECTION 7 - FINAL CTA (dark teal) */}
//       <section className="bg-[#2E4F5E] py-14 sm:py-20 px-4 sm:px-8 relative overflow-hidden">
//         <div aria-hidden="true" className="absolute top-4 right-4 grid grid-cols-5 gap-1.5 opacity-15">
//           {Array.from({ length: 25 }).map((_, i) => (
//             <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#E8C86A]" />
//           ))}
//         </div>
//         <div className="relative max-w-xl mx-auto text-center">
//           <Eyebrow text="Ready?" light center />
//           <h2 className="text-[1.7rem] sm:text-[2.4rem] font-black text-white leading-[1.1] tracking-[-0.02em] mb-4">
//             Students Are Looking<br />
//             <span className="relative inline-block text-[#E8C86A]">
//               <span className="relative z-10">For You Right Now.</span>
//               <svg viewBox="0 0 160 10" fill="none" className="absolute -bottom-1 left-0 w-full h-3 pointer-events-none" aria-hidden="true">
//                 <path d="M2 5 C20 1,38 9,56 5 C74 1,92 9,110 5 C128 1,146 9,158 5" stroke="#E05C42" strokeWidth="2.5" strokeLinecap="round" fill="none" />
//               </svg>
//             </span>
//           </h2>
//           <p className="text-white/55 text-[0.9rem] mb-8 max-w-sm mx-auto font-semibold leading-relaxed">
//             Apply in 2 minutes. Get reviewed within 48 hours. Start earning from your expertise.
//           </p>
//           <button
//             onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
//             className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#E8C86A] text-[#2E4F5E] font-black text-[0.9rem] rounded-xl border-2 border-[#a88e3a] shadow-[0_4px_0_0_#a88e3a] hover:shadow-[0_2px_0_0_#a88e3a] hover:translate-y-[2px] transition-all duration-150">
//             Apply Now →
//           </button>
//           <p className="text-white/30 text-[0.62rem] font-bold mt-4">
//             Already a tutor? <Link href="/tutors" className="underline hover:text-white/50 transition-colors">Browse tutor profiles</Link>
//           </p>
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
  title: 'Find Verified Tutors Online & Home Tuition | Avenfield Tutors',
  description:
    'Browse 500+ verified tutors at Avenfield Tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects. Online worldwide & home tutoring in Pakistan, UAE & UK.',
  keywords:
    'find tutor Pakistan, online tutor, home tutor Lahore, O Level tutor, A Level tutor, IELTS tutor, MDCAT tutor, CSS coaching, Avenfield Tutors',
  openGraph: {
    title: 'Find Verified Tutors – Online & Home Tuition | Avenfield Tutors',
    description:
      'Browse 500+ verified tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects. Online worldwide & home tutoring in Pakistan, UAE & UK.',
    type: 'website',
    siteName: 'Avenfield Tutors',
  },
  alternates: { canonical: 'https://avenfield-tutors.vercel.app/tutors' },
}

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

        {/* ══════════════════════════════════════════════════════
            HERO HEADER
        ══════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="tutors-hero-heading"
          className="bg-[#2E4F5E] pt-10 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-8 relative overflow-hidden"
        >
          <div aria-hidden="true" className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle,#3A9E8F,transparent 70%)', transform: 'translate(40%,-30%)' }} />
          <div aria-hidden="true" className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-8 pointer-events-none"
            style={{ background: 'radial-gradient(circle,#E8C86A,transparent 70%)', transform: 'translate(-40%,40%)' }} />
          <div aria-hidden="true"
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,#E8C86A 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

          <div className="max-w-6xl mx-auto relative">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4" aria-hidden="true">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8C86A]" />
              <span className="text-[0.62rem] font-black uppercase tracking-[0.25em] text-[#E8C86A]">Avenfield Tutors</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8C86A]" />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-2xl">
                <h1 id="tutors-hero-heading" className="text-white text-[2rem] sm:text-[2.9rem] font-black tracking-tight leading-[1.1] mb-4">
                  Every Subject.<br className="sm:hidden"/>
                  <span className="text-[#E8C86A]"> Every Level.</span><br/>
                  One Trusted Platform.
                </h1>
                <p className="text-[#7da8b8] text-[0.9rem] sm:text-[1rem] font-semibold leading-relaxed max-w-lg">
                  Every tutor at Avenfield Tutors is manually reviewed and verified before going live.
                  No algorithms just real educators, hand picked for quality.
                </p>
              </div>

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

            {/* Trust signals */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2">
              {[
                'Manually verified tutors',
                'Online worldwide & home visits',
                'Direct WhatsApp booking',
                'Flexible schedules',
                'Cancel anytime',
              ].map(item => (
                <span key={item} className="flex items-center gap-2 text-[0.72rem] font-bold text-white/70 whitespace-nowrap">
                  <span className="w-4 h-4 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.5rem] font-black flex-shrink-0" aria-hidden="true">✓</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            STICKY SEARCH + FILTER BAR
        ══════════════════════════════════════════════════════ */}
        <div className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b-2 border-[#E8C86A] px-4 sm:px-8 py-3.5 shadow-sm">
          <div className="max-w-6xl mx-auto">
            <form method="GET" action="/tutors" className="relative mb-3" role="search" aria-label="Search tutors">
              <label htmlFor="tutor-search" className="sr-only">Search by tutor name or subject</label>
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b0c4cc] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <input
                id="tutor-search"
                type="text"
                name="search"
                defaultValue={searchQuery}
                placeholder="Search by tutor name or subject — e.g. IELTS, Maths, CSS..."
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
                  <Link href="/tutors" aria-label="Clear subject filter" className="hover:text-[#E05C42] transition-colors ml-0.5">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </Link>
                </span>
              </div>
            )}

            {/* Subject filter chips */}
            <nav aria-label="Filter tutors by subject" className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-hide">
              <Link href="/tutors"
                aria-label="Show all tutors"
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[0.72rem] font-black border-2 transition-all duration-150 ${
                  activeSubject === 'All'
                    ? 'bg-[#E05C42] text-white border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]'
                    : 'bg-white text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/10'
                }`}>
                All Tutors
              </Link>
              {POPULAR_SUBJECTS.map(s => (
                <Link key={s} href={`/tutors?subject=${encodeURIComponent(s)}`}
                  aria-label={`Filter by ${s}`}
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
                  aria-label={`Filter by ${s}`}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[0.68rem] font-bold border transition-all duration-150 ${
                    activeSubject === s
                      ? 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E]'
                      : 'bg-white text-[#7da8b8] border-[#D4D0C5] hover:border-[#E8C86A] hover:text-[#2E4F5E]'
                  }`}>
                  {s}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            TUTOR GRID
        ══════════════════════════════════════════════════════ */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
          {tutors.length > 0 ? (
            <>
              <p className="text-[0.75rem] font-bold text-[#7da8b8] mb-6">
                {activeSubject !== 'All'
                  ? `${tutors.length} tutor${tutors.length !== 1 ? 's' : ''} found for "${activeSubject}" at Avenfield Tutors`
                  : `${tutors.length} verified tutor${tutors.length !== 1 ? 's' : ''} available at Avenfield Tutors`
                }
                {searchQuery && (
                  <span className="ml-2 text-[#E8934A]">· Results for "{searchQuery}"</span>
                )}
              </p>

              {/* Featured tutors */}
              {featuredTutors.length > 0 && activeSubject === 'All' && !searchQuery && (
                <div className="mb-10 sm:mb-14">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-6 w-1 bg-[#E8C86A] rounded-full border border-[#2E4F5E]" aria-hidden="true" />
                    <h2 className="font-black text-[1.05rem] text-[#2E4F5E]">Featured Tutors</h2>
                    <span className="text-[0.62rem] font-black text-[#7da8b8] bg-[#FFFDF7] border border-[#D4D0C5] px-2.5 py-0.5 rounded-full">5+ years experience</span>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {featuredTutors.map(tutor => (
                      <TutorCard key={tutor._id} tutor={tutor} featured />
                    ))}
                  </div>
                </div>
              )}

              {/* All tutors */}
              {(regularTutors.length > 0 || featuredTutors.length === 0 || activeSubject !== 'All' || searchQuery) && (
                <div>
                  {featuredTutors.length > 0 && activeSubject === 'All' && !searchQuery && (
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-5 w-1 bg-[#D4D0C5] rounded-full" aria-hidden="true" />
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

              <p className="text-center text-[0.62rem] font-black text-[#b0c4cc] mt-12">
                All {tutors.length} tutor{tutors.length !== 1 ? 's' : ''} manually verified by the Avenfield Tutors team
              </p>
            </>
          ) : (
            /* Empty state */
            <div className="text-center py-16 sm:py-28">
              <div className="w-20 h-20 bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] flex items-center justify-center text-4xl mx-auto mb-6" aria-hidden="true">🔍</div>
              <h2 className="font-black text-[1.25rem] sm:text-[1.5rem] text-[#2E4F5E] mb-3">
                No tutors found{activeSubject !== 'All' ? ` for "${activeSubject}"` : ''}
              </h2>
              <p className="text-[#4a6a78] text-[0.88rem] font-semibold max-w-sm mx-auto mb-8 leading-relaxed">
                We may not have added tutors for this subject yet but new tutors join Avenfield every week.
                Try browsing all tutors or request one for your subject.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/tutors"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E05C42] text-white text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all">
                  Browse All Tutors
                </Link>
                <Link href="/become-tutor"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#2E4F5E] text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all">
                  Teach at Avenfield
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* ══════════════════════════════════════════════════════
            BOTTOM CTA
        ══════════════════════════════════════════════════════ */}
        {tutors.length > 5 && (
          <div className="bg-[#2E4F5E] border-t-2 border-[#E8C86A] py-10 px-4 sm:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white font-black text-[1.05rem] mb-1">Can't find the right tutor?</p>
              <p className="text-[#7da8b8] text-[0.82rem] font-semibold mb-5">
                Tell us your subject and requirements Avenfield Tutors will match you with the right educator within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/become-tutor"
                  aria-label="Request a tutor from Avenfield Tutors"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E8C86A] text-[#2E4F5E] text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_rgba(232,200,106,0.4)] hover:shadow-none hover:translate-y-[2px] transition-all">
                  Request a Tutor
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
                <Link href="/services"
                  aria-label="View all Avenfield Tutors services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white text-[0.85rem] font-black rounded-xl border-2 border-white/20 hover:bg-white/15 transition-all">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}