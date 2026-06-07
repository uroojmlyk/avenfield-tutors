
// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { useState, useEffect } from 'react'
// import { usePathname } from 'next/navigation'

// const navLinks = [
//   { href: '/',             label: 'Home' },
//   { href: '/services',     label: 'Services' },
//   { href: '/tutors',       label: 'Find a Tutor' },
//   { href: '/become-tutor', label: 'Become a Tutor' },
// ]

// export default function Navbar() {
//   const [open, setOpen]           = useState(false)
//   const [scrolled, setScrolled]   = useState(false)
//   const [adminOpen, setAdminOpen] = useState(false)
//   const pathname                  = usePathname()

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 10)
//     window.addEventListener('scroll', fn, { passive: true })
//     return () => window.removeEventListener('scroll', fn)
//   }, [])

//   useEffect(() => { setOpen(false); setAdminOpen(false) }, [pathname])

//   useEffect(() => {
//     if (!adminOpen) return
//     const fn = (e: MouseEvent) => {
//       const t = e.target as HTMLElement
//       if (!t.closest('#admin-popup') && !t.closest('#admin-btn')) setAdminOpen(false)
//     }
//     document.addEventListener('mousedown', fn)
//     return () => document.removeEventListener('mousedown', fn)
//   }, [adminOpen])

//   const isAdmin = pathname.startsWith('/admin')
//   if (isAdmin) return null

//   return (
//     <header
//       role="banner"
//       className={`sticky top-0 z-50 transition-all duration-300 border-b-2 border-[#2E4F5E] ${
//         scrolled
//           ? 'bg-[#FFFDF7]/97 backdrop-blur-md shadow-[0_4px_0_0_#2E4F5E]'
//           : 'bg-[#FFFDF7]/95 backdrop-blur-sm'
//       }`}
//       style={{ fontFamily: "'Nunito', 'Fredoka One', sans-serif" }}
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-8 h-[72px] flex items-center justify-between gap-4">

//         {/* Logo — full image, no box, prominent */}
//         <Link
//           href="/"
//           className="flex-shrink-0 group"
//           aria-label="Avenfield Tutors – Academy for Virtual Education and Nurturing, go to homepage"
//           title="Avenfield Tutors – Expert Online & Home Tutoring"
//         >
//           <div className="relative w-[180px] h-[48px] sm:w-[210px] sm:h-[56px] group-hover:opacity-90 transition-opacity duration-200">
//             <Image
//               src="/avenfield-logo.jpeg"
//               alt="Avenfield Tutors"
//               fill
//               sizes="(max-width: 640px) 180px, 210px"
//               className="object-contain object-left"
//               priority
//             />
//           </div>
//         </Link>

//         {/* Desktop nav */}
//         <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
//           {navLinks.map((l) => (
//             <Link
//               key={l.href}
//               href={l.href}
//               aria-current={pathname === l.href ? 'page' : undefined}
//               className={`px-4 py-2 text-[0.88rem] font-bold rounded-xl transition-all duration-150 ${
//                 pathname === l.href
//                   ? 'text-[#FFFDF7] bg-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
//                   : 'text-[#2E4F5E] hover:text-[#FFFDF7] hover:bg-[#3A9E8F] hover:shadow-[0_2px_0_0_#2a7a6e]'
//               }`}
//               style={{ fontFamily: "'Nunito', sans-serif" }}
//             >
//               {l.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Desktop right */}
//         <div className="hidden md:flex items-center gap-3">
//           <Link
//             href="/become-tutor"
//             className="px-5 py-2.5 bg-[#E05C42] hover:bg-[#c94e37] text-white text-[0.88rem] font-black rounded-xl transition-all duration-200 shadow-[0_3px_0_0_#a83c2a] hover:shadow-[0_1px_0_0_#a83c2a] hover:translate-y-[2px] border-0"
//             style={{ fontFamily: "'Nunito', sans-serif" }}
//             aria-label="Apply to become a tutor at Avenfield Tutors"
//           >
//             Join as Tutor ✨
//           </Link>

