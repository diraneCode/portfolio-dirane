"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import CardNav from '../../components/CardNav'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()

  const items = [
    {
      label: "Dirane",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Portfolio", ariaLabel: "Portfolio", href: "/" },
        { label: "Compétences", ariaLabel: "Compétences", href: "/#competences" }
      ]
    },
    {
      label: "Projets",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Terminés", ariaLabel: "Terminés", href: "/#projets" },
        { label: "Design", ariaLabel: "Design", href: "/#projets" },
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Whatsapp", ariaLabel: "Whatsapp", href: "https://wa.me/${phone}?text=Salut👋" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://linkedin.com/in/dirane-mekem-63b588273" },
        { label: "Github", ariaLabel: "Github", href: "https://github.com/diranecode" },
      ]
    }
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 font-mono ${isScrolled ? "top-0 bg-gray-900/80 backdrop-blur-sm" : "bottom-0 bg-gray-900/10 backdrop-blur-sm"
        }`}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <Image src={'/dirane-logo.ico'} alt="logo" width={40} height={40} className="rounded-full" />
          </Link>
          <div className="space-x-4">
            <Link href="#projets" className="hover:text-blue-400 transition-colors">
              Projets
            </Link>
            <Link href="#competences" className="hover:text-blue-400 transition-colors">
              Compétences
            </Link>
            <Link href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div> */}
      <CardNav
        logo={"/apple-touch-icon.png"}
        logoAlt="Dirane Logo"
        items={items}
        baseColor="rgba(255, 255, 255, 0.4)"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
      <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500" style={{ scaleX: scrollYProgress }} />
    </motion.nav>
  )
}

