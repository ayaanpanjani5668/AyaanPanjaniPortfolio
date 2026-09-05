import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import AwardCard from '../components/AwardCard'
import { awards, sections } from '../data/portfolioData'

export default function Awards() {
  return (
    <Section id="awards" tint>
      <SectionTitle
        eyebrow="Recognition"
        title={sections.awards.title}
        subtitle={sections.awards.subtitle}
        headingId="awards-heading"
      />

      <div className="card-grid card-grid--three">
        {awards.map((award, index) => (
          <Reveal key={award.name} delay={index * 80}>
            <AwardCard award={award} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
