import type { MetricItem } from '../data/content'

type MetricStripProps = {
  headline: string
  items: MetricItem[]
}

export function MetricStrip({ headline, items }: MetricStripProps) {
  return (
    <section className="reveal-on-scroll py-8 sm:py-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-sky-800">{headline}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {items.map((item) => (
            <article key={item.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="font-display text-3xl text-blue-700">{item.value}</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">{item.label}</p>
              <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
