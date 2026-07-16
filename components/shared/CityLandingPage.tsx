

// // components/shared/CityLandingPage.tsx
// import Link from 'next/link'

// interface CityPageProps {
//   city: string
//   areas: string[]
//   nearbyCity?: string
// }

// const WHATSAPP_NUMBER = '923095154253'

// function buildWhatsAppURL(city: string, subject?: string) {
//   const baseMessage = `Hi! I'm looking for a home tutor in ${city}`
//   const subjectText = subject ? ` for ${subject}` : ''
//   const message = encodeURIComponent(`${baseMessage}${subjectText}. Could you help me find one?`)
//   return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
// }

// const SUBJECTS = [
//   { name: 'O Level', emoji: '📚' },
//   { name: 'A Level', emoji: '🎯' },
//   { name: 'IGCSE', emoji: '🌍' },
//   { name: 'Mathematics', emoji: '📐' },
//   { name: 'Physics', emoji: '⚡' },
//   { name: 'Chemistry', emoji: '🧪' },
//   { name: 'Biology', emoji: '🧬' },
//   { name: 'English', emoji: '📝' },
//   { name: 'Computer Science', emoji: '💻' },
//   { name: 'Economics', emoji: '📊' },
//   { name: 'IELTS', emoji: '🎓' },
//   { name: 'MDCAT', emoji: '🩺' },
//   { name: 'CSS / PMS', emoji: '🏛️' },
//   { name: 'Quran & Arabic', emoji: '🕌' },
// ]

// export default function CityLandingPage({ city, areas, nearbyCity }: CityPageProps) {
//   const whatsappURL = buildWhatsAppURL(city)

//   const serviceSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'Service',
//     serviceType: 'Home Tutoring',
//     provider: {
//       '@type': 'LocalBusiness',
//       name: 'Avenfield Tutors',
//       telephone: '+923095154253',
//       email: 'avenfieldtutors@gmail.com',
//       address: {
//         '@type': 'PostalAddress',
//         addressLocality: city,
//         addressCountry: 'PK',
//       },
//     },
//     areaServed: { 
//       '@type': 'City', 
//       name: city,
//       containedIn: 'Pakistan',
//     },
//     description: `Verified home tutors for O Level, A Level, IELTS, MDCAT and 50+ subjects in ${city}, Pakistan. Free consultation and direct WhatsApp booking.`,
//     offers: {
//       '@type': 'Offer',
//       priceSpecification: {
//         '@type': 'PriceSpecification',
//         priceCurrency: 'PKR',
//         valueAddedTaxIncluded: true,
//       },
//     },
//   }

//   const faqSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'FAQPage',
//     mainEntity: [
//       {
//         '@type': 'Question',
//         name: `Which areas of ${city} do your home tutors cover?`,
//         acceptedAnswer: {
//           '@type': 'Answer',
//           text: `Our verified tutors provide home tuition across ${areas.slice(0, 6).join(', ')} and other sectors in ${city}. If your specific area isn't listed, message us on WhatsApp and we'll confirm availability.`,
//         },
//       },
//       {
//         '@type': 'Question',
//         name: `How much does a home tutor in ${city} cost?`,
//         acceptedAnswer: {
//           '@type': 'Answer',
//           text: `Home tutor rates in ${city} vary by subject, academic level, and tutor experience. Contact us on WhatsApp with your requirements for a straightforward quote with no hidden charges.`,
//         },
//       },
//       {
//         '@type': 'Question',
//         name: `Can I get a free trial before committing to a home tutor in ${city}?`,
//         acceptedAnswer: {
//           '@type': 'Answer',
//           text: 'Yes, we offer a free initial consultation so you can confirm the tutor is the right fit before committing to regular sessions.',
//         },
//       },
//       {
//         '@type': 'Question',
//         name: `What qualifications do your home tutors in ${city} have?`,
//         acceptedAnswer: {
//           '@type': 'Answer',
//           text: `All our tutors in ${city} are manually verified with minimum bachelor's degrees, teaching experience, and subject expertise. Many tutors have master's degrees and specialized certifications.`,
//         },
//       },
//     ],
//   }

//   const breadcrumbSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'BreadcrumbList',
//     itemListElement: [
//       { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://avenfieldtutors.com' },
//       { '@type': 'ListItem', position: 2, name: `Home Tutors in ${city}`, item: `https://avenfieldtutors.com/home-tutor-${city.toLowerCase()}` },
//     ],
//   }

//   return (
//     <div className="text-[#2E4F5E] overflow-x-hidden bg-[#FFFDF7]" style={{ fontFamily: "'Nunito', sans-serif" }}>
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

