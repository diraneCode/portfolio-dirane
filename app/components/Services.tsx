import CardFlip from './CardFlip'
import { FaCode, FaFigma, FaRobot } from "react-icons/fa";

export function ServiceSection() {
  const skills = [
    {
      id: 1,
      title: "Dév Web & Mobile",
      subtitle: "Des apps modernes et performantes",
      description:
        "Création d’expériences rapides, fluides et intuitives avec React, Next.js et React Native.",
      features: [
        "Composants réutilisables",
        "UX/UI optimisée",
        "Intégration d’APIs",
        "Déploiement automatisé"
      ],
      icon: <FaCode size={40} />,
    },
    {
      id: 2,
      title: "UI/UX Design",
      subtitle: "Designs clairs, utiles et engageants",
      description:
        "Je conçois des interfaces esthétiques et centrées utilisateur avec Figma et une approche design thinking.",
      features: [
        "Prototypage Figma",
        "Design system cohérent",
        "Expérience intuitive",
        "Cohérence visuelle"
      ],
      icon: <FaFigma size={40} />,
    },
    {
      id: 3,
      title: "IA & Automatisation",
      subtitle: "Simplifie, optimise, innove",
      description:
        "J’exploite l’intelligence artificielle et l’automatisation pour accélérer les tâches, réduire les erreurs et libérer du temps créatif.",
      features: [
        "Automatisation intelligente",
        "Intégration IA (GPT, Copilot)",
        "Workflows optimisés",
        "Gain de productivité"
      ],
      icon: <FaRobot size={40} />,
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen w-full bg-[#0f172a] relative py-20 "
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />
      <div className="container mx-auto px-6">
        <h2
          className="text-start text-4xl font-bold text-white mb-14"
        >
          Mes <span className="text-blue-400">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            skills.map((skill, index) => (
              <CardFlip
                key={index}
                title={skill.title}
                subtitle={skill.subtitle}
                description={skill.description}
                features={skill.features}
                icon={skill.icon}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

