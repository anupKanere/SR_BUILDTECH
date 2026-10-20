import { NextResponse } from 'next/server'

// In-memory rate-limiter: max 5 requests per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  // Clean expired entry
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true
  }

  entry.count += 1
  return false
}

// Periodic cleanup of stale rate-limit records every hour
setInterval(() => {
  const now = Date.now()
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(ip)
    }
  }
}, 60 * 60 * 1000).unref?.()

export async function POST(request: Request) {
  try {
    // 1. IP extraction & Rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'anonymous'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please wait a few minutes before trying again.',
        },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, phone, email, projectType, message, honeypot } = body

    // 2. Honeypot check (bots auto-fill hidden input fields)
    if (honeypot) {
      // Silently return success to avoid alerting the bot
      return NextResponse.json(
        { success: true, message: 'Form submitted successfully!' },
        { status: 200 }
      )
    }

    // 3. Input validation & sanity checks
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid name.' },
        { status: 400 }
      )
    }

    if (!phone && !email) {
      return NextResponse.json(
        { success: false, message: 'Please provide either a phone number or email address.' },
        { status: 400 }
      )
    }

    // Length limit checks (DoS / payload overflow prevention)
    if (name.length > 100 || (message && message.length > 2500) || (email && email.length > 150)) {
      return NextResponse.json(
        { success: false, message: 'Payload size exceeds allowable limit.' },
        { status: 400 }
      )
    }

    console.log('📧 New Contact Form Submission:')
    console.log('================================')
    console.log('Timestamp:', new Date().toISOString())
    console.log('Client IP:', ip)
    console.log('Name:', name.trim().slice(0, 100))
    console.log('Phone:', phone ? String(phone).trim().slice(0, 30) : 'N/A')
    console.log('Email:', email ? String(email).trim().slice(0, 100) : 'N/A')
    console.log('Project Type:', projectType || 'General')
    console.log('Message:', message ? String(message).trim().slice(0, 2000) : 'N/A')
    console.log('================================')

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully! We will contact you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit form. Please try again.' },
      { status: 500 }
    )
  }
}
