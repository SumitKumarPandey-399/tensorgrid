import { Link } from 'react-router-dom'

export type HeroProps = {
  credibilityBadge: string
  kickerPrimary: string
  kickerSecondary: string
  titleLead: string
  titleAccent: string
  titleTrail: string
  subtitle: string
  ctaPrimary: string
  ctaSecondary: string
}

export function Hero({
  credibilityBadge,
  kickerPrimary,
  kickerSecondary,
  titleLead,
  titleAccent,
  titleTrail,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-[linear-gradient(180deg,#dbeefe_0%,#eef6ff_45%,#f8fafc_100%)] pt-8 sm:pt-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-[radial-gradient(ellipse_75%_60%_at_50%_0%,rgba(255,255,255,0.9),transparent_65%)]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-12 lg:px-8 lg:pb-20">
        <div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start lg:justify-start">
            <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-800 shadow-sm ring-1 ring-slate-200/90 sm:text-[11px]">
              {credibilityBadge}
            </span>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            <span className="rounded-full bg-sky-100/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-sky-900 ring-1 ring-sky-200/80 sm:text-[11px]">
              {kickerPrimary}
            </span>
            <span className="rounded-full bg-sky-100/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-sky-900 ring-1 ring-sky-200/80 sm:text-[11px]">
              {kickerSecondary}
            </span>
          </div>
          <h1 className="font-display mt-7 text-center text-[2rem] font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-left sm:text-[2.75rem] lg:text-[3.15rem]">
            {titleLead}
            <span className="italic text-blue-600">{titleAccent}</span>
            {titleTrail}
          </h1>
          <p className="mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-600 sm:text-left sm:text-lg">{subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              {ctaPrimary}
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-sky-400 hover:bg-sky-50"
            >
              {ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="relative rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-md sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-800">Trusted by teams shipping fast</p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-700 sm:grid-cols-3">
            <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center">Manufacturing</span>
            <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center">Energy</span>
            <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center">EPC</span>
            <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center">SaaS</span>
            <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center">Logistics</span>
            <span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center">Automation</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-600">
            We build AI systems with clear ownership, production observability, and measurable business outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}
