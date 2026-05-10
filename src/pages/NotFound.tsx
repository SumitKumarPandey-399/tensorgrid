import { Link } from 'react-router-dom'
import { siteContent } from '../data/content'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col px-4 py-24 text-center sm:py-28">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-sky-800">404</p>
      <h1 className="font-display mt-4 text-3xl tracking-tight text-slate-900 sm:text-4xl">
        This page couldn’t be found.
      </h1>
      <p className="mt-4 text-sm text-slate-600 sm:text-base">
        If you followed a bookmark or refreshed a deep link, the server must return the SPA shell for every path — this
        project includes Netlify and Vercel fallbacks in <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-800">public/_redirects</code> and{' '}
        <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-800">vercel.json</code>.
      </p>
      <Link
        to="/"
        className="mx-auto mt-8 inline-flex rounded-full border border-blue-200 bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Back to {siteContent.brand}
      </Link>
    </div>
  )
}
