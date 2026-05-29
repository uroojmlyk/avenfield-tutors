


// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'

// export default function AdminLoginPage() {
//   const [password, setPassword] = useState('')
//   const [showPass, setShowPass] = useState(false)
//   const [error, setError]       = useState('')
//   const [loading, setLoading]   = useState(false)
//   const router = useRouter()

//   async function handleLogin(e: React.FormEvent) {
//     e.preventDefault()
//     setLoading(true)
//     setError('')
//     try {
//       const res = await fetch('/api/admin/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ password }),
//       })
//       if (res.ok) {
//         router.push('/admin')
//         router.refresh()
//       } else {
//         setError('Incorrect password. Try again.')
//       }
//     } catch {
//       setError('Connection error. Please try again.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center px-5 relative overflow-hidden">

//       {/* Premium Animated Orbs */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#6C5CE7] opacity-[0.08] blur-[140px] animate-pulse" />
//         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#1D9E75] opacity-[0.06] blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
//         <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full bg-[#D4820A] opacity-[0.04] blur-[120px] animate-pulse" style={{ animationDelay: '4s' }} />
//       </div>

//       {/* Premium Grid Pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.02] pointer-events-none"
//         style={{
//           backgroundImage: 'radial-gradient(circle at 1px 1px, #6C5CE7 1px, transparent 1px)',
//           backgroundSize: '40px 40px',
//         }}
//       />

//       {/* Card Container */}
//       <div className="relative w-full max-w-md">
        
//         {/* Premium Glow Border */}
//         <div className="absolute -inset-[1.5px] rounded-2xl bg-gradient-to-br from-[#6C5CE7]/50 via-transparent to-[#1D9E75]/30 opacity-75 pointer-events-none" />
        
//         {/* Backdrop Blur Card */}
//         <div className="relative bg-[#111118]/90 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.08] shadow-2xl">

