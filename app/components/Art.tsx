"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { ArrowUpRight, X } from "lucide-react"
import { Reveal } from "@/components/shared/Reveal"
import { Button } from "@/components/ui/button"
import { artPieces, artKindLabel, type ArtPiece } from "@/lib/artData"
import { site } from "@/lib/site"

const EASE = [0.22, 1, 0.36, 1] as const

export function Art() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState<ArtPiece | null>(null)

  return (
    <section id="art" className="section section-dark border-t border-white/10" aria-labelledby="art-title">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow text-ash">
            <span className="text-brand">07</span> &nbsp;—&nbsp; Art & création
          </p>
          <h2 id="art-title" className="mt-4 font-mono text-display-md font-medium tracking-tight text-paper">
            Mes activités
          </h2>
          <p className="mt-4 max-w-2xl text-ash">
            Créateur de contenu tech, je partage aussi en photo quelques moments de mon quotidien : événements,
            coulisses de projets et instants de vie. Un aperçu de mon univers hors écran.
          </p>
        </Reveal>

        {/* Grille uniforme : 3 colonnes, cartes portrait */}
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
          {artPieces.map((piece, i) => (
            <motion.figure
              key={piece.src}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.65, ease: EASE, delay: (i % 3) * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-night-2 transition-all duration-500 hover:border-white/30 md:rounded-3xl"
            >
              <button
                type="button"
                onClick={() => setActive(piece)}
                className="absolute inset-0 h-full w-full"
                aria-label={`Agrandir : ${piece.title}`}
              >
                <Image
                  src={piece.src}
                  alt={piece.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                {/* Légende discrète, uniquement au survol */}
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-night/90 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-left">
                    <span className="block text-sm font-semibold text-white">{piece.title}</span>
                    <span className="block font-mono text-[0.6rem] uppercase tracking-[0.16em] text-white/60">
                      {artKindLabel[piece.kind]} {piece.year && `· ${piece.year}`}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-white" />
                </figcaption>
              </button>
            </motion.figure>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-brand">Créateur de contenu tech</p>
            <p className="mt-2 text-ash">{site.content.pitch}</p>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <a href={site.content.url} target="_blank" rel="noopener noreferrer">
              {site.content.handle} sur {site.content.platform} <ArrowUpRight />
            </a>
          </Button>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-night/95 p-5 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Fermer"
              className="group absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-brand"
              onClick={() => setActive(null)}
            >
              <X className="size-4 transition-transform duration-300 group-hover:rotate-90" />
            </button>
            <motion.div
              initial={reduce ? false : { scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="relative max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-night-2">
                <Image src={active.src} alt={active.title} fill sizes="90vw" className="object-contain" />
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-white">
                <div>
                  <p className="text-lg font-semibold">{active.title}</p>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ash">
                    {artKindLabel[active.kind]} {active.year && `· ${active.year}`}
                  </p>
                </div>
                {active.href && (
                  <Button asChild>
                    <a href={active.href} target="_blank" rel="noopener noreferrer">
                      Ouvrir <ArrowUpRight />
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
