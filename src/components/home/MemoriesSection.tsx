import AnimatedSection from '@/components/ui/AnimatedSection'
import PhoneMockup from '@/components/ui/PhoneMockup'
import { Camera, Globe, Map } from 'lucide-react'

export default function MemoriesSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <AnimatedSection direction="left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold tracking-wide uppercase mb-6">
              Travel Identity
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 font-jakarta leading-tight tracking-tight mb-6">
              Build your{' '}
              <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                travel story.
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Your profile is your travel identity. Track every country you&apos;ve visited, share memories, post tips, and build a reputation as a trusted traveler in your community.
            </p>

            <div className="space-y-5 mb-10">
              {[
                {
                  icon: Map,
                  title: 'Visited countries map',
                  desc: 'Light up your personal world map as you explore. Share your journey and inspire others.',
                  color: 'bg-rose-50 text-rose-600',
                },
                {
                  icon: Camera,
                  title: 'Travel memories',
                  desc: 'Post photos, stories, and moments from your travels. Build a timeline of your adventures.',
                  color: 'bg-pink-50 text-pink-600',
                },
                {
                  icon: Globe,
                  title: 'Community reputation',
                  desc: 'Your tips get upvoted, your recommendations get followed. Earn trust in the global community.',
                  color: 'bg-purple-50 text-purple-600',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Visited countries showcase */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                Example profile — 23 countries visited
              </p>
              <div className="flex flex-wrap gap-2">
                {['🇹🇭', '🇯🇵', '🇻🇳', '🇮🇩', '🇲🇾', '🇸🇬', '🇰🇭', '🇮🇳', '🇳🇵', '🇵🇹', '🇪🇸', '🇫🇷', '🇩🇪', '🇮🇹', '🇬🇷', '🇲🇦', '🇿🇦', '🇰🇪', '🇲🇽', '🇨🇴', '🇧🇷', '🇺🇸', '🇨🇦'].map((flag) => (
                  <span key={flag} className="text-xl">{flag}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Phone mockup */}
          <AnimatedSection direction="right" className="flex justify-center lg:justify-end">
            <div className="relative animate-float-delayed">
              <PhoneMockup screen="profile" size="lg" />
              <div className="absolute -right-8 top-32 px-4 py-3 bg-white rounded-2xl shadow-card border border-slate-100">
                <p className="text-xs font-semibold text-slate-800">🌍 23 countries</p>
                <p className="text-[10px] text-slate-500">explored worldwide</p>
              </div>
              <div className="absolute -left-8 bottom-32 px-4 py-3 bg-white rounded-2xl shadow-card border border-slate-100">
                <p className="text-xs font-semibold text-slate-800">✨ 148 connections</p>
                <p className="text-[10px] text-slate-500">in the community</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
