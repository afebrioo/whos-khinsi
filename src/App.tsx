import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { PracticePillars } from './components/PracticePillars'
import { AboutSection } from './components/AboutSection'
import { ExperienceSection } from './components/ExperienceSection'
import { PublicationsSection } from './components/PublicationsSection'
import { CredentialsSection } from './components/CredentialsSection'
import { ContactFooter } from './components/ContactFooter'

export default function App() {
  useRevealOnScroll()

  return (
    <div id="top" className="min-h-screen bg-cream text-espresso">
      <Navbar />
      <main>
        <HeroSection />
        <PracticePillars />
        <AboutSection />
        <ExperienceSection />
        <PublicationsSection />
        <CredentialsSection />
      </main>
      <ContactFooter />
    </div>
  )
}
