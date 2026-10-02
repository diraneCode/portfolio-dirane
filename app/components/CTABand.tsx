import { Download } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa6"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/shared/Reveal"
import { Marquee } from "@/components/shared/Marquee"
import { BrandPattern } from "@/components/shared/BrandPattern"
import { DevisDrawer } from "./DevisDrawer"
import { site, whatsappUrl } from "@/lib/site"

const words = ["Design", "Code", "Mobile", "Automatisation", "UI/UX", "Next.js", "Figma", "IA"]

export function CTABand() {
  return (
    <section id="devis" aria-labelledby="cta-title">
      {/* Bandeau brush */}
      <div className="border-y border-white/10 bg-night py-5">
        <Marquee
          speed="fast"
          itemClassName="px-6"
          items={words.map((w, i) => (
            <span key={w} className={`font-display text-3xl md:text-5xl ${i % 2 ? "text-stroke text-paper" : "text-brand-light"}`}>
              {w} <span className="mx-3 text-paper/40">✦</span>
            </span>
          ))}
        />
      </div>

      <div className="noise relative overflow-hidden bg-brand py-24 text-white md:py-32">
        <BrandPattern className="text-white" variant="mark" opacity={0.12} size={120} fade={false} />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="eyebrow text-white/90">Travaillons ensemble</p>
            <h2 id="cta-title" className="mt-4 font-display text-brush-xl">
              Un projet en tête ?<br />
              <span className="font-sans text-display-lg font-semibold">Parlons-en.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Site vitrine, application mobile, outil métier ou refonte d&apos;interface : décrivez votre besoin et
              recevez une première estimation sous 48 h, sans engagement.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:items-stretch">
            <DevisDrawer variant="white" className="w-full sm:w-auto lg:w-full" />
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] text-night shadow-[0_0_60px_-10px_rgba(37,211,102,0.7)] hover:bg-[#1EBE5A] hover:text-night [&_svg]:size-5"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> Discuter sur WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:border-white hover:bg-white hover:text-brand">
              <a href={site.cvPath} download>
                <Download /> Télécharger mon CV
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
