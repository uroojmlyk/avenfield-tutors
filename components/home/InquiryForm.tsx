'use client'

import { useState, FormEvent } from 'react'
import { trackEvent } from '@/lib/analytics'

const WHATSAPP_URL = `https://wa.me/923095154253?text=${encodeURIComponent(
  'Hi! I tried the inquiry form on the AVENField Tutors website and need help finding a tutor.'
)}`

const GRADES = [
  'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8',
  'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'O Level', 'A Level', 'University',
]
const SUBJECTS = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Urdu', 'Computer Science',
  'Statistics', 'Islamic Studies', 'Pakistan Studies', 'Quran & Arabic', 'Accounting',
  'Economics', 'IELTS', 'MDCAT',
]
const CURRICULA = [
  'Cambridge O Level', 'Cambridge A Level', 'IGCSE', 'Matric', 'FSc', 'Federal Board',
]
const OTHER = 'Other'

const MODES = [
  { value: 'home', label: 'Home Tuition' },
  { value: 'online', label: 'Online Tuition' },
  { value: 'either', label: 'Either Option' },
] as const

const field =
  'w-full px-3.5 py-3 rounded-xl border-2 border-[#D4D0C5] bg-white text-[#2E4F5E] text-base font-semibold placeholder:text-[#9bb3bd] focus:outline-none focus:border-[#3A9E8F] focus:ring-2 focus:ring-[#3A9E8F]/20'
const label = 'block text-[0.8rem] font-black text-[#2E4F5E] mb-1.5'

