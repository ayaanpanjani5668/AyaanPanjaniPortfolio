import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CircuitBackdrop from '../components/CircuitBackdrop'
import { links, sections } from '../data/portfolioData'

export default function Contact() {
  return (
    <Section id="contact" className="contact-section">
      <CircuitBackdrop className="contact__circuit" />

      <SectionTitle
        eyebrow="Contact"
        title={sections.contact.title}
        subtitle={sections.contact.subtitle}
        align="center"
        headingId="contact-heading"
      />

      <Reveal className="contact__actions">
        <a className="btn btn--primary" href={links.linkedin} target="_blank" rel="noopener noreferrer">
          <Icon name="linkedin" className="btn__icon" />
          LinkedIn
        </a>
        <a className="btn btn--ghost" href={links.github} target="_blank" rel="noopener noreferrer">
          <Icon name="github" className="btn__icon" />
          GitHub
        </a>
        <a className="btn btn--ghost" href={`mailto:${links.email}`}>
          <Icon name="email" className="btn__icon" />
          Email
        </a>
      </Reveal>

      <Reveal as="p" className="contact__note" delay={120}>
        Thanks for taking the time to look through my work.
      </Reveal>
    </Section>
  )
}
