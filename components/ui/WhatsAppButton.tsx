'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, ArrowUp } from 'lucide-react'
import companyData from '@/data/company.json'

export function WhatsAppButton() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const message = encodeURIComponent(
    'Hello! I would like to inquire about your construction and engineering services.'
  )
  const whatsappUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${message}`

  return (
    <aside aria-label="Quick contact and navigation" className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10 }}
            transition={{ duration: 0.2 }}
            className="w-12 h-12 bg-navy-800/90 hover:bg-primary border border-white/20 hover:border-primary text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 bg-gradient-to-tr from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 rounded-full shadow-2xl flex items-center justify-center group ring-2 ring-white/20 hover:ring-white/40 transition-all"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="text-white drop-shadow-md" size={30} />

        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25 pointer-events-none" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3.5 bg-navy-900/95 border border-white/10 text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl pointer-events-none">
          Chat on WhatsApp
        </span>
      </motion.a>
    </aside>
  )
}
