'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  DraftingCompass,
  Ruler,
  Calculator,
  Activity,
  Layers,
  Trees,
  Flame,
  Palette,
  ClipboardCheck,
  Hammer,
  Home,
  Building2,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import servicesData from '@/data/services.json'

interface ServiceTheme {
  Icon: LucideIcon
  badgeGradient: string
  cardHover: string
  titleHover: string
  bulletColor: string
}

const serviceThemeMap: Record<string, ServiceTheme> = {
  'structural-drawings': {
    Icon: DraftingCompass,
    badgeGradient: 'from-blue-600 via-blue-500 to-indigo-600 shadow-blue-500/30 ring-blue-400/30',
    cardHover: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
    titleHover: 'group-hover:text-blue-400',
    bulletColor: 'bg-blue-400',
  },
  'architectural-drawings': {
    Icon: Ruler,
    badgeGradient: 'from-violet-600 via-purple-500 to-fuchsia-600 shadow-violet-500/30 ring-violet-400/30',
    cardHover: 'hover:border-violet-500/50 hover:shadow-violet-500/10',
    titleHover: 'group-hover:text-violet-400',
    bulletColor: 'bg-violet-400',
  },
  'boq-preparation': {
    Icon: Calculator,
    badgeGradient: 'from-emerald-600 via-teal-500 to-cyan-600 shadow-emerald-500/30 ring-emerald-400/30',
    cardHover: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
    titleHover: 'group-hover:text-emerald-400',
    bulletColor: 'bg-emerald-400',
  },
  'structural-analysis': {
    Icon: Activity,
    badgeGradient: 'from-cyan-600 via-sky-500 to-blue-600 shadow-cyan-500/30 ring-cyan-400/30',
    cardHover: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
    titleHover: 'group-hover:text-cyan-400',
    bulletColor: 'bg-cyan-400',
  },
  'drywall-partitions': {
    Icon: Layers,
    badgeGradient: 'from-amber-500 via-orange-500 to-red-500 shadow-amber-500/30 ring-amber-400/30',
    cardHover: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
    titleHover: 'group-hover:text-amber-400',
    bulletColor: 'bg-amber-400',
  },
  'landscaping': {
    Icon: Trees,
    badgeGradient: 'from-green-600 via-emerald-500 to-teal-600 shadow-green-500/30 ring-green-400/30',
    cardHover: 'hover:border-green-500/50 hover:shadow-green-500/10',
    titleHover: 'group-hover:text-green-400',
    bulletColor: 'bg-green-400',
  },
  'fire-safety': {
    Icon: Flame,
    badgeGradient: 'from-red-600 via-rose-500 to-orange-500 shadow-red-500/30 ring-red-400/30',
    cardHover: 'hover:border-red-500/50 hover:shadow-red-500/10',
    titleHover: 'group-hover:text-red-400',
    bulletColor: 'bg-red-400',
  },
  'interior-planning': {
    Icon: Palette,
    badgeGradient: 'from-fuchsia-600 via-pink-500 to-rose-500 shadow-pink-500/30 ring-pink-400/30',
    cardHover: 'hover:border-pink-500/50 hover:shadow-pink-500/10',
    titleHover: 'group-hover:text-pink-400',
    bulletColor: 'bg-pink-400',
  },
  'project-management': {
    Icon: ClipboardCheck,
    badgeGradient: 'from-indigo-600 via-blue-600 to-sky-500 shadow-indigo-500/30 ring-indigo-400/30',
    cardHover: 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
    titleHover: 'group-hover:text-indigo-400',
    bulletColor: 'bg-indigo-400',
  },
  'metal-fabrication': {
    Icon: Hammer,
    badgeGradient: 'from-slate-600 via-zinc-600 to-neutral-700 shadow-slate-500/30 ring-slate-400/30',
    cardHover: 'hover:border-slate-400/50 hover:shadow-slate-500/10',
    titleHover: 'group-hover:text-slate-300',
    bulletColor: 'bg-slate-300',
  },
  'residential-construction': {
    Icon: Home,
    badgeGradient: 'from-primary via-orange-500 to-amber-500 shadow-primary/30 ring-orange-400/30',
    cardHover: 'hover:border-primary/50 hover:shadow-primary/10',
    titleHover: 'group-hover:text-primary',
    bulletColor: 'bg-primary',
  },
  'commercial-construction': {
    Icon: Building2,
    badgeGradient: 'from-blue-700 via-indigo-600 to-violet-600 shadow-blue-500/30 ring-blue-400/30',
    cardHover: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
    titleHover: 'group-hover:text-blue-400',
    bulletColor: 'bg-blue-400',
  },
}

const defaultTheme: ServiceTheme = {
  Icon: Building2,
  badgeGradient: 'from-primary to-primary-600 shadow-primary/30 ring-primary/30',
  cardHover: 'hover:border-primary/50 hover:shadow-primary/10',
  titleHover: 'group-hover:text-primary',
  bulletColor: 'bg-primary',
}

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <Container>
        <SectionHeading
          subtitle="Our Services"
          title="Comprehensive Construction & Engineering Solutions"
          description="From design to delivery, we offer complete construction and engineering services tailored to your needs"
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const theme = serviceThemeMap[service.id] || defaultTheme
            const Icon = theme.Icon

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group"
              >
                <div className={`h-full bg-navy-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 ${theme.cardHover} hover:-translate-y-1.5 flex flex-col justify-between`}>
                  <div>
                    {/* Colorful Brand Icon Badge */}
                    <div className="mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${theme.badgeGradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 shadow-lg ring-1`}>
                        <Icon className="text-white drop-shadow-sm" size={26} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg md:text-xl font-bold text-white mb-3 ${theme.titleHover} transition-colors`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 pt-3 border-t border-white/10">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-slate-300 flex items-center gap-2"
                      >
                        <div className={`w-1.5 h-1.5 ${theme.bulletColor} rounded-full flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary via-primary-600 to-amber-600 rounded-2xl py-7 px-6 sm:px-10 shadow-xl border border-white/15 relative overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
              Don&apos;t See What You Need?
            </h3>
            <p className="text-white/90 text-xs sm:text-sm mb-5 max-w-lg mx-auto leading-relaxed">
              We offer customized engineering and construction solutions for bespoke requirements. Let&apos;s discuss your project.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl text-sm font-bold hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl cursor-pointer group"
            >
              <span>Request Custom Solution</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
