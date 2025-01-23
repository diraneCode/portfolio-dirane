"use client"

import { motion } from "framer-motion"
import * as Icon from 'react-icons/fa6'


export default function Skills() {
  const skills = [
    {
      id: 1,
      title: "React",
      description: "Maîtrise de la librairie React : Je l'utilise quotidiennement dans mes projets web et mobiles pour développer des applications performantes et interactives. Mon expertise la création de composants réutilisables  pour des expériences utilisateur optimisées. Je suis également à l'aise avec les outils et écosystèmes associés tels que React Router, Hooks, et Next.js.",
      icon: <Icon.FaReact size={50} color='#254FA' />
    },
    {
      id: 2,
      title: "UI/UX design",
      description: "Maîtrisant Figma, je crée des interfaces utilisateur intuitives et modernes. Grâce à mon expertise en prototypage interactif et en design collaboratif, je transforme des idées en expériences visuelles captivantes. Mon approche centrée sur l’utilisateur garantit des designs fonctionnels et esthétiques.",
      icon: <Icon.FaFigma size={50} color='#254FA' />
    },
    {
      id: 3,
      title: "Github",
      description: "Je maîtrise GitHub pour la gestion de versions et la collaboration sur des projets. J’utilise régulièrement des branches pour organiser le développement et GitHub Actions pour automatiser les workflows. Mon expérience inclut également la gestion des pull requests et la résolution des conflits de code.",
      icon: <Icon.FaGithub size={50} color='#254FA' />
    },
  ]
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
          {
            skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg relative font-[Roboto]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-full rounded rotate-0 border-2py-4 px-6 flex flex-col justify-between cursor-pointer">
                  {skill.icon}
                  <h1 className="text-xl font-bold">{skill.title}</h1>
                  <span className="text-sm text-gray-400">
                    {skill.description}
                  </span>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </motion.section>
  )
}

