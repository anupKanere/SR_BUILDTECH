import React from 'react'

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-forest focus:text-sand focus:border focus:border-brass focus:shadow-md focus:text-sm font-medium transition-all"
    >
      Skip to main content
    </a>
  )
}

