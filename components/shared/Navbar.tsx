
// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { Fragment, useState, useEffect } from 'react'
// import { usePathname } from 'next/navigation'

// // 5 links total, no duplication with the CTA button — keeps desktop clean
// const navLinks = [
//   { href: '/',             label: 'Home' },
//   { href: '/tutors',       label: 'Find a Tutor' },
//   { href: '/blog',         label: 'Blog' },
//   { href: '/contact',      label: 'Contact' },
// ]

// // Rendered as a "Services" dropdown on desktop, and as collapsible sub-items
// // under Services on mobile — keeps the local SEO pages one click from
// // every page on the site instead of only living in the footer.
// const cityLinks = [
//   { href: '/home-tutor-islamabad',  label: 'Home Tutor in Islamabad' },
//   { href: '/home-tutor-rawalpindi', label: 'Home Tutor in Rawalpindi' },
//   { href: '/home-tutor-lahore', label: 'Home Tutor in Lahore' },

// ]

// export default function Navbar() {
//   const [open, setOpen]         = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [servicesOpen, setServicesOpen] = useState(false)
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
//   const pathname                = usePathname()

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 10)
//     window.addEventListener('scroll', fn, { passive: true })
//     return () => window.removeEventListener('scroll', fn)
//   }, [])

//   useEffect(() => { 
//     setOpen(false)
//     setMobileServicesOpen(false)
//   }, [pathname])

//   // Admin pages get no public navbar (and /admin is disallowed in robots.ts,
//   // so this section stays out of Google entirely)
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
//       <div className="max-w-6xl mx-auto px-4 sm:px-8 h-[66px] flex items-center justify-between gap-4">

//         {/* ── Logo ── transparent PNG, no white box against any background */}
//         <Link
//           href="/"
//           className="flex items-center gap-2.5 flex-shrink-0 group"
//           aria-label="Avenfield Tutors – Expert Online & Home Tutoring"
//         >
//           <div className="relative flex-shrink-0 h-[42px] sm:h-[50px] w-auto">
//             <Image
//               src="/avenfieldtutors-newlogo.png"
//               alt="Avenfield Tutors"
//               width={200}
//               height={60}
//               sizes="(max-width: 640px) 150px, 200px"
//               className="h-full w-auto object-contain"
//               priority
//             />
//           </div>
//         </Link>

//         {/* ── Desktop nav ── */}
//         <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
//           <Link
//             href="/"
//             aria-current={pathname === '/' ? 'page' : undefined}
//             className={`px-3.5 py-2 text-[0.85rem] font-bold rounded-xl transition-all duration-150 whitespace-nowrap ${
//               pathname === '/'
//                 ? 'text-[#FFFDF7] bg-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
//                 : 'text-[#2E4F5E] hover:text-[#FFFDF7] hover:bg-[#3A9E8F] hover:shadow-[0_2px_0_0_#2a7a6e]'
//             }`}
//             style={{ fontFamily: "'Nunito', sans-serif" }}
//           >
//             Home
//           </Link>

//           {/* Services dropdown — includes the local landing pages so they're
//               reachable from every page, not just the footer. */}
//           <div
//             className="relative"
//             onMouseEnter={() => setServicesOpen(true)}
//             onMouseLeave={() => setServicesOpen(false)}
//           >
//             <Link
//               href="/services"
//               aria-current={pathname === '/services' ? 'page' : undefined}
//               className={`flex items-center gap-1 px-3.5 py-2 text-[0.85rem] font-bold rounded-xl transition-all duration-150 whitespace-nowrap ${
//                 pathname === '/services' || pathname.startsWith('/home-tutor-')
//                   ? 'text-[#FFFDF7] bg-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
//                   : 'text-[#2E4F5E] hover:text-[#FFFDF7] hover:bg-[#3A9E8F] hover:shadow-[0_2px_0_0_#2a7a6e]'
//               }`}
//               style={{ fontFamily: "'Nunito', sans-serif" }}
//             >
//               Services
//               <svg className={`w-3 h-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//               </svg>
//             </Link>

