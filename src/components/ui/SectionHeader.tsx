import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge?: string
  title: string
  titleHighlight?: string
  subtitle?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
  className?: string
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  theme = 'light',
  className,
}: SectionHeaderProps) {
  const isDark = theme === 'dark'
  const isCenter = align === 'center'

  return (
    <div
      className={cn(
        'max-w-3xl',
        isCenter && 'mx-auto text-center',
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4',
            isDark
              ? 'bg-blue-500/20 text-sky-300 border border-blue-500/20'
              : 'bg-blue-100 text-blue-700'
          )}
        >
          {badge}
        </div>
      )}
      <h2
        className={cn(
          'font-extrabold tracking-tight leading-tight font-jakarta',
          'text-3xl sm:text-4xl lg:text-5xl',
          isDark ? 'text-white' : 'text-slate-900'
        )}
      >
        {titleHighlight ? (
          <>
            {title}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            isDark ? 'text-slate-400' : 'text-slate-600',
            isCenter ? 'mx-auto' : ''
          )}
          style={{ maxWidth: '540px' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
