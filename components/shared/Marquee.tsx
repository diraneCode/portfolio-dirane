import { cn } from "@/lib/utils"

type Props = {
  items: React.ReactNode[]
  className?: string
  itemClassName?: string
  reverse?: boolean
  speed?: "slow" | "normal" | "fast"
}

/** Bandeau défilant en CSS pur (contenu dupliqué pour la boucle). */
export function Marquee({ items, className, itemClassName, reverse = false, speed = "normal" }: Props) {
  const duration = speed === "slow" ? "60s" : speed === "fast" ? "22s" : "40s"
  return (
    <div className={cn("group/marquee relative flex w-full overflow-hidden", className)} aria-hidden>
      <div
        className="flex w-max shrink-0 animate-marquee items-center group-hover/marquee:[animation-play-state:paused]"
        style={{ animationDuration: duration, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className={cn("shrink-0", itemClassName)}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
