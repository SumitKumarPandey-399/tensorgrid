import type { ReactNode } from 'react'

type SectionProps = {
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function Section({ title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section className={`py-14 sm:py-16 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-8 max-w-3xl">
            {title && <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">{title}</h2>}
            {subtitle && <p className="mt-3 text-base text-slate-300 sm:text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
