



// import type { Metadata } from 'next'
// import Link from 'next/link'

// export const metadata: Metadata = {
//   title: 'Learnova — Our Tutoring Services | Online & Home Tutoring',
//   description:
//     'Online and home tutoring services across Pakistan, UAE, and UK. Covering O Levels, A Levels, IELTS, Mathematics, Science, and 30+ subjects.',
// }

// const SUBJECTS = [
//   { label: 'O & A Level', icon: '📖', color: 'bg-[#EEF0FF] text-[#6C5CE7]' },
//   { label: 'IELTS / TOEFL', icon: '🌍', color: 'bg-[#FFF4E6] text-[#D4820A]' },
//   { label: 'Mathematics', icon: '📐', color: 'bg-[#EEF0FF] text-[#6C5CE7]' },
//   { label: 'Physics', icon: '⚗️', color: 'bg-[#E6F9F2] text-[#0F7A5A]' },
//   { label: 'Chemistry', icon: '🧪', color: 'bg-[#E6F9F2] text-[#0F7A5A]' },
//   { label: 'Biology', icon: '🧬', color: 'bg-[#E6F9F2] text-[#0F7A5A]' },
//   { label: 'English', icon: '✍️', color: 'bg-[#FFF4E6] text-[#D4820A]' },
//   { label: 'Computer Science', icon: '💻', color: 'bg-[#EEF0FF] text-[#6C5CE7]' },
//   { label: 'Economics', icon: '📊', color: 'bg-[#EEF0FF] text-[#6C5CE7]' },
//   { label: 'Accounting', icon: '🧾', color: 'bg-[#FFF4E6] text-[#D4820A]' },
//   { label: 'Quran & Arabic', icon: '📿', color: 'bg-[#E6F9F2] text-[#0F7A5A]' },
//   { label: 'History & Geography', icon: '🗺️', color: 'bg-[#FFF4E6] text-[#D4820A]' },
// ]

// // ── Shared section-label component (consistent with home page) ──
// function SectionLabel({ text, center = false }: { text: string; center?: boolean }) {
//   return (
//     <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
//       <span className="block w-8 h-0.5 rounded-full bg-[#6C5CE7]" />
//       <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#6C5CE7]">{text}</span>
//     </div>
//   )
// }

// export default function ServicesPage() {
//   return (
//     <div className="bg-[#FAFAF8] text-[#1A1730]">

//       {/* ========== HERO SECTION ========== */}
//       <section className="relative overflow-hidden pt-20 sm:pt-28 pb-16 sm:pb-20 px-5 sm:px-8">
//         {/* Background blobs matching home page */}
//         <div
//           aria-hidden="true"
//           className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full pointer-events-none"
//           style={{ background: 'radial-gradient(circle, #EEF0FF 0%, #F6F4FF 40%, transparent 70%)', opacity: 0.6, transform: 'translate(20%, -15%)' }}
//         />
        
//         <div className="relative max-w-4xl mx-auto text-center">
//           <SectionLabel text="What We Do" center />
//           <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.1] tracking-[-0.025em] text-[#1A1730] mb-5">
//             Our Tutoring
//             <br />
//             <span className="text-[#6C5CE7] italic font-semibold">Services</span>
//           </h1>
//           <p className="text-[#5A5870] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
//             Personalized tutoring built around your goals — online or in person. 
//             From exam prep to concept mastery, we've got you covered.
//           </p>
//         </div>
//       </section>

//       {/* ========== TRUST STRIP ========== */}
//       <div className="bg-white border-y border-[#E8E4F0] py-4 px-5 sm:px-8 overflow-hidden">
//         <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
//           {[
//             '✓ 500+ Verified Tutors',
//             '✓ 30+ Subjects',
//             '✓ 15 Countries',
//             '✓ 24hr Response',
//             '✓ Free Consultation',
//           ].map((t) => (
//             <span key={t} className="text-[0.8rem] font-medium text-[#7A7890]">{t}</span>
//           ))}
//         </div>
//       </div>

