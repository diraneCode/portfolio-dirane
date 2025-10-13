"use client";

import { sendMessage } from '@/services/contact-service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner';



const useAddConatct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: sendMessage,
    onSuccess: (_) => {
      // On invalide les données liées au propriétaire courant
      queryClient.invalidateQueries({
        queryKey: ["contact"],
      });

      toast.success("Message envoyé ✅",{
        description: "Merci pour votre message! Nous vous répondrons dans les plus brefs délais",
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
    useAddConatct
}