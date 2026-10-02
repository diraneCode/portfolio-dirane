"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { BrushBlob } from "@/components/shared/BrushStroke";
import { BrandPattern } from "@/components/shared/BrandPattern";
import { Stats } from "./Stats";

const EASE = [0.22, 1, 0.36, 1] as const;
const pillars = [
  "Développement web",
  "Développement mobile",
  "UI/UX Design",
  "IA & Automatisation",
  "Création de contenu tech",
];

export function About() {
  const reduce = useReducedMotion();
  return (
    <section
      id="a-propos"
      className="section section-dark"
      aria-labelledby="about-title"
    >
      <BrushBlob className="right-4 top-8 hidden text-brand-light md:block md:right-10" />
      <BrandPattern
        className="text-white"
        variant="grid"
        opacity={0.07}
        size={72}
      />

      <div className="container-x grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        {/* Portrait sur cercle orange (style image 2) */}
        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          <motion.div
            initial={reduce ? false : { scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1, ease: EASE }}
            className="absolute inset-[8%] rounded-full bg-brand"
            aria-hidden
          />
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 1, ease: EASE, delay: 0.25 }}
            className="absolute inset-x-[12%] -top-[6%] bottom-[8%] overflow-hidden rounded-b-full"
          >
            <Image
              src="/art/dirane-cortex.png"
              alt="Dirane Mekem"
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover object-top grayscale contrast-110"
            />
          </motion.div>
          <motion.p
            initial={reduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
            className="absolute -left-2 bottom-[6%] -rotate-6 font-display text-3xl text-paper md:-left-6 md:text-4xl"
          >
            Cortex Agency
          </motion.p>
        </div>

        <div>
          <SectionHeading
            index="02"
            eyebrow="À propos"
            id="about-title"
            title="Je transforme les idées en solutions digitales"
            lede="Entrepreneur, Software Engineer et UI/UX Designer, je combine technologie, créativité, IA et automatisation pour concevoir des produits numériques utiles, modernes et performants."
          />

          <Reveal
            delay={0.1}
            className="mt-6 space-y-4 text-base leading-relaxed text-ash"
          >
            <p>
              Entrepreneur et CEO de Cortex Agency, je conçois et développe des
              solutions digitales qui combinent technologie, design et
              intelligence artificielle. En tant que Software Engineer et UI/UX
              Designer, je transforme les idées en produits numériques modernes,
              intuitifs et performants, de la conception sur Figma au
              développement et au déploiement.
            </p>

            <p>
              J’accompagne les entreprises dans leur digitalisation à travers la
              création de sites web, applications mobiles, outils métier et
              solutions sur mesure, tout en intégrant l’IA et l’automatisation
              pour optimiser leurs processus et leur croissance. À travers
              Cortex Agency, je construis des solutions pensées pour répondre
              aux enjeux réels des entreprises, au Cameroun comme à
              l’international.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-7">
            <ul
              className="flex flex-wrap gap-2"
              aria-label="Domaines d'expertise"
            >
              {pillars.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-white/15 px-3.5 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-paper/80 transition-colors hover:border-brand hover:text-brand-light"
                >
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="mt-10">
            <Stats />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
