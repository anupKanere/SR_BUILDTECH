'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { SiGmail, SiGooglemaps } from 'react-icons/si'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import companyData from '@/data/company.json'

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="pt-8 pb-16 sm:pt-10 sm:pb-20 md:pt-12 md:pb-24 bg-gradient-to-b from-navy via-navy-900 to-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <Container>
        <SectionHeading
          subtitle="Get In Touch"
          title="Let's Build Something Amazing Together"
          description="Direct lines to our engineering specialists in Bangalore. Call, WhatsApp, or email us anytime."
        />

        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Main Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-navy-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl mb-8 sm:mb-10 border border-white/10"
          >
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1.5">
                Direct Contact Channels
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto font-normal">
                Reach out for project consultations, architectural drawings, or turnkey quotes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Phone */}
              <motion.a
                href={`tel:${companyData.contact.phone}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 sm:gap-5 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg shadow-blue-500/30 ring-1 ring-blue-400/30">
                  <FaPhoneAlt size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5 font-semibold">Call Us Directly</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">+91 {companyData.contact.phone}</p>
                </div>
              </motion.a>

              {/* WhatsApp - Exact Authentic WhatsApp Logo */}
              <motion.a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello! I'm interested in your construction services.`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 sm:gap-5 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-white/10 hover:border-[#25D366]/50 hover:shadow-lg hover:shadow-[#25D366]/10 transition-all group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg shadow-[#25D366]/40 ring-1 ring-[#25D366]/50">
                  <FaWhatsapp size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5 font-semibold">Instant WhatsApp</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#25D366] transition-colors">Chat Now</p>
                </div>
              </motion.a>

              {/* Email - Colorful Gmail Logo */}
              <motion.a
                href={`mailto:${companyData.contact.email}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 sm:gap-5 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-white/10 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 transition-all group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#EA4335] via-[#FF5722] to-[#E53935] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg shadow-red-500/30 ring-1 ring-red-400/30">
                  <SiGmail size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5 font-semibold">Email Us</p>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-white break-all group-hover:text-red-400 transition-colors">{companyData.contact.email}</p>
                </div>
              </motion.a>

              {/* Location - Google Maps Pin */}
              <motion.a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyData.contact.address + ' ' + companyData.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 sm:gap-5 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-white/10 hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/10 transition-all group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#EA4335] via-[#FBBC05] to-[#34A853] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg shadow-rose-500/30 ring-1 ring-amber-400/30">
                  <SiGooglemaps size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-0.5 font-semibold">Office Location</p>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-rose-300 transition-colors">{companyData.contact.address}</p>
                </div>
              </motion.a>
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="text-center relative z-10 pt-4 sm:pt-5 border-t border-white/10"
            >
              <p className="text-slate-300 font-semibold mb-3 text-xs uppercase tracking-wider">Connect With Us On Social Media</p>
              <div className="flex justify-center gap-4">
                <a
                  href={companyData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-xl flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-white pointer-events-none" size={22} />
                </a>
                <a
                  href={companyData.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-white pointer-events-none" size={22} />
                </a>
                <a
                  href={companyData.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-white pointer-events-none" size={22} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="bg-navy-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/10"
            >
              <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Schedule A Free Consultation</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                Call our engineering specialists or send a WhatsApp message to discuss your architectural drawings, structural requirements, or turnkey construction plans.
              </p>
              <a
                href={`tel:${companyData.contact.phone}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-primary/30 text-sm"
              >
                <FaPhoneAlt size={16} />
                <span>Call Now (+91 {companyData.contact.phone})</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="bg-navy-800/80 backdrop-blur-xl rounded-2xl p-8 border border-primary/30"
            >
              <h4 className="text-xl md:text-2xl font-bold text-white mb-3">Operating Hours</h4>
              <div className="space-y-3 text-slate-300 text-sm">
                <p className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="font-semibold text-white">Monday - Saturday:</span>
                  <span>9:00 AM - 7:00 PM</span>
                </p>
                <p className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="font-semibold text-white">Sunday:</span>
                  <span>10:00 AM - 5:00 PM</span>
                </p>
                <p className="text-xs text-primary font-semibold pt-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>WhatsApp support available 24/7 for project inquiries</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
