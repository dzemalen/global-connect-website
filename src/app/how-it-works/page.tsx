import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import AppStoreButtons from '@/components/ui/AppStoreButtons'
import { Download, MapPin, Users, Compass, Share2, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How It Works — Global Connect',
  description:
    'Learn how Global Connect works. Download, set up your profile, discover people on the map, choose your mode, and start connecting in minutes.',
}

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Download and create your profile',
    tagline: 'Your identity in the community.',
    desc: 'Download Global Connect from the App Store or Google Play. Create your profile in under two minutes — add your name, photo, nationality, and a brief bio. Your profile is how the community gets to know you.',
    tips: [
      'Add a clear profile photo — it builds trust',
      'Write a short bio mentioning where you\'re from and where you\'re headed',
      'Your nationality determines what you see in Countrymen Mode',
    ],
    gradient: 'from-blue-600 to-blue-500',
    bg: 'bg-blue-50',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Open the map in your city',
    tagline: 'See who\'s around you, right now.',
    desc: 'The app uses your location to instantly show travelers and locals around you on an interactive real-time map. Every pin is a real person who is active in your area right now.',
    tips: [
      'The map refreshes automatically as people arrive and leave',
      'Tap any pin to preview a profile',
      'Adjust your visibility radius in settings',
    ],
    gradient: 'from-sky-500 to-cyan-500',
    bg: 'bg-sky-50',
  },
  {
    number: '03',
    icon: Users,
    title: 'Choose your mode',
    tagline: 'Your community, your choice.',
    desc: 'Switch between two modes at any time. Countrymen Mode shows only people from your own nationality — perfect when you want familiarity. Global Mode opens the map to everyone nearby.',
    tips: [
      'Countrymen Mode is great when you first arrive',
      'Global Mode helps you meet locals and diverse travelers',
      'The map updates instantly when you switch modes',
    ],
    gradient: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50',
  },
  {
    number: '04',
    icon: Compass,
    title: 'Explore, connect, and discover',
    tagline: 'The city is alive — join it.',
    desc: 'Join the city chat to see what\'s happening. Browse local tips and hidden gems. Discover events nearby. Or tap directly on any map pin to start a private conversation.',
    tips: [
      'City chat is a great first step — just say hi',
      'Browse tips by category to find what you\'re looking for',
      'RSVP to events to meet people with shared interests',
    ],
    gradient: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-50',
  },
  {
    number: '05',
    icon: Share2,
    title: 'Share your journey',
    tagline: 'Give back to the community.',
    desc: 'Post memories, share tips from places you visit, write reviews, and build your travel identity. The more you contribute, the richer your profile and reputation become.',
    tips: [
      'Post a tip right after visiting a great spot',
      'Mark countries on your travel map as you explore',
      'Your tips help future travelers — be specific and genuine',
    ],
    gradient: 'from-rose-500 to-pink-500',
    bg: 'bg-rose-50',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              How It Works
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 font-jakarta tracking-tight leading-tight mb-6">
              From download to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                connected
              </span>{' '}
              in minutes.
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Global Connect is designed to be fast. Here&apos;s everything you need to know to go from stranger in a new city to part of the community.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <AnimatedSection key={step.number} delay={i * 0.05}>
                  <div className="flex flex-col sm:flex-row gap-8">
                    {/* Step number + icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Step {step.number}</span>
                      </div>
                      <h2 className="text-2xl font-extrabold text-slate-900 font-jakarta mb-1">{step.title}</h2>
                      <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                        {step.tagline}
                      </p>
                      <p className="text-slate-600 leading-relaxed mb-6">{step.desc}</p>
                      <div className={`rounded-2xl ${step.bg} p-5 border border-slate-100`}>
                        <p className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-3">Tips</p>
                        <ul className="space-y-2.5">
                          {step.tips.map((tip) => (
                            <li key={tip} className="flex items-start gap-2.5">
                              <CheckCircle className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-700">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="ml-8 w-px h-12 bg-gradient-to-b from-slate-200 to-transparent mt-6" />
                  )}
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-sky-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-extrabold text-white font-jakarta mb-5">
              Your city is waiting.
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Five minutes from now, you could be connected to travelers and locals in your city.
            </p>
            <AppStoreButtons className="justify-center" />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
