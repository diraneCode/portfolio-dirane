"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { Button, ArrowDot } from "@/components/ui/button"
import { Marquee } from "@/components/shared/Marquee"
import { BrandPattern } from "@/components/shared/BrandPattern"
import { site } from "@/lib/site"

const EASE = [0.22, 1, 0.36, 1] as const

const marqueeTools = [
  { name: "React", src: "/logo/react.png" },
  { name: "Next.js", src: "/logo/nextjs.png" },
  { name: "Claude", src: "/logo/claude.jpeg" },
  { name: "TypeScript", src: "/logo/typescript.png" },
  { name: "Figma", src: "/logo/figma.png" },
  { name: "n8n", src: "/logo/n8n.png" },
  { name: "Supabase", src: "/logo/supabase.png" },
  { name: "Tailwind", src: "/logo/tailwind.png" },
  { name: "Expo", src: "/logo/expo.png" },
  { name: "NestJS", src: "/logo/nestjs.png" },
  { name: "Docker", src: "/logo/docker.png" },
  { name: "PostgreSQL", src: "/logo/postgre.png" },
]

export function Hero() {
  const reduce = useReducedMotion()

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE, delay },
  })

  return (
    <section id="home" className="section-dark relative flex min-h-[100svh] flex-col overflow-hidden" aria-label="Introduction">
      <div className="vignette pointer-events-none absolute inset-0" aria-hidden />
      <BrandPattern className="text-white" variant="mark" opacity={0.05} size={110} />

      {/* Ligne du haut : accroche à gauche, intro + CTA à droite */}
      <div className="container-x relative z-[2] grid gap-8 pt-28 md:grid-cols-2 md:pt-32">
        <div>
          {site.available && (
            <motion.p
              {...fadeUp(0.2)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] font-medium text-paper/80 backdrop-blur"
            >
              <span className="size-1.5 rounded-full bg-brand animate-pulse-dot" />
              Disponible pour vos projets
            </motion.p>
          )}
          <motion.p {...fadeUp(0.35)} className="mt-5 max-w-xs text-[1.5rem] font-semibold leading-[1.15] text-paper md:text-[1.9rem]">
            CEO Cortex Agency Software Engineer UI/UX Designer &amp; créateur de contenu tech
          </motion.p>
        </div>

        <motion.div {...fadeUp(0.5)} className="hidden max-w-xs md:block md:justify-self-end md:pt-10">
          <p className="text-sm leading-relaxed text-ash">
            Salut, je suis Dirane Mekem, CEO de Cortex Agency, développeur et designer basé à Douala. J&apos;aide les entreprises et les particuliers à automatiser leur business avec l&apos;IA, l&apos;automatisation et les solutions digitales.
          </p>
          <Button asChild size="lg" className="mt-5 pl-2">
            <Link href="#projets">
              <ArrowDot /> Voir mes projets
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Portrait : dans le flux jusqu'à la tablette, quasi pleine hauteur et centré en absolu sur grand écran. Noir et blanc sauf au survol. */}
      <div className="group/portrait relative z-[1] mx-auto mt-4 h-[52vh] w-full md:h-[58vh] lg:absolute lg:inset-x-0 lg:bottom-[8%] lg:top-[7%] lg:mt-0 lg:flex lg:h-auto lg:justify-center">
        <div className="relative h-full w-full max-w-[1100px] [mask-image:linear-gradient(to_bottom,black_72%,transparent_100%)]">
          <Image
            src="/art/dirane-hero.webp"
            alt="Portrait de Dirane Mekem"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="object-contain object-bottom grayscale transition-[filter] duration-700 ease-out group-hover/portrait:grayscale-0"
          />
        </div>
      </div>

      {/* Nom géant, statique */}
      <h1
        className="pointer-events-none relative z-[2] -mt-[18vw] select-none px-[0.12em] pt-[0.12em] text-center font-sans text-giant font-semibold text-paper md:-mt-[12vw] lg:mt-auto"
        aria-label={site.name}
      >
        Dirane
      </h1>

      {/* Intro + CTA (mobile uniquement) */}
      <motion.div {...fadeUp(0.6)} className="container-x relative z-[2] mt-6 md:hidden">
        <p className="text-sm leading-relaxed text-ash">
          Salut, je suis Dirane Mekem, développeur et designer basé à Douala. Je conçois des expériences numériques
          fluides qui connectent et convertissent, et je partage mes coulisses en vidéo.
        </p>
        <Button asChild size="lg" className="mt-5 pl-2">
          <Link href="#projets">
            <ArrowDot /> Voir mes projets
          </Link>
        </Button>
      </motion.div>

      {/* Bandeau outils */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-[2] mt-8 border-t border-white/10 bg-night/70 py-6 backdrop-blur-sm md:mt-6"
      >
        <Marquee
          speed="slow"
          itemClassName="px-8"
          items={marqueeTools.map((t) => (
            <span key={t.name} className="group/tool flex items-center gap-3 text-xl font-semibold text-white/55 transition-colors duration-300 hover:text-white md:text-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.src} alt="" width={32} height={32} className="h-7 w-auto opacity-60 grayscale transition-all duration-300 group-hover/tool:opacity-100 group-hover/tool:grayscale-0 md:h-8" draggable={false} />
              {t.name}
            </span>
          ))}
        />
      </motion.div>
    </section>
  )
}
