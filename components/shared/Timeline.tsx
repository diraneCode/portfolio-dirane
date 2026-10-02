"use client"

import { motion, useReducedMotion } from "motion/react"
import type { TimelineEntry } from "@/lib/experienceData"
import { cn } from "@/lib/utils"

const EASE = [0.22, 1, 0.36, 1] as const

// Géométrie (desktop) : la frise horizontale est centrée sur chaque connecteur.
const TEXT_H = 150 // hauteur réservée au bloc texte au-dessus de la frise
const LONG = 236 // connecteur long (items pairs)
const SHORT = 132 // connecteur court (items impairs)
const AXIS_Y = TEXT_H + LONG / 2

function OrgLogo({ name, logo }: { name: string; logo?: string }) {
  return (
    <div
      className="flex h-20 w-44 items-center justify-center  px-4 py-3 transition-all duration-300 hover:-translate-y-0.5"
      title={name}
    >
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt={name} width={160} height={56} className="h-auto max-h-full w-auto max-w-full object-contain" draggable={false} />
      ) : (
        <span className="text-center text-sm font-semibold leading-tight text-ink">{name}</span>
      )}
    </div>
  )
}

function Dates({ item, className }: { item: TimelineEntry; className?: string }) {
  return (
    <div className={cn("space-y-1", className)}>
      <p className="font-sans text-sm font-semibold uppercase tracking-wide text-ink-muted">
        {item.start} <span className="text-ink-subtle">–</span> {item.end}
      </p>
      <p className="font-mono text-xs text-ink-subtle">( {item.duration} )</p>
    </div>
  )
}

export function Timeline({ items, className }: { items: TimelineEntry[]; className?: string }) {
  const reduce = useReducedMotion()

  return (
    <div className={cn("w-full", className)}>
      {/* ───────── Desktop : frise horizontale ───────── */}
      <div className="hidden md:block">
        <div className="pb-2">
          <div className="relative mx-auto" style={{ minWidth: Math.max(items.length * 230, 0) }}>
            {/* Axe en pointillés */}
            <div className="pointer-events-none absolute inset-x-0" style={{ top: AXIS_Y }} aria-hidden>
              <motion.div
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.1, ease: EASE }}
                className="h-px origin-left border-t-2 border-dashed border-ink/25"
              />
              <span className="absolute -top-[5px] left-0 size-2.5 rounded-full bg-ink/30" />
              <span className="absolute -top-[5px] right-0 size-2.5 rounded-full bg-ink/30" />
            </div>

            <div className="grid" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
              {items.map((item, i) => {
                const isLong = i % 2 === 0
                const len = isLong ? LONG : SHORT
                const pad = (LONG - len) / 2
                return (
                  <div key={`${item.organization}-${i}`} className="flex flex-col items-center px-3 text-center">
                    {/* Texte */}
                    <motion.div
                      initial={reduce ? false : { opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10% 0px" }}
                      transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.12 }}
                      className="flex w-full flex-col justify-end pb-4"
                      style={{ height: TEXT_H }}
                    >
                      <h3 className="font-display text-xl font-semibold leading-tight text-ink md:text-2xl">{item.title}</h3>
                      <Dates item={item} className="mt-2" />
                    </motion.div>

                    <div style={{ height: pad }} aria-hidden />

                    {/* Connecteur */}
                    <div className="relative" style={{ height: len, width: 1 }}>
                      <motion.div
                        initial={reduce ? false : { scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: "-10% 0px" }}
                        transition={{ duration: 0.7, ease: EASE, delay: 0.3 + i * 0.12 }}
                        className="absolute inset-0 origin-top bg-ink/30"
                      />
                      <motion.span
                        initial={reduce ? false : { scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: EASE, delay: 0.3 + i * 0.12 }}
                        className="absolute -top-[5px] left-1/2 size-2.5 -translate-x-1/2 rounded-full bg-brand"
                      />
                      <motion.span
                        initial={reduce ? false : { scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: EASE, delay: 0.9 + i * 0.12 }}
                        className="absolute -bottom-[5px] left-1/2 size-2.5 -translate-x-1/2 rounded-full border-2 border-brand bg-paper"
                      />
                    </div>

                    <div style={{ height: pad }} aria-hidden />

                    {/* Logo / organisation */}
                    <motion.div
                      initial={reduce ? false : { opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: EASE, delay: 1 + i * 0.12 }}
                      className="pt-7"
                    >
                      <OrgLogo name={item.organization} logo={item.logo} />
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ───────── Mobile : liste verticale ───────── */}
      <ol className="relative ml-3 border-l-2 border-dashed border-ink/25 pl-7 md:hidden">
        {items.map((item, i) => (
          <motion.li
            key={`${item.organization}-m-${i}`}
            initial={reduce ? false : { opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
            className="relative pb-10 last:pb-0"
          >
            <span className="absolute -left-[36px] top-1.5 size-3 rounded-full border-2 border-brand bg-paper" aria-hidden />
            <h3 className="font-display text-xl font-semibold leading-tight text-ink">{item.title}</h3>
            <Dates item={item} className="mt-1.5" />
            <div className="mt-4">
              <OrgLogo name={item.organization} logo={item.logo} />
            </div>
            {item.summary && <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.summary}</p>}
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
