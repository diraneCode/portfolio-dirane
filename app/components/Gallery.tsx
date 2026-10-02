"use client"

import dynamic from "next/dynamic"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"
import { artPieces } from "@/lib/artData"

// Galerie 3D chargée à la demande (hors bundle initial).
const DomeGallery = dynamic(() => import("@/components/DomeGallery"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-white/[0.04]" aria-hidden />,
})

export function Gallery() {
  const images = artPieces.map((p) => ({ src: p.src, alt: p.title }))
  return (
    <section id="galerie" className="section section-dark" aria-labelledby="galerie-title">
      <div className="container-x">
        <SectionHeading
          index="10"
          eyebrow="Galerie"
          id="galerie-title"
          title="En *coulisses*"
          lede="Quelques moments en dehors du code. Faites glisser pour explorer, cliquez pour agrandir."
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="relative h-[62vh] min-h-[440px] overflow-hidden rounded-3xl border border-white/10 bg-night-2">
            <DomeGallery images={images} overlayBlurColor="#121212" grayscale imageBorderRadius="14px" openedImageBorderRadius="20px" fit={0.7} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
