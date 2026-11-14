import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Process & Engineering Roadmap — Four-Phase Delivery',
  description:
    'Our transparent 4-phase construction and engineering process in Bengaluru: Planning & Blueprint, Foundation & Earthwork, Superstructure & Engineering, Finishing & Handover.',
}

export default function ProcessPage() {
  const phases = [
    {
      number: '01',
      title: 'Planning & Blueprint Phase',
      timeframe: 'Weeks 1 – 6',
      summary:
        'Mathematical precision before ground is broken. We translate your spatial vision into peer-reviewed architectural sheets, geotechnical soil assessments, and an unalterable BOQ.',
      image: '/images/gallery/IMG-20261020-WA0100.jpg',
      imageAlt: 'Engineers reviewing architectural blueprints on site in Bengaluru',
      activities: [
        'Geotechnical borehole drilling and Safe Bearing Capacity (SBC) laboratory testing.',
        'Site survey, boundary verification, and BBMP/BDA setback compliance analysis.',
        'Architectural floor plans, 4-sided elevations, and section drafting at 1:50 scale.',
        '3D computational frame analysis complying with IS 456 concrete and IS 1893 seismic codes.',
        'Preparation of an itemized Bill of Quantities (BOQ) with grade-level material specs.',
      ],
      deliverables: [
        'Complete architectural working drawing set',
        'Structural calculation dossier & bar-bending schedule',
        'Geotechnical soil investigation lab report',
        'Signed milestone BOQ with locked-in material grades',
      ],
    },
    {
      number: '02',
      title: 'Foundation & Earthwork Phase',
      timeframe: 'Weeks 7 – 14',
      summary:
        'Establishing the bedrock stability of your building. We execute mechanical excavation, anti-termite barrier protection, and high-strength concrete footing pours.',
      image: '/images/gallery/IMG-20261017-WA0046.jpg',
      imageAlt: 'Foundation excavation and rebar cage reinforcement in Bengaluru soil',
      activities: [
        'Mechanical or manual excavation calibrated to geotechnical pit depth.',
        'Anti-termite chemical soil emulsion treatment adhering to IS 6313 standards.',
        'Plain Cement Concrete (PCC) mud-mat leveling bed casting.',
        'Placement of Fe550D TMT reinforcement footing mesh and column starter cages.',
        'Shuttering, concrete pour, mechanical vibration, and continuous water curing.',
        'Backfilling with quality earth, plate compaction, and plinth beam casting.',
      ],
      deliverables: [
        'Anti-termite pest barrier warranty certificate',
        'Footing concrete compressive cube crush test reports (7 & 28 days)',
        'Plinth beam center-line sign-off inspection sheet',
        'Underground plumbing sleeve layout audit',
      ],
    },
    {
      number: '03',
      title: 'Superstructure & Engineering Phase',
      timeframe: 'Months 4 – 9',
      summary:
        'Erecting the load-bearing concrete and masonry framework. Every column, beam, and slab pour is inspected by qualified civil engineers.',
      image: '/images/gallery/IMG-20261017-WA0092.jpg',
      imageAlt: 'RCC slab casting with concrete pump and leveling team',
      activities: [
        'Erection of column formwork with plumb-line laser verification.',
        'Deck shuttering using marine-grade film-faced plywood and steel acrow props.',
        'Concealed electrical conduit and plumbing sleeve integration before slab casting.',
        'Ready-mix or batch-mixed high-grade concrete pours with slump testing on every truck.',
        '21-day continuous wet ponding curing protocol for all horizontal slab surfaces.',
        'Solid concrete block masonry with polymer-modified mortar and RCC lintel tie-bands.',
      ],
      deliverables: [
        'Batch-wise concrete compressive strength certificates',
        'Slab rebar pre-pour audit sign-off sheet',
        'Structural steel mill test certificates (MTC) verifying Fe550D grade',
        'Weekly photographic progress reports delivered via WhatsApp and email',
      ],
    },
    {
      number: '04',
      title: 'Finishing & Handover Phase',
      timeframe: 'Months 10 – 14',
      summary:
        'Transforming the cured concrete shell into an enduring, refined living space. Precision waterproofing, MEP testing, and architectural carpentry.',
      image: '/images/gallery/IMG-20261020-WA0016.jpg',
      imageAlt: 'Finished luxury interior living space with bespoke joinery',
      activities: [
        'Multi-layer elastomeric waterproofing on terrace slabs and sunken bathrooms with pond testing.',
        'Plumbing hydrostatic pressure testing to 10 kg/cm² to ensure zero concealed joint leaks.',
        'Level-4 gypsum plastering, primer coats, and premium acrylic emulsion painting.',
        'Bespoke wardrobe and modular kitchen installation with moisture-resistant marine ply.',
        'Sanitary fixture, electrical switchboard, and lighting trim installations.',
        'Comprehensive multi-point snag list resolution and deep site clean.',
      ],
      deliverables: [
        '10-Year written structural stability warranty binder',
        '5-Year leak-free waterproofing guarantee certificate',
        'Full set of as-built architectural and MEP drawings',
        'Keys, appliance warranties, and ceremonial handover dossier',
      ],
    },
  ]

  return (
    <div className="space-y-20 md:space-y-28 py-12 md:py-20">
      {/* Header */}
      <section>
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-forest-muted block mb-3">
              Delivery Roadmap
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-forest font-medium leading-[1.15] tracking-tight">
              A four-phase engineering discipline.
            </h1>
            <p className="text-base sm:text-lg text-forest-muted mt-5 leading-relaxed">
              Construction without process invites delays and disputes. At SR BUILDTEC, our projects follow a sequential four-phase roadmap where each stage has explicit technical criteria, client sign-offs, and clear deliverables.
            </p>
          </div>
        </Container>
      </section>

      {/* Phased Breakdown */}
      <section>
        <Container>
          <div className="space-y-20">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="bg-white border border-sand-300 rounded-sm overflow-hidden shadow-xs"
              >
                {/* Phase Header */}
                <div className="p-6 sm:p-8 bg-sand-100 border-b border-sand-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-forest text-sand text-xs font-mono font-bold flex items-center justify-center">
                      {phase.number}
                    </span>
                    <div>
                      <h2 className="font-serif text-2xl text-forest font-medium">
                        {phase.title}
                      </h2>
                      <span className="text-xs font-mono text-forest-muted">
                        Typical Timeline: {phase.timeframe}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider text-brass-700 bg-sand-200/80 px-3 py-1 rounded-2xs self-start sm:self-auto">
                    Verified Milestone
                  </span>
                </div>

                {/* Phase Body */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="text-sm sm:text-base text-forest-muted leading-relaxed mb-8 max-w-3xl">
                    {phase.summary}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Activities */}
                    <div className="lg:col-span-7 space-y-4">
                      <h3 className="text-xs font-mono uppercase tracking-widest text-forest font-semibold">
                        Core Engineering & On-Site Activities
                      </h3>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-forest-muted">
                        {phase.activities.map((act, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2.5">
                            <span className="text-brass font-bold text-sm leading-none mt-0.5">•</span>
                            <span className="leading-relaxed">{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Deliverables Box & Photo */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-sand-300 bg-sand-200">
                        <Image
                          src={phase.image}
                          alt={phase.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover"
                        />
                      </div>

                      <div className="p-4 bg-sand-50 border border-sand-200 rounded-sm">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-forest font-semibold block mb-2">
                          Client Receives at Stage Handover:
                        </span>
                        <ul className="space-y-1.5 text-xs text-forest-muted">
                          {phase.deliverables.map((del, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="text-forest font-bold">✓</span>
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing Callout */}
      <section className="bg-sand-200/50 border-y border-sand-300 py-16">
        <Container size="narrow">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-3xl text-forest font-medium">
              Ready to begin Phase 01 for your site?
            </h2>
            <p className="text-sm text-forest-muted max-w-lg mx-auto">
              Contact our engineering studio to schedule a site inspection, discuss soil testing, and review your architectural requirements.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-forest text-sand text-xs font-semibold tracking-widest uppercase hover:bg-forest-700 transition-colors rounded-sm"
              >
                Schedule Site Consultation &rarr;
              </Link>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white text-forest border border-sand-300 text-xs font-semibold tracking-widest uppercase hover:bg-sand-100 transition-colors rounded-sm"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

