'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Home,
  Building2,
  Grid3X3,
  SlidersHorizontal,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import galleryData from '@/data/gallery.json'

type CategoryKey = 'residential' | 'commercial'

interface PhotoItem {
  id: string
  imageUrl: string
  thumbnailUrl: string
  alt: string
  aspect: string
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('residential')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider')

  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const currentPhotos: PhotoItem[] = galleryData.photos[activeCategory] || []

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const onInit = useCallback(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onInit)
    emblaApi.on('init', onInit)

    const timer = setTimeout(() => {
      onInit()
    }, 0)

    return () => {
      clearTimeout(timer)
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onInit)
      emblaApi.off('init', onInit)
    }
  }, [emblaApi, onInit, onSelect])

  // Reset to first slide when category changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0)
    }
  }, [activeCategory, emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  // Lightbox navigation
  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const nextLightbox = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => ((prev ?? 0) + 1) % currentPhotos.length)
  }, [lightboxIndex, currentPhotos.length])

  const prevLightbox = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) =>
      (prev ?? 0) - 1 < 0 ? currentPhotos.length - 1 : (prev ?? 0) - 1
    )
  }, [lightboxIndex, currentPhotos.length])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextLightbox()
      if (e.key === 'ArrowLeft') prevLightbox()
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [lightboxIndex, nextLightbox, prevLightbox])

  const currentCategoryMeta = galleryData.categories.find(
    (c) => c.id === activeCategory
  )

  return (
    <section
      id="projects"
      className="py-24 md:py-36 bg-gradient-to-b from-[#0B1120] via-navy to-[#0B1120] relative overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <SectionHeading
          subtitle="Portfolio of Work"
          title="Our Completed Projects"
          description="A curated visual showcase of our structural craftsmanship, contemporary engineering, and architectural executions."
        />

        {/* Category Selector Tabs & View Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-5xl mx-auto">
          {/* Main Category Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-navy-800/80 backdrop-blur-xl border border-white/10 shadow-xl">
            <button
              onClick={() => setActiveCategory('residential')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 ${
                activeCategory === 'residential'
                  ? 'bg-gradient-to-r from-primary to-primary-600 text-white shadow-lg shadow-primary/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
              aria-label="View Residential Projects"
            >
              <Home size={18} />
              <span>Residential Projects</span>
              <span
                className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeCategory === 'residential'
                    ? 'bg-white/20 text-white'
                    : 'bg-navy-900 text-slate-400'
                }`}
              >
                {galleryData.photos.residential.length}
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('commercial')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 ${
                activeCategory === 'commercial'
                  ? 'bg-gradient-to-r from-primary to-primary-600 text-white shadow-lg shadow-primary/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
              aria-label="View Commercial Projects"
            >
              <Building2 size={18} />
              <span>Commercial Projects</span>
              <span
                className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeCategory === 'commercial'
                    ? 'bg-white/20 text-white'
                    : 'bg-navy-900 text-slate-400'
                }`}
              >
                {galleryData.photos.commercial.length}
              </span>
            </button>
          </div>

          {/* View Mode Toggle (Slider / Grid) */}
          <div className="flex items-center gap-2 bg-navy-800/60 backdrop-blur-md border border-white/10 p-1.5 rounded-xl">
            <button
              onClick={() => setViewMode('slider')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'slider'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Carousel Slider View"
              aria-label="Switch to slider view"
            >
              <SlidersHorizontal size={18} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Grid View"
              aria-label="Switch to grid view"
            >
              <Grid3X3 size={18} />
            </button>
          </div>
        </div>

        {/* Dynamic Category Tagline */}
        {currentCategoryMeta?.tagline && (
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-10 italic"
          >
            &ldquo;{currentCategoryMeta.tagline}&rdquo;
          </motion.p>
        )}

        {/* SLIDER VIEW MODE */}
        {viewMode === 'slider' ? (
          <div className="relative">
            {/* Embla Viewport */}
            <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
              <div className="flex -ml-4 md:-ml-6">
                {currentPhotos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className="flex-[0_0_100%] sm:flex-[0_0_85%] md:flex-[0_0_70%] lg:flex-[0_0_55%] min-w-0 pl-4 md:pl-6"
                  >
                    <div
                      onClick={() => openLightbox(index)}
                      className="group relative cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl bg-navy-800/80 border border-white/10 shadow-2xl transition-all duration-500 hover:border-primary/50 hover:shadow-primary/20 aspect-[16/10]"
                    >
                      <Image
                        src={photo.imageUrl}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 55vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        priority={index < 2}
                      />

                      {/* Subtle Vignette Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-black/20 opacity-40 group-hover:opacity-70 transition-opacity duration-300" />

                      {/* Hover Expand Icon Badge */}
                      <div className="absolute bottom-5 right-5 w-11 h-11 rounded-full bg-navy-900/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 shadow-xl">
                        <Maximize2 size={18} />
                      </div>

                      {/* Slide Index Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/80 text-xs font-mono font-medium tracking-wider">
                        {String(index + 1).padStart(2, '0')} / {String(currentPhotos.length).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center justify-between mt-8 max-w-5xl mx-auto px-2">
              {/* Previous Button */}
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full bg-navy-800/90 backdrop-blur-md border border-white/15 text-white flex items-center justify-center shadow-lg hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="Previous photograph"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Slide Indicator Dots */}
              <div className="flex items-center gap-2 overflow-x-auto max-w-[240px] sm:max-w-md py-2 px-3 no-scrollbar">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === selectedIndex
                        ? 'w-8 bg-primary shadow-md shadow-primary/50'
                        : 'w-2 bg-slate-600 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to photograph ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full bg-navy-800/90 backdrop-blur-md border border-white/15 text-white flex items-center justify-center shadow-lg hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="Next photograph"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        ) : (
          /* GRID VIEW MODE */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-navy-800/80 border border-white/10 shadow-xl transition-all duration-300 hover:border-primary/50 hover:shadow-2xl aspect-[4/3]"
              >
                <Image
                  src={photo.thumbnailUrl}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-navy-900/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Maximize2 size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Gallery Guidance Hint */}
        <p className="text-center text-slate-400 text-xs md:text-sm mt-8 flex items-center justify-center gap-2">
          <span>Swipe or click arrows to explore photographs • Click any image to view fullscreen</span>
        </p>
      </Container>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && currentPhotos[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Lightbox Top Bar */}
            <div
              className="flex items-center justify-between w-full max-w-7xl mx-auto z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-semibold uppercase tracking-wider">
                  {activeCategory === 'residential' ? 'Residential Work' : 'Commercial Work'}
                </span>
                <span className="text-white/60 text-sm font-mono">
                  {String(lightboxIndex + 1).padStart(2, '0')} / {String(currentPhotos.length).padStart(2, '0')}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
                aria-label="Close fullscreen lightbox"
              >
                <X size={22} />
              </button>
            </div>

            {/* Lightbox Main Image Area */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 max-w-6xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <button
                onClick={prevLightbox}
                className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-primary border border-white/20 text-white flex items-center justify-center z-20 transition-all hover:scale-110"
                aria-label="Previous photograph"
              >
                <ChevronLeft size={28} />
              </button>

              <div className="relative w-full h-[65vh] md:h-[75vh]">
                <Image
                  src={currentPhotos[lightboxIndex].imageUrl}
                  alt={currentPhotos[lightboxIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Next Button */}
              <button
                onClick={nextLightbox}
                className="absolute right-2 md:-right-14 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-primary border border-white/20 text-white flex items-center justify-center z-20 transition-all hover:scale-110"
                aria-label="Next photograph"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Lightbox Bottom Thumbnail Bar */}
            <div
              className="w-full max-w-4xl mx-auto flex items-center justify-center gap-2 overflow-x-auto py-2 z-10 no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {currentPhotos.map((photo, idx) => (
                <button
                  key={photo.id}
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                    idx === lightboxIndex
                      ? 'border-primary scale-105 shadow-lg shadow-primary/50'
                      : 'border-white/20 opacity-50 hover:opacity-100'
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <Image
                    src={photo.thumbnailUrl}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
