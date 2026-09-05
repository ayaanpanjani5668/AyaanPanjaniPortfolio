/**
 * Understated engineering decoration: a faint grid, a few circuit traces,
 * and solder-point dots. Purely visual, so it is hidden from screen readers.
 */
export default function CircuitBackdrop({ className = '' }) {
  return (
    <svg
      className={`circuit ${className}`.trim()}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="circuit-grid" width="25" height="25" patternUnits="userSpaceOnUse">
          <path d="M25 0H0V25" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
        </pattern>
      </defs>

      <rect width="400" height="400" fill="url(#circuit-grid)" opacity="0.55" />

      <g stroke="currentColor" strokeWidth="1.6" opacity="0.85" strokeLinecap="round">
        <path d="M20 90h70l30-30h90" />
        <path d="M40 300h110l40 40h120" />
        <path d="M330 120v80l-40 40" />
        <path d="M120 190h60l30 30h90" />
      </g>

      <g fill="currentColor" opacity="0.9">
        <circle cx="20" cy="90" r="4" />
        <circle cx="210" cy="60" r="4" />
        <circle cx="330" cy="120" r="4" />
        <circle cx="290" cy="240" r="4" />
        <circle cx="310" cy="340" r="4" />
        <circle cx="40" cy="300" r="4" />
        <circle cx="120" cy="190" r="4" />
      </g>

      <g stroke="currentColor" strokeWidth="1.4" opacity="0.6" fill="none">
        <rect x="150" y="120" width="46" height="46" rx="6" />
        <circle cx="270" cy="300" r="22" />
      </g>
    </svg>
  )
}
