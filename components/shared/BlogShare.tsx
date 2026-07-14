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
      // Clipboard API can fail on non-HTTPS or older browsers — silently ignore,
      // the WhatsApp/native share buttons still work as a fallback.
    }
  }

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch {
        // User cancelled the share sheet — not an error, do nothing.
      }
    }
  }

  const whatsappShareURL = `https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[0.68rem] font-black text-[#7da8b8] uppercase tracking-wide mr-1">Share:</span>

      <a
        href={whatsappShareURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3A9E8F] text-white hover:bg-[#2d7a6e] transition-colors border-2 border-[#2E4F5E]"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.532 5.845L.057 23.882a.5.5 0 0 0 .61.61l6.037-1.475A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.87 9.87 0 0 1-5.032-1.38l-.36-.214-3.733.913.929-3.622-.235-.373A9.86 9.86 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z"/>
        </svg>
      </a>

      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="flex items-center justify-center gap-1.5 h-8 px-3 rounded-full bg-white text-[#2E4F5E] hover:bg-[#FFFDF7] transition-colors border-2 border-[#2E4F5E] text-[0.68rem] font-black"
      >
        {copied ? (
          <>
            <svg className="w-3.5 h-3.5 text-[#3A9E8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            Copied!
          </>
        ) : (
          <>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5"/></svg>
            Copy Link
          </>
        )}
      </button>

      <button
        onClick={handleNativeShare}
        aria-label="Share"
        className="sm:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#2E4F5E] hover:bg-[#FFFDF7] transition-colors border-2 border-[#2E4F5E]"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342a3 3 0 100-2.684m0 2.684a3 3 0 100 2.684m0-2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </button>
    </div>
  )
}