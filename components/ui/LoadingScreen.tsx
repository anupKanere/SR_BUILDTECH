'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const pillarHeights = [75, 120, 95, 135, 80]

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 300)
          return 100
        }
        return prev + 4
      })
    }, 18)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1120]"
        >
          {/* Logo Animation */}
          <div className="relative mb-6">
            <div className="w-24 h-24 bg-white rounded-2xl p-2 shadow-2xl flex items-center justify-center">
              <Image
                src="/logo.jpeg"
                alt="SR BUILDTEC"
                width={80}
                height={80}
                className="rounded-xl object-contain"
                priority
              />
            </div>
            <motion.div
              className="absolute -inset-1 border-2 border-primary/50 rounded-3xl"
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.8, 0.3, 0.8],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Company Name */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-heading font-black text-white mb-2 tracking-wide"
          >
            SR BUILDTEC
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary text-xs md:text-sm font-semibold tracking-widest uppercase mb-6"
          >
            Building Excellence, Engineering The Future
          </motion.p>

          {/* Progress Bar */}
          <div className="w-56 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-orange-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>

          {/* Progress Percentage */}
          <p className="mt-3 text-slate-400 text-xs font-mono">
            {progress}%
          </p>

          {/* Building Construction Animation - deterministic heights for hydration stability */}
          <div className="absolute bottom-0 left-0 right-0 h-28 flex items-end justify-center gap-3 px-4 pb-6 opacity-30 pointer-events-none">
            {pillarHeights.map((targetHeight, i) => (
              <motion.div
                key={i}
                className="w-10 bg-primary/40 rounded-t-lg"
                initial={{ height: 10 }}
                animate={{ height: [`${targetHeight * 0.4}px`, `${targetHeight}px`, `${targetHeight * 0.4}px`] }}
                transition={{
                  duration: 1.6,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
