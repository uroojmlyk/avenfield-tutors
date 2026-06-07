
'use client'

import Link from 'next/link'
import Image from 'next/image'
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
      role="banner"
      className={`sticky top-0 z-50 transition-all duration-300 border-b-2 border-[#2E4F5E] ${
        scrolled
          ? 'bg-[#FFFDF7]/97 backdrop-blur-md shadow-[0_4px_0_0_#2E4F5E]'
          : 'bg-[#FFFDF7]/95 backdrop-blur-sm'
      }`}
      style={{ fontFamily: "'Nunito', 'Fredoka One', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-[72px] flex items-center justify-between gap-4">

        {/* Logo — full image, no box, prominent */}
        <Link
          href="/"
          className="flex-shrink-0 group"
          aria-label="Avenfield Tutors – Academy for Virtual Education and Nurturing, go to homepage"
          title="Avenfield Tutors – Expert Online & Home Tutoring"
        >
          <div className="relative w-[180px] h-[48px] sm:w-[210px] sm:h-[56px] group-hover:opacity-90 transition-opacity duration-200">
            <Image
              src="/avenfield-logo.jpeg"
              alt="Avenfield Tutors"
              fill
              sizes="(max-width: 640px) 180px, 210px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? 'page' : undefined}
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

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/become-tutor"
            className="px-5 py-2.5 bg-[#E05C42] hover:bg-[#c94e37] text-white text-[0.88rem] font-black rounded-xl transition-all duration-200 shadow-[0_3px_0_0_#a83c2a] hover:shadow-[0_1px_0_0_#a83c2a] hover:translate-y-[2px] border-0"
            style={{ fontFamily: "'Nunito', sans-serif" }}
            aria-label="Apply to become a tutor at Avenfield Tutors"
          >
            Join as Tutor ✨
          </Link>

          {/* Admin - subtle icon button */}
          <div className="relative">
            <button
              id="admin-btn"
              onClick={() => setAdminOpen(!adminOpen)}
              aria-label="Open admin portal"
              aria-expanded={adminOpen}
              aria-haspopup="menu"
              title="Admin Portal"
              className={`flex items-center justify-center w-9 h-9 rounded-xl border-2 transition-all duration-150 ${
                adminOpen
                  ? 'bg-[#2E4F5E]/10 border-[#2E4F5E] text-[#2E4F5E]'
                  : 'bg-transparent border-[#2E4F5E]/30 text-[#2E4F5E]/50 hover:border-[#2E4F5E] hover:text-[#2E4F5E] hover:bg-[#2E4F5E]/5'
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </button>

            {adminOpen && (
              <div
                id="admin-popup"
                role="menu"
                aria-label="Admin portal menu"
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
                      <svg className="w-4 h-4 text-[#E8C86A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path strokeLinecap="round" d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[0.88rem] font-black text-[#2E4F5E]" style={{ fontFamily: "'Nunito', sans-serif" }}>Admin Login</p>
                      <p className="text-[0.72rem] text-[#3A9E8F] font-semibold">Manage tutors & content</p>
                    </div>
                    <svg className="w-4 h-4 text-[#2E4F5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
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

        {/* Mobile right */}
        <div className="md:hidden flex items-center gap-2">
          {/* Admin mobile */}
          <div className="relative">
            <button
              id="admin-btn"
              onClick={() => setAdminOpen(!adminOpen)}
              aria-label="Open admin portal"
              aria-expanded={adminOpen}
              title="Admin Portal"
              className={`flex items-center justify-center w-8 h-8 rounded-xl border-2 transition-all duration-150 ${
                adminOpen
                  ? 'bg-[#2E4F5E]/10 border-[#2E4F5E] text-[#2E4F5E]'
                  : 'bg-transparent border-[#2E4F5E]/25 text-[#2E4F5E]/45 hover:border-[#2E4F5E]/60 hover:text-[#2E4F5E]/70'
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </button>
            {adminOpen && (
              <div
                id="admin-popup"
                role="menu"
                className="absolute right-0 top-full mt-2 w-52 bg-[#FFFDF7] rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] overflow-hidden z-50"
              >
                <div className="px-4 py-2.5 bg-[#E8C86A] border-b-2 border-[#2E4F5E]">
                  <p className="text-[0.72rem] font-black uppercase tracking-[0.15em] text-[#2E4F5E]">🔐 Admin Portal</p>
                </div>
                <div className="p-2.5">
                  <Link href="/admin/login" role="menuitem" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#E8C86A]/30 transition-colors">
                    <svg className="w-4 h-4 text-[#2E4F5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
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

      {/* Mobile dropdown */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className="border-t-2 border-[#2E4F5E] bg-[#FFFDF7] px-4 py-3 flex flex-col gap-2 pb-5"
          aria-label="Mobile navigation"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
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