export interface ITutor {
  _id: string
  name: string
  subject: string
  subjects: string[]
  experience: number        // years
  city: string
  country: string
  whatsapp: string
  bio: string
  education: string
  mode: 'online' | 'onsite' | 'both'
  status: 'pending' | 'approved' | 'rejected'
  imageUrl?: string
  rating?: number
  createdAt: string
}

export interface IApplication {
  name: string
  subject: string
  subjects: string[]
  experience: number
  city: string
  country: string
  whatsapp: string
  bio: string
  education: string
  mode: 'online' | 'onsite' | 'both'
}