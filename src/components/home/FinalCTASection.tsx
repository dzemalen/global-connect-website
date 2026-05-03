import AnimatedSection from '@/components/ui/AnimatedSection'
import Link from 'next/link'
import { ArrowRight, Globe, Smartphone, Lock } from 'lucide-react'

const flags = ['🇬🇧', '🇯🇵', '🇧🇷', '🇩🇪', '🇮🇳', '🇲🇽', '🇦🇺', '🇺🇸', '🇫🇷', '🇰🇷', '🇪🇸', '🇨🇦']

export default function FinalCTASection() {
  return (
    <section
      id="download"
      className="section-padding bg-gradient-dark overflow-hidden relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[600px] h-[600px] bg-sky-500/8 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid-cta" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#60A5FA" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid-cta)" />
        </svg>
        {/* Globe arc decoration */}
        <svg
          className="absolute right-0 top-0 h-full opacity-[0.06] pointer-events-none"
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMid slice"
        >
          <circle cx="400" cy="300" r="280" stroke="#60A5FA" strokeWidth="1" />
          <circle cx="400" cy="300" r="200" stroke="#60A5FA" strokeWidth="0.6" />
          <circle cx="400" cy="300" r="130" stroke="#60A5FA" strokeWidth="0.4" />
          <line x1="120" y1="300" x2="680" y2="300" stroke="#60A5FA" strokeWidth="0.4" />
          <line x1="400" y1="20" x2="400" y2="580" stroke="#60A5FA" strokeWidth="0.4" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto container-padding text-center">
        <AnimatedSection>
          {/* Flag row */}
          <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
            {flags.map((flag, i) => (
              <span
                key={i}
                className="text-xl opacity-50 hover:opacity-90 transition-opacity cursor-default"
              >
                {flag}
              </span>
            ))}
          </div>

          <h2
            className="font-extrabold text-white font-jakarta leading-[1.06] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
          >
            Your next great adventure<br />
            <span className="bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">
              starts with a connection.
            </span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-md mx-auto">
            Global Connect is coming to iOS and Android. Free to download, free to use. Be the first to know when it launches.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-700 font-semibold text-base shadow-lg hover:bg-blue-50 transition-colors"
            >
              Get notified at launch
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors group"
            >
              See how it works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Honest trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-10 border-t border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <Smartphone className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-500">iOS &amp; Android</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-500">Free to use</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Lock className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-500">Privacy controls built in</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
