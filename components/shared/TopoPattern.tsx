"use client"

import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

const EASE = [0.22, 1, 0.36, 1] as const

// Courbes de niveau (relief topographique) : une même forme décalée vers l'extérieur.
const BASE = [
  "M300 420 C 320 380, 380 370, 400 330 S 460 290, 470 250 S 520 200, 540 170 S 600 130, 640 150",
  "M270 440 C 300 390, 360 380, 380 335 S 450 285, 460 240 S 510 185, 535 150 S 600 100, 660 125",
  "M240 460 C 280 400, 340 390, 360 340 S 440 280, 450 230 S 500 170, 530 130 S 600 70, 680 100",
  "M210 480 C 260 410, 320 400, 340 345 S 430 275, 440 220 S 490 155, 525 110 S 600 40, 700 75",
  "M180 500 C 240 420, 300 410, 320 350 S 420 270, 430 210 S 480 140, 520 90 S 600 10, 720 50",
  "M150 520 C 220 430, 280 420, 300 355 S 410 265, 420 200 S 470 125, 515 70 S 600 -20, 740 25",
  "M120 540 C 200 440, 260 430, 280 360 S 400 260, 410 190 S 460 110, 510 50 S 600 -50, 760 0",
  "M90 560 C 180 450, 240 440, 260 365 S 390 255, 400 180 S 450 95, 505 30 S 600 -80, 780 -25",
]

/**
 * Motif de courbes de niveau, dessiné au scroll. À placer dans un coin (overflow-hidden sur le parent).
 * Inspiré des cartes topographiques : un relief qui suggère le parcours et le terrain.
 */
export function TopoPattern({ className, strokeWidth = 2.2 }: { className?: string; strokeWidth?: number }) {
  const reduce = useReducedMotion()
  return (
    <svg viewBox="0 0 700 540" className={cn("pointer-events-none absolute", className)} fill="none" aria-hidden>
      {BASE.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 - i * 0.07 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.1 + i * 0.08 }}
        />
      ))}
    </svg>
  )
}
