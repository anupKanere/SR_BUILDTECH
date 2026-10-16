'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Building,
  Pencil,
  Calculator,
  BarChart,
  Square,
  Trees,
  Shield,
  Home,
  Clipboard,
  Wrench,
  Home as House,
  Building as Building2,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import servicesData from '@/data/services.json'

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  building: Building,
  drafting: Pencil,
  calculator: Calculator,
  analytics: BarChart,
  wall: Square,
  tree: Trees,
  shield: Shield,
  home: Home,
  clipboard: Clipboard,
  wrench: Wrench,
  house: House,
  building2: Building2,
}

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  return (
    <section id="services" className="py-20 md:py-32 bg-navy relative overflow-hidden">
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
            const Icon = iconMap[service.icon] || Building

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group"
              >
                <div className="h-full bg-navy-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-primary/50 hover:-translate-y-1.5 flex flex-col justify-between">
                  <div>
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300 shadow-md">
                        <Icon className="text-white" size={28} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
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
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
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
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl font-heading font-bold text-white mb-4">
              Don&apos;t See What You Need?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              We offer customized solutions for unique construction and engineering challenges.
              Let&apos;s discuss your project requirements.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-navy-50 transition-all hover:scale-105 shadow-lg"
            >
              Request Custom Solution
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
