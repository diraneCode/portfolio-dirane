import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CVSection from "./components/CVSection"
import LogoSection from "./components/LogoSection"
import StatSection from "./components/StatSection"
import GallerySection from "./components/GallerySection"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 relative">
      <div className="relative z-10">
        <Hero />
        <StatSection />
        <Projects />
        <Skills />
        <LogoSection />
        <Contact />
        <CVSection />
        <GallerySection />
        <Footer />
      </div>
    </main> 
  )
}

