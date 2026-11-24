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
  HardHat,
  Palette,
  Layers,
  Grid3X3,
  SlidersHorizontal,
  Sparkles,
  Building2,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import galleryData from '@/data/gallery.json'

type CategoryKey = 'all' | 'completed' | 'commercial' | 'ongoing' | 'interiors'

interface PhotoItem {
  id: string
  file: string
  imageUrl: string
  thumbnailUrl: string
  title: string
  alt: string
  tag: string
  category: string
  aspect: string
}

const CATEGORY_ICONS: Record<CategoryKey, React.ComponentType<{ size?: number; className?: string }>> = {
  all: Layers,
  completed: Home,
  commercial: Building2,
  ongoing: HardHat,
  interiors: Palette,
}

export function Projects() {
  const [gallery, setGallery] = useState(galleryData)
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider')
  const [gridVisibleCount, setGridVisibleCount] = useState<number>(16)

  // Dynamically sync any newly dropped images from /api/gallery
  useEffect(() => {
    fetch('/api/gallery')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.photos) {
          setGallery(data)
        }
      })
      .catch(() => {
        // Fall back seamlessly to static data
      })
  }, [])

  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const currentPhotos: PhotoItem[] = (gallery.photos as Record<string, PhotoItem[]>)[activeCategory] || []

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

  const visibleGridPhotos = currentPhotos.slice(0, gridVisibleCount)

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#0B1120] via-navy to-[#0B1120] relative overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <Container>
        {/* Section Heading */}
        <SectionHeading
          subtitle="Portfolio Showcase"
          title="Project Showcase"
          description="A curated look into our turnkey handovers, commercial complexes, ongoing projects, and bespoke architectural interiors."
        />

        {/* Category Selector Tabs & View Switcher */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6 sm:mb-8 max-w-6xl mx-auto">
          {/* Main Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-navy-800/80 backdrop-blur-xl border border-white/10 shadow-xl">
            {gallery.categories.map((cat) => {
              const IconComponent = CATEGORY_ICONS[cat.id as CategoryKey] || Sparkles
              const isSelected = activeCategory === cat.id

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id as CategoryKey)
                    setGridVisibleCount(16)
                  }}
                  className={`flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-r from-primary to-primary-600 text-white shadow-lg shadow-primary/30 scale-100'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                  aria-label={`View ${cat.label}`}
                >
                  <IconComponent size={16} />
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>

          {/* View Mode Toggle (Slider / Grid) */}
          <div className="flex items-center gap-2 bg-navy-800/60 backdrop-blur-md border border-white/10 p-1.5 rounded-xl">
            <button
              onClick={() => setViewMode('slider')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'slider'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Carousel Slider View"
              aria-label="Switch to slider view"
            >
              <SlidersHorizontal size={16} />
              <span className="hidden sm:inline">Showcase</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Grid View"
              aria-label="Switch to grid view"
            >
              <Grid3X3 size={16} />
              <span className="hidden sm:inline">All Photos Grid</span>
            </button>
          </div>
        </div>

        {/* SLIDER VIEW MODE */}
        {viewMode === 'slider' ? (
          <div className="relative max-w-5xl mx-auto">
            {/* Embla Viewport */}
            <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {currentPhotos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className="flex-[0_0_100%] min-w-0"
                  >
                    <div
                      onClick={() => openLightbox(index)}
                      className="group relative cursor-pointer overflow-hidden rounded-2xl md:rounded-3xl bg-navy-800/80 border border-white/10 shadow-2xl transition-all duration-500 hover:border-primary/50 hover:shadow-primary/20 aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]"
                    >
                      <Image
                        src={photo.imageUrl}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1100px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        priority={index < 2}
                      />

                      {/* Subtle hover expand indicator */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                          <Maximize2 size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Navigation Overlays (visible on sm and larger) */}
            <button
              onClick={scrollPrev}
              className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-navy-950/75 hover:bg-primary backdrop-blur-md border border-white/20 text-white items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Previous photograph"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={scrollNext}
              className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-navy-950/75 hover:bg-primary backdrop-blur-md border border-white/20 text-white items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200"
              aria-label="Next photograph"
            >
              <ChevronRight size={22} />
            </button>

            {/* Slider Navigation Controls */}
            <div className="flex items-center justify-between mt-6 sm:mt-8 max-w-5xl mx-auto px-2">
              {/* Previous Button */}
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full bg-navy-800/90 backdrop-blur-md border border-white/15 text-white flex items-center justify-center shadow-lg hover:bg-primary hover:border-primary hover:scale-110 active:scale-95 transition-all duration-200"
                aria-label="Previous photograph"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Slide Counter & Dots */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <span className="text-slate-400 text-xs font-mono font-medium tracking-wider">
                  {String(selectedIndex + 1).padStart(2, '0')} / {String(currentPhotos.length).padStart(2, '0')}
                </span>
                <div className="flex items-center gap-1.5 overflow-x-auto max-w-[200px] sm:max-w-md py-2 px-3 no-scrollbar">
                  {scrollSnaps.slice(0, 30).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollTo(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === selectedIndex
                          ? 'w-7 bg-primary shadow-md shadow-primary/50'
                          : 'w-2 bg-slate-600 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to photograph ${index + 1}`}
                    />
                  ))}
                  {scrollSnaps.length > 30 && (
                    <span className="text-slate-500 text-xs font-mono ml-1">+{scrollSnaps.length - 30}</span>
                  )}
                </div>
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
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {visibleGridPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.5) }}
                  onClick={() => openLightbox(index)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl bg-navy-800/80 border border-white/10 shadow-xl transition-all duration-300 hover:border-primary/50 hover:shadow-2xl aspect-[4/3]"
                >
                  <Image
                    src={photo.thumbnailUrl}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle expand icon on hover */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-200 shadow-lg">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Pagination */}
            {gridVisibleCount < currentPhotos.length && (
              <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setGridVisibleCount((prev) => Math.min(prev + 16, currentPhotos.length))}
                  className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-600 text-white font-semibold text-sm shadow-lg shadow-primary/25 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Load More Photos ({currentPhotos.length - gridVisibleCount} remaining)
                </button>
                <button
                  onClick={() => setGridVisibleCount(currentPhotos.length)}
                  className="px-6 py-3 rounded-xl bg-navy-800/80 hover:bg-navy-700/80 border border-white/15 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200"
                >
                  Show All {currentPhotos.length} Photos
                </button>
              </div>
            )}
          </div>
        )}

        {/* Gallery Guidance Hint */}
        <p className="text-center text-slate-400 text-xs md:text-sm mt-8 flex items-center justify-center gap-2">
          <span>Swipe or click arrows to explore photographs • Click any image to view in high resolution</span>
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
                <span className="text-white/80 text-sm font-mono bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full">
                  {String(lightboxIndex + 1).padStart(2, '0')} / {String(currentPhotos.length).padStart(2, '0')}
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors border border-white/15"
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
              className="w-full max-w-5xl mx-auto flex items-center justify-center gap-2 overflow-x-auto py-2 z-10 no-scrollbar"
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
