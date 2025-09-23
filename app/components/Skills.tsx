import * as Icon from 'react-icons/fa6'


export default function Skills() {
  const skills = [
    {
      id: 1,
      title: "Développement Web & Mobile",
      description:
        "Expert en développement d’applications web et mobiles performantes avec React, React Native et Next.js. Je conçois des composants réutilisables, optimise l’expérience utilisateur et intègre des solutions modernes pour créer des interfaces fluides et interactives.",
      icon: <Icon.FaCode size={50} color="#254FA" />,
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Maîtrisant Figma, je conçois des interfaces intuitives et esthétiques. J’excelle dans le prototypage interactif, la conception centrée utilisateur et la création d’expériences visuelles engageantes. Mon objectif est d’allier design et ergonomie pour offrir une expérience optimale.",
      icon: <Icon.FaFigma size={50} color="#254FA" />,
    },
    {
      id: 3,
      title: "DevOps",
      description:
        "Passionné par l’automatisation et le déploiement, je maîtrise GitHub, GitHub Actions et les environnements cloud. J’assure l’intégration continue (CI/CD), la gestion des versions et la surveillance des performances pour garantir des applications stables, scalables et sécurisées.",
      icon: <Icon.FaDocker size={50} color="#254FA" />,
    },
  ]

  return (
    <section
      id="competences"
      className="min-h-screen w-full bg-[#0f172a] relative py-20 "
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Mes points forts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg relative"
              >
                <div className="w-full h-full rounded rotate-0 border-2py-4 px-6 flex flex-col justify-between cursor-pointer">
                  {skill.icon}
                  <h1 className="text-xl font-bold">{skill.title}</h1>
                  <span className="text-sm text-gray-400">
                    {skill.description}
                  </span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

