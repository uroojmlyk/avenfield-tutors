



const BUSINESS_WHATSAPP = '923095154253'

export function buildWhatsAppURL(tutorPhone: string, tutorName: string, subject: string): string {
  // Always route through business number for tracking
  const number = BUSINESS_WHATSAPP
  const message = encodeURIComponent(
    `Hi! I found *${tutorName}* on Avenfield-tutors and I'd like to book a session.\n\n📚 Subject: ${subject}\n\nPlease let me know their availability. Thank you!`
  )
  return `https://wa.me/${number}?text=${message}`
}

export function buildTutorDirectURL(phone: string, tutorName: string, subject: string): string {
  const number = phone.replace(/\D/g, '')
  const message = encodeURIComponent(
    `Hi! I found your profile on Avenfield tutors and I'd like to book a session.\n\n📚 Subject: ${subject}\n\nPlease let me know your availability. Thank you!`
  )
  return `https://wa.me/${number}?text=${message}`
}

export function buildGeneralWhatsAppURL(): string {
  const message = encodeURIComponent(
    'Hi! I visited Avenfield tutors and I need help finding the right tutor. Can you assist me?'
  )
  return `https://wa.me/${BUSINESS_WHATSAPP}?text=${message}`
}