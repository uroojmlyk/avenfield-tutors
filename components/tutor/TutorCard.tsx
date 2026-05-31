



// 'use client'

// import Link from 'next/link'
// import { ITutor } from '@/types'

// interface TutorCardProps {
//   tutor: ITutor
//   featured?: boolean
// }

// const modeBadge: Record<string, string> = {
//   online: 'bg-[#3A9E8F] text-white',
//   onsite: 'bg-[#E05C42] text-white',
//   both: 'bg-[#E8C86A] text-[#2E4F5E]',
// }

// const modeLabel: Record<string, string> = {
//   online: 'Online',
//   onsite: 'Home Visit',
//   both: 'Online & Home',
// }

// function getPopularityBadge(tutor: ITutor): { text: string; color: string } | null {
//   if (tutor.experience >= 8) {
//     return { text: '⭐ Highly Experienced', color: 'bg-[#2E4F5E] text-white' }
//   }
//   if (tutor.rating && tutor.rating >= 4.5) {
//     return { text: '🔥 Top Rated', color: 'bg-[#E05C42] text-white' }
//   }
//   if (tutor.experience >= 5) {
//     return { text: '📈 Popular', color: 'bg-[#3A9E8F] text-white' }
//   }
//   return null
// }

// function getResponseTime(): { text: string; color: string } {
//   const times = [
//     { text: '⚡ Responds in < 1 hour', color: 'text-[#3A9E8F]' },
//     { text: '⚡ Responds in < 2 hours', color: 'text-[#E8C86A]' },
//     { text: '⚡ Responds in < 24 hours', color: 'text-[#7da8b8]' },
//   ]
//   return times[Math.floor(Math.random() * times.length)]
// }

// export default function TutorCard({ tutor, featured = false }: TutorCardProps) {
//   const popularityBadge = getPopularityBadge(tutor)
//   const responseTime = getResponseTime()
  
//   const topSubjects = tutor.subjects.slice(0, 2)
//   const remainingCount = tutor.subjects.length - 2

//   // Generate a mock review count if not present (for UI consistency)
//   const reviewCount = (tutor as any).reviewCount || Math.floor(Math.random() * 30) + 5

//   return (
//     <Link href={`/tutors/${tutor._id}`} className="block group">
//       <div className="relative bg-white rounded-2xl border-2 border-[#2E4F5E] overflow-hidden hover:shadow-[10px_10px_0_0_#2E4F5E] hover:-translate-y-1 transition-all duration-200 h-full">
        
//         {/* Featured ribbon */}
//         {featured && (
//           <div className="absolute top-0 right-0 z-10">
//             <div className="bg-[#E8C86A] text-[#2E4F5E] text-[11px] font-black px-3 py-1 rounded-bl-xl border-b-2 border-l-2 border-[#2E4F5E] shadow-md">
//               ⭐ Featured
//             </div>
//           </div>
//         )}

//         {/* Popularity Badge */}
//         {popularityBadge && (
//           <div className="absolute top-3 left-3 z-10">
//             <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E] ${popularityBadge.color}`}>
//               {popularityBadge.text}
//             </span>
//           </div>
//         )}

//         {/* Card Content */}
//         <div className="p-4 sm:p-5">
//           {/* Header with Avatar + Name */}
//           <div className="flex items-start gap-3 mb-4">
//             {/* Avatar */}
//             <div className="relative flex-shrink-0">
//               <div className="w-14 h-14 rounded-xl overflow-hidden bg-gradient-to-br from-[#E8C86A] to-[#c4a84a] border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E]">
//                 {tutor.imageUrl ? (
//                   <img src={tutor.imageUrl} alt={tutor.name} className="w-full h-full object-cover" />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center">
//                     <span className="text-[#2E4F5E] font-black text-2xl">{tutor.name.charAt(0)}</span>
//                   </div>
//                 )}
//               </div>
//               {/* Online indicator */}
//               <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#3A9E8F] rounded-full border-2 border-white shadow-sm" />
//             </div>

