// import Link from 'next/link'

// export default function Footer() {
//   return (
//     <footer className="bg-[#2C2C2A] text-[#D3D1C7]">
//       <div className="max-w-6xl mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

//         {/* Brand */}
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <div className="w-8 h-8 rounded-lg bg-[#7F77DD] flex items-center justify-center text-white font-bold text-sm">E</div>
//             <span className="font-display font-semibold text-lg text-white">EduMatch</span>
//           </div>
//           <p className="text-sm leading-relaxed text-[#888780]">
//             Connecting students with expert tutors for personalized learning — online and at home.
//           </p>
//         </div>

//         {/* Quick links */}
//         <div>
//           <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Quick Links</h4>
//           <ul className="flex flex-col gap-2 text-sm">
//             {[
//               ['/', 'Home'],
//               ['/tutors', 'Browse Tutors'],
//               ['/services', 'Services'],
//               ['/become-tutor', 'Become a Tutor'],
//             ].map(([href, label]) => (
//               <li key={href}>
//                 <Link href={href} className="hover:text-[#CECBF6] transition-colors">{label}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Contact</h4>
//           <p className="text-sm text-[#888780] mb-3">Have questions? We respond within an hour.</p>
//           <a
//             href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 text-sm text-[#9FE1CB] hover:text-white transition-colors"
//           >
//             <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
//               <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
//               <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.532 5.845L.057 23.882a.5.5 0 0 0 .61.61l6.037-1.475A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.87 9.87 0 0 1-5.032-1.38l-.36-.214-3.733.913.929-3.622-.235-.373A9.86 9.86 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
//             </svg>
//             Chat on WhatsApp
//           </a>
//         </div>
//       </div>

//       <div className="border-t border-[#3d3d3a]">
//         <p className="text-center text-xs text-[#888780] py-5">
//           © {new Date().getFullYear()} EduMatch. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   )
// }








'use client'

import { usePathname } from 'next/navigation'

const WHATSAPP = '923304785145'

export default function WhatsAppButton() {
  const pathname = usePathname()
  if (pathname.startsWith('/admin')) return null

  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi! I visited Learnova and I need help finding a tutor.')}`

  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
      {/* Label that appears on hover */}
      <span className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 bg-[#2C2C2A] text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg">
        Chat with us
      </span>
      <div className="w-14 h-14 bg-[#25D366] hover:bg-[#20bf5b] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:scale-110 transition-all duration-200">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.532 5.845L.057 23.882a.5.5 0 0 0 .61.61l6.037-1.475A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.87 9.87 0 0 1-5.032-1.38l-.36-.214-3.733.913.929-3.622-.235-.373A9.86 9.86 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
        </svg>
      </div>
    </a>
  )
}