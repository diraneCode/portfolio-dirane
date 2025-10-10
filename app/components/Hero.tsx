"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useState } from "react"
import ShinyText from '@/app/components/ShinyText';
import { FaGithub, FaLinkedin, FaWhatsapp, FaTiktok, FaEnvelope } from "react-icons/fa"

export default function Hero() {
  const [hovered, setHovered] = useState(false)
  const phone = "237697609387"
  const message = "Bonjour, je souhaite discuter avec vous 😊"
  return (
    <motion.section
      className="min-h-screen w-full bg-[#0f172a] relative flex items-center justify-center py-20"
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
          {/* <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
            }}
          /> */}
          <div
            className="relative w-64 h-64 mx-auto group cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Cercle animé */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Image avec effet noir & blanc au hover */}
            <Image
              src="/placeholder2.png"
              alt="Dirane"
              width={256}
              height={256}
              className={`rounded-b-full object-cover absolute bottom-0 transition duration-300 ${hovered ? "grayscale" : ""
                }`}
            />

            {/* Popup style bulle de chat */}
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2"
              >
                <div className="relative bg-white text-gray-800 px-4 py-2 rounded-2xl shadow-lg text-sm font-medium">
                  Ravie de vous voir !😊
                  {/* Petite flèche type bulle de chat */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 
                              border-l-8 border-r-8 border-t-8 border-transparent 
                              border-t-white" />
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h3
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ShinyText
              text="Hi 👋, je suis Dirane"
              disabled={false}
              speed={2}
              className='custom-class'
            />

          </motion.h3>
          <TypeAnimation
            sequence={["Software Engineer", 1000, "Développeur", 1000, "UI/UX Designer", 1000]}
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
            Jeune <span className="text-green-500">Came</span><span className="text-red-500">roun</span><span className="text-yellow-500">ais</span>, je vous accompagne à chaque étape : du branding créatif aux maquettes finales, pour donner vie à vos idées avec clarté et impact grâce à mon expérience.
          </motion.p>
          <div className="space-y-4">
            <div className="flex space-x-6 items-center justify-center md:justify-start">
              {/* GitHub */}
              <a
                href="https://github.com/diraneCode"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={24}
                  className="text-gray-400 hover:text-white transition-colors"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/dirane-mekem-63b588273"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={24}
                  className="text-gray-400 hover:text-white transition-colors"
                />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@diranecode"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok
                  size={24}
                  className="text-gray-400 hover:text-white transition-colors"
                />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/237697609387"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  size={24}
                  className="text-gray-400 hover:text-white transition-colors"
                />
              </a>

              {/* Email */}
              <a href="mailto:diranemekem@gmail.com">
                <FaEnvelope
                  size={24}
                  className="text-gray-400 hover:text-white transition-colors"
                />
              </a>
            </div>
            <motion.a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="cta-button mt-4 w-full md:w-fit flex justify-center items-center">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Discuter</span>
              </button>

            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

