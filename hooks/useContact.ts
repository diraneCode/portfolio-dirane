"use client";

import { sendMessage } from "@/services/contact-service";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useAddContact = () =>
  useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      toast.success("Message envoyé", {
        description: "Merci pour votre message. Je vous réponds dans les plus brefs délais.",
      });
    },
    onError: () => {
      toast.error("Échec de l'envoi", {
        description: "Une erreur est survenue. Veuillez réessayer ou m'écrire directement par e-mail.",
      });
    },
  });
