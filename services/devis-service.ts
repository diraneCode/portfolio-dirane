"use client";

import { getSupabase } from "@/lib/supabase";
import type { DevisInput } from "@/lib/schemas";

/** Enregistre une demande de devis dans la table "devis" (Supabase). */
export const sendDevis = async (input: DevisInput) => {
  const payload = {
    service: input.service.trim(),
    fullname: input.fullName.trim(),
    phone: input.phone.replace(/[\s().-]/g, ""),
    email: input.email.toLowerCase().trim(),
    message: input.message.trim(),
  };

  const { data, error } = await getSupabase().from("devis").insert([payload]).select("*").single();
  if (error) throw new Error(error.message);
  return data;
};
