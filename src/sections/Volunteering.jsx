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

      <div className="card-grid card-grid--three">
        {volunteering.map((activity, index) => (
          <Reveal key={activity.title} delay={index * 60}>
            <ActivityCard activity={activity} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
