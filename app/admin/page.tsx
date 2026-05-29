

// 'use client'

// import { useEffect, useState, useRef } from 'react'
// import { ITutor } from '@/types'

// type Filter = 'pending' | 'approved' | 'rejected'

// const SUBJECTS = [
//   'Mathematics','Physics','Chemistry','Biology','English','Urdu',
//   'O Level','A Level','IELTS','TOEFL','Computer Science','Coding',
//   'Economics','Accounting','Arabic','Quran','History','Geography',
// ]

// async function uploadImageToImgBB(file: File): Promise<string> {
//   const apiKey = process.env.NEXT_PUBLIC_IMGBB_KEY
//   if (!apiKey) throw new Error('NEXT_PUBLIC_IMGBB_KEY missing in .env.local')
//   const formData = new FormData()
//   formData.append('image', file)
//   const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, { method: 'POST', body: formData })
//   const data = await res.json()
//   if (!data.success) throw new Error('Upload failed')
//   return data.data.url
// }

// // ─── Password Change Modal ────────────────────────────────────────────────────
// function PasswordModal({ onClose }: { onClose: () => void }) {
//   const [current, setCurrent]   = useState('')
//   const [next, setNext]         = useState('')
//   const [confirm, setConfirm]   = useState('')
//   const [loading, setLoading]   = useState(false)
//   const [error, setError]       = useState('')
//   const [success, setSuccess]   = useState('')

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault()
//     setError('')
//     setSuccess('')

//     if (next !== confirm) {
//       setError('New passwords do not match')
//       return
//     }
//     if (next.length < 6) {
//       setError('Password must be at least 6 characters')
//       return
//     }

//     setLoading(true)
//     try {
//       const res = await fetch('/api/admin/change-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ currentPassword: current, newPassword: next }),
//       })
//       const data = await res.json()
//       if (!res.ok) {
//         setError(data.error)
//       } else {
//         setSuccess(`Password changed. Now update your .env.local:\nADMIN_PASSWORD=${data.newPassword}\nThen restart the server.`)
//       }
//     } catch {
//       setError('Server error')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const inp = "w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#7F77DD]/60 transition-all"
//   const lbl = "block text-white/50 text-xs uppercase tracking-widest mb-2"

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
//       <div className="bg-[#111118] border border-white/10 rounded-2xl w-full max-w-md">
//         <div className="flex items-center justify-between p-6 border-b border-white/10">
//           <h2 className="text-white font-semibold text-lg">Change Password</h2>
//           <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
//             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
//           <div>
//             <label className={lbl}>Current Password</label>
//             <input type="password" className={inp} value={current}
//               onChange={e => setCurrent(e.target.value)} required placeholder="••••••••" />
//           </div>
//           <div>
//             <label className={lbl}>New Password</label>
//             <input type="password" className={inp} value={next}
//               onChange={e => setNext(e.target.value)} required placeholder="Min 6 characters" />
//           </div>
//           <div>
//             <label className={lbl}>Confirm New Password</label>
//             <input type="password" className={inp} value={confirm}
//               onChange={e => setConfirm(e.target.value)} required placeholder="Repeat new password" />
//           </div>

//           {error && (
//             <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-xl">
//               <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
//               </svg>
//               {error}
//             </div>
//           )}

//           {success && (
//             <div className="bg-[#9FE1CB]/10 border border-[#9FE1CB]/20 text-[#9FE1CB] text-xs px-4 py-3 rounded-xl whitespace-pre-line leading-relaxed">
//               ✓ {success}
//             </div>
//           )}

//           <div className="flex gap-3 pt-1">
//             <button type="button" onClick={onClose}
//               className="flex-1 py-3 border border-white/10 text-white/60 hover:text-white rounded-xl text-sm font-medium transition-all">
//               Cancel
//             </button>
//             <button type="submit" disabled={loading}
//               className="flex-1 py-3 bg-gradient-to-r from-[#7F77DD] to-[#534AB7] text-white rounded-xl text-sm font-semibold disabled:opacity-50 transition-all">
//               {loading ? 'Updating...' : 'Update Password'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// // ─── Edit Modal ───────────────────────────────────────────────────────────────
// function EditModal({ tutor, onClose, onSave }: {
//   tutor: ITutor; onClose: () => void; onSave: () => void
// }) {
//   const [form, setForm]           = useState({ ...tutor })
//   const [saving, setSaving]       = useState(false)
//   const [uploading, setUploading] = useState(false)
//   const [uploadError, setUploadError] = useState('')
//   const [preview, setPreview]     = useState<string>(tutor.imageUrl || '')
//   const fileRef                   = useRef<HTMLInputElement>(null)

