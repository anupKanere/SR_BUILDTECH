import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { servicePillars } from '@/data/services'

export const metadata: Metadata = {
  title: 'Interiors & Specialty Services — Joinery, Modular Kitchens & Fitness Suites',
  description:
    'Architectural interior planning, BWP marine modular kitchens, custom wardrobes, acoustic drywall, landscaping, and fitness suites in Bengaluru by SR BUILDTEC.',
}

export default function InteriorsSpecialtyPillarPage() {
  const pillar = servicePillars.find((p) => p.slug === 'interiors-specialty')
  if (!pillar) notFound()

  return (
    <div className="space-y-20 md:space-y-28 py-12 md:py-20">
      {/* Pillar Hero */}
      <section>
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Link
                href="/services"
                className="text-xs font-mono uppercase tracking-widest text-forest-muted hover:text-brass transition-colors"
              >
                Services
              </Link>
              <span className="text-sand-400">/</span>
              <span className="text-xs font-mono uppercase tracking-widest text-brass font-bold">
                Pillar {pillar.number}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest font-medium leading-[1.1] tracking-tight">
              {pillar.title}
            </h1>

            <p className="text-base sm:text-lg text-forest-muted mt-6 leading-relaxed">
              {pillar.detailedIntro}
            </p>
          </div>
        </Container>
      </section>

      {/* Hero Visual */}
      <section>
        <Container>
          <div className="relative aspect-[21/9] w-full rounded-sm overflow-hidden border border-sand-300 bg-sand-200 shadow-xs mb-12">
            <Image
              src={pillar.heroImage}
              alt={pillar.heroImageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-forest-900/85 backdrop-blur-xs text-sand p-4 rounded-sm max-w-md hidden sm:block">
              <span className="text-[10px] font-mono uppercase tracking-wider text-brass-300 block mb-1">
                Architectural Fit-Out
              </span>
              <p className="text-xs text-sand-200">
                Millimeter-accurate custom joinery, German hardware, and acoustic space division.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Table */}
      <section>
        <Container>
          <div className="mb-10 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-forest-muted block mb-2">
              Deliverables & Specifications
            </span>
            <h2 className="font-serif text-3xl text-forest font-medium">
              Interiors & specialty disciplines
            </h2>
          </div>

          <div className="space-y-8">
            {pillar.services.map((svc, idx) => (
              <div
                key={svc.id}
                id={svc.id}
                className="bg-white border border-sand-300 rounded-sm p-6 sm:p-8 lg:p-10 shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-brass font-bold">
                        0{idx + 1}
                      </span>
                      <h3 className="font-serif text-2xl text-forest font-medium">
                        {svc.title}
                      </h3>
                    </div>
                    <p className="text-sm text-forest-muted leading-relaxed">
                      {svc.detailedDesc}
                    </p>
                    {svc.bengaluruContext && (
                      <div className="p-3 bg-sand-100 border border-sand-300 rounded-sm text-xs text-forest-muted font-sans">
                        <strong className="text-forest font-medium block mb-0.5">
                          Bengaluru Living Context:
                        </strong>
                        {svc.bengaluruContext}
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-7 bg-sand-50/60 border border-sand-200 p-6 rounded-sm space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-forest font-semibold">
                      Included Work & Deliverables:
                    </h4>
                    <ul className="space-y-2.5 text-xs text-forest-muted">
                      {svc.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <span className="text-brass font-bold text-sm leading-none mt-0.5">✓</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Navigation across other pillars */}
      <section className="border-t border-sand-300 pt-16">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-forest-muted block">
                Pillar 01
              </span>
              <h3 className="font-serif text-2xl text-forest font-medium">
                Pillar 01: Design & Engineering
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/services/design-engineering"
                className="px-6 py-3 bg-forest text-sand text-xs font-semibold tracking-widest uppercase hover:bg-forest-700 transition-colors rounded-sm"
              >
                View Engineering &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

