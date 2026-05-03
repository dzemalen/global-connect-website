import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Mail, Store } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact — Global Connect',
  description: "Get in touch with the Global Connect team. We'd love to hear from you.",
}

const contactOptions = [
  {
    icon: Mail,
    title: 'General enquiries',
    desc: 'Questions about the app, feedback, or anything else.',
    action: 'contact@global-connect.ai',
    href: 'mailto:contact@global-connect.ai',
    bg: 'bg-blue-50',
    color: 'text-blue-600',
  },
  {
    icon: Store,
    title: 'Business & Partnerships',
    desc: 'Interested in partnering with Global Connect? We\'d love to talk.',
    action: 'View Partners page',
    href: '/for-partners',
    bg: 'bg-purple-50',
    color: 'text-purple-600',
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-5xl font-extrabold text-slate-900 font-jakarta tracking-tight mb-6">
              Let&apos;s{' '}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">talk.</span>
            </h1>
            <p className="text-xl text-slate-600">We&apos;d love to hear from you — whether you have questions, feedback, or just want to say hi.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact options */}
          <div className="grid sm:grid-cols-2 gap-5 mb-20 max-w-2xl mx-auto">
            {contactOptions.map((opt, i) => {
              const Icon = opt.icon
              return (
                <AnimatedSection key={opt.title} delay={i * 0.1}>
                  <Link
                    href={opt.href}
                    className="card-base card-hover p-7 flex flex-col h-full"
                  >
                    <div className={`w-12 h-12 rounded-2xl ${opt.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${opt.color}`} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-jakarta mb-2">{opt.title}</h3>
                    <p className="text-sm text-slate-500 mb-4 flex-1">{opt.desc}</p>
                    <span className={`text-sm font-semibold ${opt.color}`}>{opt.action}</span>
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>

          {/* Contact form */}
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold text-slate-900 font-jakarta mb-2 text-center">Send us a message</h2>
              <p className="text-slate-500 text-center mb-10">We typically respond within one business day.</p>
              <form
                className="space-y-5"
                action="mailto:contact@global-connect.ai"
                method="get"
                encType="text/plain"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-2">Your name</label>
                    <input id="contact-name" name="name" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="First Last" />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-2">Email address</label>
                    <input id="contact-email" name="from" type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input id="contact-subject" name="subject" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="What is this about?" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea id="contact-message" name="body" rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" placeholder="Tell us what is on your mind..." />
                </div>
                <button type="submit" className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold text-base shadow-md hover:opacity-95 transition-opacity">
                  Send message
                </button>
              </form>
              <p className="text-center text-xs text-slate-400 mt-4">
                Or email us directly at{' '}
                <a href="mailto:contact@global-connect.ai" className="text-blue-500 hover:underline">
                  contact@global-connect.ai
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
