'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Smartphone } from 'lucide-react'
import PhoneMockup from '@/components/ui/PhoneMockup'
import Link from 'next/link'

const floatingCards = [
  { flag: '🇬🇧', name: 'Sarah', status: 'Online now', delay: 0.65, pos: 'top-10 -left-14' },
  { flag: '🇩🇪', name: 'Jonas', status: 'Just joined', delay: 0.9, pos: 'top-36 -right-14' },
  { flag: '🇲🇽', name: 'Carlos', status: 'Sharing tips', delay: 1.1, pos: 'bottom-28 -left-12' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-40 w-[720px] h-[720px] bg-gradient-to-br from-blue-50 to-sky-100 rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-28 -left-28 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-50 to-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-gradient-to-b from-transparent via-sky-50/30 to-transparent blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.032]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#1577B8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8"
            >
              <Smartphone className="w-4 h-4" />
              Coming to iOS &amp; Android
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-jakarta font-extrabold text-slate-900 leading-[1.06] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.75rem)' }}
            >
              Find your people,<br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 bg-clip-text text-transparent">
                anywhere on Earth.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-xl text-slate-500 leading-relaxed mb-9 max-w-[440px]"
            >
              Global Connect puts a live community on every map — travelers who share your roots, locals who know the streets, and a city chat that never sleeps.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold text-sm shadow-md hover:opacity-95 transition-opacity"
              >
                Get notified at launch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors group"
              >
                See how it works
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap items-center gap-5 text-xs text-slate-500"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span><span className="font-semibold text-slate-700">Free</span> to download &amp; use</span>
              </span>
              <span className="hidden sm:block h-4 w-px bg-slate-200" />
              <span>iOS &amp; Android</span>
              <span className="hidden sm:block h-4 w-px bg-slate-200" />
              <span>Countrymen &amp; Global mode</span>
            </motion.div>
          </div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative animate-float">
              <PhoneMockup screen="map" image="/app/screens/nearby-travelers.png" alt="Global Connect — nearby travelers on the map" size="lg" className="phone-glow" />

              {floatingCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: card.delay, duration: 0.5, ease: 'easeOut' }}
                  className={`absolute hidden sm:flex items-center gap-2.5 px-3.5 py-2.5 bg-white rounded-2xl shadow-card-xl border border-slate-100 ${card.pos}`}
                >
                  <span className="text-xl">{card.flag}</span>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">{card.name}</p>
                    <p className="text-[10px] text-emerald-600 font-medium">{card.status}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, ease: 'easeOut' }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 bg-white rounded-full shadow-card-xl border border-slate-100 whitespace-nowrap"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-slate-800">Global Mode active</span>
                <span className="text-base">🌍</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-slate-300" />
        <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
      </motion.div>
    </section>
  )
}
