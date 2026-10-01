import Link from "next/link"
import { ArrowUpRight, Check, Code2, PenTool, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"
import { BrushBlob } from "@/components/shared/BrushStroke"
import { BrandPattern } from "@/components/shared/BrandPattern"

const services = [
  {
    index: "01",
    title: "Développement web & mobile",
    description:
      "Des applications rapides, fluides et intuitives avec React, Next.js et React Native, du prototype à la mise en production.",
    features: ["Composants réutilisables", "Intégration d'APIs & Supabase", "Performance et SEO", "Déploiement automatisé"],
    Icon: Code2,
  },
  {
    index: "02",
    title: "UI/UX Design",
    description:
      "Des interfaces esthétiques et centrées utilisateur, conçues sur Figma avec une approche design thinking et un design system cohérent.",
    features: ["Prototypage Figma", "Design system", "Parcours utilisateur", "Cohérence visuelle"],
    Icon: PenTool,
  },
  {
    index: "03",
    title: "IA & Automatisation",
    description:
      "L'intelligence artificielle et l'automatisation au service de votre productivité : moins de tâches répétitives, plus de temps créatif.",
    features: ["Automatisation de workflows", "Intégration IA (GPT, Copilot)", "Assistants & chatbots", "Gain de productivité"],
    Icon: Sparkles,
  },
]

export function Services() {
  return (
    <section id="services" className="section section-dark" aria-labelledby="services-title">
      <BrushBlob className="-left-24 -top-10 w-[360px] rotate-12 opacity-80" />
      <BrandPattern className="text-white" variant="arc" opacity={0.05} size={140} />
      <div className="container-x">
        <SectionHeading
          index="05"
          eyebrow="Services"
          id="services-title"
          title="Ce que je peux faire *pour vous*"
          lede="Trois expertises complémentaires pour concevoir, construire et faire évoluer votre produit numérique."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-night-2 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-brand hover:bg-brand hover:text-white hover:shadow-glow md:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-white/5 text-brand transition-colors duration-500 group-hover:bg-white group-hover:text-brand">
                    <s.Icon className="size-5" />
                  </span>
                  <span className="font-brush text-3xl text-white/25 transition-colors duration-500 group-hover:text-white/50">{s.index}</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold leading-tight">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ash transition-colors duration-500 group-hover:text-white/85">{s.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-paper/85 transition-colors duration-500 group-hover:text-white">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand transition-colors duration-500 group-hover:text-white" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="#devis" className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold">
                  Demander un devis
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
