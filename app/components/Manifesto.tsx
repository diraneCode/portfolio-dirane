"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"
import { BrushBlob } from "@/components/shared/BrushStroke"

// Mot = texte, accent = en orange
const sentence: { text: string; accent?: boolean }[] = [
  ..."J'aide les entreprises et les particuliers à".split(" ").map((t) => ({ text: t })),
  { text: "automatiser,", accent: true },
  ..."leur".split(" ").map((t) => ({ text: t })),
  { text: "business", accent: true },
  { text: "avec", accent: true },
  { text: "l'IA,", accent: true },
  ..."l'automatisation et les".split(" ").map((t) => ({ text: t })),
  { text: "Solutions digitales.", accent: true },
]

function Word({ children, progress, range, accent }: { children: string; progress: MotionValue<number>; range: [number, number]; accent?: boolean }) {
  // Interpolation de couleur (gris lisible → encre / bleu) : le contraste reste ≥ 4.5:1 à chaque étape.
  const color = useTransform(progress, range, accent ? ["#6B7FB8", "#2F5BEB"] : ["#767676", "#121212"])
  return (
    <motion.span style={{ color }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  )
}

/** Section plein écran : le texte s'allume mot à mot au fil du scroll. */
export function Manifesto() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })

  return (
    <section ref={ref} className="section-light relative h-[240vh]" aria-label="Manifeste">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <BrushBlob className="right-8 top-10 hidden lg:block" />
        <div className="container-x">
          <p className="eyebrow text-ink-subtle">
            <span className="text-brand">03</span> &nbsp;—&nbsp; Manifeste
          </p>
          {/* Version lisible pour les lecteurs d'écran et les audits : texte complet, sans atténuation */}
          <p className="sr-only">{sentence.map((w) => w.text).join(" ")}</p>
          <p className="mt-6 max-w-5xl font-display text-display-xl font-bold text-ink" aria-hidden>
            {sentence.map((w, i) => {
              const start = i / sentence.length
              const end = start + 1 / sentence.length
              return reduce ? (
                <span key={i} className={`mr-[0.25em] inline-block ${w.accent ? "text-brand" : ""}`}>
                  {w.text}
                </span>
              ) : (
                <Word key={i} progress={scrollYProgress} range={[start * 0.85, end * 0.85 + 0.1]} accent={w.accent}>
                  {w.text}
                </Word>
              )
            })}
          </p>
        </div>
      </div>
    </section>
  )
}
