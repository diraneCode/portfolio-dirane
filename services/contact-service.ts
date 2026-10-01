"use client";

import { getSupabase } from "@/lib/supabase";
import type { ContactInput } from "@/lib/schemas";

/** Enregistre un message de contact dans la table "contact" (Supabase). */
export const sendMessage = async (input: ContactInput) => {
  const payload = {
    fullname: input.username.trim(),
    email: input.email.toLowerCase().trim(),
    phone: input.phone.replace(/[\s().-]/g, ""),
    object: input.object.trim(),
    message: input.description.trim(),
  };

  const { data, error } = await getSupabase().from("contact").insert([payload]).select("*").single();
  if (error) throw new Error(error.message);
  return data;
};
