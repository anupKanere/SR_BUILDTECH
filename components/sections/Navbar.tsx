'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import companyData from '@/data/company.json'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1120]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#home')
              }}
              className="flex items-center gap-3.5 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-13 h-13 bg-white rounded-xl p-1 shadow-lg ring-1 ring-white/20 group-hover:ring-primary/50 transition-all flex items-center justify-center">
                <Image
                  src="/company-logo.jpeg"
                  alt="SR BUILDTEC Logo"
                  width={46}
                  height={46}
                  className="w-full h-full object-contain rounded-lg"
                  priority
                />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-heading font-black text-white tracking-wider">
                  SR BUILDTEC
                </h1>
                <p className="text-[11px] text-primary font-medium tracking-widest uppercase">
                  Building Excellence
                </p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className="text-slate-200 hover:text-primary font-medium text-sm transition-colors relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <Button
                size="sm"
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg shadow-primary/25 px-5 py-2.5 text-sm"
              >
                <span>Get Quote</span>
                <ArrowRight size={14} className="ml-1.5" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#0B1120]/98 backdrop-blur-2xl border-l border-white/10 shadow-2xl lg:hidden flex flex-col justify-between"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-white rounded-lg p-1">
                    <Image
                      src="/company-logo.jpeg"
                      alt="SR BUILDTEC Logo"
                      width={38}
                      height={38}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-white font-heading">SR BUILDTEC</h2>
                    <p className="text-[10px] text-primary uppercase tracking-wider">Building Excellence</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/5"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-6 space-y-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="block text-base font-medium text-slate-200 hover:text-primary hover:bg-white/5 px-4 py-3 rounded-xl transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Footer Quick Actions */}
            <div className="p-6 border-t border-white/10 space-y-3 bg-navy-950/50">
              <a
                href={`tel:${companyData.contact.phone}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-colors"
              >
                <Phone size={16} className="text-primary" />
                <span>Call +91 {companyData.contact.phone}</span>
              </a>
              <a
                href={`https://wa.me/${companyData.contact.whatsapp}?text=Hello! I would like to inquire about your services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-600 text-white font-semibold text-sm hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-primary-600 text-white font-semibold text-sm shadow-lg shadow-primary/30"
              >
                Get Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
