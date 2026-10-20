'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Images, Sparkles, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import companyData from '@/data/company.json'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940')`,
          }}
        />
        {/* Layered cinematic overlays for maximum legibility while preserving background imagery */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/65" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      {/* Animated Blueprint Scanning Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-primary/60 shadow-[0_0_12px_rgba(255,107,0,0.8)]"
            initial={{ width: 0, left: `${i * 18}%` }}
            animate={{
              width: ['0%', '100%', '0%'],
              left: [`${i * 18}%`, `${(i * 18 + 50) % 100}%`, `${i * 18}%`],
            }}
            transition={{
              duration: 8,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ top: `${15 + i * 14}%` }}
          />
        ))}
      </div>

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Main Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs md:text-sm font-semibold tracking-wide uppercase backdrop-blur-md mb-6"
              >
                <Sparkles size={14} className="text-primary animate-pulse" />
                <span>Premium Construction & Engineering • Bangalore</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black text-white mb-6 leading-[1.08] tracking-tight"
              >
                BUILDING{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-500">
                  EXCELLENCE
                </span>
                ,<br />
                ENGINEERING THE{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-500">
                  FUTURE
                </span>
              </motion.h1>

              {/* Value Proposition */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
              >
                {companyData.description}. Specializing in turnkey residential estates, luxury villas, and high-performance commercial spaces.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="group bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold shadow-xl shadow-primary/30 px-8 py-4 text-base"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" size={18} />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('projects')}
                  className="bg-navy-900/60 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-navy px-8 py-4 text-base transition-all duration-300"
                >
                  <Images className="mr-2 text-primary" size={18} />
                  <span>View Project Gallery</span>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.8 }}
                className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-300"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>ISO 9001 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>Turnkey Project Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>10+ Years Craftsmanship</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Premium Glass Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-5"
          >
            {companyData.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.85 + index * 0.1, duration: 0.5 }}
                className="relative bg-navy-800/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center shadow-2xl hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 group overflow-hidden"
              >
                {/* Top Glowing Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:via-primary transition-all duration-300" />

                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-primary-100 to-primary mb-2 font-heading tracking-tight">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-slate-200 text-xs sm:text-sm font-medium tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">Scroll Down</span>
          <div className="w-5 h-9 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
