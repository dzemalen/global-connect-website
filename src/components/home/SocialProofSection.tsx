import AnimatedSection from '@/components/ui/AnimatedSection'
import { Smartphone, Users, MessageSquare, Globe } from 'lucide-react'

const pillars = [
  {
    icon: Smartphone,
    title: 'Free to use',
    desc: 'Core features free — no subscription required',
  },
  {
    icon: Globe,
    title: 'Dual-mode discovery',
    desc: 'Countrymen Mode or Global Mode, one tap to switch',
  },
  {
    icon: Users,
    title: 'Real people, real time',
    desc: 'Live location pins updated as people move',
  },
  {
    icon: MessageSquare,
    title: 'City chat built in',
    desc: 'Automatic local group chat wherever you are',
  },
]

export default function SocialProofSection() {
  return (
    <section className="py-14 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="none">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="flex flex-col items-center text-center p-5">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100/70 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-base font-bold text-slate-900 font-jakarta tracking-tight leading-none mb-1.5">
                    {p.title}
                  </p>
                  <p className="text-xs text-slate-500 font-medium">{p.desc}</p>
                </div>
              )
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
