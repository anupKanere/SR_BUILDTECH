import React from 'react'
import Link from 'next/link'
import { siteConfig } from '@/data/site'
import { servicePillars } from '@/data/services'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-sand-200 border-t border-sand-300 text-forest pt-16 pb-24 md:pb-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-sand-300">
          {/* Brand Col */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl font-semibold tracking-wider text-forest uppercase block mb-3">
                {siteConfig.name}
              </span>
              <p className="text-sm text-forest-muted leading-relaxed max-w-sm mb-6">
                Turnkey civil engineering, contemporary residential construction, and bespoke interior architecture across Bengaluru.
              </p>
            </div>

            <div className="text-xs text-forest-muted font-mono space-y-1">
              <p className="font-semibold text-forest">Operational Hours:</p>
              <p>{siteConfig.hours.monToSat}</p>
              <p>{siteConfig.hours.sunday}</p>
              <p className="text-brass-600 font-medium">{siteConfig.hours.whatsappSupport}</p>
            </div>
          </div>

          {/* Pillars Col */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-forest-muted font-mono font-semibold mb-4">
              Service Pillars
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicePillars.map((pillar) => (
                <li key={pillar.slug}>
                  <Link
                    href={`/services/${pillar.slug}`}
                    className="text-forest hover:text-brass transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-xs font-mono text-forest-muted group-hover:text-brass">
                      {pillar.number}
                    </span>
                    <span>{pillar.shortTitle}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/services"
                  className="text-xs uppercase tracking-wider text-forest-muted hover:text-forest font-mono inline-flex items-center gap-1 border-b border-sand-400 pb-0.5"
                >
                  All 15 Specialized Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Col */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-forest-muted font-mono font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-forest hover:text-brass transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-forest-muted font-mono font-semibold mb-4">
              Studio & Inquiries
            </h4>
            <div className="space-y-3 text-sm text-forest">
              <p>
                <span className="block text-xs font-mono text-forest-muted">Telephone</span>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-brass transition-colors font-medium"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="block text-xs font-mono text-forest-muted">Email Inquiries</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-brass transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <span className="block text-xs font-mono text-forest-muted">Location</span>
                <span className="text-forest-muted">{siteConfig.location.formatted}</span>
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-mono">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-muted hover:text-forest underline underline-offset-4"
                >
                  Instagram
                </a>
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-muted hover:text-forest underline underline-offset-4"
                >
                  YouTube
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-muted hover:text-forest underline underline-offset-4"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-forest-muted gap-4">
          <p>© {currentYear} SR BUILDTEC. All rights reserved.</p>
          <p className="text-center md:text-right max-w-md">
            Civil engineering and construction services in accordance with Indian Standard (IS) codes and Bengaluru local building regulations.
          </p>
        </div>
      </div>
    </footer>
  )
}

