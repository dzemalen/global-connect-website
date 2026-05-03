'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
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

                  {/* Visual */}
                  <div className="hidden lg:flex items-center justify-center p-10 lg:p-16 relative">
                    <div className="relative">
                      {/* Map mockup for countrymen mode */}
                      <div className="w-80 h-80 rounded-3xl bg-white shadow-xl overflow-hidden border border-amber-100 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-orange-900">
                          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <pattern id="grid-amber" width="24" height="24" patternUnits="userSpaceOnUse">
                                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#FCD34D" strokeWidth="0.5" />
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-amber)" />
                          </svg>
                        </div>
                        {/* UK pins only */}
                        {[
                          { x: '25%', y: '30%' }, { x: '55%', y: '25%' },
                          { x: '70%', y: '50%' }, { x: '35%', y: '60%' },
                          { x: '60%', y: '72%' },
                        ].map((pos, i) => (
                          <div
                            key={i}
                            className="absolute w-8 h-8 rounded-full border-2 border-amber-400 bg-amber-500/80 flex items-center justify-center text-base shadow-lg"
                            style={{ left: pos.x, top: pos.y }}
                          >
                            🇬🇧
                          </div>
                        ))}
                        {/* Filter indicator */}
                        <div className="absolute top-3 left-3 right-3 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                          <span className="text-sm">🇬🇧</span>
                          <span className="text-xs font-semibold text-slate-800">Showing UK travelers (5)</span>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-amber-200/40 backdrop-blur-sm border border-amber-200 flex items-center justify-center text-3xl shadow-sm">
                        🇬🇧
                      </div>
                      <div className="absolute -bottom-4 -left-4 px-4 py-2.5 bg-white rounded-xl shadow-card border border-amber-100">
                        <p className="text-xs font-semibold text-slate-800">5 countrymen nearby</p>
                        <p className="text-[10px] text-slate-500">Bangkok, Thailand</p>
                      </div>
                    </div>
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

                  {/* Visual */}
                  <div className="hidden lg:flex items-center justify-center p-10 lg:p-16 relative">
                    <div className="relative">
                      <div className="w-80 h-80 rounded-3xl bg-white shadow-xl overflow-hidden border border-blue-100 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900">
                          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <pattern id="grid-blue" width="24" height="24" patternUnits="userSpaceOnUse">
                                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#60A5FA" strokeWidth="0.5" />
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-blue)" />
                          </svg>
                        </div>
                        {/* Multi-national pins */}
                        {[
                          { x: '15%', y: '20%', flag: '🇬🇧', color: '#3B82F6' },
                          { x: '45%', y: '15%', flag: '🇯🇵', color: '#8B5CF6' },
                          { x: '70%', y: '30%', flag: '🇩🇪', color: '#10B981' },
                          { x: '25%', y: '55%', flag: '🇲🇽', color: '#F59E0B' },
                          { x: '60%', y: '50%', flag: '🇹🇭', color: '#EF4444' },
                          { x: '40%', y: '70%', flag: '🇧🇷', color: '#06B6D4' },
                          { x: '75%', y: '68%', flag: '🇮🇳', color: '#EC4899' },
                        ].map((pin, i) => (
                          <div
                            key={i}
                            className="absolute w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-base shadow-lg"
                            style={{ left: pin.x, top: pin.y, backgroundColor: pin.color }}
                          >
                            {pin.flag}
                          </div>
                        ))}
                        <div className="absolute top-3 left-3 right-3 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                          <Globe className="w-3 h-3 text-blue-600" />
                          <span className="text-xs font-semibold text-slate-800">Showing everyone (24)</span>
                        </div>
                      </div>

                      <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-blue-200/40 backdrop-blur-sm border border-blue-200 flex items-center justify-center text-3xl shadow-sm">
                        🌍
                      </div>
                      <div className="absolute -bottom-4 -left-4 px-4 py-2.5 bg-white rounded-xl shadow-card border border-blue-100">
                        <p className="text-xs font-semibold text-slate-800">24 people nearby</p>
                        <p className="text-[10px] text-slate-500">18 nationalities</p>
                      </div>
                    </div>
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
