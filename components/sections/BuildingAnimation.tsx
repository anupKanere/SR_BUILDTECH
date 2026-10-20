'use client'

import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, Hammer, Building2, Sparkles, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const stages = [
  {
    id: 'blueprint',
    title: 'Architectural Blueprint & Planning',
    icon: FileText,
    description: 'Detailed structural modeling, 3D visualization, municipal sanctions, and rigorous material estimation to align with your design vision and budget.',
    color: 'from-blue-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'foundation',
    title: 'Precision Foundation & Earthwork',
    icon: Hammer,
    description: 'Soil testing, structural excavation, anti-termite treatment, and deep reinforced concrete foundations engineered for maximum seismic and load stability.',
    color: 'from-amber-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'structure',
    title: 'Superstructure & Engineering',
    icon: Building2,
    description: 'High-grade TMT steel, precision formwork, high-strength concrete framing, masonry, and integrated MEP (mechanical, electrical, plumbing) conduits.',
    color: 'from-primary to-primary-600',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'finishing',
    title: 'Finishing & Turnkey Handover',
    icon: Sparkles,
    description: 'Architectural glazing, bespoke woodwork, premium flooring, waterproofing, aesthetic exterior cladding, and systematic quality inspection for flawless handover.',
    color: 'from-emerald-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
  },
]

export function BuildingAnimation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const sectionRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-[#0B1120] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-orange-400 to-primary origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Container>
        <SectionHeading
          subtitle="Our Execution Methodology"
          title="From Vision to Reality"
          description="Every great landmark begins with a vision. Discover our methodical 4-stage engineering and construction journey."
        />

        {/* Timeline */}
        <div ref={ref} className="relative max-w-5xl mx-auto mt-8 sm:mt-10">
          {/* Center Line on Desktop */}
          <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-white/10 -translate-x-1/2 hidden lg:block" />

          <div className="space-y-10 sm:space-y-12 lg:space-y-16">
            {stages.map((stage, index) => {
              const Icon = stage.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.7 }}
                  className={`relative grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Text Details */}
                  <div
                    className={`${
                      isEven ? 'lg:text-right lg:pr-8' : 'lg:col-start-2 lg:pl-8'
                    }`}
                  >
                    <div className="inline-block">
                      <div
                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${stage.color} rounded-full px-4 py-1.5 mb-4 shadow-lg`}
                      >
                        <Icon className="text-white" size={16} />
                        <span className="text-white font-bold text-xs uppercase tracking-wider">
                          Phase 0{index + 1}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
                      {stage.title}
                    </h3>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4 font-normal">
                      {stage.description}
                    </p>
                  </div>

                  {/* Visual Image */}
                  <div
                    className={`${
                      isEven ? 'lg:col-start-2 lg:pl-8' : 'lg:col-start-1 lg:pr-8'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
                    >
                      {/* Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-108"
                        style={{ backgroundImage: `url(${stage.image})` }}
                      />

                      {/* Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/40 to-transparent" />

                      {/* Step Badge */}
                      <div className="absolute top-4 right-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${stage.color} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="text-white" size={24} />
                        </div>
                      </div>

                      {/* Watermark Number */}
                      <div className="absolute bottom-3 left-5">
                        <div className="text-5xl font-black text-white/20 font-mono">
                          0{index + 1}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Desktop Center Timeline Dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-primary rounded-full border-4 border-navy-900 shadow-md hidden lg:block z-10" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-10 sm:mt-12 max-w-3xl mx-auto p-6 sm:p-8 md:p-10 rounded-3xl bg-navy-800/80 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-2 sm:mb-3">
            Ready to Build Your Vision?
          </h3>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto mb-6">
            Partner with Bengaluru&apos;s reliable construction engineers. From structural plans to turnkey delivery, we ensure seamless execution.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-xl shadow-primary/30 transition-all hover:scale-105"
          >
            <span>Discuss Your Project</span>
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </Container>
    </section>
  )
}
