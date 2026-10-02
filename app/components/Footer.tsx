import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { SocialLinks } from "@/components/shared/SocialLinks"
import { BrandMark } from "@/components/shared/BrandPattern"
import { site } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <BrandMark className="h-9 text-brand-light" />
          <p className="mt-4 font-display text-4xl text-paper">{site.name}</p>
          <p className="mt-1 text-sm text-brand-light">{site.role}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ash">
            Conception et développement d&apos;applications web et mobiles, design d&apos;interfaces, IA & Automatisation et
            Contenu tech.
          </p>
        </div>

        <nav aria-label="Navigation du pied de page">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ash">Navigation</p>
          <ul className="mt-4 space-y-2.5">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="link-brush text-sm text-paper/80 hover:text-paper">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ash">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
            <li>
              <a href={`mailto:${site.email}`} className="link-brush hover:text-paper">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:+${site.phoneRaw}`} className="link-brush hover:text-paper">
                {site.phoneDisplay}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
          <SocialLinks className="mt-5" compact />
        </div>
      </div>

      <div className="relative overflow-hidden ">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-5 text-xs text-ash sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}.
          </p>
          <a href="#home" className="inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.18em] transition-colors hover:text-brand-light">
            Haut de page <ArrowUp className="size-3.5" />
          </a>
        </div>
        <div
          aria-hidden
          data-text="Dirane Code"
          className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[clamp(3rem,13.6vw,13rem)] font-bold leading-[0.8] tracking-[-0.04em] text-white/[0.045] before:content-[attr(data-text)]"
        />
      </div>
    </footer>
  )
}
