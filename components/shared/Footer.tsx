


// import Link from 'next/link'
// import Image from 'next/image'

// const WHATSAPP = '923095154253'

// const platformLinks: [string, string][] = [
//   ['/', 'Home'],
//   ['/services', 'Tutoring Services'],
//   ['/tutors', 'Find a Tutor'],
//   ['/become-tutor', 'Become a Tutor'],
//   ['/blog', 'Blog'],
//   ['/contact', 'Contact'],
// ]

// const cityLinks: [string, string][] = [
//   ['/home-tutor-islamabad', 'Home Tutor in Islamabad'],
//   ['/home-tutor-rawalpindi', 'Home Tutor in Rawalpindi'],
// ]

// const subjects = [
//   'Mathematics', 'Physics', 'English',
//   'O Level', 'A Level', 'IELTS',
//   'Computer Science', 'Quran',
// ]

// export default function Footer() {
//   return (
//     <footer
//       role="contentinfo"
//       aria-label="Avenfield Tutors site footer"
//       className="bg-[#2E4F5E] text-[#a8c5d0]"
//       style={{ fontFamily: "'Nunito', sans-serif" }}
//     >
//       {/* Wavy top border */}
//       <div className="w-full overflow-hidden leading-[0]" aria-hidden="true">
//         <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-10 sm:h-12 block" fill="#FFFDF7" xmlns="http://www.w3.org/2000/svg">
//           <path d="M0,24 C180,48 360,0 540,24 C720,48 900,0 1080,24 C1260,48 1350,12 1440,24 L1440,0 L0,0 Z"/>
//         </svg>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-4 pb-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

//           {/* ── Brand ── */}
//           <div className="sm:col-span-2 lg:col-span-1">
//             <Link
//               href="/"
//               className="flex items-center gap-2.5 mb-4 group"
//               aria-label="Avenfield Tutors – Home"
//             >
//               <div className="relative flex-shrink-0 h-[44px] sm:h-[52px] w-auto bg-[#FFFDF7] rounded-xl px-3 py-2 shadow-[3px_3px_0_0_#1a3240]">
//                 <Image
//                   src="/avenfieldtutors-newlogo.png"
//                   alt="Avenfield Tutors"
//                   width={200}
//                   height={60}
//                   sizes="200px"
//                   className="h-full w-auto object-contain"
//                 />
//               </div>
//             </Link>

//             <p className="text-[0.84rem] leading-relaxed text-[#7da8b8] max-w-xs mb-2 font-medium">
//               Avenfield Tutors connects students with verified, expert tutors for personalised online and home tuition across Pakistan, UAE &amp; UK. 🌍
//             </p>

//             <p className="text-[0.78rem] text-[#3A9E8F] font-semibold mt-3">
//               📱 Available on WhatsApp 7 days a week
//             </p>
//           </div>

//           {/* ── Platform ── */}
//           <nav aria-label="Platform links">
//             <h2 className="text-[#E8C86A] text-[0.78rem] font-black uppercase tracking-[0.2em] mb-5">Platform</h2>
//             <ul className="flex flex-col gap-3 text-[0.85rem]">
//               {platformLinks.map(([href, label]) => (
//                 <li key={href}>
//                   <Link
//                     href={href}
//                     className="hover:text-[#E8C86A] transition-colors duration-150 font-semibold"
//                   >
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//               {cityLinks.map(([href, label]) => (
//                 <li key={href}>
//                   <Link
//                     href={href}
//                     className="hover:text-[#E8C86A] transition-colors duration-150 font-semibold"
//                   >
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* ── Subjects ── */}
//           <nav aria-label="Subject links">
//             <h2 className="text-[#E8C86A] text-[0.78rem] font-black uppercase tracking-[0.2em] mb-5">Subjects</h2>
//             <ul className="flex flex-col gap-3 text-[0.85rem]">
//               {subjects.map((s) => (
//                 <li key={s}>
//                   <Link
//                     href={`/tutors?subject=${encodeURIComponent(s)}`}
//                     className="hover:text-[#E8C86A] transition-colors duration-150 font-semibold"
//                     aria-label={`Find ${s} tutors`}
//                   >
//                     {s}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* ── Contact ── */}
//           <div>
//             <h2 className="text-[#E8C86A] text-[0.78rem] font-black uppercase tracking-[0.2em] mb-5">Contact Us</h2>
//             <p className="text-[0.84rem] text-[#7da8b8] mb-4 leading-relaxed font-medium">
//               Have a question? We reply within an hour promise! 🤝
//             </p>

//             {/* WhatsApp CTA */}
//             <a
//               href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi! I visited Avenfield Tutors and have a question.')}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Chat with Avenfield Tutors on WhatsApp"
//               className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#3A9E8F] border-2 border-[#E8C86A] text-white hover:bg-[#2d8a7c] rounded-xl text-[0.84rem] font-black shadow-[0_3px_0_0_#2a7a6e] hover:shadow-[0_1px_0_0_#2a7a6e] hover:translate-y-[2px] transition-all duration-150"
//             >
//               <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
//                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
//                 <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.532 5.845L.057 23.882a.5.5 0 0 0 .61.61l6.037-1.475A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.87 9.87 0 0 1-5.032-1.38l-.36-.214-3.733.913.929-3.622-.235-.373A9.86 9.86 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z" />
//               </svg>
//               Chat on WhatsApp
//             </a>

