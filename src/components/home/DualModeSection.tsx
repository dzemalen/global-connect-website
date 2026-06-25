'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import PhoneMockup from '@/components/ui/PhoneMockup'
import { Users, Globe, ChevronRight } from 'lucide-react'

type Mode = 'countrymen' | 'global'

export default function DualModeSection() {
  const [activeMode, setActiveMode] = useState<Mode>('countrymen')

  return (
    <section className="section-padding bg-white" id="modes">
      <div className="max-w-7xl mx-auto container-padding">
        <AnimatedSection>
          <SectionHeader
            badge="What makes it different"
            title="Two modes."
            titleHighlight="Your choice, always."
            subtitle="Switch between your own cultural community and the full global network — in one tap. No other travel app gives you this level of control."
          />
        </AnimatedSection>

        {/* Mode toggle */}
        <AnimatedSection delay={0.2} className="mt-10 flex justify-center">
          <div className="inline-flex items-center bg-slate-100 rounded-2xl p-1.5">
            <button
              onClick={() => setActiveMode('countrymen')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeMode === 'countrymen'
                  ? 'bg-white text-amber-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Users className="w-4 h-4" />
              Countrymen Mode
            </button>
            <button
              onClick={() => setActiveMode('global')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeMode === 'global'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Globe className="w-4 h-4" />
              Global Mode
            </button>
          </div>
        </AnimatedSection>

        {/* Mode cards */}
        <AnimatePresence mode="wait">
          {activeMode === 'countrymen' ? (
            <motion.div
              key="countrymen"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mt-10"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 border border-amber-100">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-10 lg:p-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-bold mb-6">
                      <Users className="w-4 h-4" />
                      Countrymen Mode
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-jakarta mb-5 leading-tight">
                      Find your people,<br />
                      wherever you are.
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                      When you&apos;re abroad and craving something familiar — a chat in your language, a friend who gets your culture, a familiar face in an unfamiliar place.
                    </p>
                    <ul className="space-y-4 mb-8">
                      {[
                        'See only people from your nationality on the map',
                        'Chat in your native language instantly',
                        'Get tips from people who share your background',
                        'Build community with fellow countrymen abroad',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ChevronRight className="w-3 h-3 text-amber-700" />
                          </div>
                          <span className="text-sm text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {['🇬🇧 UK expats', '🇩🇪 Germans abroad', '🇯🇵 Japanese travelers', '🇧🇷 Brazilians', '🇮🇳 Indian expats'].map((tag) => (
                        <span key={tag} className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-slate-700 shadow-sm border border-amber-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual: real app screenshot (shows the Countrymen / Global toggle) */}
                  <div className="hidden lg:flex items-center justify-center p-10 lg:p-16 relative">
                    <PhoneMockup
                      image="/app/screens/nearby-travelers.png"
                      alt="Global Connect — Countrymen mode showing nearby travelers"
                      size="md"
                      className="animate-float"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="global"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mt-10"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 border border-blue-100">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-10 lg:p-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                      <Globe className="w-4 h-4" />
                      Global Mode
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-jakarta mb-5 leading-tight">
                      Discover everyone<br />
                      around you.
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                      When you&apos;re ready to go deeper — meet locals, connect with travelers from around the world, and discover perspectives you&apos;d never find otherwise.
                    </p>
                    <ul className="space-y-4 mb-8">
                      {[
                        'See every traveler and local on your map',
                        'Connect with people from any country',
                        'Experience true cultural exchange',
                        'Build a truly global travel community',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ChevronRight className="w-3 h-3 text-blue-700" />
                          </div>
                          <span className="text-sm text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {['🌍 All nationalities', '🤝 Meet locals', '✈️ Global travelers', '🏙️ City residents', '🎒 Backpackers'].map((tag) => (
                        <span key={tag} className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-slate-700 shadow-sm border border-blue-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual: real app screenshot (one tap switches Countrymen / Global) */}
                  <div className="hidden lg:flex items-center justify-center p-10 lg:p-16 relative">
                    <PhoneMockup
                      image="/app/screens/nearby-travelers.png"
                      alt="Global Connect — switch between Countrymen and Global modes"
                      size="md"
                      className="animate-float"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatedSection delay={0.3} className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Switch between modes at any time with a single tap — the map updates instantly.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
