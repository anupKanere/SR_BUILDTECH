'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/data/site'

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Architectural White Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-sand-300 shadow-xs'
            : 'bg-white border-sand-300/80 shadow-2xs'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          {/* Brand Logo - Clean, un-cropped rectangular placement */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus-visible:outline-none"
            aria-label="SR BUILDTEC - Home"
          >
            <div className="relative w-12 h-12 bg-white border border-sand-300 rounded-sm p-1 flex items-center justify-center overflow-hidden transition-colors group-hover:border-forest">
              <Image
                src="/company-logo.jpeg"
                alt="SR BUILDTEC"
                width={44}
                height={44}
                priority
                className="object-contain w-auto h-auto max-h-full max-w-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-wider font-semibold text-forest uppercase leading-tight">
                SR BUILDTEC
              </span>
              <span className="text-[10px] tracking-widest uppercase text-forest-muted font-mono font-medium">
                Bengaluru • Est. 2014
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-forest-muted"
          >
            {siteConfig.navLinks.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 transition-colors hover:text-forest ${
                    isActive ? 'text-forest font-semibold' : ''
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brass" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Action: Text link "Start a project" */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/contact"
              className="text-sm font-medium text-forest hover:text-brass transition-colors border-b border-forest/40 hover:border-brass pb-0.5 tracking-wide"
            >
              Start a project &rarr;
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 text-forest hover:text-brass transition-colors focus-visible:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu (White) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-20 z-50 bg-white flex flex-col justify-between px-6 py-10 md:hidden animate-fade-in"
        >
          <div className="flex flex-col gap-6">
            <span className="text-[11px] uppercase tracking-widest text-forest-muted font-mono font-medium">
              Navigation
            </span>
            <nav className="flex flex-col gap-4">
              {siteConfig.navLinks.map((item, idx) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname === item.href || pathname.startsWith(`${item.href}/`)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-baseline justify-between py-2 border-b border-sand-300 text-2xl font-serif text-forest hover:text-brass transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-forest-muted">
                      0{idx + 1}
                    </span>
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-sand-300 flex flex-col gap-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-forest hover:text-brass flex items-center justify-between py-2"
            >
              <span>Start a project</span>
              <span>&rarr;</span>
            </Link>
            <div className="text-xs text-forest-muted space-y-1 font-sans">
              <p>Direct: {siteConfig.contact.phoneDisplay}</p>
              <p>{siteConfig.contact.email}</p>
              <p>Bengaluru, Karnataka, India</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
