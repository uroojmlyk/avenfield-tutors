


// 'use client'

// import Link from 'next/link'
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
//       className={`sticky top-0 z-50 transition-all duration-300 border-b border-[#E8E4F0] ${
//         scrolled
//           ? 'bg-white/96 backdrop-blur-md shadow-sm shadow-[#6C5CE7]/6'
//           : 'bg-white/90 backdrop-blur-sm'
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[62px] flex items-center justify-between gap-4">

//         {/* ── Logo ── */}
//         <Link href="/" className="flex items-center gap-2 flex-shrink-0 group" aria-label="Learnova Home">
//           {/* Geometric mark — two overlapping L shapes */}
//           <svg
//             width="32" height="32" viewBox="0 0 32 32" fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="flex-shrink-0"
//             aria-hidden="true"
//           >
//             <rect width="32" height="32" rx="9" fill="#6C5CE7" />
//             <path d="M9 8h3.5v12H20v3H9V8Z" fill="white" />
//             <path d="M15.5 8H19v9h4v3h-7.5V8Z" fill="white" fillOpacity="0.45" />
//           </svg>
//           <span
//             className="text-[#1A1730] font-semibold tracking-[-0.02em] text-[1.05rem] leading-none"
//             style={{ fontFamily: "'DM Sans', sans-serif" }}
//           >
//             Learnova
//           </span>
//         </Link>

//         {/* ── Desktop nav ── */}
//         <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
//           {navLinks.map((l) => (
//             <Link
//               key={l.href}
//               href={l.href}
//               className={`px-4 py-2 text-[0.84rem] font-medium rounded-lg transition-all duration-150 ${
//                 pathname === l.href
//                   ? 'text-[#6C5CE7] bg-[#EEF0FF]'
//                   : 'text-[#5A5870] hover:text-[#6C5CE7] hover:bg-[#F4F2FF]'
//               }`}
//             >
//               {l.label}
//             </Link>
//           ))}
//         </nav>

//         {/* ── Desktop right ── */}
//         <div className="hidden md:flex items-center gap-2">
//           <Link
//             href="/become-tutor"
//             className="px-5 py-2 bg-[#6C5CE7] hover:bg-[#5A4BD1] text-white text-[0.84rem] font-semibold rounded-full transition-all duration-200 shadow-sm shadow-[#6C5CE7]/20 hover:scale-[1.02]"
//           >
//             Join as Tutor
//           </Link>

//           {/* Admin dropdown */}
//           <div className="relative">
//             <button
//               id="admin-btn"
//               onClick={() => setAdminOpen(!adminOpen)}
//               aria-label="Admin portal"
//               aria-expanded={adminOpen}
//               className={`p-2 rounded-lg transition-all duration-150 ${
//                 adminOpen
//                   ? 'text-[#6C5CE7] bg-[#EEF0FF]'
//                   : 'text-[#C4BBEE] hover:text-[#6C5CE7] hover:bg-[#F4F2FF]'
//               }`}
//             >
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <circle cx="12" cy="8" r="3" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
//               </svg>
//             </button>

//             {adminOpen && (
//               <div
//                 id="admin-popup"
//                 role="menu"
//                 className="absolute right-0 top-full mt-2 w-60 bg-white rounded-2xl border border-[#E8E4F0] shadow-xl shadow-[#6C5CE7]/8 overflow-hidden z-50"
//               >
//                 <div className="px-4 py-2.5 bg-[#FAFAF8] border-b border-[#E8E4F0]">
//                   <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A89EC6]">Admin Access</p>
//                 </div>
//                 <div className="p-2.5">
//                   <Link
//                     href="/admin/login"
//                     role="menuitem"
//                     className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F4F2FF] transition-colors group"
//                   >
//                     <div className="w-8 h-8 rounded-lg bg-[#EEF0FF] flex items-center justify-center group-hover:bg-[#6C5CE7] transition-colors flex-shrink-0">
//                       <svg className="w-3.5 h-3.5 text-[#6C5CE7] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                         <rect x="3" y="11" width="18" height="11" rx="2" />
//                         <path strokeLinecap="round" d="M7 11V7a5 5 0 0110 0v4" />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm font-semibold text-[#1A1730]">Admin Login</p>
//                       <p className="text-[11px] text-[#A89EC6]">Manage tutors & content</p>
//                     </div>
//                     <svg className="w-3.5 h-3.5 text-[#C4BBEE]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                     </svg>
//                   </Link>
//                 </div>
//                 <div className="px-4 py-2 bg-[#FAFAF8] border-t border-[#E8E4F0]">
//                   <p className="text-[10px] text-[#C4BBEE] text-center">Restricted — authorised personnel only</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* ── Mobile right ── */}
//         <div className="md:hidden flex items-center gap-1">
//           <div className="relative">
//             <button
//               id="admin-btn"
//               onClick={() => setAdminOpen(!adminOpen)}
//               aria-label="Admin portal"
//               className="p-2 text-[#C4BBEE] hover:text-[#6C5CE7] hover:bg-[#F4F2FF] rounded-lg transition-colors"
//             >
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <circle cx="12" cy="8" r="3" />
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
//               </svg>
//             </button>
//             {adminOpen && (
//               <div
//                 id="admin-popup"
//                 className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl border border-[#E8E4F0] shadow-xl shadow-[#6C5CE7]/8 overflow-hidden z-50"
//               >
//                 <div className="px-4 py-2.5 bg-[#FAFAF8] border-b border-[#E8E4F0]">
//                   <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A89EC6]">Admin Access</p>
//                 </div>
//                 <div className="p-2.5">
//                   <Link href="/admin/login" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F4F2FF] transition-colors">
//                     <svg className="w-4 h-4 text-[#6C5CE7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                       <rect x="3" y="11" width="18" height="11" rx="2" />
//                       <path strokeLinecap="round" d="M7 11V7a5 5 0 0110 0v4" />
//                     </svg>
//                     <p className="text-sm font-semibold text-[#1A1730]">Admin Login</p>
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>

