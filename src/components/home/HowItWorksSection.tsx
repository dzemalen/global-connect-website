import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { Download, MapPin, Users, Compass, Share2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Download & set up your profile',
    desc: 'Add your name, photo, nationality, and a bit about your travel style. Your profile is your introduction to the community — the more you share, the more you connect.',
    gradient: 'from-blue-600 to-blue-500',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Open the map in your city',
    desc: 'The app instantly shows who\'s around you. See travelers and locals represented as pins on a real-time interactive map. Every pin is a real person, right now.',
    gradient: 'from-sky-500 to-cyan-500',
  },
  {
    number: '03',
    icon: Users,
    title: 'Choose your mode',
    desc: 'Switch to Countrymen Mode to see people from your nationality, or Global Mode to discover everyone nearby. Change anytime — the map updates instantly.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    number: '04',
    icon: Compass,
    title: 'Explore, chat, discover',
    desc: 'Join the city chat, browse local tips, find events, or tap directly on a pin to connect one-on-one. Your city\'s community is already active — just jump in.',
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    number: '05',
    icon: Share2,
    title: 'Share your journey',
    desc: 'Post memories, write tips, review places, and build your travel identity. The more you contribute, the richer your experience — and the community\'s.',
    gradient: 'from-rose-500 to-pink-500',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="section-padding bg-slate-50" id="how-it-works">
      <div className="max-w-7xl mx-auto container-padding">
        <AnimatedSection>
          <SectionHeader
            badge="How It Works"
            title="From download to"
            titleHighlight="connected, in minutes."
            subtitle="Getting started takes less time than finding a good café. Here's how you go from zero to full community member."
          />
        </AnimatedSection>

        {/* Steps */}
        <div className="mt-16 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-sky-200 to-transparent" />

          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0

              return (
                <AnimatedSection key={step.number} delay={i * 0.1} className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                  {/* Left content (shown on even steps) or right content on odd */}
                  <div
                    className={`${
                      isEven ? 'lg:text-right lg:pr-16' : 'lg:order-2 lg:pl-16'
                    } mb-6 lg:mb-12`}
                  >
                    <div className={`flex items-start gap-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className={isEven ? 'lg:text-right' : ''}>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                          Step {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 font-jakarta mt-1 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed max-w-sm">{step.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center node (visible on desktop) */}
                  <div
                    className={`hidden lg:flex items-center justify-center ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg z-10 relative`}
                    >
                      <span className="text-white text-lg font-extrabold font-jakarta">{step.number}</span>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.5} className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white text-base font-semibold shadow-md hover:shadow-glow-blue hover:opacity-95 transition-all duration-200"
          >
            <Download className="w-5 h-5" />
            Get notified at launch
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
