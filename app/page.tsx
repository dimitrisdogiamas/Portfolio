import { Hero } from './components/hero/hero'
import { About } from './components/about/about'
import { Skills } from './components/skills/Skills'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { Navigation } from './components/Navigation'
import { DarkModeToggle } from './components/DarkModeToggle'

export default function Home() {
  return (
    <>
      <Navigation />
      <DarkModeToggle />
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}
