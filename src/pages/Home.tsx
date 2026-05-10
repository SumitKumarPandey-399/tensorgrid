import { useEffect } from 'react'
import { CaseStudyShowcase } from '../components/CaseStudyShowcase'
import { CTA } from '../components/CTA'
import { Card } from '../components/Card'
import { Hero } from '../components/Hero'
import { MetricStrip } from '../components/MetricStrip'
import { ProcessFlow } from '../components/ProcessFlow'
import { QuoteBand } from '../components/QuoteBand'
import { Section } from '../components/Section'
import { faqContent, homeContent, pageHeadings } from '../data/content'

export default function Home() {
  useEffect(() => {
    let observer: IntersectionObserver | null = null
    let raf1 = 0
    let raf2 = 0
    let disposed = false

    const setup = () => {
      if (disposed) return
      const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal-on-scroll'))
      if (!elements.length) return

      const showAll = () => elements.forEach((el) => el.classList.add('is-visible'))

      if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
        showAll()
        return
      }

      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
        showAll()
        return
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer?.unobserve(entry.target)
            }
          })
        },
        {
          // Positive bottom margin enlarges the root so entries fire slightly before they enter view.
          threshold: [0, 0.06, 0.12],
          rootMargin: '0px 0px 20% 0px',
        },
      )

      elements.forEach((el) => observer!.observe(el))
    }

    // After lazy route paint, ensure layout exists before querying nodes.
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(setup)
    })

    // Last resort only: avoid permanently hidden blocks if IO never fires (edge browsers).
    const safetyTimer = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.reveal-on-scroll:not(.is-visible)').forEach((el) => {
        el.classList.add('is-visible')
      })
    }, 15000)

    return () => {
      disposed = true
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      observer?.disconnect()
      window.clearTimeout(safetyTimer)
    }
  }, [])

  return (
    <>
      <Hero {...homeContent.hero} />

      <section className="reveal-on-scroll py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <QuoteBand quote={homeContent.quote.body} />
        </div>
      </section>

      <Section className="reveal-on-scroll py-8 sm:py-10" eyebrow={pageHeadings.homePartners}>
        <div className="flex flex-wrap gap-3">
          {homeContent.partnerLogos.map((partner) => (
            <span key={partner} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
              {partner}
            </span>
          ))}
        </div>
      </Section>

      <MetricStrip headline={homeContent.metricHeadline} items={homeContent.metrics} />

      <Section className="reveal-on-scroll" eyebrow={pageHeadings.homeProcess}>
        <ProcessFlow title={homeContent.processTitle} subtitle={homeContent.processSubtitle} steps={homeContent.processSteps} />
      </Section>

      <Section
        className="reveal-on-scroll"
        eyebrow={pageHeadings.homeCaseStudies}
        title={homeContent.beyondTitle}
        subtitle={homeContent.beyondSubtitle}
      >
        <CaseStudyShowcase items={homeContent.caseStudies} />
      </Section>

      <Section className="reveal-on-scroll" eyebrow="Why teams choose us" title={pageHeadings.homeWhatWeDo}>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">{homeContent.whatWeDo}</p>
      </Section>

      <Section className="reveal-on-scroll" title={pageHeadings.homeCoreServices}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeContent.coreServices.map((service) => (
            <Card key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </Section>

      <Section className="reveal-on-scroll" title={pageHeadings.homeWhyChooseUs}>
        <ul className="max-w-3xl space-y-4 text-base text-slate-600">
          {homeContent.reasons.map((reason) => (
            <li key={reason} className="flex gap-3">
              <span className="mt-2 inline-block h-2 w-2 flex-none shrink-0 rounded-full bg-sky-500" aria-hidden />
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="reveal-on-scroll" eyebrow={pageHeadings.homeIndustries} title={homeContent.industriesTitle}>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {homeContent.industries.map((industry) => (
            <div key={industry} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
              {industry}
            </div>
          ))}
        </div>
      </Section>

      <Section className="reveal-on-scroll" title={homeContent.faqPreviewTitle}>
        <div className="grid gap-4 md:grid-cols-2">
          {faqContent.slice(0, 4).map((item) => (
            <article key={item.question} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">{item.question}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTA {...homeContent.cta} />
    </>
  )
}
