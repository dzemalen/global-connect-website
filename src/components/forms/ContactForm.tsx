'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { submitLead } from '@/lib/submitLead'
import { CONTACT_EMAIL } from '@/lib/constants'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle')
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })
  const [company, setCompany] = useState('') // honeypot
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!fields.email.trim() || !fields.message.trim()) {
      setError('Please add your email and a message.')
      return
    }
    setStatus('submitting')

    const stored = await submitLead({
      type: 'contact',
      name: fields.name,
      email: fields.email,
      message: fields.message,
      details: { subject: fields.subject },
      company,
    })

    if (!stored) {
      // Fallback: open the visitor's email client with the details pre-filled.
      const subject = encodeURIComponent(fields.subject || 'Message from global-connect.ai')
      const body = encodeURIComponent(`Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`)
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    }
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-14">
        <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-5" />
        <h3 className="text-2xl font-bold text-slate-900 font-jakarta mb-3">Message sent!</h3>
        <p className="text-slate-600 max-w-sm mx-auto">
          Thanks for reaching out — we typically respond within one business day.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>
      )}
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
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-2">Your name</label>
          <input id="contact-name" type="text" value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })} className={inputClass} placeholder="First Last" />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-2">Email address <span className="text-red-400">*</span></label>
          <input id="contact-email" type="email" required value={fields.email} onChange={(e) => setFields({ ...fields, email: e.target.value })} className={inputClass} placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
        <input id="contact-subject" type="text" value={fields.subject} onChange={(e) => setFields({ ...fields, subject: e.target.value })} className={inputClass} placeholder="What is this about?" />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-2">Message <span className="text-red-400">*</span></label>
        <textarea id="contact-message" rows={5} required value={fields.message} onChange={(e) => setFields({ ...fields, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Tell us what is on your mind..." />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold text-base shadow-md hover:opacity-95 transition-opacity disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
