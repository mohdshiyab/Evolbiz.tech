import { NextResponse } from "next/server"
import { ZodError } from "zod"
import { connectToDatabase } from "@/lib/db/connect"
import ContactSubmission from "@/models/ContactSubmission"
import { contactFormSchema } from "@/lib/validations/contact"

export const dynamic = "force-dynamic" // never cache this route

// Very small in-memory rate limiter to slow down obvious spam/bot submissions.
// This resets whenever the server process restarts and is per-instance only —
// it's a first line of defense, not a replacement for a real rate-limiting
// service (e.g. Upstash Redis) if this ever needs to scale across instances.
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 5
const requestLog = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = (requestLog.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  timestamps.push(now)
  requestLog.set(ip, timestamps)
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) return forwardedFor.split(",")[0].trim()
  return request.headers.get("x-real-ip") || "unknown"
}

export async function POST(request: Request) {
  const ip = getClientIp(request)
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    )
  }

  let rawBody: unknown
  try {
    rawBody = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 })
  }

  let data
  try {
    data = contactFormSchema.parse(rawBody)
  } catch (err) {
    if (err instanceof ZodError) {
      const firstIssue = err.issues[0]
      return NextResponse.json(
        { error: firstIssue?.message || "Invalid submission." },
        { status: 400 }
      )
    }
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 })
  }

  try {
    await connectToDatabase()

    const submission = await ContactSubmission.create({
      ...data,
      userAgent: request.headers.get("user-agent") || null,
    })

    return NextResponse.json({ success: true, id: submission._id }, { status: 201 })
  } catch (err) {
    console.error("Failed to save contact submission:", err)
    return NextResponse.json(
      { error: "Something went wrong on our end. Please try again shortly." },
      { status: 500 }
    )
  }
}

// Lightweight admin listing endpoint — e.g. GET /api/contact?page=1&limit=20
// Protect this in production by adding auth before deploying (e.g. an
// ADMIN_API_KEY checked against an Authorization header).
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Math.max(1, Number(searchParams.get("page")) || 1)
  const limit = Math.min(100, Math.max(1, Number(searchParams.get("limit")) || 20))

  try {
    await connectToDatabase()

    const [submissions, total] = await Promise.all([
      ContactSubmission.find()
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      ContactSubmission.countDocuments(),
    ])

    return NextResponse.json({
      success: true,
      data: submissions,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (err) {
    console.error("Failed to fetch contact submissions:", err)
    return NextResponse.json({ error: "Failed to fetch submissions." }, { status: 500 })
  }
}
