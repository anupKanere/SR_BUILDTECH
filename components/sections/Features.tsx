'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  GraduationCap,
  Award,
  Shield,
  MessageSquare,
  Clock,
  DollarSign,
  Cpu,
  Smile,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import featuresData from '@/data/features.json'

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  graduation: GraduationCap,
  award: Award,
  shield: Shield,
  message: MessageSquare,
  clock: Clock,
  dollar: DollarSign,
  cpu: Cpu,
  smile: Smile,
}

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 md:py-32 bg-navy-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <Container>
        <SectionHeading
          subtitle="Why Choose Us"
          title="Excellence in Every Aspect"
          description="We combine expertise, quality, and dedication to deliver outstanding construction and engineering solutions"
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Award

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="h-full bg-navy-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-primary/50 hover:-translate-y-1.5 flex flex-col justify-between">
                  <div>
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300 shadow-md">
                      <Icon className="text-white" size={28} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Quality Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 bg-gradient-to-br from-navy-800/90 via-navy-900 to-[#0B1120] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/10"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white text-center mb-10 tracking-tight">
              Built To Last, Engineered With Integrity
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { label: 'ISO Certified', value: 'Quality Management' },
                { label: 'Safety Compliance', value: 'OSHA Standards' },
                { label: 'Engineering Standards', value: 'IS Codes Compliant' },
                { label: 'Green Building', value: 'Sustainable Practices' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-primary/15 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-primary/25">
                    <Shield className="text-primary" size={32} />
                  </div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-1">{item.label}</h4>
                  <p className="text-slate-300 text-xs md:text-sm">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
