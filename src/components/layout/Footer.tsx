import Link from 'next/link'
import Image from 'next/image'
import AppStoreButtons from '@/components/ui/AppStoreButtons'

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
            <Link href="/" className="inline-flex items-center mb-5" aria-label="Global Connect — Home">
              <Image
                src="/brand/logo.png"
                alt="Global Connect"
                width={404}
                height={268}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Go Global. Stay Connected. Discover travelers, locals, and tips around you — wherever you are in the world.
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
          <AppStoreButtons variant="light" className="justify-center" />
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
