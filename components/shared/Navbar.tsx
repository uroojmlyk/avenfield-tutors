


'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

// 5 links total, no duplication with the CTA button — keeps desktop clean
const navLinks = [
  { href: '/',             label: 'Home' },
  { href: '/services',     label: 'Services' },
  { href: '/tutors',       label: 'Find a Tutor' },
  { href: '/blog',         label: 'Blog' },
  { href: '/contact',      label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname                = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

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
          {navLinks.map((l) => (
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
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
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