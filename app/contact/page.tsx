


// import type { Metadata } from 'next'
// import Link from 'next/link'

// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
// const WHATSAPP_NUMBER = '923095154253'
// const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I have a question about Avenfield Tutors.')}`

// export const metadata: Metadata = {
//   title: 'Contact Us — Find a Tutor or Ask a Question',
//   description:
//     'Get in touch with Avenfield Tutors via WhatsApp, email or phone. We reply within an hour. Serving students across Pakistan, UAE & UK.',
//   keywords: [
//     'contact Avenfield Tutors', 'tutoring help Pakistan', 'find a tutor contact',
//     'Avenfield Tutors WhatsApp', 'Avenfield Tutors email',
//   ],
//   openGraph: {
//     title: 'Contact Avenfield Tutors | Avenfield Tutors',
//     description: 'Get in touch via WhatsApp, email or phone. We reply within an hour.',
//     type: 'website',
//     locale: 'en_PK',
//     siteName: 'Avenfield Tutors',
//     url: `${SITE_URL}/contact`,
//     images: [{ url: `${SITE_URL}/avenfield.jpeg`, width: 1200, height: 630, alt: 'Contact Avenfield Tutors' }],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Contact Avenfield Tutors',
//     description: 'Get in touch via WhatsApp, email or phone. We reply within an hour.',
//   },
//   alternates: {
//     canonical: `${SITE_URL}/contact`,
//   },
// }

// function Eyebrow({ text, light = false, center = false }: { text: string; light?: boolean; center?: boolean }) {
//   return (
//     <div className={`flex items-center gap-2 mb-3 ${center ? 'justify-center' : ''}`} aria-hidden="true">
//       <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
//       <span className={`text-[0.62rem] font-black uppercase tracking-[0.22em] ${light ? 'text-[#E8C86A]' : 'text-[#E05C42]'}`}>{text}</span>
//       <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
//     </div>
//   )
// }

// function Wiggle({ color = '#E8C86A' }: { color?: string }) {
//   return (
//     <svg viewBox="0 0 160 10" fill="none" className="absolute -bottom-1 left-0 w-full h-3 pointer-events-none" aria-hidden="true">
//       <path d="M2 5 C20 1,38 9,56 5 C74 1,92 9,110 5 C128 1,146 9,158 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
//     </svg>
//   )
// }

// const faqs = [
//   {
//     q: 'How quickly will you reply?',
//     a: 'We aim to reply within an hour during our active hours, and usually much faster on WhatsApp. It\'s the quickest way to reach us.',
//   },
//   {
//     q: 'Is there a fee for the initial consultation?',
//     a: 'No. Telling us your subject, level, and preferred learning mode (online or home) is completely free, and we\'ll recommend a matching verified tutor at no cost.',
//   },
//   {
//     q: 'Which cities and countries do you cover?',
//     a: 'Home tuition is available across major Pakistani cities including Lahore, Karachi, Islamabad, Rawalpindi and Faisalabad. Online tutoring is available worldwide, including UAE and the UK.',
//   },
//   {
//     q: 'I messaged but haven\'t heard back what should I do?',
//     a: 'If it\'s been more than a few hours, please resend your message on WhatsApp occasionally messages get missed during busy periods, and we want to make sure yours doesn\'t.',
//   },
// ]

// function ContactPageSchema() {
//   const contactSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'ContactPage',
//     name: 'Contact Avenfield Tutors',
//     url: `${SITE_URL}/contact`,
//     isPartOf: { '@type': 'WebSite', name: 'Avenfield Tutors', url: SITE_URL },
//   }
//   const breadcrumbSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'BreadcrumbList',
//     itemListElement: [
//       { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
//       { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
//     ],
//   }
//   const faqSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'FAQPage',
//     mainEntity: faqs.map(f => ({
//       '@type': 'Question',
//       name: f.q,
//       acceptedAnswer: { '@type': 'Answer', text: f.a },
//     })),
//   }
//   return (
//     <>
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
//     </>
//   )
// }

