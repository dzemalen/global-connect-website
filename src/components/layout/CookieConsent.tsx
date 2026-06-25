'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie } from 'lucide-react'

const STORAGE_KEY = 'gc-cookie-consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show the banner only if the visitor hasn't made a choice yet.
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const decide = (choice: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, ts: Date.now() }))
    } catch {
      /* ignore storage errors (e.g. private mode) */
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white shadow-card-xl p-5 sm:p-6 sm:flex sm:items-center sm:gap-6">
        <div className="flex items-start gap-3 mb-4 sm:mb-0">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
            <Cookie className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            We use cookies to keep Global Connect reliable and understand how the
            site is used. By clicking “Accept” you agree to this — see our{' '}
            <Link href="/privacy-policy" className="font-semibold text-blue-600 hover:underline">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="/terms-of-use" className="font-semibold text-blue-600 hover:underline">
              Terms of Use
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={() => decide('declined')}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide('accepted')}
            className="flex-1 sm:flex-none px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-500 shadow-md hover:opacity-95 transition-opacity"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
