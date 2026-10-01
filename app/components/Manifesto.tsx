"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react"
import { BrushBlob } from "@/components/shared/BrushStroke"

// Mot = texte, accent = en orange
const sentence: { text: string; accent?: boolean }[] = [
  ..."Je conçois des interfaces que les gens".split(" ").map((t) => ({ text: t })),
  { text: "comprennent,", accent: true },
  ..."je code des produits qui".split(" ").map((t) => ({ text: t })),
  { text: "tiennent", accent: true },
  { text: "la", accent: true },
  { text: "route,", accent: true },
  ..."et j'automatise ce qui vous fait".split(" ").map((t) => ({ text: t })),
  { text: "perdre", accent: true },
  { text: "du", accent: true },
  { text: "temps.", accent: true },
]

function Word({ children, progress, range, accent }: { children: string; progress: MotionValue<number>; range: [number, number]; accent?: boolean }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  return (
    <motion.span style={{ opacity }} className={`mr-[0.25em] inline-block ${accent ? "text-brand" : ""}`}>
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
        <BrushBlob className="-right-24 top-8 hidden w-[380px] opacity-90 lg:block" />
        <div className="container-x">
          <p className="eyebrow text-ink-subtle">
            <span className="text-brand">03</span> &nbsp;—&nbsp; Manifeste
          </p>
          <p className="mt-6 max-w-5xl font-sans text-display-xl font-semibold text-ink">
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
