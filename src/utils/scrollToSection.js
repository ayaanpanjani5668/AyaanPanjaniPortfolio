/**
 * Smoothly scrolls to a section id and moves keyboard focus with it.
 * Honours the visitor's "reduce motion" setting.
 */
export default function scrollToSection(id) {
  const target = document.getElementById(id)
  if (!target) return

  const reduceMotion =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  target.setAttribute('tabindex', '-1')
  target.focus({ preventScroll: true })
}
