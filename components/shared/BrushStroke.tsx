"use client"

import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

const EASE = [0.22, 1, 0.36, 1] as const

/** Trait fin dessiné au scroll, souligne un mot (utilisé par SectionHeading). */
export function BrushUnderline({ className, delay = 0.3 }: { className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  return (
    <svg
      viewBox="0 0 300 20"
      preserveAspectRatio="none"
      className={cn("pointer-events-none absolute -bottom-1.5 left-0 h-2.5 w-full text-brand md:h-3", className)}
      aria-hidden
    >
      <motion.path
        d="M4 12 C 70 4, 150 18, 296 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: EASE, delay }}
      />
    </svg>
  )
}

/**
 * Signe de marque minimal : une courbe fine à bouts ronds qui se trace au scroll,
 * ponctuée d'un point. Léger, non encombrant, à poser dans un coin de section.
 */
export function BrushBlob({ className, flip = false }: { className?: string; flip?: boolean }) {
  const reduce = useReducedMotion()
  return (
    <svg
      viewBox="0 0 320 160"
      className={cn("pointer-events-none absolute w-[260px] text-brand md:w-[340px]", flip && "-scale-x-100", className)}
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M14 128 C 70 36, 150 20, 212 70 S 290 118, 304 44"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.9 }}
        viewport={{ once: true, margin: "-5% 0px" }}
        transition={{ duration: 1.4, ease: EASE }}
      />
      <motion.circle
        cx="304"
        cy="24"
        r="6"
        fill="currentColor"
        initial={reduce ? false : { scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE, delay: 1.3 }}
        style={{ transformOrigin: "304px 24px" }}
      />
    </svg>
  )
}
