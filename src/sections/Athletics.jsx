import Section from '../components/Section'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { athletics, sections } from '../data/portfolioData'

export default function Athletics() {
  return (
    <Section id="athletics" className="athletics-section">
      <SectionTitle
        eyebrow="On the field"
        title={sections.athletics.title}
        subtitle={sections.athletics.subtitle}
        headingId="athletics-heading"
      />

      <div className="card-grid card-grid--two">
        {athletics.map((sport, index) => (
          <Reveal key={sport.team} delay={index * 80}>
            <article className="sport-card">
              <Icon name={sport.icon || 'soccer'} className="sport-card__watermark" />

              <header className="sport-card__header">
                <h3 className="sport-card__title">{sport.sport}</h3>
                <p className="sport-card__team">{sport.team}</p>
              </header>

              <dl className="sport-card__stats">
                <div>
                  <dt>Years</dt>
                  <dd>{sport.years}</dd>
                </div>
                <div>
                  <dt>Position</dt>
                  <dd>{sport.position}</dd>
                </div>
              </dl>

              {sport.accomplishments?.length ? (
                <div className="sport-card__block">
                  <h4>Accomplishments</h4>
                  <ul className="checklist">
                    {sport.accomplishments.map((item) => (
                      <li key={item}>
                        <Icon name="check" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {sport.learned ? (
                <div className="sport-card__block">
                  <h4>What I learned</h4>
                  <p>{sport.learned}</p>
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
