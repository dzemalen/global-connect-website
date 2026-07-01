import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { MapPin, MessageSquare, Lightbulb, Camera, X, Check } from 'lucide-react'

const pillars = [
  {
    icon: MapPin,
    title: "See who's around you",
    desc: "A live map of travelers and locals. Every pin is a real person — tap to view their profile and connect instantly.",
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: MessageSquare,
    title: 'City chat, always live',
    desc: "Every city has a public room. Ask anything, share something, or just say hello to whoever's there right now.",
    color: 'from-sky-500 to-cyan-500',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
  },
  {
    icon: Lightbulb,
    title: 'Real tips. No filters.',
    desc: "Authentic recommendations from people who've actually been there — not sponsored lists or stale guidebooks.",
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: Camera,
    title: 'Your travel story',
    desc: 'Save trip memories with photos, track every country you’ve explored, and build your travel identity over time.',
    color: 'from-blue-500 to-sky-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
]

const before = [
  'Every new city feels like starting from zero',
  'Guidebook tips are generic and months out of date',
  'Meeting people is awkward and hit-or-miss',
  'Local recommendations are scattered across a dozen apps',
  'No one to explore with when you arrive',
]

const after = [
  "Arrive and see who's already there waiting",
  'Get real tips from people actually in the city today',
  'Connect through shared culture, language, or curiosity',
  'Local tips and communities surface automatically',
  'Always have someone to explore with',
]

export default function WhatIsSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto container-padding">
        <AnimatedSection>
          <SectionHeader
            badge="Why Global Connect"
            title="You were never meant"
            titleHighlight="to travel alone."
            subtitle="Most travel apps give you maps. Global Connect gives you people — your community, the whole world, or anything in between."
          />
        </AnimatedSection>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <AnimatedSection key={pillar.title} delay={i * 0.1}>
                <div className="card-base card-hover p-6 h-full group">
                  <div className={`w-11 h-11 rounded-2xl ${pillar.bg} border ${pillar.border} flex items-center justify-center mb-5`}>
                    <div className={`w-6 h-6 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center`}>
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-jakarta mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{pillar.desc}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Before / After */}
        <AnimatedSection delay={0.4} className="mt-14">
          <div className="rounded-3xl overflow-hidden shadow-card-xl grid lg:grid-cols-2">
            <div className="bg-slate-900 p-10 lg:p-14">
              <p className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.15em] mb-7">Without Global Connect</p>
              <ul className="space-y-4">
                {before.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-slate-500" />
                    </div>
                    <span className="text-sm text-slate-400 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-sky-500 p-10 lg:p-14">
              <p className="text-[11px] font-bold text-blue-200 uppercase tracking-[0.15em] mb-7">With Global Connect</p>
              <ul className="space-y-4">
                {after.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-white font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