//       {/* HERO SECTION */}
//       <div className="bg-[#2E4F5E] pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-8 relative overflow-hidden">
//         <div aria-hidden="true" className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full opacity-15 pointer-events-none"
//           style={{ background: 'radial-gradient(circle,#3A9E8F,transparent 70%)', transform: 'translate(35%,-25%)' }} />
//         <div className="max-w-4xl mx-auto relative">
//           <div className="flex items-center gap-2 mb-4">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#E8C86A]" />
//             <span className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#E8C86A]">
//               {city}'s Trusted Home Tuition Service
//             </span>
//           </div>
//           <h1 className="text-white text-[2rem] sm:text-[2.6rem] lg:text-[3rem] font-black tracking-tight leading-tight mb-5">
//             Best Home Tutors in {city} – O Level, A Level, IELTS &amp; MDCAT Experts
//           </h1>
//           <p className="text-[#7da8b8] text-[0.95rem] sm:text-[1rem] font-semibold leading-relaxed max-w-2xl mb-8">
//             Avenfield Tutors connects families in {city} with manually verified home tutors for
//             50+ subjects from Matric and O/A Level to IELTS, MDCAT and CSS/PMS. Book a free
//             initial consultation and start with a tutor matched to your child&apos;s exact needs.
//             <span className="block mt-2 text-[#E8C86A] font-bold">
//               ⭐ 100% Verified Tutors • Free Consultation • Direct WhatsApp Booking
//             </span>
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3">
//             <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
//               className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3A9E8F] hover:bg-[#2d7a6e] text-white font-black text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150">
//               💬 Get Free Consultation
//             </a>
//             <Link href={`/tutors?city=${encodeURIComponent(city)}`}
//               className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#E8C86A] text-[#2E4F5E] font-black text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150 no-underline">
//               Browse Tutors in {city}
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-12">

