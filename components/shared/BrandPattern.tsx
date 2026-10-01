import { useId } from "react"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  /** "mark" : monogramme DM répété · "grid" : grille de repères de maquette · "arc" : arcs concentriques */
  variant?: "mark" | "grid" | "arc"
  /** Taille d'une tuile en px (mark/grid). */
  size?: number
  /** Opacité globale (0–1). Reste discret par défaut. */
  opacity?: number
  /** Masque radial pour fondre les bords. */
  fade?: boolean
}

/**
 * Motif de marque en filigrane. Le monogramme reprend le D et le M de Dirane Mekem :
 * un D fin ouvert sur une pointe de M, et un point de repère de maquette (brand designer).
 */
export function BrandPattern({ className, variant = "mark", size = 96, opacity = 0.07, fade = true }: Props) {
  const id = useId().replace(/:/g, "")

  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      style={{
        opacity,
        maskImage: fade ? "radial-gradient(70% 70% at 50% 40%, black 30%, transparent 100%)" : undefined,
        WebkitMaskImage: fade ? "radial-gradient(70% 70% at 50% 40%, black 30%, transparent 100%)" : undefined,
      }}
      aria-hidden
    >
      <defs>
        {variant === "mark" && (
          <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform={`translate(${size * 0.22} ${size * 0.22}) scale(${size / 100})`}
            >
              {/* D : barre + arc ouvert */}
              <path d="M6 4 V44" />
              <path d="M6 4 H18 C34 4 40 14 40 24 C40 34 34 44 18 44 H6" />
              {/* M : pointe qui s'inscrit dans le D */}
              <path d="M22 44 V20 L30 31 L38 20" />
              {/* repère de maquette */}
              <circle cx="50" cy="8" r="2.2" fill="currentColor" stroke="none" />
            </g>
          </pattern>
        )}
        {variant === "grid" && (
          <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="1">
              <path d={`M0 ${size / 2} H${size} M${size / 2} 0 V${size}`} strokeDasharray="2 6" />
              <path d={`M${size / 2 - 6} ${size / 2} H${size / 2 + 6} M${size / 2} ${size / 2 - 6} V${size / 2 + 6}`} strokeWidth="1.4" />
            </g>
          </pattern>
        )}
        {variant === "arc" && (
          <pattern id={id} width={size * 2} height={size * 2} patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth="1">
              {[0.25, 0.5, 0.75, 1].map((r) => (
                <circle key={r} cx={0} cy={size * 2} r={size * 2 * r} />
              ))}
            </g>
          </pattern>
        )}
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

/** Monogramme seul (logo, favicon de section, badge). */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 48" className={cn("h-8 w-auto", className)} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 4 V44" />
      <path d="M6 4 H18 C34 4 40 14 40 24 C40 34 34 44 18 44 H6" />
      <path d="M22 44 V20 L30 31 L38 20" />
      <circle cx="50" cy="8" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}
