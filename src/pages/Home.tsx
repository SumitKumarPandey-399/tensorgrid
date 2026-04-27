import { CTA } from '../components/CTA'
import { Card } from '../components/Card'
import { Hero } from '../components/Hero'
import { Section } from '../components/Section'
import { homeContent, pageHeadings } from '../data/content'

export default function Home() {
  return (
    <>
      <Hero {...homeContent.hero} />

      <Section title={pageHeadings.homeWhatWeDo}>
        <p className="max-w-3xl text-base text-slate-300 sm:text-lg">{homeContent.whatWeDo}</p>
      </Section>

      <Section title={pageHeadings.homeCoreServices}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {homeContent.coreServices.map((service) => (
            <Card key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </Section>

      <Section title={pageHeadings.homeWhyChooseUs}>
        <ul className="list-disc space-y-3 pl-6 text-slate-300">
          {homeContent.reasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </Section>

      <CTA {...homeContent.cta} />
    </>
  )
}
