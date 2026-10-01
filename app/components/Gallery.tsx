"use client"

import DomeGallery from "@/components/DomeGallery"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"

export function Gallery() {
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
            <DomeGallery overlayBlurColor="#121212" grayscale imageBorderRadius="14px" openedImageBorderRadius="20px" fit={0.7} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