//   async function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>) {
//     const file = e.target.files?.[0]
//     if (!file) return
//     if (!file.type.startsWith('image/')) { setUploadError('Only images allowed'); return }
//     if (file.size > 5 * 1024 * 1024) { setUploadError('Max 5MB'); return }
//     setUploadError('')
//     setUploading(true)
//     const reader = new FileReader()
//     reader.onload = (ev) => setPreview(ev.target?.result as string)
//     reader.readAsDataURL(file)
//     try {
//       const url = await uploadImageToImgBB(file)
//       setForm(f => ({ ...f, imageUrl: url }))
//       setPreview(url)
//     } catch {
//       setUploadError('Upload failed. Check IMGBB key.')
//       setPreview(tutor.imageUrl || '')
//     } finally {
//       setUploading(false)
//     }
//   }

//   async function handleSave() {
//     setSaving(true)
//     await fetch(`/api/admin/tutors/${tutor._id}`, {
//       method: 'PATCH',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     })
//     setSaving(false)
//     onSave()
//   }

//   const inp = "w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#7F77DD]/60 transition-all"
//   const lbl = "block text-white/50 text-xs uppercase tracking-widest mb-2"

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
//       <div className="bg-[#111118] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-[#111118] z-10">
//           <h2 className="text-white font-semibold text-lg">Edit Tutor Profile</h2>
//           <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
//             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         <div className="p-6 flex flex-col gap-6">
//           {/* Profile Picture */}
//           <div>
//             <label className={lbl}>Profile Picture</label>
//             <div className="flex items-start gap-4">
//               <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex-shrink-0">
//                 {preview
//                   ? <img src={preview} alt="preview" className="w-full h-full object-cover" />
//                   : <div className="w-full h-full flex items-center justify-center text-white/30 text-2xl font-bold">{form.name.charAt(0)}</div>
//                 }
//                 {uploading && (
//                   <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
//                     <svg className="w-5 h-5 animate-spin text-[#7F77DD]" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
//                     </svg>
//                   </div>
//                 )}
//               </div>
//               <div className="flex-1">
//                 <input ref={fileRef} type="file" accept="image/*" onChange={handleImageSelect} className="hidden" id="img-upload" />
//                 <div className="flex gap-2 mb-2">
//                   <label htmlFor="img-upload"
//                     className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium cursor-pointer border transition-all ${uploading ? 'opacity-50 cursor-not-allowed bg-white/5 border-white/10 text-white/40' : 'bg-[#7F77DD]/10 border-[#7F77DD]/30 text-[#CECBF6] hover:bg-[#7F77DD]/20'}`}>
//                     <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                     {uploading ? 'Uploading...' : 'Upload Photo'}
//                   </label>
//                   {preview && (
//                     <button type="button" onClick={() => { setForm(f => ({ ...f, imageUrl: '' })); setPreview('') }}
//                       className="px-4 py-2.5 rounded-xl text-sm font-medium bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all">
//                       Remove
//                     </button>
//                   )}
//                 </div>
//                 <p className="text-white/30 text-xs">JPG, PNG · Max 5MB</p>
//                 {uploadError && <p className="text-red-400 text-xs mt-1.5">{uploadError}</p>}
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div><label className={lbl}>Full Name</label><input className={inp} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} /></div>
//             <div><label className={lbl}>WhatsApp</label><input className={inp} value={form.whatsapp} onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))} /></div>
//           </div>

//           <div>
//             <label className={lbl}>Subjects</label>
//             <div className="flex flex-wrap gap-2">
//               {SUBJECTS.map(s => (
//                 <button key={s} type="button" onClick={() => setForm(f => ({ ...f, subjects: f.subjects.includes(s) ? f.subjects.filter(x => x !== s) : [...f.subjects, s] }))}
//                   className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${form.subjects.includes(s) ? 'bg-[#7F77DD] text-white border-[#7F77DD]' : 'bg-white/5 text-white/50 border-white/10 hover:border-[#7F77DD]/50'}`}>
//                   {s}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div><label className={lbl}>Experience (yrs)</label><input type="number" className={inp} value={form.experience} onChange={e => setForm(f => ({ ...f, experience: parseInt(e.target.value) || 0 }))} /></div>
//             <div>
//               <label className={lbl}>Mode</label>
//               <select className={inp} value={form.mode} onChange={e => setForm(f => ({ ...f, mode: e.target.value as ITutor['mode'] }))}>
//                 <option value="both">Online & Home Visit</option>
//                 <option value="online">Online Only</option>
//                 <option value="onsite">Home Visit Only</option>
//               </select>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div><label className={lbl}>City</label><input className={inp} value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} /></div>
//             <div><label className={lbl}>Country</label><input className={inp} value={form.country} onChange={e => setForm(f => ({ ...f, country: e.target.value }))} /></div>
//           </div>

//           <div><label className={lbl}>Education</label><input className={inp} value={form.education} onChange={e => setForm(f => ({ ...f, education: e.target.value }))} /></div>
//           <div><label className={lbl}>Bio</label><textarea rows={4} className={`${inp} resize-none`} value={form.bio} onChange={e => setForm(f => ({ ...f, bio: e.target.value }))} /></div>

