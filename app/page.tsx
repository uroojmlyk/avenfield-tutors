



import type { Metadata } from 'next'
import Link from 'next/link'
import TutorCard from '@/components/tutor/TutorCard'
import { ITutor } from '@/types'

export const metadata: Metadata = {
  title: 'Learnova — Find Trusted Tutors For Every Subject',
  description: 'Connect with verified tutors for online and home sessions. Serving students in the UK, USA, Canada, Australia, UAE and across Europe.',
}

async function getFeaturedTutors(): Promise<ITutor[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tutors?limit=6`, { next: { revalidate: 60 } })
    if (!res.ok) return []
    return res.json()
  } catch { return [] }
}

const SUBJECTS = [
  { name: 'Mathematics',       icon: '∑',    bg: 'bg-[#E8C86A]',  text: 'text-[#2E4F5E]' },
  { name: 'Physics',           icon: '⚛',   bg: 'bg-[#E8934A]',  text: 'text-white'      },
  { name: 'Chemistry',         icon: '🧪',   bg: 'bg-[#E05C42]',  text: 'text-white'      },
  { name: 'Biology',           icon: '🧬',   bg: 'bg-[#3A9E8F]',  text: 'text-white'      },
  { name: 'Science',           icon: '🔬',   bg: 'bg-[#E8934A]',  text: 'text-white'      },
  { name: 'English',           icon: 'Aa',   bg: 'bg-[#3A9E8F]',  text: 'text-white'      },
  { name: 'Urdu',              icon: 'اردو', bg: 'bg-[#2E4F5E]',  text: 'text-[#E8C86A]'  },
  { name: 'Islamic Studies',   icon: '☪️',   bg: 'bg-[#E8C86A]',  text: 'text-[#2E4F5E]'  },
  { name: 'Pakistan Studies',  icon: '🇵🇰',  bg: 'bg-[#3A9E8F]',  text: 'text-white'      },
  { name: 'Statistics',        icon: '📈',   bg: 'bg-[#E05C42]',  text: 'text-white'      },
  { name: 'Political Science', icon: '🏛️',  bg: 'bg-[#E8934A]',  text: 'text-white'      },
  { name: 'Law',               icon: '⚖️',   bg: 'bg-[#E8C86A]',  text: 'text-[#2E4F5E]'  },
  { name: 'Computer Science',  icon: '</>',  bg: 'bg-[#2E4F5E]',  text: 'text-[#E8C86A]'  },
  { name: 'O Level',           icon: 'O/L',  bg: 'bg-[#2E4F5E]',  text: 'text-[#E8C86A]'  },
  { name: 'A Level',           icon: 'A/L',  bg: 'bg-[#E05C42]',  text: 'text-white'      },
  { name: 'IELTS',             icon: 'IEL',  bg: 'bg-[#E8934A]',  text: 'text-white'      },
  { name: 'CSS / PMS',         icon: '🎓',   bg: 'bg-[#2E4F5E]',  text: 'text-[#E8C86A]'  },
  { name: 'PPSC / FPSC',       icon: '📋',   bg: 'bg-[#E8934A]',  text: 'text-white'      },
  { name: 'MDCAT',             icon: '🏥',   bg: 'bg-[#E05C42]',  text: 'text-white'      },
  { name: 'Quran & Arabic',    icon: '📿',   bg: 'bg-[#3A9E8F]',  text: 'text-white'      },
  { name: 'Cadet College',     icon: '🎖️',  bg: 'bg-[#E8C86A]',  text: 'text-[#2E4F5E]'  },
]

function Eyebrow({ text, light = false, center = false }: { text: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2 mb-3 ${center ? 'justify-center' : ''}`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
      <span className={`text-[0.62rem] font-black uppercase tracking-[0.22em] ${light ? 'text-[#E8C86A]' : 'text-[#E05C42]'}`}>{text}</span>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
    </div>
  )
}

