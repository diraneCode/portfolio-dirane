"use client"

import CountUp from "@/components/CountUp"

const stats = [
  { value: 4, suffix: "+", label: "Années d'expérience" },
  { value: 10, suffix: "+", label: "Projets terminés" },
  { value: 5, suffix: "+", label: "Clients satisfaits" },
]

export function Stats({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const dark = tone === "dark"
  return (
    <dl className={`grid grid-cols-3 divide-x rounded-2xl border ${dark ? "divide-white/10 border-white/10 bg-white/5" : "divide-ink/10 border-ink/10 bg-paper"}`}>
      {stats.map((s) => (
        <div key={s.label} className="px-3 py-5 text-center md:px-6 md:py-6">
          <dd className={`font-sans text-3xl font-semibold md:text-4xl ${dark ? "text-paper" : "text-ink"}`}>
            <CountUp to={s.value} duration={1.4} />
            <span className="text-brand">{s.suffix}</span>
          </dd>
          <dt className={`mt-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] md:text-[0.66rem] ${dark ? "text-ash" : "text-ink-subtle"}`}>
            {s.label}
          </dt>
        </div>
      ))}
    </dl>
  )
}
