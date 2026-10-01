import { FaGithub, FaLinkedinIn, FaTiktok, FaInstagram, FaXTwitter, FaFacebookF, FaThreads } from "react-icons/fa6"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const items = [
  { label: "GitHub", href: site.socials.github, Icon: FaGithub },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: FaLinkedinIn },
  { label: "TikTok", href: site.socials.tiktok, Icon: FaTiktok },
  { label: "Instagram", href: site.socials.instagram, Icon: FaInstagram },
  { label: "X", href: site.socials.x, Icon: FaXTwitter },
  { label: "Facebook", href: site.socials.facebook, Icon: FaFacebookF },
  { label: "Threads", href: site.socials.threads, Icon: FaThreads },
]

export function SocialLinks({ className, compact = false, tone = "dark" }: { className?: string; compact?: boolean; tone?: "light" | "dark" }) {
  const list = compact ? items.slice(0, 4) : items
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)} aria-label="Réseaux sociaux">
      {list.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-white",
              tone === "dark" ? "border-white/15 text-paper/75" : "border-ink/15 text-ink"
            )}
          >
            <Icon className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  )
}
