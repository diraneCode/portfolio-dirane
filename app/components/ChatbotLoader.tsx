"use client"

import dynamic from "next/dynamic"

// L'assistant est chargé après le rendu initial pour alléger le premier affichage.
const Chatbot = dynamic(() => import("./chatbot"), { ssr: false })

export function ChatbotLoader() {
  return <Chatbot />
}