//             {/* Name + Rating */}
//             <div className="flex-1 min-w-0">
//               <h3 className="font-black text-[#2E4F5E] text-base sm:text-lg leading-tight mb-1 group-hover:text-[#E05C42] transition-colors line-clamp-1">
//                 {tutor.name}
//               </h3>
//               <div className="flex items-center gap-1.5 flex-wrap">
//                 {tutor.rating ? (
//                   <div className="flex items-center gap-1">
//                     <span className="text-[#E8C86A] text-sm">★</span>
//                     <span className="text-sm font-black text-[#2E4F5E]">{tutor.rating.toFixed(1)}</span>
//                     <span className="text-[0.7rem] font-bold text-[#7da8b8]">({reviewCount}+)</span>
//                   </div>
//                 ) : (
//                   <span className="text-[0.7rem] font-bold text-[#7da8b8] bg-[#FFFDF7] px-2 py-0.5 rounded-full border border-[#D4D0C5]">New tutor</span>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Subjects */}
//           <div className="mb-3">
//             <div className="flex flex-wrap gap-1.5">
//               {topSubjects.map((subject) => (
//                 <span
//                   key={subject}
//                   className="px-2 py-0.5 bg-[#E8C86A]/30 text-[#2E4F5E] text-[0.7rem] font-black rounded-full border border-[#E8C86A]"
//                 >
//                   {subject}
//                 </span>
//               ))}
//               {remainingCount > 0 && (
//                 <span className="px-2 py-0.5 bg-[#FFFDF7] text-[#7da8b8] text-[0.65rem] font-bold rounded-full border border-[#D4D0C5]">
//                   +{remainingCount}
//                 </span>
//               )}
//             </div>
//           </div>

//           {/* Experience + Mode Row */}
//           <div className="flex items-center justify-between mb-3">
//             <div className="flex items-center gap-1.5">
//               <svg className="w-4 h-4 text-[#7da8b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <span className="text-sm font-black text-[#2E4F5E]">{tutor.experience} years exp</span>
//             </div>
//             <span className={`text-[0.7rem] font-black px-2 py-0.5 rounded-full border-2 border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E] ${modeBadge[tutor.mode]}`}>
//               {modeLabel[tutor.mode]}
//             </span>
//           </div>

//           {/* Location */}
//           <div className="flex items-center gap-1.5 mb-3">
//             <svg className="w-4 h-4 text-[#7da8b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//             <span className="text-sm font-black text-[#2E4F5E] truncate">{tutor.city}, {tutor.country}</span>
//           </div>

//           {/* Bio preview */}
//           <p className="text-[#2E4F5E] text-sm font-semibold leading-relaxed line-clamp-2 mb-4 bg-[#FFFDF7] p-2 rounded-lg border border-[#D4D0C5]/50">
//             {tutor.bio.length > 100 ? `${tutor.bio.substring(0, 100)}...` : tutor.bio}
//           </p>

//           {/* Response Time + CTA */}
//           <div className="flex items-center justify-between pt-3 border-t-2 border-[#E8C86A]/50">
//             <div className="flex items-center gap-1.5">
//               <span className="text-base">💬</span>
//               <span className={`text-[0.7rem] font-black ${responseTime.color}`}>
//                 {responseTime.text}
//               </span>
//             </div>
            
//             <div className="flex items-center gap-1 text-[#E05C42] group-hover:translate-x-1 transition-transform duration-200">
//               <span className="text-sm font-black">View Profile</span>
//               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//               </svg>
//             </div>
//           </div>

//           {/* Limited Slots Urgency */}
//           {tutor.experience >= 5 && (
//             <div className="mt-2 pt-1 text-center">
//               <span className="text-[0.65rem] font-black text-[#E05C42] bg-[#E05C42]/10 px-2 py-0.5 rounded-full">
//                 ⭐ Limited weekly slots available
//               </span>
//             </div>
//           )}
//         </div>
//       </div>
//     </Link>
//   )
// }





'use client'

import Link from 'next/link'
import { ITutor } from '@/types'

interface TutorCardProps {
  tutor: ITutor
  featured?: boolean
}

