import { Link } from 'react-router-dom'
import { siteContent } from '../data/content'
import { Logo } from './Logo'

export function Footer() {
  const quickLinks = [
    { label: 'AI Solutions', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="relative mt-12 border-t border-slate-200 bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-50/80 to-transparent" />
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-lg text-sm text-slate-600">{siteContent.footerDescription}</p>
          <div className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Systems operational
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">{siteContent.labels.links}</h4>
          <ul className="mt-3 space-y-2">
            {siteContent.navLinks.map((link) => (
              <li key={link.path}>
                <Link className="text-sm text-slate-600 transition hover:text-blue-700" to={link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">{siteContent.labels.contact}</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>{siteContent.contact.email}</li>
            <li>{siteContent.contact.phone}</li>
            <li>{siteContent.contact.location}</li>
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {quickLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-xs font-medium text-slate-500 underline decoration-slate-300 underline-offset-4 transition hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {siteContent.brand}. AI for the future.
      </div>
    </footer>
  )
}
