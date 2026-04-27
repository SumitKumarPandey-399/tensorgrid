import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { siteContent } from '../data/content'
import { Logo } from './Logo'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="TensorGrid home">
          <Logo />
        </Link>
        <button
          type="button"
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {siteContent.labels.menu}
        </button>
        <nav className="hidden items-center gap-6 md:flex">
          {siteContent.navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-sm font-semibold text-cyan-300'
                  : 'text-sm text-slate-300 transition hover:text-white'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
      {isOpen && (
        <nav className="glass-panel border-x-0 border-b-0 border-t border-slate-800 px-4 py-3 md:hidden">
          <ul className="space-y-3">
            {siteContent.navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? 'text-sm font-semibold text-cyan-300' : 'text-sm text-slate-300'
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
