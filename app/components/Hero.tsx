"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { FaDownload } from "react-icons/fa"

export default function Hero() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-64 h-64 mx-auto">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <Image
              src="/placeholder2.png"
              alt="Dirane"
              width={256}
              height={256}
              className="rounded-b-full object-cover absolute bottom-0"
            />
          </div>
        </motion.div>
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h3
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi 👋, je suis Dirane
          </motion.h3>
          <TypeAnimation
            sequence={["Développeur", 1000, "Web designer", 1000, "Designer UI/UX", 1000]}
            wrapper="h2"
            speed={50}
            className="text-xl md:text-5xl font-bold text-blue-400 mb-6"
            repeat={Number.POSITIVE_INFINITY}
          />
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-green-500">Came</span><span className="text-red-500">roun</span><span className="text-yellow-500">ais</span> et passionné par developpement web et mobile
          </motion.p>
          <motion.a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Télécharger CV
            <FaDownload />
          </motion.a>
        </div>
      </div>
    </motion.section>
  )
}

