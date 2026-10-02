"use client"

import { useState } from "react"
import { Check, Link2 } from "lucide-react"
import { FaXTwitter, FaLinkedinIn, FaWhatsapp, FaFacebookF } from "react-icons/fa6"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

type Props = { url: string; title: string; className?: string }

export function ShareBar({ url, title, className }: Props) {
  const [copied, setCopied] = useState(false)
  const enc = encodeURIComponent

  const targets = [
    { label: "Partager sur X", href: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`, Icon: FaXTwitter },
    { label: "Partager sur LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`, Icon: FaLinkedinIn },
    { label: "Partager sur WhatsApp", href: `https://wa.me/?text=${enc(`${title} ${url}`)}`, Icon: FaWhatsapp },
    { label: "Partager sur Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`, Icon: FaFacebookF },
  ]

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      toast.success("Lien copié", { description: url })
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error("Impossible de copier le lien")
    }
  }

  const native = async () => {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({ title, url })
      } catch {
        /* annulé par l'utilisateur */
      }
    } else {
      copy()
    }
  }

  const btn =
    "flex size-10 items-center justify-center rounded-full border border-white/15 text-ash transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-light hover:text-paper"

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)} aria-label="Partager cet article">
      <span className="mr-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ash">Partager</span>
      <button type="button" onClick={copy} aria-label="Copier le lien" title="Copier le lien" className={cn(btn, copied && "border-emerald-400 text-emerald-400")}>
        {copied ? <Check className="size-4" /> : <Link2 className="size-4" />}
      </button>
      {targets.map(({ label, href, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className={btn}>
          <Icon className="size-4" />
        </a>
      ))}
      <button type="button" onClick={native} className="ml-1 text-xs text-ash underline-offset-4 hover:text-paper hover:underline md:hidden">
        Plus d&apos;options
      </button>
    </div>
  )
}