const modeBadge: Record<string, string> = {
  online: 'bg-[#3A9E8F] text-white',
  onsite: 'bg-[#E05C42] text-white',
  both:   'bg-[#E8C86A] text-[#2E4F5E]',
}
const modeLabel: Record<string, string> = {
  online: 'Online',
  onsite: 'Home Visit',
  both:   'Online & Home',
}

// Accent color per card based on mode — drives avatar gradient + top bar
const modeAccent: Record<string, string> = {
  online: '#3A9E8F',
  onsite: '#E05C42',
  both:   '#E8C86A',
}

function getPopularityBadge(tutor: ITutor): { text: string; color: string } | null {
  if (tutor.experience >= 8)                        return { text: '⭐ Highly Experienced', color: 'bg-[#2E4F5E] text-[#E8C86A]' }
  if (tutor.rating && tutor.rating >= 4.5)          return { text: '🔥 Top Rated',          color: 'bg-[#E05C42] text-white'    }
  if (tutor.experience >= 5)                        return { text: '📈 Popular',             color: 'bg-[#E8934A] text-white'    }
  return null
}

// Stable response time based on tutor id hash — no hydration mismatch
function getResponseTime(id: string): { text: string; color: string } {
  const n = id.charCodeAt(id.length - 1) % 3
  return [
    { text: '⚡ Responds in < 1 hour',  color: 'text-[#3A9E8F]' },
    { text: '⚡ Responds in < 2 hours', color: 'text-[#E8C86A]' },
    { text: '⚡ Responds in < 24 hours',color: 'text-[#7da8b8]' },
  ][n]
}

