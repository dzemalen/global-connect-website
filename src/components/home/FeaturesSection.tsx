import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { MapPin, MessageSquare, MessageCircle, Lightbulb, Calendar, Camera, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: MapPin,
    title: 'Live Map Discovery',
    desc: 'See travelers and locals on a real-time interactive map. Every pin is a real person — tap to view their profile and connect in seconds.',
    gradient: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: MessageSquare,
    title: 'City Chat Rooms',
    desc: "Every city has a live public chat. Jump in, ask questions, share tips, and meet whoever's there right now.",
    gradient: 'from-sky-500 to-cyan-500',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
  },
  {
    icon: MessageCircle,
    title: 'Private & Group Chat',
    desc: 'Message anyone directly or create group conversations. Stay connected on your terms — privately or with a crew.',
    gradient: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    icon: Lightbulb,
    title: 'Tips & Hidden Gems',
    desc: "Get authentic local recommendations from real travelers — restaurants, shortcuts, and secrets no guidebook has.",
    gradient: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: Calendar,
    title: 'Events Nearby',
    desc: "Discover local meetups and experiences happening around you. Never miss what's going on in your city.",
    gradient: 'from-blue-500 to-sky-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: Camera,
    title: 'Travel Memories',
    desc: 'Share posts and stories from your journey. Build your personal travel identity and inspire the community.',
    gradient: 'from-sky-400 to-cyan-500',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
  },
]

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-slate-50" id="features">
      <div className="max-w-7xl mx-auto container-padding">
        <AnimatedSection>
          <SectionHeader
            badge="Everything you need"
            title="One app."
            titleHighlight="Every connection."
            subtitle="Global Connect brings together all the tools a modern traveler needs — people, tips, events, and community — in one seamless experience."
          />
        </AnimatedSection>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <AnimatedSection key={feature.title} delay={i * 0.08}>
                <div className="card-base card-hover p-7 h-full flex flex-col group">
                  <div className={`w-12 h-12 rounded-2xl ${feature.bg} border ${feature.border} flex items-center justify-center mb-5`}>
                    <div className={`w-7 h-7 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-sm`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-jakarta mb-2.5 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{feature.desc}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection delay={0.5} className="mt-10 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group"
          >
            Explore all features
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
