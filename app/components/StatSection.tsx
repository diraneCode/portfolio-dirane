"use client"

import * as Icon from "react-icons/fa6"
import { motion } from "framer-motion"
import CountUp from "../../components/CountUp"

export function StatSection() {
  const stats = [
    { value: 4, label: "Années d'expérience", icon: <Icon.FaUserGraduate /> },
    { value: 10, label: "Projets terminés", icon: <Icon.FaCode /> },
    { value: 5, label: "Clients satisfaits", icon: <Icon.FaUsers /> },
  ]

  return (
    <section
      id="stats"
      className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      {/* === Animated Gradient Background === */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_70%)] animate-pulse" />

      <div className="relative container mx-auto px-6 z-10">
        <h2
          className="text-start text-4xl font-bold text-white mb-14"
        >
          Mes <span className="text-blue-400">statistiques</span>
        </h2>

        {/* === Cards Grid === */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
              className="relative group flex flex-col items-center justify-center text-center p-10 rounded-2xl 
                         bg-white/5 backdrop-blur-xl border border-white/10 
                         transition-all duration-500 cursor-pointer"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                              bg-gradient-to-tr from-blue-600/20 via-transparent to-cyan-500/20 rounded-2xl blur-xl" />

              {/* Icon */}
              <div className="relative text-blue-400 text-5xl mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="relative flex items-center gap-2 text-4xl font-extrabold text-white">
                <span className="text-blue-400">+</span>
                <CountUp from={0} to={stat.value} duration={1.5} />
              </div>

              {/* Label */}
              <span className="relative mt-2 text-gray-300 text-sm tracking-wide group-hover:text-white transition-colors">
                {stat.label}
              </span>

              {/* Animated underline */}
              <motion.div
                layoutId="underline"
                className="absolute bottom-4 w-0 group-hover:w-2/3 h-[2px] bg-blue-500/70 rounded-full transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
