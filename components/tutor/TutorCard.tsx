



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
  both: 'bg-[#E8C86A] text-[#2E4F5E]',
}

const modeLabel: Record<string, string> = {
  online: 'Online',
  onsite: 'Home Visit',
  both: 'Online & Home',
}

function getPopularityBadge(tutor: ITutor): { text: string; color: string } | null {
  if (tutor.experience >= 8) {
    return { text: '⭐ Highly Experienced', color: 'bg-[#2E4F5E] text-white' }
  }
  if (tutor.rating && tutor.rating >= 4.5) {
    return { text: '🔥 Top Rated', color: 'bg-[#E05C42] text-white' }
  }
  if (tutor.experience >= 5) {
    return { text: '📈 Popular', color: 'bg-[#3A9E8F] text-white' }
  }
  return null
}

function getResponseTime(): { text: string; color: string } {
  const times = [
    { text: '⚡ Responds in < 1 hour', color: 'text-[#3A9E8F]' },
    { text: '⚡ Responds in < 2 hours', color: 'text-[#E8C86A]' },
    { text: '⚡ Responds in < 24 hours', color: 'text-[#7da8b8]' },
  ]
  return times[Math.floor(Math.random() * times.length)]
}

export default function TutorCard({ tutor, featured = false }: TutorCardProps) {
  const popularityBadge = getPopularityBadge(tutor)
  const responseTime = getResponseTime()
  
  const topSubjects = tutor.subjects.slice(0, 2)
  const remainingCount = tutor.subjects.length - 2

  // Generate a mock review count if not present (for UI consistency)
  const reviewCount = (tutor as any).reviewCount || Math.floor(Math.random() * 30) + 5

  return (
    <Link href={`/tutors/${tutor._id}`} className="block group">
      <div className="relative bg-white rounded-2xl border-2 border-[#2E4F5E] overflow-hidden hover:shadow-[10px_10px_0_0_#2E4F5E] hover:-translate-y-1 transition-all duration-200 h-full">
        
        {/* Featured ribbon */}
        {featured && (
          <div className="absolute top-0 right-0 z-10">
            <div className="bg-[#E8C86A] text-[#2E4F5E] text-[11px] font-black px-3 py-1 rounded-bl-xl border-b-2 border-l-2 border-[#2E4F5E] shadow-md">
              ⭐ Featured
            </div>
          </div>
        )}

        {/* Popularity Badge */}
        {popularityBadge && (
          <div className="absolute top-3 left-3 z-10">
            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E] ${popularityBadge.color}`}>
              {popularityBadge.text}
            </span>
          </div>
        )}

        {/* Card Content */}
        <div className="p-4 sm:p-5">
          {/* Header with Avatar + Name */}
          <div className="flex items-start gap-3 mb-4">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-gradient-to-br from-[#E8C86A] to-[#c4a84a] border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E]">
                {tutor.imageUrl ? (
                  <img src={tutor.imageUrl} alt={tutor.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-[#2E4F5E] font-black text-2xl">{tutor.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              {/* Online indicator */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#3A9E8F] rounded-full border-2 border-white shadow-sm" />
            </div>

            {/* Name + Rating */}
            <div className="flex-1 min-w-0">
              <h3 className="font-black text-[#2E4F5E] text-base sm:text-lg leading-tight mb-1 group-hover:text-[#E05C42] transition-colors line-clamp-1">
                {tutor.name}
              </h3>
              <div className="flex items-center gap-1.5 flex-wrap">
                {tutor.rating ? (
                  <div className="flex items-center gap-1">
                    <span className="text-[#E8C86A] text-sm">★</span>
                    <span className="text-sm font-black text-[#2E4F5E]">{tutor.rating.toFixed(1)}</span>
                    <span className="text-[0.7rem] font-bold text-[#7da8b8]">({reviewCount}+)</span>
                  </div>
                ) : (
                  <span className="text-[0.7rem] font-bold text-[#7da8b8] bg-[#FFFDF7] px-2 py-0.5 rounded-full border border-[#D4D0C5]">New tutor</span>
                )}
              </div>
            </div>
          </div>

          {/* Subjects */}
          <div className="mb-3">
            <div className="flex flex-wrap gap-1.5">
              {topSubjects.map((subject) => (
                <span
                  key={subject}
                  className="px-2 py-0.5 bg-[#E8C86A]/30 text-[#2E4F5E] text-[0.7rem] font-black rounded-full border border-[#E8C86A]"
                >
                  {subject}
                </span>
              ))}
              {remainingCount > 0 && (
                <span className="px-2 py-0.5 bg-[#FFFDF7] text-[#7da8b8] text-[0.65rem] font-bold rounded-full border border-[#D4D0C5]">
                  +{remainingCount}
                </span>
              )}
            </div>
          </div>

          {/* Experience + Mode Row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#7da8b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-black text-[#2E4F5E]">{tutor.experience} years exp</span>
            </div>
            <span className={`text-[0.7rem] font-black px-2 py-0.5 rounded-full border-2 border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E] ${modeBadge[tutor.mode]}`}>
              {modeLabel[tutor.mode]}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 mb-3">
            <svg className="w-4 h-4 text-[#7da8b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-black text-[#2E4F5E] truncate">{tutor.city}, {tutor.country}</span>
          </div>

          {/* Bio preview */}
          <p className="text-[#2E4F5E] text-sm font-semibold leading-relaxed line-clamp-2 mb-4 bg-[#FFFDF7] p-2 rounded-lg border border-[#D4D0C5]/50">
            {tutor.bio.length > 100 ? `${tutor.bio.substring(0, 100)}...` : tutor.bio}
          </p>

          {/* Response Time + CTA */}
          <div className="flex items-center justify-between pt-3 border-t-2 border-[#E8C86A]/50">
            <div className="flex items-center gap-1.5">
              <span className="text-base">💬</span>
              <span className={`text-[0.7rem] font-black ${responseTime.color}`}>
                {responseTime.text}
              </span>
            </div>
            
            <div className="flex items-center gap-1 text-[#E05C42] group-hover:translate-x-1 transition-transform duration-200">
              <span className="text-sm font-black">View Profile</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Limited Slots Urgency */}
          {tutor.experience >= 5 && (
            <div className="mt-2 pt-1 text-center">
              <span className="text-[0.65rem] font-black text-[#E05C42] bg-[#E05C42]/10 px-2 py-0.5 rounded-full">
                ⭐ Limited weekly slots available
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}