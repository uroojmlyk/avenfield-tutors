

// 'use client'

// import { useState } from 'react'
// import type { IApplication } from '@/types'

// const SUBJECTS = [
//   'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Urdu',
//   'O Level', 'A Level', 'IELTS', 'TOEFL', 'Computer Science', 'Coding',
//   'Economics', 'Accounting', 'Arabic', 'Quran', 'History', 'Geography',
// ]

// const emptyForm: IApplication = {
//   name: '', subject: '', subjects: [], experience: 0,
//   city: '', country: '', whatsapp: '', bio: '', education: '', mode: 'both',
// }

// export default function BecomeTutorPage() {
//   const [form, setForm] = useState<IApplication>(emptyForm)
//   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

//   function toggleSubject(s: string) {
//     setForm((f) => ({
//       ...f,
//       subjects: f.subjects.includes(s) ? f.subjects.filter((x) => x !== s) : [...f.subjects, s],
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

//   if (status === 'success') {
//     return (
//       <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-5">
//         <div className="bg-white rounded-2xl border border-[#E8E4F0] p-12 text-center max-w-md shadow-xl">
//           <div className="w-20 h-20 bg-gradient-to-br from-[#6C5CE7] to-[#5A4BD1] rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg">
//             🎉
//           </div>
//           <h2 className="font-bold text-2xl text-[#1A1730] mb-3">Application Received!</h2>
//           <p className="text-[#5A5870] text-sm leading-relaxed mb-4">
//             Thank you for applying to join Learnova's tutor network.
//           </p>
//           <div className="bg-[#EEF0FF] rounded-xl p-4 mb-6 text-left">
//             <p className="text-xs font-semibold text-[#6C5CE7] uppercase tracking-wide mb-2">What happens next?</p>
//             <div className="space-y-2 text-sm">
//               <div className="flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]" />
//                 <span className="text-[#1A1730]">Our team reviews your application (24-48 hours)</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]" />
//                 <span className="text-[#1A1730]">You'll receive a WhatsApp verification message</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]" />
//                 <span className="text-[#1A1730]">Once approved, your profile goes live to students</span>
//               </div>
//             </div>
//           </div>
//           <p className="text-[#A89EC6] text-xs mb-4">
//             If approved, your tutor profile will be visible to students searching for your subjects.
//           </p>
//           <a href="/" className="text-sm font-semibold text-[#6C5CE7] hover:text-[#5A4BD1] transition-colors">
//             ← Back to homepage
//           </a>
//         </div>
//       </div>
//     )
//   }

//   const inputClass = "w-full px-4 py-3 rounded-xl border border-[#D3D1C7] focus:outline-none focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/20 text-sm text-[#1A1730] bg-white transition-all placeholder:text-[#A89EC6]"
//   const labelClass = "block text-sm font-semibold text-[#1A1730] mb-1.5"

//   return (
//     <div className="min-h-screen bg-[#FAFAF8] py-16 px-5 sm:py-20">
//       <div className="max-w-3xl mx-auto">
        
//         {/* ========== PROGRESS INDICATOR ========== */}
//         <div className="text-center mb-4">
//           <p className="text-xs font-medium text-[#6C5CE7] bg-[#EEF0FF] inline-flex items-center gap-2 px-3 py-1 rounded-full">
//             <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             Only takes 2 minutes to apply
//           </p>
//         </div>

//         {/* ========== HEADER ========== */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center gap-2 bg-[#EEF0FF] border border-[#C8BEFF] text-[#6C5CE7] text-xs font-bold px-4 py-2 rounded-full mb-6">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] animate-pulse" />
//             🎓 Helping tutors grow their teaching careers
//           </div>
//           <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] text-[#1A1730] mb-4">
//             Teach Students Who Are Already Looking For Your Expertise
//           </h1>
//           <p className="text-[#5A5870] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
//             Join a trusted tutoring platform and connect directly with serious students through WhatsApp.
//           </p>
//         </div>

//         {/* ========== BENEFITS STRIP (Before Form) ========== */}
//         <div className="grid sm:grid-cols-3 gap-4 mb-10">
//           {[
//             { emoji: '📚', text: 'Get students based on your subject', color: 'bg-[#EEF0FF]' },
//             { emoji: '💬', text: 'Direct WhatsApp communication', color: 'bg-[#E6F9F2]' },
//             { emoji: '🌍', text: 'Teach online or onsite', color: 'bg-[#FFF4E6]' },
//           ].map((benefit) => (
//             <div key={benefit.text} className={`${benefit.color} rounded-xl p-4 text-center transition-all duration-200 hover:scale-[1.02]`}>
//               <span className="text-2xl block mb-1">{benefit.emoji}</span>
//               <p className="text-sm font-semibold text-[#1A1730]">{benefit.text}</p>
//             </div>
//           ))}
//         </div>

