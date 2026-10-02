"use client"

import { motion, useReducedMotion, type Variants } from "motion/react"
import { cn } from "@/lib/utils"
import { BrushUnderline } from "./BrushStroke"

type Props = {
  index?: string
  eyebrow: string
  /** Titre en police "brush". Entourez des mots d'*astérisques* pour les souligner d'un trait bleu. */
  title: string
  lede?: React.ReactNode
  align?: "left" | "center"
  tone?: "dark" | "light"
  className?: string
  id?: string
}

const EASE = [0.22, 1, 0.36, 1] as const

const wordVariants: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({ y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.08 + i * 0.07 } }),
}

export function SectionHeading({ index, eyebrow, title, lede, align = "left", tone = "dark", className, id }: Props) {
  const reduce = useReducedMotion()
  const light = tone === "light"
  // "*mots soulignés*" → segments soulignés d'un trait bleu
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
        {index && <span className={light ? "text-brand" : "text-brand-light"}>{index}</span>}
        {index && <span className={cn("h-px w-8", light ? "bg-ink/20" : "bg-white/20")} aria-hidden />}
        {eyebrow}
      </motion.p>

      <motion.h2
        id={id}
        initial={reduce ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        className={cn("mt-4 font-display text-brush-lg font-bold", light ? "text-ink" : "text-paper")}
      >
        {words.map(({ word, underline }, i) => (
          <span key={i} className="relative mr-[0.28em] inline-block align-baseline">
            <span className="inline-block overflow-hidden pb-[0.1em] align-baseline">
              <motion.span className="inline-block" variants={wordVariants} custom={i}>
                {word}
              </motion.span>
            </span>
            {underline && <BrushUnderline delay={0.35 + i * 0.07} />}
          </span>
        ))}
      </motion.h2>

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