//       {/* ========== MAIN SERVICES (Online + Home) ========== */}
//       <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
//         <div className="text-center mb-14">
//           <SectionLabel text="How We Help" center />
//           <h2 className="text-[2rem] sm:text-[2.8rem] font-bold tracking-[-0.02em] text-[#1A1730] mb-4">
//             Flexible Learning That Fits Your Life
//           </h2>
//           <p className="text-[#5A5870] text-base max-w-2xl mx-auto">
//             Choose the mode that works best for you — both options include verified tutors 
//             and personalized lesson plans.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Online Tutoring Card */}
//           <div className="group bg-white rounded-2xl border border-[#E8E4F0] p-8 hover:border-[#C8BEFF] hover:shadow-xl hover:shadow-[#6C5CE7]/8 transition-all duration-300">
//             <div className="w-16 h-16 rounded-2xl bg-[#EEF0FF] flex items-center justify-center mb-6 group-hover:bg-[#6C5CE7] transition-colors duration-300">
//               <span className="text-3xl group-hover:scale-110 transition-transform duration-300">💻</span>
//             </div>
//             <h2 className="text-2xl font-bold text-[#1A1730] mb-2">Online Tutoring</h2>
//             <p className="text-sm font-medium text-[#6C5CE7] mb-4">Learn from anywhere in the world</p>
//             <p className="text-[#5A5870] text-sm leading-relaxed mb-6">
//               Live, one-on-one sessions structured around your specific curriculum. 
//               Whether you're in Pakistan, UAE, UK or Canada — distance is not a barrier to quality education.
//             </p>
//             <ul className="flex flex-col gap-3 mb-8">
//               {[
//                 'Live video sessions (Zoom, Google Meet, etc.)',
//                 'Interactive whiteboard & screen sharing',
//                 'Session recordings available on request',
//                 'Flexible scheduling — morning, evening, weekends',
//                 'Progress tracking & study materials provided',
//               ].map((feature) => (
//                 <li key={feature} className="flex items-start gap-2.5 text-sm text-[#1A1730]">
//                   <svg className="w-4 h-4 text-[#6C5CE7] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                   </svg>
//                   <span className="text-[#5A5870]">{feature}</span>
//                 </li>
//               ))}
//             </ul>
//             <Link
//               href="/tutors?mode=online"
//               className="inline-flex items-center gap-2 text-sm font-semibold text-[#6C5CE7] hover:text-[#5A4BD1] group"
//             >
//               Find Online Tutors
//               <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </Link>
//           </div>

//           {/* Home Tutoring Card */}
//           <div className="group bg-white rounded-2xl border border-[#E8E4F0] p-8 hover:border-[#C8BEFF] hover:shadow-xl hover:shadow-[#6C5CE7]/8 transition-all duration-300">
//             <div className="w-16 h-16 rounded-2xl bg-[#E6F9F2] flex items-center justify-center mb-6 group-hover:bg-[#0F7A5A] transition-colors duration-300">
//               <span className="text-3xl group-hover:scale-110 transition-transform duration-300">🏠</span>
//             </div>
//             <h2 className="text-2xl font-bold text-[#1A1730] mb-2">Home Tutoring</h2>
//             <p className="text-sm font-medium text-[#0F7A5A] mb-4">A qualified tutor comes to you</p>
//             <p className="text-[#5A5870] text-sm leading-relaxed mb-6">
//               Prefer face-to-face learning? Our home tutors visit your residence and deliver 
//               hands-on, personalized sessions in a familiar, distraction-free environment.
//             </p>
//             <ul className="flex flex-col gap-3 mb-8">
//               {[
//                 'Available in Islamabad, Rawalpindi, Lahore, Karachi',
//                 'Tutor selected based on your area & subject',
//                 'Consistent weekly schedule',
//                 'Parents can sit in on sessions',
//                 'Textbook-aligned teaching',
//               ].map((feature) => (
//                 <li key={feature} className="flex items-start gap-2.5 text-sm text-[#1A1730]">
//                   <svg className="w-4 h-4 text-[#0F7A5A] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                   </svg>
//                   <span className="text-[#5A5870]">{feature}</span>
//                 </li>
//               ))}
//             </ul>
//             <Link
//               href="/tutors?mode=home"
//               className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F7A5A] hover:text-[#0A5E46] group"
//             >
//               Find Home Tutors
//               <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ========== SUBJECTS WE COVER ========== */}
//       <section className="bg-white py-20 sm:py-28 px-5 sm:px-8 border-y border-[#E8E4F0]">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-14">
//             <SectionLabel text="Academic Coverage" center />
//             <h2 className="text-[2rem] sm:text-[2.8rem] font-bold tracking-[-0.02em] text-[#1A1730] mb-4">
//               Subjects We Cover
//             </h2>
//             <p className="text-[#5A5870] text-base max-w-2xl mx-auto">
//               From school fundamentals to professional certifications — we have expert tutors for every subject.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//             {SUBJECTS.map(({ label, icon, color }) => (
//               <Link
//                 key={label}
//                 href={`/tutors?subject=${encodeURIComponent(label)}`}
//                 className="group flex items-center gap-3 p-4 bg-[#FAFAF8] rounded-xl border border-[#E8E4F0] hover:border-[#C8BEFF] hover:bg-white hover:shadow-sm transition-all duration-200"
//               >
//                 <span className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-200`}>
//                   {icon}
//                 </span>
//                 <span className="text-sm font-medium text-[#1A1730] group-hover:text-[#6C5CE7] transition-colors">
//                   {label}
//                 </span>
//               </Link>
//             ))}
//           </div>

