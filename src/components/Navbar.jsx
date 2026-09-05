import { useEffect, useState } from 'react'
import Icon from './Icon'
import scrollToSection from '../utils/scrollToSection'
import { navItems, profile } from '../data/portfolioData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  // Add a shadow to the bar once the page has scrolled a little.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav item for whichever section is currently on screen.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] },
    )

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Close the mobile menu with Escape, and stop the page scrolling behind it.
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const goTo = (event, id) => {
    event.preventDefault()
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a className="skip-link" href="#home">
        Skip to content
      </a>

      <nav className="navbar__inner container" aria-label="Main navigation">
        <a className="navbar__brand" href="#home" onClick={(e) => goTo(e, 'home')}>
          <span className="navbar__mark" aria-hidden="true">
            AP
          </span>
          <span className="navbar__name">{profile.name}</span>
        </a>

        <ul className="navbar__links" id="primary-navigation">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`navbar__link ${active === item.id ? 'is-active' : ''}`}
                aria-current={active === item.id ? 'page' : undefined}
                onClick={(e) => goTo(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`navbar__mobile ${open ? 'is-open' : ''}`}
        hidden={!open}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? 'is-active' : ''}
                onClick={(e) => goTo(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open ? <div className="navbar__scrim" onClick={() => setOpen(false)} aria-hidden="true" /> : null}
    </header>
  )
}
