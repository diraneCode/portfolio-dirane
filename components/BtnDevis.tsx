"use client"

import React from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { FaFileAlt } from "react-icons/fa"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { IoCheckmarkDone, IoSend } from "react-icons/io5"
import { toast } from "sonner"


export default function BtnDevis() {

    const formSchema = z.object({
        service: z
            .string()
            .min(5, { message: "Veuillez sélectionner un service" })
            .max(15, { message: "Veuillez sélectionner un service" })
            .nonempty({ message: "Veuillez sélectionner un service" }),
        fullName: z
            .string()
            .min(3, { message: "Nom & prénom trop court (min 3 caractères)" })
            .max(100, { message: "Nom trop long" })
            .nonempty({ message: "Veuillez renseigner votre nom et prénom" }),
        phone: z
            .string()
            .min(7, { message: "Numéro de téléphone invalide" })
            .max(20)
            .regex(/^\+?[0-9\s\-\(\)]+$/, { message: "Format du téléphone invalide" }),
        email: z.string().email({ message: "Email invalide" }),
        message: z
            .string()
            .min(10, { message: "Décrivez brièvement votre besoin (min 10 caractères)" })
            .max(2000, { message: "Message trop long" }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            message: "",
        }
    })

    function onSubmit(data: z.infer<typeof formSchema>) {

        console.log(data)
        form.reset()
        toast.custom((id) => (
            <div
                className="
        group relative flex w-full max-w-[380px] sm:max-w-[420px]
        items-center gap-4 rounded-2xl border border-white/20
        bg-gradient-to-br from-white/10 via-white/5 to-transparent
        p-4 shadow-[0_8px_30px_rgba(0,0,0,0.3)]
        backdrop-blur-xl backdrop-saturate-150
        animate-in fade-in-0 slide-in-from-bottom-5
        transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]
      "
            >
                {/* Cercle avec effet lumineux */}
                <div
                    className="
          relative flex size-12 shrink-0 items-center justify-center
          rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400
          shadow-[0_0_20px_rgba(56,189,248,0.6)]
          transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110
        "
                >
                    <IoCheckmarkDone size={22} color="#fff" />
                    {/* Halo lumineux animé */}
                    <span
                        className="
            absolute inset-0 rounded-full bg-blue-500/30 blur-lg opacity-0
            group-hover:opacity-100 transition-opacity duration-700
          "
                    />
                </div>

                {/* Texte avec effet de profondeur */}
                <div className="flex-1">
                    <p
                        className="
            text-[15px] sm:text-[16px] font-medium text-white/90 leading-snug
            tracking-[-0.01em] drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]
          "
                    >
                        Merci pour votre message&nbsp;!<br />
                        <span className="text-white/70 text-[14px]">
                            Nous vous répondrons dans les plus brefs délais.
                        </span>
                    </p>

                    {/* ID (optionnel ou debug) */}
                    <span className="block mt-1 text-[12px] text-white/40 font-mono select-none">
                        #{id}
                    </span>
                </div>

                {/* Ligne décorative lumineuse à gauche */}
                <span
                    className="
          absolute left-0 top-0 h-full w-[3px]
          bg-gradient-to-b from-blue-400 via-cyan-300 to-blue-600
          rounded-l-2xl opacity-60 group-hover:opacity-100
          transition-opacity duration-500
        "
                />
            </div>
        ), {
            duration: 4000
        })
    }
    return (
        <Sheet>
            {/* Bouton principal */}
            <SheetTrigger asChild>
                <Button className="p-6 bg-blue-500 w-full sm:w-fit">
                    <FaFileAlt size={20} />
                    Devis Gratuit
                </Button>
            </SheetTrigger>

            {/* Contenu de la Sheet */}
            <SheetContent
                side="bottom"
                className="max-h-[85vh] w-full py-10 md:px-28 md:w-[90vw] lg:w-[90vw] place-self-center sm:max-h-[90vh] rounded-t-xl border-0 bg-white/95 backdrop-blur-xl shadow-2xl overflow-auto"
            >
                <SheetHeader className="text-center mb-6">
                    <SheetTitle className="text-2xl font-bold text-gray-800 sr-only">
                        Demande de devis
                    </SheetTitle>
                </SheetHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-black">
                        <div className="flex flex-col md:flex-row  items-center justify-between gap-4 md:gap-8">
                            <FormField
                                control={form.control}
                                name="service"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Sélectionner un service</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger id="service" className="w-full mt-2 bg-white/70">
                                                    <SelectValue placeholder="Choisissez un service" />
                                                </SelectTrigger>
                                                <SelectContent className="dark">
                                                    <SelectItem value="design">Design & Branding</SelectItem>
                                                    <SelectItem value="dev-web">Développement Web</SelectItem>
                                                    <SelectItem value="dev-mobile">Application Mobile</SelectItem>
                                                    <SelectItem value="marketing">Marketing Digital</SelectItem>
                                                    <SelectItem value="site-web">Conception Site Web</SelectItem>
                                                    <SelectItem value="autre">Autre</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem className="w-full dark">
                                        <FormLabel>Nom & Prénom</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Ex: John Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-col md:flex-row  items-center justify-between gap-4 md:gap-8">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem className="w-full dark">
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
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="w-full dark">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="Ex johndoe@example.com" {...field} />
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
                                <FormItem className="w-full dark">
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea rows={4} placeholder="Entrez votre message ici" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">
                            <IoSend className="-rotate-45" />
                            Demander le devis
                        </Button>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>
    )
}
