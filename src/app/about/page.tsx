import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import Link from 'next/link'
import { Globe, Heart, Shield, Users, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — Global Connect',
  description:
    'Learn about the mission and values behind Global Connect — the app designed to help travelers, expats, and locals feel connected wherever they are in the world.',
}

const values = [
  {
    icon: Globe,
    title: 'Global by design',
    desc: 'Global Connect is built for a world where people move more, travel more, and crave community more than ever. The app works anywhere, for anyone.',
  },
  {
    icon: Heart,
    title: 'Human connection first',
    desc: 'Technology should bring people closer. Every feature in Global Connect is designed to make real human connections easier, more natural, and more meaningful.',
  },
  {
    icon: Shield,
    title: 'Privacy and safety',
    desc: 'Users control their visibility, can pause their presence, block and report easily, and choose exactly what information appears on their profile.',
  },
  {
    icon: Users,
    title: 'Community-driven',
    desc: 'The best version of Global Connect is built by its users. Tips, reviews, and city knowledge — the community makes it richer every day.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              Our Mission
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 font-jakarta tracking-tight leading-tight mb-6">
              Built to make every city{' '}
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                feel like home.
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Global Connect was created for everyone who has ever arrived somewhere new and wondered — who else is here, right now?
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="prose prose-lg prose-slate mx-auto">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Whether you travel for work, study, or adventure — arriving in a city where you know nobody is a universal experience. Most apps give you maps and directions. Global Connect gives you people.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The app is designed around two simple instincts every traveler shares: sometimes you want to find someone who speaks your language and understands your culture, and other times you want to immerse yourself in the local world and meet everyone around you.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                That is the idea behind Countrymen Mode and Global Mode — the two core ways to experience the app. They are not competing approaches; they are two sides of the same need to connect. Global Connect lets you choose, and switch between them freely.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission quote */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-sky-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-blue-100 text-sm font-semibold uppercase tracking-widest mb-4">What We Are Building</p>
            <h2 className="text-4xl font-extrabold text-white font-jakarta leading-tight">
              &ldquo;A platform that makes every person feel connected, curious, and at home — wherever they are in the world.&rdquo;
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader badge="Our Values" title="What we" titleHighlight="believe in." />
          </AnimatedSection>
          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <AnimatedSection key={value.title} delay={i * 0.1}>
                  <div className="card-base p-8 h-full card-hover">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-jakarta mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <SectionHeader badge="The Company" title="Global Connect" titleHighlight="AS" />
            <p className="text-lg text-slate-600 mt-6 leading-relaxed max-w-xl mx-auto">
              Global Connect AS is the company behind the app. We are committed to building a product that is truthful about what it offers and responsible in how it handles your data.
            </p>
            <p className="text-sm text-slate-400 mt-4">
              For questions, partnerships, or press enquiries, reach us at{' '}
              <a href="mailto:nidal@global-connect.ai" className="text-blue-600 hover:underline">
                nidal@global-connect.ai
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-extrabold text-slate-900 font-jakarta mb-5">
              Want to know more?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Explore what the app does, see how it works, or get in touch with the team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold text-sm shadow-md hover:opacity-95 transition-opacity"
              >
                Explore features
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
