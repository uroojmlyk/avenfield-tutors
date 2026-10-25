// Thin wrapper around the GTM dataLayer. The site already loads Google Tag
// Manager (GTM-P3ZVQLFN) in app/layout.tsx, so we only PUSH events here and
// never inject a second GA4 / Google Ads tag. What each event does (GA4 event,
// Google Ads conversion) is configured inside GTM.
//
// Never put personal data (name, phone number) in these parameters.

type EventParams = Record<string, string | number | boolean | undefined>

export function trackEvent(event: string, params: EventParams = {}) {
  if (typeof window === 'undefined') return
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event, ...params })
}