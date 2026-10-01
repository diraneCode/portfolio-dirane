"use client"

import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"
import { BrushUnderline } from "./BrushStroke"

type Props = {
  index?: string
  eyebrow: string
  /** Titre en police "brush". Entourez des mots d'*astérisques* pour les souligner d'un trait orange. */
  title: string
  lede?: React.ReactNode
  align?: "left" | "center"
  tone?: "dark" | "light"
  className?: string
  id?: string
}

const EASE = [0.22, 1, 0.36, 1] as const

export function SectionHeading({ index, eyebrow, title, lede, align = "left", tone = "dark", className, id }: Props) {
  const reduce = useReducedMotion()
  const light = tone === "light"
  // "*mots soulignés*" → segments soulignés d'un trait orange
  const words = title
    .split("*")
    .flatMap((seg, i) => seg.split(/\s+/).filter(Boolean).map((word) => ({ word, underline: i % 2 === 1 })))

  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <motion.p
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5, ease: EASE }}
        className={cn("eyebrow flex items-center gap-3", align === "center" && "justify-center", light ? "text-ink-subtle" : "text-ash")}
      >
        {index && <span className="text-brand">{index}</span>}
        {index && <span className={cn("h-px w-8", light ? "bg-ink/20" : "bg-white/20")} aria-hidden />}
        {eyebrow}
      </motion.p>

      <h2 id={id} className={cn("mt-4 font-brush text-brush-lg", light ? "text-ink" : "text-paper")}>
        {words.map(({ word, underline }, i) => (
          <span key={i} className="relative mr-[0.28em] inline-block align-baseline">
            <span className="inline-block overflow-hidden pb-[0.1em] align-baseline">
              <motion.span
                className="inline-block"
                initial={reduce ? false : { y: "110%", rotate: 4 }}
                whileInView={{ y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.08 + i * 0.07 }}
              >
                {word}
              </motion.span>
            </span>
            {underline && <BrushUnderline delay={0.35 + i * 0.07} />}
          </span>
        ))}
      </h2>

      {lede && (
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          className={cn("mt-6 text-base leading-relaxed md:text-lg", light ? "text-ink-muted" : "text-ash")}
        >
          {lede}
        </motion.p>
      )}
    </div>
  )
}