//         {/* ========== TRUST STRIP ========== */}
//         <div className="bg-white rounded-xl border border-[#E8E4F0] p-4 mb-10">
//           <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
//             {[
//               { value: '500+', label: 'Verified Tutors' },
//               { value: '8,000+', label: 'Students Helped' },
//               { value: '15+', label: 'Countries Served' },
//             ].map((stat) => (
//               <div key={stat.label} className="flex items-center gap-3">
//                 <div className="w-0.5 h-6 bg-gradient-to-b from-[#6C5CE7] to-[#C8BEFF] rounded-full" />
//                 <div>
//                   <p className="font-bold text-[#1A1730] text-base">{stat.value}</p>
//                   <p className="text-[#A89EC6] text-[10px] font-medium">{stat.label}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ========== FORM ========== */}
//         <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#E8E4F0] p-6 sm:p-8 flex flex-col gap-6 shadow-sm">

//           {/* Name + WhatsApp */}
//           <div className="grid md:grid-cols-2 gap-5">
//             <div>
//               <label className={labelClass}>Full Name <span className="text-[#6C5CE7]">*</span></label>
//               <input required className={inputClass} placeholder="e.g. Ahmad Hassan" value={form.name}
//                 onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
//             </div>
//             <div>
//               <label className={labelClass}>WhatsApp Number <span className="text-[#6C5CE7]">*</span></label>
//               <input required className={inputClass} placeholder="+92 300 0000000" value={form.whatsapp}
//                 onChange={(e) => setForm((f) => ({ ...f, whatsapp: e.target.value }))} />
//             </div>
//           </div>

//           {/* Subjects */}
//           <div>
//             <label className={labelClass}>Subjects You Teach <span className="text-[#6C5CE7]">*</span></label>
//             <div className="flex flex-wrap gap-2 mt-2">
//               {SUBJECTS.map((s) => (
//                 <button
//                   type="button"
//                   key={s}
//                   onClick={() => toggleSubject(s)}
//                   className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
//                     form.subjects.includes(s)
//                       ? 'bg-gradient-to-r from-[#6C5CE7] to-[#5A4BD1] text-white border-[#6C5CE7] shadow-md shadow-[#6C5CE7]/25 scale-[1.02]'
//                       : 'bg-[#FAFAF8] text-[#5A5870] border-[#E8E4F0] hover:border-[#C8BEFF] hover:bg-[#EEF0FF]'
//                   }`}
//                 >
//                   {s}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Experience + Mode */}
//           <div className="grid md:grid-cols-2 gap-5">
//             <div>
//               <label className={labelClass}>Years of Experience <span className="text-[#6C5CE7]">*</span></label>
//               <input required type="number" min={0} max={50} className={inputClass} placeholder="e.g. 5"
//                 value={form.experience || ''}
//                 onChange={(e) => setForm((f) => ({ ...f, experience: parseInt(e.target.value) || 0 }))} />
//             </div>
//             <div>
//               <label className={labelClass}>Teaching Mode <span className="text-[#6C5CE7]">*</span></label>
//               <select required className={inputClass} value={form.mode}
//                 onChange={(e) => setForm((f) => ({ ...f, mode: e.target.value as IApplication['mode'] }))}>
//                 <option value="both">Both — Online & Home Visit</option>
//                 <option value="online">Online Only</option>
//                 <option value="onsite">Home Visit Only</option>
//               </select>
//             </div>
//           </div>

//           {/* City + Country */}
//           <div className="grid md:grid-cols-2 gap-5">
//             <div>
//               <label className={labelClass}>City <span className="text-[#6C5CE7]">*</span></label>
//               <input required className={inputClass} placeholder="e.g. Islamabad" value={form.city}
//                 onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))} />
//             </div>
//             <div>
//               <label className={labelClass}>Country <span className="text-[#6C5CE7]">*</span></label>
//               <input required className={inputClass} placeholder="e.g. Pakistan" value={form.country}
//                 onChange={(e) => setForm((f) => ({ ...f, country: e.target.value }))} />
//             </div>
//           </div>

