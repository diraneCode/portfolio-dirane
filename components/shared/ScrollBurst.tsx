"use client"

import { motion, useTransform, type MotionValue } from "motion/react"
import { cn } from "@/lib/utils"

/**
 * Étoile à rayons (inspirée de l'icône Claude) qui se reconstitue au scroll :
 * dispersés et estompés au départ, les rayons convergent un à un vers le centre
 * pendant que le texte s'allume. Pensé comme un filigrane : couleur et opacité
 * se règlent via `className` (currentColor).
 */

const SIZE = 400
const C = SIZE / 2
const R = 172 // longueur max d'un rayon
const INNER = 0.05 // départ des rayons (cœur presque plein)
const STROKE = 30

// Angle (°) + longueur relative : volontairement irréguliers, comme l'icône d'origine.
const RAYS: { a: number; l: number }[] = [
  { a: -90, l: 1 },
  { a: -62, l: 0.62 },
  { a: -34, l: 0.88 },
  { a: -4, l: 0.58 },
  { a: 24, l: 1 },
  { a: 56, l: 0.7 },
  { a: 88, l: 0.54 },
  { a: 116, l: 0.94 },
  { a: 146, l: 0.64 },
  { a: 176, l: 0.84 },
  { a: 206, l: 0.56 },
  { a: 238, l: 0.9 },
]

type RayProps = {
  progress: MotionValue<number>
  range: [number, number]
  angle: number
  length: number
  index: number
  reverse: boolean
}

function Ray({ progress, range, angle, length, index, reverse }: RayProps) {
  const t = useTransform(progress, range, reverse ? [1, 0] : [0, 1], { clamp: true })
  const rad = (angle * Math.PI) / 180
  const ux = Math.cos(rad)
  const uy = Math.sin(rad)
  // Distance de dispersion et sens de rotation propres à chaque rayon
  const fly = 110 + (index % 3) * 45
  const spin = index % 2 ? 55 : -55
  const x = useTransform(t, (v) => ux * fly * (1 - v))
  const y = useTransform(t, (v) => uy * fly * (1 - v))
  const rotate = useTransform(t, (v) => spin * (1 - v))
  const opacity = useTransform(t, [0, 1], [0.12, 1])

  return (
    <motion.line
      x1={C + ux * R * INNER}
      y1={C + uy * R * INNER}
      x2={C + ux * R * length}
      y2={C + uy * R * length}
      style={{ x, y, rotate, opacity }}
      strokeLinecap="round"
    />
  )
}

type Props = {
  /** Progression 0 → 1 (ex. scrollYProgress d'une section) */
  progress: MotionValue<number>
  /** Fenêtre de progression pendant laquelle l'étoile se reconstitue */
  range?: [number, number]
  /** Reconstitution (par défaut) ou décomposition au scroll */
  reverse?: boolean
  /** Rendu statique (prefers-reduced-motion) */
  still?: boolean
  className?: string
}

export function ScrollBurst({ progress, range = [0.05, 0.9], reverse = false, still = false, className }: Props) {
  const [from, to] = range
  const span = to - from
  // Chaque rayon dispose d'une fenêtre décalée : l'étoile se recompose rayon par rayon.
  const perRay = span * 0.45
  const step = (span - perRay) / (RAYS.length - 1)
  const rotateAll = useTransform(progress, [from, to], reverse ? [0, -40] : [-40, 0])

  return (
    <div className={cn("pointer-events-none absolute", className)} aria-hidden>
      <motion.svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="h-auto w-full"
        style={still ? undefined : { rotate: rotateAll }}
        stroke="currentColor"
        strokeWidth={STROKE}
        fill="none"
      >
        {RAYS.map((r, i) => {
          if (still) {
            const rad = (r.a * Math.PI) / 180
            const ux = Math.cos(rad)
            const uy = Math.sin(rad)
            return (
              <line
                key={i}
                x1={C + ux * R * INNER}
                y1={C + uy * R * INNER}
                x2={C + ux * R * r.l}
                y2={C + uy * R * r.l}
                strokeLinecap="round"
              />
            )
          }
          // Ordre pseudo-aléatoire pour éviter un balayage trop mécanique
          const order = (i * 7) % RAYS.length
          const start = from + order * step
          return (
            <Ray key={i} progress={progress} range={[start, start + perRay]} angle={r.a} length={r.l} index={i} reverse={reverse} />
          )
        })}
      </motion.svg>
    </div>
  )
}
