'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Camera as InstagramIcon, ExternalLink } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import companyData from '@/data/company.json'

const instagramFeed = [
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    alt: 'Modern residential villa project update',
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    alt: 'Commercial glass facade construction',
  },
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    alt: 'Contemporary residence exterior completion',
  },
  {
    url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
    alt: 'Structural steel and engineering works',
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
    alt: 'Turnkey interior living space showcase',
  },
  {
    url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80',
    alt: 'Commercial plaza and corporate headquarters',
  },
]

export function Instagram() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#0B1120] to-navy">
      <Container>
        <SectionHeading
          subtitle="On-Site Highlights"
          title={
            <span className="inline-flex items-center justify-center gap-3">
              <InstagramIcon className="text-primary" size={36} />
              <span>Follow Our Construction Updates</span>
            </span>
          }
          description="Follow our journey on Instagram for exclusive project reveals, behind-the-scenes progress, and structural engineering insights."
        />

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {instagramFeed.map((item, index) => (
            <motion.a
              key={index}
              href={companyData.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-xl border border-white/10 hover:border-primary/50 transition-all cursor-pointer block"
            >
              <Image
                src={item.url}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-11 h-11 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                  <InstagramIcon size={20} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center"
        >
          <a
            href={companyData.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 text-white px-7 py-3.5 rounded-full font-semibold shadow-xl shadow-pink-500/20 hover:shadow-pink-500/30 transition-all hover:scale-105 text-sm"
          >
            <InstagramIcon size={18} />
            <span>Follow @srbuildtec</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
