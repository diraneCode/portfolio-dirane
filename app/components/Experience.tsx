"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Download } from "lucide-react"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"
import { Timeline } from "@/components/shared/Timeline"
import { Button } from "@/components/ui/button"
import { experiences, education } from "@/lib/experienceData"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const tabs = [
  { key: "experience", label: "Expérience", items: experiences },
  { key: "formation", label: "Formation", items: education },
] as const

type TabKey = (typeof tabs)[number]["key"]

export function Experience() {
  const [active, setActive] = useState<TabKey>("experience")
  const current = tabs.find((t) => t.key === active)!

  return (
    <section id="parcours" className="section section-light border-t border-ink/10" aria-labelledby="parcours-title">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="04"
            eyebrow="Parcours"
            id="parcours-title"
            tone="light"
            title="Les étapes qui m'ont *construit*"
            lede="Des premiers pas en entreprise à la conception de produits complets : chaque expérience a renforcé ma double approche, design et ingénierie."
          />

          <Reveal delay={0.1} className="flex flex-wrap items-center gap-3">
            <div role="tablist" aria-label="Type de parcours" className="inline-flex rounded-full border border-ink/15 bg-paper-2 p-1">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  role="tab"
                  type="button"
                  aria-selected={active === t.key}
                  onClick={() => setActive(t.key)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active === t.key ? "text-paper" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {active === t.key && (
                    <motion.span
                      layoutId="parcours-tab"
                      className="absolute inset-0 rounded-full bg-night"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              ))}
            </div>
            <Button asChild variant="outline-dark" size="sm">
              <a href={site.cvPath} download>
                <Download /> CV (PDF)
              </a>
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 md:mt-20">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              role="tabpanel"
            >
              <Timeline items={[...current.items]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
