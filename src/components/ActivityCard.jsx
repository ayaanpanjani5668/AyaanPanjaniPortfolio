import Icon from './Icon'

/**
 * One activity — used for both Leadership cards and Volunteering timeline
 * entries. Every field is optional: rows are only rendered when data exists,
 * so you can add a short entry without it looking unfinished.
 */
export default function ActivityCard({ activity, variant = 'grid' }) {
  const {
    title,
    role,
    organization,
    grades,
    dates,
    hours,
    description,
    impact,
    skills = [],
    image,
    imageAlt,
    icon = 'tools',
  } = activity

  const timeframe = grades || dates

  return (
    <article className={`activity-card activity-card--${variant}`}>
      {image ? (
        <div className="activity-card__media">
          <img src={image} alt={imageAlt || `${title} activity photo`} loading="lazy" decoding="async" />
        </div>
      ) : null}

      <div className="activity-card__body">
        <header className="activity-card__header">
          <span className="activity-card__icon">
            <Icon name={icon} />
          </span>
          <div>
            <h3 className="activity-card__title">{title}</h3>
            {role ? <p className="activity-card__role">{role}</p> : null}
          </div>
        </header>

        {(organization || timeframe || hours) && (
          <ul className="activity-card__meta">
            {organization ? (
              <li>
                <Icon name="users" /> {organization}
              </li>
            ) : null}
            {timeframe ? (
              <li>
                <Icon name="calendar" /> {timeframe}
              </li>
            ) : null}
            {hours ? (
              <li>
                <Icon name="clock" /> {hours}
              </li>
            ) : null}
          </ul>
        )}

        {description ? <p className="activity-card__description">{description}</p> : null}

        {impact ? (
          <p className="activity-card__impact">
            <span className="activity-card__label">Impact</span>
            {impact}
          </p>
        ) : null}

        {skills.length > 0 ? (
          <ul className="tag-list" aria-label={`Skills developed through ${title}`}>
            {skills.map((skill) => (
              <li className="tag" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}