// export default function ContactPage() {
//   return (
//     <div className="text-[#2E4F5E] overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>
//       <ContactPageSchema />

//       <div className="bg-[#FFFDF7] min-h-screen">

//         {/* ── HERO ── */}
//         <section className="bg-[#2E4F5E] pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
//           <div aria-hidden="true" className="absolute top-0 right-0 w-64 sm:w-80 md:w-[400px] h-64 sm:h-80 md:h-[400px] rounded-full opacity-10 pointer-events-none"
//             style={{ background: 'radial-gradient(circle,#3A9E8F,transparent 70%)', transform: 'translate(40%,-30%)' }} />
//           <div aria-hidden="true" className="absolute bottom-0 left-0 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-full opacity-8 pointer-events-none"
//             style={{ background: 'radial-gradient(circle,#E8C86A,transparent 70%)', transform: 'translate(-30%,30%)' }} />
//           <div aria-hidden="true"
//             className="absolute inset-0 opacity-[0.04]"
//             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,#E8C86A 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

//           <div className="relative max-w-3xl mx-auto text-center">
//             <Eyebrow text="Get In Touch" light center />
//             <h1 className="text-white text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-black leading-[1.1] tracking-[-0.025em] mb-4">
//               Let's Find You the{' '}
//               <span className="relative inline-block text-[#E8C86A]">
//                 <span className="relative z-10">Right Tutor</span>
//                 <Wiggle color="#E05C42" />
//               </span>
//             </h1>
//             <p className="text-[#7da8b8] text-[0.9rem] sm:text-[1rem] font-semibold leading-relaxed max-w-lg mx-auto mb-8">
//               Need help finding a tutor? Not sure which subject or level fits best? Send us a message
//                we reply within an hour. 🤝
//             </p>

//             {/* Stat chips — same pattern used on /tutors and homepage */}
//             <div className="flex flex-wrap justify-center gap-2.5">
//               {[
//                 { v: '< 1 hr', l: 'Avg. Response Time', c: 'border-[#E8C86A] bg-[#E8C86A]/15 text-[#E8C86A]' },
//                 { v: '500+', l: 'Students Helped', c: 'border-[#3A9E8F] bg-[#3A9E8F]/15 text-[#3A9E8F]' },
//                 { v: '3', l: 'Countries Served', c: 'border-[#E8934A] bg-[#E8934A]/15 text-[#E8934A]' },
//               ].map(({ v, l, c }) => (
//                 <div key={l} className={`inline-flex items-center gap-2 border-2 rounded-xl px-3.5 py-2 ${c}`}>
//                   <span className="font-black text-[1rem] leading-none">{v}</span>
//                   <span className="text-white text-[0.68rem] font-bold">{l}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── CONTACT METHODS ── */}
//         <section className="py-14 sm:py-16 px-4 sm:px-8 -mt-8 relative z-10">
//           <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-4 sm:gap-5">

//             {/* WhatsApp — primary CTA */}
//             <a
//               href={WHATSAPP_URL}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-[#3A9E8F] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] hover:shadow-[2px_2px_0_0_#2E4F5E] hover:translate-y-[3px] transition-all duration-150 p-6 flex flex-col items-center text-center"
//             >
//               <div className="w-12 h-12 rounded-xl bg-white/15 border-2 border-white/30 flex items-center justify-center mb-3">
//                 <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
//                   <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.532 5.845L.057 23.882a.5.5 0 0 0 .61.61l6.037-1.475A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.87 9.87 0 0 1-5.032-1.38l-.36-.214-3.733.913.929-3.622-.235-.373A9.86 9.86 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
//                 </svg>
//               </div>
//               <p className="text-white font-black text-[0.95rem] mb-1">WhatsApp</p>
//               <p className="text-white/70 text-[0.75rem] font-semibold">Fastest way to reach us</p>
//             </a>

