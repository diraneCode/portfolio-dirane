import { HeroSection } from "./components/Hero"
import { ServiceSection } from "./components/Services"
import { ProjectSection } from "./components/Projects"
import { ContactSection } from "./components/Contact"
import { FooterSection } from "./components/Footer"
import { CVSection } from "./components/CVSection"
import { LogoSection } from "./components/LogoSection"
import { StatSection } from "./components/StatSection"
import { GallerySection } from "./components/GallerySection"
import { TestimonialSection } from "./components/Testimonial"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 relative">
      <div className="relative z-10">
        <HeroSection />
        <StatSection />
        <ProjectSection />
        <ServiceSection />
        <LogoSection />
        <ContactSection />
        <CVSection />
        <TestimonialSection />
        <GallerySection />
        <FooterSection />
      </div>
    </main>
  )
}