export default function InquiryForm() {
  const [parentName, setParentName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [grade, setGrade] = useState('')
  const [gradeOther, setGradeOther] = useState('')
  const [subject, setSubject] = useState('')
  const [subjectOther, setSubjectOther] = useState('')
  const [curriculum, setCurriculum] = useState('')
  const [curriculumOther, setCurriculumOther] = useState('')
  const [cityArea, setCityArea] = useState('')
  const [mode, setMode] = useState('')
  const [preferredTiming, setPreferredTiming] = useState('')
  const [website, setWebsite] = useState('') // honeypot

  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')
  const [error, setError] = useState('')
  const [waDetailsUrl, setWaDetailsUrl] = useState('')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (status === 'sending') return
    setError('')

    const finalGrade = grade === OTHER ? gradeOther.trim() : grade
    const finalSubject = subject === OTHER ? subjectOther.trim() : subject
    const finalCurriculum = curriculum === OTHER ? curriculumOther.trim() : curriculum

    if (!parentName.trim() || !whatsapp.trim() || !finalGrade || !finalSubject || !cityArea.trim() || !mode) {
      setError('Please complete all required fields (marked with *).')
      return
    }
    if (!/^\+?[\d\s\-()]{10,20}$/.test(whatsapp.trim())) {
      setError('Please enter a valid WhatsApp number, for example 0309 5154253.')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          parentName,
          whatsapp,
          grade: finalGrade,
          subject: finalSubject,
          curriculum: finalCurriculum,
          cityArea,
          mode,
          preferredTiming,
          website,
          sourcePage: '/',
        }),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok || !data?.success) {
        setStatus('idle')
        setError(data?.error || 'We could not submit your inquiry. Please try again or message us on WhatsApp.')
        return
      }

      // Counted as a lead ONLY after the server confirmed the inquiry was stored.
      // No name / phone number is sent to analytics.
      trackEvent('generate_lead', {
        form_id: 'home_inquiry',
        lead_source: 'homepage_inquiry_form',
        learning_mode: mode,
        subject: finalSubject,
        curriculum: finalCurriculum || 'not_specified',
      })
      // Pre-filled WhatsApp message with the same details, so the parent can
      // also send them straight to our WhatsApp number with one tap.
      const modeText = MODES.find(m => m.value === mode)?.label || mode
      const lines = [
        'Hi! I just submitted a tutor inquiry on the AVENField Tutors website.',
        '',
        `Parent: ${parentName.trim()}`,
        `WhatsApp: ${whatsapp.trim()}`,
        `Grade: ${finalGrade}`,
        `Subject: ${finalSubject}`,
        `Curriculum/Board: ${finalCurriculum || 'Not specified'}`,
        `City and Area: ${cityArea.trim()}`,
        `Learning Mode: ${modeText}`,
        `Preferred Days/Timings: ${preferredTiming.trim() || 'Not specified'}`,
      ]
      setWaDetailsUrl(`https://wa.me/923095154253?text=${encodeURIComponent(lines.join('\n'))}`)
      setStatus('success')
    } catch {
      setStatus('idle')
      setError('Network problem. Please check your connection and try again, or message us on WhatsApp.')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="bg-white border-2 border-[#3A9E8F] rounded-2xl p-6 sm:p-8 text-center shadow-[4px_4px_0_0_#3A9E8F]"
      >
        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#3A9E8F] text-white flex items-center justify-center text-xl font-black" aria-hidden="true">✓</div>
        <h3 className="text-[1.15rem] sm:text-[1.3rem] font-black text-[#2E4F5E] mb-2">Your inquiry has been received</h3>
        <p className="text-[#4a6a78] text-[0.9rem] font-semibold leading-relaxed max-w-md mx-auto">
          Thank you. Our team will review your requirements and contact you on the WhatsApp number you provided to discuss suitable tutoring options.
        </p>
        {waDetailsUrl && (
          <>
            <a
              href={waDetailsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-location="inquiry_success"
              className="btn-press mt-5 inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white font-black text-[0.92rem] rounded-xl border-2 border-[#1da851] shadow-[0_3px_0_0_#1da851] hover:shadow-[0_1px_0_0_#1da851] hover:translate-y-[2px]"
            >
              Send These Details on WhatsApp
            </a>
            <p className="mt-2 text-[0.72rem] font-semibold text-[#7da8b8]">
              Optional: your inquiry is already saved. This opens WhatsApp with your details ready to send.
            </p>
          </>
        )}
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="relative bg-white border-2 border-[#2E4F5E] rounded-2xl p-5 sm:p-7 shadow-[5px_5px_0_0_#2E4F5E]"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="inq-name" className={label}>Parent&apos;s Name *</label>
          <input id="inq-name" name="parentName" type="text" autoComplete="name" required maxLength={80}
            value={parentName} onChange={e => setParentName(e.target.value)} className={field} />
        </div>

        <div>
          <label htmlFor="inq-whatsapp" className={label}>WhatsApp Number *</label>
          <input id="inq-whatsapp" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" required maxLength={25}
            placeholder="0309 5154253" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} className={field} />
        </div>

        <div>
          <label htmlFor="inq-grade" className={label}>Student&apos;s Grade *</label>
          <select id="inq-grade" name="grade" required value={grade} onChange={e => setGrade(e.target.value)} className={field}>
            <option value="">Select grade or level</option>
            {GRADES.map(g => <option key={g} value={g}>{g}</option>)}
            <option value={OTHER}>{OTHER}</option>
          </select>
          {grade === OTHER && (
            <input type="text" aria-label="Enter the grade or level" placeholder="Enter grade or level" maxLength={60}
              value={gradeOther} onChange={e => setGradeOther(e.target.value)} className={`${field} mt-2`} />
          )}
        </div>

        <div>
          <label htmlFor="inq-subject" className={label}>Subject Required *</label>
          <select id="inq-subject" name="subject" required value={subject} onChange={e => setSubject(e.target.value)} className={field}>
            <option value="">Select subject</option>
            {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
            <option value={OTHER}>{OTHER}</option>
          </select>
          {subject === OTHER && (
            <input type="text" aria-label="Enter the subject" placeholder="Enter subject" maxLength={80}
              value={subjectOther} onChange={e => setSubjectOther(e.target.value)} className={`${field} mt-2`} />
          )}
        </div>

        <div>
          <label htmlFor="inq-curriculum" className={label}>Curriculum or Board</label>
          <select id="inq-curriculum" name="curriculum" value={curriculum} onChange={e => setCurriculum(e.target.value)} className={field}>
            <option value="">Select if known</option>
            {CURRICULA.map(c => <option key={c} value={c}>{c}</option>)}
            <option value={OTHER}>{OTHER}</option>
          </select>
          {curriculum === OTHER && (
            <input type="text" aria-label="Enter the curriculum or board" placeholder="Enter curriculum or board" maxLength={80}
              value={curriculumOther} onChange={e => setCurriculumOther(e.target.value)} className={`${field} mt-2`} />
          )}
        </div>

        <div>
          <label htmlFor="inq-city" className={label}>City and Area *</label>
          <input id="inq-city" name="cityArea" type="text" autoComplete="address-level2" required maxLength={120}
            placeholder="e.g. Islamabad, F-10" value={cityArea} onChange={e => setCityArea(e.target.value)} className={field} />
        </div>
      </div>

      <fieldset className="mt-4">
        <legend className={label}>Preferred Learning Mode *</legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {MODES.map(m => (
            <label
              key={m.value}
              className={`flex items-center gap-2 px-3.5 py-3 rounded-xl border-2 cursor-pointer text-[0.88rem] font-black transition-colors duration-100 ${
                mode === m.value ? 'border-[#3A9E8F] bg-[#3A9E8F]/10 text-[#2E4F5E]' : 'border-[#D4D0C5] bg-white text-[#4a6a78] hover:border-[#3A9E8F]'
              }`}
            >
              <input type="radio" name="mode" value={m.value} checked={mode === m.value}
                onChange={() => setMode(m.value)} className="accent-[#3A9E8F] w-4 h-4" required />
              {m.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-4">
        <label htmlFor="inq-timing" className={label}>Preferred Days or Timings</label>
        <input id="inq-timing" name="preferredTiming" type="text" maxLength={160}
          placeholder="e.g. Mon, Wed, Fri after 4 pm" value={preferredTiming}
          onChange={e => setPreferredTiming(e.target.value)} className={field} />
      </div>

      {/* Honeypot: hidden from people, visible to simple bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="inq-website">Website</label>
        <input id="inq-website" name="website" type="text" tabIndex={-1} autoComplete="off"
          value={website} onChange={e => setWebsite(e.target.value)} />
      </div>

      {error && (
        <p role="alert" className="mt-4 text-[0.85rem] font-bold text-[#C43D24] bg-[#C43D24]/10 border border-[#C43D24]/30 rounded-xl px-3.5 py-2.5">
          {error}{' '}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-track-location="inquiry_form_error"
            className="underline font-black">Message us on WhatsApp</a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-press mt-5 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#c94e37] text-white font-black text-[0.95rem] rounded-xl border-2 border-[#a83c2a] shadow-[0_4px_0_0_#a83c2a] hover:shadow-[0_2px_0_0_#a83c2a] hover:translate-y-[2px] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending...' : 'Find a Suitable Tutor'}
      </button>
      <p className="mt-3 text-[0.72rem] font-semibold text-[#7da8b8]">
        We use these details only to contact you about tutoring options.
      </p>
    </form>
  )
}