"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ToastContainer, toast,  } from 'react-toastify';


export default function Contact() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler une soumission de formulaire
    await new Promise((resolve) => setTimeout(resolve, 1500))
    toast(`${email}, vous avez bien été enregistré 🎉`, {
      position: "bottom-left",
      type: "success",
      theme: "dark",
      closeButton: true,
      draggable: true
    })

    setEmail("")
    setIsSubmitting(false)
  }
  return (
    <motion.section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-900 to-blue-900 flex items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="relative backdrop-blur-lg bg-white/10 rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 opacity-50" />
          <div className="relative p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Rejoignez ma Newsletter</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/20 text-white placeholder-white border-gray-500 focus:border-blue-300 transition-all duration-300"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center"
                  >
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Inscription...
                  </motion.div>
                ) : (
                  "S'inscrire"
                )}
              </Button>
            </form>
            <p className="mt-4 text-sm text-gray-300 text-center font-mono">
              Restez informé de mes dernières actualités et offres spéciales.
            </p>
          </div>
        </div>
      </motion.div>
      <ToastContainer />
    </motion.section>
  )
}

