"use client";

import { getSupabase } from "@/lib/supabase";
import type { NewsletterInput } from "@/lib/schemas";

/** Enregistre un abonné dans la table "newsletter" (Supabase). L'e-mail est unique côté base. */
export const subscribeNewsletter = async (input: NewsletterInput, source = "blog") => {
  const payload = { email: input.email.toLowerCase().trim(), source };
  const { data, error } = await getSupabase().from("newsletter").insert([payload]).select("*").single();
  if (error) {
    // 23505 = violation d'unicité : l'adresse est déjà inscrite, on le signale sans échouer bruyamment.
    if (error.code === "23505") throw new Error("ALREADY_SUBSCRIBED");
    throw new Error(error.message);
  }
  return data;
};
