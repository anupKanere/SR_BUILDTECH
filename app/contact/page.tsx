import React from 'react'
import type { Metadata } from 'next'
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/forms/ContactForm'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Contact Studio — Project Consultation & BOQ Estimation',
  description:
    'Consult with SR BUILDTEC civil engineers in Bengaluru. Direct phone, WhatsApp, office hours, and project consultation form for turnkey villas and commercial builds.',
}

export default function ContactPage() {
  return (
    <div className="space-y-16 md:space-y-24 py-12 md:py-20">
      {/* Page Header */}
      <section>
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-forest-muted block mb-3">
              Direct Contact
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-forest font-medium leading-[1.15] tracking-tight">
              Start your project with an engineering consultation.
            </h1>
            <p className="text-base sm:text-lg text-forest-muted mt-5 leading-relaxed">
              We welcome prospective homeowners, developers, and architects to discuss plot feasibility, structural blueprints, and transparent BOQ estimations.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid: Form on Left/Center, Studio Information on Right */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-sand-200/60 p-4 border border-sand-300 rounded-sm text-xs font-mono text-forest-muted">
                <span className="text-forest font-semibold">Consultation Note:</span> Submit your details below to receive a direct call or WhatsApp follow-up from our lead civil engineer within 24 hours.
              </div>

              <ContactForm />
            </div>

            {/* Direct Studio Information Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* WhatsApp Highlight Box */}
              <div className="bg-forest text-sand p-6 sm:p-8 rounded-sm shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-brass-300">
                  <span className="w-2 h-2 rounded-full bg-brass animate-pulse" />
                  <span>Fastest Response Channel</span>
                </div>

                <h3 className="font-serif text-2xl text-sand font-medium">
                  Direct WhatsApp Inquiries
                </h3>

                <p className="text-xs sm:text-sm text-sand-300 leading-relaxed">
                  Have drawings, plot dimensions, or elevation photos to share? Send them directly to our engineering desk via WhatsApp for rapid technical feedback.
                </p>

                <div className="pt-2">
                  <a
                    href={siteConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-sand text-forest text-xs font-semibold tracking-widest uppercase hover:bg-white transition-colors rounded-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-brass-700" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>

                <p className="text-[11px] font-mono text-sand-400 text-center">
                  Monitored 24/7 for active site and new project questions.
                </p>
              </div>

              {/* Direct Details Card */}
              <div className="bg-white border border-sand-300 p-6 sm:p-8 rounded-sm shadow-xs space-y-6 text-sm text-forest">
                <h3 className="font-serif text-xl font-medium border-b border-sand-200 pb-3">
                  Studio Channels
                </h3>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-forest-muted mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs font-mono text-forest-muted uppercase tracking-wider">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="font-medium hover:text-brass transition-colors"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-forest-muted mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs font-mono text-forest-muted uppercase tracking-wider">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-medium hover:text-brass transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-forest-muted mt-1 shrink-0" />
                  <div>
                    <span className="block text-xs font-mono text-forest-muted uppercase tracking-wider">
                      Location
                    </span>
                    <span className="text-forest-muted">
                      {siteConfig.location.formatted}
                    </span>
                    <div className="mt-1">
                      <a
                        href="https://maps.google.com/?q=Bengaluru,+Karnataka,+India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono uppercase tracking-wider text-forest underline hover:text-brass inline-flex items-center gap-1"
                      >
                        <span>View on Google Maps</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 border-t border-sand-200 pt-5">
                  <Clock className="w-4 h-4 text-forest-muted mt-1 shrink-0" />
                  <div className="space-y-1 text-xs text-forest-muted font-mono">
                    <span className="block font-semibold text-forest uppercase tracking-wider">
                      Operational Hours
                    </span>
                    <p>{siteConfig.hours.monToSat}</p>
                    <p>{siteConfig.hours.sunday}</p>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="border-t border-sand-200 pt-5">
                  <span className="block text-xs font-mono text-forest-muted uppercase tracking-wider mb-2">
                    Verified Social Channels
                  </span>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <a
                      href={siteConfig.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest hover:text-brass underline"
                    >
                      Instagram
                    </a>
                    <a
                      href={siteConfig.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest hover:text-brass underline"
                    >
                      YouTube
                    </a>
                    <a
                      href={siteConfig.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest hover:text-brass underline"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

