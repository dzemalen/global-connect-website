import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Home, Map as MapIcon, PlusSquare, Lightbulb, Search, MapPin, ThumbsUp, ThumbsDown, ChevronLeft } from 'lucide-react'

type PhoneScreen = 'map' | 'chat' | 'profile' | 'tips'

interface PhoneMockupProps {
  screen?: PhoneScreen
  /** Path to a real app screenshot. When set, it is shown instead of the CSS recreation. */
  image?: string
  alt?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

/*
 * These screens are faithful recreations of the real Global Connect Flutter UI
 * (lib/View/*). Brand values come straight from lib/core/const/app_color.dart:
 *   primary #1577B8 · brandLight #4BADE6 · brandSurface #EAF4FB · navy #00263F
 *   success #24B75A · text #0D121C / #697586 · outline #E3E8EF · scaffold #F7F9FC
 * Bottom nav (Home·Map·Post·Tips) and the segmented Countrymen/Global toggle
 * mirror the app exactly.
 */

const PRIMARY = '#1577B8'
const SURFACE = '#EAF4FB'

function StatusBar({ dark = false }: { dark?: boolean }) {
  const c = dark ? 'text-white' : 'text-slate-800'
  return (
    <div className={cn('flex items-center justify-between px-5 pt-1.5 pb-1', c)}>
      <span className="text-[10px] font-semibold">9:41</span>
      <div className="flex items-center gap-1">
        <div className="flex items-end gap-0.5">
          {[3, 5, 7, 9].map((h, i) => (
            <div key={i} className="w-0.5 rounded-sm bg-current" style={{ height: `${h}px` }} />
          ))}
        </div>
        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M1.5 8.5C5.15 4.85 10.28 2.5 12 2.5s6.85 2.35 10.5 6L21 10c-2.78-2.77-6.19-4.5-9-4.5S6.78 7.23 4 10L1.5 8.5z" /><circle cx="12" cy="17" r="1.5" /></svg>
        <div className="w-5 h-2.5 rounded-[3px] border border-current/50 p-px"><div className="h-full w-3/4 rounded-[1px] bg-current" /></div>
      </div>
    </div>
  )
}

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: MapIcon, label: 'Map' },
  { icon: PlusSquare, label: 'Post' },
  { icon: Lightbulb, label: 'Tips' },
]

