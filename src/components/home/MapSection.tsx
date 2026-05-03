import AnimatedSection from '@/components/ui/AnimatedSection'
import PhoneMockup from '@/components/ui/PhoneMockup'
import { MapPin, Users, Zap } from 'lucide-react'

export default function MapSection() {
  return (
    <section className="section-padding bg-slate-900 overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#60A5FA" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockup */}
          <AnimatedSection direction="left" className="flex justify-center lg:justify-start">
            <div className="relative animate-float-delayed">
              <PhoneMockup screen="map" size="lg" />

              {/* Floating stat cards */}
              <div className="absolute -right-8 top-16 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <div>
                    <p className="text-xs font-semibold text-white">24 people nearby</p>
                    <p className="text-[10px] text-white/50">Bangkok, Thailand</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 bottom-20 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">🌍</span>
                  <div>
                    <p className="text-xs font-semibold text-white">12 nationalities</p>
                    <p className="text-[10px] text-white/50">within 2km</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/20 text-sky-300 text-xs font-semibold tracking-wide uppercase mb-6">
              Map Discovery
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white font-jakarta leading-tight tracking-tight mb-6">
              See who&apos;s around you,{' '}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                right now.
              </span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-10">
              Open the map and instantly see travelers and locals nearby. Every pin is a real person. Tap to see their profile, where they&apos;re from, and what they&apos;re up to — then start a conversation.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  title: 'Real-time positioning',
                  desc: 'The map updates live — see new arrivals appear and connect with them before anyone else.',
                },
                {
                  icon: Users,
                  title: 'Filter by mode',
                  desc: 'Switch between Countrymen Mode (your nationality) and Global Mode (everyone) in one tap.',
                },
                {
                  icon: Zap,
                  title: 'Instant connection',
                  desc: 'Tap a pin, view their profile, and send a message. From stranger to conversation in seconds.',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
