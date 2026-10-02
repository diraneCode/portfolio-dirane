"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FileText, Send, X } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { devisSchema, devisServices, type DevisInput } from "@/lib/schemas"
import { useAddDevis } from "@/hooks/useDevis"

type Props = {
  label?: string
  variant?: ButtonProps["variant"]
  size?: ButtonProps["size"]
  className?: string
}

export function DevisDrawer({ label = "Demander un devis gratuit", variant = "default", size = "lg", className }: Props) {
  const { mutate: addDevis, isPending } = useAddDevis()
  const form = useForm<DevisInput>({
    resolver: zodResolver(devisSchema),
    defaultValues: { service: "", fullName: "", phone: "", email: "", message: "" },
  })

  function onSubmit(data: DevisInput) {
    addDevis(data, { onSuccess: () => form.reset() })
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          <FileText /> {label}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[92vh]">
        <div className="relative mx-auto w-full max-w-3xl overflow-y-auto px-5 pb-10 pt-4 md:px-8">
          <DrawerClose asChild>
            <button
              type="button"
              aria-label="Fermer"
              className="group absolute right-5 top-4 flex size-10 items-center justify-center rounded-full border border-white/15 text-paper transition-colors hover:border-brand hover:bg-brand hover:text-white md:right-8"
            >
              <X className="size-4 transition-transform duration-300 group-hover:rotate-90" />
            </button>
          </DrawerClose>

          <p className="eyebrow text-brand-light">Devis gratuit</p>
          <DrawerTitle className="mt-3 font-display text-4xl text-paper md:text-5xl">Parlez-moi de votre projet</DrawerTitle>
          <DrawerDescription className="mt-3 max-w-xl text-ash">
            Décrivez votre besoin en quelques lignes. Je reviens vers vous sous 48 h avec une première estimation et des
            recommandations.
          </DrawerDescription>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service souhaité</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisissez un service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {devisServices.map((s) => (
                            <SelectItem key={s.value} value={s.value}>
                              {s.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom & prénom</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex : Votre nom" autoComplete="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
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
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Votre besoin</FormLabel>
                    <FormControl>
                      <Textarea rows={5} placeholder="Objectifs, délais, budget indicatif, exemples qui vous inspirent…" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button type="submit" disabled={isPending} size="lg">
                  {isPending ? <Spinner className="size-4" /> : <Send />}
                  {isPending ? "Envoi en cours…" : "Envoyer ma demande"}
                </Button>
                <DrawerClose asChild>
                  <Button type="button" variant="ghost">
                    Annuler
                  </Button>
                </DrawerClose>
              </div>
            </form>
          </Form>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