//             <div
//               className={`absolute top-full left-0 pt-2 transition-all duration-150 ${
//                 servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
//               }`}
//             >
//               <div className="bg-white border-2 border-[#2E4F5E] rounded-xl shadow-[3px_3px_0_0_#2E4F5E] p-2 min-w-[220px]">
//                 {cityLinks.map(l => (
//                   <Link
//                     key={l.href}
//                     href={l.href}
//                     className="block px-3 py-2 text-[0.82rem] font-bold text-[#2E4F5E] rounded-lg hover:bg-[#FFFDF7] transition-colors whitespace-nowrap"
//                   >
//                     📍 {l.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {navLinks.slice(1).map((l) => (
//             <Link
//               key={l.href}
//               href={l.href}
//               aria-current={pathname === l.href ? 'page' : undefined}
//               className={`px-3.5 py-2 text-[0.85rem] font-bold rounded-xl transition-all duration-150 whitespace-nowrap ${
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

//         {/* ── Desktop right — single CTA, no duplication ── */}
//         <div className="hidden md:flex items-center">
//           <Link
//             href="/become-tutor"
//             className="px-5 py-2.5 bg-[#E05C42] hover:bg-[#c94e37] text-white text-[0.85rem] font-black rounded-xl transition-all duration-200 shadow-[0_3px_0_0_#a83c2a] hover:shadow-[0_1px_0_0_#a83c2a] hover:translate-y-[2px] border-0 whitespace-nowrap"
//             style={{ fontFamily: "'Nunito', sans-serif" }}
//             aria-label="Join Avenfield Tutors as a tutor"
//           >
//             Join as Tutor ✨
//           </Link>
//         </div>

//         {/* ── Mobile right ── */}
//         <div className="md:hidden flex items-center gap-2">
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

//       {/* ── Mobile dropdown ── */}
//       <div
//         id="mobile-nav"
//         className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
//         }`}
//       >
//         <nav
//           className="border-t-2 border-[#2E4F5E] bg-[#FFFDF7] px-4 py-3 flex flex-col gap-2 pb-5"
//           aria-label="Mobile navigation"
//           style={{ fontFamily: "'Nunito', sans-serif" }}
//         >
//           {navLinks.map((l, i) => (
//             <Fragment key={l.href}>
//               <Link
//                 href={l.href}
//                 aria-current={pathname === l.href ? 'page' : undefined}
//                 className={`px-4 py-3 text-[0.9rem] font-black rounded-xl transition-all border-2 ${
//                   pathname === l.href
//                     ? 'text-white bg-[#2E4F5E] border-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
//                     : 'text-[#2E4F5E] bg-transparent border-transparent hover:bg-[#E8C86A]/40 hover:border-[#2E4F5E]'
//                 }`}
//               >
//                 {l.label}
//               </Link>
//               {/* Services with collapsible sub-items inserted right after Home */}
//               {i === 0 && (
//                 <div className="flex flex-col gap-2">
//                   {/* Services parent link with toggle */}
//                   <button
//                     onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                     className={`px-4 py-3 text-[0.9rem] font-black rounded-xl transition-all border-2 flex items-center justify-between ${
//                       pathname === '/services' || pathname.startsWith('/home-tutor-')
//                         ? 'text-white bg-[#2E4F5E] border-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
//                         : 'text-[#2E4F5E] bg-transparent border-transparent hover:bg-[#E8C86A]/40 hover:border-[#2E4F5E]'
//                     }`}
//                     aria-expanded={mobileServicesOpen}
//                   >
//                     <span>Services</span>
//                     <svg 
//                       className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
//                       fill="none" 
//                       viewBox="0 0 24 24" 
//                       stroke="currentColor" 
//                       strokeWidth={3}
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </button>
                  
//                   {/* Collapsible sub-items with professional styling */}
//                   <div 
//                     className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                       mobileServicesOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
//                     }`}
//                   >
//                     <div className="pl-4 flex flex-col gap-1.5 border-l-2 border-[#2E4F5E]/20 ml-2">
//                       {cityLinks.map(l => (
//                         <Link
//                           key={l.href}
//                           href={l.href}
//                           aria-current={pathname === l.href ? 'page' : undefined}
//                           className={`px-4 py-2.5 text-[0.82rem] font-bold rounded-xl transition-all border-2 ${
//                             pathname === l.href
//                               ? 'text-white bg-[#2E4F5E] border-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
//                               : 'text-[#4a6a78] bg-transparent border-transparent hover:bg-[#E8C86A]/30 hover:border-[#2E4F5E]'
//                           }`}
//                         >
//                           <span className="flex items-center gap-2">
//                             <span className="text-[#3A9E8F]">▸</span>
//                             {l.label}
//                           </span>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </Fragment>
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





'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Fragment, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

// 5 links total, no duplication with the CTA button — keeps desktop clean
const navLinks = [
  { href: '/',             label: 'Home' },
  { href: '/tutors',       label: 'Find a Tutor' },
  { href: '/blog',         label: 'Blog' },
  { href: '/contact',      label: 'Contact' },
]

