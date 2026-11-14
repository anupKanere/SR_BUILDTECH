'use client'

import React from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/data/site'

export function MobileStickyBar() {
  return (
    <aside
      aria-label="Direct mobile contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-sand-100/95 backdrop-blur-md border-t border-sand-300 px-4 py-2.5 md:hidden shadow-lg transition-transform"
    >
      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-white text-forest border border-sand-300 rounded-sm text-xs font-semibold tracking-wider uppercase hover:bg-sand-200 transition-colors shadow-2xs"
        >
          <Phone className="w-3.5 h-3.5 text-forest-muted" />
          <span>Call Studio</span>
        </a>

        {/* Direct WhatsApp Button */}
        <a
          href={siteConfig.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-forest text-sand border border-forest rounded-sm text-xs font-semibold tracking-wider uppercase hover:bg-forest-700 transition-colors shadow-2xs"
        >
          <MessageCircle className="w-3.5 h-3.5 text-brass-300" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  )
}