//           <button
//             onClick={() => setOpen(!open)}
//             aria-label="Toggle navigation menu"
//             aria-expanded={open}
//             className="p-2 rounded-lg text-[#5A5870] hover:bg-[#F4F2FF] transition-colors"
//           >
//             <div className="w-5 flex flex-col gap-[5px]">
//               <span className={`block h-0.5 bg-current origin-center transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
//               <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
//               <span className={`block h-0.5 bg-current origin-center transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* ── Mobile dropdown ── */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//         }`}
//       >
//         <nav className="border-t border-[#E8E4F0] bg-white px-5 py-3 flex flex-col gap-1 pb-4">
//           {navLinks.map((l) => (
//             <Link
//               key={l.href}
//               href={l.href}
//               className={`px-4 py-3 text-sm font-medium rounded-xl transition-all ${
//                 pathname === l.href
//                   ? 'text-[#6C5CE7] bg-[#EEF0FF]'
//                   : 'text-[#5A5870] hover:text-[#6C5CE7] hover:bg-[#F4F2FF]'
//               }`}
//             >
//               {l.label}
//             </Link>
//           ))}
//           <Link
//             href="/become-tutor"
//             className="mt-2 px-5 py-3 bg-[#6C5CE7] hover:bg-[#5A4BD1] text-white text-sm font-semibold rounded-full text-center shadow-sm transition-colors"
//           >
//             Join as Tutor
//           </Link>
//         </nav>
//       </div>
//     </header>
//   )
// }





'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/',             label: 'Home' },
  { href: '/services',     label: 'Services' },
  { href: '/tutors',       label: 'Find a Tutor' },
  { href: '/become-tutor', label: 'Become a Tutor' },
]

