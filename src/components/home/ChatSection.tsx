import AnimatedSection from '@/components/ui/AnimatedSection'
import PhoneMockup from '@/components/ui/PhoneMockup'
import { MessageSquare, Globe, Lock } from 'lucide-react'

export default function ChatSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <AnimatedSection direction="left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold tracking-wide uppercase mb-6">
              Community Chat
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 font-jakarta leading-tight tracking-tight mb-6">
              Your city is already{' '}
              <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
                talking.
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Every city on Global Connect has a live public chat room. Jump in and immediately connect with everyone who&apos;s there — travelers asking questions, locals sharing tips, expats making plans.
            </p>

            <div className="space-y-5 mb-10">
              {[
                {
                  icon: MessageSquare,
                  title: 'City-wide chat rooms',
                  desc: 'Every city has its own live chat. Join Bangkok, Tokyo, or Berlin — wherever you are.',
                  color: 'sky',
                },
                {
                  icon: Lock,
                  title: 'Private messaging',
                  desc: 'Message anyone you meet on the map or in city chat directly. Conversations are private.',
                  color: 'blue',
                },
                {
                  icon: Globe,
                  title: 'Group conversations',
                  desc: 'Create groups for your travel crew, a weekend trip, or any community you want to build.',
                  color: 'cyan',
                },
              ].map((item) => {
                const Icon = item.icon
                const colorMap: Record<string, string> = {
                  sky: 'bg-sky-50 text-sky-600',
                  blue: 'bg-blue-50 text-blue-600',
                  cyan: 'bg-cyan-50 text-cyan-600',
                }
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl ${colorMap[item.color]} flex items-center justify-center flex-shrink-0`}>
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

            {/* Feature note */}
            <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
              <p className="text-slate-700 text-sm leading-relaxed font-medium mb-1">City chat filters by mode</p>
              <p className="text-slate-500 text-xs leading-relaxed">
                Switch to Countrymen Mode and the city chat shows only your compatriots. Switch to Global Mode and you see everyone in the city — instantly.
              </p>
            </div>
          </AnimatedSection>

          {/* Phone mockup */}
          <AnimatedSection direction="right" className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <PhoneMockup image="/app/screens/local-chat.jpg" alt="Global Connect — live city chat room" size="lg" />

              <div className="absolute -left-10 top-20 px-4 py-3 bg-white rounded-2xl shadow-card border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    {['🇬🇧', '🇩🇪', '🇯🇵'].map((f, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-slate-100 border border-white flex items-center justify-center text-xs">{f}</div>
                    ))}
                  </div>
                  <p className="text-xs font-medium text-slate-700">Live city chat</p>
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
