import Icon from './Icon'

/** A single award. `tier` only changes the medal colour (gold/silver/repeat). */
export default function AwardCard({ award }) {
  const { name, organization, year, description, icon = 'medal', tier = 'default', image, imageAlt } = award

  return (
    <article className={`award-card award-card--${tier}`}>
      {image ? (
        <div className="award-card__media">
          <img src={image} alt={imageAlt || `${name} award photo`} loading="lazy" decoding="async" />
        </div>
      ) : null}

      <div className="award-card__row">
        <span className="award-card__icon">
          <Icon name={icon} />
        </span>

        <div>
          <h3 className="award-card__name">{name}</h3>
          <p className="award-card__org">
            {organization}
            {year ? <span className="award-card__year"> · {year}</span> : null}
          </p>
          {description ? <p className="award-card__description">{description}</p> : null}
        </div>
      </div>
    </article>
  )
}
