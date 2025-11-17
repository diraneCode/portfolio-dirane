"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useState } from "react"
import { Pacifico } from "next/font/google"
import { FloatingPaths } from "./BackgroundPath"
import { AppleHelloEnglishEffect } from "@/components/ui/shadcn-io/apple-hello-effect";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export function HeroSection() {
  const [hovered, setHovered] = useState(false)
  const phone = "237697609387"
  const message = "Bonjour, je souhaite discuter avec vous 😊"

  return (
    <motion.section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background animation */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <FloatingPaths position={1} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.25),transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="mt-10 relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Image + Animation */}
        <motion.div
          className="relative w-72 h-72 lg:w-96 lg:h-9w-96 flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Gradient rotating aura */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-sky-400 to-indigo-500 blur-xl opacity-40 scale-110"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Wrapper hover */}
          <div
            className="relative group flex flex-col items-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Cercle image */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <Image
                src="/dirane mekem.png"
                alt="Dirane Mekem"
                fill
                className={`object-cover transition duration-500 ${hovered ? "grayscale" : ""}`}
              />
            </div>

            {/* Bubble avec glassmorphisme */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={hovered ? { opacity: 1, y: -85, scale: 1 } : { opacity: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
            >
              <div className="relative bg-white/15 text-white backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl shadow-xl whitespace-nowrap">
                👋 Ravi de vous rencontrer !
                {/* Flèche stylisée */}
                <div className="absolute left-1/2 -bottom-[7px] -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-transparent border-t-white/20" />
              </div>
            </motion.div>
          </div>
        </motion.div>


        {/* Text + CTA */}
        <motion.div
          className="md:w-1/2 text-center md:text-left sm:space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1
            className={`text-5xl md:text-6xl font-bold text-white leading-tight ${pacifico.className}`}
          >
            <span className="flex items-center">
              <AppleHelloEnglishEffect speed={1.1} /> 👋,
            </span>
            <span>je suis Dirane</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Software Engineer 💻",
              1200,
              "Web Developer 🌍",
              1200,
              "UI/UX Designer 🎨",
              1200,
              "AI Engineer 🤖",
              1200,
            ]}

            wrapper="span"
            speed={50}
            className="block text-2xl md:text-3xl font-semibold text-sky-400"
            repeat={Infinity}
          />

          <p
            className="text-gray-300 leading-relaxed mx-auto md:mx-0 text-base sm:text-lg md:text-xl lg:text-[1.25rem] tracking-wide"
          >
            J’aide les{" "}
            <span className="font-semibold text-white">entreprises</span> et{" "}
            <span className="font-semibold text-white">créateurs</span> à booster leur
            <span className="font-semibold text-white"> productivité</span> en concevant
            des solutions <span className="font-semibold text-white">intelligentes</span>,
            modernes et automatisées.
          </p>


          <motion.a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block btn-cta w-fit"
          >
            🚀 Discuter maintenant
          </motion.a>

        </motion.div>
      </div>
    </motion.section >
  )
}