export default function Navbar() {
  const [open, setOpen]           = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const [adminOpen, setAdminOpen] = useState(false)
  const pathname                  = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false); setAdminOpen(false) }, [pathname])

  useEffect(() => {
    if (!adminOpen) return
    const fn = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (!t.closest('#admin-popup') && !t.closest('#admin-btn')) setAdminOpen(false)
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [adminOpen])

  const isAdmin = pathname.startsWith('/admin')
  if (isAdmin) return null

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b-2 border-[#2E4F5E] ${
        scrolled
          ? 'bg-[#FFFDF7]/97 backdrop-blur-md shadow-[0_4px_0_0_#2E4F5E]'
          : 'bg-[#FFFDF7]/95 backdrop-blur-sm'
      }`}
      style={{ fontFamily: "'Nunito', 'Fredoka One', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-[66px] flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group" aria-label="Learnova Home">
          <div className="relative">
            {/* Cute book/star logo mark */}
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"
              className="group-hover:rotate-[-6deg] transition-transform duration-300"
              aria-hidden="true"
            >
              <rect width="38" height="38" rx="12" fill="#2E4F5E" />
              {/* Open book */}
              <path d="M19 27V13" stroke="#E8C86A" strokeWidth="2" strokeLinecap="round"/>
              <path d="M11 13.5C13.5 13 16.5 13.5 19 15C21.5 13.5 24.5 13 27 13.5V26C24.5 25.5 21.5 26 19 27.5C16.5 26 13.5 25.5 11 26V13.5Z" fill="#3A9E8F" stroke="#E8C86A" strokeWidth="1.2"/>
              {/* Star accent */}
              <path d="M27 10L27.6 11.4L29 12L27.6 12.6L27 14L26.4 12.6L25 12L26.4 11.4L27 10Z" fill="#E8934A"/>
            </svg>
          </div>
          <span className="text-[#2E4F5E] font-black tracking-[-0.01em] text-[1.15rem] leading-none"
            style={{ fontFamily: "'Nunito', sans-serif", letterSpacing: '-0.02em' }}>
            Learnova
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 text-[0.88rem] font-bold rounded-xl transition-all duration-150 ${
                pathname === l.href
                  ? 'text-[#FFFDF7] bg-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
                  : 'text-[#2E4F5E] hover:text-[#FFFDF7] hover:bg-[#3A9E8F] hover:shadow-[0_2px_0_0_#2a7a6e]'
              }`}
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop right ── */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/become-tutor"
            className="px-5 py-2.5 bg-[#E05C42] hover:bg-[#c94e37] text-white text-[0.88rem] font-black rounded-xl transition-all duration-200 shadow-[0_3px_0_0_#a83c2a] hover:shadow-[0_1px_0_0_#a83c2a] hover:translate-y-[2px] border-0"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Join as Tutor ✨
          </Link>

          {/* Admin — Prominent button */}
          <div className="relative">
            <button
              id="admin-btn"
              onClick={() => setAdminOpen(!adminOpen)}
              aria-label="Admin portal"
              aria-expanded={adminOpen}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[0.82rem] font-black border-2 transition-all duration-150 ${
                adminOpen
                  ? 'bg-[#E8C86A] border-[#2E4F5E] text-[#2E4F5E] shadow-[0_2px_0_0_#2E4F5E]'
                  : 'bg-[#E8C86A] border-[#2E4F5E] text-[#2E4F5E] shadow-[0_3px_0_0_#2E4F5E] hover:shadow-[0_1px_0_0_#2E4F5E] hover:translate-y-[2px]'
              }`}
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Admin
            </button>

            {adminOpen && (
              <div
                id="admin-popup"
                role="menu"
                className="absolute right-0 top-full mt-3 w-64 bg-[#FFFDF7] rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] overflow-hidden z-50"
              >
                <div className="px-4 py-3 bg-[#E8C86A] border-b-2 border-[#2E4F5E]">
                  <p className="text-[0.78rem] font-black uppercase tracking-[0.15em] text-[#2E4F5E]">🔐 Admin Portal</p>
                </div>
                <div className="p-3">
                  <Link
                    href="/admin/login"
                    role="menuitem"
                    className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-[#E8C86A]/30 transition-colors group border-2 border-transparent hover:border-[#2E4F5E]"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#2E4F5E] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#E8C86A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path strokeLinecap="round" d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[0.88rem] font-black text-[#2E4F5E]" style={{ fontFamily: "'Nunito', sans-serif" }}>Admin Login</p>
                      <p className="text-[0.72rem] text-[#3A9E8F] font-semibold">Manage tutors & content</p>
                    </div>
                    <svg className="w-4 h-4 text-[#2E4F5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="px-4 py-2 bg-[#f0ede4] border-t-2 border-[#2E4F5E]">
                  <p className="text-[0.7rem] text-[#3A9E8F] text-center font-bold">Authorised personnel only</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Mobile right ── */}
        <div className="md:hidden flex items-center gap-2">
          {/* Admin mobile */}
          <div className="relative">
            <button
              id="admin-btn"
              onClick={() => setAdminOpen(!adminOpen)}
              aria-label="Admin portal"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#E8C86A] border-2 border-[#2E4F5E] text-[#2E4F5E] shadow-[0_2px_0_0_#2E4F5E] text-[0.75rem] font-black transition-all"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Admin
            </button>
            {adminOpen && (
              <div
                id="admin-popup"
                className="absolute right-0 top-full mt-2 w-52 bg-[#FFFDF7] rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] overflow-hidden z-50"
              >
                <div className="px-4 py-2.5 bg-[#E8C86A] border-b-2 border-[#2E4F5E]">
                  <p className="text-[0.72rem] font-black uppercase tracking-[0.15em] text-[#2E4F5E]">🔐 Admin Portal</p>
                </div>
                <div className="p-2.5">
                  <Link href="/admin/login" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#E8C86A]/30 transition-colors">
                    <svg className="w-4 h-4 text-[#2E4F5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <rect x="3" y="11" width="18" height="11" rx="2" />
                      <path strokeLinecap="round" d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                    <p className="text-[0.84rem] font-black text-[#2E4F5E]" style={{ fontFamily: "'Nunito', sans-serif" }}>Admin Login</p>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="p-2 rounded-xl bg-[#2E4F5E] border-2 border-[#2E4F5E] text-white shadow-[0_2px_0_0_#1a3240] transition-colors"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-0.5 bg-current origin-center transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 bg-current origin-center transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="border-t-2 border-[#2E4F5E] bg-[#FFFDF7] px-4 py-3 flex flex-col gap-2 pb-5"
          style={{ fontFamily: "'Nunito', sans-serif" }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-3 text-[0.9rem] font-black rounded-xl transition-all border-2 ${
                pathname === l.href
                  ? 'text-white bg-[#2E4F5E] border-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
                  : 'text-[#2E4F5E] bg-transparent border-transparent hover:bg-[#E8C86A]/40 hover:border-[#2E4F5E]'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/become-tutor"
            className="mt-1 px-5 py-3 bg-[#E05C42] hover:bg-[#c94e37] text-white text-[0.9rem] font-black rounded-xl text-center shadow-[0_3px_0_0_#a83c2a] border-2 border-[#a83c2a] transition-colors"
          >
            Join as Tutor ✨
          </Link>
        </nav>
      </div>
    </header>
  )
}