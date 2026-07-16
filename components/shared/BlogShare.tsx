// 'use client'

// import { useState } from 'react'

// export default function BlogShare({ url, title }: { url: string; title: string }) {
//   const [copied, setCopied] = useState(false)

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(url)
//       setCopied(true)
//       setTimeout(() => setCopied(false), 2000)
//     } catch {
//       // Clipboard API can fail on non-HTTPS or older browsers, ignore silently.
//     }
//   }

//   const handleNativeShare = async () => {
//     if (typeof navigator !== 'undefined' && navigator.share) {
//       try {
//         await navigator.share({ title, url })
//       } catch {
//         // User cancelled the share sheet.
//       }
//     }
//   }

//   const whatsappShareURL = `https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`
//   const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
//   const twitterShareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`

//   const buttonBase =
//     'flex items-center justify-center w-9 h-9 rounded-xl border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[1px] transition-all duration-150'

//   const whatsappIcon = (
//     <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12.001 2C6.478 2 2 6.478 2 12.001c0 1.887.523 3.65 1.432 5.156L2 22l4.955-1.399A9.94 9.94 0 0012.001 22C17.524 22 22 17.523 22 12.001 22 6.478 17.524 2 12.001 2zm0 18.086a8.06 8.06 0 01-4.354-1.277l-.312-.196-2.94.83.842-2.866-.204-.322a8.075 8.075 0 111.14 1.14l-.032-.023a8.077 8.077 0 015.86 2.714zm4.478-6.062c-.245-.123-1.454-.717-1.68-.8-.225-.082-.39-.123-.554.123-.164.246-.636.8-.78.964-.144.164-.287.185-.532.062-.246-.123-1.038-.383-1.977-1.222-.731-.652-1.224-1.457-1.367-1.703-.144-.246-.015-.379.108-.501.11-.111.246-.287.369-.43.123-.144.164-.246.246-.41.082-.164.041-.308-.02-.43-.062-.124-.554-1.335-.759-1.828-.2-.48-.404-.415-.554-.423-.144-.007-.308-.008-.472-.008a.906.906 0 00-.656.308c-.225.246-.86.84-.86 2.05 0 1.21.881 2.379 1.004 2.543.123.164 1.735 2.649 4.204 3.714.587.253 1.045.404 1.402.517.589.187 1.125.161 1.549.098.472-.07 1.454-.594 1.659-1.168.205-.574.205-1.066.144-1.168-.062-.103-.226-.164-.472-.287z"/>
//     </svg>
//   )

//   const facebookIcon = (
//     <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
//     </svg>
//   )

//   const twitterIcon = (
//     <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//     </svg>
//   )

//   return (
//     <div className="flex items-center gap-2 flex-wrap">
//       <span className="text-[0.62rem] font-black text-white/60 uppercase tracking-[0.15em] mr-0.5">Share</span>

//       {/* WhatsApp */}
//       <a target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp" title="Share on WhatsApp" href={whatsappShareURL} className={buttonBase + ' bg-[#3A9E8F] text-white hover:bg-[#2d7a6e]'}>
//         {whatsappIcon}
//       </a>

//       {/* Facebook */}
//       <a target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" title="Share on Facebook" href={facebookShareURL} className={buttonBase + ' bg-white text-[#2E4F5E] hover:bg-[#FFFDF7]'}>
//         {facebookIcon}
//       </a>

//       {/* X / Twitter */}
//       <a target="_blank" rel="noopener noreferrer" aria-label="Share on X" title="Share on X" href={twitterShareURL} className={buttonBase + ' bg-white text-[#2E4F5E] hover:bg-[#FFFDF7]'}>
//         {twitterIcon}
//       </a>

//       {/* Copy link */}
//       <button onClick={handleCopy} aria-label="Copy link" title="Copy link" className={buttonBase + ' px-3 !w-auto gap-1.5 bg-white text-[#2E4F5E] hover:bg-[#FFFDF7] text-[0.68rem] font-black'}>
//         {copied ? (
//           <>
//             <svg className="w-[15px] h-[15px] text-[#3A9E8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//             </svg>
//             Copied
//           </>
//         ) : (
//           <>
//             <svg className="w-[15px] h-[15px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5" />
//             </svg>
//             Copy Link
//           </>
//         )}
//       </button>

