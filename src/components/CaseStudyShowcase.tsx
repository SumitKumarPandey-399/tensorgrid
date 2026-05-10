import { Link } from 'react-router-dom'
import type { CaseStudyItem } from '../data/content'

type CaseStudyShowcaseProps = {
  items: CaseStudyItem[]
}

export function CaseStudyShowcase({ items }: CaseStudyShowcaseProps) {
  return (
    <div className="divide-y divide-slate-200">
      {items.map((study) => (
        <article key={study.title} className="py-12 first:pt-0 last:pb-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-800">{study.eyebrow}</p>
          <h3 className="font-display mt-3 text-2xl leading-tight text-slate-900 sm:text-[1.85rem]">{study.title}</h3>
          <p className="mt-2 text-sm text-slate-500">{study.context}</p>
          <blockquote className="mt-6 text-base italic leading-relaxed text-slate-600 sm:text-[1.05rem]">
            “{study.quote}”
            <footer className="mt-3 text-xs font-semibold not-italic text-slate-500">— {study.attribution}</footer>
          </blockquote>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {study.stats.map((stat) => (
              <div key={stat.label} className="min-w-[5.5rem]">
                <p className="font-display text-2xl text-blue-700 sm:text-[1.75rem]">{stat.value}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">{study.takeaway}</p>
          <Link
            to={study.ctaPath}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-900"
          >
            {study.ctaLabel}
            <span aria-hidden className="text-blue-600">
              →
            </span>
          </Link>
        </article>
      ))}
    </div>
  )
}
