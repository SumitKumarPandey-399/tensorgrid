import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { pageHeadings, servicesContent } from '../data/content'

export default function Services() {
  return (
    <Section
      title={pageHeadings.servicesTitle}
      subtitle={pageHeadings.servicesSubtitle}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {servicesContent.map((service) => (
          <Card
            key={service.title}
            title={service.title}
            description={service.description}
            bullets={service.bullets}
          />
        ))}
      </div>
    </Section>
  )
}
