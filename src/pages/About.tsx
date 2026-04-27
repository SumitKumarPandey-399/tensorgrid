import { Section } from '../components/Section'
import { aboutContent } from '../data/content'

export default function About() {
  return (
    <Section title={aboutContent.title} subtitle={aboutContent.introduction}>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="glass-panel rounded-2xl p-6 shadow-soft">
          <h3 className="text-xl font-semibold text-slate-100">{aboutContent.visionTitle}</h3>
          <p className="mt-3 text-slate-300">{aboutContent.vision}</p>
        </article>
        <article className="glass-panel rounded-2xl p-6 shadow-soft">
          <h3 className="text-xl font-semibold text-slate-100">{aboutContent.missionTitle}</h3>
          <p className="mt-3 text-slate-300">{aboutContent.mission}</p>
        </article>
      </div>
    </Section>
  )
}
