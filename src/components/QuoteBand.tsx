type QuoteBandProps = {
  quote: string
}

export function QuoteBand({ quote }: QuoteBandProps) {
  return (
    <figure className="relative mx-auto max-w-4xl text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(100%,520px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-300 to-transparent"
      />
      <blockquote className="font-display relative mt-12 border-l-4 border-sky-500 pl-6 text-left text-2xl leading-snug text-slate-700 sm:mt-14 sm:text-3xl lg:text-[2.05rem]">
        “{quote}”
      </blockquote>
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-2.5rem] left-1/2 h-px w-[min(100%,520px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-300 to-transparent"
      />
    </figure>
  )
}
