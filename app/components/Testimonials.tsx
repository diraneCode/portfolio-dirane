import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"
import { BrushBlob } from "@/components/shared/BrushStroke"

const testimonials = [
  {
    quote:
      "Grâce à cette solution, notre gestion interne a gagné en efficacité. Dirane a su comprendre nos besoins et livrer un produit à la hauteur des standards internationaux.",
    name: "Estelle Nguimgo",
    designation: "Responsable Communication, Build Together Group",
  },
  {
    quote:
      "L'intégration du paiement NotchPay sur notre plateforme a facilité les transactions de nos clients au Cameroun et dans la sous-région. Un vrai plus pour notre entreprise.",
    name: "Mickaël Tchinda",
    designation: "CTO, Caline House",
  },
  {
    quote:
      "Le design du site de notre clinique reflète parfaitement notre image : professionnel, moderne et humain. Nos patients trouvent facilement toutes les informations dont ils ont besoin.",
    name: "Dr. Emilie Ndongo",
    designation: "Directrice, Clinique Sainte Monique",
  },
  {
    quote: "Un site vitrine élégant et fluide pour notre restaurant. Le design est à la fois attractif et fidèle à notre identité culinaire.",
    name: "Jean-Baptiste Kamdem",
    designation: "Fondateur, restaurant KMC",
  },
  {
    quote:
      "Nous avons été impressionnés par la qualité du travail et le respect des délais. Le nouveau site e-commerce a boosté nos ventes dès les premières semaines.",
    name: "Linda Awa",
    designation: "Responsable Marketing, Promo Store Cameroun",
  },
]

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("")
}

export function Testimonials() {
  return (
    <section id="temoignages" className="section section-light" aria-labelledby="temoignages-title">
      <BrushBlob className="-right-24 bottom-6 w-[400px] rotate-6 opacity-90" />
      <div className="container-x">
        <SectionHeading
          index="09"
          eyebrow="Témoignages"
          id="temoignages-title"
          tone="light"
          title="Ils m'ont fait *confiance*"
          lede="Des retours de clients et partenaires avec qui j'ai eu le plaisir de collaborer."
        />

        <div className="mt-14 columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08} className="break-inside-avoid">
              <figure className="group rounded-3xl border border-ink/10 bg-paper-2 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand hover:shadow-lift">
                <span className="font-brush text-6xl leading-none text-brand" aria-hidden>
                  “
                </span>
                <blockquote className="-mt-4 text-[0.98rem] leading-relaxed text-ink-muted">{t.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-night font-brush text-lg text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-subtle">{t.designation}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
