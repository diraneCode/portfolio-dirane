import { z } from "zod";

const phoneSchema = z
  .string()
  .trim()
  .min(7, { message: "Numéro de téléphone trop court." })
  .max(20, { message: "Numéro de téléphone trop long." })
  .regex(/^\+?[0-9\s().-]{7,20}$/, { message: "Veuillez entrer un numéro de téléphone valide." });

export const contactSchema = z.object({
  username: z
    .string()
    .trim()
    .min(2, { message: "Le nom doit comporter au moins 2 caractères." })
    .max(50, { message: "Le nom ne doit pas dépasser 50 caractères." }),
  email: z.string().trim().email({ message: "Veuillez entrer une adresse e-mail valide." }),
  phone: phoneSchema,
  object: z
    .string()
    .trim()
    .min(2, { message: "L'objet doit comporter au moins 2 caractères." })
    .max(100, { message: "L'objet ne doit pas dépasser 100 caractères." }),
  description: z
    .string()
    .trim()
    .min(10, { message: "Le message doit comporter au moins 10 caractères." })
    .max(1000, { message: "Le message ne doit pas dépasser 1000 caractères." }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const devisServices = [
  { value: "design", label: "Design & Branding" },
  { value: "dev-web", label: "Développement Web" },
  { value: "dev-mobile", label: "Application Mobile" },
  { value: "site-web", label: "Conception Site Web" },
  { value: "ia-automatisation", label: "IA & Automatisation" },
  { value: "autre", label: "Autre" },
] as const;

export const devisSchema = z.object({
  service: z.string().min(1, { message: "Veuillez sélectionner un service." }),
  fullName: z
    .string()
    .trim()
    .min(3, { message: "Nom & prénom trop court (min 3 caractères)." })
    .max(100, { message: "Nom trop long." }),
  phone: phoneSchema,
  email: z.string().trim().email({ message: "Email invalide." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Décrivez brièvement votre besoin (min 10 caractères)." })
    .max(2000, { message: "Message trop long." }),
});

export type DevisInput = z.infer<typeof devisSchema>;
