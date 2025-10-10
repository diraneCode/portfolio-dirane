"use client"

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-gray-200 px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-[#4169e1] select-none"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        Oups ! Cette page est introuvable
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-gray-400 max-w-md mb-8"
      >
        Il semble que vous ayez suivi un mauvais lien ou que la page ait été déplacée.  
        Retournez à la page d’accueil pour visiter mon portfolio.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-[#4169e1] text-white px-6 py-3 rounded-2xl hover:opacity-90 transition-all duration-200 shadow-lg shadow-purple-500/30"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour à l’accueil
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 text-sm text-gray-500"
      >
        <p>© {new Date().getFullYear()} — Dirane Mekem. Tous droits réservés.</p>
      </motion.div>
    </div>
  );
}
