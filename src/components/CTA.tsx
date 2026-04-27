import { Link } from 'react-router-dom'

type CTAProps = {
  title: string
  description: string
  actionText: string
  actionPath: string
}

export function CTA({ title, description, actionText, actionPath }: CTAProps) {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/25 bg-gradient-to-r from-slate-900 via-indigo-950/70 to-cyan-950/70 p-8 text-white shadow-glow sm:p-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-slate-200">{description}</p>
          <Link
            className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            to={actionPath}
          >
            {actionText}
          </Link>
        </div>
      </div>
    </section>
  )
}
