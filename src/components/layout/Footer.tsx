import Link from 'next/link'
import { Globe } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'iOS App (coming soon)', href: '/contact' },
    { label: 'Android App (coming soon)', href: '/contact' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'For Partners', href: '/for-partners' },
    { label: 'Contact', href: '/contact' },
    { label: 'Press', href: '/contact' },
  ],
  Support: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Help Center', href: '/faq' },
    { label: 'Community Guidelines', href: '/terms-of-use' },
    { label: 'Safety', href: '/about' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Use', href: '/terms-of-use' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-lg text-white font-jakarta tracking-tight">
                Global<span className="text-sky-400">Connect</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Discover people, places, and authentic experiences — wherever you are in the world.
            </p>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* App Store Badges */}
        <div className="py-10 border-b border-slate-800">
          <p className="text-sm text-slate-500 mb-5 text-center">
            Coming to iOS and Android
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl hover:bg-slate-100 transition-colors group"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-slate-900" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div>
                <div className="text-xs text-slate-500">Coming to</div>
                <div className="text-sm font-semibold text-slate-900">App Store</div>
              </div>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl hover:bg-slate-100 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                <path d="M3.18 23.76A2 2 0 0 1 2 22V2a2 2 0 0 1 1.18-1.76l11.07 11.41L3.18 23.76z" fill="#4285F4" />
                <path d="M20.31 10.27L17.48 8.6l-3.23 3.03 3.23 3.04 2.86-1.66a2 2 0 0 0 0-2.74z" fill="#FBBC04" />
                <path d="M3.18 23.76L14.25 12.35l-3.23-3.03L3.18.24z" fill="#34A853" />
                <path d="M3.18.24l7.84 9.08 3.23-3.03L3.18.24z" fill="#EA4335" />
              </svg>
              <div>
                <div className="text-xs text-slate-500">Coming to</div>
                <div className="text-sm font-semibold text-slate-900">Google Play</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Global Connect AS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms-of-use" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
