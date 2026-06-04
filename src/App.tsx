import { AboutSkills } from './components/AboutSkills'
import { Contact } from './components/Contact'
import { GooeyBackground } from './components/GooeyBackground'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { References } from './components/References'

function App() {
  return (
    <GooeyBackground>
      <Navbar />
      <main>
        <Hero />
        <AboutSkills />
        <Projects />
        <References />
        <Contact />
      </main>
    </GooeyBackground>
  )
}

export default App