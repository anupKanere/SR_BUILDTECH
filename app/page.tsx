'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone, MessageCircle, ChevronDown, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/forms/ContactForm'
import { siteConfig } from '@/data/site'
import { servicePillars } from '@/data/services'
import { curatedProjects } from '@/data/projects'
import { faqs } from '@/data/faqs'

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0]?.id || null)

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id))
  }

  // 6 projects for the project-first strip
  const stripProjects = curatedProjects.slice(0, 6)

  // 4 process phases for the vertical timeline
  const processSteps = [
    {
      number: '01',
      title: 'Planning & Blueprint',
      clientReceives: 'Structural calculations, 1:50 architectural sheets, soil analysis, and an unalterable itemized BOQ.',
      activities: 'Soil borehole drilling, BBMP/BDA setback compliance checks, 3D structural load modeling, and milestone budget lock.',
    },
    {
      number: '02',
      title: 'Foundation & Earthwork',
      clientReceives: 'Anti-termite treatment certificate, footing inspection sign-off, and plinth beam compaction report.',
      activities: 'Precision mechanical excavation, sub-base leveling, isolated or raft footing shuttering, and waterproofed plinth pour.',
    },
    {
      number: '03',
      title: 'Superstructure & Engineering',
      clientReceives: '7-day and 28-day concrete cube compressive test certificates and weekly casting photo updates.',
      activities: 'Fe550D TMT column and beam reinforcement ties, laser-leveled slab casting, solid concrete block masonry, and RCC lintel bands.',
    },
    {
      number: '04',
      title: 'Finishing & Handover',
      clientReceives: 'Complete as-built drawings, 10-year structural warranty binder, and key handover documentation.',
      activities: 'Multi-layer terrace and sunken slab waterproofing, concealed MEP pressure testing, custom millwork installation, and final clean inspection.',
    },
  ]

  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      {/* =========================================================================
          1. SPLIT HERO (Light background, editorial, left text, right tall photo)
          ========================================================================= */}
      <section className="pt-8 md:pt-16 lg:pt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 text-xs font-mono tracking-widest text-forest-muted uppercase">
                <span className="w-2 h-2 rounded-full bg-brass" />
                <span>Civil Engineering & Turnkey Construction</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest font-medium leading-[1.1] tracking-tight">
                Building with engineering rigour and honest craftsmanship.
              </h1>

              <p className="text-base sm:text-lg text-forest-muted leading-relaxed max-w-xl font-normal">
                SR BUILDTEC delivers residential villas, commercial structures, and tailored interior spaces across Bengaluru. Every foundation is calculated, every quantity is itemized, and every pour is supervised by qualified civil engineers.
              </p>

              {/* CTAs: One primary "Start a project" and one secondary text link "See our work" */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-forest text-sand text-xs font-semibold tracking-widest uppercase hover:bg-forest-700 transition-colors rounded-sm shadow-2xs"
                >
                  Start a project &rarr;
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-brass transition-colors tracking-wide"
                >
                  <span>See our work</span>
                  <span className="font-serif italic text-brass">&rarr;</span>
                </Link>
              </div>

              {/* Subdued baseline detail */}
              <div className="pt-8 border-t border-sand-300 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-forest-muted font-mono">
                <div>
                  <span className="block text-forest font-bold text-sm">10+ Years</span>
                  <span>Bengaluru Experience</span>
                </div>
                <div>
                  <span className="block text-forest font-bold text-sm">Turnkey BOQ</span>
                  <span>Zero Hidden Escalation</span>
                </div>
                <div>
                  <span className="block text-forest font-bold text-sm">IS Standards</span>
                  <span>IS 456 & IS 1893 Codes</span>
                </div>
              </div>
            </div>

            {/* Right: Tall Featured Project Photograph */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] w-full bg-sand-200 border border-sand-300 rounded-sm overflow-hidden shadow-xs">
                <Image
                  src="/images/gallery/IMG-20261017-WA0023.jpg"
                  alt="Completed bespoke contemporary villa elevation by SR BUILDTEC in Bengaluru"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-forest-900/85 via-forest-900/40 to-transparent text-sand">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-brass-300 block mb-1">
                    Featured Handover • Turnkey Villa
                  </span>
                  <p className="font-serif text-lg leading-snug">
                    The Contemporary Cantilevered Villa
                  </p>
                  <p className="text-xs text-sand-300 mt-1">
                    Turnkey architecture, RCC framing & custom interior joinery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          2. PROJECT-FIRST STRIP (Horizontally scrolling row of 6 real projects)
          ========================================================================= */}
      <section className="border-y border-sand-300 bg-sand-200/50 py-12 md:py-16 overflow-hidden">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-forest-muted block mb-1">
                Recent Portfolios
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-forest font-medium">
                Featured work across Bengaluru
              </h2>
            </div>
            <Link
              href="/work"
              className="text-xs font-mono uppercase tracking-widest text-forest hover:text-brass transition-colors inline-flex items-center gap-1.5"
            >
              <span>Explore all case studies</span>
              <span>&rarr;</span>
            </Link>
          </div>

          {/* Horizontally scrolling track */}
          <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 snap-x">
            {stripProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="flex-none w-[280px] sm:w-[320px] md:w-[360px] snap-start group"
              >
                <div className="relative aspect-[4/3] w-full bg-sand-200 border border-sand-300 rounded-sm overflow-hidden mb-3">
                  <Image
                    src={project.heroImage.src}
                    alt={project.heroImage.alt}
                    fill
                    sizes="(max-width: 768px) 280px, 360px"
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-forest-900/80 backdrop-blur-xs text-sand text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-2xs">
                    {project.categoryLabel}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-forest-muted font-mono">
                    <span>{project.locality}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-lg text-forest font-medium group-hover:text-brass transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-forest-muted line-clamp-1">
                    {project.shortSummary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          3. "WHAT WE DO": 3 Large Numbered Pillars as Full-Width Alternating Rows
             (NOT an icon grid!)
          ========================================================================= */}
      <section>
        <Container>
          <div className="mb-16 md:mb-20 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-forest-muted block mb-2">
              01 / Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest font-medium leading-tight">
              Three pillars of engineering & construction
            </h2>
            <p className="text-sm sm:text-base text-forest-muted mt-3">
              We eliminate the friction between architectural concepts and on-site reality by uniting structural planning, civil execution, and specialty interiors under one technical team.
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {servicePillars.map((pillar, idx) => {
              const isEven = idx % 2 === 1

              return (
                <div
                  key={pillar.slug}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Text Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? 'lg:col-start-7' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-semibold text-brass tracking-wider">
                        {pillar.number}
                      </span>
                      <span className="w-8 h-[1px] bg-sand-400" />
                      <span className="text-xs font-mono uppercase tracking-widest text-forest-muted">
                        Pillar
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-forest font-medium leading-tight">
                      {pillar.title}
                    </h3>

                    <p className="text-sm sm:text-base text-forest-muted leading-relaxed">
                      {pillar.detailedIntro}
                    </p>

                    {/* Services Sub-list */}
                    <div className="pt-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-forest font-semibold mb-3">
                        Included Disciplines
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-forest-muted">
                        {pillar.services.map((svc) => (
                          <li key={svc.id} className="flex items-start gap-2">
                            <span className="text-brass font-bold">•</span>
                            <span>{svc.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Link
                        href={`/services/${pillar.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest hover:text-brass transition-colors border-b border-forest/30 hover:border-brass pb-0.5"
                      >
                        <span>Detailed specifications & deliverables</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:col-start-1' : ''
                    }`}
                  >
                    <div className="relative aspect-[4/3] w-full bg-sand-200 border border-sand-300 rounded-sm overflow-hidden shadow-xs">
                      <Image
                        src={pillar.heroImage}
                        alt={pillar.heroImageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute bottom-3 right-3 bg-forest-900/80 backdrop-blur-xs text-sand text-[10px] font-mono px-2.5 py-1 rounded-2xs">
                        {pillar.shortTitle}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          4. VERTICAL NUMBERED PROCESS TIMELINE (Left-aligned, deliverables focused)
          ========================================================================= */}
      <section className="bg-sand-200/40 border-y border-sand-300 py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left intro */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-forest-muted block">
                02 / Methodology
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-forest font-medium leading-tight">
                A disciplined four-phase execution roadmap
              </h2>
              <p className="text-sm text-forest-muted leading-relaxed">
                We remove ambiguity through phased sign-offs. Work progresses only after each engineering checkpoint is verified by qualified civil supervisors and documented for your records.
              </p>
              <div className="pt-4">
                <Link
                  href="/process"
                  className="text-xs font-mono uppercase tracking-widest text-forest hover:text-brass transition-colors inline-flex items-center gap-1.5 border-b border-forest/30 pb-0.5"
                >
                  <span>Read full milestone checklist</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right vertical timeline */}
            <div className="lg:col-span-7 space-y-8">
              {processSteps.map((step, idx) => (
                <div
                  key={step.number}
                  className="relative pl-10 border-l border-sand-400/80 pb-8 last:pb-0"
                >
                  {/* Numbered node */}
                  <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-forest text-sand text-[10px] font-mono flex items-center justify-center font-bold">
                    {step.number}
                  </span>

                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-forest font-medium">
                      {step.title}
                    </h3>
                    <p className="text-sm text-forest-muted leading-relaxed">
                      {step.activities}
                    </p>

                    <div className="mt-3 p-3.5 bg-white border border-sand-300 rounded-sm text-xs">
                      <span className="font-mono uppercase tracking-wider text-brass-700 font-semibold block mb-1">
                        Client Deliverable at Handover of Stage:
                      </span>
                      <span className="text-forest-muted leading-relaxed">
                        {step.clientReceives}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          5. "HOW WE WORK": 3 Specific Commitments (No percentage claims, no fake badges)
          ========================================================================= */}
      <section>
        <Container>
          <div className="max-w-xl mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-forest-muted block mb-2">
              03 / Working Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest font-medium leading-tight">
              Three commitments on every project
            </h2>
            <p className="text-sm sm:text-base text-forest-muted mt-3">
              We stand behind concrete facts, reproducible engineering standards, and contractual transparency—not vague marketing promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.commitments.map((item) => (
              <div
                key={item.number}
                className="bg-white border border-sand-300 p-8 rounded-sm shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-brass font-bold tracking-widest block mb-4">
                    Commitment {item.number}
                  </span>
                  <h3 className="font-serif text-xl text-forest font-medium mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-forest-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-sand-200 flex items-center gap-2 text-xs font-mono text-forest-muted">
                  <CheckCircle2 className="w-4 h-4 text-forest" />
                  <span>Verified standard</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-forest-muted font-mono">
            {siteConfig.verifiedClaimsNotice}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          6. FAQ ACCORDION (5-6 specific questions answered plainly)
          ========================================================================= */}
      <section className="bg-sand-200/40 border-y border-sand-300 py-20 md:py-28">
        <Container size="narrow">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-forest-muted block">
              04 / Common Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest font-medium">
              Practical details on building in Bengaluru
            </h2>
            <p className="text-sm text-forest-muted">
              Clear answers regarding sanctions, timelines, soil testing, payment milestones, and structural guarantees.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id

              return (
                <div
                  key={faq.id}
                  className="bg-white border border-sand-300 rounded-sm overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus-visible:outline-none"
                  >
                    <span className="font-serif text-lg sm:text-xl text-forest font-medium">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-forest-muted shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-forest' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm text-forest-muted leading-relaxed border-t border-sand-200/60 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          7. CLOSING CONTACT SECTION (Quote form on one side, single WhatsApp/call on other)
          ========================================================================= */}
      <section id="contact-section">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Info & WhatsApp/Call Block */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-forest-muted block mb-2">
                  05 / Start Consultation
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-forest font-medium leading-tight">
                  Discuss your site, blueprints, or upcoming build.
                </h2>
                <p className="text-sm sm:text-base text-forest-muted mt-3 leading-relaxed">
                  Whether you have an empty plot needing soil testing and drawings or an approved sanction ready for structural execution, we are ready to provide technical review and BOQ estimation.
                </p>
              </div>

              {/* Single WhatsApp & Direct Call Card */}
              <div className="bg-sand-200 border border-sand-300 p-6 rounded-sm space-y-4">
                <h3 className="font-serif text-lg text-forest font-medium">
                  Direct Engineer Access
                </h3>
                <p className="text-xs text-forest-muted leading-relaxed">
                  Message or call our Bengaluru project engineers directly. No sales representatives.
                </p>

                <div className="space-y-3 pt-2">
                  <a
                    href={siteConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-forest text-sand hover:bg-forest-700 transition-colors rounded-sm text-xs font-semibold tracking-wider uppercase"
                  >
                    <MessageCircle className="w-4 h-4 text-brass-300" />
                    <span>Chat on WhatsApp (+91 86603 26541)</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-3 p-3 bg-white text-forest border border-sand-300 hover:bg-sand-100 transition-colors rounded-sm text-xs font-semibold tracking-wider uppercase"
                  >
                    <Phone className="w-4 h-4 text-forest-muted" />
                    <span>Call Studio: {siteConfig.contact.phoneDisplay}</span>
                  </a>
                </div>

                <div className="pt-3 text-[11px] text-forest-muted font-mono space-y-1 border-t border-sand-300">
                  <p>Operating: {siteConfig.hours.monToSat}</p>
                  <p>{siteConfig.hours.sunday}</p>
                  <p className="text-brass-700 font-semibold">{siteConfig.hours.whatsappSupport}</p>
                </div>
              </div>
            </div>

            {/* Right: Quote Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
