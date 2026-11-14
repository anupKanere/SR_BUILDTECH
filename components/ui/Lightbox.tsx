'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export interface LightboxImage {
  src: string
  alt: string
  title?: string
  locality?: string
  category?: string
}

interface LightboxProps {
  images: LightboxImage[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (newIndex: number) => void
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length)
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length)
      }
    }

    // Lock body scroll
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, currentIndex, images.length, onClose, onNavigate])

  if (!isOpen || images.length === 0) return null

  const current = images[currentIndex]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-forest-900/95 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Top Bar with Counter & Close */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 z-20 text-sand"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-sand-300 font-medium">
          <span className="text-brass-300 font-mono">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span className="opacity-40">/</span>
          <span className="font-mono">{String(images.length).padStart(2, '0')}</span>
          {current.locality && (
            <span className="hidden sm:inline-block ml-3 pl-3 border-l border-sand-400/30 text-sand-200">
              {current.locality}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="p-2 text-sand-300 hover:text-sand hover:bg-forest-800 transition-colors rounded-sm"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev / Next Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate((currentIndex - 1 + images.length) % images.length)
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 text-sand-300 hover:text-sand bg-forest-800/80 hover:bg-forest-700 backdrop-blur-sm transition-all rounded-sm border border-sand-400/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNavigate((currentIndex + 1) % images.length)
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 text-sand-300 hover:text-sand bg-forest-800/80 hover:bg-forest-700 backdrop-blur-sm transition-all rounded-sm border border-sand-400/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Main Image Stage */}
      <div
        className="relative max-w-5xl w-full h-[75vh] mx-4 sm:mx-12 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            src={current.src}
            alt={current.alt || 'SR BUILDTEC project photograph'}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-contain"
            priority
          />
        </div>

        {/* Caption Bar */}
        {(current.title || current.alt) && (
          <div className="w-full mt-4 text-center">
            {current.title && (
              <p className="text-sand text-sm font-medium font-serif tracking-wide">
                {current.title}
              </p>
            )}
            <p className="text-sand-300/80 text-xs mt-1 max-w-2xl mx-auto line-clamp-2">
              {current.alt}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

