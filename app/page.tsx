import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Manifesto } from "./components/Manifesto"
import { Experience } from "./components/Experience"
import { Services } from "./components/Services"
import { Projects } from "./components/Projects"
import { Art } from "./components/Art"
import { Tools } from "./components/Tools"
import { Testimonials } from "./components/Testimonials"
import { Gallery } from "./components/Gallery"
import { CTABand } from "./components/CTABand"
import { Contact } from "./components/Contact"

export default function Home() {
  return (
    <main id="contenu" className="relative">
      <Hero />
      <About />
      <Manifesto />
      <Experience />
      <Services />
      <Projects />
      <Art />
      <Tools />
      <Testimonials />
      <Gallery />
      <CTABand />
      <Contact />
    </main>
  )
}
