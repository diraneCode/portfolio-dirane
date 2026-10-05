"use client"

import { useEffect } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion, type Variants } from "motion/react"
import { ArrowLeft, ArrowRight, ExternalLink, Figma, Github, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/projectData"

const EASE = [0.76, 0, 0.24, 1] as const

type Props = {
  project: Project | null
  index: number
  total: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

const OUT = [0.22, 1, 0.36, 1] as const

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: OUT, delay: 0.45 + d * 0.08 } }),
}

/** Présentation plein écran d'un projet : rideau qui monte, contenu en cascade. */
export function ProjectOverlay({ project, index, total, onClose, onPrev, onNext }: Props) {
  const reduce = useReducedMotion()

  // Verrouille le scroll de la page et gère le clavier
  useEffect(() => {
    if (!project) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNext()
      if (e.key === "ArrowLeft") onPrev()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [project, onClose, onNext, onPrev])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Projet ${project.name}`}
          className="fixed inset-0 z-[70] overflow-y-auto bg-night text-paper"
          initial={reduce ? { opacity: 0 } : { clipPath: "inset(100% 0 0 0)" }}
          animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0 0)" }}
          exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {/* Barre */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-night/80 px-5 py-4 backdrop-blur md:px-10">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ash">
              Projet <span className="text-brand-light">{String(index + 1).padStart(2, "0")}</span> / {String(total).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="group flex size-11 items-center justify-center rounded-full border border-white/15 transition-all hover:border-brand hover:bg-brand hover:text-white"
            >
              <X className="size-4 transition-transform duration-300 group-hover:rotate-90" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={project.slug} initial="hidden" animate="show" exit={{ opacity: 0, transition: { duration: 0.2 } }}>
              {/* Visuel principal */}
              <div className="relative h-[52vh] w-full overflow-hidden md:h-[62vh]">
                <motion.div
                  className="absolute inset-0"
                  initial={reduce ? false : { scale: 1.15, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: OUT, delay: 0.3 }}
                >
                  <Image src={project.image[0].src} alt={project.image[0].alt} fill priority sizes="100vw" className="object-cover" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
                <div className="container-x absolute inset-x-0 bottom-0 pb-8 md:pb-12">
                  <motion.p variants={item} custom={0} className="font-display text-2xl text-brand-light md:text-3xl">
                    {project.category} · {project.year}
                  </motion.p>
                  <motion.h2 variants={item} custom={1} className="mt-2 font-sans text-display-xl font-semibold">
                    {project.name}
                  </motion.h2>
                </div>
              </div>

              <div className="container-x grid gap-12 py-12 md:grid-cols-[1.2fr_0.8fr] md:py-16">
                <motion.div variants={item} custom={2}>
                  <p className="eyebrow text-ash">Le projet</p>
                  <p className="mt-4 text-lg leading-relaxed text-paper/90 md:text-xl">{project.fullDescription}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.link && project.link !== "#" && (
                      <Button asChild size="lg">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink /> Voir le projet
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button asChild size="lg" variant="outline">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github /> Code source
                        </a>
                      </Button>
                    )}
                    {project.Figma && (
                      <Button asChild size="lg" variant="outline">
                        <a href={project.Figma} target="_blank" rel="noopener noreferrer">
                          <Figma /> Maquette Figma
                        </a>
                      </Button>
                    )}
                  </div>
                </motion.div>

                <motion.aside variants={item} custom={3} className="space-y-6 md:border-l md:border-white/10 md:pl-10">
                  <div>
                    <p className="eyebrow text-ash">Technologies</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <li key={t} className="rounded-full border border-white/15 px-3 py-1 text-xs text-paper/85">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow text-ash">Catégorie</p>
                    <p className="mt-2 text-paper">{project.category}</p>
                  </div>
                  {project.role && (
                    <div>
                      <p className="eyebrow text-ash">Rôle</p>
                      <p className="mt-2 text-paper">{project.role}</p>
                    </div>
                  )}
                  <div>
                    <p className="eyebrow text-ash">Année</p>
                    <p className="mt-2 text-paper">{project.year}</p>
                  </div>
                </motion.aside>
              </div>

              {project.image.length > 1 && (
                <div className="container-x pb-16">
                  <motion.p variants={item} custom={4} className="eyebrow text-ash">
                    Aperçus
                  </motion.p>
                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    {project.image.slice(1).map((img, i) => (
                      <motion.div
                        key={img.src + i}
                        initial={reduce ? false : { opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-5% 0px" }}
                        transition={{ duration: 0.8, ease: OUT }}
                        className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-night-2"
                      >
                        <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation entre projets */}
              <div className="border-t border-white/10">
                <div className="container-x flex items-center justify-between gap-4 py-8">
                  <button type="button" onClick={onPrev} className="group inline-flex items-center gap-3 text-sm font-medium text-ash transition-colors hover:text-paper">
                    <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" /> Précédent
                  </button>
                  <button type="button" onClick={onNext} className="group inline-flex items-center gap-3 text-right font-semibold text-paper transition-colors hover:text-brand-light">
                    <span className="hidden font-display text-2xl md:inline">Projet suivant</span>
                    <span className="md:hidden">Suivant</span>
                    <span className="flex size-11 items-center justify-center rounded-full bg-brand text-white transition-transform group-hover:translate-x-1">
                      <ArrowRight className="size-4" />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
