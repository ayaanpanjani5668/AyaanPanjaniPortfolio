import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { academics, sections } from '../data/portfolioData'

export default function Academics() {
  return (
    <Section id="academics" tint>
      <SectionTitle
        eyebrow="Academics"
        title={sections.academics.title}
        subtitle={sections.academics.subtitle}
        headingId="academics-heading"
      />

      <ul className="fact-grid">
        {academics.facts.map((fact, index) => (
          <Reveal as="li" key={fact.label} className="fact-card" delay={index * 70}>
            <span className="fact-card__icon">
              <Icon name={fact.icon} />
            </span>
            <p className="fact-card__label">{fact.label}</p>
            <p className="fact-card__value">{fact.value}</p>
          </Reveal>
        ))}
      </ul>

      <div className="academics__panels">
        <Reveal className="panel">
          <h3 className="panel__title">
            <Icon name="book" /> Relevant Coursework
          </h3>
          <ul className="panel__list">
            {academics.coursework.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="panel" delay={90}>
          <h3 className="panel__title">
            <Icon name="study" /> Honors & AP Courses
          </h3>
          <ul className="panel__list">
            {academics.honors.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="panel panel--accent" delay={180}>
          <h3 className="panel__title">
            <Icon name="chip" /> Academic Interests
          </h3>
          <ul className="tag-list">
            {academics.interests.map((interest) => (
              <li className="tag tag--tech" key={interest}>
                {interest}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