//           <div className="flex gap-3">
//             <button onClick={onClose} className="flex-1 py-3 border border-white/10 text-white/60 hover:text-white rounded-xl text-sm font-medium transition-all">Cancel</button>
//             <button onClick={handleSave} disabled={saving || uploading} className="flex-1 py-3 bg-gradient-to-r from-[#7F77DD] to-[#534AB7] text-white rounded-xl text-sm font-semibold disabled:opacity-50 transition-all">
//               {saving ? 'Saving...' : 'Save Changes'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // ─── Main Dashboard ───────────────────────────────────────────────────────────
// export default function AdminDashboard() {
//   const [tutors, setTutors]         = useState<ITutor[]>([])
//   const [filter, setFilter]         = useState<Filter>('pending')
//   const [loading, setLoading]       = useState(true)
//   const [editingTutor, setEditing]  = useState<ITutor | null>(null)
//   const [showPassword, setShowPass] = useState(false)
//   const [counts, setCounts]         = useState({ pending: 0, approved: 0, rejected: 0 })

//   async function fetchTutors(f = filter) {
//     setLoading(true)
//     try {
//       const [main, p, a, r] = await Promise.all([
//         fetch(`/api/admin/tutors?status=${f}`),
//         fetch('/api/admin/tutors?status=pending'),
//         fetch('/api/admin/tutors?status=approved'),
//         fetch('/api/admin/tutors?status=rejected'),
//       ])
//       if (main.ok) setTutors(await main.json())
//       const [pd, ad, rd] = await Promise.all([p.json(), a.json(), r.json()])
//       setCounts({ pending: pd.length, approved: ad.length, rejected: rd.length })
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => { fetchTutors(filter) }, [filter])

//   async function updateStatus(id: string, status: string) {
//     await fetch(`/api/admin/tutors/${id}`, {
//       method: 'PATCH',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ status }),
//     })
//     fetchTutors(filter)
//   }

//   async function deleteTutor(id: string) {
//     if (!confirm('Permanently delete this tutor?')) return
//     await fetch(`/api/admin/tutors/${id}`, { method: 'DELETE' })
//     fetchTutors(filter)
//   }

//   async function logout() {
//     await fetch('/api/admin/logout', { method: 'POST' })
//     window.location.href = '/admin/login'
//   }

//   const filterCfg = {
//     pending:  { color: 'text-[#FAC775]', ring: 'border-[#FAC775]/30 bg-[#FAC775]/10' },
//     approved: { color: 'text-[#9FE1CB]', ring: 'border-[#9FE1CB]/30 bg-[#9FE1CB]/10' },
//     rejected: { color: 'text-[#F7C1C1]', ring: 'border-[#F7C1C1]/30 bg-[#F7C1C1]/10' },
//   }

//   return (
//     <div className="min-h-screen bg-[#0A0A0F]">
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#7F77DD] opacity-[0.04] blur-[120px]" />
//         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1D9E75] opacity-[0.03] blur-[140px]" />
//         <div className="absolute inset-0 opacity-[0.025]"
//           style={{ backgroundImage: 'linear-gradient(#7F77DD 1px,transparent 1px),linear-gradient(90deg,#7F77DD 1px,transparent 1px)', backgroundSize: '50px 50px' }} />
//       </div>

//       <div className="relative">
//         {/* Topbar */}
//         <div className="border-b border-white/[0.06] bg-[#0D0D14]/80 backdrop-blur-md sticky top-0 z-40">
//           <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7F77DD] to-[#534AB7] flex items-center justify-center text-white font-bold text-sm">E</div>
//               <span className="text-white font-semibold">EduMatch</span>
//               <span className="text-white/20 text-sm">/ Admin</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <a href="/" target="_blank" className="text-white/40 hover:text-white text-sm transition-colors px-3 py-2">
//                 View Site ↗
//               </a>
//               {/* Password change button */}
//               <button onClick={() => setShowPass(true)}
//                 className="flex items-center gap-2 px-3 py-2 border border-white/10 text-white/50 hover:text-white hover:border-white/20 rounded-lg text-sm transition-all">
//                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
//                 </svg>
//                 <span className="hidden sm:inline">Change Password</span>
//               </button>
//               <button onClick={logout}
//                 className="flex items-center gap-2 px-3 py-2 border border-white/10 text-white/50 hover:text-red-400 hover:border-red-400/20 rounded-lg text-sm transition-all">
//                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                 </svg>
//                 <span className="hidden sm:inline">Logout</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-6xl mx-auto px-6 py-10">
//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-4 mb-10">
//             {(['pending','approved','rejected'] as Filter[]).map(f => (
//               <button key={f} onClick={() => setFilter(f)}
//                 className={`p-5 rounded-2xl border transition-all text-left ${filter === f ? filterCfg[f].ring : 'bg-white/[0.02] border-white/[0.06] hover:border-white/10'}`}>
//                 <p className={`text-3xl font-bold mb-1 ${filter === f ? filterCfg[f].color : 'text-white/60'}`}>{counts[f]}</p>
//                 <p className="text-white/40 text-sm capitalize">{f} Applications</p>
//               </button>
//             ))}
//           </div>

