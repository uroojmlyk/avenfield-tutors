// export function buildWhatsAppURL(phone: string, tutorName: string, subject: string): string {
//   const number = phone.replace(/\D/g, '')
//   const message = encodeURIComponent(
//     `Hi! I found your profile on EduMatch and I'm interested in booking a session.\n\nTutor: ${tutorName}\nSubject: ${subject}\n\nPlease let me know your availability. Thank you!`
//   )
//   return `https://wa.me/${number}?text=${message}`
// }

// export function buildGeneralWhatsAppURL(phone: string): string {
//   const number = phone.replace(/\D/g, '')
//   const message = encodeURIComponent(
//     `Hi! I visited your website and I'm looking for a tutor. Can you help me find the right match?`
//   )
//   return `https://wa.me/${number}?text=${message}`
// }





const BUSINESS_WHATSAPP = '923304785145'

export function buildWhatsAppURL(tutorPhone: string, tutorName: string, subject: string): string {
  // Always route through business number for tracking
  const number = BUSINESS_WHATSAPP
  const message = encodeURIComponent(
    `Hi! I found *${tutorName}* on Learnova and I'd like to book a session.\n\n📚 Subject: ${subject}\n\nPlease let me know their availability. Thank you!`
  )
  return `https://wa.me/${number}?text=${message}`
}

export function buildTutorDirectURL(phone: string, tutorName: string, subject: string): string {
  const number = phone.replace(/\D/g, '')
  const message = encodeURIComponent(
    `Hi! I found your profile on Learnova and I'd like to book a session.\n\n📚 Subject: ${subject}\n\nPlease let me know your availability. Thank you!`
  )
  return `https://wa.me/${number}?text=${message}`
}

export function buildGeneralWhatsAppURL(): string {
  const message = encodeURIComponent(
    'Hi! I visited Learnova and I need help finding the right tutor. Can you assist me?'
  )
  return `https://wa.me/${BUSINESS_WHATSAPP}?text=${message}`
}