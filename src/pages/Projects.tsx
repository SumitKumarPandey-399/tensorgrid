import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { pageHeadings, projectsContent } from '../data/content'

export default function Projects() {
  return (
    <Section title={pageHeadings.projectsTitle} subtitle={pageHeadings.projectsSubtitle}>
      <div className="grid gap-6 md:grid-cols-2">
        {projectsContent.map((project) => (
          <Card key={project.title} title={project.title} description={project.description} />
        ))}
      </div>
    </Section>
  )
}
