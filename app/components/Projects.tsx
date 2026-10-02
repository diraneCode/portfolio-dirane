"use client"

import { useCallback, useState } from "react"
import { Grid3X3, LayoutGrid, List } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"
import { ProjectCard } from "./ProjectCard"
import { ProjectOverlay } from "./ProjectOverlay"
import { projectData, type Project } from "@/lib/projectData"
import { cn } from "@/lib/utils"

type DesktopMode = "bento" | "grid"
type MobileMode = "vertical" | "grid"

function Toggle<T extends string>({ value, onChange, options }: { value: T; onChange: (v: T) => void; options: { value: T; label: string; Icon: React.ElementType }[] }) {
  return (
    <div className="inline-flex rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur" role="tablist" aria-label="Mode d'affichage">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="tab"
          aria-selected={value === o.value}
          onClick={() => onChange(o.value)}
          className={cn(
            "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all duration-300",
            value === o.value ? "bg-brand text-white shadow-glow" : "text-ash hover:text-paper"
          )}
        >
          <o.Icon className="size-4" />
          {o.label}
        </button>
      ))}
    </div>
  )
}

export function Projects() {
  const [desktop, setDesktop] = useState<DesktopMode>("bento")
  const [mobile, setMobile] = useState<MobileMode>("vertical")
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const open = useCallback((p: Project) => setActiveIndex(projectData.indexOf(p)), [])
  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(() => setActiveIndex((i) => (i === null ? null : (i + 1) % projectData.length)), [])
  const prev = useCallback(() => setActiveIndex((i) => (i === null ? null : (i - 1 + projectData.length) % projectData.length)), [])

  // Disposition bento (reprend l'agencement d'origine : 3 cartes, puis une grande + une large + deux petites)
  const bento = {
    top: [projectData[0], projectData[1], projectData[2]],
    big: projectData[3],
    wide: projectData[4],
    small: [projectData[5], projectData[6]],
  }

  return (
    <section id="projets" className="section section-dark border-t border-white/10" aria-labelledby="projets-title">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="06"
            eyebrow="Projets"
            id="projets-title"
            title="Une sélection de *réalisations*"
            lede="Sites vitrines, applications, outils métier (CRM, ERP) et maquettes : des projets livrés pour des clients ou menés à titre personnel. Cliquez pour ouvrir la présentation."
          />
          <Reveal delay={0.1}>
            <div className="hidden md:block">
              <Toggle
                value={desktop}
                onChange={setDesktop}
                options={[
                  { value: "bento", label: "Bento", Icon: LayoutGrid },
                  { value: "grid", label: "Grille", Icon: Grid3X3 },
                ]}
              />
            </div>
            <div className="md:hidden">
              <Toggle
                value={mobile}
                onChange={setMobile}
                options={[
                  { value: "vertical", label: "Vertical", Icon: List },
                  { value: "grid", label: "2 × 2", Icon: Grid3X3 },
                ]}
              />
            </div>
          </Reveal>
        </div>

        {/* Desktop */}
        <div className="mt-14 hidden md:block">
          {desktop === "bento" ? (
            <div className="grid grid-cols-6 gap-5">
              {bento.top.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08} className="col-span-2">
                  <ProjectCard project={p} onOpen={open} imageHeight="h-72 lg:h-80" />
                </Reveal>
              ))}
              <Reveal delay={0.1} className="col-span-3">
                <ProjectCard project={bento.big} onOpen={open} imageHeight="h-[32rem] lg:h-[36rem]" />
              </Reveal>
              <div className="col-span-3 grid grid-rows-[1fr_1fr] gap-5">
                <Reveal delay={0.15}>
                  <ProjectCard project={bento.wide} onOpen={open} imageHeight="h-[15.4rem] lg:h-[17.4rem]" />
                </Reveal>
                <div className="grid grid-cols-2 gap-5">
                  {bento.small.map((p, i) => (
                    <Reveal key={p.slug} delay={0.2 + i * 0.08}>
                      <ProjectCard project={p} onOpen={open} imageHeight="h-[15.4rem] lg:h-[17.4rem]" />
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
              {projectData.map((p, i) => (
                <Reveal key={p.slug} delay={Math.min(i * 0.06, 0.3)}>
                  <ProjectCard project={p} onOpen={open} imageHeight="h-64" />
                </Reveal>
              ))}
            </div>
          )}
        </div>

        {/* Mobile */}
        <div className="mt-10 md:hidden">
          {mobile === "vertical" ? (
            <div className="space-y-5">
              {projectData.map((p, i) => (
                <Reveal key={p.slug} delay={Math.min(i * 0.05, 0.2)}>
                  <ProjectCard project={p} onOpen={open} imageHeight="h-60" />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {projectData.map((p) => (
                <ProjectCard key={p.slug} project={p} onOpen={open} imageHeight="h-44" />
              ))}
            </div>
          )}
        </div>
      </div>

      <ProjectOverlay
        project={activeIndex === null ? null : projectData[activeIndex]}
        index={activeIndex ?? 0}
        total={projectData.length}
        onClose={close}
        onNext={next}
        onPrev={prev}
      />
    </section>
  )
}
