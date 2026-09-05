import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import CircuitBackdrop from '../components/CircuitBackdrop'
import { about } from '../data/portfolioData'

export default function About() {
  return (
    <Section id="about">
      <div className="about">
        <div className="about__text">
          <SectionTitle
            eyebrow="A little context"
            title={about.heading}
            headingId="about-heading"
          />
          {about.paragraphs.map((paragraph, index) => (
            <Reveal as="p" className="about__paragraph" key={index} delay={index * 80}>
              {paragraph}
            </Reveal>
          ))}

          {about.traits?.length ? (
            <Reveal className="about__traits" delay={160}>
              <ul className="tag-list" aria-label="Qualities I am working on">
                {about.traits.map((trait) => (
                  <li className="tag tag--outline" key={trait}>
                    {trait}
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </div>

        <Reveal className="about__aside" delay={120}>
          <CircuitBackdrop className="about__circuit" />
          <blockquote className="about__quote">
            “Progress usually shows up after the third or fourth attempt — so I keep going back to
            the bench.”
          </blockquote>
        </Reveal>
      </div>
    </Section>
  )
}
