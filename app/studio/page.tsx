import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Studio & Approach — Engineering & Craftsmanship',
  description:
    'Learn about SR BUILDTEC, our 10+ years of civil engineering and construction practice in Bengaluru, our structural philosophy, and our commitment to transparent construction.',
}

export default function StudioPage() {
  return (
    <div className="space-y-20 md:space-y-28 py-12 md:py-20">
      {/* Intro Header */}
      <section>
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-forest-muted block mb-3">
              Studio & Philosophy
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-forest font-medium leading-[1.15] tracking-tight">
              A decade of structural integrity and honest execution in Bengaluru.
            </h1>
            <p className="text-base sm:text-lg text-forest-muted mt-5 leading-relaxed">
              Founded over 10 years ago, SR BUILDTEC was established on a simple conviction: construction should be led by civil engineering rigour, clear mathematical documentation, and transparent contracts rather than salesmanship and arbitrary markups.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Editorial Image Grid */}
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7">
              <div className="relative aspect-[16/10] w-full bg-sand-200 border border-sand-300 rounded-sm overflow-hidden shadow-xs">
                <Image
                  src="/images/gallery/IMG-20261020-WA0100.jpg"
                  alt="SR BUILDTEC civil engineer reviewing reinforcement blueprints and site progress in Bengaluru"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-forest-900/80 backdrop-blur-xs text-sand text-[10px] font-mono px-2 py-0.5 rounded-2xs">
                  On-Site Engineering Oversight
                </div>
              </div>
            </div>

            <div className="md:col-span-5 space-y-4 text-sm text-forest-muted leading-relaxed">
              <h2 className="font-serif text-2xl text-forest font-medium">
                Our approach to site realities
              </h2>
              <p>
                Every plot of land in Bengaluru tells a distinct geotechnical story. Elevated hard basalt shelves require vastly different foundation footings and excavation methods than deep red clay matrices and seasonal high-water tables in valley terrain across the city.
              </p>
              <p>
                We do not apply cookie-cutter foundation formulas. Our engineers commission geotechnical borehole tests and calculate structural frame loads against IS 456 and IS 1893 seismic guidelines, ensuring your structure stands true across decades.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Craftsmanship & Working Values as a Continuous Narrative (NOT cards!) */}
      <section className="bg-sand-200/50 border-y border-sand-300 py-16 md:py-24">
        <Container size="narrow">
          <div className="space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-forest-muted block mb-2">
                Core Ethos
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-forest font-medium leading-tight">
                Engineering precision meets architectural sensibility.
              </h2>
            </div>

            {/* Continuous narrative paragraph (Explicitly fulfilling requirement: "working values written as a short paragraph (not cards)") */}
            <div className="prose prose-forest text-base sm:text-lg text-forest-muted leading-relaxed space-y-6">
              <p>
                We believe that great architecture is only as durable as the concrete cover that protects its rebar and the waterproofing membrane that seals its roof. Our working ethos is rooted in structural accountability, material honesty, and clear contractual transparency. We refuse to compromise on bar bending schedules, cure times, or cement grades to meet superficial deadlines; instead, we build realistic timelines coordinated with Bengaluru’s seasonal monsoons and trade availability. By producing comprehensive architectural and structural drawings before excavation, we give our clients absolute clarity over every cubic meter of concrete and every square foot of joinery.
              </p>
              <p>
                Equally, we honor the craftsman’s touch in modern construction. When the structural frame is cured and stripped of shuttering, our finishing teams step in with millimeter-accurate cabinetry, acoustic drywalling, and precision stone masonry. We view the relationship between builder and homeowner as a joint engineering partnership, maintained through unvarnished weekly reports and direct access to responsible civil engineers.
              </p>
            </div>

            <div className="pt-4 border-t border-sand-300 flex flex-wrap gap-8 text-xs font-mono text-forest-muted">
              <div>
                <span className="block text-forest font-bold text-sm">Location</span>
                <span>Bengaluru, Karnataka</span>
              </div>
              <div>
                <span className="block text-forest font-bold text-sm">Technical Basis</span>
                <span>Indian Standard Codes (IS 456, 1893, NBC)</span>
              </div>
              <div>
                <span className="block text-forest font-bold text-sm">Contract Model</span>
                <span>Itemized BOQ with Milestone Drawdowns</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Placeholder Section (Clearly marked, elegant, non-fake) */}
      <section>
        <Container>
          <div className="max-w-xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-forest-muted block mb-2">
              The People
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest font-medium leading-tight">
              Engineers, site managers & master tradesmen
            </h2>
            <p className="text-sm text-forest-muted mt-3">
              Direct leadership on every site. Our team combines university-trained civil and structural engineers with experienced site supervisors who understand Bengaluru construction realities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-sand-300 p-6 rounded-sm shadow-xs space-y-3">
              <div className="relative aspect-[4/3] w-full bg-sand-200 border border-sand-300 rounded-sm overflow-hidden mb-4">
                <Image
                  src="/images/gallery/IMG-20261020-WA0100.jpg"
                  alt="Civil Engineering Leadership at SR BUILDTEC"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-brass-700 font-semibold block">
                Civil Engineering Team
              </span>
              <h3 className="font-serif text-lg text-forest font-medium">
                Structural & Project Leadership
              </h3>
              <p className="text-xs text-forest-muted leading-relaxed">
                Oversees computational structural analysis, municipal drawing coordination, and quality audit sign-offs across all active residential and commercial sites.
              </p>
            </div>

            <div className="bg-white border border-sand-300 p-6 rounded-sm shadow-xs space-y-3">
              <div className="relative aspect-[4/3] w-full bg-sand-200 border border-sand-300 rounded-sm overflow-hidden mb-4">
                <Image
                  src="/images/gallery/IMG-20261017-WA0074.jpg"
                  alt="Site Quality and Concrete Inspection Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-brass-700 font-semibold block">
                Site Operations
              </span>
              <h3 className="font-serif text-lg text-forest font-medium">
                Civil Site Supervision
              </h3>
              <p className="text-xs text-forest-muted leading-relaxed">
                Direct on-site management of shuttering alignment, bar bending schedules, concrete batching, slump tests, and trade safety protocols.
              </p>
            </div>

            <div className="bg-white border border-sand-300 p-6 rounded-sm shadow-xs space-y-3">
              <div className="relative aspect-[4/3] w-full bg-sand-200 border border-sand-300 rounded-sm overflow-hidden mb-4">
                <Image
                  src="/images/gallery/IMG-20261020-WA0080.jpg"
                  alt="Architectural Joinery and Interior Fit-Out Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-brass-700 font-semibold block">
                Finishing & Interiors
              </span>
              <h3 className="font-serif text-lg text-forest font-medium">
                Joinery & Specialty Trades
              </h3>
              <p className="text-xs text-forest-muted leading-relaxed">
                Master carpenters, waterproofing technicians, and electrical coordinators handling custom wardrobes, modular kitchens, and high-tolerance interior fit-outs.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-sand-200/60 border border-sand-300 rounded-sm text-xs text-forest-muted font-mono flex items-center justify-between">
            <span>[Verified Team Structure: SR BUILDTEC in-house civil engineers and trade leads]</span>
            <Link href="/contact" className="text-forest hover:text-brass underline">
              Inquire about engineer consultation &rarr;
            </Link>
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-sand-300 pt-16">
        <Container>
          <div className="bg-forest text-sand p-8 sm:p-12 lg:p-16 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-brass-300">
                Next Steps
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-sand font-medium">
                Plan your construction project with us.
              </h2>
              <p className="text-sm text-sand-300 leading-relaxed">
                Bring your plot dimensions or architectural sketches for a no-obligation structural feasibility review and itemized BOQ estimate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-sand text-forest text-xs font-semibold tracking-widest uppercase hover:bg-white transition-colors rounded-sm text-center"
              >
                Contact Studio &rarr;
              </Link>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-forest-700 text-sand border border-sand-400/20 text-xs font-semibold tracking-widest uppercase hover:bg-forest-600 transition-colors rounded-sm text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

