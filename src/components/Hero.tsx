import { Link } from 'react-router-dom'

type HeroProps = {
  title: string
  subtitle: string
  ctaPrimary: string
  ctaSecondary: string
}

export function Hero({ title, subtitle, ctaPrimary, ctaSecondary }: HeroProps) {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="text-center lg:text-left">
          <span className="inline-flex rounded-full border border-cyan-400/35 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            AI Native Product Studio
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">{subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              to="/contact"
              className="rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:opacity-95"
            >
              {ctaPrimary}
            </Link>
            <Link
              to="/services"
              className="rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/45 hover:bg-slate-900"
            >
              {ctaSecondary}
            </Link>
          </div>
        </div>
        <div className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/25 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-indigo-500/25 blur-3xl" />
          <div className="relative grid gap-4">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/75 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Live intelligence</p>
              <p className="mt-2 text-2xl font-semibold text-slate-100">98.4%</p>
              <p className="text-sm text-slate-300">Model confidence across active pipelines</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-700/80 bg-slate-900/75 p-4">
                <p className="text-xs text-slate-300">Agents Deployed</p>
                <p className="mt-1 text-xl font-semibold text-cyan-300">24</p>
              </div>
              <div className="rounded-2xl border border-slate-700/80 bg-slate-900/75 p-4">
                <p className="text-xs text-slate-300">Latency</p>
                <p className="mt-1 text-xl font-semibold text-blue-300">118ms</p>
              </div>
            </div>
            <svg viewBox="0 0 400 120" className="mt-1 h-24 w-full">
              <defs>
                <linearGradient id="hero-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
              <path d="M0 80 C40 50, 70 90, 110 62 C145 36, 175 72, 210 56 C245 40, 270 64, 300 50 C330 35, 360 46, 400 24" fill="none" stroke="url(#hero-line)" strokeWidth="3" strokeLinecap="round" />
              <path d="M0 112 L400 112" stroke="#334155" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