//             {/* Contact Icons - Only Icons, Properly Adjusted */}
//             <div className="mt-5 flex items-center gap-4">
//               {/* Phone - Icon Only */}
//               <a
//                 href={`tel:+${WHATSAPP}`}
//                 aria-label="Call Avenfield Tutors on +92 309 5154253"
//                 className="w-11 h-11 rounded-full bg-[#3A9E8F]/20 border-2 border-[#3A9E8F]/40 flex items-center justify-center text-[#3A9E8F] text-xl hover:bg-[#3A9E8F] hover:text-white hover:border-[#3A9E8F] transition-all duration-200 hover:shadow-[0_0_20px_rgba(58,158,143,0.3)] hover:-translate-y-0.5"
//               >
//                 📞
//               </a>

//               {/* Email - Icon Only */}
//               <a
//                 href="mailto:avenfieldtutors@gmail.com"
//                 aria-label="Email Avenfield Tutors at avenfieldtutors@gmail.com"
//                 className="w-11 h-11 rounded-full bg-[#3A9E8F]/20 border-2 border-[#3A9E8F]/40 flex items-center justify-center text-[#3A9E8F] text-xl hover:bg-[#3A9E8F] hover:text-white hover:border-[#3A9E8F] transition-all duration-200 hover:shadow-[0_0_20px_rgba(58,158,143,0.3)] hover:-translate-y-0.5"
//               >
//                 ✉️
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* ── Divider ── */}
//         <div className="h-[2px] bg-[#3A9E8F]/40 rounded-full mb-6" aria-hidden="true" />

//         {/* ── Bottom ── */}
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
//           <p className="text-[0.78rem] text-[#5a7f8e] font-semibold">
//             © {new Date().getFullYear()} Avenfield Tutors. All rights reserved.
//             <span className="hidden sm:inline"> Building Confidence. Delivering Excellence. 💛</span>
//           </p>
//         </div>

//         {/* Mobile-only tagline */}
//         <p className="text-[0.7rem] text-[#5a7f8e] text-center mt-3 sm:hidden font-medium">
//           Building Confidence. Delivering Excellence. 💛
//         </p>
//       </div>
//     </footer>
//   )
// }






import Link from 'next/link'
import Image from 'next/image'

const WHATSAPP = '923095154253'

const platformLinks: [string, string][] = [
  ['/', 'Home'],
  ['/services', 'Tutoring Services'],
  ['/tutors', 'Find a Tutor'],
  ['/become-tutor', 'Become a Tutor'],
  ['/blog', 'Blog'],
  ['/contact', 'Contact'],
]

const cityLinks: [string, string][] = [
  ['/home-tutor-islamabad', 'Home Tutor in Islamabad'],
  ['/home-tutor-rawalpindi', 'Home Tutor in Rawalpindi'],
  ['/home-tutor-lahore', 'Home Tutor in Lahore'], // ✅ Added
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
              <div className="relative flex-shrink-0 h-[44px] sm:h-[52px] w-auto bg-[#FFFDF7] rounded-xl px-3 py-2 shadow-[3px_3px_0_0_#1a3240]">
                <Image
                  src="/avenfieldtutors-newlogo.png"
                  alt="Avenfield Tutors"
                  width={200}
                  height={60}
                  sizes="200px"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-[0.84rem] leading-relaxed text-[#7da8b8] max-w-xs mb-2 font-medium">
              Avenfield Tutors connects students with verified, expert tutors for personalised online and home tuition across Pakistan, UAE &amp; UK. 🌍
            </p>

            <p className="text-[0.78rem] text-[#3A9E8F] font-semibold mt-3">
              📱 Available on WhatsApp 7 days a week
            </p>
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
              {cityLinks.map(([href, label]) => (
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
            <p className="text-[0.84rem] text-[#7da8b8] mb-4 leading-relaxed font-medium">
              Have a question? We reply within an hour promise! 🤝
            </p>

            {/* WhatsApp CTA */}
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

            {/* Contact Icons - Only Icons, Properly Adjusted */}
            <div className="mt-5 flex items-center gap-4">
              {/* Phone - Icon Only */}
              <a
                href={`tel:+${WHATSAPP}`}
                aria-label="Call Avenfield Tutors on +92 309 5154253"
                className="w-11 h-11 rounded-full bg-[#3A9E8F]/20 border-2 border-[#3A9E8F]/40 flex items-center justify-center text-[#3A9E8F] text-xl hover:bg-[#3A9E8F] hover:text-white hover:border-[#3A9E8F] transition-all duration-200 hover:shadow-[0_0_20px_rgba(58,158,143,0.3)] hover:-translate-y-0.5"
              >
                📞
              </a>

              {/* Email - Icon Only */}
              <a
                href="mailto:avenfieldtutors@gmail.com"
                aria-label="Email Avenfield Tutors at avenfieldtutors@gmail.com"
                className="w-11 h-11 rounded-full bg-[#3A9E8F]/20 border-2 border-[#3A9E8F]/40 flex items-center justify-center text-[#3A9E8F] text-xl hover:bg-[#3A9E8F] hover:text-white hover:border-[#3A9E8F] transition-all duration-200 hover:shadow-[0_0_20px_rgba(58,158,143,0.3)] hover:-translate-y-0.5"
              >
                ✉️
              </a>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-[2px] bg-[#3A9E8F]/40 rounded-full mb-6" aria-hidden="true" />

        {/* ── Bottom ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.78rem] text-[#5a7f8e] font-semibold">
            © {new Date().getFullYear()} Avenfield Tutors. All rights reserved.
            <span className="hidden sm:inline"> Building Confidence. Delivering Excellence. 💛</span>
          </p>
        </div>

        {/* Mobile-only tagline */}
        <p className="text-[0.7rem] text-[#5a7f8e] text-center mt-3 sm:hidden font-medium">
          Building Confidence. Delivering Excellence. 💛
        </p>
      </div>
    </footer>
  )
}