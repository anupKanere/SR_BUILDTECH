'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ChevronUp, Eye, Maximize2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Lightbox, type LightboxImage } from '@/components/ui/Lightbox'
import { curatedProjects, archivePhotos, type ProjectCaseStudy } from '@/data/projects'

type FilterCategory = 'all' | 'villas' | 'commercial' | 'interiors' | 'structural'

export function WorkPageClient() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all')
  const [showArchive, setShowArchive] = useState(false)

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxImages, setLightboxImages] = useState<LightboxImage[]>([])

  // Filtered curated case studies
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return curatedProjects
    return curatedProjects.filter((p) => p.category === activeFilter)
  }, [activeFilter])

  // Filtered archive photos
  const filteredArchive = useMemo(() => {
    if (activeFilter === 'all') return archivePhotos
    return archivePhotos.filter((p) => p.category === activeFilter)
  }, [activeFilter])

  // Open lightbox from curated project
  const handleOpenProjectLightbox = (project: ProjectCaseStudy, startIdx = 0) => {
    const images: LightboxImage[] = project.gallery.map((g) => ({
      src: g.src,
      alt: g.alt,
      title: project.title,
      locality: `${project.locality}, Bengaluru`,
      category: project.categoryLabel,
    }))
    setLightboxImages(images)
    setLightboxIndex(startIdx)
    setLightboxOpen(true)
  }

  // Open lightbox from archive photo
  const handleOpenArchiveLightbox = (index: number) => {
    const images: LightboxImage[] = filteredArchive.map((p) => ({
      src: p.src,
      alt: p.alt,
      title: p.title,
      locality: p.locality,
      category: p.tag,
    }))
    setLightboxImages(images)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const categories: Array<{ id: FilterCategory; label: string }> = [
    { id: 'all', label: 'All Works' },
    { id: 'villas', label: 'Villas' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'interiors', label: 'Interiors' },
    { id: 'structural', label: 'Structural & Site' },
  ]

  return (
    <>
      <div className="space-y-16 md:space-y-24 py-12 md:py-20">
        {/* Page Header */}
        <section>
          <Container>
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-forest-muted block mb-3">
                Selected Works
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-forest font-medium leading-[1.15] tracking-tight">
                Curated portfolio of Bengaluru builds & structures.
              </h1>
              <p className="text-base sm:text-lg text-forest-muted mt-5 leading-relaxed">
                Explore our handovers and engineering milestones across Bengaluru—from bespoke turnkey villas and multi-storey commercial frameworks to precision interior millwork and private wellness suites.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="mt-10 flex flex-wrap gap-2 border-b border-sand-300 pb-4">
              {categories.map((cat) => {
                const isActive = activeFilter === cat.id
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveFilter(cat.id)}
                    className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                      isActive
                        ? 'bg-forest text-sand font-semibold'
                        : 'bg-sand-100 text-forest hover:bg-sand-200 border border-sand-300'
                    }`}
                  >
                    {cat.label}
                  </button>
                )
              })}
            </div>
          </Container>
        </section>

        {/* Curated Case Studies Grid */}
        <section>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {filteredProjects.map((project) => (
                <article
                  key={project.slug}
                  className="bg-white border border-sand-300 rounded-sm overflow-hidden shadow-xs flex flex-col justify-between group"
                >
                  <div>
                    {/* Hero Image Container */}
                    <div className="relative aspect-[16/10] w-full bg-sand-200 overflow-hidden">
                      <Image
                        src={project.heroImage.src}
                        alt={project.heroImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-102 transition-transform duration-500"
                      />

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 bg-forest-900/80 backdrop-blur-xs text-sand text-[10px] font-mono px-2 py-0.5 rounded-2xs">
                        {project.categoryLabel}
                      </div>

                      {/* Direct Lightbox Preview Icon */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          handleOpenProjectLightbox(project, 0)
                        }}
                        aria-label={`Preview gallery for ${project.title}`}
                        className="absolute bottom-3 right-3 p-2 bg-sand/90 text-forest hover:bg-forest hover:text-sand backdrop-blur-xs rounded-sm transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Metadata & Description */}
                    <div className="p-6 sm:p-8 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-forest-muted">
                        <span>{project.locality}</span>
                        <span>{project.year}</span>
                      </div>

                      <h2 className="font-serif text-2xl text-forest font-medium leading-snug">
                        <Link
                          href={`/work/${project.slug}`}
                          className="hover:text-brass transition-colors"
                        >
                          {project.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-forest-muted leading-relaxed line-clamp-2">
                        {project.shortSummary}
                      </p>

                      {/* Mini Thumbnail Row */}
                      <div className="pt-3 grid grid-cols-4 gap-2">
                        {project.gallery.slice(0, 4).map((img, gIdx) => (
                          <button
                            key={gIdx}
                            type="button"
                            onClick={() => handleOpenProjectLightbox(project, gIdx)}
                            className="relative aspect-square w-full rounded-2xs overflow-hidden border border-sand-300 hover:opacity-80 transition-opacity cursor-pointer bg-sand-200"
                            aria-label={`View photo ${gIdx + 1} of ${project.title}`}
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              sizes="100px"
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer link to case study */}
                  <div className="px-6 sm:px-8 py-4 border-t border-sand-200 bg-sand-50/50 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-forest-muted">
                      Scale: {project.builtUpArea}
                    </span>
                    <Link
                      href={`/work/${project.slug}`}
                      className="text-xs font-mono uppercase tracking-widest text-forest group-hover:text-brass transition-colors inline-flex items-center gap-1 font-semibold"
                    >
                      <span>Read Case Study</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Collapsed "More site photos" Section (Lazy-loaded, expandable) */}
        <section className="border-t border-sand-300 pt-16">
          <Container>
            <div className="text-center max-w-xl mx-auto space-y-3 mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-forest-muted block">
                Technical Archive
              </span>
              <h2 className="font-serif text-3xl text-forest font-medium">
                Additional on-site progress & detail photographs
              </h2>
              <p className="text-sm text-forest-muted">
                Explore additional documentation photos of foundation excavation, formwork, reinforcement steel checks, and custom joinery detailing.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setShowArchive(!showArchive)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-forest border border-sand-300 hover:bg-sand-100 transition-colors rounded-sm text-xs font-mono uppercase tracking-widest cursor-pointer shadow-2xs font-semibold"
                >
                  <span>
                    {showArchive
                      ? 'Collapse Site Photo Archive'
                      : `View ${filteredArchive.length} More Site Photos`}
                  </span>
                  {showArchive ? (
                    <ChevronUp className="w-4 h-4 text-brass" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-brass" />
                  )}
                </button>
              </div>
            </div>

            {/* Expanded Archive Grid */}
            {showArchive && (
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in">
                {filteredArchive.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => handleOpenArchiveLightbox(idx)}
                    className="group relative aspect-square w-full bg-sand-200 border border-sand-300 rounded-sm overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    <div className="absolute inset-0 bg-forest-900/60 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-sand">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brass-300 block">
                        {item.tag}
                      </span>
                      <p className="text-xs font-medium font-serif line-clamp-2">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-sand-300 mt-0.5 line-clamp-1">
                        {item.locality}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
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

