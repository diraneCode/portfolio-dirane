"use client";

import { sendDevis } from '@/services/devis-service';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner';

const useAddDevis = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: sendDevis,
    onSuccess: (_) => {
      // On invalide les données liées au propriétaire courant
      queryClient.invalidateQueries({
        queryKey: ["devis"],
      });

      toast.success("Merci pour votre message",{
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
    },
    onError: () => {
      toast.error("Échec de l'envoie' ❌",{
        description: "Une erreur est survenue. Veuillez réessayer.",
      });
    },
  });
};

export {
    useAddDevis
}