//           {/* Education */}
//           <div>
//             <label className={labelClass}>Education / Qualification <span className="text-[#6C5CE7]">*</span></label>
//             <input required className={inputClass} placeholder="e.g. BS Computer Science, NUST" value={form.education}
//               onChange={(e) => setForm((f) => ({ ...f, education: e.target.value }))} />
//           </div>

//           {/* Bio with example */}
//           <div>
//             <label className={labelClass}>About Yourself <span className="text-[#6C5CE7]">*</span></label>
//             <textarea required rows={4} className={`${inputClass} resize-none`}
//               placeholder="Example: &quot;I help O Level Mathematics students improve grades through concept-based learning and weekly practice sessions.&quot;"
//               value={form.bio}
//               onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))} />
//             <p className="text-xs text-[#A89EC6] mt-1">Min 100 characters recommended — helps students choose you</p>
//           </div>

//           {/* Error message */}
//           {status === 'error' && (
//             <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-xl">
//               Something went wrong. Please try again.
//             </p>
//           )}

//           {/* Submit button with exclusivity line */}
//           <div className="space-y-3">
//             <button
//               type="submit"
//               disabled={status === 'loading'}
//               className="w-full py-4 bg-gradient-to-r from-[#6C5CE7] to-[#5A4BD1] hover:from-[#5A4BD1] hover:to-[#4A3DC0] disabled:opacity-60 text-white font-bold rounded-xl shadow-md shadow-[#6C5CE7]/25 hover:shadow-lg transition-all duration-200 text-base"
//             >
//               {status === 'loading' ? 'Submitting Application...' : 'Submit Application →'}
//             </button>
//             <p className="text-xs text-center text-[#A89EC6]">
//               We only approve tutors who meet our quality standards.
//             </p>
//           </div>
//         </form>

//         {/* ========== WHAT HAPPENS AFTER APPLYING ========== */}
//         <div className="mt-10 bg-[#EEF0FF] rounded-2xl p-6 border border-[#C8BEFF]">
//           <p className="text-xs font-bold text-[#6C5CE7] uppercase tracking-[0.2em] mb-4 text-center">
//             What happens after applying?
//           </p>
//           <div className="grid sm:grid-cols-3 gap-6">
//             {[
//               { step: '01', title: 'Application Review', desc: 'Our team manually reviews your qualifications and experience.', icon: '📋' },
//               { step: '02', title: 'WhatsApp Verification', desc: 'We reach out to confirm your identity and teaching availability.', icon: '💬' },
//               { step: '03', title: 'Profile Goes Live', desc: 'Once approved, students can find and contact you directly.', icon: '🚀' },
//             ].map((item) => (
//               <div key={item.step} className="text-center">
//                 <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-xl mx-auto mb-3 shadow-sm">
//                   {item.icon}
//                 </div>
//                 <p className="text-xs font-bold text-[#6C5CE7] mb-1">{item.step}</p>
//                 <p className="text-sm font-semibold text-[#1A1730] mb-1">{item.title}</p>
//                 <p className="text-xs text-[#5A5870] leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ========== FINAL TRUST NOTE ========== */}
//         <p className="text-center text-[10px] text-[#A89EC6] mt-8">
//           Simple application • Manual review • Fast approval
//         </p>
//       </div>
//     </div>
//   )
// }








'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { IApplication } from '@/types'

const SUBJECTS = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Urdu',
  'O Level', 'A Level', 'IELTS', 'TOEFL', 'Computer Science', 'Coding',
  'Economics', 'Accounting', 'Arabic', 'Quran', 'History', 'Geography',
]

const emptyForm: IApplication = {
  name: '', subject: '', subjects: [], experience: 0,
  city: '', country: '', whatsapp: '', bio: '', education: '', mode: 'both',
}

// Eyebrow component matching Services page
function Eyebrow({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
      <span className={`text-[0.68rem] font-black uppercase tracking-[0.25em] ${light ? 'text-[#E8C86A]' : 'text-[#E05C42]'}`}>{text}</span>
      <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
    </div>
  )
}

