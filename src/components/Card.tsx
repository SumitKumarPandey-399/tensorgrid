import type { ReactNode } from 'react'

type CardProps = {
  title: string
  description: string
  bullets?: string[]
  children?: ReactNode
}

export function Card({ title, description, bullets, children }: CardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm transition hover:border-sky-200 hover:shadow-md sm:px-7 sm:py-7">
      <h3 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
      {!!bullets?.length && (
        <ul className="mt-5 space-y-2 text-sm text-slate-600">
          {bullets.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" aria-hidden />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
      {children}
    </article>
  )
}