//           <div className="text-center mt-10">
//             <Link
//               href="/tutors"
//               className="inline-flex items-center gap-2 text-sm font-semibold text-[#6C5CE7] hover:text-[#5A4BD1] border border-[#DDD8F8] hover:border-[#6C5CE7] px-5 py-2.5 rounded-full transition-all duration-200"
//             >
//               Browse All Tutors by Subject
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ========== WHY OUR SERVICES WORK ========== */}
//       <section className="bg-[#FAFAF8] py-20 sm:py-28 px-5 sm:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-14">
//             <SectionLabel text="Our Promise" center />
//             <h2 className="text-[2rem] sm:text-[2.8rem] font-bold tracking-[-0.02em] text-[#1A1730] mb-4">
//               Why Our Services Stand Out
//             </h2>
//             <p className="text-[#5A5870] text-base max-w-2xl mx-auto">
//               We don't just connect you with tutors — we ensure every session moves you closer to your goals.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 icon: (
//                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                 ),
//                 title: 'Verified Quality',
//                 desc: 'Every tutor goes through manual screening, background check, and a teaching demo.',
//               },
//               {
//                 icon: (
//                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 ),
//                 title: 'Flexible Scheduling',
//                 desc: 'Morning, evening, or weekend sessions — we work around your calendar, not ours.',
//               },
//               {
//                 icon: (
//                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                   </svg>
//                 ),
//                 title: 'Personalized Plans',
//                 desc: 'Sessions tailored to your learning style, pace, and academic goals.',
//               },
//               {
//                 icon: (
//                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                   </svg>
//                 ),
//                 title: 'Direct Contact',
//                 desc: 'No middlemen — chat with tutors on WhatsApp and start learning immediately.',
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="group p-6 rounded-2xl border border-[#E8E4F0] bg-white hover:border-[#C8BEFF] hover:shadow-md hover:shadow-[#6C5CE7]/6 transition-all duration-300"
//               >
//                 <div className="w-12 h-12 rounded-xl bg-[#EEF0FF] flex items-center justify-center text-[#6C5CE7] mb-5 group-hover:bg-[#6C5CE7] group-hover:text-white transition-all duration-300">
//                   {item.icon}
//                 </div>
//                 <h3 className="font-semibold text-lg text-[#1A1730] mb-2">{item.title}</h3>
//                 <p className="text-[#5A5870] text-sm leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ========== HOW IT WORKS (Services-specific) ========== */}
//       <section className="bg-white py-20 sm:py-28 px-5 sm:px-8 border-t border-[#E8E4F0]">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-14">
//             <SectionLabel text="Simple Process" center />
//             <h2 className="text-[2rem] sm:text-[2.5rem] font-bold tracking-[-0.02em] text-[#1A1730] mb-4">
//               How Our Service Works
//             </h2>
//             <p className="text-[#5A5870] text-base max-w-md mx-auto">
//               From first visit to first lesson — we keep it simple and fast.
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-3 gap-8 relative">
//             <div className="hidden sm:block absolute top-[52px] left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-gradient-to-r from-[#DDD8F8] via-[#6C5CE7] to-[#DDD8F8]" />
            