//             {/* Email */}
//             <a
//               href="mailto:avenfieldtutors@gmail.com"
//               className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] hover:shadow-[2px_2px_0_0_#2E4F5E] hover:translate-y-[3px] transition-all duration-150 p-6 flex flex-col items-center text-center"
//             >
//               <div className="w-12 h-12 rounded-xl bg-[#E8C86A] border-2 border-[#2E4F5E] flex items-center justify-center mb-3">
//                 <svg className="w-6 h-6 text-[#2E4F5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </div>
//               <p className="text-[#2E4F5E] font-black text-[0.95rem] mb-1">Email</p>
//               <p className="text-[#4a6a78] text-[0.75rem] font-semibold break-all">avenfieldtutors@gmail.com</p>
//             </a>

//             {/* Phone */}
//             <a
//               href={`tel:+${WHATSAPP_NUMBER}`}
//               className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] hover:shadow-[2px_2px_0_0_#2E4F5E] hover:translate-y-[3px] transition-all duration-150 p-6 flex flex-col items-center text-center"
//             >
//               <div className="w-12 h-12 rounded-xl bg-[#E05C42] border-2 border-[#2E4F5E] flex items-center justify-center mb-3">
//                 <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//               </div>
//               <p className="text-[#2E4F5E] font-black text-[0.95rem] mb-1">Phone</p>
//               <p className="text-[#4a6a78] text-[0.75rem] font-semibold">+92 309 5154253</p>
//             </a>
//           </div>

//           {/* Trust row — same pattern used on tutor profile pages */}
//           <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 mt-8">
//             {[
//               { icon: '✓', label: 'Verified Tutors' },
//               { icon: '⚡', label: 'Fast Response' },
//               { icon: '🌍', label: 'Pakistan · UAE · UK' },
//               { icon: '💬', label: 'No Long Forms' },
//             ].map(t => (
//               <span key={t.label} className="flex items-center gap-1.5 text-[0.72rem] font-black text-[#4a6a78]">
//                 <span className="w-5 h-5 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.6rem] font-black flex-shrink-0">{t.icon}</span>
//                 {t.label}
//               </span>
//             ))}
//           </div>
//         </section>

