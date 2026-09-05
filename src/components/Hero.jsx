import CircuitBackdrop from './CircuitBackdrop'
import Icon from './Icon'
import scrollToSection from '../utils/scrollToSection'
import { links, profile } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="home-heading">
      <CircuitBackdrop className="hero__circuit" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__pulse" aria-hidden="true" />
            {profile.status}
          </p>

          <h1 className="hero__name" id="home-heading">
            {profile.name}
          </h1>

          <p className="hero__headline">{profile.headline}</p>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={() => scrollToSection('projects')}>
              View My Projects
              <Icon name="external" className="btn__icon" />
            </button>

            <a
              className="btn btn--ghost"
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" className="btn__icon" />
              LinkedIn
            </a>

            <a
              className="btn btn--ghost"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" className="btn__icon" />
              GitHub
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <div className="portrait">
            <img
              src={profile.photo}
              alt={profile.photoAlt}
              width="900"
              height="1120"
              loading="eager"
              decoding="async"
            />
          </div>
          <p className="portrait__caption">{profile.photoCaption}</p>
          <span className="portrait__dots" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