//             {[
//               { n: '01', title: 'Tell Us Your Needs', desc: 'Share your subject, grade level, and preferred teaching mode (online or home).', bg: 'bg-[#EEF0FF]', text: 'text-[#6C5CE7]' },
//               { n: '02', title: 'Get Matched', desc: 'We recommend 2-3 verified tutors who fit your criteria and learning style.', bg: 'bg-[#E6F9F2]', text: 'text-[#0F7A5A]' },
//               { n: '03', title: 'Start Learning', desc: 'Connect directly on WhatsApp, schedule your first session, and begin your journey.', bg: 'bg-[#FFF4E6]', text: 'text-[#D4820A]' },
//             ].map((step) => (
//               <div key={step.n} className="flex flex-col items-center text-center p-7 bg-[#FAFAF8] rounded-2xl border border-[#E8E4F0] hover:shadow-md transition-all duration-300">
//                 <div className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center mb-5`}>
//                   <span className={`font-bold ${step.text} text-xl`}>{step.n}</span>
//                 </div>
//                 <h3 className="font-semibold text-lg text-[#1A1730] mb-3">{step.title}</h3>
//                 <p className="text-[#5A5870] text-sm leading-relaxed">{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ========== TESTIMONIALS (Services context) ========== */}
//       <section className="bg-[#FAFAF8] py-20 sm:py-28 px-5 sm:px-8 border-t border-[#E8E4F0]">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-14">
//             <SectionLabel text="Success Stories" center />
//             <h2 className="text-[2rem] sm:text-[2.8rem] font-bold tracking-[-0.02em] text-[#1A1730] mb-4">
//               What Our Students Say About Our Services
//             </h2>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               {
//                 quote: "The online tutoring service was seamless — my tutor used the whiteboard effectively and recorded sessions for revision. Went from C to A in 4 months.",
//                 name: 'Omar F.',
//                 role: 'A Level Student, Karachi',
//                 initials: 'OF',
//                 accent: 'bg-[#EEF0FF] text-[#6C5CE7]',
//               },
//               {
//                 quote: "Home tutoring made all the difference for my daughter. The tutor comes twice a week, follows her school curriculum, and she's finally confident in Maths.",
//                 name: 'Hina T.',
//                 role: 'Parent, Islamabad',
//                 initials: 'HT',
//                 accent: 'bg-[#E6F9F2] text-[#0F7A5A]',
//               },
//               {
//                 quote: "I needed an IELTS tutor urgently. Within 6 hours, I was connected with an expert. Got my desired band 7.5 in 6 weeks!",
//                 name: 'Bilal A.',
//                 role: 'Student, Lahore',
//                 initials: 'BA',
//                 accent: 'bg-[#FFF4E6] text-[#D4820A]',
//               },
//             ].map((t) => (
//               <div key={t.name} className="bg-white rounded-2xl border border-[#E8E4F0] p-6 flex flex-col hover:shadow-md transition-all duration-300">
//                 <div className="flex gap-0.5 mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-4 h-4 text-[#F0A500]" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="text-[#5A5870] text-sm leading-relaxed flex-1 mb-6 italic">"{t.quote}"</p>
//                 <div className="flex items-center gap-3 pt-4 border-t border-[#E8E4F0]">
//                   <div className={`w-9 h-9 rounded-full ${t.accent} flex items-center justify-center text-xs font-bold`}>
//                     {t.initials}
//                   </div>
//                   <div>
//                     <p className="text-sm font-semibold text-[#1A1730]">{t.name}</p>
//                     <p className="text-xs text-[#A89EC6] mt-0.5">{t.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ========== FINAL CTA ========== */}
//       <section className="bg-[#0F0D1F] py-24 sm:py-32 px-5 sm:px-8 relative overflow-hidden">
//         <div
//           aria-hidden="true"
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#6C5CE7] opacity-[0.18] blur-[110px] rounded-full pointer-events-none"
//         />
//         <div className="relative max-w-3xl mx-auto text-center">
//           <div className="flex items-center justify-center gap-3 mb-5">
//             <span className="block w-8 h-0.5 rounded-full bg-[#6C5CE7]" />
//             <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#6C5CE7]">Get Started</span>
//             <span className="block w-8 h-0.5 rounded-full bg-[#6C5CE7]" />
//           </div>

