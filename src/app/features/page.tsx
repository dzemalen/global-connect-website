import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import PhoneMockup from '@/components/ui/PhoneMockup'
import AppStoreButtons from '@/components/ui/AppStoreButtons'
import Link from 'next/link'
import {
  MapPin, MessageSquare, MessageCircle, Lightbulb, Calendar, Camera,
  Globe, Users, Bell, Map, ArrowRight, Shield,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Features — Everything Global Connect Offers',
  description:
    'Explore all Global Connect features: map-based discovery, city chat, Countrymen and Global modes, local tips, events, travel memories, profiles, and more.',
}

const tier1Features = [
  {
    icon: MapPin,
    title: 'Map-Based Discovery',
    desc: 'See travelers and locals on a real-time interactive map. Every pin represents a real person nearby — tap any pin to view their profile, nationality, and bio, then start a conversation.',
    screens: ['map'],
    image: '/app/screens/nearby-travelers.png',
    gradient: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    details: [
      'Live pin updates as users move',
      'Configurable visibility radius',
      'Profile preview on tap',
      'One-tap to start a conversation',
      'Filter by Countrymen or Global mode',
    ],
  },
  {
    icon: Globe,
    title: 'Countrymen & Global Modes',
    desc: 'The defining feature of Global Connect. Switch between seeing only people from your own nationality (Countrymen Mode) or everyone around you (Global Mode) with a single tap.',
    image: '/app/screens/nearby-travelers.png',
    gradient: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50',
    details: [
      'Instant mode switching',
      'Map updates in real time',
      'Countrymen Mode: your nationality only',
      'Global Mode: all nationalities',
      'City chat filters by mode too',
    ],
  },
  {
    icon: MessageSquare,
    title: 'City Chat',
    desc: 'Every city has a live, public group chat. Join the conversation wherever you are — ask questions, share tips, meet people, and feel immediately connected to your location.',
    screens: ['chat'],
    gradient: 'from-sky-500 to-cyan-500',
    bg: 'bg-sky-50',
    details: [
      'Public city-wide chat rooms',
      'Automatically joined based on your location',
      'Real-time message delivery',
      'Filters by Countrymen or Global mode',
      'Rich media support',
    ],
  },
  {
    icon: MessageCircle,
    title: 'Private & Group Chat',
    desc: 'Message anyone you meet directly or create private group conversations. Plan a day trip, a restaurant visit, or just stay in touch with travelers you\'ve connected with.',
    gradient: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50',
    details: [
      'One-on-one private messaging',
      'Create group conversations',
      'Photo and video sharing in chat',
      'Message request system for privacy',
      'Chat settings and user controls',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Tips & Hidden Gems',
    desc: 'A community-curated guide to every city. Get recommendations for restaurants, hidden spots, nightlife, cultural spots, and more — from people who were actually just there.',
    screens: ['tips'],
    gradient: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50',
    details: [
      'Multiple tip categories (restaurants, nightlife, sightseeing, and more)',
      'Community like and dislike voting',
      'Share your own tips',
      'Filter tips to countrymen only',
      'Geo-tagged tip locations',
    ],
  },
  {
    icon: Calendar,
    title: 'Events Discovery',
    desc: 'Discover curated local events and festivals happening around you, plus community-posted local meetups. Never miss what\'s on in your city.',
    screens: ['events'],
    gradient: 'from-blue-500 to-sky-600',
    bg: 'bg-blue-50',
    details: [
      'Admin-curated festivals and events',
      'Community-created local events',
      'Filter by event type',
      'Event details: venue, date, time, ticket link',
      'Notifications for new tips and events',
    ],
  },
]

const tier2Features = [
  {
    icon: Camera,
    title: 'Travel Memories',
    desc: 'Create named trip memories with photos, trip stops across multiple countries, and privacy controls. Like and comment on others\' memories.',
  },
  {
    icon: Map,
    title: 'Visited Countries',
    desc: 'Track and display every country you\'ve explored on an interactive world map. Build your travel identity over time.',
  },
  {
    icon: Users,
    title: 'Followers & Connections',
    desc: 'Follow other travelers, build a network of connections, and view followers and following counts on every profile.',
  },
  {
    icon: Globe,
    title: 'Social Feed & Posts',
    desc: 'Share posts with photos, caption, and location. Like, comment, and share posts from travelers around you.',
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    desc: 'Stay updated on new messages, connection requests, tips, events, and activity from your network.',
  },
  {
    icon: Shield,
    title: 'Safety Controls',
    desc: 'Pause your visibility, block or report any user, set your profile to private, and control your location sharing at any time.',
  },
]

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              Product Features
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 font-jakarta tracking-tight leading-tight mb-6">
              Everything you need to
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                connect wherever you are.
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              Global Connect brings together map discovery, community chat, local intelligence, and travel identity — all in one app.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AppStoreButtons className="justify-center" />
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors group"
              >
                Get notified at launch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              badge="Core Features"
              title="Built for the way"
              titleHighlight="travelers actually live."
            />
          </AnimatedSection>

          <div className="mt-16 space-y-24">
            {tier1Features.map((feature, i) => {
              const Icon = feature.icon
              const isEven = i % 2 === 0
              const screen = (feature.screens?.[0] as 'map' | 'chat' | 'events' | 'profile' | 'tips') ?? 'map'
              return (
                <div
                  key={feature.title}
                  className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                  <AnimatedSection direction={isEven ? 'left' : 'right'} className={isEven ? '' : 'lg:order-2'}>
                    <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                      <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 font-jakarta mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">{feature.desc}</p>
                    <ul className="space-y-3">
                      {feature.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0`}>
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>
                  <AnimatedSection direction={isEven ? 'right' : 'left'} className={`flex justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                    <PhoneMockup screen={feature.screens ? screen : 'map'} image={feature.image} alt={`Global Connect — ${feature.title}`} size="lg" className="animate-float" />
                  </AnimatedSection>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              badge="Also included"
              title="And much"
              titleHighlight="more."
              subtitle="Global Connect is a complete platform for the modern traveler. Here's everything else built in."
            />
          </AnimatedSection>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tier2Features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <AnimatedSection key={feature.title} delay={i * 0.08}>
                  <div className="card-base p-6 card-hover">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-jakarta mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.desc}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-sky-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-extrabold text-white font-jakarta mb-5">
              Coming to iOS &amp; Android.
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Free to download. Be the first to know when Global Connect launches.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AppStoreButtons className="justify-center" />
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Get notified
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
