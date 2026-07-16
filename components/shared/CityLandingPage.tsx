import Link from 'next/link'

interface CityPageProps {
  city: string
  areas: string[]
  nearbyCity?: string
}

const WHATSAPP_NUMBER = '923095154253'

function buildWhatsAppURL(city: string) {
  const message = encodeURIComponent(
    `Hi! I'm looking for a home tutor in ${city}. Could you help me find one?`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

const SUBJECTS = [
  'O Level', 'A Level', 'IGCSE', 'Mathematics', 'Physics', 'Chemistry',
  'Biology', 'English', 'Computer Science', 'Economics', 'IELTS', 'MDCAT',
  'CSS / PMS', 'Quran & Arabic',
]

export default function CityLandingPage({ city, areas, nearbyCity }: CityPageProps) {
  const whatsappURL = buildWhatsAppURL(city)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Home Tutoring',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Avenfield Tutors',
      telephone: '+923095154253',
      email: 'avenfieldtutors@gmail.com',
    },
    areaServed: { '@type': 'City', name: city },
    description: `Verified home tutors for O Level, A Level, IELTS, MDCAT and 50+ subjects in ${city}, Pakistan.`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Which areas of ${city} do your home tutors cover?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Our verified tutors provide home tuition across ${areas.slice(0, 6).join(', ')} and other sectors in ${city}. If your specific area isn't listed, message us on WhatsApp and we'll confirm availability.`,
        },
      },
      {
        '@type': 'Question',
        name: `How much does a home tutor in ${city} cost?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rates vary by subject, level, and tutor experience. Message us on WhatsApp with your requirements for a straightforward quote — no hidden charges.',
        },
      },
      {
        '@type': 'Question',
        name: `Can I get a free trial before committing to a home tutor in ${city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer a free initial consultation so you can confirm the tutor is the right fit before committing to regular sessions.',
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://avenfieldtutors.com' },
      { '@type': 'ListItem', position: 2, name: `Home Tutors in ${city}`, item: `https://avenfieldtutors.com/home-tutor-${city.toLowerCase()}` },
    ],
  }

  return (
    <div className="text-[#2E4F5E] overflow-x-hidden bg-[#FFFDF7]" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <div className="bg-[#2E4F5E] pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-8 relative overflow-hidden">
        <div aria-hidden="true" className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle,#3A9E8F,transparent 70%)', transform: 'translate(35%,-25%)' }} />
        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C86A]" />
            <span className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#E8C86A]">Home Tuition in {city}</span>
          </div>
          <h1 className="text-white text-[2rem] sm:text-[2.6rem] lg:text-[3rem] font-black tracking-tight leading-tight mb-5">
            Verified Home Tutors in {city} — O Level, A Level, IELTS &amp; MDCAT
          </h1>
          <p className="text-[#7da8b8] text-[0.95rem] sm:text-[1rem] font-semibold leading-relaxed max-w-2xl mb-8">
            Avenfield Tutors connects families in {city} with manually verified home tutors for
            50+ subjects — from Matric and O/A Level to IELTS, MDCAT and CSS/PMS. Book a free
            initial consultation and start with a tutor matched to your child&apos;s exact needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3A9E8F] hover:bg-[#2d7a6e] text-white font-black text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150">
              💬 Get a Free Consultation
            </a>
            <Link href={`/tutors?city=${encodeURIComponent(city)}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E8C86A] text-[#2E4F5E] font-black text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150 no-underline">
              Browse Tutors in {city}
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-10">

        {/* Areas covered */}
        <section>
          <h2 className="font-black text-[1.3rem] text-[#2E4F5E] mb-4">Areas We Cover in {city}</h2>
          <p className="text-[#4a6a78] text-[0.9rem] font-semibold leading-relaxed mb-4">
            Our home tutors regularly teach students across {city}, including:
          </p>
          <div className="flex flex-wrap gap-2">
            {areas.map(area => (
              <span key={area} className="px-3 py-1.5 bg-white text-[#2E4F5E] text-[0.78rem] font-bold rounded-full border-2 border-[#D4D0C5]">
                {area}
              </span>
            ))}
          </div>
          <p className="text-[#7da8b8] text-[0.8rem] font-semibold mt-3">
            Don&apos;t see your area listed? Message us on WhatsApp — we regularly expand coverage as more tutors join.
          </p>
        </section>

        {/* Subjects */}
        <section>
          <h2 className="font-black text-[1.3rem] text-[#2E4F5E] mb-4">Subjects Covered</h2>
          <div className="flex flex-wrap gap-2">
            {SUBJECTS.map(s => (
              <Link key={s} href={`/tutors?subject=${encodeURIComponent(s)}&city=${encodeURIComponent(city)}`}
                className="px-3.5 py-2 bg-[#E8C86A] text-[#2E4F5E] text-[0.78rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] no-underline hover:opacity-90 transition-opacity">
                {s}
              </Link>
            ))}
          </div>
        </section>

        {/* Why Avenfield */}
        <section className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-6 sm:p-8">
          <h2 className="font-black text-[1.3rem] text-[#2E4F5E] mb-4">Why Choose Avenfield Tutors in {city}?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: '✓', title: 'Manually Verified', desc: 'Every tutor is reviewed before their profile goes live — qualifications, experience, and teaching ability checked.' },
              { icon: '💬', title: 'Direct WhatsApp Booking', desc: 'No long forms. Message a tutor directly and schedule your first session the same day.' },
              { icon: '🎯', title: 'Matched to Your Syllabus', desc: 'Tutors experienced with your exact exam board — CAIE, Edexcel, or local Matric/FSc boards.' },
              { icon: '🏠', title: `In-Person in ${city}`, desc: `Tutors travel to your home in ${city} for focused, distraction-free sessions.` },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-[#3A9E8F] flex items-center justify-center text-white font-black flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-black text-[0.88rem] text-[#2E4F5E]">{item.title}</p>
                  <p className="text-[0.78rem] font-semibold text-[#4a6a78] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="font-black text-[1.3rem] text-[#2E4F5E] mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              {
                q: `Which areas of ${city} do your home tutors cover?`,
                a: `Our verified tutors provide home tuition across ${areas.slice(0, 6).join(', ')} and other sectors in ${city}. If your specific area isn't listed, message us on WhatsApp and we'll confirm availability.`,
              },
              {
                q: `How much does a home tutor in ${city} cost?`,
                a: 'Rates vary by subject, level, and tutor experience. Message us on WhatsApp with your requirements for a straightforward quote — no hidden charges.',
              },
              {
                q: `Can I get a free trial before committing to a home tutor in ${city}?`,
                a: 'Yes, we offer a free initial consultation so you can confirm the tutor is the right fit before committing to regular sessions.',
              },
              ...(nearbyCity ? [{
                q: `Do you also cover ${nearbyCity}?`,
                a: `Yes — we serve both ${city} and ${nearbyCity} for home tuition, plus online tutoring worldwide.`,
              }] : []),
            ].map((faq, i) => (
              <details key={i} className="group bg-white border-2 border-[#D4D0C5] rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-4 py-3 cursor-pointer list-none hover:bg-[#FFFDF7] transition-colors">
                  <span className="text-[0.85rem] font-black text-[#2E4F5E] pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E8C86A] flex items-center justify-center text-[#2E4F5E] font-black text-xs transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="px-4 pb-4 pt-1">
                  <p className="text-[#4a6a78] text-[0.85rem] leading-relaxed font-semibold">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#3A9E8F] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-6 sm:p-8 text-center">
          <p className="text-white font-black text-[1.15rem] mb-2">Ready to find a tutor in {city}?</p>
          <p className="text-[#c5e8e3] text-[0.85rem] font-semibold mb-5 max-w-md mx-auto">
            Message us on WhatsApp with your subject and level — we'll match you with a verified tutor within 24 hours.
          </p>
          <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E8C86A] text-[#2E4F5E] text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all">
            💬 Message Us on WhatsApp
          </a>
        </section>
      </div>
    </div>
  )
}