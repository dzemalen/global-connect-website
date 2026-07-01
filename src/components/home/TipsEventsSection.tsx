import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import PhoneMockup from '@/components/ui/PhoneMockup'
import { Heart, MapPin, ThumbsUp } from 'lucide-react'

const tipCategories = [
  { emoji: '🍜', label: 'Food & Dining', count: '2.4K tips' },
  { emoji: '🏛️', label: 'Culture & Art', count: '890 tips' },
  { emoji: '🌅', label: 'Hidden Spots', count: '1.1K tips' },
  { emoji: '🚇', label: 'Getting Around', count: '670 tips' },
  { emoji: '🛍️', label: 'Shopping', count: '540 tips' },
  { emoji: '🍽️', label: 'Best Restaurants', count: '1.3K tips' },
]

export default function TipsEventsSection() {
  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        <AnimatedSection>
          <SectionHeader
            badge="Tips & Recommendations"
            title="Real knowledge from"
            titleHighlight="real travelers."
            subtitle="Forget generic review sites. Global Connect gives you authentic, first-person recommendations from travelers who've just been where you're going."
          />
        </AnimatedSection>

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockup */}
          <AnimatedSection direction="left" className="flex justify-center lg:justify-start order-last lg:order-first">
            <div className="relative animate-float">
              <PhoneMockup image="/app/screens/tips.jpg" alt="Global Connect — local tips feed with community recommendations" size="lg" />
              <div className="absolute -right-8 top-24 px-4 py-3 bg-white rounded-2xl shadow-card border border-slate-100">
                <div className="flex items-center gap-2">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  <p className="text-xs font-semibold text-slate-800">47 travelers loved this tip</p>
                </div>
              </div>
              <div className="absolute -left-8 bottom-24 px-4 py-3 bg-white rounded-2xl shadow-card border border-slate-100">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />
                  <div>
                    <p className="text-xs font-semibold text-slate-800">Thip Samai, Bangkok</p>
                    <p className="text-[10px] text-slate-500">Local food gem · 2h ago</p>
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

              {/* Community-voted recommendations block */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center">
                    <ThumbsUp className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-jakarta">Community-voted recommendations</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Every tip and restaurant is ranked by real travelers. Upvote what&apos;s great, filter to your countrymen, and trust recommendations from people who actually went.
                </p>
                <div className="space-y-3">
                  {[
                    { emoji: '🍜', title: 'Best pad see ew in the old town', place: 'Thip Samai, Bangkok', likes: 47 },
                    { emoji: '🏛️', title: 'Hidden rooftop with skyline views', place: 'Sukhumvit 38', likes: 31 },
                    { emoji: '🍽️', title: 'Underwater dining experience', place: 'Ithaa, Maldives', likes: 88 },
                  ].map((tip) => (
                    <div key={tip.title} className="flex items-center gap-3 bg-white rounded-xl p-3.5 border border-slate-100 shadow-sm">
                      <span className="text-xl">{tip.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-900 truncate">{tip.title}</p>
                        <p className="text-xs text-slate-500">{tip.place}</p>
                      </div>
                      <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold flex-shrink-0">
                        <ThumbsUp className="w-3 h-3" /> {tip.likes}
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
