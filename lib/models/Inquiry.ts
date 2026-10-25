import mongoose, { Schema, models } from 'mongoose'

// Parent tutor-request submitted from the homepage inquiry form.
const InquirySchema = new Schema(
  {
    parentName:   { type: String, required: true, trim: true, maxlength: 80 },
    whatsapp:     { type: String, required: true, trim: true, maxlength: 20 },
    grade:        { type: String, required: true, trim: true, maxlength: 60 },
    subject:      { type: String, required: true, trim: true, maxlength: 80 },
    curriculum:   { type: String, default: '', trim: true, maxlength: 80 },
    cityArea:     { type: String, required: true, trim: true, maxlength: 120 },
    mode:         { type: String, enum: ['home', 'online', 'either'], required: true },
    preferredTiming: { type: String, default: '', trim: true, maxlength: 160 },
    sourcePage:   { type: String, default: '/', trim: true, maxlength: 120 },
    status:       { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
  },
  { timestamps: true }
)

const Inquiry = models.Inquiry || mongoose.model('Inquiry', InquirySchema)
export default Inquiry