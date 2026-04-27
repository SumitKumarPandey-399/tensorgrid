import type { ReactNode } from 'react'

type CardProps = {
  title: string
  description: string
  bullets?: string[]
  children?: ReactNode
}

export function Card({ title, description, bullets, children }: CardProps) {
  return (
    <article className="glass-panel rounded-2xl p-6 shadow-soft transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-glow">
      <h3 className="text-xl font-semibold text-slate-100">{title}</h3>
      <p className="mt-3 text-slate-300">{description}</p>
      {!!bullets?.length && (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
          {bullets.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
      {children}
    </article>
  )
}