//         {/* ── BUSINESS HOURS + AREAS SERVED ── */}
//         <section className="py-4 px-4 sm:px-8">
//           <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-5">
//             <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] p-6">
//               <Eyebrow text="Business Hours" />
//               <p className="text-[#2E4F5E] font-black text-[0.95rem] mb-1">7 days a week 📅</p>
//               <p className="text-[#4a6a78] text-[0.85rem] font-semibold leading-relaxed">
//                 We're available on WhatsApp every day. Message any time most replies come within the hour.
//               </p>
//             </div>
//             <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] p-6">
//               <Eyebrow text="Areas We Serve" />
//               <div className="flex flex-wrap gap-2">
//                 {['Pakistan (Home & Online)', 'UAE (Online)', 'UK (Online)'].map(area => (
//                   <span key={area} className="px-3 py-1.5 bg-[#FFFDF7] text-[#2E4F5E] text-[0.72rem] font-black rounded-full border-2 border-[#D4D0C5]">
//                     {area}
//                   </span>
//                 ))}
//               </div>
//               <p className="text-[#4a6a78] text-[0.85rem] font-semibold leading-relaxed mt-3">
//                 Home tuition in Lahore, Karachi, Islamabad, Rawalpindi & Faisalabad. Online tutoring anywhere in the world.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* ── SEO CONTENT SECTION — keyword-rich, internally linked ── */}
//         <section className="py-14 sm:py-16 px-4 sm:px-8 border-t border-[#E8C86A]/30 mt-6">
//           <div className="max-w-3xl mx-auto">
//             <div className="text-center mb-8">
//               <Eyebrow text="How It Works" center />
//               <h2 className="text-[1.6rem] sm:text-[2rem] font-black tracking-[-0.02em] text-[#2E4F5E]">
//                 Contacting a Tutoring Service in Pakistan, Made Simple
//               </h2>
//             </div>
//             <div className="space-y-4 text-[#4a6a78] text-[0.9rem] leading-[1.8] font-semibold">
//               <p>
//                 Reaching out to Avenfield Tutors is the first step toward finding a{' '}
//                 <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">verified online or home tutor</Link>{' '}
//                 anywhere in Pakistan, the UAE, or the UK. Whether you already know you need an{' '}
//                 <Link href="/tutors?subject=O%20Level" className="text-[#E05C42] hover:underline font-black">O Level tutor</Link>,{' '}
//                 <Link href="/tutors?subject=IELTS" className="text-[#E05C42] hover:underline font-black">IELTS coach</Link>, or you're
//                 still figuring out which subject or level fits, a quick WhatsApp message is all it takes to get matched
//                 with the right educator.
//               </p>
//               <p>
//                 Parents in <Link href="/tutors?city=Lahore" className="text-[#E05C42] hover:underline font-black">Lahore</Link>,{' '}
//                 <Link href="/tutors?city=Karachi" className="text-[#E05C42] hover:underline font-black">Karachi</Link>, and{' '}
//                 <Link href="/tutors?city=Islamabad" className="text-[#E05C42] hover:underline font-black">Islamabad</Link> often
//                 reach out to compare home tuition against online options our team can walk you through both, explain our{' '}
//                 <Link href="/services" className="text-[#E05C42] hover:underline font-black">tutoring services</Link>, and
//                 recommend a verified tutor based on your child's exact requirements, at no cost.
//               </p>
//               <p>
//                 Educators interested in teaching can also get in touch here, or head straight to our{' '}
//                 <Link href="/become-tutor" className="text-[#E05C42] hover:underline font-black">become a tutor</Link> page to apply directly.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* ── QUICK LINKS ── */}
//         <section className="py-6 px-4 sm:px-8">
//           <div className="max-w-5xl mx-auto bg-[#E8C86A] rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//             <p className="text-[#2E4F5E] font-black text-[0.9rem] text-center sm:text-left">
//               Prefer to browse first? See our verified tutors directly.
//             </p>
//             <Link href="/tutors"
//               className="flex-shrink-0 px-5 py-2.5 bg-[#2E4F5E] text-white text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[0_3px_0_0_#1a3240] hover:shadow-[0_1px_0_0_#1a3240] hover:translate-y-[2px] transition-all">
//               Browse Tutors →
//             </Link>
//           </div>
//         </section>

//         {/* ── FAQ ── */}
//         <section className="py-14 sm:py-16 px-4 sm:px-8">
//           <div className="max-w-3xl mx-auto">
//             <div className="text-center mb-8">
//               <Eyebrow text="Got Questions?" center />
//               <h2 className="text-[1.6rem] sm:text-[2rem] font-black tracking-[-0.02em] text-[#2E4F5E]">
//                 Frequently Asked Questions
//               </h2>
//             </div>
//             <div className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <details
//                   key={index}
//                   className="group bg-white border-2 border-[#E8C86A] rounded-xl overflow-hidden shadow-[2px_2px_0_0_#c9ab4a] transition-all hover:shadow-[3px_3px_0_0_#c9ab4a]"
//                 >
//                   <summary className="flex items-center justify-between w-full px-5 py-4 cursor-pointer list-none hover:bg-[#FFFDF7] transition-colors">
//                     <span className="text-[0.9rem] font-black text-[#2E4F5E] pr-4">{faq.q}</span>
//                     <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8C86A] flex items-center justify-center text-[#2E4F5E] font-black text-sm transition-transform group-open:rotate-180">▼</span>
//                   </summary>
//                   <div className="px-5 pb-5">
//                     <div className="pt-2 border-t-2 border-dashed border-[#E8C86A]/30">
//                       <p className="text-[#4a6a78] text-[0.88rem] font-semibold leading-relaxed">{faq.a}</p>
//                     </div>
//                   </div>
//                 </details>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }






import type { Metadata } from 'next'
import Link from 'next/link'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const WHATSAPP_NUMBER = '923095154253'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I have a question about Avenfield Tutors.')}`