//           <h2 className="text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-[-0.025em] mb-5">
//             Ready to Transform
//             <br />
//             <span className="text-[#B8AEFF] italic font-semibold">Your Learning?</span>
//           </h2>
//           <p className="text-white/45 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
//             Choose your subject, pick your mode (online or home), and connect with your ideal tutor today.
//           </p>
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <Link
//               href="/tutors"
//               className="inline-flex items-center gap-2 px-8 py-3.5 bg-white hover:bg-[#F4F2FF] text-[#6C5CE7] font-bold text-base rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
//             >
//               Find a Tutor
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </Link>
//             <Link
//               href="/become-tutor"
//               className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/18 hover:border-white/35 text-white font-semibold text-base rounded-xl transition-all duration-200 hover:bg-white/5"
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

export const metadata: Metadata = {
  title: 'Learnova — Our Tutoring Services | Online & Home Tutoring',
  description: 'Online and home tutoring services across Pakistan, UAE, and UK. Covering O Levels, A Levels, IELTS, Mathematics, Science, and 30+ subjects.',
}

const SUBJECTS = [
  { label: 'O & A Level',        icon: '📖', bg: 'bg-[#2E4F5E]',  t: 'text-[#E8C86A]' },
  { label: 'IELTS / TOEFL',      icon: '🌍', bg: 'bg-[#E8934A]',  t: 'text-white'     },
  { label: 'Mathematics',        icon: '📐', bg: 'bg-[#E8C86A]',  t: 'text-[#2E4F5E]' },
  { label: 'Physics',            icon: '⚗️', bg: 'bg-[#3A9E8F]',  t: 'text-white'     },
  { label: 'Chemistry',          icon: '🧪', bg: 'bg-[#E05C42]',  t: 'text-white'     },
  { label: 'Biology',            icon: '🧬', bg: 'bg-[#3A9E8F]',  t: 'text-white'     },
  { label: 'English',            icon: '✍️', bg: 'bg-[#E8C86A]',  t: 'text-[#2E4F5E]' },
  { label: 'Computer Science',   icon: '💻', bg: 'bg-[#2E4F5E]',  t: 'text-[#E8C86A]' },
  { label: 'Economics',          icon: '📊', bg: 'bg-[#E8934A]',  t: 'text-white'     },
  { label: 'Accounting',         icon: '🧾', bg: 'bg-[#E05C42]',  t: 'text-white'     },
  { label: 'Quran & Arabic',     icon: '📿', bg: 'bg-[#3A9E8F]',  t: 'text-white'     },
  { label: 'History & Geography',icon: '🗺️', bg: 'bg-[#E8C86A]',  t: 'text-[#2E4F5E]' },
]

