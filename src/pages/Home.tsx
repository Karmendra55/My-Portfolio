import GridBackground from "../components/background/GridBackground"
import NavBar from "../components/navigation/NavBar"

import Hero from "../sections/hero/Hero"
import About from "../sections/about/About"
import Vision from "../sections/about/Vision"

import Skills from "../sections/skills/Skills"
import Projects from "../sections/projects/Project"
import Experience from "../sections/experience/Experience"
import Research from "../sections/research/Research"
import Contact from "../sections/contact/Contact"
import CareerSnapshot from "../sections/journey/CareerSnapshot"
import Certifications from "../sections/certifications/Certifications"
import BuildingPreview from "../sections/building/BuildingPreview"

import Footer from "../components/ui/Footer"
import CursorGlow from "../components/ui/CursorGlow"
import ScrollProgress from "../components/ui/ScrollProgress"
import { certifications } from "../data/certifications"

const Home = () => {
  const featuredCertifications = certifications.slice(0, 6)
  return (
    <main className="relative bg-[#050505] text-white overflow-hidden">
      <ScrollProgress />
      <CursorGlow />

      <GridBackground />
      <NavBar />

      <Hero />
      <About />
      <Vision />
      <Skills />
      <Projects />
      <BuildingPreview />
      <Experience />
      <CareerSnapshot />
      <Research />
      <Certifications certifications={featuredCertifications} />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home