//           {/* Logo Section with Premium Gradient */}
//           <div className="text-center mb-9">
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6C5CE7] via-[#7B6EF0] to-[#5A4BD1] shadow-xl shadow-[#6C5CE7]/40 mb-5 group">
//               <span className="text-white font-bold text-2xl tracking-tight">L</span>
//             </div>
//             <h1 className="text-white text-2xl font-semibold tracking-tight">Admin Portal</h1>
//             <p className="text-white/35 text-sm mt-1.5 tracking-wide">Secure access — Learnova Dashboard</p>
//           </div>

//           <form onSubmit={handleLogin} className="flex flex-col gap-6">
//             {/* Password Field */}
//             <div>
//               <label className="block text-white/50 text-[11px] font-semibold uppercase tracking-[0.15em] mb-2">
//                 Access Key
//               </label>
//               <div className="relative group">
//                 <input
//                   type={showPass ? 'text' : 'password'}
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder:text-white/15 text-sm focus:outline-none focus:border-[#6C5CE7]/60 focus:bg-white/[0.06] focus:ring-1 focus:ring-[#6C5CE7]/30 transition-all duration-200 pr-12"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPass(!showPass)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/50 transition-all duration-200"
//                 >
//                   {showPass ? (
//                     <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                     </svg>
//                   ) : (
//                     <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//               {/* Password hint */}
//               <p className="text-white/20 text-[10px] mt-1.5 tracking-wide">
//                 Enter your admin credentials to continue
//               </p>
//             </div>

//             {/* Error Message with Premium Styling */}
//             {error && (
//               <div className="flex items-center gap-2.5 bg-red-500/8 border border-red-500/15 text-red-400 text-sm px-4 py-3 rounded-xl backdrop-blur-sm animate-shake">
//                 <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                 </svg>
//                 <span className="text-sm font-medium">{error}</span>
//               </div>
//             )}

//             {/* Submit Button with Premium Animation */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="relative w-full py-3.5 bg-gradient-to-r from-[#6C5CE7] via-[#7B6EF0] to-[#5A4BD1] hover:from-[#5A4BD1] hover:via-[#6C5CE7] hover:to-[#4A3DC0] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 text-sm shadow-lg shadow-[#6C5CE7]/30 hover:shadow-xl hover:shadow-[#6C5CE7]/40 hover:scale-[1.01] active:scale-[0.99]"
//             >
//               {loading ? (
//                 <span className="flex items-center justify-center gap-2">
//                   <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
//                   </svg>
//                   Authenticating...
//                 </span>
//               ) : (
//                 <span className="flex items-center justify-center gap-2">
//                   Access Dashboard
//                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </span>
//               )}
//             </button>
//           </form>

//           {/* Footer Note */}
//           <div className="mt-8 pt-6 border-t border-white/[0.05] text-center">
//             <p className="text-white/15 text-[11px] tracking-wide">
//               🔒 Protected area — authorized personnel only
//             </p>
//             <p className="text-white/10 text-[10px] mt-2 tracking-wide">
//               All access attempts are logged for security
//             </p>
//           </div>
//         </div>

//         {/* Premium Corner Accents */}
//         <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#6C5CE7]/20 rounded-tl-2xl pointer-events-none" />
//         <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#6C5CE7]/20 rounded-br-2xl pointer-events-none" />
//       </div>
//     </div>
//   )
// }


'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (res.ok) {
        router.push('/admin')
        router.refresh()
      } else {
        setError('Incorrect password. Try again.')
      }
    } catch {
      setError('Connection error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#2E4F5E] flex items-center justify-center px-4 relative overflow-hidden">

      {/* Premium Animated Orbs - Learnova colors */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#E8C86A] opacity-[0.15] blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#3A9E8F] opacity-[0.12] blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full bg-[#E05C42] opacity-[0.1] blur-[120px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Premium Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #E8C86A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Card Container */}
      <div className="relative w-full max-w-md">
        
        {/* Premium Glow Border */}
        <div className="absolute -inset-[1.5px] rounded-2xl bg-gradient-to-br from-[#E8C86A]/60 via-transparent to-[#3A9E8F]/40 opacity-80 pointer-events-none" />
        
        {/* Main Card */}
        <div className="relative bg-white rounded-2xl p-8 border-2 border-[#2E4F5E] shadow-[16px_16px_0_0_#1a3a44]">

          {/* Logo Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E8C86A] via-[#d4b558] to-[#c4a84a] shadow-[6px_6px_0_0_#2E4F5E] mb-6">
              <span className="text-[#2E4F5E] font-black text-3xl tracking-tight">L</span>
            </div>
            <h1 className="text-[#2E4F5E] text-3xl font-black tracking-tight">Admin Portal</h1>
            <p className="text-[#7da8b8] text-base font-semibold mt-2">Secure access — Learnova Dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            {/* Password Field */}
            <div>
              <label className="block text-[#2E4F5E] text-xs font-black uppercase tracking-[0.25em] mb-2">
                Access Key
              </label>
              <div className="relative group">
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-white border-2 border-[#D4D0C5] rounded-xl px-5 py-4 text-[#2E4F5E] placeholder:text-[#a5b8c2] text-base font-bold focus:outline-none focus:border-[#E8C86A] focus:ring-4 focus:ring-[#E8C86A]/20 transition-all duration-200 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7da8b8] hover:text-[#2E4F5E] transition-all duration-200"
                >
                  {showPass ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
              <p className="text-[#7da8b8] text-xs font-semibold mt-2 tracking-wide">
                Enter your admin credentials to continue
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-3 bg-[#E05C42]/10 border-2 border-[#E05C42] text-[#E05C42] text-sm font-bold px-5 py-3.5 rounded-xl">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="relative w-full py-4 bg-[#E05C42] hover:bg-[#c44d36] disabled:opacity-50 disabled:cursor-not-allowed text-white font-black rounded-xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] hover:shadow-[3px_3px_0_0_#2E4F5E] hover:translate-y-[3px] transition-all duration-150 text-base"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Authenticating...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Access Dashboard
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              )}
            </button>
          </form>

          {/* Footer Note */}
          <div className="mt-10 pt-6 border-t-2 border-[#E8C86A]/30 text-center">
            <p className="text-[#7da8b8] text-xs font-black tracking-wide">
              🔒 Protected area — authorized personnel only
            </p>
            <p className="text-[#a5b8c2] text-[10px] mt-2 font-semibold tracking-wide">
              All access attempts are logged for security
            </p>
          </div>
        </div>

        {/* Premium Corner Accents */}
        <div className="absolute -top-4 -left-4 w-20 h-20 border-t-3 border-l-3 border-[#E8C86A]/50 rounded-tl-2xl pointer-events-none" />
        <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-3 border-r-3 border-[#E8C86A]/50 rounded-br-2xl pointer-events-none" />
      </div>
    </div>
  )
}