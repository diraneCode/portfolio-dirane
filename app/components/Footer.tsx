"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaWhatsapp, FaBehance } from "react-icons/fa"

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">&copy; 2025 dirane code. Tous droits réservés.</p>
          </div>
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/diraneCode"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} className="text-gray-400 hover:text-white transition-colors" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={24} className="text-gray-400 hover:text-white transition-colors" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp size={24} className="text-gray-400 hover:text-white transition-colors" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaBehance size={24} className="text-gray-400 hover:text-white transition-colors" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

