import AnimatedSection from '@/components/ui/AnimatedSection'
import Link from 'next/link'
import { Store, Users, TrendingUp, ArrowRight } from 'lucide-react'

const partnerTypes = [
  { emoji: '🍽️', label: 'Restaurants & Cafés' },
  { emoji: '🏛️', label: 'Attractions & Museums' },
  { emoji: '🏨', label: 'Hostels & Hotels' },
  { emoji: '🛖', label: 'Local Venues' },
  { emoji: '🗺️', label: 'Tour Operators' },
  { emoji: '🛍️', label: 'Local Shops' },
]

export default function PartnerTeaserSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-600 to-blue-700 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <AnimatedSection direction="left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-semibold tracking-wide uppercase mb-6">
              For Businesses
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white font-jakarta leading-tight tracking-tight mb-6">
              Reach travelers who are{' '}
              <span className="text-sky-300">actively exploring.</span>
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Global Connect gives local businesses a direct line to engaged travelers in their city — people actively looking for new places to eat, drink, experience, and explore.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Store, label: 'Venue visibility', desc: 'Be found by travelers actively exploring' },
                { icon: Users, label: 'Targeted reach', desc: 'Reach expats, tourists, and digital nomads' },
                { icon: TrendingUp, label: 'Real engagement', desc: 'Drive foot traffic and bookings' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <Icon className="w-5 h-5 text-sky-300 mb-2.5" />
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs text-blue-200 mt-1">{item.desc}</p>
                  </div>
                )
              })}
            </div>

            <Link
              href="/for-partners"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-blue-700 font-semibold text-sm hover:bg-blue-50 transition-colors shadow-lg"
            >
              Learn about partnerships
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          {/* Partner types */}
          <AnimatedSection direction="right">
            <p className="text-blue-200 text-sm font-medium mb-5">Perfect for</p>
            <div className="grid grid-cols-2 gap-3">
              {partnerTypes.map((type) => (
                <div
                  key={type.label}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3.5 border border-white/10 hover:bg-white/15 transition-colors"
                >
                  <span className="text-2xl">{type.emoji}</span>
                  <span className="text-sm font-medium text-white">{type.label}</span>
                </div>
              ))}
            </div>

            {/* Honest value propositions replacing fake stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: 'Free', label: 'No cost for users — built-in audience' },
                { value: 'Local', label: 'Geo-targeted to your city or area' },
                { value: 'Tips', label: 'Appear in community tip recommendations' },
                { value: 'Reviews', label: 'Get discovered through traveler reviews' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-xl p-4 border border-white/10 text-center">
                  <p className="text-2xl font-extrabold text-white font-jakarta">{stat.value}</p>
                  <p className="text-xs text-blue-200 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
