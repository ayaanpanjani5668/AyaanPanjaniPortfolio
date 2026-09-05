import Reveal from './Reveal'

/**
 * The heading block used at the top of every section.
 * `id` is used for the "skip to" anchor relationship with the section itself.
 */
export default function SectionTitle({ title, subtitle, eyebrow, align = 'left', headingId }) {
  return (
    <Reveal className={`section-title section-title--${align}`}>
      {eyebrow ? <p className="section-title__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title__heading" id={headingId}>
        {title}
      </h2>
      <span className="section-title__rule" aria-hidden="true" />
      {subtitle ? <p className="section-title__subtitle">{subtitle}</p> : null}
    </Reveal>
  )
}
