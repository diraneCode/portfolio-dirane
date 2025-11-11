"use client";

/**
 * @author: @dorian_baffier
 * @description: Smooth Drawer
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { motion } from "motion/react";

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FaFileAlt } from "react-icons/fa"
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
import { IoSend } from "react-icons/io5"
import { useAddDevis } from "@/hooks/useDevis"
import { Spinner } from "@/components/ui/spinner"

export const formDevis = z.object({
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

interface DrawerDemoProps extends React.HTMLAttributes<HTMLDivElement> {
    secondaryButtonText?: string;
    onSecondaryAction?: () => void;
}

const drawerVariants = {
    hidden: {
        y: "100%",
        opacity: 0,
        rotateX: 5,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
    visible: {
        y: 0,
        opacity: 1,
        rotateX: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8,
            staggerChildren: 0.07,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: {
        y: 20,
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8,
        },
    },
};

export default function SmoothDrawer({
    onSecondaryAction,
}: DrawerDemoProps) {
    const handleSecondaryClick = () => {
        onSecondaryAction?.();
    };

    const { mutate: addDevis, isPending } = useAddDevis();
    const form = useForm<z.infer<typeof formDevis>>({
        resolver: zodResolver(formDevis),
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            message: "",
        }
    })

    function onSubmit(data: z.infer<typeof formDevis>) {

        addDevis(data)
        form.reset()
    }

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button className="flex items-center gap-2 px-6 py-4 bg-blue-500 hover:bg-blue-600 transition-colors w-full sm:w-auto">
                    <FaFileAlt size={20} />
                    Devis Gratuit
                </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[85vh] w-full py-10 md:px-28 md:w-[90vw] lg:w-[90vw] place-self-center sm:max-h-[90vh] rounded-t-xl border-0 bg-white/95 backdrop-blur-xl shadow-2xl overflow- dark">
                <motion.div
                    variants={drawerVariants as any}
                    initial="hidden"
                    animate="visible"
                    className="mx-auto w-full max-w-full space-y-6"
                >

                    <motion.div variants={itemVariants as any} className="">
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
                                <motion.div variants={itemVariants as any}>
                                    <DrawerFooter className="w-fit flex flex-row gap-3 px-0">
                                        <div className="w-full">
                                            <Button disabled={isPending} type="submit">
                                                <motion.span
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%]"
                                                    whileHover={{
                                                        x: ["-200%", "200%"],
                                                    }}
                                                    transition={{
                                                        duration: 1.5,
                                                        ease: "easeInOut",
                                                        repeat: 0,
                                                    }}
                                                />
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="relative flex items-center gap-2 tracking-tighter"
                                                >
                                                    <motion.div
                                                        animate={{
                                                            rotate: [0, 15, -15, 0],
                                                            y: [0, -2, 2, 0],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            ease: "easeInOut",
                                                            repeat: Number.POSITIVE_INFINITY,
                                                            repeatDelay: 1,
                                                        }}
                                                    >
                                                        {isPending ? <Spinner className="w-4 h-4" /> : <IoSend className="-rotate-45 w-4 h-4" />}
                                                    </motion.div>
                                                    {isPending ? "Envoi en cours..." : "Envoyer"}
                                                </motion.div>
                                            </Button>
                                        </div>
                                        <DrawerClose asChild className="text-white">
                                            <Button
                                                variant="outline"
                                                onClick={handleSecondaryClick}
                                            >
                                                Fermer
                                            </Button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                </motion.div>
                            </form>
                        </Form>
                    </motion.div>
                </motion.div>
            </DrawerContent>
        </Drawer>
    );
}
