"use client"

import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

/** Trait de pinceau orange dessiné au scroll (souligne un mot). */
export function BrushUnderline({ className, delay = 0.3 }: { className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  return (
    <svg
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute -bottom-2 left-0 h-3 w-full text-brand md:h-4", className)}
      aria-hidden
    >
      <motion.path
        d="M3 15 C 60 4, 120 22, 180 10 S 270 6, 297 13"
        fill="none"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      />
    </svg>
  )
}

/** Tache de pinceau décorative (coins de section, style image 2). */
export function BrushBlob({ className, flip = false }: { className?: string; flip?: boolean }) {
  const reduce = useReducedMotion()
  return (
    <motion.svg
      viewBox="0 0 420 180"
      className={cn("pointer-events-none absolute text-brand", flip && "-scale-x-100", className)}
      initial={reduce ? false : { opacity: 0, scale: 0.8, rotate: -6 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M12 96c38-44 96-62 162-58 42 3 73 27 118 25 52-3 95-33 118-12 16 15-9 44-46 60-56 24-124 40-194 42-57 2-118 4-150-18-15-10-21-26-8-39Z"
      />
      <path
        fill="currentColor"
        opacity="0.75"
        d="M60 140c40-6 90 6 140-2 54-9 92-30 152-28 28 1 60 10 54 24-7 16-56 18-96 24-74 10-150 22-220 12-26-4-50-14-30-30Z"
      />
    </motion.svg>
  )
}