// Wiggle underline matching Services page
function Wiggle({ color = '#E8C86A' }: { color?: string }) {
  return (
    <svg viewBox="0 0 160 10" fill="none" className="absolute -bottom-1.5 left-0 w-full h-3 pointer-events-none" aria-hidden="true">
      <path d="M2 5 C20 1, 38 9, 56 5 C74 1, 92 9, 110 5 C128 1, 146 9, 158 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

export default function BecomeTutorPage() {
  const [form, setForm] = useState<IApplication>(emptyForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function toggleSubject(s: string) {
    setForm((f) => ({
      ...f,
      subjects: f.subjects.includes(s) ? f.subjects.filter((x) => x !== s) : [...f.subjects, s],
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form.subjects.length === 0) return alert('Please select at least one subject.')
    setStatus('loading')
    try {
      const res = await fetch('/api/tutors/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, subject: form.subjects[0] }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm(emptyForm)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[#FFFDF7] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[8px_8px_0_0_#2E4F5E] p-8 sm:p-12 text-center max-w-md">
          <div className="w-20 h-20 bg-[#E05C42] rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E]">
            🎉
          </div>
          <h2 className="font-black text-2xl text-[#2E4F5E] mb-3">Application Received!</h2>
          <p className="text-[#4a6a78] text-sm font-semibold leading-relaxed mb-4">
            Thank you for applying to join Learnova's tutor network.
          </p>
          <div className="bg-[#FFFDF7] rounded-xl p-4 mb-6 text-left border-2 border-[#E8C86A]">
            <p className="text-xs font-black text-[#E05C42] uppercase tracking-[0.2em] mb-3">What happens next?</p>
            <div className="space-y-2.5">
              {[
                'Our team reviews your application (24-48 hours)',
                "You'll receive a WhatsApp verification message",
                'Once approved, your profile goes live to students',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-lg bg-[#3A9E8F] border border-[#2E4F5E] flex items-center justify-center text-white text-[0.6rem] font-black flex-shrink-0">✓</span>
                  <span className="text-[#2E4F5E] text-sm font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[#7da8b8] text-xs font-semibold mb-4">
            If approved, your tutor profile will be visible to students searching for your subjects.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-black text-[#E05C42] hover:text-[#c44d36] transition-colors">
            ← Back to homepage
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="text-[#2E4F5E] overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <div className="bg-[#FFFDF7] min-h-screen">

        {/* ========== HERO SECTION ========== */}
        <section className="relative pt-14 sm:pt-20 pb-10 sm:pb-14 px-4 sm:px-8 overflow-hidden">
          <div aria-hidden="true" className="absolute top-0 right-0 w-72 h-72 sm:w-[450px] sm:h-[450px] rounded-full opacity-25 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #3A9E8F, transparent 70%)', transform: 'translate(35%,-25%)' }} />

          <div className="relative max-w-4xl mx-auto text-center">
            <Eyebrow text="Join Our Network" />

            {/* Social proof pill */}
            <div className="inline-flex items-center gap-2 bg-[#E8C86A]/30 border-2 border-[#E8C86A] text-[#2E4F5E] text-[0.74rem] font-black px-4 py-1.5 rounded-full mb-6 shadow-[2px_2px_0_0_#d4b558]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E05C42] animate-pulse" />
              500+ Verified Tutors · 30+ Subjects · 15+ Countries
            </div>

            <h1 className="text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] font-black leading-[1.07] tracking-[-0.025em] text-[#2E4F5E] mb-5">
              Teach Students Who Are
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Already Looking For You</span>
                <Wiggle />
              </span>
            </h1>
            <p className="text-[#4a6a78] text-[1rem] sm:text-[1.06rem] leading-[1.75] mb-8 max-w-2xl mx-auto font-semibold">
              Join a trusted tutoring platform and connect directly with serious students through WhatsApp. 
              Share your expertise — we'll handle the rest.
            </p>

            {/* Progress indicator */}
            <div className="inline-flex items-center gap-2 bg-white border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] text-[#2E4F5E] text-[0.7rem] font-black px-4 py-2 rounded-full">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Only takes 2 minutes to apply
            </div>
          </div>
        </section>

        {/* ========== BENEFITS STRIP ========== */}
        <div className="bg-[#2E4F5E] py-5 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { emoji: '📚', text: 'Get students based on your subject', color: 'bg-[#3A9E8F]' },
              { emoji: '💬', text: 'Direct WhatsApp communication', color: 'bg-[#E05C42]' },
              { emoji: '🌍', text: 'Teach online or onsite', color: 'bg-[#E8C86A]' },
            ].map((benefit) => (
              <div key={benefit.text} className={`${benefit.color} rounded-xl p-3 text-center border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] transition-all duration-200 hover:-translate-y-0.5`}>
                <span className="text-xl block mb-0.5">{benefit.emoji}</span>
                <p className="text-[0.75rem] font-black text-white">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ========== TRUST STRIP ========== */}
        <div className="bg-[#FFFDF7] py-5 px-4 sm:px-8 border-b-2 border-[#E8C86A]">
          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { value: '500+', label: 'Verified Tutors' },
              { value: '8,000+', label: 'Students Helped' },
              { value: '15+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <div className="w-0.5 h-6 bg-[#E05C42] rounded-full" />
                <div>
                  <p className="font-black text-[#2E4F5E] text-base">{stat.value}</p>
                  <p className="text-[#7da8b8] text-[9px] font-black tracking-wide">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== FORM SECTION ========== */}
        <section className="py-12 sm:py-16 px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[8px_8px_0_0_#2E4F5E] p-5 sm:p-8 flex flex-col gap-5">

              {/* Name + WhatsApp */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.7rem] font-black text-[#2E4F5E] uppercase tracking-[0.15em] mb-1.5">Full Name <span className="text-[#E05C42]">*</span></label>
                  <input required className="w-full px-4 py-3 rounded-xl border-2 border-[#D4D0C5] focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/30 text-sm font-semibold text-[#2E4F5E] bg-white transition-all placeholder:text-[#a5b8c2] placeholder:font-medium" 
                    placeholder="e.g. Ahmad Hassan" value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
                </div>
                <div>
                  <label className="block text-[0.7rem] font-black text-[#2E4F5E] uppercase tracking-[0.15em] mb-1.5">WhatsApp Number <span className="text-[#E05C42]">*</span></label>
                  <input required className="w-full px-4 py-3 rounded-xl border-2 border-[#D4D0C5] focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/30 text-sm font-semibold text-[#2E4F5E] bg-white transition-all placeholder:text-[#a5b8c2] placeholder:font-medium" 
                    placeholder="+92 300 0000000" value={form.whatsapp}
                    onChange={(e) => setForm((f) => ({ ...f, whatsapp: e.target.value }))} />
                </div>
              </div>

              {/* Subjects */}
              <div>
                <label className="block text-[0.7rem] font-black text-[#2E4F5E] uppercase tracking-[0.15em] mb-2">Subjects You Teach <span className="text-[#E05C42]">*</span></label>
                <div className="flex flex-wrap gap-2">
                  {SUBJECTS.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => toggleSubject(s)}
                      className={`px-3 py-1.5 rounded-full text-[0.75rem] font-black border-2 transition-all duration-150 ${
                        form.subjects.includes(s)
                          ? 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]'
                          : 'bg-[#FFFDF7] text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/20'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience + Mode */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.7rem] font-black text-[#2E4F5E] uppercase tracking-[0.15em] mb-1.5">Years of Experience <span className="text-[#E05C42]">*</span></label>
                  <input required type="number" min={0} max={50} className="w-full px-4 py-3 rounded-xl border-2 border-[#D4D0C5] focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/30 text-sm font-semibold text-[#2E4F5E] bg-white transition-all"
                    placeholder="e.g. 5" value={form.experience || ''}
                    onChange={(e) => setForm((f) => ({ ...f, experience: parseInt(e.target.value) || 0 }))} />
                </div>
                <div>
                  <label className="block text-[0.7rem] font-black text-[#2E4F5E] uppercase tracking-[0.15em] mb-1.5">Teaching Mode <span className="text-[#E05C42]">*</span></label>
                  <select required className="w-full px-4 py-3 rounded-xl border-2 border-[#D4D0C5] focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/30 text-sm font-semibold text-[#2E4F5E] bg-white transition-all" 
                    value={form.mode}
                    onChange={(e) => setForm((f) => ({ ...f, mode: e.target.value as IApplication['mode'] }))}>
                    <option value="both">Both — Online & Home Visit</option>
                    <option value="online">Online Only</option>
                    <option value="onsite">Home Visit Only</option>
                  </select>
                </div>
              </div>

              {/* City + Country */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.7rem] font-black text-[#2E4F5E] uppercase tracking-[0.15em] mb-1.5">City <span className="text-[#E05C42]">*</span></label>
                  <input required className="w-full px-4 py-3 rounded-xl border-2 border-[#D4D0C5] focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/30 text-sm font-semibold text-[#2E4F5E] bg-white transition-all" 
                    placeholder="e.g. Islamabad" value={form.city}
                    onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))} />
                </div>
                <div>
                  <label className="block text-[0.7rem] font-black text-[#2E4F5E] uppercase tracking-[0.15em] mb-1.5">Country <span className="text-[#E05C42]">*</span></label>
                  <input required className="w-full px-4 py-3 rounded-xl border-2 border-[#D4D0C5] focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/30 text-sm font-semibold text-[#2E4F5E] bg-white transition-all" 
                    placeholder="e.g. Pakistan" value={form.country}
                    onChange={(e) => setForm((f) => ({ ...f, country: e.target.value }))} />
                </div>
              </div>

              {/* Education */}
              <div>
                <label className="block text-[0.7rem] font-black text-[#2E4F5E] uppercase tracking-[0.15em] mb-1.5">Education / Qualification <span className="text-[#E05C42]">*</span></label>
                <input required className="w-full px-4 py-3 rounded-xl border-2 border-[#D4D0C5] focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/30 text-sm font-semibold text-[#2E4F5E] bg-white transition-all" 
                  placeholder="e.g. BS Computer Science, NUST" value={form.education}
                  onChange={(e) => setForm((f) => ({ ...f, education: e.target.value }))} />
              </div>

              {/* Bio */}
              <div>
                <label className="block text-[0.7rem] font-black text-[#2E4F5E] uppercase tracking-[0.15em] mb-1.5">About Yourself <span className="text-[#E05C42]">*</span></label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border-2 border-[#D4D0C5] focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/30 text-sm font-semibold text-[#2E4F5E] bg-white transition-all resize-none"
                  placeholder="Example: &quot;I help O Level Mathematics students improve grades through concept-based learning and weekly practice sessions.&quot;"
                  value={form.bio}
                  onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))} />
                <p className="text-[0.65rem] font-semibold text-[#7da8b8] mt-1.5">Min 100 characters recommended — helps students choose you</p>
              </div>

              {/* Error message */}
              {status === 'error' && (
                <div className="flex items-center gap-2 bg-[#E05C42]/10 border-2 border-[#E05C42] text-[#E05C42] text-sm font-black px-4 py-3 rounded-xl">
                  <span>⚠️</span> Something went wrong. Please try again.
                </div>
              )}

              {/* Submit button */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 bg-[#E05C42] text-white font-black text-[0.9rem] rounded-xl border-2 border-[#a83c2a] shadow-[0_4px_0_0_#a83c2a] hover:shadow-[0_2px_0_0_#a83c2a] hover:translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-150"
                >
                  {status === 'loading' ? 'Submitting Application...' : 'Submit Application →'}
                </button>
                <p className="text-center text-[0.65rem] font-black text-[#7da8b8]">
                  🔒 We only approve tutors who meet our quality standards
                </p>
              </div>
            </form>

            {/* What happens after applying */}
            <div className="mt-10 bg-[#FFFDF7] rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] p-5 sm:p-6">
              <Eyebrow text="Simple Process" />
              <div className="grid sm:grid-cols-3 gap-5 mt-4">
                {[
                  { step: '01', title: 'Application Review', desc: 'Our team manually reviews your qualifications and experience.', icon: '📋', color: 'bg-[#E8C86A]' },
                  { step: '02', title: 'WhatsApp Verification', desc: 'We reach out to confirm your identity and teaching availability.', icon: '💬', color: 'bg-[#3A9E8F]' },
                  { step: '03', title: 'Profile Goes Live', desc: 'Once approved, students can find and contact you directly.', icon: '🚀', color: 'bg-[#E05C42]' },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className={`w-12 h-12 rounded-xl ${item.color} border-2 border-[#2E4F5E] flex items-center justify-center text-xl mx-auto mb-3 shadow-[2px_2px_0_0_#2E4F5E]`}>
                      {item.icon}
                    </div>
                    <p className="text-[0.6rem] font-black text-[#7da8b8] tracking-widest mb-1">{item.step}</p>
                    <p className="text-[0.85rem] font-black text-[#2E4F5E] mb-1">{item.title}</p>
                    <p className="text-[0.7rem] font-semibold text-[#4a6a78] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final trust note */}
            <p className="text-center text-[0.6rem] font-black text-[#7da8b8] mt-8">
              Simple application · Manual review · Fast approval
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}