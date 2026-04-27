import { useId } from 'react'

type LogoProps = {
  className?: string
  showWordmark?: boolean
}

export function Logo({ className = '', showWordmark = true }: LogoProps) {
  const gradientId = useId()

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/40 bg-slate-900 shadow-glow">
        <svg viewBox="0 0 40 40" className="h-6 w-6" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="55%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <path d="M8 10h24M8 20h24M8 30h24" stroke={`url(#${gradientId})`} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M10 8v24M20 8v24M30 8v24" stroke="#0f172a" strokeWidth="1.5" opacity="0.55" />
          <circle cx="20" cy="20" r="4.2" fill={`url(#${gradientId})`} />
        </svg>
      </span>
      {showWordmark && <span className="gradient-text text-lg font-bold tracking-tight">TensorGrid</span>}
    </div>
  )
}
