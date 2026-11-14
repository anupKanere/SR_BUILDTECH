'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Lightbox, type LightboxImage } from '@/components/ui/Lightbox'
import type { ProjectCaseStudy } from '@/data/projects'
import { siteConfig } from '@/data/site'

interface ProjectCaseStudyClientProps {
  project: ProjectCaseStudy
  prevProject: ProjectCaseStudy
  nextProject: ProjectCaseStudy
}

export function ProjectCaseStudyClient({
  project,
  prevProject,
  nextProject,
}: ProjectCaseStudyClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const lightboxImages: LightboxImage[] = project.gallery.map((g) => ({
    src: g.src,
    alt: g.alt,
    title: project.title,
    locality: `${project.locality}, Bengaluru`,
    category: project.categoryLabel,
  }))

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx)
    setLightboxOpen(true)
  }

  return (
    <>
      <div className="space-y-16 md:space-y-24 py-12 md:py-20">
        {/* Back Link & Header */}
        <section>
          <Container>
            <div className="mb-6">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-forest-muted hover:text-brass transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to all projects</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-brass font-bold">
                    {project.categoryLabel}
                  </span>
                  <span className="text-sand-400">•</span>
                  <span className="text-xs font-mono text-forest-muted">
                    {project.locality}, {project.city}
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest font-medium leading-tight">
                  {project.title}
                </h1>

                <p className="text-base text-forest-muted max-w-2xl leading-relaxed">
                  {project.shortSummary}
                </p>
              </div>

              {/* Quick Specs Block */}
              <div className="lg:col-span-4 bg-white border border-sand-300 p-5 rounded-sm shadow-xs space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-sand-200">
                  <span className="text-forest-muted">Scale / Area:</span>
                  <span className="text-forest font-semibold">{project.builtUpArea}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-sand-200">
                  <span className="text-forest-muted">Timeline:</span>
                  <span className="text-forest font-semibold">{project.timeline}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-sand-200">
                  <span className="text-forest-muted">Year:</span>
                  <span className="text-forest font-semibold">{project.year}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-forest-muted">Client Type:</span>
                  <span className="text-forest font-semibold">{project.clientType}</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Featured Hero Visual */}
        <section>
          <Container>
            <div
              onClick={() => openLightbox(0)}
              className="group relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-sand-300 bg-sand-200 shadow-xs cursor-pointer"
            >
              <Image
                src={project.heroImage.src}
                alt={project.heroImage.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover group-hover:scale-101 transition-transform duration-500"
              />
              <div className="absolute bottom-4 right-4 p-2 bg-forest-900/80 backdrop-blur-xs text-sand rounded-sm text-xs font-mono flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Expand Fullscreen</span>
              </div>
            </div>
          </Container>
        </section>

        {/* Challenge, Engineering Solution & Scope Grid */}
        <section>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left: Narrative */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-brass-700 block mb-2">
                    Site Challenge
                  </span>
                  <h2 className="font-serif text-2xl text-forest font-medium mb-3">
                    Geotechnical & urban constraints
                  </h2>
                  <p className="text-sm sm:text-base text-forest-muted leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="pt-6 border-t border-sand-300">
                  <span className="text-xs font-mono uppercase tracking-widest text-brass-700 block mb-2">
                    Engineering Solution
                  </span>
                  <h2 className="font-serif text-2xl text-forest font-medium mb-3">
                    Structural execution & methodology
                  </h2>
                  <p className="text-sm sm:text-base text-forest-muted leading-relaxed">
                    {project.engineeringSolution}
                  </p>
                </div>
              </div>

              {/* Right: Contract Scope Deliverables */}
              <div className="lg:col-span-5 bg-sand-200/60 border border-sand-300 p-6 sm:p-8 rounded-sm space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-forest font-bold block">
                  Delivered Scope of Work
                </span>
                <ul className="space-y-3 text-xs sm:text-sm text-forest-muted">
                  {project.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-brass font-bold text-base leading-none">✓</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-sand-300">
                  <p className="text-xs text-forest-muted font-mono leading-relaxed">
                    All RCC and structural components signed off by certified civil engineering supervision.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Gallery Grid with Lightbox Interaction */}
        <section>
          <Container>
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-forest-muted block mb-1">
                Project Gallery
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-forest font-medium">
                Photographic documentation
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  className="group relative aspect-[4/3] w-full bg-sand-200 border border-sand-300 rounded-sm overflow-hidden cursor-pointer shadow-2xs"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-104 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-forest-900/50 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-sand">
                    <span className="text-[10px] font-mono text-brass-300">Photo 0{idx + 1}</span>
                    <p className="text-xs line-clamp-2 mt-0.5">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Prev / Next Project Navigation */}
        <section className="border-t border-sand-300 pt-12">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link
                href={`/work/${prevProject.slug}`}
                className="p-6 bg-white border border-sand-300 rounded-sm hover:border-forest transition-colors group space-y-1"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-forest-muted block">
                  &larr; Previous Case Study
                </span>
                <p className="font-serif text-lg text-forest group-hover:text-brass transition-colors font-medium">
                  {prevProject.title}
                </p>
                <p className="text-xs text-forest-muted font-mono">{prevProject.locality}</p>
              </Link>

              <Link
                href={`/work/${nextProject.slug}`}
                className="p-6 bg-white border border-sand-300 rounded-sm hover:border-forest transition-colors group space-y-1 text-left sm:text-right"
              >
                <span className="text-[10px] font-mono uppercase tracking-widest text-forest-muted block">
                  Next Case Study &rarr;
                </span>
                <p className="font-serif text-lg text-forest group-hover:text-brass transition-colors font-medium">
                  {nextProject.title}
                </p>
                <p className="text-xs text-forest-muted font-mono">{nextProject.locality}</p>
              </Link>
            </div>

            {/* Direct Project Consultation CTA */}
            <div className="mt-12 bg-sand-200 border border-sand-300 p-8 rounded-sm text-center space-y-4">
              <h3 className="font-serif text-2xl text-forest font-medium">
                Planning a similar project in Bengaluru?
              </h3>
              <p className="text-sm text-forest-muted max-w-lg mx-auto">
                Consult with our civil engineers to discuss plot feasibility, structural requirements, and transparent BOQ budgeting.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-forest text-sand text-xs font-semibold tracking-widest uppercase hover:bg-forest-700 transition-colors rounded-sm"
                >
                  Start Consultation &rarr;
                </Link>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-forest border border-sand-300 text-xs font-semibold tracking-widest uppercase hover:bg-sand-100 transition-colors rounded-sm"
                >
                  WhatsApp Inquiries
                </a>
              </div>
            </div>
          </Container>
        </section>
      </div>

      {/* Lightbox Component */}
      <Lightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </>
  )
}