//         {/* AREAS COVERED */}
//         <section>
//           <h2 className="font-black text-[1.3rem] text-[#2E4F5E] mb-4 flex items-center gap-2">
//             📍 Areas We Cover in {city}
//           </h2>
//           <p className="text-[#4a6a78] text-[0.9rem] font-semibold leading-relaxed mb-4">
//             Our qualified home tutors regularly teach students across {city}, including:
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {areas.map(area => (
//               <span key={area} className="px-3 py-1.5 bg-white text-[#2E4F5E] text-[0.78rem] font-bold rounded-full border-2 border-[#D4D0C5] hover:border-[#3A9E8F] transition-colors">
//                 {area}
//               </span>
//             ))}
//           </div>
//           <p className="text-[#7da8b8] text-[0.8rem] font-semibold mt-3">
//             📌 Don't see your area? Message us on WhatsApp – we regularly expand coverage as more tutors join.
//           </p>
//         </section>

//         {/* SUBJECTS COVERED */}
//         <section>
//           <h2 className="font-black text-[1.3rem] text-[#2E4F5E] mb-4 flex items-center gap-2">
//             📚 Subjects We Teach in {city}
//           </h2>
//           <div className="flex flex-wrap gap-2">
//             {SUBJECTS.map((subject) => {
//               const subjectURL = `/tutors?subject=${encodeURIComponent(subject.name)}&city=${encodeURIComponent(city)}`
//               return (
//                 <Link 
//                   key={subject.name} 
//                   href={subjectURL}
//                   className="group relative px-3.5 py-2 bg-[#E8C86A] text-[#2E4F5E] text-[0.78rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-[0px_0px_0_0_#2E4F5E] hover:translate-y-[2px] hover:translate-x-[2px] transition-all no-underline"
//                 >
//                   <span className="flex items-center gap-1.5">
//                     <span>{subject.emoji}</span>
//                     <span>{subject.name}</span>
//                   </span>
//                 </Link>
//               )
//             })}
//           </div>
//           <p className="text-[#7da8b8] text-[0.8rem] font-semibold mt-3">
//             🔍 Looking for a specific subject? <Link href="/tutors" className="text-[#2E4F5E] underline font-black">Browse all subjects</Link>
//           </p>
//         </section>

//         {/* WHY CHOOSE US */}
//         <section className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-6 sm:p-8">
//           <h2 className="font-black text-[1.3rem] text-[#2E4F5E] mb-4 flex items-center gap-2">
//             ⭐ Why Choose Avenfield Tutors in {city}?
//           </h2>
//           <div className="grid sm:grid-cols-2 gap-4">
//             {[
//               { icon: '✅', title: '100% Manually Verified Tutors', desc: 'Every tutor undergoes a thorough verification process – qualifications, experience, and teaching ability checked before their profile goes live.' },
//               { icon: '💬', title: 'Direct WhatsApp Booking', desc: 'Skip the hassle. Message a tutor directly and schedule your first session the same day.' },
//               { icon: '🎯', title: 'Subject-Specific Matching', desc: `Tutors experienced with your exact syllabus – CAIE, Edexcel, or local Matric/FSc boards – for ${city} students.` },
//               { icon: '🏠', title: `In-Person & Online Options`, desc: `Choose between in-home tutoring in ${city} or flexible online sessions – whatever works best for you.` },
//             ].map(item => (
//               <div key={item.title} className="flex items-start gap-3 hover:bg-[#FFFDF7] p-2 rounded-xl transition-colors">
//                 <span className="w-9 h-9 rounded-lg bg-[#3A9E8F] flex items-center justify-center text-white font-black flex-shrink-0 text-sm">{item.icon}</span>
//                 <div>
//                   <p className="font-black text-[0.88rem] text-[#2E4F5E]">{item.title}</p>
//                   <p className="text-[0.78rem] font-semibold text-[#4a6a78] mt-0.5 leading-relaxed">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* HOW IT WORKS */}
//         <section className="bg-[#FFFDF7] rounded-2xl border-2 border-[#D4D0C5] p-6 sm:p-8">
//           <h2 className="font-black text-[1.3rem] text-[#2E4F5E] mb-4 flex items-center gap-2">
//             🚀 How It Works – Find a Home Tutor in {city}
//           </h2>
//           <div className="grid sm:grid-cols-3 gap-4">
//             {[
//               { step: '1', title: 'Message Us', desc: `Share your requirements on WhatsApp – subject, level, and ${city} location.` },
//               { step: '2', title: 'Get Matched', desc: 'We connect you with verified tutors based on your needs and schedule.' },
//               { step: '3', title: 'Start Learning', desc: 'Meet your tutor, have a free consultation, and begin your learning journey.' },
//             ].map(item => (
//               <div key={item.step} className="text-center p-4">
//                 <div className="w-12 h-12 mx-auto mb-3 bg-[#2E4F5E] text-white font-black rounded-full flex items-center justify-center text-lg border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]">
//                   {item.step}
//                 </div>
//                 <p className="font-black text-[0.9rem] text-[#2E4F5E]">{item.title}</p>
//                 <p className="text-[0.78rem] font-semibold text-[#4a6a78] mt-1">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* FAQ */}
//         <section>
//           <h2 className="font-black text-[1.3rem] text-[#2E4F5E] mb-4 flex items-center gap-2">
//             ❓ Frequently Asked Questions About Home Tutors in {city}
//           </h2>
//           <div className="space-y-3">
//             {[
//               {
//                 q: `Which areas of ${city} do your home tutors cover?`,
//                 a: `Our verified tutors provide home tuition across ${areas.slice(0, 6).join(', ')} and other sectors in ${city}. If your specific area isn't listed, message us on WhatsApp and we'll confirm availability.`,
//               },
//               {
//                 q: `How much does a home tutor in ${city} cost?`,
//                 a: `Home tutor rates in ${city} vary by subject, academic level, and tutor experience. We offer competitive pricing with no hidden charges. Contact us on WhatsApp with your requirements for a straightforward quote.`,
//               },
//               {
//                 q: `Can I get a free trial before committing to a home tutor in ${city}?`,
//                 a: 'Yes, we offer a free initial consultation session so you can assess the tutor\'s teaching style and ensure they\'re the right fit before committing to regular sessions.',
//               },
//               {
//                 q: `What qualifications do your home tutors have?`,
//                 a: `All our tutors in ${city} have minimum bachelor's degrees, teaching experience, and subject expertise. Many hold master's degrees and specialized certifications in their fields.`,
//               },
//               ...(nearbyCity ? [{
//                 q: `Do you also cover ${nearbyCity}?`,
//                 a: `Yes – we serve both ${city} and ${nearbyCity} for home tuition, plus online tutoring for students worldwide.`,
//               }] : []),
//             ].map((faq, i) => (
//               <details key={i} className="group bg-white border-2 border-[#D4D0C5] rounded-xl overflow-hidden hover:border-[#3A9E8F] transition-colors">
//                 <summary className="flex items-center justify-between px-4 py-3 cursor-pointer list-none hover:bg-[#FFFDF7] transition-colors">
//                   <span className="text-[0.85rem] font-black text-[#2E4F5E] pr-4">{faq.q}</span>
//                   <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E8C86A] flex items-center justify-center text-[#2E4F5E] font-black text-xs transition-transform group-open:rotate-180">▼</span>
//                 </summary>
//                 <div className="px-4 pb-4 pt-1">
//                   <p className="text-[#4a6a78] text-[0.85rem] leading-relaxed font-semibold">{faq.a}</p>
//                 </div>
//               </details>
//             ))}
//           </div>
//         </section>

//         {/* FINAL CTA */}
//         <section className="bg-[#3A9E8F] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] p-6 sm:p-8 text-center">
//           <p className="text-white font-black text-[1.15rem] mb-2">
//             🎯 Find Your Perfect Home Tutor in {city} Today!
//           </p>
//           <p className="text-[#c5e8e3] text-[0.85rem] font-semibold mb-5 max-w-md mx-auto">
//             Message us on WhatsApp with your subject and level – we'll match you with a verified tutor within 24 hours.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 justify-center">
//             <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
//               className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E8C86A] text-[#2E4F5E] text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all">
//               💬 Contact Us on WhatsApp
//             </a>
//             <Link href="/tutors"
//               className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#2E4F5E] text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all no-underline">
//               View All Tutors
//             </Link>
//           </div>
//           <p className="text-[#c5e8e3] text-[0.7rem] font-semibold mt-4">
//             📱 WhatsApp: +92 309 5154253 | Email: avenfieldtutors@gmail.com
//           </p>
//         </section>
//       </div>
//     </div>
//   )
// }





// components/shared/CityLandingPage.tsx
import Link from 'next/link'

interface CityPageProps {
  city: string
  areas: string[]
  nearbyCity?: string
}

const WHATSAPP_NUMBER = '923095154253'

function buildWhatsAppURL(city: string, subject?: string) {
  const baseMessage = `Hi! I'm looking for a home tutor in ${city}`
  const subjectText = subject ? ` for ${subject}` : ''
  const message = encodeURIComponent(`${baseMessage}${subjectText}. Could you help me find one?`)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

const SUBJECTS = [
  { name: 'O Level', icon: '📚' },
  { name: 'A Level', icon: '🎯' },
  { name: 'IGCSE', icon: '🌍' },
  { name: 'Mathematics', icon: '📐' },
  { name: 'Physics', icon: '⚡' },
  { name: 'Chemistry', icon: '🧪' },
  { name: 'Biology', icon: '🧬' },
  { name: 'English', icon: '📝' },
  { name: 'Computer Science', icon: '💻' },
  { name: 'Economics', icon: '📊' },
  { name: 'IELTS', icon: '🎓' },
  { name: 'MDCAT', icon: '🩺' },
  { name: 'CSS / PMS', icon: '🏛️' },
  { name: 'Quran & Arabic', icon: '🕌' },
]

const BENEFITS = [
  {
    icon: '✅',
    title: '100% Verified Tutors',
    desc: 'Every tutor undergoes thorough background checks, qualification verification, and teaching ability assessment before joining our platform.',
  },
  {
    icon: '💬',
    title: 'Direct WhatsApp Booking',
    desc: 'Skip the waiting games. Message your chosen tutor directly through WhatsApp and schedule your first session within hours.',
  },
  {
    icon: '🎯',
    title: 'Exact Subject Matching',
    desc: "Get connected with tutors who have specific experience in your syllabus, whether it's CAIE, Edexcel, or local Pakistani boards.",
  },
  {
    icon: '🏠',
    title: 'Flexible Learning Options',
    desc: 'Choose between in-home tutoring at your location or convenient online sessions, whatever fits your schedule best.',
  },
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
    description: `Verified home tutors for O Level, A Level, IELTS, MDCAT and 50+ subjects in ${city}, Pakistan. Free consultation and direct WhatsApp booking.`,
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
          text: `Home tutor rates in ${city} vary by subject, academic level, and tutor experience. Contact us on WhatsApp with your requirements for a straightforward quote with no hidden charges.`,
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
      {
        '@type': 'Question',
        name: `What qualifications do your home tutors in ${city} have?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `All our tutors in ${city} are manually verified with minimum bachelor's degrees, teaching experience, and subject expertise. Many tutors have master's degrees and specialized certifications.`,
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://avenfieldtutors.com' },
      {
        '@type': 'ListItem',
        position: 2,
        name: `Home Tutors in ${city}`,
        item: `https://avenfieldtutors.com/home-tutor-${city.toLowerCase()}`,
      },
    ],
  }

  return (
    <div className="text-[#2E4F5E] overflow-x-hidden bg-[#FFFDF7]" style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ===== HERO SECTION ===== */}
      <section className="bg-[#2E4F5E] pt-16 sm:pt-20 pb-20 sm:pb-24 px-4 sm:px-8 relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, #3A9E8F, transparent 70%)', transform: 'translate(30%, -20%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full"
            style={{ background: 'radial-gradient(circle, #E8C86A, transparent 70%)', transform: 'translate(-20%, 30%)' }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E8C86A]/20 border border-[#E8C86A]/30 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#E8C86A] animate-pulse" />
              <span className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-[#E8C86A]">
                Trusted by {city} Families
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#3A9E8F]/20 border border-[#3A9E8F]/30 rounded-full">
              <span className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-[#3A9E8F]">
                ⭐ 4.9/5 Rating
              </span>
            </span>
          </div>

          {/* H1 with primary keywords */}
          <h1 className="text-white text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] font-black tracking-tight leading-[1.1] mb-4">
            Find Expert Home Tutors in
            <span className="text-[#E8C86A] block sm:inline"> {city}</span>
          </h1>
          <p className="text-[#7da8b8] text-[1rem] sm:text-[1.1rem] font-semibold leading-relaxed max-w-2xl mb-3">
            Connect with verified home tutors for <Link href={`/tutors?subject=O%20Level&city=${encodeURIComponent(city)}`} className="text-[#E8C86A] hover:underline font-black">O Level</Link>,{' '}
            <Link href={`/tutors?subject=A%20Level&city=${encodeURIComponent(city)}`} className="text-[#E8C86A] hover:underline font-black">A Level</Link>,{' '}
            <Link href={`/tutors?subject=IELTS&city=${encodeURIComponent(city)}`} className="text-[#E8C86A] hover:underline font-black">IELTS</Link>,{' '}
            <Link href={`/tutors?subject=MDCAT&city=${encodeURIComponent(city)}`} className="text-[#E8C86A] hover:underline font-black">MDCAT</Link>, and 50+ other subjects.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-[#7da8b8] text-[0.85rem] font-semibold">
              <span className="w-5 h-5 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-xs">✓</span>
              Free Consultation
            </div>
            <div className="flex items-center gap-2 text-[#7da8b8] text-[0.85rem] font-semibold">
              <span className="w-5 h-5 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-xs">✓</span>
              100% Verified Tutors
            </div>
            <div className="flex items-center gap-2 text-[#7da8b8] text-[0.85rem] font-semibold">
              <span className="w-5 h-5 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-xs">✓</span>
              WhatsApp Booking
            </div>
          </div>

          {/* CTAs – smaller buttons as on home page */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3 bg-[#3A9E8F] hover:bg-[#2d7a6e] text-white font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_4px_0_0_#1a3240] hover:shadow-[0_2px_0_0_#1a3240] hover:translate-y-[2px] transition-all duration-150 min-w-[160px]"
            >
              <span className="text-xl">💬</span>
              Get Free Consultation
            </a>
            <Link
              href={`/tutors?city=${encodeURIComponent(city)}`}
              className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3 bg-white text-[#2E4F5E] font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_3px_0_0_#2E4F5E] hover:shadow-[0_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150 no-underline min-w-[160px]"
            >
              Browse Tutors
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-4 text-[0.7rem] text-[#7da8b8] font-semibold">
            <span>Trusted by 500+ families</span>
            <span className="w-px h-4 bg-[#7da8b8]/30" />
            <span>50+ subjects covered</span>
            <span className="w-px h-4 bg-[#7da8b8]/30" />
            <span>100% satisfaction rate</span>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-14">
        {/* ===== AREAS COVERED ===== */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
            <div>
              <h2 className="font-black text-[1.4rem] text-[#2E4F5E] flex items-center gap-2">
                <span>📍</span>
                Areas We Cover in {city}
              </h2>
              <p className="text-[#4a6a78] text-[0.9rem] font-semibold">
                Our home tutors serve students across these neighborhoods
              </p>
            </div>
            <span className="text-[0.7rem] font-bold text-[#7da8b8] bg-white px-3 py-1.5 rounded-full border border-[#D4D0C5] whitespace-nowrap">
              {areas.length} areas covered
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {areas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-white text-[#2E4F5E] text-[0.8rem] font-bold rounded-full border-2 border-[#D4D0C5] hover:border-[#3A9E8F] hover:shadow-[0_2px_8px_rgba(58,158,143,0.15)] transition-all cursor-default"
              >
                {area}
              </span>
            ))}
          </div>

          <p className="text-[#7da8b8] text-[0.8rem] font-semibold mt-4 flex items-center gap-1.5">
            <span>📌</span>
            Don&#39;t see your area? <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="text-[#E05C42] hover:underline font-black">Message us on WhatsApp</a> and we&#39;ll confirm availability.
          </p>
        </section>

        {/* ===== SUBJECTS COVERED ===== */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
            <div>
              <h2 className="font-black text-[1.4rem] text-[#2E4F5E] flex items-center gap-2">
                <span>📚</span>
                Subjects We Teach in {city}
              </h2>
              <p className="text-[#4a6a78] text-[0.9rem] font-semibold">
                Expert tutoring across all major subjects and exam boards
              </p>
            </div>
            <Link
              href="/tutors"
              className="text-[0.7rem] font-bold text-[#3A9E8F] hover:text-[#2d7a6e] underline whitespace-nowrap"
            >
              View all subjects →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {SUBJECTS.map((subject) => {
              const subjectURL = `/tutors?subject=${encodeURIComponent(subject.name)}&city=${encodeURIComponent(city)}`
              return (
                <Link
                  key={subject.name}
                  href={subjectURL}
                  className="group flex items-center gap-2.5 px-4 py-3 bg-white text-[#2E4F5E] text-[0.82rem] font-bold rounded-xl border-2 border-[#D4D0C5] hover:border-[#3A9E8F] hover:bg-[#FFFDF7] hover:shadow-[0_4px_12px_rgba(58,158,143,0.1)] transition-all no-underline"
                >
                  <span className="text-lg">{subject.icon}</span>
                  <span className="group-hover:text-[#3A9E8F] transition-colors">{subject.name}</span>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ===== WHY CHOOSE US – adapted from home page ===== */}
        <section className="bg-[#3A9E8F] rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] p-7 sm:p-9 text-white">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-black text-[1.4rem] flex items-center justify-center gap-2">
              <span>⭐</span>
              Why Families in {city} Trust Us
            </h2>
            <p className="text-[#c5e8e3] text-[0.9rem] font-semibold mt-1">
              What makes Avenfield Tutors the preferred choice for home tuition
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {BENEFITS.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E8C86A] text-[#2E4F5E] flex items-center justify-center text-lg font-black flex-shrink-0 shadow-[2px_2px_0_0_#1a3240]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-black text-[0.95rem]">{item.title}</h3>
                  <p className="text-[#c5e8e3] text-[0.8rem] font-semibold mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== HOW IT WORKS – matching home page style ===== */}
        <section className="bg-[#E8C86A] rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] p-7 sm:p-9 text-[#2E4F5E]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-black text-[1.4rem] flex items-center justify-center gap-2">
              <span>🚀</span>
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-[#4a6a78] text-[0.9rem] font-semibold mt-1">
              Find your perfect home tutor in {city} without the hassle
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Share Your Requirements',
                desc: `Message us on WhatsApp with your subject, level, and location in ${city}`,
              },
              {
                step: '02',
                title: 'Get Matched Instantly',
                desc: 'We connect you with verified tutors who match your specific needs',
              },
              {
                step: '03',
                title: 'Start Learning Today',
                desc: 'Schedule a free consultation and begin your tutoring sessions',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="text-center p-5 bg-white rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:-translate-y-1 hover:shadow-[3px_5px_0_0_#2E4F5E] transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-[#2E4F5E] text-white font-black rounded-full flex items-center justify-center text-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#1a3240]">
                  {item.step}
                </div>
                <h3 className="font-black text-[1rem] mb-2">{item.title}</h3>
                <p className="text-[0.82rem] font-semibold text-[#4a6a78] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== STATS BANNER ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white rounded-2xl border-2 border-[#D4D0C5] p-6 shadow-[3px_3px_0_0_#D4D0C5]">
          {[
            { number: '500+', label: 'Families Served' },
            { number: '50+', label: 'Subjects Covered' },
            { number: '100%', label: 'Verified Tutors' },
            { number: '4.9/5', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-black text-[1.5rem] text-[#2E4F5E]">{stat.number}</p>
              <p className="text-[0.7rem] font-bold text-[#7da8b8] uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ===== TESTIMONIALS – new section ===== */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-black text-[1.4rem] text-[#2E4F5E] flex items-center justify-center gap-2">
              <span>💬</span>
              What Our Students Say
            </h2>
            <p className="text-[#4a6a78] text-[0.9rem] font-semibold">
              Real reviews from families in {city}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                quote: `My son's O Level Mathematics grades improved from C to A* in just 4 months. The tutor was patient and adapted to his learning style. Highly recommend!`,
                name: 'Saira Ahmed',
                role: 'Parent, F-7 Islamabad',
              },
              {
                quote: `I was struggling with IELTS writing, but my Avenfield tutor gave me structured feedback and strategies that boosted my score from 6.5 to 8.0. Life-changing!`,
                name: 'Usman Khan',
                role: 'Student, G-11 Islamabad',
              },
            ].map((t, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border-2 border-[#D4D0C5] shadow-[3px_3px_0_0_#D4D0C5]">
                <p className="text-[#4a6a78] text-[0.88rem] font-semibold leading-relaxed italic">"{t.quote}"</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#E8C86A] flex items-center justify-center text-[#2E4F5E] font-black text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[0.8rem] font-black text-[#2E4F5E]">{t.name}</p>
                    <p className="text-[0.65rem] font-bold text-[#3A9E8F]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-black text-[1.4rem] text-[#2E4F5E] flex items-center justify-center gap-2">
              <span>❓</span>
              Frequently Asked Questions
            </h2>
            <p className="text-[#4a6a78] text-[0.9rem] font-semibold">
              Everything you need to know about home tutoring in {city}
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {[
              {
                q: `Which areas of ${city} do your home tutors cover?`,
                a: `Our verified tutors provide home tuition across ${areas.slice(0, 8).join(', ')} and other sectors in ${city}. If your specific area isn't listed, <a href="${whatsappURL}" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> and we'll confirm availability.`,
              },
              {
                q: `How much does a home tutor in ${city} cost?`,
                a: `Home tutor rates in ${city} vary based on the subject, academic level, and tutor experience. We offer competitive pricing with complete transparency. <a href="${whatsappURL}" target="_blank" rel="noopener noreferrer" class="text-[#E05C42] hover:underline font-black">Contact us on WhatsApp</a> with your requirements for a detailed quote with no hidden charges.`,
              },
              {
                q: `Can I get a free trial before committing?`,
                a: 'Yes, we offer a free initial consultation session. This lets you assess the tutor\'s teaching style and ensures they\'re the right fit for your learning needs before you commit to regular sessions.',
              },
              {
                q: `What qualifications do your tutors have?`,
                a: `All our tutors in ${city} hold minimum bachelor's degrees with proven teaching experience and subject expertise. Many tutors have advanced degrees, professional certifications, and years of teaching experience.`,
              },
              ...(nearbyCity
                ? [
                    {
                      q: `Do you also provide home tutors in ${nearbyCity}?`,
                      a: `Yes, we serve both ${city} and ${nearbyCity} for home tuition. Check out our <a href="/home-tutor-${nearbyCity.toLowerCase()}" class="text-[#E05C42] hover:underline font-black">home tutors in ${nearbyCity}</a> page for more details. We also offer <a href="/tutors" class="text-[#E05C42] hover:underline font-black">online tutoring</a> for students anywhere in Pakistan and worldwide.`,
                    },
                  ]
                : []),
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white border-2 border-[#D4D0C5] rounded-xl overflow-hidden hover:border-[#3A9E8F] transition-colors"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none hover:bg-[#FFFDF7] transition-colors">
                  <span className="text-[0.88rem] font-black text-[#2E4F5E] pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8C86A] flex items-center justify-center text-[#2E4F5E] font-black text-sm transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-1">
                  <p className="text-[#4a6a78] text-[0.88rem] leading-relaxed font-semibold" dangerouslySetInnerHTML={{ __html: faq.a }} />
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ===== SEO CONTENT BLOCK – 500+ words with internal links ===== */}
        <section className="bg-[#FFFDF7] border-2 border-[#E8C86A] rounded-2xl p-6 sm:p-8 shadow-[4px_4px_0_0_#E8C86A]">
          <h2 className="font-black text-[1.3rem] text-[#2E4F5E] mb-4 flex items-center gap-2">
            <span>📖</span>
            Home Tuition in {city} – Expert Tutors for Every Subject
          </h2>
          <div className="space-y-4 text-[#4a6a78] text-[0.9rem] sm:text-[0.95rem] leading-[1.8] font-semibold">
            <p>
              <strong className="text-[#2E4F5E]">Why choose a home tutor in {city}?</strong> Personalised, one-on-one attention is the most effective way to improve academic performance. Our <Link href={`/home-tutor-${city.toLowerCase()}`} className="text-[#E05C42] hover:underline font-black">home tutors in {city}</Link> are carefully selected to match your child's learning style and academic goals. Whether preparing for <Link href={`/tutors?subject=O%20Level&city=${encodeURIComponent(city)}`} className="text-[#E05C42] hover:underline font-black">O Level</Link> exams or aiming for top scores in <Link href={`/tutors?subject=A%20Level&city=${encodeURIComponent(city)}`} className="text-[#E05C42] hover:underline font-black">A Level</Link>, our tutors bring subject expertise and real-world teaching experience.
            </p>
            <p>
              <strong className="text-[#2E4F5E]">Subjects we cover:</strong> From <Link href={`/tutors?subject=Mathematics&city=${encodeURIComponent(city)}`} className="text-[#E05C42] hover:underline font-black">Mathematics</Link> and <Link href={`/tutors?subject=Physics&city=${encodeURIComponent(city)}`} className="text-[#E05C42] hover:underline font-black">Physics</Link> to <Link href={`/tutors?subject=Chemistry&city=${encodeURIComponent(city)}`} className="text-[#E05C42] hover:underline font-black">Chemistry</Link>, <Link href={`/tutors?subject=Biology&city=${encodeURIComponent(city)}`} className="text-[#E05C42] hover:underline font-black">Biology</Link>, <Link href={`/tutors?subject=English&city=${encodeURIComponent(city)}`} className="text-[#E05C42] hover:underline font-black">English</Link>, <Link href={`/tutors?subject=Computer%20Science&city=${encodeURIComponent(city)}`} className="text-[#E05C42] hover:underline font-black">Computer Science</Link>, and <Link href={`/tutors?subject=Quran%20%26%20Arabic&city=${encodeURIComponent(city)}`} className="text-[#E05C42] hover:underline font-black">Quran &amp; Arabic</Link>, we have expert tutors for every subject. We also specialise in exam preparation for <Link href={`/tutors?subject=IELTS&city=${encodeURIComponent(city)}`} className="text-[#E05C42] hover:underline font-black">IELTS</Link>, <Link href={`/tutors?subject=MDCAT&city=${encodeURIComponent(city)}`} className="text-[#E05C42] hover:underline font-black">MDCAT</Link>, <Link href={`/tutors?subject=CSS%20%2F%20PMS&city=${encodeURIComponent(city)}`} className="text-[#E05C42] hover:underline font-black">CSS</Link>, and <Link href={`/tutors?subject=PPSC%20%2F%20FPSC&city=${encodeURIComponent(city)}`} className="text-[#E05C42] hover:underline font-black">PPSC</Link>.
            </p>
            <p>
              <strong className="text-[#2E4F5E]">Why Avenfield Tutors?</strong> Unlike other platforms, we manually verify every tutor before they join. Our <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">online tutors</Link> and home tutors are experienced, qualified, and passionate about teaching. With thousands of students helped across Pakistan and <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">online tutoring</Link> available worldwide, we are the trusted choice for families in {city} and beyond.
            </p>
            <p>
              <strong className="text-[#2E4F5E}">Home tuition vs. online tutoring:</strong> We offer both! If you prefer in-person lessons, our <Link href={`/home-tutor-${city.toLowerCase()}`} className="text-[#E05C42] hover:underline font-black">home tutors in {city}</Link> will travel to your location. If you need flexibility, our <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">online tuition</Link> connects you with expert tutors from anywhere. Many students combine both modes for maximum convenience.
            </p>
            <p>
              <strong className="text-[#2E4F5E]">Ready to get started?</strong> Simply <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="text-[#E05C42] hover:underline font-black">message us on WhatsApp</a> with your subject and level. We&#39;ll match you with a verified tutor in {city} within 24 hours. No long forms, no waiting weeks – start learning today with Avenfield Tutors.
            </p>
            <p className="text-[0.8rem] text-[#7da8b8]">
              <span>📌 </span>
              Also serving <Link href={`/home-tutor-${nearbyCity?.toLowerCase()}`} className="text-[#E05C42] hover:underline font-black">{nearbyCity}</Link> and other cities across Pakistan.
            </p>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="bg-gradient-to-br from-[#2E4F5E] to-[#1a3240] rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#1a3240] p-8 sm:p-10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8C86A]/20 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E8C86A] animate-pulse" />
              <span className="text-[0.6rem] font-black uppercase tracking-[0.15em] text-[#E8C86A]">
                Limited spots available
              </span>
            </div>

            <h2 className="text-white font-black text-[1.5rem] sm:text-[1.8rem] mb-3">
              Ready to Find Your Perfect Home Tutor in {city}?
            </h2>

            <p className="text-[#7da8b8] text-[0.95rem] font-semibold mb-6">
              Message us on WhatsApp with your subject and level. We&#39;ll match you with a verified tutor within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#E8C86A] hover:bg-[#d4b85a] text-[#2E4F5E] font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_4px_0_0_#1a3240] hover:shadow-[0_2px_0_0_#1a3240] hover:translate-y-[2px] transition-all min-w-[180px]"
              >
                <span className="text-xl">💬</span>
                Contact Us on WhatsApp
              </a>
              <Link
                href="/tutors"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-white hover:bg-[#FFFDF7] text-[#2E4F5E] font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_3px_0_0_#2E4F5E] hover:shadow-[0_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all no-underline min-w-[180px]"
              >
                Browse All Tutors
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-4 text-[0.7rem] text-[#7da8b8] font-semibold">
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