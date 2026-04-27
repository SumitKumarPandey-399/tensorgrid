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
    <footer className="relative mt-10 border-t border-slate-800/80 bg-slate-950/70">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cyan-500/10 to-transparent" />
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-lg text-sm text-slate-300">{siteContent.footerDescription}</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Systems operational
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-100">{siteContent.labels.links}</h4>
          <ul className="mt-3 space-y-2">
            {siteContent.navLinks.map((link) => (
              <li key={link.path}>
                <Link className="text-sm text-slate-300 transition hover:text-cyan-300" to={link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-100">{siteContent.labels.contact}</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>{siteContent.contact.email}</li>
            <li>{siteContent.contact.phone}</li>
            <li>{siteContent.contact.location}</li>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            {quickLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="rounded-lg border border-slate-700 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-300 transition hover:border-cyan-400/45 hover:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800/80 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} TensorGrid. Built for next-generation AI products.
      </div>
    </footer>
  )
}