//           <div className="flex items-center justify-between mb-6">
//             <h2 className={`text-lg font-semibold capitalize ${filterCfg[filter].color}`}>{filter} Tutors</h2>
//             <span className="text-white/30 text-sm">{tutors.length} results</span>
//           </div>

//           {loading ? (
//             <div className="flex justify-center py-24">
//               <svg className="w-6 h-6 animate-spin text-[#7F77DD]" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
//               </svg>
//             </div>
//           ) : tutors.length === 0 ? (
//             <div className="text-center py-24 text-white/20">
//               <p className="text-5xl mb-4">📭</p>
//               <p>No {filter} applications.</p>
//             </div>
//           ) : (
//             <div className="flex flex-col gap-3">
//               {tutors.map(t => (
//                 <div key={t._id} className="bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.12] rounded-2xl p-5 transition-all">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 rounded-xl border border-[#7F77DD]/20 flex-shrink-0 overflow-hidden bg-gradient-to-br from-[#7F77DD]/20 to-[#534AB7]/20">
//                       {t.imageUrl
//                         ? <img src={t.imageUrl} alt={t.name} className="w-full h-full object-cover" />
//                         : <div className="w-full h-full flex items-center justify-center text-[#7F77DD] font-bold text-lg">{t.name.charAt(0)}</div>
//                       }
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-start justify-between gap-4 flex-wrap">
//                         <div>
//                           <h3 className="text-white font-semibold">{t.name}</h3>
//                           <p className="text-white/40 text-sm mt-0.5">{t.city}, {t.country} · {t.experience} yrs · {t.mode}</p>
//                           <p className="text-white/30 text-xs mt-0.5">{t.whatsapp}</p>
//                         </div>
//                         <div className="flex gap-2 flex-wrap">
//                           {filter !== 'approved' && (
//                             <button onClick={() => updateStatus(t._id, 'approved')}
//                               className="px-3 py-1.5 bg-[#9FE1CB]/10 hover:bg-[#9FE1CB]/20 border border-[#9FE1CB]/20 text-[#9FE1CB] text-xs font-semibold rounded-lg transition-all">
//                               ✓ Approve
//                             </button>
//                           )}
//                           {filter !== 'rejected' && (
//                             <button onClick={() => updateStatus(t._id, 'rejected')}
//                               className="px-3 py-1.5 bg-[#FAC775]/10 hover:bg-[#FAC775]/20 border border-[#FAC775]/20 text-[#FAC775] text-xs font-semibold rounded-lg transition-all">
//                               ✕ Reject
//                             </button>
//                           )}
//                           <button onClick={() => setEditing(t)}
//                             className="px-3 py-1.5 bg-[#7F77DD]/10 hover:bg-[#7F77DD]/20 border border-[#7F77DD]/20 text-[#CECBF6] text-xs font-semibold rounded-lg transition-all">
//                             ✎ Edit
//                           </button>
//                           <button onClick={() => deleteTutor(t._id)}
//                             className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 text-xs font-semibold rounded-lg transition-all">
//                             🗑
//                           </button>
//                         </div>
//                       </div>
//                       <div className="flex flex-wrap gap-1.5 mt-3">
//                         {t.subjects.map(s => (
//                           <span key={s} className="text-xs px-2 py-0.5 bg-white/[0.05] border border-white/[0.08] text-white/50 rounded-md">{s}</span>
//                         ))}
//                       </div>
//                       <p className="text-white/30 text-xs mt-2 line-clamp-2">{t.bio}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {editingTutor && <EditModal tutor={editingTutor} onClose={() => setEditing(null)} onSave={() => { setEditing(null); fetchTutors(filter) }} />}
//       {showPassword && <PasswordModal onClose={() => setShowPass(false)} />}
//     </div>
//   )
// }




'use client'

import { useEffect, useState, useRef } from 'react'
import { ITutor } from '@/types'

type Filter = 'pending' | 'approved' | 'rejected'

const SUBJECTS = [
  'Mathematics','Physics','Chemistry','Biology','English','Urdu',
  'O Level','A Level','IELTS','TOEFL','Computer Science','Coding',
  'Economics','Accounting','Arabic','Quran','History','Geography',
]

async function uploadImageToImgBB(file: File): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_IMGBB_KEY
  if (!apiKey) throw new Error('NEXT_PUBLIC_IMGBB_KEY missing in .env.local')
  const formData = new FormData()
  formData.append('image', file)
  const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, { method: 'POST', body: formData })
  const data = await res.json()
  if (!data.success) throw new Error('Upload failed')
  return data.data.url
}

