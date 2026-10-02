"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ArrowRight } from "lucide-react"
import { Spinner } from "@/components/ui/spinner"
import { TopoPattern } from "@/components/shared/TopoPattern"
import { BrandMark, BrandPattern } from "@/components/shared/BrandPattern"
import { newsletterSchema, type NewsletterInput } from "@/lib/schemas"
import { useNewsletter } from "@/hooks/useNewsletter"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  /** Variante resserrée (fin d'article). */
  compact?: boolean
}

/**
 * Bloc d'abonnement : carte bleue pleine, courbes de niveau en filigrane blanc,
 * champ et bouton fusionnés dans une pilule. Même langage que la section contact.
 */
export function Newsletter({ className, compact = false }: Props) {
  const { mutate, isPending } = useNewsletter()
  const form = useForm<NewsletterInput>({ resolver: zodResolver(newsletterSchema), defaultValues: { email: "" } })
  const error = form.formState.errors.email?.message

  return (
    <section
      aria-labelledby="newsletter-title"
      className={cn("noise relative overflow-hidden rounded-3xl bg-brand text-white", compact ? "p-7 md:p-9" : "p-8 md:p-12", className)}
    >
      <BrandPattern className="text-white" variant="grid" opacity={0.1} size={56} fade={false} />
      <TopoPattern className="-bottom-12 -right-16 w-[70%] text-white opacity-60 md:-bottom-16 md:w-[55%]" strokeWidth={1.8} />

      <div className={cn("relative grid gap-8", !compact && "lg:grid-cols-[1.1fr_1fr] lg:items-end")}>
        <div>
          <div className="flex items-center gap-3">
            <BrandMark className="h-7 text-white" />
            <p className="eyebrow text-white/80">Newsletter</p>
          </div>
          <h2 id="newsletter-title" className={cn("mt-5 font-display font-bold leading-[1.02] tracking-[-0.03em]", compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl lg:text-[3.4rem]")}>
            Un article par mois.
            <br />
            <span className="text-white/70">Pas une ligne de plus.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 md:text-base">
            Retours d&apos;expérience sur le développement, le design et l&apos;automatisation, écrits depuis Douala.
            Désinscription en un clic.
          </p>
        </div>

        <form
          noValidate
          onSubmit={form.handleSubmit((data) => mutate(data, { onSuccess: () => form.reset() }))}
          className="w-full"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Votre adresse e-mail
          </label>
          <div
            className={cn(
              "flex items-center gap-1 rounded-full bg-white p-1.5 pl-5 shadow-lift transition-shadow focus-within:ring-4 focus-within:ring-white/30",
              error && "ring-4 ring-red-300/70"
            )}
          >
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              placeholder="vous@entreprise.com"
              aria-invalid={!!error}
              aria-describedby={error ? "newsletter-error" : "newsletter-hint"}
              className="h-10 min-w-0 flex-1 bg-transparent text-sm text-ink placeholder:text-ink-subtle focus:outline-none"
              {...form.register("email")}
            />
            <button
              type="submit"
              disabled={isPending}
              className="group/sub flex h-11 shrink-0 items-center gap-2 rounded-full bg-night px-5 text-sm font-semibold text-white transition-all hover:bg-brand-600 disabled:opacity-60"
            >
              {isPending ? <Spinner className="size-4" /> : null}
              <span className="hidden sm:inline">S&apos;abonner</span>
              <ArrowRight className="size-4 transition-transform group-hover/sub:translate-x-0.5" />
            </button>
          </div>
          {error ? (
            <p id="newsletter-error" className="mt-2 pl-5 text-xs font-medium text-white">
              {error}
            </p>
          ) : (
            <p id="newsletter-hint" className="mt-2 pl-5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/70">
              Zéro spam · désinscription en un clic
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
