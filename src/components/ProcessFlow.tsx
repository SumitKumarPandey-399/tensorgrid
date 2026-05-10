import type { ProcessStep } from '../data/content'

type ProcessFlowProps = {
  title: string
  subtitle: string
  steps: ProcessStep[]
}

export function ProcessFlow({ title, subtitle, steps }: ProcessFlowProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h3 className="font-display text-3xl text-slate-900 sm:text-4xl">{title}</h3>
        <p className="mt-4 max-w-xl text-slate-600">{subtitle}</p>
        <div className="mt-8 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-sky-50/90 px-5 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">Live checks</p>
            <p className="mt-2 text-sm text-slate-700">Identity match · AML screen · anomaly score</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-sky-50/90 px-5 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">Decision output</p>
            <p className="mt-2 text-sm text-slate-700">Pass / Review / Reject with explainable traces</p>
          </div>
        </div>
      </div>
      <ol className="space-y-4">
        {steps.map((step, idx) => (
          <li
            key={step.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-300 hover:shadow-md"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">Step {idx + 1}</p>
            <h4 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