// ─── Password Change Modal ────────────────────────────────────────────────────
function PasswordModal({ onClose }: { onClose: () => void }) {
  const [current, setCurrent] = useState('')
  const [next, setNext] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (next !== confirm) {
      setError('New passwords do not match')
      return
    }
    if (next.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword: current, newPassword: next }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Failed to change password')
      } else {
        setSuccess(`Password changed. Now update your .env.local:\nADMIN_PASSWORD=${data.newPassword}\nThen restart the server.`)
      }
    } catch (err) {
      console.error(err)
      setError('Server error')
    } finally {
      setLoading(false)
    }
  }

  const inp = "w-full bg-white border-2 border-[#D4D0C5] rounded-xl px-4 py-3 text-[#2E4F5E] placeholder:text-[#a5b8c2] text-sm font-semibold focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/30 transition-all"
  const lbl = "block text-[#2E4F5E] text-[11px] font-black uppercase tracking-[0.2em] mb-2"

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2E4F5E]/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[12px_12px_0_0_#1a3a44] w-full max-w-md">
        <div className="flex items-center justify-between p-5 border-b-2 border-[#E8C86A]">
          <h2 className="text-[#2E4F5E] font-black text-xl">Change Password</h2>
          <button onClick={onClose} className="text-[#7da8b8] hover:text-[#E05C42] transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
          <div>
            <label className={lbl}>Current Password</label>
            <input type="password" className={inp} value={current}
              onChange={e => setCurrent(e.target.value)} required placeholder="••••••••" />
          </div>
          <div>
            <label className={lbl}>New Password</label>
            <input type="password" className={inp} value={next}
              onChange={e => setNext(e.target.value)} required placeholder="Min 6 characters" />
          </div>
          <div>
            <label className={lbl}>Confirm New Password</label>
            <input type="password" className={inp} value={confirm}
              onChange={e => setConfirm(e.target.value)} required placeholder="Repeat new password" />
          </div>

          {error && (
            <div className="flex items-center gap-2 bg-[#E05C42]/10 border-2 border-[#E05C42] text-[#E05C42] text-sm font-bold px-4 py-3 rounded-xl">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
              </svg>
              {error}
            </div>
          )}

          {success && (
            <div className="bg-[#3A9E8F]/10 border-2 border-[#3A9E8F] text-[#2E4F5E] text-xs font-semibold px-4 py-3 rounded-xl whitespace-pre-line leading-relaxed">
              ✓ {success}
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose}
              className="flex-1 py-3 border-2 border-[#D4D0C5] text-[#7da8b8] font-black hover:text-[#2E4F5E] hover:border-[#2E4F5E] rounded-xl text-sm transition-all">
              Cancel
            </button>
            <button type="submit" disabled={loading}
              className="flex-1 py-3 bg-[#E05C42] text-white font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] disabled:opacity-50 transition-all">
              {loading ? 'Updating...' : 'Update Password'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ─── Edit Modal ───────────────────────────────────────────────────────────────
function EditModal({ tutor, onClose, onSave }: {
  tutor: ITutor; onClose: () => void; onSave: () => void
}) {
  const [form, setForm] = useState({ ...tutor })
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [preview, setPreview] = useState<string>(tutor.imageUrl || '')
  const fileRef = useRef<HTMLInputElement>(null)

  async function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) { setUploadError('Only images allowed'); return }
    if (file.size > 5 * 1024 * 1024) { setUploadError('Max 5MB'); return }
    setUploadError('')
    setUploading(true)
    const reader = new FileReader()
    reader.onload = (ev) => setPreview(ev.target?.result as string)
    reader.readAsDataURL(file)
    try {
      const url = await uploadImageToImgBB(file)
      setForm(f => ({ ...f, imageUrl: url }))
      setPreview(url)
    } catch (err) {
      console.error(err)
      setUploadError('Upload failed. Check IMGBB key.')
      setPreview(tutor.imageUrl || '')
    } finally {
      setUploading(false)
    }
  }

  async function handleSave() {
    setSaving(true)
    try {
      const res = await fetch(`/api/admin/tutors/${tutor._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Save failed')
      onSave()
      onClose()
    } catch (err) {
      console.error(err)
      alert('Failed to save changes')
    } finally {
      setSaving(false)
    }
  }

  const inp = "w-full bg-white border-2 border-[#D4D0C5] rounded-xl px-4 py-3 text-[#2E4F5E] placeholder:text-[#a5b8c2] text-sm font-semibold focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/30 transition-all"
  const lbl = "block text-[#2E4F5E] text-[11px] font-black uppercase tracking-[0.2em] mb-2"

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2E4F5E]/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[12px_12px_0_0_#1a3a44] w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b-2 border-[#E8C86A] sticky top-0 bg-white z-10">
          <h2 className="text-[#2E4F5E] font-black text-xl">Edit Tutor Profile</h2>
          <button onClick={onClose} className="text-[#7da8b8] hover:text-[#E05C42] transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-5 flex flex-col gap-5">
          {/* Profile Picture */}
          <div>
            <label className={lbl}>Profile Picture</label>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#2E4F5E] bg-[#FFFDF7] flex-shrink-0 shadow-[3px_3px_0_0_#2E4F5E]">
                {preview
                  ? <img src={preview} alt="preview" className="w-full h-full object-cover" />
                  : <div className="w-full h-full flex items-center justify-center text-[#7da8b8] text-2xl font-black">{form.name?.charAt(0) || '?'}</div>
                }
                {uploading && (
                  <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                    <svg className="w-5 h-5 animate-spin text-[#E05C42]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <input ref={fileRef} type="file" accept="image/*" onChange={handleImageSelect} className="hidden" id="img-upload" />
                <div className="flex flex-wrap gap-2 mb-2">
                  <label htmlFor="img-upload"
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black cursor-pointer border-2 transition-all ${uploading ? 'opacity-50 cursor-not-allowed bg-[#D4D0C5] text-[#7da8b8] border-[#D4D0C5]' : 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[1px]'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {uploading ? 'Uploading...' : 'Upload Photo'}
                  </label>
                  {preview && (
                    <button type="button" onClick={() => { setForm(f => ({ ...f, imageUrl: '' })); setPreview('') }}
                      className="px-4 py-2 rounded-xl text-xs font-black bg-white text-[#E05C42] border-2 border-[#E05C42] hover:bg-[#E05C42] hover:text-white transition-all">
                      Remove
                    </button>
                  )}
                </div>
                <p className="text-[#7da8b8] text-[10px] font-semibold">JPG, PNG · Max 5MB</p>
                {uploadError && <p className="text-[#E05C42] text-[10px] font-bold mt-1">{uploadError}</p>}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className={lbl}>Full Name</label><input className={inp} value={form.name || ''} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} /></div>
            <div><label className={lbl}>WhatsApp</label><input className={inp} value={form.whatsapp || ''} onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))} /></div>
          </div>

          <div>
            <label className={lbl}>Subjects</label>
            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-1 border border-[#D4D0C5] rounded-xl bg-[#FFFDF7]">
              {SUBJECTS.map(s => (
                <button key={s} type="button" onClick={() => setForm(f => ({ ...f, subjects: f.subjects?.includes(s) ? f.subjects.filter(x => x !== s) : [...(f.subjects || []), s] }))}
                  className={`px-3 py-1.5 rounded-full text-[0.7rem] font-black border-2 transition-all ${form.subjects?.includes(s) ? 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E]' : 'bg-white text-[#2E4F5E] border-[#D4D0C5] hover:border-[#E8C86A]'}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className={lbl}>Experience (yrs)</label><input type="number" className={inp} value={form.experience || 0} onChange={e => setForm(f => ({ ...f, experience: parseInt(e.target.value) || 0 }))} /></div>
            <div>
              <label className={lbl}>Mode</label>
              <select className={inp} value={form.mode || 'both'} onChange={e => setForm(f => ({ ...f, mode: e.target.value as ITutor['mode'] }))}>
                <option value="both">Both — Online & Home Visit</option>
                <option value="online">Online Only</option>
                <option value="onsite">Home Visit Only</option>
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className={lbl}>City</label><input className={inp} value={form.city || ''} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} /></div>
            <div><label className={lbl}>Country</label><input className={inp} value={form.country || ''} onChange={e => setForm(f => ({ ...f, country: e.target.value }))} /></div>
          </div>

          <div><label className={lbl}>Education</label><input className={inp} value={form.education || ''} onChange={e => setForm(f => ({ ...f, education: e.target.value }))} /></div>
          <div><label className={lbl}>Bio</label><textarea rows={4} className={`${inp} resize-none`} value={form.bio || ''} onChange={e => setForm(f => ({ ...f, bio: e.target.value }))} /></div>

          <div className="flex gap-3 pt-2">
            <button onClick={onClose} className="flex-1 py-3 border-2 border-[#D4D0C5] text-[#7da8b8] font-black hover:text-[#2E4F5E] hover:border-[#2E4F5E] rounded-xl text-sm transition-all">Cancel</button>
            <button onClick={handleSave} disabled={saving || uploading} className="flex-1 py-3 bg-[#E05C42] text-white font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] disabled:opacity-50 transition-all">
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [tutors, setTutors] = useState<ITutor[]>([])
  const [filter, setFilter] = useState<Filter>('pending')
  const [loading, setLoading] = useState(true)
  const [editingTutor, setEditing] = useState<ITutor | null>(null)
  const [showPassword, setShowPass] = useState(false)
  const [counts, setCounts] = useState({ pending: 0, approved: 0, rejected: 0 })

  async function fetchTutors(f = filter) {
    setLoading(true)
    try {
      const [main, p, a, r] = await Promise.all([
        fetch(`/api/admin/tutors?status=${f}`),
        fetch('/api/admin/tutors?status=pending'),
        fetch('/api/admin/tutors?status=approved'),
        fetch('/api/admin/tutors?status=rejected'),
      ])
      if (main.ok) {
        const data = await main.json()
        setTutors(data)
      }
      const [pd, ad, rd] = await Promise.all([p.json(), a.json(), r.json()])
      setCounts({ pending: pd.length, approved: ad.length, rejected: rd.length })
    } catch (err) {
      console.error('Failed to fetch tutors:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchTutors(filter) }, [filter])

  async function updateStatus(id: string, status: string) {
    try {
      await fetch(`/api/admin/tutors/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      fetchTutors(filter)
    } catch (err) {
      console.error('Failed to update status:', err)
    }
  }

  async function deleteTutor(id: string) {
    if (!confirm('Permanently delete this tutor?')) return
    try {
      await fetch(`/api/admin/tutors/${id}`, { method: 'DELETE' })
      fetchTutors(filter)
    } catch (err) {
      console.error('Failed to delete tutor:', err)
    }
  }

  async function logout() {
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      window.location.href = '/admin/login'
    } catch (err) {
      console.error('Logout failed:', err)
    }
  }

  const filterCfg = {
    pending: { color: 'text-[#2E4F5E]', bg: 'bg-[#E8C86A]/20', border: 'border-[#E8C86A]' },
    approved: { color: 'text-[#2E4F5E]', bg: 'bg-[#3A9E8F]/20', border: 'border-[#3A9E8F]' },
    rejected: { color: 'text-[#2E4F5E]', bg: 'bg-[#E05C42]/20', border: 'border-[#E05C42]' },
  }

  return (
    <div className="min-h-screen bg-[#FFFDF7]" style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* Background pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E8C86A] opacity-[0.05] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#3A9E8F] opacity-[0.04] blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2E4F5E 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative">
        {/* Topbar */}
        <div className="border-b-2 border-[#E8C86A] bg-white/98 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E8C86A] to-[#c4a84a] border-2 border-[#2E4F5E] flex items-center justify-center shadow-[2px_2px_0_0_#2E4F5E]">
                <span className="text-[#2E4F5E] font-black text-sm">L</span>
              </div>
              <span className="text-[#2E4F5E] font-black text-lg">Learnova</span>
              <span className="text-[#7da8b8] font-bold text-sm bg-[#FFFDF7] px-2 py-0.5 rounded-md border border-[#D4D0C5]">/ Admin</span>
            </div>
            <div className="flex items-center gap-2">
              <a href="/" target="_blank" rel="noopener noreferrer" className="text-[#2E4F5E] hover:text-[#E05C42] text-sm font-bold transition-colors px-3 py-2">
                View Site ↗
              </a>
              <button onClick={() => setShowPass(true)}
                className="flex items-center gap-2 px-3 py-2 border-2 border-[#D4D0C5] text-[#2E4F5E] hover:text-[#E05C42] hover:border-[#E05C42] rounded-lg text-sm font-bold transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                <span className="hidden sm:inline">Change Password</span>
              </button>
              <button onClick={logout}
                className="flex items-center gap-2 px-3 py-2 border-2 border-[#D4D0C5] text-[#2E4F5E] hover:text-[#E05C42] hover:border-[#E05C42] rounded-lg text-sm font-bold transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 sm:mb-10">
            {(['pending', 'approved', 'rejected'] as Filter[]).map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={`p-5 rounded-2xl border-2 transition-all text-left ${filter === f ? `${filterCfg[f].bg} ${filterCfg[f].border} shadow-[4px_4px_0_0_#2E4F5E]` : 'bg-white border-[#D4D0C5] hover:border-[#2E4F5E]'}`}>
                <p className={`text-3xl font-black mb-1 ${filter === f ? filterCfg[f].color : 'text-[#2E4F5E]'}`}>{counts[f]}</p>
                <p className={`text-sm font-black capitalize ${filter === f ? filterCfg[f].color : 'text-[#7da8b8]'}`}>{f} Applications</p>
              </button>
            ))}
          </div>

          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
            <h2 className={`text-lg sm:text-xl font-black px-3 py-1 rounded-lg ${filter === 'pending' ? 'bg-[#E8C86A]/20 text-[#2E4F5E] border-l-4 border-[#E8C86A]' : filter === 'approved' ? 'bg-[#3A9E8F]/20 text-[#2E4F5E] border-l-4 border-[#3A9E8F]' : 'bg-[#E05C42]/20 text-[#2E4F5E] border-l-4 border-[#E05C42]'}`}>
              {filter} Tutors
            </h2>
            <span className="text-[#2E4F5E] text-sm font-bold bg-[#FFFDF7] px-3 py-1 rounded-full border border-[#D4D0C5]">{tutors.length} results</span>
          </div>

          {/* Tutors List */}
          {loading ? (
            <div className="flex justify-center py-24">
              <svg className="w-8 h-8 animate-spin text-[#E8C86A]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            </div>
          ) : tutors.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-2xl border-2 border-[#D4D0C5] shadow-[6px_6px_0_0_#D4D0C5]">
              <p className="text-5xl mb-4">📭</p>
              <p className="text-[#2E4F5E] font-black text-lg">No {filter} applications.</p>
              <p className="text-[#7da8b8] font-semibold text-sm mt-1">Check other tabs to find applications</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {tutors.map((t) => (
                <div key={t._id as string} className="bg-white border-2 border-[#D4D0C5] hover:border-[#2E4F5E] rounded-2xl p-4 sm:p-5 transition-all shadow-[4px_4px_0_0_#D4D0C5] hover:shadow-[6px_6px_0_0_#2E4F5E] hover:-translate-y-0.5">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    {/* Avatar */}
                    <div className="w-14 h-14 rounded-xl border-2 border-[#2E4F5E] flex-shrink-0 overflow-hidden bg-gradient-to-br from-[#E8C86A] to-[#c4a84a] shadow-[2px_2px_0_0_#2E4F5E]">
                      {t.imageUrl ? (
                        <img src={t.imageUrl} alt={t.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white font-black text-xl">
                          {t.name?.charAt(0) || '?'}
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div>
                          <h3 className="text-[#2E4F5E] font-black text-lg">{t.name}</h3>
                          <p className="text-[#2E4F5E] text-sm font-semibold mt-0.5">
                            <span className="text-[#E05C42]">📍</span> {t.city}, {t.country}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <span className="text-[#2E4F5E] text-xs font-bold bg-[#E8C86A]/20 px-2 py-0.5 rounded-full border border-[#E8C86A]">
                              {t.experience} yrs exp
                            </span>
                            <span className="text-[#2E4F5E] text-xs font-bold bg-[#3A9E8F]/20 px-2 py-0.5 rounded-full border border-[#3A9E8F]">
                              {t.mode}
                            </span>
                            <span className="text-[#2E4F5E] text-xs font-bold bg-[#FFFDF7] px-2 py-0.5 rounded-full border border-[#D4D0C5]">
                              {t.whatsapp}
                            </span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 flex-wrap">
                          {filter !== 'approved' && (
                            <button
                              onClick={() => updateStatus(t._id as string, 'approved')}
                              className="px-3 py-1.5 bg-[#3A9E8F] hover:bg-[#2d7a6e] text-white text-[0.7rem] font-black rounded-lg border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[1px] transition-all"
                            >
                              ✓ Approve
                            </button>
                          )}
                          {filter !== 'rejected' && (
                            <button
                              onClick={() => updateStatus(t._id as string, 'rejected')}
                              className="px-3 py-1.5 bg-[#E05C42] hover:bg-[#c44d36] text-white text-[0.7rem] font-black rounded-lg border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[1px] transition-all"
                            >
                              ✕ Reject
                            </button>
                          )}
                          <button
                            onClick={() => setEditing(t)}
                            className="px-3 py-1.5 bg-[#E8C86A] hover:bg-[#d4b558] text-[#2E4F5E] text-[0.7rem] font-black rounded-lg border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[1px] transition-all"
                          >
                            ✎ Edit
                          </button>
                          <button
                            onClick={() => deleteTutor(t._id as string)}
                            className="px-3 py-1.5 bg-white hover:bg-red-500 text-[#E05C42] hover:text-white text-[0.7rem] font-black rounded-lg border-2 border-[#E05C42] hover:border-[#E05C42] transition-all"
                          >
                            🗑 Delete
                          </button>
                        </div>
                      </div>

                      {/* Subjects */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {t.subjects?.slice(0, 6).map((s) => (
                          <span key={s} className="text-[0.65rem] font-bold px-2 py-0.5 bg-[#FFFDF7] border border-[#D4D0C5] text-[#2E4F5E] rounded-md">
                            {s}
                          </span>
                        ))}
                        {t.subjects && t.subjects.length > 6 && (
                          <span className="text-[0.65rem] font-bold px-2 py-0.5 bg-[#E8C86A]/30 text-[#2E4F5E] border border-[#E8C86A] rounded-md">
                            +{t.subjects.length - 6}
                          </span>
                        )}
                      </div>

                      {/* Bio preview */}
                      <p className="text-[#2E4F5E] text-sm font-semibold mt-2 line-clamp-2 bg-[#FFFDF7] p-2 rounded-lg border border-[#D4D0C5]/50">
                        {t.bio && t.bio.length > 120 ? `${t.bio.substring(0, 120)}...` : t.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {editingTutor && <EditModal tutor={editingTutor} onClose={() => setEditing(null)} onSave={() => { setEditing(null); fetchTutors(filter) }} />}
      {showPassword && <PasswordModal onClose={() => setShowPass(false)} />}
    </div>
  )
}