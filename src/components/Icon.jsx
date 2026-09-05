import {
  FaAward,
  FaBars,
  FaBook,
  FaBookOpen,
  FaBolt,
  FaCalendarAlt,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaCode,
  FaDog,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFlask,
  FaFutbol,
  FaGithub,
  FaGraduationCap,
  FaHandsHelping,
  FaHeart,
  FaLightbulb,
  FaLinkedin,
  FaMedal,
  FaMicrochip,
  FaPalette,
  FaRobot,
  FaSchool,
  FaSeedling,
  FaTimes,
  FaTools,
  FaTrophy,
  FaUsers,
  FaUtensils,
  FaWater,
} from 'react-icons/fa'

/**
 * Every icon name you can use in src/data/portfolioData.js.
 * Add a new one by importing it above and adding a line here.
 */
const ICONS = {
  award: FaAward,
  bolt: FaBolt,
  book: FaBook,
  bookOpen: FaBookOpen,
  calendar: FaCalendarAlt,
  chart: FaChartLine,
  check: FaCheckCircle,
  clock: FaClock,
  code: FaCode,
  dog: FaDog,
  email: FaEnvelope,
  external: FaExternalLinkAlt,
  flask: FaFlask,
  github: FaGithub,
  hands: FaHandsHelping,
  heart: FaHeart,
  idea: FaLightbulb,
  linkedin: FaLinkedin,
  medal: FaMedal,
  menu: FaBars,
  chip: FaMicrochip,
  palette: FaPalette,
  robot: FaRobot,
  school: FaSchool,
  seedling: FaSeedling,
  soccer: FaFutbol,
  study: FaGraduationCap,
  close: FaTimes,
  tools: FaTools,
  trophy: FaTrophy,
  users: FaUsers,
  utensils: FaUtensils,
  water: FaWater,
}

/**
 * Renders an icon by name. Decorative by default, so screen readers skip it.
 * Falls back to a neutral icon if the name is not in the list above.
 */
export default function Icon({ name, className = '', title }) {
  const Glyph = ICONS[name] || FaTools
  return (
    <Glyph
      className={className}
      aria-hidden={title ? undefined : 'true'}
      role={title ? 'img' : undefined}
      title={title}
      focusable="false"
    />
  )
}
