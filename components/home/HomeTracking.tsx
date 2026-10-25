'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

// Mounted once on the homepage. One delegated listener measures:
//  - clicks on any element with data-track="<event_name>" (main CTAs)
//  - clicks on any WhatsApp link (wa.me), including the floating button
//  - clicks on any tel: link
// It only pushes events to the GTM dataLayer; it never loads another tag.
export default function HomeTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null
      const el = target?.closest?.('a, button') as HTMLElement | null
      if (!el) return

      const location = el.dataset.trackLocation || 'other'
      const custom = el.dataset.track
      if (custom) trackEvent(custom, { link_location: location })

      const href = el.getAttribute('href') || ''
      if (href.startsWith('https://wa.me/') || href.startsWith('https://api.whatsapp.com/')) {
        trackEvent('whatsapp_click', {
          link_location: el.dataset.trackLocation || (el.getAttribute('aria-label') === 'Chat on WhatsApp' ? 'floating_button' : 'other'),
        })
      } else if (href.startsWith('tel:')) {
        trackEvent('phone_click', { link_location: location })
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}