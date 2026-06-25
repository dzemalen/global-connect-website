import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import PhoneMockup from '@/components/ui/PhoneMockup'
import { Heart, Calendar, MapPin } from 'lucide-react'

const tipCategories = [
  { emoji: '🍜', label: 'Food & Dining', count: '2.4K tips' },
  { emoji: '🏛️', label: 'Culture & Art', count: '890 tips' },
  { emoji: '🌅', label: 'Hidden Spots', count: '1.1K tips' },
  { emoji: '🚇', label: 'Getting Around', count: '670 tips' },
  { emoji: '🛍️', label: 'Shopping', count: '540 tips' },
  { emoji: '🏖️', label: 'Day Trips', count: '430 tips' },
]

export default function TipsEventsSection() {
  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        <AnimatedSection>
          <SectionHeader
            badge="Tips & Events"
            title="Real knowledge from"
            titleHighlight="real travelers."
            subtitle="Forget generic review sites. Global Connect gives you authentic, first-person recommendations from travelers who've just been where you're going."
          />
        </AnimatedSection>

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockup */}
          <AnimatedSection direction="left" className="flex justify-center lg:justify-start order-last lg:order-first">
            <div className="relative animate-float">
              <PhoneMockup image="/app/screens/feed-mountains.png" alt="Global Connect — community feed of travelers sharing places" size="lg" />
              <div className="absolute -right-8 top-24 px-4 py-3 bg-white rounded-2xl shadow-card border border-slate-100">
                <div className="flex items-center gap-2">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  <p className="text-xs font-semibold text-slate-800">47 travelers loved this tip</p>
                </div>
              </div>
              <div className="absolute -left-8 bottom-24 px-4 py-3 bg-white rounded-2xl shadow-card border border-slate-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  <div>
                    <p className="text-xs font-semibold text-slate-800">Sunset Rooftop Social</p>
                    <p className="text-[10px] text-slate-500">Today, 7PM · 34 going</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right">
            <div className="space-y-8">
              {/* Tips block */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-jakarta">Local Tips & Hidden Gems</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-5">
                  The best local knowledge comes from people who&apos;ve been there — not algorithms. Browse tips from real travelers, filter by category, and discover places you&apos;d never find on your own.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {tipCategories.map((cat) => (
                    <div key={cat.label} className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm text-center">
                      <span className="text-2xl block mb-1">{cat.emoji}</span>
                      <p className="text-[10px] font-semibold text-slate-700 leading-tight">{cat.label}</p>
                      <p className="text-[9px] text-slate-400 mt-0.5">{cat.count}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Events block */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-jakarta">Events Nearby</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-5">
                  From traveler meetups to local cultural events, concerts, markets, and community gatherings — see what&apos;s happening in your city right now and join the action.
                </p>
                <div className="space-y-3">
                  {[
                    { emoji: '🌅', title: 'Sunset Rooftop Social', time: 'Today, 7PM', going: 34 },
                    { emoji: '🍜', title: 'Street Food Tour', time: 'Sat, 6PM', going: 12 },
                    { emoji: '🏖️', title: 'Island Day Trip', time: 'Sun, 7AM', going: 22 },
                  ].map((event) => (
                    <div key={event.title} className="flex items-center gap-3 bg-white rounded-xl p-3.5 border border-slate-100 shadow-sm">
                      <span className="text-xl">{event.emoji}</span>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-900">{event.title}</p>
                        <div className="flex items-center gap-3 mt-0.5">
                          <span className="text-xs text-blue-600 font-medium">{event.time}</span>
                          <span className="text-xs text-slate-400">{event.going} going</span>
                        </div>
                      </div>
                      <div className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                        Join
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
