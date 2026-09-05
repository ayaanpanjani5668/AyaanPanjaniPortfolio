import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { projects, sections } from '../data/portfolioData'

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle
        eyebrow="Hands-on work"
        title={sections.projects.title}
        subtitle={sections.projects.subtitle}
        headingId="projects-heading"
      />

      <div className="card-grid card-grid--three">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 70}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
