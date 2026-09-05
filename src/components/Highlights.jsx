import Icon from './Icon'
import Reveal from './Reveal'
import { highlights } from '../data/portfolioData'

/** The quick-scan cards that sit directly under the hero. */
export default function Highlights() {
  return (
    <section className="highlights" aria-label="Quick highlights">
      <div className="container">
        <ul className="highlights__grid">
          {highlights.map((item, index) => (
            <Reveal as="li" key={item.title} className="highlight-card" delay={index * 70}>
              <span className="highlight-card__icon">
                <Icon name={item.icon} />
              </span>
              <h3 className="highlight-card__title">{item.title}</h3>
              <p className="highlight-card__text">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
