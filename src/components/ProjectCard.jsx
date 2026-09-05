import { useId, useState } from 'react'
import Icon from './Icon'

/**
 * A project card. The headline information (image, description, tech) is
 * always visible so it stays quick to scan; the engineering detail is behind
 * an accessible show/hide toggle for anyone who wants to read further.
 */
export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  const detailsId = useId()

  const { title, image, imageAlt, description, tech = [], built, challenge, learned, github, demo } =
    project

  const hasDetails = Boolean(built || challenge || learned)

  return (
    <article className="project-card">
      <div className="project-card__media">
        <img
          src={image || '/images/project-placeholder.jpg'}
          alt={imageAlt || `${title} project photo`}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        {tech.length > 0 ? (
          <ul className="tag-list" aria-label={`Technologies used in ${title}`}>
            {tech.map((item) => (
              <li className="tag tag--tech" key={item}>
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        {hasDetails ? (
          <>
            <button
              type="button"
              className="project-card__toggle"
              aria-expanded={open}
              aria-controls={detailsId}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? 'Hide details' : 'Build details'}
              <span className={`project-card__chevron ${open ? 'is-open' : ''}`} aria-hidden="true" />
            </button>

            <div className="project-card__details" id={detailsId} hidden={!open}>
              {built ? (
                <p>
                  <span className="project-card__label">What I built</span>
                  {built}
                </p>
              ) : null}
              {challenge ? (
                <p>
                  <span className="project-card__label">Challenge</span>
                  {challenge}
                </p>
              ) : null}
              {learned ? (
                <p>
                  <span className="project-card__label">What I learned</span>
                  {learned}
                </p>
              ) : null}
            </div>
          </>
        ) : null}

        {(github || demo) && (
          <div className="project-card__links">
            {github ? (
              <a href={github} target="_blank" rel="noopener noreferrer" className="link-button">
                <Icon name="github" /> Code
              </a>
            ) : null}
            {demo ? (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="link-button">
                <Icon name="external" /> Demo
              </a>
            ) : null}
          </div>
        )}
      </div>
    </article>
  )
}