// Rendered as a "Services" dropdown on desktop, and as collapsible sub-items
// under Services on mobile — keeps the local SEO pages one click from
// every page on the site instead of only living in the footer.
const cityLinks = [
  { href: '/home-tutor-islamabad',  label: 'Home Tutor in Islamabad' },
  { href: '/home-tutor-rawalpindi', label: 'Home Tutor in Rawalpindi' },
  { href: '/home-tutor-lahore', label: 'Home Tutor in Lahore' },

]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname                = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { 
    setOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  // Admin pages get no public navbar (and /admin is disallowed in robots.ts,
  // so this section stays out of Google entirely)
  const isAdmin = pathname.startsWith('/admin')
  if (isAdmin) return null

  return (
    <header
      role="banner"
      className={`sticky top-0 z-50 transition-all duration-300 border-b-2 border-[#2E4F5E] ${
        scrolled
          ? 'bg-[#FFFDF7]/97 backdrop-blur-md shadow-[0_4px_0_0_#2E4F5E]'
          : 'bg-[#FFFDF7]/95 backdrop-blur-sm'
      }`}
      style={{ fontFamily: "'Nunito', 'Fredoka One', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-[66px] flex items-center justify-between gap-4">

        {/* ── Logo ── transparent PNG, no white box against any background */}
        <Link
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0 group"
          aria-label="Avenfield Tutors – Expert Online & Home Tutoring"
        >
          <div className="relative flex-shrink-0 h-[42px] sm:h-[50px] w-auto">
            <Image
              src="/avenfieldtutors-newlogo.png"
              alt="Avenfield Tutors"
              width={200}
              height={60}
              sizes="(max-width: 640px) 150px, 200px"
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          <Link
            href="/"
            aria-current={pathname === '/' ? 'page' : undefined}
            className={`px-3.5 py-2 text-[0.85rem] font-bold rounded-xl transition-all duration-150 whitespace-nowrap ${
              pathname === '/'
                ? 'text-[#FFFDF7] bg-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
                : 'text-[#2E4F5E] hover:text-[#FFFDF7] hover:bg-[#3A9E8F] hover:shadow-[0_2px_0_0_#2a7a6e]'
            }`}
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Home
          </Link>

          {/* Services dropdown — includes the local landing pages so they're
              reachable from every page, not just the footer. */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              aria-current={pathname === '/services' ? 'page' : undefined}
              className={`flex items-center gap-1 px-3.5 py-2 text-[0.85rem] font-bold rounded-xl transition-all duration-150 whitespace-nowrap ${
                pathname === '/services' || pathname.startsWith('/home-tutor-')
                  ? 'text-[#FFFDF7] bg-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
                  : 'text-[#2E4F5E] hover:text-[#FFFDF7] hover:bg-[#3A9E8F] hover:shadow-[0_2px_0_0_#2a7a6e]'
              }`}
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Services
              <svg className={`w-3 h-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div
              className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
              }`}
            >
              <div className="bg-white border-2 border-[#2E4F5E] rounded-2xl shadow-[4px_4px_0_0_#2E4F5E] p-2.5 min-w-[260px] overflow-hidden">
                <p className="px-2.5 pt-1 pb-2 text-[0.6rem] font-black uppercase tracking-[0.15em] text-[#7da8b8]">
                  Local Home Tutoring
                </p>
                <Link
                  href="/services"
                  className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl hover:bg-[#FFFDF7] transition-colors mb-1 group/item"
                >
                  <span className="w-8 h-8 rounded-lg bg-[#2E4F5E] text-[#E8C86A] flex items-center justify-center text-[0.85rem] flex-shrink-0 group-hover/item:scale-110 transition-transform">✨</span>
                  <span className="text-[0.82rem] font-black text-[#2E4F5E]">All Services</span>
                </Link>
                <div className="h-px bg-[#D4D0C5] my-1.5 mx-1" />
                {cityLinks.map((l, i) => {
                  const cityAccents = [
                    { bg: 'bg-[#3A9E8F]', ring: 'group-hover/item:bg-[#3A9E8F]/10' },
                    { bg: 'bg-[#E8934A]', ring: 'group-hover/item:bg-[#E8934A]/10' },
                    { bg: 'bg-[#E05C42]', ring: 'group-hover/item:bg-[#E05C42]/10' },
                  ][i % 3]
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`flex items-center gap-2.5 px-2.5 py-2 rounded-xl transition-colors group/item ${cityAccents.ring}`}
                    >
                      <span className={`w-8 h-8 rounded-lg ${cityAccents.bg} text-white flex items-center justify-center text-[0.7rem] flex-shrink-0 group-hover/item:scale-110 transition-transform`}>📍</span>
                      <span className="text-[0.82rem] font-bold text-[#2E4F5E] whitespace-nowrap">{l.label}</span>
                      <svg className="w-3.5 h-3.5 text-[#D4D0C5] ml-auto opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 -translate-x-1 transition-all flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? 'page' : undefined}
              className={`px-3.5 py-2 text-[0.85rem] font-bold rounded-xl transition-all duration-150 whitespace-nowrap ${
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

        {/* ── Desktop right — single CTA, no duplication ── */}
        <div className="hidden md:flex items-center">
          <Link
            href="/become-tutor"
            className="px-5 py-2.5 bg-[#E05C42] hover:bg-[#c94e37] text-white text-[0.85rem] font-black rounded-xl transition-all duration-200 shadow-[0_3px_0_0_#a83c2a] hover:shadow-[0_1px_0_0_#a83c2a] hover:translate-y-[2px] border-0 whitespace-nowrap"
            style={{ fontFamily: "'Nunito', sans-serif" }}
            aria-label="Join Avenfield Tutors as a tutor"
          >
            Join as Tutor ✨
          </Link>
        </div>

        {/* ── Mobile right ── */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="p-2 rounded-xl bg-[#2E4F5E] border-2 border-[#2E4F5E] text-white shadow-[0_2px_0_0_#1a3240] transition-colors"
          >
            <div className="w-5 flex flex-col gap-[5px]" aria-hidden="true">
              <span className={`block h-0.5 bg-current origin-center transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-0.5 bg-current origin-center transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className="border-t-2 border-[#2E4F5E] bg-[#FFFDF7] px-4 py-3 flex flex-col gap-2 pb-5"
          aria-label="Mobile navigation"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {navLinks.map((l, i) => (
            <Fragment key={l.href}>
              <Link
                href={l.href}
                aria-current={pathname === l.href ? 'page' : undefined}
                className={`px-4 py-3 text-[0.9rem] font-black rounded-xl transition-all border-2 ${
                  pathname === l.href
                    ? 'text-white bg-[#2E4F5E] border-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
                    : 'text-[#2E4F5E] bg-transparent border-transparent hover:bg-[#E8C86A]/40 hover:border-[#2E4F5E]'
                }`}
              >
                {l.label}
              </Link>
              {/* Services with collapsible sub-items inserted right after Home */}
              {i === 0 && (
                <div className="flex flex-col gap-2">
                  {/* Services parent link with toggle */}
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`px-4 py-3 text-[0.9rem] font-black rounded-xl transition-all border-2 flex items-center justify-between ${
                      pathname === '/services' || pathname.startsWith('/home-tutor-')
                        ? 'text-white bg-[#2E4F5E] border-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
                        : 'text-[#2E4F5E] bg-transparent border-transparent hover:bg-[#E8C86A]/40 hover:border-[#2E4F5E]'
                    }`}
                    aria-expanded={mobileServicesOpen}
                  >
                    <span>Services</span>
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Collapsible sub-items with professional styling */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileServicesOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 flex flex-col gap-1.5 border-l-2 border-[#2E4F5E]/20 ml-2">
                      {cityLinks.map(l => (
                        <Link
                          key={l.href}
                          href={l.href}
                          aria-current={pathname === l.href ? 'page' : undefined}
                          className={`px-4 py-2.5 text-[0.82rem] font-bold rounded-xl transition-all border-2 ${
                            pathname === l.href
                              ? 'text-white bg-[#2E4F5E] border-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
                              : 'text-[#4a6a78] bg-transparent border-transparent hover:bg-[#E8C86A]/30 hover:border-[#2E4F5E]'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-[#3A9E8F]">▸</span>
                            {l.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          ))}
          <Link
            href="/become-tutor"
            className="mt-1 px-5 py-3 bg-[#E05C42] hover:bg-[#c94e37] text-white text-[0.9rem] font-black rounded-xl text-center shadow-[0_3px_0_0_#a83c2a] border-2 border-[#a83c2a] transition-colors"
            aria-label="Apply to become a tutor at Avenfield Tutors"
          >
            Join as Tutor ✨
          </Link>
        </nav>
      </div>
    </header>
  )
}