"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const projects = [
  { name: "promo store", description: "Boutique de e-commerce", image: "/promo-store.png", link: "https://promo-store.vercel.app" },
  { name: "Corrige tes cours", description: "Application web permettant aux étudiant de réviser", image: "/corrige.png", link: "https://corrigetescours.vercel.app/" },
  { name: "Playstation 5", description: "Gaming", image: "/playstation.png", link: "#" },
  { name: "Rent car", description: "Site vitrine de véhicule", image: "/rent.png", link: "https://location-car.vercel.app/" },
  { name: "Portail captif", description: "Réalisation d'un portail captif", image: "/portail.png", link: "https://portail-captif-tofc.vercel.app/" },
]

export default function Projects() {
  return (
    <motion.section
      id="projets"
      className="py-20 bg-gradient-to-b from-blue-900 to-gray-900 font-[Roboto]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Mes Projets</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.name}>
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-lg h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a href={project.link} className="text-blue-400 hover:text-blue-300 transition-colors">
                    Voir le projet
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  )
}

