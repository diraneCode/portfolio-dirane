"use client"

import StaggeredMenu from "@/components/StaggeredMenu"
import { site } from "@/lib/site"

const menuItems = site.nav.map((n) => ({ label: n.label, ariaLabel: n.ariaLabel, link: n.href }))

const socialItems = [
  { label: "GitHub", link: site.socials.github },
  { label: "LinkedIn", link: site.socials.linkedin },
  { label: "TikTok", link: site.socials.tiktok },
  { label: "Instagram", link: site.socials.instagram },
]

export function Navbar() {
  return (
    <div className="pointer-events-none absolute inset-0 z-40">
      <StaggeredMenu
        isFixed
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        menuButtonColor="#FFFFFF"
        openMenuButtonColor="#FFFFFF"
        changeMenuColorOnOpen={false}
        colors={["#3B6CFF", "#1A1A1A"]}
        logoUrl="/dirane-square.png"
        brandLabel="Dirane Mekem"
        accentColor="#3B6CFF"
      />
    </div>
  )
}
