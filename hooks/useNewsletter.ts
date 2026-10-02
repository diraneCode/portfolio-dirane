"use client";

import { subscribeNewsletter } from "@/services/newsletter-service";
import type { NewsletterInput } from "@/lib/schemas";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useNewsletter = () =>
  useMutation({
    mutationFn: (input: NewsletterInput) => subscribeNewsletter(input, "blog"),
    onSuccess: () => {
      toast.success("Inscription confirmée", {
        description: "Merci ! Vous recevrez les prochains articles directement par e-mail.",
      });
    },
    onError: (err: Error) => {
      if (err.message === "ALREADY_SUBSCRIBED") {
        toast.info("Déjà inscrit", { description: "Cette adresse reçoit déjà la newsletter." });
        return;
      }
      toast.error("Inscription impossible", {
        description: "Une erreur est survenue. Veuillez réessayer dans un instant.",
      });
    },
  });