//           {/* Admin - subtle icon button */}
//           <div className="relative">
//             <button
//               id="admin-btn"
//               onClick={() => setAdminOpen(!adminOpen)}
//               aria-label="Open admin portal"
//               aria-expanded={adminOpen}
//               aria-haspopup="menu"
//               title="Admin Portal"
//               className={`flex items-center justify-center w-9 h-9 rounded-xl border-2 transition-all duration-150 ${
//                 adminOpen
//                   ? 'bg-[#2E4F5E]/10 border-[#2E4F5E] text-[#2E4F5E]'
//                   : 'bg-transparent border-[#2E4F5E]/30 text-[#2E4F5E]/50 hover:border-[#2E4F5E] hover:text-[#2E4F5E] hover:bg-[#2E4F5E]/5'
//               }`}
//             >
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//               </svg>
//             </button>

//             {adminOpen && (
//               <div
//                 id="admin-popup"
//                 role="menu"
//                 aria-label="Admin portal menu"
//                 className="absolute right-0 top-full mt-3 w-64 bg-[#FFFDF7] rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] overflow-hidden z-50"
//               >
//                 <div className="px-4 py-3 bg-[#E8C86A] border-b-2 border-[#2E4F5E]">
//                   <p className="text-[0.78rem] font-black uppercase tracking-[0.15em] text-[#2E4F5E]">🔐 Admin Portal</p>
//                 </div>
//                 <div className="p-3">
//                   <Link
//                     href="/admin/login"
//                     role="menuitem"
//                     className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#E8C86A]/30 transition-colors group border-2 border-transparent hover:border-[#2E4F5E]"
//                   >
//                     <div className="w-9 h-9 rounded-xl bg-[#2E4F5E] flex items-center justify-center flex-shrink-0">
//                       <svg className="w-4 h-4 text-[#E8C86A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
//                         <rect x="3" y="11" width="18" height="11" rx="2" />
//                         <path strokeLinecap="round" d="M7 11V7a5 5 0 0110 0v4" />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-[0.88rem] font-black text-[#2E4F5E]" style={{ fontFamily: "'Nunito', sans-serif" }}>Admin Login</p>
//                       <p className="text-[0.72rem] text-[#3A9E8F] font-semibold">Manage tutors & content</p>
//                     </div>
//                     <svg className="w-4 h-4 text-[#2E4F5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                     </svg>
//                   </Link>
//                 </div>
//                 <div className="px-4 py-2 bg-[#f0ede4] border-t-2 border-[#2E4F5E]">
//                   <p className="text-[0.7rem] text-[#3A9E8F] text-center font-bold">Authorised personnel only</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile right */}
//         <div className="md:hidden flex items-center gap-2">
//           {/* Admin mobile */}
//           <div className="relative">
//             <button
//               id="admin-btn"
//               onClick={() => setAdminOpen(!adminOpen)}
//               aria-label="Open admin portal"
//               aria-expanded={adminOpen}
//               title="Admin Portal"
//               className={`flex items-center justify-center w-8 h-8 rounded-xl border-2 transition-all duration-150 ${
//                 adminOpen
//                   ? 'bg-[#2E4F5E]/10 border-[#2E4F5E] text-[#2E4F5E]'
//                   : 'bg-transparent border-[#2E4F5E]/25 text-[#2E4F5E]/45 hover:border-[#2E4F5E]/60 hover:text-[#2E4F5E]/70'
//               }`}
//             >
//               <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//               </svg>
//             </button>
//             {adminOpen && (
//               <div
//                 id="admin-popup"
//                 role="menu"
//                 className="absolute right-0 top-full mt-2 w-52 bg-[#FFFDF7] rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] overflow-hidden z-50"
//               >
//                 <div className="px-4 py-2.5 bg-[#E8C86A] border-b-2 border-[#2E4F5E]">
//                   <p className="text-[0.72rem] font-black uppercase tracking-[0.15em] text-[#2E4F5E]">🔐 Admin Portal</p>
//                 </div>
//                 <div className="p-2.5">
//                   <Link href="/admin/login" role="menuitem" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#E8C86A]/30 transition-colors">
//                     <svg className="w-4 h-4 text-[#2E4F5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
//                       <rect x="3" y="11" width="18" height="11" rx="2" />
//                       <path strokeLinecap="round" d="M7 11V7a5 5 0 0110 0v4" />
//                     </svg>
//                     <p className="text-[0.84rem] font-black text-[#2E4F5E]" style={{ fontFamily: "'Nunito', sans-serif" }}>Admin Login</p>
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Hamburger */}
//           <button
//             onClick={() => setOpen(!open)}
//             aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
//             aria-expanded={open}
//             aria-controls="mobile-nav"
//             className="p-2 rounded-xl bg-[#2E4F5E] border-2 border-[#2E4F5E] text-white shadow-[0_2px_0_0_#1a3240] transition-colors"
//           >
//             <div className="w-5 flex flex-col gap-[5px]" aria-hidden="true">
//               <span className={`block h-0.5 bg-current origin-center transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
//               <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
//               <span className={`block h-0.5 bg-current origin-center transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Mobile dropdown */}
//       <div
//         id="mobile-nav"
//         className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//         }`}
//       >
//         <nav
//           className="border-t-2 border-[#2E4F5E] bg-[#FFFDF7] px-4 py-3 flex flex-col gap-2 pb-5"
//           aria-label="Mobile navigation"
//           style={{ fontFamily: "'Nunito', sans-serif" }}
//         >
//           {navLinks.map((l) => (
//             <Link
//               key={l.href}
//               href={l.href}
//               aria-current={pathname === l.href ? 'page' : undefined}
//               className={`px-4 py-3 text-[0.9rem] font-black rounded-xl transition-all border-2 ${
//                 pathname === l.href
//                   ? 'text-white bg-[#2E4F5E] border-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
//                   : 'text-[#2E4F5E] bg-transparent border-transparent hover:bg-[#E8C86A]/40 hover:border-[#2E4F5E]'
//               }`}
//             >
//               {l.label}
//             </Link>
//           ))}
//           <Link
//             href="/become-tutor"
//             className="mt-1 px-5 py-3 bg-[#E05C42] hover:bg-[#c94e37] text-white text-[0.9rem] font-black rounded-xl text-center shadow-[0_3px_0_0_#a83c2a] border-2 border-[#a83c2a] transition-colors"
//             aria-label="Apply to become a tutor at Avenfield Tutors"
//           >
//             Join as Tutor ✨
//           </Link>
//         </nav>
//       </div>
//     </header>
//   )
// }



