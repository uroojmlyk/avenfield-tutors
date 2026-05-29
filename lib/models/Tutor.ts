import mongoose, { Schema, models } from 'mongoose'

const TutorSchema = new Schema(
  {
    name:       { type: String, required: true, trim: true },
    subjects:   { type: [String], required: true },
    experience: { type: Number, required: true },
    city:       { type: String, required: true, trim: true },
    country:    { type: String, required: true, trim: true },
    whatsapp:   { type: String, required: true, trim: true },
    bio:        { type: String, required: true, trim: true },
    education:  { type: String, required: true, trim: true },
    mode:       { type: String, enum: ['online', 'onsite', 'both'], default: 'both' },
    status:     { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    imageUrl:   { type: String, default: null },
    rating:     { type: Number, default: null },
  },
  { timestamps: true }
)

const Tutor = models.Tutor || mongoose.model('Tutor', TutorSchema)
export default Tutor