'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import testimonialsData from '@/data/testimonials.json'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-navy-900 to-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <Container>
        <SectionHeading
          subtitle="Client Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it - hear from our satisfied clients"
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipeThreshold = 50
                  if (offset.x > swipeThreshold || velocity.x > 300) {
                    prevTestimonial()
                  } else if (offset.x < -swipeThreshold || velocity.x < -300) {
                    nextTestimonial()
                  }
                }}
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full cursor-grab active:cursor-grabbing select-none touch-pan-y"
              >
                <div className="bg-navy-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="text-white" size={24} />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6 mt-4">
                    {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-200 text-lg md:text-xl leading-relaxed mb-8 italic font-normal">
                    &ldquo;{testimonialsData[currentIndex].text}&rdquo;
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-md">
                      {testimonialsData[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        {testimonialsData[currentIndex].name}
                      </h4>
                      <p className="text-slate-300 text-sm">
                        {testimonialsData[currentIndex].company}
                      </p>
                      <p className="text-primary text-xs font-semibold mt-0.5">
                        {testimonialsData[currentIndex].project}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-navy-800/90 border border-white/15 rounded-full shadow-xl flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-navy-800/90 border border-white/15 rounded-full shadow-xl flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary shadow-md shadow-primary/50'
                    : 'w-2 bg-slate-600 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>


        </div>
      </Container>
    </section>
  )
}