export default function TutorCard({ tutor, featured = false }: TutorCardProps) {
  const popularityBadge = getPopularityBadge(tutor)
  const responseTime    = getResponseTime(tutor._id)
  const topSubjects     = tutor.subjects.slice(0, 2)
  const remainingCount  = tutor.subjects.length - 2
  const reviewCount     = (tutor as any).reviewCount ?? Math.floor((tutor._id.charCodeAt(0) % 30) + 5)
  const accent          = modeAccent[tutor.mode] ?? '#E8C86A'
  const initials        = tutor.name.split(' ').map((w: string) => w[0]).slice(0, 2).join('')

  return (
    <Link href={`/tutors/${tutor._id}`} className="block group">
      <div
        className="relative bg-[#FFFDF7] rounded-[20px] border-[2.5px] border-[#2E4F5E] overflow-hidden h-full transition-all duration-200 hover:-translate-y-1"
        style={{ boxShadow: '0 0 0 0 #2E4F5E' }}
        onMouseEnter={e => (e.currentTarget.style.boxShadow = '8px 8px 0 0 #2E4F5E')}
        onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 0 0 #2E4F5E')}
      >
        {/* Coloured top accent bar */}
        <div className="h-[5px] w-full" style={{ background: accent }} />

        {/* Featured ribbon */}
        {featured && (
          <div className="absolute top-0 right-0 z-10 bg-[#E8C86A] text-[#2E4F5E] text-[10px] font-black px-3.5 py-1.5 rounded-bl-2xl border-b-2 border-l-2 border-[#2E4F5E]">
            ⭐ Featured
          </div>
        )}

        {/* Popularity badge */}
        {popularityBadge && (
          <div className="absolute top-[14px] left-[14px] z-10">
            <span className={`text-[10px] font-black px-2.5 py-[3px] rounded-full border-[1.5px] border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E] ${popularityBadge.color}`}>
              {popularityBadge.text}
            </span>
          </div>
        )}

        {/* Body */}
        <div className={`px-[18px] pb-[14px] ${popularityBadge ? 'pt-9' : 'pt-[18px]'}`}>

          {/* Header: Avatar + Name */}
          <div className="flex items-start gap-3 mb-[14px]">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div
                className="w-[58px] h-[58px] rounded-[14px] border-[2.5px] border-[#2E4F5E] overflow-hidden flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${accent}, ${accent}aa)`, boxShadow: '3px 3px 0 #2E4F5E' }}
              >
                {tutor.imageUrl ? (
                  <img src={tutor.imageUrl} alt={tutor.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-[22px] font-black text-[#2E4F5E]">{initials}</span>
                )}
              </div>
              {/* Online dot */}
              <div className="absolute -bottom-[3px] -right-[3px] w-[14px] h-[14px] bg-[#3A9E8F] rounded-full border-2 border-[#FFFDF7]" />
            </div>

            {/* Name + rating */}
            <div className="flex-1 min-w-0">
              <h3 className="text-[17px] font-black text-[#2E4F5E] leading-snug mb-1 truncate group-hover:text-[#E05C42] transition-colors">
                {tutor.name}
              </h3>
              {tutor.rating ? (
                <div className="flex items-center gap-1.5">
                  <span className="text-[#E8C86A] text-[13px] tracking-[-1px]">★★★★★</span>
                  <span className="text-[13px] font-black text-[#2E4F5E]">{tutor.rating.toFixed(1)}</span>
                  <span className="text-[11px] font-bold text-[#7da8b8]">({reviewCount}+)</span>
                </div>
              ) : (
                <span className="text-[10px] font-black text-[#7da8b8] bg-[#f0ede0] px-2 py-0.5 rounded-full border border-[#D4D0C5]">
                  ✨ New tutor
                </span>
              )}
            </div>
          </div>

          {/* Gold divider */}
          <div className="h-[1.5px] rounded bg-gradient-to-r from-[#E8C86A] to-[#E8C86A20] mb-3" />

          {/* Subject chips */}
          <div className="flex flex-wrap gap-[6px] mb-[13px]">
            {topSubjects.map(s => (
              <span key={s} className="text-[11px] font-black px-[11px] py-[4px] rounded-full bg-[#E8C86A30] text-[#2E4F5E] border-[1.5px] border-[#E8C86A]">
                {s}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="text-[10px] font-black px-[9px] py-[4px] rounded-full bg-[#f0ede0] text-[#7da8b8] border-[1.5px] border-[#D4D0C5]">
                +{remainingCount}
              </span>
            )}
          </div>

          {/* Experience + Mode */}
          <div className="flex items-center justify-between mb-[10px]">
            <div className="flex items-center gap-1.5">
              <svg className="w-[14px] h-[14px] text-[#7da8b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
              <span className="text-[13px] font-black text-[#2E4F5E]">{tutor.experience} yrs exp</span>
            </div>
            <span className={`text-[10px] font-black px-[11px] py-[4px] rounded-full border-2 border-[#2E4F5E] shadow-[1.5px_1.5px_0_0_#2E4F5E] ${modeBadge[tutor.mode]}`}>
              {modeLabel[tutor.mode]}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 mb-[11px]">
            <svg className="w-[14px] h-[14px] text-[#7da8b8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="text-[13px] font-black text-[#2E4F5E] truncate">{tutor.city}, {tutor.country}</span>
          </div>

          {/* Bio */}
          <p className="text-[12.5px] font-semibold text-[#4a6a78] leading-[1.65] px-3 py-2.5 bg-[#f5f2e8] rounded-xl border-[1.5px] border-[#e0ddd0] mb-[13px] line-clamp-2">
            {tutor.bio.length > 110 ? `${tutor.bio.substring(0, 110)}…` : tutor.bio}
          </p>

          {/* Footer: Response time + CTA */}
          <div className="flex items-center justify-between pt-[11px] border-t-2 border-dashed border-[#E8C86A70]">
            <div className="flex items-center gap-1.5">
              <span className="text-[15px]" aria-hidden="true">💬</span>
              <span className={`text-[11px] font-black ${responseTime.color}`}>{responseTime.text}</span>
            </div>
            <div className="flex items-center gap-1 text-[#E05C42] font-black text-[13px] transition-all duration-150 group-hover:gap-2">
              <span>View Profile</span>
              <svg className="w-[15px] h-[15px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>

          {/* Urgency — only experienced tutors */}
          {tutor.experience >= 5 && (
            <div className="text-center mt-2">
              <span className="text-[10px] font-black text-[#E05C42] bg-[#E05C4215] px-3 py-[3px] rounded-full">
                ⏳ Limited weekly slots available
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}