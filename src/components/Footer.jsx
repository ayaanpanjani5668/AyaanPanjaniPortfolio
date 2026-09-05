import Icon from './Icon'
import { links, profile } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">
          © {year} {profile.name} <span aria-hidden="true">|</span> Built with React
        </p>

        <ul className="footer__social">
          <li>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${profile.name} on LinkedIn (opens in a new tab)`}
            >
              <Icon name="linkedin" />
            </a>
          </li>
          <li>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${profile.name} on GitHub (opens in a new tab)`}
            >
              <Icon name="github" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