//       {/* Native share sheet - mobile only */}
//       <button onClick={handleNativeShare} aria-label="More sharing options" title="More sharing options" className={buttonBase + ' sm:hidden bg-white text-[#2E4F5E] hover:bg-[#FFFDF7]'}>
//         <svg className="w-[17px] h-[17px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//           <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7M16 6l-4-4m0 0L8 6m4-4v13" />
//         </svg>
//       </button>
//     </div>
//   )
// }










'use client'

import { useState } from 'react'

export default function BlogShare({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API can fail on non-HTTPS or older browsers, ignore silently.
    }
  }

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch {
        // User cancelled the share sheet.
      }
    }
  }

  const whatsappShareURL = `https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`
  const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  const twitterShareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`

  const buttonBase =
    'flex items-center justify-center w-9 h-9 rounded-xl border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[1px] transition-all duration-150'

  const whatsappIcon = (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 2C6.478 2 2 6.478 2 12.001c0 1.887.523 3.65 1.432 5.156L2 22l4.955-1.399A9.94 9.94 0 0012.001 22C17.524 22 22 17.523 22 12.001 22 6.478 17.524 2 12.001 2zm0 18.086a8.06 8.06 0 01-4.354-1.277l-.312-.196-2.94.83.842-2.866-.204-.322a8.075 8.075 0 111.14 1.14l-.032-.023a8.077 8.077 0 015.86 2.714zm4.478-6.062c-.245-.123-1.454-.717-1.68-.8-.225-.082-.39-.123-.554.123-.164.246-.636.8-.78.964-.144.164-.287.185-.532.062-.246-.123-1.038-.383-1.977-1.222-.731-.652-1.224-1.457-1.367-1.703-.144-.246-.015-.379.108-.501.11-.111.246-.287.369-.43.123-.144.164-.246.246-.41.082-.164.041-.308-.02-.43-.062-.124-.554-1.335-.759-1.828-.2-.48-.404-.415-.554-.423-.144-.007-.308-.008-.472-.008a.906.906 0 00-.656.308c-.225.246-.86.84-.86 2.05 0 1.21.881 2.379 1.004 2.543.123.164 1.735 2.649 4.204 3.714.587.253 1.045.404 1.402.517.589.187 1.125.161 1.549.098.472-.07 1.454-.594 1.659-1.168.205-.574.205-1.066.144-1.168-.062-.103-.226-.164-.472-.287z"/>
    </svg>
  )

  const facebookIcon = (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
    </svg>
  )

  const twitterIcon = (
    <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[0.62rem] font-black text-white/60 uppercase tracking-[0.15em] mr-0.5">Share</span>

      {/* WhatsApp */}
      <a target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp" title="Share on WhatsApp" href={whatsappShareURL} className={buttonBase + ' bg-[#3A9E8F] text-white hover:bg-[#2d7a6e]'}>
        {whatsappIcon}
      </a>

      {/* Facebook */}
      <a target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" title="Share on Facebook" href={facebookShareURL} className={buttonBase + ' bg-white text-[#2E4F5E] hover:bg-[#FFFDF7]'}>
        {facebookIcon}
      </a>

      {/* X / Twitter */}
      <a target="_blank" rel="noopener noreferrer" aria-label="Share on X" title="Share on X" href={twitterShareURL} className={buttonBase + ' bg-white text-[#2E4F5E] hover:bg-[#FFFDF7]'}>
        {twitterIcon}
      </a>

      {/* Copy link */}
      <button onClick={handleCopy} aria-label="Copy link" title="Copy link" className={buttonBase + ' px-3 !w-auto gap-1.5 bg-white text-[#2E4F5E] hover:bg-[#FFFDF7] text-[0.68rem] font-black'}>
        {copied ? (
          <>
            <svg className="w-[15px] h-[15px] text-[#3A9E8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg className="w-[15px] h-[15px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5" />
            </svg>
            Copy Link
          </>
        )}
      </button>

      {/* Native share sheet - mobile only */}
      <button onClick={handleNativeShare} aria-label="More sharing options" title="More sharing options" className={buttonBase + ' sm:hidden bg-white text-[#2E4F5E] hover:bg-[#FFFDF7]'}>
        <svg className="w-[17px] h-[17px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7M16 6l-4-4m0 0L8 6m4-4v13" />
        </svg>
      </button>
    </div>
  )
}