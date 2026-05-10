import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { siteContent } from '../data/content'
import { Logo } from './Logo'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/90 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link to="/" aria-label="TensorGrids home">
          <Logo />
        </Link>
        <button
          type="button"
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {siteContent.labels.menu}
        </button>
        <nav className="hidden items-center gap-8 md:flex">
          {siteContent.navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? 'text-sm font-semibold text-blue-700' : 'text-sm text-slate-600 transition hover:text-slate-900'
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to={siteContent.navCta.path}
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            {siteContent.navCta.label}
          </Link>
        </nav>
      </div>
      {isOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.15)] md:hidden">
          <ul className="space-y-3">
            {siteContent.navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? 'text-sm font-semibold text-blue-700' : 'text-sm text-slate-600'
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to={siteContent.navCta.path}
                onClick={() => setIsOpen(false)}
                className="block rounded-full bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                {siteContent.navCta.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
