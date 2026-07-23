import { z } from "zod"
import { CONTACT_SERVICES } from "@/models/ContactSubmission"

// Server-side validation — never trust the client, even though the form
// already marks these fields as required in the UI.
export const contactFormSchema = z.object({
  name: z
    .string({ required_error: "Name is required." })
    .trim()
    .min(1, "Name is required.")
    .max(120, "Name must be 120 characters or fewer."),
  email: z
    .string({ required_error: "Email is required." })
    .trim()
    .min(1, "Email is required.")
    .max(254, "Email must be 254 characters or fewer.")
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number must be 30 characters or fewer.")
    .optional()
    .default(""),
  service: z
    .enum(CONTACT_SERVICES)
    .optional()
    .default("Not specified"),
  message: z
    .string({ required_error: "Message is required." })
    .trim()
    .min(1, "Message is required.")
    .max(5000, "Message must be 5000 characters or fewer."),
})

export type ContactFormInput = z.infer<typeof contactFormSchema>
