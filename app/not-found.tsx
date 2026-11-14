import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export default function NotFound() {
  return (
    <div className="py-24 sm:py-36">
      <Container size="narrow">
        <div className="bg-white border border-sand-300 p-8 sm:p-12 lg:p-16 rounded-sm shadow-xs text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-brass font-bold block">
            404 / Notice
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl text-forest font-medium">
            Page not found
          </h1>

          <p className="text-sm sm:text-base text-forest-muted max-w-md mx-auto leading-relaxed">
            The page you requested may have been restructured as part of our updated portfolio and service architecture.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3.5 bg-forest text-sand text-xs font-semibold tracking-widest uppercase hover:bg-forest-700 transition-colors rounded-sm"
            >
              Return to Home &rarr;
            </Link>

            <Link
              href="/work"
              className="px-6 py-3.5 bg-sand-100 text-forest border border-sand-300 text-xs font-semibold tracking-widest uppercase hover:bg-sand-200 transition-colors rounded-sm"
            >
              Explore Our Work
            </Link>
          </div>

          <div className="pt-6 border-t border-sand-200 text-xs font-mono text-forest-muted">
            Direct Assistance: <a href="tel:+918660326541" className="underline hover:text-forest">+91 86603 26541</a>
          </div>
        </div>
      </Container>
    </div>
  )
}

