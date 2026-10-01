"use client";

import { sendDevis } from "@/services/devis-service";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useAddDevis = () =>
  useMutation({
    mutationFn: sendDevis,
    onSuccess: () => {
      toast.success("Demande de devis envoyée", {
        description: "Merci ! Je reviens vers vous sous 48 h avec une première estimation.",
      });
    },
    onError: () => {
      toast.error("Échec de l'envoi", {
        description: "Une erreur est survenue. Veuillez réessayer ou m'écrire directement par e-mail.",
      });
    },
  });