import Link from 'next/link'

const WHATSAPP = '923095154253'

const platformLinks: [string, string][] = [
  ['/', 'Home'],
  ['/tutors', 'Browse Tutors'],
  ['/services', 'Our Services'],
  ['/become-tutor', 'Become a Tutor'],
]

const subjects = [
  'Mathematics', 'Physics', 'English',
  'O Level', 'A Level', 'IELTS',
  'Computer Science', 'Quran',
]

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Avenfield Tutors site footer"
      className="bg-[#2E4F5E] text-[#a8c5d0]"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* Wavy top border */}
      <div className="w-full overflow-hidden leading-[0]" aria-hidden="true">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-10 sm:h-12 block" fill="#FFFDF7" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,24 C180,48 360,0 540,24 C720,48 900,0 1080,24 C1260,48 1350,12 1440,24 L1440,0 L0,0 Z"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-4 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* ── Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 mb-4 group"
              aria-label="Avenfield Tutors – Home"
            >
              {/* Text-based logo mark for footer (white on dark bg) */}
              <div className="w-10 h-10 rounded-xl bg-[#E8C86A] border-2 border-[#E8C86A] flex items-center justify-center flex-shrink-0 group-hover:rotate-[-6deg] transition-transform duration-300">
                <span className="text-[#2E4F5E] font-black text-[0.62rem] text-center leading-tight tracking-tight">AT</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black tracking-[-0.01em] text-[1.05rem] leading-tight text-white">
                  Avenfield Tutors
                </span>
                <span className="text-[#E8C86A] text-[0.5rem] font-bold tracking-[0.14em] uppercase">
                  Expert · Verified · Trusted
                </span>
              </div>
            </Link>

            <p className="text-[0.84rem] leading-relaxed text-[#7da8b8] max-w-xs mb-2 font-medium">
              Avenfield Tutors connects students with verified, expert tutors for personalised online and home tuition across Pakistan, UAE &amp; UK. 🌍
            </p>
            <p className="text-[0.78rem] text-[#5a7f8e] mb-5 font-semibold">
              Academy for Virtual Education and Nurturing
            </p>

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Avenfield Tutors on WhatsApp"
              className="inline-flex items-center gap-2 text-[0.84rem] text-[#3A9E8F] hover:text-[#E8C86A] transition-colors font-bold"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.532 5.845L.057 23.882a.5.5 0 0 0 .61.61l6.037-1.475A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.87 9.87 0 0 1-5.032-1.38l-.36-.214-3.733.913.929-3.622-.235-.373A9.86 9.86 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* ── Platform ── */}
          <nav aria-label="Platform links">
            <h2 className="text-[#E8C86A] text-[0.78rem] font-black uppercase tracking-[0.2em] mb-5">Platform</h2>
            <ul className="flex flex-col gap-3 text-[0.85rem]">
              {platformLinks.map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-[#E8C86A] transition-colors duration-150 font-semibold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Subjects ── */}
          <nav aria-label="Subject links">
            <h2 className="text-[#E8C86A] text-[0.78rem] font-black uppercase tracking-[0.2em] mb-5">Subjects</h2>
            <ul className="flex flex-col gap-3 text-[0.85rem]">
              {subjects.map((s) => (
                <li key={s}>
                  <Link
                    href={`/tutors?subject=${encodeURIComponent(s)}`}
                    className="hover:text-[#E8C86A] transition-colors duration-150 font-semibold"
                    aria-label={`Find ${s} tutors`}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Contact ── */}
          <div>
            <h2 className="text-[#E8C86A] text-[0.78rem] font-black uppercase tracking-[0.2em] mb-5">Contact Us</h2>
            <p className="text-[0.84rem] text-[#7da8b8] mb-5 leading-relaxed font-medium">
              Have a question? We reply within an hour promise! 🤝
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi! I visited Avenfield Tutors and have a question.')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Avenfield Tutors on WhatsApp"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#3A9E8F] border-2 border-[#E8C86A] text-white hover:bg-[#2d8a7c] rounded-xl text-[0.84rem] font-black shadow-[0_3px_0_0_#2a7a6e] hover:shadow-[0_1px_0_0_#2a7a6e] hover:translate-y-[2px] transition-all duration-150"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.532 5.845L.057 23.882a.5.5 0 0 0 .61.61l6.037-1.475A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.87 9.87 0 0 1-5.032-1.38l-.36-.214-3.733.913.929-3.622-.235-.373A9.86 9.86 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-[2px] bg-[#3A9E8F]/40 rounded-full mb-6" aria-hidden="true" />

        {/* ── Bottom ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.78rem] text-[#5a7f8e] font-semibold">
            © {new Date().getFullYear()} Avenfield Tutors. All rights reserved. Building Confidence. Delivering Excellence. 💛
          </p>
          <Link
            href="/admin/login"
            className="text-[0.78rem] text-[#5a7f8e] hover:text-[#E8C86A] transition-colors font-bold flex items-center gap-1.5"
            aria-label="Admin portal login"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Admin Portal
          </Link>
        </div>
      </div>
    </footer>
  )
}