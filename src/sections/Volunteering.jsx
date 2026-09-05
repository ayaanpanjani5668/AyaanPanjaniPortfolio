import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import ActivityCard from '../components/ActivityCard'
import { sections, volunteering } from '../data/portfolioData'

export default function Volunteering() {
  return (
    <Section id="volunteering" tint>
      <SectionTitle
        eyebrow="Community"
        title={sections.volunteering.title}
        subtitle={sections.volunteering.subtitle}
        headingId="volunteering-heading"
      />

      <ol className="timeline">
        {volunteering.map((activity, index) => (
          <Reveal as="li" className="timeline__item" key={activity.title} delay={index * 60}>
            <span className="timeline__marker" aria-hidden="true" />
            <ActivityCard activity={activity} variant="timeline" />
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