export const metadata: Metadata = {
  title: 'Contact Us — Find a Tutor or Ask a Question',
  description:
    'Get in touch with Avenfield Tutors via WhatsApp, email or phone. We reply within an hour. Serving students across Pakistan, UAE & UK.',
  keywords: [
    'contact Avenfield Tutors', 'tutoring help Pakistan', 'find a tutor contact',
    'Avenfield Tutors WhatsApp', 'Avenfield Tutors email',
  ],
  openGraph: {
    title: 'Contact Us | Avenfield Tutors',
    description: 'Get in touch via WhatsApp, email or phone. We reply within an hour.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url: `${SITE_URL}/contact`,
    images: [{ url: `${SITE_URL}/avenfieldtutors-newlogo.png`, width: 1200, height: 630, alt: 'Contact Avenfield Tutors' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Avenfield Tutors',
    description: 'Get in touch via WhatsApp, email or phone. We reply within an hour.',
  },
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
}

function Eyebrow({ text, light = false, center = false }: { text: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2 mb-3 ${center ? 'justify-center' : ''}`} aria-hidden="true">
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

const faqs = [
  {
    q: 'How quickly will you reply?',
    a: 'We aim to reply within an hour during our active hours, and usually much faster on WhatsApp. It\'s the quickest way to reach us.',
  },
  {
    q: 'Is there a fee for the initial consultation?',
    a: 'No. Telling us your subject, level, and preferred learning mode (online or home) is completely free, and we\'ll recommend a matching verified tutor at no cost.',
  },
  {
    q: 'Which cities and countries do you cover?',
    a: 'Home tuition is available across major Pakistani cities including Lahore, Karachi, Islamabad, Rawalpindi and Faisalabad. Online tutoring is available worldwide, including UAE and the UK.',
  },
  {
    q: 'I messaged but haven\'t heard back what should I do?',
    a: 'If it\'s been more than a few hours, please resend your message on WhatsApp occasionally messages get missed during busy periods, and we want to make sure yours doesn\'t.',
  },
]

function ContactPageSchema() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Avenfield Tutors',
    url: `${SITE_URL}/contact`,
    isPartOf: { '@type': 'WebSite', name: 'Avenfield Tutors', url: SITE_URL },
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE_URL}/contact` },
    ],
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}

export default function ContactPage() {
  return (
    <div className="text-[#2E4F5E] overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <ContactPageSchema />

      <div className="bg-[#FFFDF7] min-h-screen">

        {/* ── HERO ── */}
        <section className="bg-[#2E4F5E] pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
          <div aria-hidden="true" className="absolute top-0 right-0 w-64 sm:w-80 md:w-[400px] h-64 sm:h-80 md:h-[400px] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle,#3A9E8F,transparent 70%)', transform: 'translate(40%,-30%)' }} />
          <div aria-hidden="true" className="absolute bottom-0 left-0 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-full opacity-8 pointer-events-none"
            style={{ background: 'radial-gradient(circle,#E8C86A,transparent 70%)', transform: 'translate(-30%,30%)' }} />
          <div aria-hidden="true"
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,#E8C86A 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

          <div className="relative max-w-3xl mx-auto text-center">
            <Eyebrow text="Get In Touch" light center />
            <h1 className="text-white text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-black leading-[1.1] tracking-[-0.025em] mb-4">
              Let's Find You the{' '}
              <span className="relative inline-block text-[#E8C86A]">
                <span className="relative z-10">Right Tutor</span>
                <Wiggle color="#E05C42" />
              </span>
            </h1>
            <p className="text-[#7da8b8] text-[0.9rem] sm:text-[1rem] font-semibold leading-relaxed max-w-lg mx-auto mb-8">
              Need help finding a tutor? Not sure which subject or level fits best? Send us a message
               we reply within an hour. 🤝
            </p>

            {/* Stat chips — same pattern used on /tutors and homepage */}
            <div className="flex flex-wrap justify-center gap-2.5">
              {[
                { v: '< 1 hr', l: 'Avg. Response Time', c: 'border-[#E8C86A] bg-[#E8C86A]/15 text-[#E8C86A]' },
                { v: '500+', l: 'Students Helped', c: 'border-[#3A9E8F] bg-[#3A9E8F]/15 text-[#3A9E8F]' },
                { v: '3', l: 'Countries Served', c: 'border-[#E8934A] bg-[#E8934A]/15 text-[#E8934A]' },
              ].map(({ v, l, c }) => (
                <div key={l} className={`inline-flex items-center gap-2 border-2 rounded-xl px-3.5 py-2 ${c}`}>
                  <span className="font-black text-[1rem] leading-none">{v}</span>
                  <span className="text-white text-[0.68rem] font-bold">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT METHODS ── */}
        <section className="py-14 sm:py-16 px-4 sm:px-8 -mt-8 relative z-10">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-4 sm:gap-5">

            {/* WhatsApp — primary CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3A9E8F] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] hover:shadow-[2px_2px_0_0_#2E4F5E] hover:translate-y-[3px] transition-all duration-150 p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-white/15 border-2 border-white/30 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.532 5.845L.057 23.882a.5.5 0 0 0 .61.61l6.037-1.475A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.87 9.87 0 0 1-5.032-1.38l-.36-.214-3.733.913.929-3.622-.235-.373A9.86 9.86 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
                </svg>
              </div>
              <p className="text-white font-black text-[0.95rem] mb-1">WhatsApp</p>
              <p className="text-white/70 text-[0.75rem] font-semibold">Fastest way to reach us</p>
            </a>

            {/* Email */}
            <a
              href="mailto:avenfieldtutors@gmail.com"
              className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] hover:shadow-[2px_2px_0_0_#2E4F5E] hover:translate-y-[3px] transition-all duration-150 p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E8C86A] border-2 border-[#2E4F5E] flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#2E4F5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-[#2E4F5E] font-black text-[0.95rem] mb-1">Email</p>
              <p className="text-[#4a6a78] text-[0.75rem] font-semibold break-all">avenfieldtutors@gmail.com</p>
            </a>

            {/* Phone */}
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] hover:shadow-[2px_2px_0_0_#2E4F5E] hover:translate-y-[3px] transition-all duration-150 p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E05C42] border-2 border-[#2E4F5E] flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-[#2E4F5E] font-black text-[0.95rem] mb-1">Phone</p>
              <p className="text-[#4a6a78] text-[0.75rem] font-semibold">+92 309 5154253</p>
            </a>
          </div>

          {/* Trust row — same pattern used on tutor profile pages */}
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 mt-8">
            {[
              { icon: '✓', label: 'Verified Tutors' },
              { icon: '⚡', label: 'Fast Response' },
              { icon: '🌍', label: 'Pakistan · UAE · UK' },
              { icon: '💬', label: 'No Long Forms' },
            ].map(t => (
              <span key={t.label} className="flex items-center gap-1.5 text-[0.72rem] font-black text-[#4a6a78]">
                <span className="w-5 h-5 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.6rem] font-black flex-shrink-0">{t.icon}</span>
                {t.label}
              </span>
            ))}
          </div>
        </section>

        {/* ── BUSINESS HOURS + AREAS SERVED ── */}
        <section className="py-4 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] p-6">
              <Eyebrow text="Business Hours" />
              <p className="text-[#2E4F5E] font-black text-[0.95rem] mb-1">7 days a week 📅</p>
              <p className="text-[#4a6a78] text-[0.85rem] font-semibold leading-relaxed">
                We're available on WhatsApp every day. Message any time most replies come within the hour.
              </p>
            </div>
            <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] p-6">
              <Eyebrow text="Areas We Serve" />
              <div className="flex flex-wrap gap-2">
                {['Pakistan (Home & Online)', 'UAE (Online)', 'UK (Online)'].map(area => (
                  <span key={area} className="px-3 py-1.5 bg-[#FFFDF7] text-[#2E4F5E] text-[0.72rem] font-black rounded-full border-2 border-[#D4D0C5]">
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-[#4a6a78] text-[0.85rem] font-semibold leading-relaxed mt-3">
                Home tuition in Lahore, Karachi, Islamabad, Rawalpindi & Faisalabad. Online tutoring anywhere in the world.
              </p>
            </div>
          </div>
        </section>

        {/* ── SEO CONTENT SECTION — keyword-rich, internally linked ── */}
        <section className="py-14 sm:py-16 px-4 sm:px-8 border-t border-[#E8C86A]/30 mt-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Eyebrow text="How It Works" center />
              <h2 className="text-[1.6rem] sm:text-[2rem] font-black tracking-[-0.02em] text-[#2E4F5E]">
                Contacting a Tutoring Service in Pakistan, Made Simple
              </h2>
            </div>
            <div className="space-y-4 text-[#4a6a78] text-[0.9rem] leading-[1.8] font-semibold">
              <p>
                Reaching out to Avenfield Tutors is the first step toward finding a{' '}
                <Link href="/tutors" className="text-[#E05C42] hover:underline font-black">verified online or home tutor</Link>{' '}
                anywhere in Pakistan, the UAE, or the UK. Whether you already know you need an{' '}
                <Link href="/tutors?subject=O%20Level" className="text-[#E05C42] hover:underline font-black">O Level tutor</Link>,{' '}
                <Link href="/tutors?subject=IELTS" className="text-[#E05C42] hover:underline font-black">IELTS coach</Link>, or you're
                still figuring out which subject or level fits, a quick WhatsApp message is all it takes to get matched
                with the right educator.
              </p>
              <p>
                Parents in <Link href="/tutors?city=Lahore" className="text-[#E05C42] hover:underline font-black">Lahore</Link>,{' '}
                <Link href="/tutors?city=Karachi" className="text-[#E05C42] hover:underline font-black">Karachi</Link>, and{' '}
                <Link href="/tutors?city=Islamabad" className="text-[#E05C42] hover:underline font-black">Islamabad</Link> often
                reach out to compare home tuition against online options our team can walk you through both, explain our{' '}
                <Link href="/services" className="text-[#E05C42] hover:underline font-black">tutoring services</Link>, and
                recommend a verified tutor based on your child's exact requirements, at no cost.
              </p>
              <p>
                Educators interested in teaching can also get in touch here, or head straight to our{' '}
                <Link href="/become-tutor" className="text-[#E05C42] hover:underline font-black">become a tutor</Link> page to apply directly.
              </p>
            </div>
          </div>
        </section>

        {/* ── QUICK LINKS ── */}
        <section className="py-6 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto bg-[#E8C86A] rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#2E4F5E] font-black text-[0.9rem] text-center sm:text-left">
              Prefer to browse first? See our verified tutors directly.
            </p>
            <Link href="/tutors"
              className="flex-shrink-0 px-5 py-2.5 bg-[#2E4F5E] text-white text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[0_3px_0_0_#1a3240] hover:shadow-[0_1px_0_0_#1a3240] hover:translate-y-[2px] transition-all">
              Browse Tutors →
            </Link>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-14 sm:py-16 px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Eyebrow text="Got Questions?" center />
              <h2 className="text-[1.6rem] sm:text-[2rem] font-black tracking-[-0.02em] text-[#2E4F5E]">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white border-2 border-[#E8C86A] rounded-xl overflow-hidden shadow-[2px_2px_0_0_#c9ab4a] transition-all hover:shadow-[3px_3px_0_0_#c9ab4a]"
                >
                  <summary className="flex items-center justify-between w-full px-5 py-4 cursor-pointer list-none hover:bg-[#FFFDF7] transition-colors">
                    <span className="text-[0.9rem] font-black text-[#2E4F5E] pr-4">{faq.q}</span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8C86A] flex items-center justify-center text-[#2E4F5E] font-black text-sm transition-transform group-open:rotate-180">▼</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <div className="pt-2 border-t-2 border-dashed border-[#E8C86A]/30">
                      <p className="text-[#4a6a78] text-[0.88rem] font-semibold leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}