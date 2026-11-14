'use client'

import React, { useState } from 'react'
import { MessageCircle, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '@/data/site'

interface FormData {
  name: string
  phone: string
  email: string
  projectType: string
  location: string
  budgetRange: string
  message: string
  honeypot: string
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  projectType: 'Turnkey Residential Villa',
  location: '',
  budgetRange: '',
  message: '',
  honeypot: '',
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Construct structured, legible WhatsApp message
  const buildWhatsAppMessage = (data: FormData): string => {
    const lines: string[] = [
      '🏛️ *NEW PROJECT INQUIRY — SR BUILDTEC*',
      '──────────────────────────────',
      `👤 *Name:* ${data.name.trim()}`,
      `📱 *Phone:* ${data.phone.trim() || 'Not specified'}`,
    ]

    if (data.email.trim()) {
      lines.push(`📧 *Email:* ${data.email.trim()}`)
    }

    lines.push(`🏗️ *Scope:* ${data.projectType}`)

    if (data.location.trim()) {
      lines.push(`📍 *Bengaluru Locality:* ${data.location.trim()}`)
    }

    if (data.budgetRange.trim()) {
      lines.push(`💰 *Budget Range:* ${data.budgetRange.trim()}`)
    }

    if (data.message.trim()) {
      lines.push('')
      lines.push('📝 *Project Requirements:*')
      lines.push(data.message.trim())
    }

    lines.push('──────────────────────────────')
    lines.push('_Sent via SR BUILDTEC Project Consultation Form_')

    return lines.join('\n')
  }

  // Validation
  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setStatus('error')
      setErrorMessage('Please provide your full name.')
      return false
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setStatus('error')
      setErrorMessage('Please provide your phone number so we can reach you on WhatsApp.')
      return false
    }
    return true
  }

  // Send via WhatsApp
  const handleWhatsAppSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setStatus('submitting')
    setErrorMessage('')

    const formattedMessage = buildWhatsAppMessage(formData)
    const targetPhone = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(formattedMessage)}`
    setLastWhatsAppUrl(whatsappUrl)

    // Save lead to server in background so no inquiry is ever lost
    try {
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch((err) => console.warn('Background contact sync warning:', err))
    } catch {
      // Non-blocking
    }

    // Launch WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setStatus('success')
  }

  return (
    <div className="bg-white border border-sand-300 p-6 sm:p-8 lg:p-10 rounded-sm shadow-xs">
      {status === 'success' ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-full bg-forest-50 border border-forest-200 flex items-center justify-center text-forest text-2xl font-serif">
            <CheckCircle2 className="w-8 h-8 text-forest" />
          </div>

          <h3 className="text-2xl font-serif text-forest font-semibold">
            Opening WhatsApp chat...
          </h3>

          <p className="text-sm text-forest-muted max-w-md mx-auto leading-relaxed">
            Your project inquiry has been formatted and directed to our WhatsApp line at{' '}
            <strong className="text-forest">{siteConfig.contact.phoneDisplay}</strong>. If your chat did not open automatically, tap the button below.
          </p>

          {lastWhatsAppUrl && (
            <div className="pt-2">
              <a
                href={lastWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-sand text-xs font-semibold tracking-widest uppercase hover:bg-forest-700 transition-colors rounded-sm shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-brass-300" />
                <span>Open WhatsApp Chat Directly</span>
              </a>
            </div>
          )}

          <div className="pt-4 border-t border-sand-200">
            <button
              type="button"
              onClick={() => {
                setStatus('idle')
                setFormData(initialForm)
              }}
              className="text-xs uppercase tracking-wider font-mono text-forest underline hover:text-brass transition-colors cursor-pointer"
            >
              Start another inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleWhatsAppSubmit} className="space-y-5" noValidate>
          {/* Honeypot anti-spam field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Leave this field blank</label>
            <input
              type="text"
              id="website"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono uppercase tracking-wider text-forest-muted mb-1.5"
              >
                Full Name <span className="text-brass-700">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ramesh Chandra"
                className="w-full px-3.5 py-2.5 bg-sand-50/50 border border-sand-300 rounded-sm text-sm text-forest placeholder:text-sand-500 focus:bg-white focus:border-forest transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-mono uppercase tracking-wider text-forest-muted mb-1.5"
              >
                Phone / WhatsApp <span className="text-brass-700">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 bg-sand-50/50 border border-sand-300 rounded-sm text-sm text-forest placeholder:text-sand-500 focus:bg-white focus:border-forest transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-wider text-forest-muted mb-1.5"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 bg-sand-50/50 border border-sand-300 rounded-sm text-sm text-forest placeholder:text-sand-500 focus:bg-white focus:border-forest transition-colors"
              />
            </div>

            {/* Project Type */}
            <div>
              <label
                htmlFor="projectType"
                className="block text-xs font-mono uppercase tracking-wider text-forest-muted mb-1.5"
              >
                Project Scope
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-sand-50/50 border border-sand-300 rounded-sm text-sm text-forest focus:bg-white focus:border-forest transition-colors"
              >
                <option value="Turnkey Residential Villa">Turnkey Residential Villa</option>
                <option value="Commercial Construction">Commercial Construction</option>
                <option value="Structural & Architectural Drawings">Structural & Architectural Drawings</option>
                <option value="Architectural Interiors & Joinery">Architectural Interiors & Joinery</option>
                <option value="Modular Kitchen Execution">Modular Kitchen Execution</option>
                <option value="Metal Fabrication & Structural Steel">Metal Fabrication & Structural Steel</option>
                <option value="Other Engineering Consultation">Other Engineering Consultation</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Project Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-xs font-mono uppercase tracking-wider text-forest-muted mb-1.5"
              >
                Project Location / Zone
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. North Bengaluru, South Bengaluru, etc."
                className="w-full px-3.5 py-2.5 bg-sand-50/50 border border-sand-300 rounded-sm text-sm text-forest placeholder:text-sand-500 focus:bg-white focus:border-forest transition-colors"
              />
            </div>

            {/* Budget Range */}
            <div>
              <label
                htmlFor="budgetRange"
                className="block text-xs font-mono uppercase tracking-wider text-forest-muted mb-1.5"
              >
                Approximate Budget Range
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-sand-50/50 border border-sand-300 rounded-sm text-sm text-forest focus:bg-white focus:border-forest transition-colors"
              >
                <option value="">Select an approximate range</option>
                <option value="₹25 Lakhs – ₹50 Lakhs">₹25 Lakhs – ₹50 Lakhs (Interiors/Specialty)</option>
                <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
                <option value="₹1 Crore – ₹2.5 Crores">₹1 Crore – ₹2.5 Crores (Turnkey Villa)</option>
                <option value="₹2.5 Crores – ₹5 Crores">₹2.5 Crores – ₹5 Crores (Luxury Villa/Commercial)</option>
                <option value="Above ₹5 Crores">Above ₹5 Crores</option>
                <option value="Undecided / Needs BOQ">Undecided / Needs BOQ Estimation</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono uppercase tracking-wider text-forest-muted mb-1.5"
            >
              Project Details & Requirements
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your plot size, architectural requirements, or planned construction milestone..."
              className="w-full px-3.5 py-2.5 bg-sand-50/50 border border-sand-300 rounded-sm text-sm text-forest placeholder:text-sand-500 focus:bg-white focus:border-forest transition-colors resize-y"
            />
          </div>

          {/* Error Banner */}
          {status === 'error' && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-sm">
              {errorMessage}
            </div>
          )}

          {/* Single Action: Send via WhatsApp */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 px-6 bg-forest text-sand hover:bg-forest-700 active:bg-forest-800 disabled:opacity-60 transition-colors rounded-sm text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2.5 cursor-pointer shadow-2xs"
            >
              <MessageCircle className="w-4 h-4 text-brass-300" />
              <span>
                {status === 'submitting'
                  ? 'Preparing WhatsApp Chat...'
                  : 'Send Inquiry via WhatsApp'}
              </span>
            </button>

            <p className="text-[11px] text-forest-muted text-center pt-2.5 font-mono">
              Opens WhatsApp chat directly with SR BUILDTEC engineers • No spam
            </p>
          </div>
        </form>
      )}
    </div>
  )
}
