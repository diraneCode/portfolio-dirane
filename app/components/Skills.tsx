"use client"

import { motion } from "framer-motion"
import CardFigma from "./CardFigma"
import CardCode from "./CardGithub"
import CardGithub from "./CardReact"


export default function Skills() {
  return (
    <motion.section
      id="competences"
      className="py-20 bg-gradient-to-b from-gray-900 to-blue-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Mes Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardFigma />
          <CardCode />
          <CardGithub />
        </div>
      </div>
    </motion.section>
  )
}