function Eyebrow({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-2 mb-4">
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

export default function ServicesPage() {
  return (
    <div className="text-[#2E4F5E] overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>

      {/* ══════════════════════════════════════════════════════
          § 1  HERO — bg: cream
          Psychological: headline makes the benefit crystal clear.
          "Flexible learning" = no commitment fear.
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#FFFDF7] relative pt-14 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-8 overflow-hidden">
        <div aria-hidden="true" className="absolute top-0 right-0 w-72 h-72 sm:w-[450px] sm:h-[450px] rounded-full opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #3A9E8F, transparent 70%)', transform: 'translate(35%,-25%)' }} />

        <div className="relative max-w-4xl mx-auto text-center">
          <Eyebrow text="What We Do" />

          {/* Social proof pill */}
          <div className="inline-flex items-center gap-2 bg-[#E8C86A]/30 border-2 border-[#E8C86A] text-[#2E4F5E] text-[0.74rem] font-black px-4 py-1.5 rounded-full mb-6 shadow-[2px_2px_0_0_#d4b558]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E05C42] animate-pulse" />
            500+ Verified Tutors · 30+ Subjects · 15+ Countries
          </div>

          <h1 className="text-[2.5rem] sm:text-[3.4rem] lg:text-[3.8rem] font-black leading-[1.07] tracking-[-0.025em] text-[#2E4F5E] mb-6">
            Tutoring That Fits
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Your Life & Goals</span>
              <Wiggle />
            </span>
          </h1>
          <p className="text-[#4a6a78] text-[1rem] sm:text-[1.06rem] leading-[1.75] mb-10 max-w-2xl mx-auto font-semibold">
            Personalised tutoring built around your curriculum, schedule, and learning style — online or in person. From exam prep to concept mastery, every student deserves the right support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/tutors"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E05C42] text-white font-black rounded-xl border-2 border-[#a83c2a] shadow-[0_4px_0_0_#a83c2a] hover:shadow-[0_2px_0_0_#a83c2a] hover:translate-y-[2px] transition-all duration-150 text-[0.92rem]">
              Find My Tutor →
            </Link>
            <Link href="/become-tutor"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#2E4F5E] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[0_3px_0_0_#2E4F5E] hover:shadow-[0_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150 text-[0.92rem]">
              Teach on Learnova
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          § 2  TRUST STRIP — bg: dark teal
      ══════════════════════════════════════════════════════ */}
      <div className="bg-[#2E4F5E] py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {['500+ Verified Tutors', '30+ Subjects', '15 Countries', '24hr Response', 'Free Consultation'].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-[0.8rem] font-bold text-[#E8C86A] whitespace-nowrap">
              <span className="w-4 h-4 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.58rem] font-black flex-shrink-0">✓</span>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          § 3  ONLINE vs HOME — bg: cream
          Psychological: present choice = control → reduces resistance.
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#FFFDF7] py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Eyebrow text="How We Help" />
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-[#2E4F5E] mb-4">
              Two Ways to Learn — Both Excellent 🎓
            </h2>
            <p className="text-[#4a6a78] text-[0.93rem] max-w-lg mx-auto font-semibold leading-relaxed">
              Choose the mode that works for you. Both include verified tutors and personalised lesson plans.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Online */}
            <div className="group bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-7 hover:-translate-y-1 hover:shadow-[5px_7px_0_0_#2E4F5E] transition-all duration-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#3A9E8F] border-2 border-[#2E4F5E] flex items-center justify-center text-2xl shadow-[2px_2px_0_0_#2E4F5E] group-hover:rotate-[-6deg] transition-transform duration-200">💻</div>
                <div>
                  <h2 className="text-[1.1rem] font-black text-[#2E4F5E]">Online Tutoring</h2>
                  <p className="text-[0.74rem] font-bold text-[#3A9E8F]">Learn from anywhere in the world</p>
                </div>
              </div>
              <p className="text-[#4a6a78] text-[0.86rem] font-semibold leading-relaxed mb-6">
                Live one-on-one sessions built around your curriculum. Whether you're in Pakistan, UAE, UK or Canada — distance is no barrier to quality education.
              </p>
              <ul className="flex flex-col gap-2.5 mb-7">
                {['Live video sessions (Zoom, Google Meet, etc.)', 'Interactive whiteboard & screen sharing', 'Session recordings available on request', 'Flexible scheduling — morning, evening, weekends', 'Progress tracking & study materials provided'].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-lg bg-[#3A9E8F] border border-[#2E4F5E] flex items-center justify-center text-white text-[0.6rem] font-black flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-[#4a6a78] text-[0.83rem] font-semibold">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/tutors?mode=online"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3A9E8F] text-white text-[0.84rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[2px] transition-all duration-150">
                Find Online Tutors →
              </Link>
            </div>

            {/* Home */}
            <div className="group bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-7 hover:-translate-y-1 hover:shadow-[5px_7px_0_0_#2E4F5E] transition-all duration-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#E8C86A] border-2 border-[#2E4F5E] flex items-center justify-center text-2xl shadow-[2px_2px_0_0_#2E4F5E] group-hover:rotate-[-6deg] transition-transform duration-200">🏠</div>
                <div>
                  <h2 className="text-[1.1rem] font-black text-[#2E4F5E]">Home Tutoring</h2>
                  <p className="text-[0.74rem] font-bold text-[#E8934A]">A qualified tutor comes to you</p>
                </div>
              </div>
              <p className="text-[#4a6a78] text-[0.86rem] font-semibold leading-relaxed mb-6">
                Prefer face-to-face learning? Our home tutors visit your residence and deliver hands-on, personalised sessions in a familiar, distraction-free environment.
              </p>
              <ul className="flex flex-col gap-2.5 mb-7">
                {['Available in Islamabad, Rawalpindi, Lahore, Karachi', 'Tutor selected based on your area & subject', 'Consistent weekly schedule', 'Parents can sit in on sessions', 'Textbook-aligned teaching'].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-lg bg-[#E8C86A] border border-[#2E4F5E] flex items-center justify-center text-[#2E4F5E] text-[0.6rem] font-black flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-[#4a6a78] text-[0.83rem] font-semibold">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/tutors?mode=home"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E8C86A] text-[#2E4F5E] text-[0.84rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[2px] transition-all duration-150">
                Find Home Tutors →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          § 4  SUBJECTS — bg: dark teal
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#2E4F5E] py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <Eyebrow text="Academic Coverage" light />
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-white mb-4">
              Expert Tutors for Every Subject 📚
            </h2>
            <p className="text-[#7da8b8] text-[0.93rem] max-w-md mx-auto font-semibold">
              From school fundamentals to professional certifications — we have the right tutor for every need.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {SUBJECTS.map(({ label, icon, bg, t }) => (
              <Link key={label} href={`/tutors?subject=${encodeURIComponent(label)}`}
                className="group flex items-center gap-3 p-3.5 bg-white/8 rounded-xl border-2 border-white/10 hover:border-[#E8C86A] hover:bg-white/15 hover:shadow-[3px_3px_0_0_#E8C86A] hover:-translate-y-0.5 transition-all duration-150">
                <span className={`w-9 h-9 rounded-lg ${bg} ${t} border-2 border-white/30 flex items-center justify-center text-[0.78rem] font-mono font-black flex-shrink-0 group-hover:rotate-[-8deg] transition-transform duration-150`}>{icon}</span>
                <span className="text-[0.8rem] font-black text-white group-hover:text-[#E8C86A] transition-colors leading-tight">{label}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/tutors"
              className="inline-flex items-center gap-2 text-[0.88rem] font-black text-[#2E4F5E] bg-[#E8C86A] border-2 border-[#2E4F5E] px-6 py-3 rounded-xl shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150">
              Browse All Tutors by Subject →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          § 5  OUR PROMISE — bg: yellow
          Psychological: "promise" language = accountability = trust.
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#E8C86A] py-16 sm:py-24 px-4 sm:px-8 border-y-2 border-[#2E4F5E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Eyebrow text="Our Promise" />
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-[#2E4F5E] mb-4">
              What Makes Learnova Different ✨
            </h2>
            <p className="text-[#4a6a78] text-[0.93rem] max-w-md mx-auto font-semibold leading-relaxed">
              We don't just connect you with tutors — every session moves you closer to your goals.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: '🛡️', title: 'Verified Quality',      desc: 'Every tutor passes manual screening, qualification check, and a teaching demo before approval.' },
              { icon: '⏰', title: 'Flexible Scheduling',   desc: 'Morning, evening, or weekend sessions — we work around your calendar, not the other way around.' },
              { icon: '📋', title: 'Personalised Plans',    desc: 'Sessions tailored to your learning style, pace, and academic goals — never cookie-cutter.' },
              { icon: '💬', title: 'Direct Contact',        desc: 'No middlemen. Chat with tutors on WhatsApp and start learning immediately — same day.' },
            ].map((c) => (
              <div key={c.title} className="group bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] p-6 hover:-translate-y-0.5 hover:shadow-[4px_5px_0_0_#2E4F5E] transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-[#FFFDF7] border-2 border-[#2E4F5E] flex items-center justify-center text-2xl mb-5 shadow-[2px_2px_0_0_#2E4F5E] group-hover:rotate-[-6deg] transition-transform duration-200">{c.icon}</div>
                <h3 className="font-black text-[0.98rem] text-[#2E4F5E] mb-2">{c.title}</h3>
                <p className="text-[#4a6a78] text-[0.82rem] font-semibold leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          § 6  HOW IT WORKS (Services-specific) — bg: cream
          Psychological: "Tell us → Get matched → Start" removes
          the fear of a complicated process.
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#FFFDF7] py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Eyebrow text="Simple Process" />
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-[#2E4F5E] mb-4">
              From First Visit to First Lesson ⚡
            </h2>
            <p className="text-[#4a6a78] text-[0.93rem] max-w-sm mx-auto font-semibold">
              Simple, fast, and frustration-free. We keep it that way on purpose.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 relative">
            <div aria-hidden="true" className="hidden sm:block absolute top-[52px] left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] border-t-2 border-dashed border-[#2E4F5E] opacity-30" />
            {[
              { n: '01', emoji: '🗣️', title: 'Tell Us Your Needs',  desc: 'Share your subject, grade level, city, and preferred mode — online or home.',        bg: 'bg-[#E8C86A]' },
              { n: '02', emoji: '🎯', title: 'Get Matched',          desc: 'We recommend 2-3 verified tutors who fit your criteria and learning style perfectly.', bg: 'bg-[#3A9E8F]' },
              { n: '03', emoji: '🚀', title: 'Start Learning',       desc: 'Connect on WhatsApp, schedule your first session, and begin your journey today.',     bg: 'bg-[#E05C42]' },
            ].map((s) => (
              <div key={s.n} className="flex flex-col items-center text-center p-7 bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] hover:-translate-y-1 hover:shadow-[4px_6px_0_0_#2E4F5E] transition-all duration-200">
                <div className={`w-14 h-14 rounded-2xl ${s.bg} border-2 border-[#2E4F5E] flex items-center justify-center mb-4 shadow-[2px_2px_0_0_rgba(0,0,0,0.15)] relative z-10`}>
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
          § 7  TESTIMONIALS — bg: teal
          Psychological: specific outcomes ("band 7.5 in 6 weeks")
          are more credible than vague praise.
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#3A9E8F] py-16 sm:py-24 px-4 sm:px-8 border-y-2 border-[#2E4F5E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Eyebrow text="Success Stories" light />
            <h2 className="text-[1.9rem] sm:text-[2.4rem] font-black tracking-[-0.02em] text-white">
              Students Who Transformed Their Results 🏆
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { quote: "The online tutoring was seamless — whiteboard, session recordings, the works. Went from a C to an A in 4 months.", name: 'Omar F.', role: 'A Level Student · Karachi', init: 'OF', bg: 'bg-[#E8C86A]', t: 'text-[#2E4F5E]' },
              { quote: "Home tutoring made all the difference for my daughter. The tutor follows her curriculum and she is finally confident in Maths.", name: 'Hina T.', role: 'Parent · Islamabad', init: 'HT', bg: 'bg-[#2E4F5E]', t: 'text-[#E8C86A]' },
              { quote: "I needed an IELTS tutor urgently. Within 6 hours I was connected. Got my band 7.5 in just 6 weeks!", name: 'Bilal A.', role: 'Student · Lahore', init: 'BA', bg: 'bg-[#E05C42]', t: 'text-white' },
            ].map((r) => (
              <div key={r.name} className="bg-white rounded-2xl border-2 border-[#2E4F5E] p-6 flex flex-col shadow-[4px_4px_0_0_#2E4F5E] hover:-translate-y-1 hover:shadow-[4px_6px_0_0_#2E4F5E] transition-all duration-200">
                <div className="flex gap-0.5 mb-4">
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
          § 8  FINAL CTA — bg: dark teal
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#2E4F5E] py-20 sm:py-28 px-4 sm:px-8 relative overflow-hidden">
        {[{ pos: 'top-6 right-6', color: 'bg-[#E8C86A]' }, { pos: 'bottom-6 left-6', color: 'bg-[#3A9E8F]' }].map((d, i) => (
          <div key={i} aria-hidden="true" className={`absolute ${d.pos} grid grid-cols-5 gap-2 opacity-20`}>
            {Array.from({ length: 25 }).map((_, j) => <div key={j} className={`w-1.5 h-1.5 rounded-full ${d.color}`}/>)}
          </div>
        ))}
        <div className="relative max-w-2xl mx-auto text-center">
          <Eyebrow text="Get Started" light />
          <h2 className="text-[2.2rem] sm:text-[2.8rem] font-black text-white leading-[1.1] tracking-[-0.025em] mb-5">
            Ready to Transform<br/>
            <span className="relative inline-block text-[#E8C86A]">
              <span className="relative z-10">Your Learning?</span>
              <Wiggle color="#E05C42" />
            </span>
          </h2>
          <p className="text-white/55 text-[0.97rem] mb-10 max-w-lg mx-auto font-semibold leading-relaxed">
            Choose your subject, pick your mode, and connect with your ideal tutor — starting today.
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