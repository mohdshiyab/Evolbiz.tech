import { Schema, model, models, type Document, type Model } from "mongoose"

export const CONTACT_SERVICES = [
  "Web Development",
  "E-Commerce",
  "Digital Marketing",
  "Branding",
  "ERP / CRM",
  "Cloud Hosting",
  "Not specified",
] as const

export type ContactService = (typeof CONTACT_SERVICES)[number]

export interface IContactSubmission extends Document {
  name: string
  email: string
  phone?: string
  service: ContactService
  message: string
  userAgent?: string | null
  status: "new" | "read" | "archived"
  createdAt: Date
  updatedAt: Date
}

const ContactSubmissionSchema = new Schema<IContactSubmission>(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      maxlength: [120, "Name must be 120 characters or fewer."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
      lowercase: true,
      maxlength: [254, "Email must be 254 characters or fewer."],
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address."],
    },
    phone: {
      type: String,
      trim: true,
      default: "",
      maxlength: [30, "Phone number must be 30 characters or fewer."],
    },
    service: {
      type: String,
      enum: CONTACT_SERVICES,
      default: "Not specified",
    },
    message: {
      type: String,
      required: [true, "Message is required."],
      trim: true,
      maxlength: [5000, "Message must be 5000 characters or fewer."],
    },
    userAgent: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ["new", "read", "archived"],
      default: "new",
    },
  },
  {
    timestamps: true,
    collection: "contact_submissions",
  }
)

ContactSubmissionSchema.index({ createdAt: -1 })
ContactSubmissionSchema.index({ email: 1 })

// Next.js hot-reloads modules in development, which would otherwise trigger
// "OverwriteModelError: Cannot overwrite model once compiled" from Mongoose
// on every save. Reusing an already-compiled model from `mongoose.models`
// avoids that.
const ContactSubmission: Model<IContactSubmission> =
  models.ContactSubmission || model<IContactSubmission>("ContactSubmission", ContactSubmissionSchema)

export default ContactSubmission
