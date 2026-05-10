import { Link } from 'react-router-dom'

type CTAProps = {
  title: string
  description: string
  actionText: string
  actionPath: string
}

export function CTA({ title, description, actionText, actionPath }: CTAProps) {
  return (
    <section className="reveal-on-scroll py-14 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-sky-50 to-white px-6 py-9 shadow-md sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_-8%,rgba(56,189,248,0.12),transparent_58%)]"
          />
          <div className="relative">
            <h2 className="font-display text-2xl text-slate-900 sm:text-3xl">{title}</h2>
            <p className="mt-3 max-w-2xl text-slate-600">{description}</p>
            <Link
              className="mt-7 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              to={actionPath}
            >
              {actionText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
