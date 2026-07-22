import Link from 'next/link'

interface SubjectLandingPageProps {
  subject: string
  city: string
  slug: string
  pageTitle: string
  pageDescription: string
  metaKeywords: string[]
  subjectIcon: string
  subjectEmoji: string
  subjectOverview: string[]
  subjectDetails: string[]
  examBoards?: string[]
  targetExams?: string[]
  commonTopics?: string[]
  whyChoose?: string[]
  faqs: { q: string; a: string }[]
  areas: { [category: string]: string[] }
  relatedSubjects: { name: string; href: string; icon: string }[]
  nearbyCity?: string
  canonicalUrl: string
}

const WHATSAPP_NUMBER = '923095154253'

function buildWhatsAppURL(city: string, subject: string) {
  const message = encodeURIComponent(
    `Hi! I'm looking for a ${subject} tutor in ${city}. Could you help me find one?`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

function getCategoryLabel(key: string): string {
  const labels: Record<string, string> = {
    sectors: '📍 Sectors',
    housingSocieties: '🏘️ Housing Societies',
    localities: '🏠 Localities & Neighborhoods',
    commercial: '🏪 Commercial Areas',
    centralAndOldCity: '🏙️ Central & Old City',
    cantonmentAndEast: '🎖️ Cantonment & East',
    johaAndSouth: '🏠 Johar Town & South',
    suburbsAndRingRoad: '🛣️ Suburbs & Ring Road',
    bahriaTown: '🏘️ Bahria Town Phases',
    dha: '🏘️ DHA Phases',
    askariHousing: '🏘️ Askari Housing Schemes',
  }
  return labels[key] || key
}

function getTotalAreas(areas: SubjectLandingPageProps['areas']): number {
  return Object.values(areas).reduce((acc, arr) => acc + arr.length, 0)
}

export default function SubjectLandingPage({
  subject,
  city,
  slug,
  pageTitle,
  pageDescription,
  metaKeywords,
  subjectIcon,
  subjectEmoji,
  subjectOverview,
  subjectDetails,
  examBoards = [],
  targetExams = [],
  commonTopics = [],
  whyChoose = [],
  faqs,
  areas,
  relatedSubjects,
  nearbyCity,
  canonicalUrl,
}: SubjectLandingPageProps) {
  const whatsappURL = buildWhatsAppURL(city, subject)
  const totalAreas = getTotalAreas(areas)

  // ─── Schema.org ────────────────────────────────────────
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `${subject} Tutoring`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Avenfield Tutors',
      telephone: '+923095154253',
      email: 'avenfieldtutors@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: city,
        addressCountry: 'PK',
      },
    },
    areaServed: {
      '@type': 'City',
      name: city,
      containedIn: 'Pakistan',
    },
    description: pageDescription,
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'PKR',
        valueAddedTaxIncluded: true,
      },
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://avenfieldtutors.com' },
      { '@type': 'ListItem', position: 2, name: `Home Tutors in ${city}`, item: `https://avenfieldtutors.com/home-tutor-${city.toLowerCase()}` },
      { '@type': 'ListItem', position: 3, name: `${subject} Tutors in ${city}`, item: canonicalUrl },
    ],
  }

  return (
    <div className="text-[#2E4F5E] overflow-x-hidden bg-[#FFFDF7]" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="bg-[#2E4F5E] pt-14 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-8 relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, #3A9E8F, transparent 70%)', transform: 'translate(30%, -20%)' }} />
          <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 rounded-full"
            style={{ background: 'radial-gradient(circle, #E8C86A, transparent 70%)', transform: 'translate(-20%, 30%)' }} />
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8C86A]/20 border border-[#E8C86A]/30 rounded-full mb-5">
            <span className="text-xl">{subjectEmoji}</span>
            <span className="text-[0.62rem] font-black uppercase tracking-[0.15em] text-[#E8C86A]">
              {subject} Tuition in {city}
            </span>
          </div>

          <h1 className="text-white text-[1.9rem] sm:text-[2.6rem] lg:text-[3.2rem] font-black tracking-tight leading-[1.15] mb-4">
            Best <span className="text-[#E8C86A]">{subject}</span> Tutors in <span className="text-[#E8C86A]">{city}</span>
          </h1>

          <p className="text-[#7da8b8] text-[0.92rem] sm:text-[1.05rem] font-semibold leading-relaxed max-w-2xl mb-6">
            {pageDescription}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-7">
            {['Free Consultation', '100% Verified Tutors', 'WhatsApp Booking'].map(t => (
              <span key={t} className="flex items-center gap-1.5 text-[#7da8b8] text-[0.8rem] sm:text-[0.85rem] font-semibold">
                <span className="w-4 h-4 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.6rem] flex-shrink-0">✓</span>
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3.5 sm:py-3 bg-[#3A9E8F] hover:bg-[#2d7a6e] text-white font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_4px_0_0_#1a3240] hover:shadow-[0_2px_0_0_#1a3240] hover:translate-y-[2px] active:translate-y-[2px] transition-all duration-150">
              <span className="text-xl">💬</span>
              Get Free Consultation
            </a>
            <Link href={`/tutors?subject=${encodeURIComponent(subject)}&city=${encodeURIComponent(city)}`}
              className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3.5 sm:py-3 bg-white text-[#2E4F5E] font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_3px_0_0_#2E4F5E] hover:shadow-[0_1px_0_0_#2E4F5E] hover:translate-y-[2px] active:translate-y-[2px] transition-all duration-150 no-underline">
              Browse {subject} Tutors
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-12 sm:space-y-14">

        {/* ══════════════════════ SUBJECT OVERVIEW ══════════════════════ */}
        <section>
          <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] text-[#2E4F5E] flex items-center gap-2 mb-4">
            <span>{subjectIcon}</span>
            About {subject} Tuition in {city}
          </h2>
          <div className="space-y-4 text-[#4a6a78] text-[0.85rem] sm:text-[0.95rem] leading-[1.75] font-semibold">
            {subjectOverview.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>
        </section>

        {/* ══════════════════════ SUBJECT DETAILS ══════════════════════ */}
        <section className="bg-white rounded-2xl border-2 border-[#D4D0C5] p-5 sm:p-8 shadow-[3px_3px_0_0_#D4D0C5]">
          <h2 className="font-black text-[1.1rem] sm:text-[1.3rem] text-[#2E4F5E] mb-4 flex items-center gap-2">
            <span>📖</span>
            What Our {subject} Tutors in {city} Offer
          </h2>
          <div className="space-y-3 text-[#4a6a78] text-[0.85rem] sm:text-[0.92rem] leading-relaxed font-semibold">
            {subjectDetails.map((detail, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: detail }} />
            ))}
          </div>

          {examBoards.length > 0 && (
            <>
              <h3 className="font-black text-[#2E4F5E] text-[0.95rem] mt-5 mb-2">Exam Boards We Cover:</h3>
              <div className="flex flex-wrap gap-2">
                {examBoards.map(board => (
                  <span key={board} className="px-3 py-1.5 bg-[#FFFDF7] text-[#2E4F5E] text-[0.72rem] font-bold rounded-full border-2 border-[#D4D0C5]">
                    {board}
                  </span>
                ))}
              </div>
            </>
          )}

          {targetExams.length > 0 && (
            <>
              <h3 className="font-black text-[#2E4F5E] text-[0.95rem] mt-5 mb-2">Target Exams:</h3>
              <div className="flex flex-wrap gap-2">
                {targetExams.map(exam => (
                  <span key={exam} className="px-3 py-1.5 bg-[#E8C86A]/20 text-[#2E4F5E] text-[0.72rem] font-bold rounded-full border-2 border-[#E8C86A]">
                    {exam}
                  </span>
                ))}
              </div>
            </>
          )}

          {commonTopics.length > 0 && (
            <>
              <h3 className="font-black text-[#2E4F5E] text-[0.95rem] mt-5 mb-2">Common Topics Covered:</h3>
              <div className="flex flex-wrap gap-2">
                {commonTopics.map(topic => (
                  <span key={topic} className="px-3 py-1.5 bg-[#3A9E8F]/10 text-[#2E4F5E] text-[0.72rem] font-bold rounded-full border-2 border-[#3A9E8F]/30">
                    {topic}
                  </span>
                ))}
              </div>
            </>
          )}
        </section>

        {/* ══════════════════════ WHY CHOOSE US ══════════════════════ */}
        {whyChoose.length > 0 && (
          <section className="bg-[#3A9E8F] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5 sm:p-8 text-white">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] flex items-center justify-center gap-2">
                <span>⭐</span>
                Why Choose Our {subject} Tutors?
              </h2>
            </div>
            <div className="space-y-2.5">
              {whyChoose.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/10 border border-white/20">
                  <span className="w-7 h-7 rounded-full bg-[#E8C86A] text-[#2E4F5E] flex items-center justify-center text-sm font-black flex-shrink-0 shadow-[2px_2px_0_0_#1a3240]">
                    {i + 1}
                  </span>
                  <p className="text-[0.85rem] sm:text-[0.9rem] font-semibold leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ══════════════════════ AREAS COVERED ══════════════════════ */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
            <div>
              <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] text-[#2E4F5E] flex items-center gap-2">
                <span>📍</span>
                Areas We Cover in {city}
              </h2>
              <p className="text-[#4a6a78] text-[0.85rem] sm:text-[0.9rem] font-semibold">
                Our {subject} tutors serve students across these neighborhoods
              </p>
            </div>
            <span className="text-[0.7rem] font-bold text-[#7da8b8] bg-white px-3 py-1.5 rounded-full border border-[#D4D0C5] whitespace-nowrap self-start sm:self-auto">
              {totalAreas}+ areas covered
            </span>
          </div>

          <div className="space-y-3">
            {Object.entries(areas).map(([category, areaList]) => (
              <details key={category} className="group bg-white border-2 border-[#D4D0C5] rounded-xl overflow-hidden hover:border-[#3A9E8F] transition-colors">
                <summary className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 cursor-pointer list-none hover:bg-[#FFFDF7] transition-colors">
                  <span className="text-[0.82rem] sm:text-[0.88rem] font-black text-[#2E4F5E] flex items-center gap-2 min-w-0">
                    <span className="truncate">{getCategoryLabel(category)}</span>
                    <span className="flex-shrink-0 text-[0.68rem] font-bold text-[#7da8b8] bg-[#D4D0C5]/30 px-2 py-0.5 rounded-full">
                      {areaList.length}
                    </span>
                  </span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8C86A] flex items-center justify-center text-[#2E4F5E] font-black text-sm transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="px-4 sm:px-5 pb-5 pt-1">
                  <div className="flex flex-wrap gap-2">
                    {areaList.map((area) => (
                      <Link key={area} href={`/tutors?subject=${encodeURIComponent(subject)}&city=${encodeURIComponent(city)}&area=${encodeURIComponent(area)}`}
                        className="px-3 sm:px-3.5 py-1.5 sm:py-2 bg-[#FFFDF7] text-[#2E4F5E] text-[0.72rem] sm:text-[0.78rem] font-bold rounded-full border-2 border-[#D4D0C5] hover:border-[#3A9E8F] hover:bg-[#E8C86A]/20 transition-all no-underline">
                        {area}
                      </Link>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>

          <p className="text-[#7da8b8] text-[0.78rem] sm:text-[0.8rem] font-semibold mt-4 flex items-start gap-1.5">
            <span>📌</span>
            <span>
              Don&#39;t see your area?{' '}
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="text-[#E05C42] hover:underline font-black">
                Message us on WhatsApp
              </a>{' '}
              and we&#39;ll confirm a {subject} tutor in your area.
            </span>
          </p>
        </section>

        {/* ══════════════════════ RELATED SUBJECTS ══════════════════════ */}
        {relatedSubjects.length > 0 && (
          <section>
            <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] text-[#2E4F5E] flex items-center gap-2 mb-4">
              <span>🔗</span>
              Related Subjects
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {relatedSubjects.map(item => (
                <Link key={item.name} href={item.href}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white text-[#2E4F5E] text-[0.78rem] sm:text-[0.85rem] font-bold rounded-xl border-2 border-[#D4D0C5] hover:border-[#3A9E8F] hover:bg-[#FFFDF7] transition-all no-underline">
                  <span className="text-base">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ══════════════════════ HOW IT WORKS ══════════════════════ */}
        <section className="bg-[#E8C86A] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-5 sm:p-8 text-[#2E4F5E]">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] flex items-center justify-center gap-2">
              <span>🚀</span>
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-[#4a6a78] text-[0.85rem] sm:text-[0.9rem] font-semibold mt-1">
              Find your perfect {subject} tutor in {city} without the hassle
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { step: '01', title: 'Share Your Requirements', desc: `Message us on WhatsApp with your level, exam board, and location in ${city}` },
              { step: '02', title: 'Get Matched Instantly', desc: `We connect you with verified ${subject} tutors who match your specific needs` },
              { step: '03', title: 'Start Learning Today', desc: `Schedule a free consultation and begin your ${subject} tutoring sessions` },
            ].map((item) => (
              <div key={item.step} className="text-center p-4 sm:p-5 bg-white rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E]">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 bg-[#2E4F5E] text-white font-black rounded-full flex items-center justify-center text-lg sm:text-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#1a3240]">
                  {item.step}
                </div>
                <h3 className="font-black text-[0.92rem] sm:text-[1rem] mb-1.5 sm:mb-2">{item.title}</h3>
                <p className="text-[0.78rem] sm:text-[0.82rem] font-semibold text-[#4a6a78] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════ FAQ ══════════════════════ */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] text-[#2E4F5E] flex items-center justify-center gap-2">
              <span>❓</span>
              Frequently Asked Questions
            </h2>
            <p className="text-[#4a6a78] text-[0.85rem] sm:text-[0.9rem] font-semibold">
              Everything you need to know about {subject} tutoring in {city}
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white border-2 border-[#D4D0C5] rounded-xl overflow-hidden hover:border-[#3A9E8F] transition-colors">
                <summary className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4 cursor-pointer list-none hover:bg-[#FFFDF7] transition-colors">
                  <span className="text-[0.82rem] sm:text-[0.88rem] font-black text-[#2E4F5E]">{faq.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8C86A] flex items-center justify-center text-[#2E4F5E] font-black text-sm transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="px-4 sm:px-5 pb-5 pt-1">
                  <p className="text-[#4a6a78] text-[0.82rem] sm:text-[0.88rem] leading-relaxed font-semibold" dangerouslySetInnerHTML={{ __html: faq.a }} />
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ══════════════════════ SEO CONTENT BLOCK ══════════════════════ */}
        <section className="bg-[#FFFDF7] border-2 border-[#E8C86A] rounded-2xl p-5 sm:p-8 shadow-[4px_4px_0_0_#E8C86A]">
          <h2 className="font-black text-[1.1rem] sm:text-[1.3rem] text-[#2E4F5E] mb-4 flex items-center gap-2">
            <span>📖</span>
            Why Choose {subject} Tuition in {city}?
          </h2>
          <div className="space-y-4 text-[#4a6a78] text-[0.85rem] sm:text-[0.95rem] leading-[1.75] font-semibold">
            <p>
              Finding the right <strong className="text-[#2E4F5E]">{subject} tutor in {city}</strong> is crucial for academic success. At Avenfield Tutors, we connect students with experienced, verified tutors who understand the unique challenges of the Cambridge curriculum. Whether you are preparing for <Link href={`/tutors?subject=O%20Level&city=${encodeURIComponent(city)}`} className="text-[#E05C42] hover:underline font-black">O Level</Link> or need help with specific topics, our tutors provide personalised attention tailored to your learning style.
            </p>
            <p>
              Our <strong className="text-[#2E4F5E]">{subject} tutors in {city}</strong> are subject matter experts with years of experience teaching the Cambridge syllabus. They are familiar with common exam patterns, marking schemes, and the specific challenges students face. With one-on-one attention, your child can build confidence, master difficult concepts, and achieve their academic goals.
            </p>
            <p>
              <strong className="text-[#2E4F5E]">Flexible learning options:</strong> Choose between <Link href={`/home-tutor-${city.toLowerCase()}`} className="text-[#E05C42] hover:underline font-black">home tuition in {city}</Link> where the tutor comes to your location, or <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">online tutoring</Link> for maximum convenience. Both options offer the same high-quality, personalised instruction.
            </p>
            <p>
              <strong className="text-[#2E4F5E]">Ready to get started?</strong>{' '}
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="text-[#E05C42] hover:underline font-black">Message us on WhatsApp</a>{' '}
              with your requirements. We&#39;ll match you with a verified {subject} tutor in {city} within 24 hours.
            </p>
            {nearbyCity && (
              <p className="text-[0.78rem] sm:text-[0.8rem] text-[#7da8b8]">
                <span>📌 </span>
                Also serving <Link href={`/home-tutor-${nearbyCity.toLowerCase()}`} className="text-[#E05C42] hover:underline font-black">{nearbyCity}</Link> and other cities across Pakistan.
              </p>
            )}
          </div>
        </section>

        {/* ══════════════════════ FINAL CTA ══════════════════════ */}
        <section className="bg-gradient-to-br from-[#2E4F5E] to-[#1a3240] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#1a3240] p-6 sm:p-10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8C86A]/20 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E8C86A] animate-pulse flex-shrink-0" />
              <span className="text-[0.58rem] sm:text-[0.6rem] font-black uppercase tracking-[0.15em] text-[#E8C86A]">
                Book your free consultation
              </span>
            </div>

            <h2 className="text-white font-black text-[1.3rem] sm:text-[1.8rem] mb-3">
              Ready to Find Your Perfect {subject} Tutor in {city}?
            </h2>

            <p className="text-[#7da8b8] text-[0.88rem] sm:text-[0.95rem] font-semibold mb-6">
              Message us on WhatsApp with your subject and level. We&#39;ll match you with a verified tutor within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-3 bg-[#E8C86A] hover:bg-[#d4b85a] text-[#2E4F5E] font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_4px_0_0_#1a3240] hover:shadow-[0_2px_0_0_#1a3240] hover:translate-y-[2px] active:translate-y-[2px] transition-all">
                <span className="text-xl">💬</span>
                Contact Us on WhatsApp
              </a>
              <Link href={`/tutors?subject=${encodeURIComponent(subject)}&city=${encodeURIComponent(city)}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-3 bg-white hover:bg-[#FFFDF7] text-[#2E4F5E] font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_3px_0_0_#2E4F5E] hover:shadow-[0_1px_0_0_#2E4F5E] hover:translate-y-[2px] active:translate-y-[2px] transition-all no-underline">
                Browse All {subject} Tutors
              </Link>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-4 text-[0.68rem] sm:text-[0.7rem] text-[#7da8b8] font-semibold">
              <span>📱 WhatsApp: +92 309 5154253</span>
              <span className="hidden sm:inline">|</span>
              <span>✉️ avenfieldtutors@gmail.com</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}