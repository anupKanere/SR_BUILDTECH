import { NextResponse } from 'next/server'

// In-memory rate-limiter: max 5 requests per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

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
    const { name, phone, email, projectType, location, budgetRange, message, honeypot } = body

    // 2. Honeypot check (bots auto-fill hidden input fields)
    if (honeypot) {
      // Silently return success to avoid alerting the bot
      return NextResponse.json(
        { success: true, message: 'Inquiry received successfully.' },
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

    // Payload size checks
    if (name.length > 100 || (message && message.length > 3000) || (email && email.length > 150)) {
      return NextResponse.json(
        { success: false, message: 'Payload size exceeds allowable limit.' },
        { status: 400 }
      )
    }

    console.log('🏛️ New SR BUILDTEC Project Inquiry:')
    console.log('Timestamp:', new Date().toISOString())
    console.log('Client IP:', ip)
    console.log('Name:', name.trim().slice(0, 100))
    console.log('Phone:', phone ? String(phone).trim().slice(0, 30) : 'N/A')
    console.log('Email:', email ? String(email).trim().slice(0, 100) : 'N/A')
    console.log('Project Scope:', projectType || 'General')
    console.log('Locality:', location || 'Bengaluru')
    console.log('Budget Range:', budgetRange || 'Unspecified')
    console.log('Message:', message ? String(message).trim().slice(0, 2500) : 'N/A')

    // Optional email dispatch integration when RESEND_API_KEY is configured
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM || 'inquiries@sr-buildtec.com',
            to: process.env.CONTACT_EMAIL || 'srbuildtec.blr@gmail.com',
            subject: `New Project Inquiry from ${name.trim()} (${projectType || 'Construction'})`,
            html: `
              <h2>New Project Inquiry - SR BUILDTEC</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
              <p><strong>Email:</strong> ${email || 'N/A'}</p>
              <p><strong>Scope:</strong> ${projectType}</p>
              <p><strong>Locality:</strong> ${location || 'N/A'}</p>
              <p><strong>Budget:</strong> ${budgetRange || 'N/A'}</p>
              <p><strong>Message:</strong></p>
              <p>${(message || '').replace(/\n/g, '<br/>')}</p>
            `,
          }),
        })

        if (!response.ok) {
          console.error('Failed to send email via Resend:', await response.text())
        }
      } catch (err) {
        console.error('Email dispatch error:', err)
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been submitted. Our engineering team will contact you shortly.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error in /api/contact:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error while processing your request.',
      },
      { status: 500 }
    )
  }
}