function BottomNav({ active }: { active: string }) {
  return (
    <div
      className="flex items-center justify-around px-2 pt-2 pb-2.5 bg-white"
      style={{ borderTopLeftRadius: 18, borderTopRightRadius: 18, boxShadow: '0 -4px 20px rgba(0,0,0,0.06)' }}
    >
      {navItems.map(({ icon: Icon, label }) => {
        const isActive = label === active
        return (
          <div key={label} className="flex flex-col items-center gap-1">
            <div
              className="px-2.5 py-1 rounded-[10px]"
              style={{ backgroundColor: isActive ? SURFACE : 'transparent' }}
            >
              <Icon className="w-[15px] h-[15px]" style={{ color: isActive ? PRIMARY : '#6E6E6E' }} />
            </div>
            <span
              className="text-[8px]"
              style={{ color: isActive ? PRIMARY : '#6E6E6E', fontWeight: isActive ? 700 : 500 }}
            >
              {label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

function SegToggle({ left, right, leftActive, leftIcon, rightIcon }: { left: string; right: string; leftActive: boolean; leftIcon?: React.ReactNode; rightIcon?: React.ReactNode }) {
  const pill = (label: string, active: boolean, icon?: React.ReactNode) => (
    <div
      className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-[10px] text-[10px] font-bold"
      style={{
        backgroundColor: active ? PRIMARY : '#fff',
        color: active ? '#fff' : '#6E6E6E',
        border: active ? 'none' : '1px solid #E3E8EF',
      }}
    >
      {icon}
      {label}
    </div>
  )
  return (
    <div className="flex gap-2 p-1 rounded-xl" style={{ backgroundColor: 'rgba(238,242,246,0.7)' }}>
      {pill(left, leftActive, leftIcon)}
      {pill(right, !leftActive, rightIcon)}
    </div>
  )
}

function Avatar({ grad, char, online = false, size = 28 }: { grad: string; char: string; online?: boolean; size?: number }) {
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <div
        className="w-full h-full rounded-full flex items-center justify-center text-white font-bold"
        style={{ background: grad, fontSize: size * 0.4 }}
      >
        {char}
      </div>
      {online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white" style={{ backgroundColor: '#FBBF24' }} />}
    </div>
  )
}

/* ---------------------------------- MAP ---------------------------------- */
function MapScreen() {
  const markers = [
    { x: '26%', y: '30%', grad: 'linear-gradient(135deg,#1577B8,#4BADE6)', char: '🇬🇧' },
    { x: '64%', y: '24%', grad: 'linear-gradient(135deg,#24B75A,#4BADE6)', char: '🇩🇪' },
    { x: '72%', y: '52%', grad: 'linear-gradient(135deg,#00263F,#1577B8)', char: '🇯🇵' },
    { x: '34%', y: '58%', grad: 'linear-gradient(135deg,#F5A623,#4BADE6)', char: '🇲🇽' },
  ]
  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: '#F7F9FC' }}>
      <StatusBar />
      <div className="relative flex-1 overflow-hidden">
        {/* Light Google-Maps-style canvas */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,#EAF4FB 0%,#F2F7FA 55%,#E9F1F5 100%)' }} />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 280 300">
          {/* water */}
          <path d="M-20 120 Q60 90 120 130 T300 120 L300 300 L-20 300 Z" fill="#D6EAF6" opacity="0.7" />
          {/* roads */}
          <g stroke="#fff" strokeWidth="5" opacity="0.9" fill="none">
            <path d="M0 70 H280" /><path d="M120 0 V300" /><path d="M30 0 L210 300" />
          </g>
          <g stroke="#E3E8EF" strokeWidth="1" fill="none">
            <path d="M0 70 H280" /><path d="M120 0 V300" />
          </g>
        </svg>
        {/* discovery radius */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full" style={{ background: 'rgba(21,119,184,0.10)', border: '1.5px dashed rgba(21,119,184,0.45)' }} />

        {/* Countrymen / Global toggle */}
        <div className="absolute top-3 left-3 right-3">
          <SegToggle left="Countrymen" right="Global" leftActive={false} />
        </div>

        {/* markers */}
        {markers.map((m, i) => (
          <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: m.x, top: m.y }}>
            <div className="rounded-full ring-2 ring-white shadow-md flex items-center justify-center text-[11px]" style={{ width: 26, height: 26, background: m.grad }}>{m.char}</div>
          </div>
        ))}
        {/* my location */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full" style={{ backgroundColor: PRIMARY, boxShadow: '0 0 0 3px #fff' }} />
      </div>

      {/* ProfileCard (matches lib/Widgets/ProfileCard.dart) */}
      <div className="mx-2 mb-1.5 rounded-xl bg-white p-2 flex items-center gap-2.5" style={{ border: '1px solid #DFDFDF' }}>
        <Avatar grad="linear-gradient(135deg,#1577B8,#4BADE6)" char="S" online size={34} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <span className="text-[11px] font-bold truncate" style={{ color: '#00263F' }}>Sarah</span>
            <span className="text-[11px]">🇬🇧</span>
            <span className="text-[11px] font-semibold text-slate-900 truncate">United Kingdom</span>
          </div>
          <p className="text-[9px] font-semibold" style={{ color: PRIMARY }}>1.2 km away · online</p>
        </div>
        <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: SURFACE }}>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" style={{ fill: PRIMARY }}><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
        </div>
      </div>
      <BottomNav active="Map" />
    </div>
  )
}

/* ---------------------------------- TIPS --------------------------------- */
function TipsScreen() {
  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: '#F7F9FC' }}>
      <StatusBar />
      <div className="flex-1 overflow-hidden px-3.5 pt-1 flex flex-col gap-3">
        {/* search */}
        <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2" style={{ border: '1px solid #E3E8EF' }}>
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[10px] text-slate-400">Search tips...</span>
        </div>
        {/* header row */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[12px] font-extrabold text-slate-900">Local Guide</p>
            <p className="text-[9px]" style={{ color: '#6E6E6E' }}>Showing content near you</p>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-bold text-white" style={{ backgroundColor: PRIMARY }}>
            <span className="text-[12px] leading-none">＋</span> Add Tip
          </div>
        </div>
        {/* toggle */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-slate-900">Show:</span>
          <div className="flex-1"><SegToggle left="Countrymen" right="Global" leftActive={false} /></div>
        </div>
        {/* tip card (matches lib/Widgets/UserTipCard.dart) */}
        <div className="bg-white rounded-2xl p-3" style={{ border: '1px solid #E3E8EF' }}>
          <div className="flex items-center gap-2 mb-2">
            <Avatar grad="linear-gradient(135deg,#F5A623,#4BADE6)" char="A" size={30} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-bold text-slate-900">Alex</span>
                <span className="text-[10px]">🇺🇸</span>
              </div>
              <p className="text-[8px]" style={{ color: '#6E6E6E' }}>Bangkok, Thailand · 2h ago</p>
            </div>
            <span className="text-[7px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: SURFACE, color: PRIMARY }}>FOOD</span>
          </div>
          <p className="text-[10px] font-bold text-slate-900 mb-1">Best pad see ew in the old town</p>
          <p className="text-[9px] leading-relaxed mb-2" style={{ color: '#697586' }}>Thip Samai is touristy but the place two doors down is where locals actually eat. Go before 7pm.</p>
          <div className="flex items-center gap-1 mb-2.5">
            <MapPin className="w-2.5 h-2.5" style={{ color: PRIMARY }} />
            <span className="text-[8px] font-medium" style={{ color: PRIMARY }}>Thip Samai, Bangkok</span>
          </div>
          <div className="flex items-center gap-4 pt-2" style={{ borderTop: '1px solid #EEF2F6' }}>
            <span className="flex items-center gap-1 text-[9px]" style={{ color: '#24B75A' }}><ThumbsUp className="w-3 h-3" /> 47</span>
            <span className="flex items-center gap-1 text-[9px] text-slate-400"><ThumbsDown className="w-3 h-3" /> 2</span>
          </div>
        </div>
      </div>
      <BottomNav active="Tips" />
    </div>
  )
}

/* ---------------------------------- CHAT --------------------------------- */
function ChatScreen() {
  const msgs = [
    { t: 'Hey! Just landed in Bangkok 🙌', me: false },
    { t: 'Welcome! What area are you in?', me: true },
    { t: 'Sukhumvit. Any food recs nearby? 🍜', me: false },
    { t: 'Thong Lor street food is unreal — 10 min walk', me: true },
    { t: "Perfect, let's grab dinner there 🤙", me: false },
  ]
  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: '#F7F9FC' }}>
      <StatusBar />
      <div className="flex items-center gap-2.5 px-3 py-2 bg-white" style={{ borderBottom: '1px solid #E3E8EF' }}>
        <ChevronLeft className="w-4 h-4 text-slate-700" />
        <Avatar grad="linear-gradient(135deg,#1577B8,#4BADE6)" char="J" online size={30} />
        <div>
          <p className="text-[11px] font-bold text-slate-900">James · 🇬🇧 London</p>
          <span className="text-[8px] font-semibold" style={{ color: '#24B75A' }}>Active now</span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden px-3 py-3 flex flex-col gap-2">
        {msgs.map((m, i) => (
          <div key={i} className={cn('flex', m.me ? 'justify-end' : 'justify-start')}>
            <div
              className="max-w-[78%] px-3 py-2 text-[10px] leading-relaxed"
              style={
                m.me
                  ? { backgroundColor: PRIMARY, color: '#fff', borderRadius: '14px 14px 4px 14px' }
                  : { backgroundColor: '#fff', color: '#0D121C', border: '1px solid #E3E8EF', borderRadius: '14px 14px 14px 4px' }
              }
            >
              {m.t}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 px-3 py-2.5 bg-white" style={{ borderTop: '1px solid #E3E8EF' }}>
        <div className="flex-1 rounded-full px-3 py-1.5" style={{ backgroundColor: '#EEF2F6' }}>
          <span className="text-[9px] text-slate-400">Message...</span>
        </div>
        <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: PRIMARY }}>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white"><path d="M2 21l21-9L2 3v7l15 2-15 2z" /></svg>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------- PROFILE -------------------------------- */
function ProfileScreen() {
  const visited = ['🇹🇭', '🇯🇵', '🇻🇳', '🇮🇩', '🇲🇾', '🇸🇬', '🇰🇭', '🇮🇳', '🇳🇵', '🇵🇹', '🇪🇸', '🇫🇷', '🇩🇪', '🇮🇹', '🇬🇷', '🇲🇦', '🇿🇦', '🇰🇪']
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="-mt-7 pt-7 px-4 pb-5" style={{ background: 'linear-gradient(135deg,#1577B8 0%,#00263F 100%)' }}>
        <StatusBar dark />
        <div className="flex items-center gap-3 mt-2">
          <div className="w-14 h-14 rounded-full ring-4 ring-white/90 flex items-center justify-center text-xl font-bold text-white" style={{ background: 'linear-gradient(135deg,#4BADE6,#1577B8)' }}>S</div>
          <div>
            <p className="text-[13px] font-extrabold text-white">Sarah K.</p>
            <p className="text-[9px] text-white/80">🇬🇧 London, UK</p>
          </div>
        </div>
      </div>
      <div className="px-4 -mt-3">
        <div className="bg-white rounded-2xl px-3 py-3 flex items-center justify-around shadow-card" style={{ border: '1px solid #E3E8EF' }}>
          {[{ v: '23', l: 'Countries' }, { v: '148', l: 'Connections' }, { v: '64', l: 'Tips' }].map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-[13px] font-extrabold" style={{ color: '#00263F' }}>{s.v}</p>
              <p className="text-[8px]" style={{ color: '#697586' }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 pt-3 flex-1 overflow-hidden">
        <p className="text-[10px] leading-relaxed mb-3" style={{ color: '#697586' }}>Solo traveler &amp; food lover. Currently exploring South-East Asia 🌏</p>
        <p className="text-[9px] font-bold uppercase tracking-wide mb-2" style={{ color: '#9AA4B2' }}>Countries visited</p>
        <div className="grid grid-cols-8 gap-1.5">
          {visited.map((f, i) => (
            <div key={i} className="aspect-square rounded-md flex items-center justify-center text-[12px]" style={{ backgroundColor: SURFACE }}>{f}</div>
          ))}
        </div>
      </div>
      <BottomNav active="Home" />
    </div>
  )
}

const screenComponents: Record<PhoneScreen, React.FC> = {
  map: MapScreen,
  chat: ChatScreen,
  tips: TipsScreen,
  profile: ProfileScreen,
}

const sizeClasses = {
  sm: 'w-44 h-[340px]',
  md: 'w-56 h-[440px]',
  lg: 'w-72 h-[560px]',
}

export default function PhoneMockup({
  screen = 'map',
  image,
  alt = 'Global Connect app screen',
  className,
  size = 'lg',
}: PhoneMockupProps) {
  const Screen = screenComponents[screen]
  const frame = sizeClasses[size]

  return (
    <div className={cn('relative', className)}>
      <div className={cn(frame, 'relative rounded-[2.5rem] bg-slate-900 p-1.5 shadow-phone ring-1 ring-white/10')}>
        {/* Inner screen fills the frame's padding box, so the bezel is even on all sides */}
        <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white relative">
          {/* notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 rounded-full z-20" />
          {image ? (
            // Real app screenshot (already includes its own status bar + bottom nav)
            <Image src={image} alt={alt} fill sizes="300px" className="object-cover object-center" priority />
          ) : (
            <div className="absolute inset-0 pt-7">
              <Screen />
            </div>
          )}
        </div>
        {/* side buttons */}
        <div className="absolute -right-1 top-24 w-1.5 h-12 bg-slate-700 rounded-r-lg" />
        <div className="absolute -left-1 top-20 w-1.5 h-8 bg-slate-700 rounded-l-lg" />
        <div className="absolute -left-1 top-32 w-1.5 h-8 bg-slate-700 rounded-l-lg" />
        <div className="absolute -left-1 top-44 w-1.5 h-8 bg-slate-700 rounded-l-lg" />
      </div>
    </div>
  )
}
