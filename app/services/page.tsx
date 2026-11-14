import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { servicePillars } from '@/data/services'

export const metadata: Metadata = {
  title: 'Services — Civil Engineering, Construction & Architectural Interiors',
  description:
    'Comprehensive construction and engineering services in Bengaluru: structural drawings, turnkey residential villas, commercial structures, BOQ estimation, and bespoke joinery.',
}

export default function ServicesHubPage() {
  return (
    <div className="space-y-20 md:space-y-28 py-12 md:py-20">
      {/* Header */}
      <section>
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-forest-muted block mb-3">
              Capabilities Hub
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-forest font-medium leading-[1.15] tracking-tight">
              Engineering discipline across every phase of construction.
            </h1>
            <p className="text-base sm:text-lg text-forest-muted mt-5 leading-relaxed">
              SR BUILDTEC operates across three specialized pillars, delivering total technical continuity from initial soil testing and structural blueprints to heavy civil casting and architectural interiors.
            </p>
          </div>
        </Container>
      </section>

      {/* 3 Pillars In-Depth Section */}
      <section>
        <Container>
          <div className="space-y-16">
            {servicePillars.map((pillar) => (
              <div
                key={pillar.slug}
                className="bg-white border border-sand-300 rounded-sm overflow-hidden shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Column: Pillar Summary & Hero Image */}
                  <div className="lg:col-span-5 p-8 sm:p-10 bg-sand-100 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-sand-300">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs font-mono font-bold text-brass tracking-widest">
                          PILLAR {pillar.number}
                        </span>
                        <span className="w-6 h-[1px] bg-sand-300" />
                      </div>
                      <h2 className="font-serif text-3xl text-forest font-medium mb-4">
                        {pillar.title}
                      </h2>
                      <p className="text-sm text-forest-muted leading-relaxed mb-6">
                        {pillar.detailedIntro}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-sand-300 bg-sand-200">
                        <Image
                          src={pillar.heroImage}
                          alt={pillar.heroImageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover"
                        />
                      </div>
                      <Link
                        href={`/services/${pillar.slug}`}
                        className="inline-flex items-center justify-center w-full py-3 px-4 bg-forest text-sand text-xs font-semibold tracking-widest uppercase hover:bg-forest-700 transition-colors rounded-sm text-center"
                      >
                        Explore {pillar.shortTitle} Pillar &rarr;
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Clean List of Child Services */}
                  <div className="lg:col-span-7 p-8 sm:p-10 divide-y divide-sand-200">
                    <div className="pb-4">
                      <span className="text-xs font-mono uppercase tracking-widest text-forest-muted">
                        Specialized Services & Deliverables
                      </span>
                    </div>

                    {pillar.services.map((svc) => (
                      <div key={svc.id} className="py-5 first:pt-4 last:pb-0">
                        <h3 className="font-serif text-xl text-forest font-medium mb-1.5">
                          {svc.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-forest-muted leading-relaxed mb-3">
                          {svc.shortDesc}
                        </p>

                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-forest-muted/90 font-mono">
                          {svc.deliverables.slice(0, 2).map((del, dIdx) => (
                            <span key={dIdx} className="inline-flex items-center gap-1.5">
                              <span className="text-brass">✓</span>
                              <span>{del}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Standards & Process Callout */}
      <section className="bg-sand-200/50 border-y border-sand-300 py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brass-700 block mb-2">
                Indian Standard Codes
              </span>
              <h3 className="font-serif text-xl text-forest font-medium mb-2">
                Engineered Compliance
              </h3>
              <p className="text-xs text-forest-muted leading-relaxed">
                Structural computations and concrete mix designs comply rigorously with IS 456, IS 1893, and National Building Code standards.
              </p>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brass-700 block mb-2">
                Itemized Estimation
              </span>
              <h3 className="font-serif text-xl text-forest font-medium mb-2">
                BOQ Cost Protection
              </h3>
              <p className="text-xs text-forest-muted leading-relaxed">
                Exhaustive quantity bills lock in material grades and labour rates, protecting homeowners from mid-stream price escalations.
              </p>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brass-700 block mb-2">
                Direct Civil Supervision
              </span>
              <h3 className="font-serif text-xl text-forest font-medium mb-2">
                On-Site Quality Audits
              </h3>
              <p className="text-xs text-forest-muted leading-relaxed">
                Qualified civil engineers perform slump tests, cube crushing tests, and bar bending audits directly on your site.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

