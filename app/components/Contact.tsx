"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Reveal } from "@/components/shared/Reveal"
import { SocialLinks } from "@/components/shared/SocialLinks"
import { TopoPattern } from "@/components/shared/TopoPattern"
import { contactSchema, type ContactInput } from "@/lib/schemas"
import { useAddContact } from "@/hooks/useContact"
import { site } from "@/lib/site"

const channels = [
  { Icon: Mail, label: "E-mail", value: site.email, href: `mailto:${site.email}` },
  { Icon: Phone, label: "Téléphone / WhatsApp", value: site.phoneDisplay, href: `tel:+${site.phoneRaw}` },
  { Icon: MapPin, label: "Adresse", value: site.location },
]

// Champs sur fond clair
const lightField =
  "border-ink/15 bg-white text-ink placeholder:text-ink-subtle hover:border-ink/30 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-brand/20"

export function Contact() {
  const { mutate: addMessage, isPending } = useAddContact()
  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { username: "", email: "", phone: "", object: "", description: "" },
  })

  function onSubmit(data: ContactInput) {
    addMessage(data, { onSuccess: () => form.reset() })
  }

  return (
    <section id="contact" className="section section-dark" aria-labelledby="contact-title">
      <div className="container-x">
        <SectionHeading
          index="11"
          eyebrow="Contact"
          id="contact-title"
          title="Écrivez-moi, je réponds *vite*"
          lede="Une question, une collaboration ou un projet à lancer ? Laissez-moi un message, je reviens vers vous sous 24 à 48 h."
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="grid overflow-hidden rounded-3xl bg-paper text-ink shadow-lift lg:grid-cols-[0.9fr_1.1fr]">
            {/* Panneau gauche : coordonnées + relief */}
            <div className="relative overflow-hidden bg-paper-2 p-8 md:p-10 lg:p-12">
              <TopoPattern className="-bottom-10 -right-14 w-[115%] text-brand lg:-bottom-6 lg:-right-10" />
              <div className="relative">
                <h3 className="font-display text-2xl font-bold leading-tight text-ink md:text-3xl">
                  Vous pouvez me joindre à travers le formulaire ci-contre.
                </h3>
                <p className="mt-3 text-ink-muted">ou contactez-moi par e-mail ou par téléphone.</p>

                <ul className="mt-10 space-y-7">
                  {channels.map(({ Icon, label, value, href }) => (
                    <li key={label} className="flex items-center gap-5">
                      <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-night text-paper transition-colors duration-300 group-hover:bg-brand">
                        <Icon className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm text-ink-muted">{label}</p>
                        {href ? (
                          <a href={href} className="link-brush break-all text-lg font-bold text-ink">
                            {value}
                          </a>
                        ) : (
                          <p className="text-lg font-bold text-ink">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <p className="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink-subtle">Me suivre</p>
                  <SocialLinks tone="light" compact />
                </div>
              </div>
            </div>

            {/* Panneau droit : formulaire */}
            <div className="p-8 md:p-10 lg:p-12">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ink">Nom et prénom(s)</FormLabel>
                        <FormControl>
                          <Input className={lightField} placeholder="Ex : Votre nom" autoComplete="name" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ink">E-mail</FormLabel>
                        <FormControl>
                          <Input className={lightField} type="email" placeholder="Ex : compte@exemple.com" autoComplete="email" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ink">
                          N° de téléphone <span className="text-brand">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input className={lightField} type="tel" placeholder="+237 6 00 00 00 00" autoComplete="tel" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="object"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ink">Objet du message</FormLabel>
                        <FormControl>
                          <Input className={lightField} placeholder="Ex : Collaboration, Devis, Préoccupation…" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-ink">Message</FormLabel>
                        <FormControl>
                          <Textarea className={lightField} rows={5} placeholder="Entrez votre message ici…" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                    <p className="text-xs text-ink-subtle">Vos données ne sont utilisées que pour vous répondre.</p>
                    <Button type="submit" disabled={isPending} size="lg" variant="night" className="rounded-2xl px-8">
                      {isPending ? <Spinner className="size-4" /> : <Send />}
                      {isPending ? "Envoi en cours…" : "Envoyer"}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
