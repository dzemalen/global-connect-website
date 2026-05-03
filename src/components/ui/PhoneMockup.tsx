import { cn } from '@/lib/utils'

type PhoneScreen = 'map' | 'chat' | 'events' | 'profile' | 'tips'

interface PhoneMockupProps {
  screen?: PhoneScreen
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

function MapScreen() {
  const pins = [
    { x: '22%', y: '28%', color: '#3B82F6', flag: '🇬🇧', online: true },
    { x: '58%', y: '20%', color: '#10B981', flag: '🇩🇪', online: true },
    { x: '72%', y: '44%', color: '#8B5CF6', flag: '🇯🇵', online: false },
    { x: '35%', y: '55%', color: '#F59E0B', flag: '🇲🇽', online: true },
    { x: '62%', y: '66%', color: '#EF4444', flag: '🇧🇷', online: true },
    { x: '18%', y: '70%', color: '#06B6D4', flag: '🇮🇳', online: false },
  ]

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Grid overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#60A5FA" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Map tint gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-cyan-900/30" />

      {/* Status bar */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-2 pb-1">
        <span className="text-[10px] text-white/70 font-medium">9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {[1,2,3,4].map(i => (
              <div key={i} className={`w-1 rounded-sm ${i <= 3 ? 'bg-white' : 'bg-white/30'}`} style={{ height: `${i * 3 + 3}px` }} />
            ))}
          </div>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="currentColor">
            <path d="M1.5 8.5C5.15 4.85 10.28 2.5 12 2.5s6.85 2.35 10.5 6L21 10c-2.78-2.77-6.19-4.5-9-4.5S6.78 7.23 4 10L1.5 8.5z" />
            <path d="M5 12c1.76-1.76 4.24-3 7-3s5.24 1.24 7 3L17.5 13.5C16.07 12.07 14.13 11 12 11s-4.07 1.07-5.5 2.5L5 12z" />
            <circle cx="12" cy="17" r="1.5" />
          </svg>
          <div className="w-5 h-2.5 rounded-sm border border-white/40 p-px">
            <div className="h-full w-3/4 bg-white rounded-xs" />
          </div>
        </div>
      </div>

      {/* Mode toggle */}
      <div className="relative z-10 flex items-center justify-center px-4 py-2">
        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1">
          <div className="px-3 py-1 rounded-full bg-white text-slate-900 text-[10px] font-bold">
            🏳️ Countrymen
          </div>
          <div className="px-3 py-1 rounded-full text-white/70 text-[10px] font-medium">
            🌍 Global
          </div>
        </div>
      </div>

      {/* Map area with pins */}
      <div className="relative flex-1 z-10">
        {pins.map((pin, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center"
            style={{ left: pin.x, top: pin.y }}
          >
            {pin.online && (
              <div
                className="absolute w-8 h-8 rounded-full opacity-30 animate-ping-slow"
                style={{ backgroundColor: pin.color, top: '-4px', left: '-4px' }}
              />
            )}
            <div
              className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-sm shadow-lg z-10"
              style={{ backgroundColor: pin.color }}
            >
              {pin.flag}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom drawer */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-t-2xl px-4 pt-3 pb-4">
        <div className="w-8 h-1 bg-white/30 rounded-full mx-auto mb-3" />
        <p className="text-white/60 text-[10px] font-medium mb-2">NEARBY — 6 PEOPLE</p>
        <div className="flex gap-2 overflow-hidden">
          {['🇬🇧', '🇩🇪', '🇲🇽', '🇧🇷'].map((flag, i) => (
            <div key={i} className="flex items-center gap-1.5 bg-white/15 rounded-full px-2.5 py-1">
              <span className="text-sm">{flag}</span>
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
            </div>
          ))}
          <div className="flex items-center justify-center bg-white/10 rounded-full w-8 h-7">
            <span className="text-white/60 text-[10px]">+2</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChatScreen() {
  const messages = [
    { text: 'Hey! Just arrived in Bangkok 🙌', me: false, flag: '🇬🇧', time: '9:32' },
    { text: 'Welcome! What area are you staying in?', me: true, time: '9:33' },
    { text: 'Sukhumvit. Any food recs nearby? 🍜', me: false, flag: '🇬🇧', time: '9:33' },
    { text: 'Thong Lor street food is amazing! 10 min walk', me: true, time: '9:34' },
    { text: 'Perfect, thanks! Maybe we should grab dinner 🤙', me: false, flag: '🇬🇧', time: '9:35' },
  ]

  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Status bar */}
      <div className="bg-white px-4 pt-2 pb-3 border-b border-slate-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-slate-400">9:41</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-sky-400 flex items-center justify-center text-sm">
            🇬🇧
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-900">James • London</p>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              <span className="text-[10px] text-green-500">Active now</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-hidden px-3 py-3 flex flex-col gap-2">
        {messages.map((msg, i) => (
          <div key={i} className={`flex items-end gap-1.5 ${msg.me ? 'flex-row-reverse' : ''}`}>
            {!msg.me && (
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-sky-400 flex items-center justify-center text-xs flex-shrink-0">
                {msg.flag}
              </div>
            )}
            <div
              className={`max-w-[75%] px-3 py-2 rounded-2xl text-[10px] leading-relaxed ${
                msg.me
                  ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-br-sm'
                  : 'bg-white text-slate-800 rounded-bl-sm shadow-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-white px-3 py-2.5 border-t border-slate-100 flex items-center gap-2">
        <div className="flex-1 bg-slate-100 rounded-full px-3 py-1.5">
          <span className="text-[10px] text-slate-400">Type a message...</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white fill-current">
            <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

function EventsScreen() {
  const events = [
    { title: 'Sunset Rooftop Social', location: 'Sky Bar', time: 'Today, 7PM', emoji: '🌅', attending: 34 },
    { title: 'Street Food Tour', location: 'Old Town', time: 'Sat, 6PM', emoji: '🍜', attending: 12 },
    { title: 'Expat Meetup', location: 'Craft Beer Lab', time: 'Sun, 4PM', emoji: '🍺', attending: 56 },
    { title: 'Yoga on the Beach', location: 'North Shore', time: 'Sun, 8AM', emoji: '🧘', attending: 18 },
  ]

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="bg-white px-4 pt-2 pb-3 border-b border-slate-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-slate-400">9:41</span>
        </div>
        <h3 className="text-sm font-bold text-slate-900">Events Nearby</h3>
        <p className="text-[10px] text-slate-500">Bangkok, Thailand</p>
      </div>
      <div className="flex-1 overflow-hidden px-3 py-3 flex flex-col gap-2">
        {events.map((event, i) => (
          <div key={i} className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
            <div className="flex items-start gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center text-lg flex-shrink-0">
                {event.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold text-slate-900 truncate">{event.title}</p>
                <p className="text-[10px] text-slate-500">{event.location}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[9px] text-blue-600 font-medium">{event.time}</span>
                  <span className="text-[9px] text-slate-400">{event.attending} going</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TipsScreen() {
  const tips = [
    { user: '🇺🇸', text: 'Try Pad See Ew at Thip Samai — best in the city, been here 3 times', likes: 47 },
    { user: '🇩🇪', text: 'Hidden temple off Sukhumvit 38, no tourists. Stunning at sunrise 🌅', likes: 31 },
    { user: '🇦🇺', text: 'Grab-scooter is cheaper than taxi for everything under 3km', likes: 28 },
  ]

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="bg-white px-4 pt-2 pb-3 border-b border-slate-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-slate-400">9:41</span>
        </div>
        <h3 className="text-sm font-bold text-slate-900">Local Tips</h3>
        <p className="text-[10px] text-slate-500">From travelers in Bangkok</p>
      </div>
      <div className="flex-1 overflow-hidden px-3 py-3 flex flex-col gap-2.5">
        {tips.map((tip, i) => (
          <div key={i} className="bg-white rounded-xl p-3 shadow-sm border border-slate-100">
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-sm flex-shrink-0">
                {tip.user}
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-slate-700 leading-relaxed">{tip.text}</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-rose-400 fill-current">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-[9px] text-slate-400">{tip.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProfileScreen() {
  const countries = [
    { flag: '🇹🇭', visited: true }, { flag: '🇯🇵', visited: true }, { flag: '🇻🇳', visited: true },
    { flag: '🇮🇩', visited: true }, { flag: '🇲🇾', visited: true }, { flag: '🇸🇬', visited: true },
    { flag: '🇵🇭', visited: false }, { flag: '🇰🇭', visited: true }, { flag: '🇱🇦', visited: false },
  ]

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="h-24 bg-gradient-to-br from-blue-600 to-sky-500 relative">
        <div className="absolute -bottom-8 left-4 w-16 h-16 rounded-full border-4 border-white bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center text-2xl shadow-lg">
          😊
        </div>
      </div>
      <div className="px-4 pt-10 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Sarah K.</h3>
            <p className="text-[10px] text-slate-500">🇬🇧 London, UK</p>
          </div>
          <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[9px] font-semibold">
            Follow
          </div>
        </div>
        <p className="text-[10px] text-slate-600 mt-2 leading-relaxed">
          Solo traveler & food lover. SE Asia currently 🌏
        </p>
        <div className="flex items-center gap-4 mt-3 py-3 border-y border-slate-100">
          {[{ v: '23', l: 'Countries' }, { v: '148', l: 'Connections' }, { v: '64', l: 'Tips' }].map(s => (
            <div key={s.l} className="text-center">
              <p className="text-sm font-bold text-slate-900">{s.v}</p>
              <p className="text-[9px] text-slate-500">{s.l}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] font-semibold text-slate-700 mt-3 mb-2">Visited Countries</p>
        <div className="grid grid-cols-9 gap-1">
          {countries.map((c, i) => (
            <div key={i} className={`text-sm text-center ${c.visited ? '' : 'opacity-30'}`}>
              {c.flag}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const screenComponents: Record<PhoneScreen, React.FC> = {
  map: MapScreen,
  chat: ChatScreen,
  events: EventsScreen,
  tips: TipsScreen,
  profile: ProfileScreen,
}

const sizeClasses = {
  sm: { frame: 'w-44 h-[340px]', inner: 'w-40 h-[312px]' },
  md: { frame: 'w-56 h-[440px]', inner: 'w-52 h-[408px]' },
  lg: { frame: 'w-72 h-[560px]', inner: 'w-[268px] h-[528px]' },
}

export default function PhoneMockup({
  screen = 'map',
  className,
  size = 'lg',
}: PhoneMockupProps) {
  const Screen = screenComponents[screen]
  const { frame, inner } = sizeClasses[size]

  return (
    <div className={cn('relative', className)}>
      {/* Outer frame */}
      <div
        className={cn(
          frame,
          'relative rounded-[2.5rem] bg-slate-900 p-1.5 shadow-phone ring-1 ring-white/10'
        )}
      >
        {/* Inner bezel */}
        <div className={cn(inner, 'rounded-[2rem] overflow-hidden bg-white relative')}>
          {/* Dynamic island / notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 rounded-full z-20" />

          {/* Screen content — padded for notch */}
          <div className="absolute inset-0 pt-7">
            <Screen />
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute -right-1 top-24 w-1.5 h-12 bg-slate-700 rounded-r-lg" />
        <div className="absolute -left-1 top-20 w-1.5 h-8 bg-slate-700 rounded-l-lg" />
        <div className="absolute -left-1 top-32 w-1.5 h-8 bg-slate-700 rounded-l-lg" />
        <div className="absolute -left-1 top-44 w-1.5 h-8 bg-slate-700 rounded-l-lg" />
      </div>
    </div>
  )
}
