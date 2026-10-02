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
import { contactSchema, type ContactInput } from "@/lib/schemas"
import { useAddContact } from "@/hooks/useContact"
import { site } from "@/lib/site"

const channels = [
  { Icon: Mail, label: "E-mail", value: site.email, href: `mailto:${site.email}` },
  { Icon: Phone, label: "Téléphone / WhatsApp", value: site.phoneDisplay, href: `tel:+${site.phoneRaw}` },
  { Icon: MapPin, label: "Localisation", value: site.location },
]

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
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            index="11"
            eyebrow="Contact"
            id="contact-title"
            title="Écrivez-moi, je réponds *vite*"
            lede="Une question, une collaboration ou un projet à lancer ? Laissez-moi un message, je reviens vers vous sous 24 à 48 h."
          />

          <Reveal delay={0.1} className="mt-8">
            <ul className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/5">
              {channels.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4 px-5 py-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-light">
                    <Icon className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ash">{label}</p>
                    {href ? (
                      <a href={href} className="link-brush text-sm font-semibold text-paper">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-paper">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="mt-6">
            <p className="mb-3 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ash">Me suivre</p>
            <SocialLinks />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-white/10 bg-night-2 p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom et prénom</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex : Votre nom" autoComplete="name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="vous@entreprise.com" autoComplete="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+237 6 00 00 00 00" autoComplete="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="object"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Objet</FormLabel>
                        <FormControl>
                          <Input placeholder="Collaboration, devis, question…" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea rows={6} placeholder="Bonjour Dirane, je souhaite discuter avec vous de…" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                  <p className="text-xs text-ash">Vos données ne sont utilisées que pour vous répondre.</p>
                  <Button type="submit" disabled={isPending} size="lg">
                    {isPending ? <Spinner className="size-4" /> : <Send />}
                    {isPending ? "Envoi en cours…" : "Envoyer le message"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
