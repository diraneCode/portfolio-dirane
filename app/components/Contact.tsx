"use client"

import { IoLocation, IoMailUnread, IoCall, IoSend, IoCheckmarkDone } from "react-icons/io5"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Contact() {

  const FormSchema = z.object({
    username: z
      .string()
      .min(2, { message: "Le nom doit comporter au moins 2 caractères." })
      .max(50, { message: "Le nom ne doit pas dépasser 50 caractères." }),

    email: z
      .string()
      .email({ message: "Veuillez entrer une adresse e-mail valide." }),

    phone: z
      .string()
      .regex(/^(?:\+?\d{7,15})$/, {
        message: "Veuillez entrer un numéro de téléphone valide.",
      }),

    object: z
      .string()
      .min(2, { message: "L’objet doit comporter au moins 2 caractères." })
      .max(100, { message: "L’objet ne doit pas dépasser 100 caractères." }),

    description: z
      .string()
      .min(10, { message: "La description doit comporter au moins 10 caractères." })
      .max(1000, { message: "La description ne doit pas dépasser 1000 caractères." }),
  })


  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      object: "",
      description: ""

    },
  })
  function onSubmit(data: z.infer<typeof FormSchema>) {

    console.log(data)
    form.reset()
    toast.custom((id) => (
      <div
        className="relative flex w-[340px] items-center gap-2 rounded-2xl border border-white/10 bg-[#141414]/50 p-4 shadow-lg backdrop-blur-sm animate-in fade-in-0 slide-in-from-bottom-5"
      >
        <div className="size-10 shrink-0 rounded-full bg-blue-500 flex items-center justify-center">
          <IoCheckmarkDone size={20} color="#fff" />
        </div>

        <p className="flex-1 text-sm text-white break-words whitespace-normal">
          Merci pour votre message! Nous vous répondrons dans les plus brefs délais. {id}
        </p>
      </div>
    ), {
      duration: 4000
    })
  }
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Contactez-moi</h2>
        <div className="w-full sm:h-screen h-fit bg-[#1B2062] flex sm:flex-row flex-col-reverse rounded-xl overflow-hidden">
          <div className="w-full sm:w-3/5 h-full bg-gradient-to-b from-[#1B2062] to-[#050C38] p-10 rounded-xl space-y-7">
            <h3 className="text-xl font-bold">Vous pouvez me joindre via ce formulaire de contact</h3>
            <p className="text-sm text-white/50">
              N’hésitez pas à me laisser un message pour toute collaboration, question ou projet.
              Je reviendrai vers vous dans les plus brefs délais.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-x-3">
                <div className="size-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <IoCall size={20} className="" />
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-sm text-white/50">Téléphone</span>
                  <span className="font-bold">+237 697 60 93 87</span>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="size-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <IoMailUnread size={20} className="" />
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-sm text-white/50">Email</span>
                  <span className="font-bold">contact@dirane.me</span>
                </div>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="size-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <IoLocation size={20} className="" />
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-sm text-white/50">Adresse</span>
                  <span className="font-bold">Douala, Cameroun</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="sm:w-2/3 space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom et prénom(s)</FormLabel>
                      <FormControl>
                        <Input type="text" required placeholder="Ex: John Doe" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" required placeholder="Ex: john.doe@example.com" {...field} />
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
                      <FormLabel>N° de téléphone</FormLabel>
                      <FormControl>
                        <PhoneInput
                          country={'cm'}
                          inputStyle={{ width: '100%', backgroundColor: "transparent" }}
                          buttonStyle={{ backgroundColor: 'transparent', color: "#000" }}
                          containerStyle={{ border: '1px solid grey' }}
                          containerClass="flex h-9 w-full rounded-md border bg-transparent text-base shadow-sm transition-colors placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          {...field}
                        />
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
                      <FormLabel>Objet du message</FormLabel>
                      <FormControl>
                        <Input type="text" required placeholder="Ex: Collaboration, Devis, Préocupation..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea required placeholder="Ex: Bonjour, je souhaite discuter avec vous 😊" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button variant={"outline"} type="submit" className="text-black">
                  <IoSend className="-rotate-45" />
                  Envoyer
                </Button>
              </form>
            </Form>
          </div>
        </div>

      </div>
    </section>
  )
}

