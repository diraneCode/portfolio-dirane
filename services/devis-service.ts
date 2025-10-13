"use client";

import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { formDevis } from "@/components/BtnDevis";
import { EmailTemplate } from '@/feature/email-template';

/**
 * Envoie un message de contact à la table "contact" dans Supabase.
 */
export const sendDevis = async (dataContact: z.infer<typeof formDevis>) => {
  try {
    // Construction directe de la donnée à insérer
    const payload = {
      service: dataContact.service.trim(),
      fullname: dataContact.fullName.toLowerCase().trim(),
      phone: dataContact.phone.trim(),
      email: dataContact.email.trim(),
      message: dataContact.message.trim(),
    };

    const { data, error } = await supabase.from("devis").insert([payload]).select("*").single();

    if (error) throw new Error(error.message);
    return data;
  } catch (err) {
    console.error("Erreur lors de l’envoi du devis :", err);
    throw err; // on relance l’erreur pour que React Query la capture dans onError
  }
};
