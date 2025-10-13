"use client";

import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { FormSchema } from "@/app/components/Contact";

/**
 * Envoie un message de contact à la table "contact" dans Supabase.
 */
export const sendMessage = async (dataContact: z.infer<typeof FormSchema>) => {
  try {
    // Construction directe de la donnée à insérer
    const payload = {
      fullname: dataContact.username.trim(),
      email: dataContact.email.toLowerCase().trim(),
      phone: dataContact.phone.trim(),
      object: dataContact.object.trim(),
      message: dataContact.description.trim(),
    };

    const { data, error } = await supabase.from("contact").insert([payload]).select("*").single();

    if (error) throw new Error(error.message);

    return data;
  } catch (err) {
    console.error("Erreur lors de l’envoi du message :", err);
    throw err; // on relance l’erreur pour que React Query la capture dans onError
  }
};
