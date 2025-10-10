import * as Icon from "react-icons/fa6"
import SpotlightCard from '../../components/SpotlightCard';
import CountUp from '../../components/CountUp'


export default function StatSection() {
  const stats = [
    { value: 2, label: "Années d'expérience", icon: <Icon.FaUserGraduate /> },
    { value: 10, label: "Projets terminés", icon: <Icon.FaCode /> },
    { value: 5, label: "Clients", icon: <Icon.FaUsers /> },
  ]

  return (
    <section
      id="competences"
      className="relative w-full py-16 bg-[#0f172a] overflow-hidden"
    >
      {/* Background radial */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.15), transparent)",
        }}
      />

      {/* Container */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <SpotlightCard key={index} className="custom-spotlight-card" spotlightColor="rgba(255, 255, 0.25, 0.2)">
              <div

                className="flex flex-col items-center justify-center rounded-2xl p-8 text-center 
                         bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg
                         hover:scale-105 transition-transform duration-300"
              >
                <div className="text-blue-400 text-4xl mb-3">{stat.icon}</div>
                <div className="flex items-center gap-2 text-3xl font-bold text-white">
                  <span>+</span>
                  <CountUp
                    from={0}
                    to={stat.value}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                </div>
                <span className="text-gray-300 text-sm mt-1">{stat.label}</span>
              </div>

            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
