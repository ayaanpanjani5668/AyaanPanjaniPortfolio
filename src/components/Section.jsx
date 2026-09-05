/**
 * A semantic <section> with a stable id used by the navigation for
 * smooth scrolling, plus optional alternate background shading.
 */
export default function Section({ id, children, tint = false, className = '' }) {
  const headingId = `${id}-heading`
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`section ${tint ? 'section--tint' : ''} ${className}`.trim()}
    >
      <div className="container">{children}</div>
    </section>
  )
}
