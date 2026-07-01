'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { submitLead } from '@/lib/submitLead'
import { Users, TrendingUp, Globe, Star, ArrowRight, CheckCircle } from 'lucide-react'

const partnerTypes = [
  { emoji: '🍽️', title: 'Restaurants & Cafés', desc: 'Get discovered by travelers actively looking for local dining experiences.' },
  { emoji: '🍺', title: 'Bars & Nightlife', desc: 'Reach international visitors and expats seeking social venues.' },
  { emoji: '🏛️', title: 'Attractions & Museums', desc: 'Reach travelers looking for the best things to see and do while exploring your city.' },
  { emoji: '🏨', title: 'Hostels & Boutique Hotels', desc: 'Connect with budget-conscious adventurers and backpackers.' },
  { emoji: '🗺️', title: 'Tour Operators', desc: 'Showcase your experiences to people actively exploring your city.' },
  { emoji: '🛍️', title: 'Local Shops & Markets', desc: 'Get visibility among international shoppers looking for authentic finds.' },
]

const benefits = [
  {
    icon: Globe,
    title: 'Reach international audiences',
    desc: 'Your venue appears to travelers and expats from around the world who are actively exploring your city — not just locals.',
  },
  {
    icon: Users,
    title: 'Highly engaged users',
    desc: 'Global Connect users explore local food, tips, and experiences — your listing reaches people at the exact moment they are deciding where to go.',
  },
  {
    icon: TrendingUp,
    title: 'Drive real foot traffic',
    desc: 'Users see your listing at the moment they\'re deciding where to go — high intent, high conversion.',
  },
  {
    icon: Star,
    title: 'Community reviews & tips',
    desc: 'Authentic community reviews build trust and drive organic discovery. Happy customers become your ambassadors.',
  },
]

const processSteps = [
  { number: '01', title: 'Apply', desc: 'Fill out the partnership form below. Tell us about your business and what you\'d like to offer travelers.' },
  { number: '02', title: 'Review', desc: 'Our team reviews your application within 3–5 business days and ensures it\'s a good fit for our community.' },
  { number: '03', title: 'Onboard', desc: 'We set up your business profile and add your venue to the map so travelers can discover you immediately.' },
  { number: '04', title: 'Connect', desc: 'Start reaching travelers exploring your city. Your venue appears in the app to people actively looking for places to go.' },
]

function PartnerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [fields, setFields] = useState({
    businessName: '',
    businessType: 'Restaurant / Café',
    email: '',
    city: '',
    description: '',
  })
  const [company, setCompany] = useState('') // honeypot
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!fields.businessName.trim() || !fields.email.trim() || !fields.city.trim()) {
      setError('Please fill in your business name, email, and city.')
      return
    }
    setError('')
    setSubmitting(true)

    const stored = await submitLead({
      type: 'partner',
      name: fields.businessName,
      email: fields.email,
      message: fields.description,
      details: { businessType: fields.businessType, city: fields.city },
      company,
    })

    if (!stored) {
      // Fallback: open the visitor's email client with the details pre-filled.
      const subject = encodeURIComponent(`Partnership Application — ${fields.businessName}`)
      const body = encodeURIComponent(
        `Business name: ${fields.businessName}\nBusiness type: ${fields.businessType}\nContact email: ${fields.email}\nCity & country: ${fields.city}\n\n${fields.description}`
      )
      window.location.href = `mailto:contact@global-connect.ai?subject=${subject}&body=${body}`
    }
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mt-10 text-center py-16">
        <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-5" />
        <h3 className="text-2xl font-bold text-slate-900 font-jakarta mb-3">Application received!</h3>
        <p className="text-slate-600 max-w-sm mx-auto">
          Thanks — we&apos;ll review your application and get back to you within 3 business days.
        </p>
      </div>
    )
  }

  return (
    <form className="mt-10 space-y-5" onSubmit={handleSubmit} noValidate>
      {/* Honeypot (hidden from real users) */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="hidden"
        aria-hidden="true"
      />
      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>
      )}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="partner-business-name" className="block text-sm font-medium text-slate-700 mb-2">Business name <span className="text-red-400">*</span></label>
          <input
            id="partner-business-name"
            type="text"
            required
            value={fields.businessName}
            onChange={(e) => setFields({ ...fields, businessName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your business name"
          />
        </div>
        <div>
          <label htmlFor="partner-business-type" className="block text-sm font-medium text-slate-700 mb-2">Business type</label>
          <select
            id="partner-business-type"
            value={fields.businessType}
            onChange={(e) => setFields({ ...fields, businessType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>Restaurant / Café</option>
            <option>Bar / Nightlife</option>
            <option>Attraction / Museum</option>
            <option>Hostel / Hotel</option>
            <option>Tour operator</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="partner-email" className="block text-sm font-medium text-slate-700 mb-2">Contact email <span className="text-red-400">*</span></label>
        <input
          id="partner-email"
          type="email"
          required
          value={fields.email}
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="you@yourbusiness.com"
        />
      </div>
      <div>
        <label htmlFor="partner-city" className="block text-sm font-medium text-slate-700 mb-2">City &amp; country <span className="text-red-400">*</span></label>
        <input
          id="partner-city"
          type="text"
          required
          value={fields.city}
          onChange={(e) => setFields({ ...fields, city: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g. Bangkok, Thailand"
        />
      </div>
      <div>
        <label htmlFor="partner-description" className="block text-sm font-medium text-slate-700 mb-2">Tell us about your business</label>
        <textarea
          id="partner-description"
          rows={4}
          value={fields.description}
          onChange={(e) => setFields({ ...fields, description: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="What do you offer, and how do you think Global Connect users would benefit?"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold text-base shadow-md hover:shadow-glow-blue hover:opacity-95 transition-all duration-200 disabled:opacity-60"
      >
        {submitting ? 'Sending…' : 'Submit partnership application'}
        {!submitting && <ArrowRight className="w-5 h-5" />}
      </button>
      <p className="text-xs text-center text-slate-400">
        We review every application personally and respond within 3 business days.
      </p>
    </form>
  )
}

export default function ForPartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white text-sm font-semibold mb-6">
              For Business Partners
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white font-jakarta tracking-tight leading-tight mb-6">
              Reach the travelers
              <br />
              <span className="bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">
                exploring your city.
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Global Connect gives your business direct visibility to a highly engaged audience of travelers, expats, and international visitors — right when they&apos;re deciding where to go.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { value: 'Free', label: 'For users — built-in audience' },
                { value: 'Local', label: 'Geo-targeted to your city' },
                { value: 'Direct', label: 'In-app tips & recommendations visibility' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-extrabold text-white font-jakarta">{stat.value}</p>
                  <p className="text-sm text-blue-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partner types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              badge="Who We Work With"
              title="Built for local"
              titleHighlight="businesses."
              subtitle="We partner with businesses that genuinely serve travelers and enrich the experience of exploring a new city."
            />
          </AnimatedSection>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partnerTypes.map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 0.08}>
                <div className="card-base card-hover p-7 h-full">
                  <span className="text-4xl block mb-4">{type.emoji}</span>
                  <h3 className="text-lg font-bold text-slate-900 font-jakarta mb-2">{type.title}</h3>
                  <p className="text-sm text-slate-600">{type.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              badge="Partner Benefits"
              title="Why partner with"
              titleHighlight="Global Connect?"
            />
          </AnimatedSection>
          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <AnimatedSection key={benefit.title} delay={i * 0.1}>
                  <div className="card-base p-8 h-full card-hover">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-jakarta mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              badge="Partnership Process"
              title="Getting started is"
              titleHighlight="simple."
              subtitle="From application to live on the platform in under a week."
            />
          </AnimatedSection>
          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center flex-shrink-0 text-white font-extrabold font-jakarta shadow-md">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-jakarta mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-24 bg-slate-50" id="apply">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              badge="Apply Now"
              title="Let's work"
              titleHighlight="together."
              subtitle="Fill out the form and we'll get back to you within 3 business days."
            />
            <PartnerForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
