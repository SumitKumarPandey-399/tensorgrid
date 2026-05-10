import type { ReactNode } from 'react'

type SectionProps = {
  eyebrow?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function Section({ eyebrow, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section className={`py-14 sm:py-16 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || subtitle) && (
          <div className="mb-10 max-w-3xl space-y-3">
            {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-800">{eyebrow}</p>}
            {title && <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">{title}</h2>}
            {subtitle && <p className="text-base text-slate-600 sm:text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
