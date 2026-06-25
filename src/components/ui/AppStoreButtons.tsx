import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  APP_LAUNCHED,
  APP_STORE_URL,
  GOOGLE_PLAY_URL,
  NOTIFY_URL,
} from '@/lib/constants'

interface AppStoreButtonsProps {
  orientation?: 'horizontal' | 'vertical'
  className?: string
  size?: 'sm' | 'md'
  /** 'dark' = slate buttons (default), 'light' = white buttons for dark backgrounds */
  variant?: 'dark' | 'light'
}

const AppleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

const PlayIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M3.18 23.76A2 2 0 0 1 2 22V2a2 2 0 0 1 1.18-1.76l11.07 11.41L3.18 23.76z" fill="#4285F4" />
    <path d="M20.31 10.27L17.48 8.6l-3.23 3.03 3.23 3.04 2.86-1.66a2 2 0 0 0 0-2.74z" fill="#FBBC04" />
    <path d="M3.18 23.76L14.25 12.35l-3.23-3.03L3.18.24z" fill="#34A853" />
    <path d="M3.18.24l7.84 9.08 3.23-3.03L3.18.24z" fill="#EA4335" />
  </svg>
)

export default function AppStoreButtons({
  orientation = 'horizontal',
  className,
  size = 'md',
  variant = 'dark',
}: AppStoreButtonsProps) {
  const isSmall = size === 'sm'
  const isLight = variant === 'light'

  // Until the app is published, both buttons read "Coming to …" and send users
  // to the notify/contact page. Once APP_LAUNCHED is true (and URLs are set in
  // lib/constants.ts), they become real store links.
  const ios = APP_LAUNCHED && APP_STORE_URL
  const android = APP_LAUNCHED && GOOGLE_PLAY_URL

  const stores = [
    {
      live: !!ios,
      href: ios ? APP_STORE_URL : NOTIFY_URL,
      external: !!ios,
      icon: <AppleIcon className={cn(isSmall ? 'w-5 h-5' : 'w-7 h-7')} />,
      eyebrow: ios ? 'Download on the' : 'Coming to',
      name: 'App Store',
      label: ios ? 'Download Global Connect on the App Store' : 'Get notified about the iOS app',
    },
    {
      live: !!android,
      href: android ? GOOGLE_PLAY_URL : NOTIFY_URL,
      external: !!android,
      icon: <PlayIcon className={cn(isSmall ? 'w-5 h-5' : 'w-7 h-7')} />,
      eyebrow: android ? 'Get it on' : 'Coming to',
      name: 'Google Play',
      label: android ? 'Get Global Connect on Google Play' : 'Get notified about the Android app',
    },
  ]

  return (
    <div
      className={cn(
        'flex gap-3',
        orientation === 'vertical' ? 'flex-col' : 'flex-col sm:flex-row',
        className
      )}
    >
      {stores.map((store) => (
        <Link
          key={store.name}
          href={store.href}
          aria-label={store.label}
          {...(store.external
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
          className={cn(
            'inline-flex items-center gap-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5',
            isLight
              ? 'bg-white hover:bg-slate-100 text-slate-900'
              : 'bg-slate-900 hover:bg-slate-800 text-white',
            isSmall ? 'px-4 py-2.5' : 'px-5 py-3.5'
          )}
        >
          {store.icon}
          <div>
            <div className={cn(isLight ? 'text-slate-500' : 'text-slate-400', isSmall ? 'text-[10px]' : 'text-xs')}>
              {store.eyebrow}
            </div>
            <div className={cn('font-semibold', isSmall ? 'text-sm' : 'text-base')}>
              {store.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
