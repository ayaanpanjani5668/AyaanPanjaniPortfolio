import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

import About from './sections/About'
import Academics from './sections/Academics'
import Leadership from './sections/Leadership'
import Volunteering from './sections/Volunteering'
import Athletics from './sections/Athletics'
import Awards from './sections/Awards'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />

      <main id="main">
        <Hero />
        <Highlights />
        <About />
        <Academics />
        <Leadership />
        <Volunteering />
        <Athletics />
        <Awards />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