function Wiggle({ color = '#E8C86A' }: { color?: string }) {
  return (
    <svg viewBox="0 0 160 10" fill="none" className="absolute -bottom-1 left-0 w-full h-3 pointer-events-none" aria-hidden="true">
      <path d="M2 5 C20 1,38 9,56 5 C74 1,92 9,110 5 C128 1,146 9,158 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

export default async function HomePage() {
  const tutors = await getFeaturedTutors()

  return (
    <div className="text-[#2E4F5E] overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>

      {/* ══════════════════════════════════════════════════════
          §1  HERO
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#FFFDF7] relative pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 overflow-hidden">
        {/* Soft bg blobs */}
        <div aria-hidden="true" className="absolute top-0 right-0 w-64 sm:w-80 md:w-[400px] h-64 sm:h-80 md:h-[400px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle,#E8C86A,transparent 70%)', transform: 'translate(40%,-30%)' }} />
        <div aria-hidden="true" className="absolute bottom-0 left-0 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle,#3A9E8F,transparent 70%)', transform: 'translate(-30%,30%)' }} />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">

            {/* ── Left: copy ── */}
            <div className="w-full">

              {/* <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 bg-[#E8C86A]/25 border-2 border-[#E8C86A] text-[#2E4F5E] text-[0.7rem] font-black px-3 py-1.5 rounded-full mb-5 shadow-[2px_2px_0_0_#c9ab4a] max-w-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E05C42] animate-pulse flex-shrink-0" />
                <span className="whitespace-nowrap">🌎 Trusted by 8,000+ students</span>
                <span className="flex items-center gap-1">🇬🇧 🇺🇸 🇨🇦 🇦🇺 🇦🇪 🇪🇺 ⭐</span>
              </div> */}

<div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 bg-[#E8C86A]/25 border-2 border-[#E8C86A] text-[#2E4F5E] text-[0.7rem] font-black px-3 py-1.5 rounded-full mb-5 shadow-[2px_2px_0_0_#c9ab4a] max-w-full">
  <span className="w-1.5 h-1.5 rounded-full bg-[#E05C42] animate-pulse flex-shrink-0" />
  <span className="whitespace-nowrap">🌎 Trusted by 8k+ students across</span>
  <span className="flex items-center gap-1 flex-wrap">
    🇬🇧 🇺🇸 🇨🇦 🇦🇺 🇦🇪 🇪🇺 ⭐
  </span>
</div>
              {/* Headline */}
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-black leading-[1.08] tracking-[-0.025em] text-[#2E4F5E] mb-4 md:mb-5">
                Your Gateway to
                <span className="relative inline-block ml-2 text-[#E05C42]">
                  <span className="relative z-10">Excellence</span>
                  <Wiggle color="#E8C86A" />
                </span>
              </h1>

              {/* Sub text */}
              <p className="text-[#4a6a78] text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] leading-[1.7] md:leading-[1.75] mb-6 md:mb-8 font-semibold">
                Verified tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects.
                Online worldwide · Home visits in Pakistan.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8 md:mb-9">
                <Link href="/tutors"
                  className="flex items-center justify-center gap-2 px-5 md:px-6 py-3 bg-[#E05C42] text-white font-black rounded-xl border-2 border-[#a83c2a] shadow-[0_4px_0_0_#a83c2a] hover:shadow-[0_2px_0_0_#a83c2a] hover:translate-y-[2px] transition-all duration-150 text-[0.85rem] md:text-[0.9rem]">
                  Find My Tutor →
                </Link>
                <Link href="/become-tutor"
                  className="flex items-center justify-center gap-2 px-5 md:px-6 py-3 bg-white text-[#2E4F5E] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[0_3px_0_0_#2E4F5E] hover:shadow-[0_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150 text-[0.85rem] md:text-[0.9rem]">
                  Teach on Learnova
                </Link>
              </div>

              {/* Stat chips */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5">
                {[
                  { v: '500+',          l: 'Verified Tutors',  c: 'border-[#E8C86A] bg-[#E8C86A]/20'  },
                  { v: 'Online & Home', l: 'Learning Modes',   c: 'border-[#3A9E8F] bg-[#3A9E8F]/12'  },
                  { v: '50+ Subjects',  l: 'Areas Covered',    c: 'border-[#E8934A] bg-[#E8934A]/12'  },
                  { v: '15+ Countries', l: 'Students Served',  c: 'border-[#E05C42] bg-[#E05C42]/10'  },
                ].map(({ v, l, c }) => (
                  <div key={l} className={`px-3 py-2 rounded-xl border-2 ${c}`}>
                    <p className="font-black text-[#2E4F5E] text-[0.8rem] md:text-[0.85rem] leading-tight">{v}</p>
                    <p className="text-[#4a6a78] text-[0.55rem] md:text-[0.62rem] font-bold mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: preview card — desktop only ── */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-[340px]">
                <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-dashed border-[#E8C86A]">
                    <div className="w-10 h-10 rounded-xl bg-[#2E4F5E] flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 38 38" fill="none" aria-hidden="true">
                        <path d="M19 27V13" stroke="#E8C86A" strokeWidth="2.5" strokeLinecap="round"/>
                        <path d="M11 13.5C13.5 13 16.5 13.5 19 15C21.5 13.5 24.5 13 27 13.5V26C24.5 25.5 21.5 26 19 27.5C16.5 26 13.5 25.5 11 26V13.5Z" fill="#3A9E8F" stroke="#E8C86A" strokeWidth="1.5"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-black text-[0.9rem] text-[#2E4F5E]">Learnova Tutors</p>
                      <p className="text-[0.65rem] text-[#3A9E8F] font-bold">All manually verified ✓</p>
                    </div>
                    <div className="flex items-center gap-1 bg-[#E8C86A]/25 border border-[#E8C86A] px-2 py-0.5 rounded-full flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3A9E8F] animate-pulse"/>
                      <span className="text-[0.58rem] font-black text-[#2E4F5E]">LIVE</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { i:'AK', name:'Ahmad Khan',  sub:'O & A Level Mathematics', exp:'8 yrs', bg:'bg-[#E8C86A]', t:'text-[#2E4F5E]' },
                      { i:'SR', name:'Sara Rehman', sub:'IELTS & Spoken English',  exp:'5 yrs', bg:'bg-[#3A9E8F]', t:'text-white'     },
                      { i:'MH', name:'M. Hassan',   sub:'Physics & Chemistry',     exp:'6 yrs', bg:'bg-[#E8934A]', t:'text-white'     },
                    ].map(t => (
                      <div key={t.name} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FFFDF7] border-2 border-transparent hover:border-[#E8C86A] transition-all">
                        <div className={`w-9 h-9 rounded-xl ${t.bg} ${t.t} text-[0.65rem] font-black flex items-center justify-center border-2 border-[#2E4F5E] flex-shrink-0`}>{t.i}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[0.8rem] font-black text-[#2E4F5E] truncate">{t.name}</p>
                          <p className="text-[0.63rem] text-[#3A9E8F] font-bold truncate">{t.sub}</p>
                        </div>
                        <span className="text-[0.62rem] font-black text-[#2E4F5E] bg-[#E8C86A] px-2 py-0.5 rounded-full border border-[#2E4F5E] flex-shrink-0">{t.exp}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/tutors" className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 border-2 border-[#2E4F5E] hover:bg-[#2E4F5E] hover:text-white text-[#2E4F5E] text-[0.8rem] font-black rounded-xl transition-all shadow-[0_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[2px]">
                    View All Tutors →
                  </Link>
                </div>
                <div className="absolute -bottom-4 -left-5 bg-[#E05C42] text-white rounded-xl px-4 py-2.5 border-2 border-[#a83c2a] shadow-[3px_3px_0_0_#a83c2a]">
                  <p className="text-[0.58rem] font-bold opacity-80">Students Helped</p>
                  <p className="font-black text-xl leading-tight">8,000+</p>
                </div>
                <div className="absolute -top-4 -right-4 bg-[#E8C86A] text-[#2E4F5E] rounded-xl px-3 py-1.5 border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] rotate-2">
                  <p className="text-[0.65rem] font-black">⭐ Top Rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §2  CURRICULUM STRIP — dark teal
      ══════════════════════════════════════════════════════ */}
      <div className="bg-[#2E4F5E] py-3 sm:py-4 px-4 sm:px-6 md:px-8 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-5">
            {[
              { abbr: 'IGCSE',  label: 'Cambridge IGCSE', bg: 'bg-[#E8C86A]',  t: 'text-[#2E4F5E]' },
              { abbr: 'A-LVL',  label: 'CAIE A-Level',    bg: 'bg-[#3A9E8F]',  t: 'text-white'     },
              { abbr: 'EDX',    label: 'Edexcel',          bg: 'bg-[#E8934A]',  t: 'text-white'     },
              { abbr: 'IB',     label: 'IB ',       bg: 'bg-[#E05C42]',  t: 'text-white'     },
              { abbr: 'O/LVL',  label: 'O Level',          bg: 'bg-[#2E4F5E]',  t: 'text-[#E8C86A]', border: 'border border-[#E8C86A]/40' },
              { abbr: 'AP',     label: 'AP Courses',       bg: 'bg-[#E8C86A]',  t: 'text-[#2E4F5E]' },
              { abbr: 'SAT',    label: 'SAT',              bg: 'bg-[#3A9E8F]',  t: 'text-white'     },
              { abbr: 'CAIE',  label: 'CAIE',            bg: 'bg-[#E8934A]',  t: 'text-white'     },
              { abbr: 'Oxford',  label: 'Oxford',     bg: 'bg-[#E05C42]',  t: 'text-white'     },
            ].map(({ abbr, label, bg, t, border = '' }) => (
              <div key={abbr} className="flex items-center gap-1 sm:gap-2">
                <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${bg} ${t} ${border} flex items-center justify-center text-[0.5rem] sm:text-[0.55rem] font-black text-center shadow-[2px_2px_0_0_rgba(0,0,0,0.18)] flex-shrink-0`}>
                  {abbr}
                </div>
                <span className="text-[0.65rem] sm:text-[0.7rem] font-bold text-[#7da8b8] hidden sm:block whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          §3  WHY CHOOSE US — teal bg
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#3A9E8F] py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Eyebrow text="Why Choose Us" light center />
            <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.4rem] font-black tracking-[-0.02em] text-white mb-2 md:mb-3">
              Trusted by Families Across 15+ Countries
            </h2>
            <p className="text-[#c5e8e3] text-[0.85rem] md:text-[0.88rem] max-w-sm md:max-w-md mx-auto font-semibold leading-relaxed">
              Not just a tutor list real verification, genuine flexibility, outcomes that matter.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: '🛡️', title: 'Verified Tutors',     desc: 'Manually reviewed. Only qualified educators make it through.',              bd: 'border-[#E8C86A]', hv: 'hover:bg-[#E8C86A]/10 hover:shadow-[3px_3px_0_0_#E8C86A]' },
              { icon: '📅', title: 'Flexible Scheduling', desc: 'Morning, evening, weekends — online or in person. Your terms.',             bd: 'border-white',     hv: 'hover:bg-white/10 hover:shadow-[3px_3px_0_0_white]'       },
              { icon: '🎯', title: 'Personalised',        desc: 'Sessions built around your goals, pace, and academic level.',               bd: 'border-[#E8934A]', hv: 'hover:bg-[#E8934A]/10 hover:shadow-[3px_3px_0_0_#E8934A]' },
              { icon: '💬', title: 'Direct WhatsApp',     desc: 'No middlemen. Contact tutors directly and start the same day.',            bd: 'border-[#E05C42]', hv: 'hover:bg-[#E05C42]/10 hover:shadow-[3px_3px_0_0_#E05C42]' },
            ].map(c => (
              <div key={c.title} className={`group bg-white/10 p-4 sm:p-5 md:p-6 rounded-2xl border-2 ${c.bd} ${c.hv} transition-all duration-200`}>
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-white/15 border-2 border-white/40 flex items-center justify-center text-xl sm:text-2xl mb-3 md:mb-4 group-hover:rotate-[-6deg] transition-transform duration-200">
                  {c.icon}
                </div>
                <h3 className="font-black text-[0.85rem] sm:text-[0.9rem] md:text-[1rem] text-white mb-1 md:mb-1.5">{c.title}</h3>
                <p className="text-[#c5e8e3] text-[0.72rem] sm:text-[0.75rem] md:text-[0.8rem] font-semibold leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §4  HOW IT WORKS — yellow bg
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#E8C86A] py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 border-y-2 border-[#2E4F5E]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Eyebrow text="Simple Process" center />
            <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.4rem] font-black tracking-[-0.02em] text-[#2E4F5E] mb-2 md:mb-3">
              Search to First Session in Minutes ⚡
            </h2>
            <p className="text-[#4a6a78] text-[0.85rem] md:text-[0.88rem] max-w-xs md:max-w-sm mx-auto font-semibold">
              No long forms. No waiting weeks. Start learning today.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 relative">
            <div aria-hidden="true" className="hidden sm:block absolute top-[52px] left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] border-t-2 border-dashed border-[#2E4F5E] opacity-30" />
            {[
              { n: '01', emoji: '🔍', title: 'Explore Tutors',    desc: 'Browse by subject, city and mode. Every tutor is verified — zero fakes.',     bg: 'bg-[#2E4F5E]' },
              { n: '02', emoji: '💡', title: 'Choose Your Match', desc: 'Read bio, qualifications and experience. Know who is right in minutes.',      bg: 'bg-[#E05C42]' },
              { n: '03', emoji: '🚀', title: 'Connect & Learn',   desc: 'Message on WhatsApp, book a slot and start the same day. That simple.',       bg: 'bg-[#3A9E8F]' },
            ].map(s => (
              <div key={s.n} className="flex flex-col items-center text-center p-5 sm:p-6 md:p-7 bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] hover:-translate-y-1 hover:shadow-[4px_6px_0_0_#2E4F5E] transition-all duration-200">
                <div className={`w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-2xl ${s.bg} border-2 border-[#2E4F5E] flex items-center justify-center mb-3 shadow-[2px_2px_0_0_rgba(0,0,0,0.15)] relative z-10`}>
                  <span className="text-xl sm:text-2xl">{s.emoji}</span>
                </div>
                <span className="text-[0.55rem] sm:text-[0.6rem] font-black text-[#4a6a78] tracking-widest mb-1.5">STEP {s.n}</span>
                <h3 className="font-black text-[0.85rem] sm:text-[0.9rem] md:text-[0.98rem] text-[#2E4F5E] mb-2">{s.title}</h3>
                <p className="text-[#4a6a78] text-[0.72rem] sm:text-[0.75rem] md:text-[0.8rem] font-semibold leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §5  SUBJECTS — dark teal bg
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#2E4F5E] py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 md:mb-10">
            <div>
              <Eyebrow text="What We Cover" light />
              <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.4rem] font-black tracking-[-0.02em] text-white">
                Every Subject You Need 📚
              </h2>
            </div>
            <p className="text-[#7da8b8] text-[0.8rem] md:text-[0.82rem] max-w-[200px] font-semibold leading-relaxed">
              From school basics to professional certifications.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5 md:gap-3">
            {SUBJECTS.map(({ name, icon, bg, text }) => (
              <Link key={name} href={`/tutors?subject=${encodeURIComponent(name)}`}
                className="group flex items-center gap-2 p-2.5 sm:p-3 md:p-3.5 bg-white/8 rounded-xl border-2 border-white/10 hover:border-[#E8C86A] hover:bg-white/15 hover:shadow-[3px_3px_0_0_#E8C86A] hover:-translate-y-0.5 transition-all duration-150">
                <span className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-lg ${bg} ${text} border-2 border-white/25 flex items-center justify-center text-[0.65rem] sm:text-[0.68rem] md:text-[0.72rem] font-mono font-black flex-shrink-0 group-hover:rotate-[-8deg] transition-transform duration-150`}>
                  {icon}
                </span>
                <span className="text-[0.7rem] sm:text-[0.73rem] md:text-[0.8rem] font-black text-white group-hover:text-[#E8C86A] transition-colors leading-tight">
                  {name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8 md:mt-10">
            <Link href="/tutors"
              className="inline-flex items-center gap-2 text-[0.8rem] sm:text-[0.85rem] font-black text-[#2E4F5E] bg-[#E8C86A] border-2 border-[#2E4F5E] px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150">
              Browse All Tutors →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §6  FEATURED TUTORS — cream bg
      ══════════════════════════════════════════════════════ */}
      {tutors.length > 0 && (
        <section className="bg-[#FFFDF7] py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 md:mb-10">
              <div>
                <Eyebrow text="Our Tutors" />
                <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.4rem] font-black tracking-[-0.02em] text-[#2E4F5E]">
                  Meet Your Future Tutor 👋
                </h2>
              </div>
              <Link href="/tutors"
                className="inline-flex items-center gap-2 text-[0.78rem] sm:text-[0.82rem] font-black text-[#2E4F5E] bg-[#E8C86A] border-2 border-[#2E4F5E] px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[2px] transition-all duration-150 self-start sm:self-auto flex-shrink-0">
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor} />)}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          §7  STUDENT FEEDBACK — orange bg
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#E8934A] py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 border-y-2 border-[#2E4F5E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Eyebrow text="Student Feedback" center />
            <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.4rem] font-black tracking-[-0.02em] text-white">
              What students say about our tutors ⭐⭐⭐⭐⭐
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { subject: 'O Level Mathematics', flag: '🇵🇰', quote: 'My son went from a D to an A in O Level Maths in three months. Patient, invested, and genuinely effective.',         name: 'Sara M.',    role: 'Parent · Islamabad',       init: 'SM', bg: 'bg-[#E8C86A]', t: 'text-[#2E4F5E]' },
              { subject: 'IELTS Preparation',   flag: '🇬🇧', quote: 'Struggled with IELTS for two years. Eight weeks with my tutor and I finally got the band score I needed.',            name: 'Ahmed R.',   role: 'Student · Lahore → UK',    init: 'AR', bg: 'bg-[#3A9E8F]', t: 'text-white'     },
              { subject: 'Quran & Arabic',       flag: '🇦🇪', quote: 'Finding a qualified Quran teacher in Dubai was always hard. Connected within 24 hours — my kids love every session.', name: 'Fatima K.',  role: 'Parent · Dubai, UAE',      init: 'FK', bg: 'bg-[#2E4F5E]', t: 'text-[#E8C86A]' },
              { subject: 'CSS English Essay',    flag: '🇵🇰', quote: 'CSS essay marks improved from 40 to 58. The structured approach and past-paper feedback changed everything.',          name: 'Bilal A.',   role: 'CSS Aspirant · Karachi',   init: 'BA', bg: 'bg-[#E8C86A]', t: 'text-[#2E4F5E]' },
              { subject: 'MDCAT Biology',        flag: '🇵🇰', quote: 'MDCAT score jumped 40 points in 5 weeks. Focused on exactly the right topics — got into my first-choice college.',    name: 'Hina N.',    role: 'MBBS Student · Lahore',    init: 'HN', bg: 'bg-[#E05C42]', t: 'text-white'     },
              { subject: 'A Level Physics',      flag: '🇨🇦', quote: 'Was failing A Level Physics in Canada. Three sessions a week turned it around completely — achieved an A*.',          name: 'Zara S.',    role: 'Student · Toronto, Canada', init: 'ZS', bg: 'bg-[#3A9E8F]', t: 'text-white'     },
            ].map(r => (
              <div key={r.name} className="bg-white rounded-2xl border-2 border-[#2E4F5E] p-4 sm:p-5 md:p-6 flex flex-col shadow-[4px_4px_0_0_#2E4F5E] hover:-translate-y-1 hover:shadow-[4px_6px_0_0_#2E4F5E] transition-all duration-200">
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <span className="text-[0.58rem] sm:text-[0.6rem] md:text-[0.62rem] font-black text-[#2E4F5E] bg-[#E8C86A]/30 border border-[#E8C86A] px-2 py-0.5 rounded-full">
                    {r.subject}
                  </span>
                  <span className="text-base md:text-lg leading-none">{r.flag}</span>
                </div>
                <div className="flex gap-0.5 mb-2 md:mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E8C86A]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[#4a6a78] text-[0.78rem] sm:text-[0.8rem] md:text-[0.85rem] font-semibold leading-relaxed flex-1 mb-3 md:mb-4">
                  "{r.quote}"
                </p>
                <div className="flex items-center gap-2 md:gap-3 pt-3 md:pt-4 border-t-2 border-dashed border-[#E8C86A]">
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl ${r.bg} ${r.t} text-[0.6rem] sm:text-[0.65rem] font-black flex items-center justify-center border-2 border-[#2E4F5E] flex-shrink-0`}>
                    {r.init}
                  </div>
                  <div>
                    <p className="text-[0.75rem] sm:text-[0.8rem] md:text-[0.82rem] font-black text-[#2E4F5E]">{r.name}</p>
                    <p className="text-[0.6rem] sm:text-[0.62rem] md:text-[0.65rem] text-[#3A9E8F] font-bold">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/50 text-[0.65rem] sm:text-[0.7rem] font-semibold mt-6 sm:mt-8">
            Based on verified student feedback across all subjects and countries
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §8  FOR EDUCATORS — cream bg
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#FFFDF7] py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#2E4F5E] rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#1a3240] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden relative">
            <div aria-hidden="true" className="absolute top-4 right-4 grid grid-cols-5 gap-1.5 opacity-15">
              {Array.from({ length: 25 }).map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-[#E8C86A]"/>)}
            </div>
            <div className="relative">
              <Eyebrow text="For Educators" light />
              <h2 className="text-[1.3rem] sm:text-[1.6rem] md:text-[2rem] font-black tracking-[-0.02em] text-white mb-2">
                Share Your Knowledge.<br className="hidden sm:block"/>Earn What You Deserve. 🎓
              </h2>
              <p className="text-white/70 text-[0.85rem] md:text-[0.88rem] font-semibold max-w-lg leading-relaxed">
                Apply as a tutor and connect with motivated students no marketing needed.
              </p>
            </div>
            <Link href="/become-tutor"
              className="relative flex-shrink-0 inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3 bg-[#E8C86A] text-[#2E4F5E] font-black rounded-xl border-2 border-[#a88e3a] shadow-[0_4px_0_0_#a88e3a] hover:shadow-[0_2px_0_0_#a88e3a] hover:translate-y-[2px] transition-all duration-150 text-[0.85rem] md:text-[0.88rem] w-full md:w-auto">
              Become a Tutor →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §9  FINAL CTA — dark teal
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#2E4F5E] py-14 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        {[{ pos: 'top-5 right-5', c: 'bg-[#E8C86A]' }, { pos: 'bottom-5 left-5', c: 'bg-[#3A9E8F]' }].map((d, i) => (
          <div key={i} aria-hidden="true" className={`absolute ${d.pos} grid grid-cols-5 gap-1.5 opacity-20`}>
            {Array.from({ length: 25 }).map((_, j) => <div key={j} className={`w-1.5 h-1.5 rounded-full ${d.c}`}/>)}
          </div>
        ))}
        <div className="relative max-w-2xl mx-auto text-center">
          <Eyebrow text="Start Today" light center />
          <h2 className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] font-black text-white leading-[1.1] tracking-[-0.025em] mb-3 md:mb-4">
            Your Best Grade Is<br/>
            <span className="relative inline-block text-[#E8C86A]">
              <span className="relative z-10">Waiting For You.</span>
              <Wiggle color="#E05C42" />
            </span>
          </h2>
          <p className="text-white/55 text-[0.88rem] sm:text-[0.92rem] md:text-[0.98rem] mb-6 sm:mb-8 md:mb-10 max-w-md mx-auto font-semibold leading-relaxed">
            Browse verified tutor profiles and start learning in under two minutes. No commitment needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-sm mx-auto sm:max-w-none">
            <Link href="/tutors"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-7 py-3 bg-[#E8C86A] text-[#2E4F5E] font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#a88e3a] shadow-[0_4px_0_0_#a88e3a] hover:shadow-[0_2px_0_0_#a88e3a] hover:translate-y-[2px] transition-all duration-150">
              Find a Tutor Now →
            </Link>
            <Link href="/become-tutor"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-7 py-3 border-2 border-white/30 hover:border-white/60 text-white font-black text-[0.85rem] md:text-[0.9rem] rounded-xl transition-all duration-200">
              Become a Tutor
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}