import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import ActivityCard from '../components/ActivityCard'
import { leadership, sections } from '../data/portfolioData'

export default function Leadership() {
  return (
    <Section id="leadership">
      <SectionTitle
        eyebrow="Initiative"
        title={sections.leadership.title}
        subtitle={sections.leadership.subtitle}
        headingId="leadership-heading"
      />

      <div className="card-grid card-grid--two">
        {leadership.map((activity, index) => (
          <Reveal key={activity.title} delay={index * 80}>
            <ActivityCard activity={activity} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
