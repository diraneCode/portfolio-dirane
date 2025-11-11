import { AnimatedTestimonials } from "@/components/ui/shadcn-io/animated-testimonials";

const testimonials = [
  {
    quote:
      "Grâce à cette solution, notre gestion interne a gagné en efficacité. L’équipe a su comprendre nos besoins et livrer un produit à la hauteur des standards internationaux.",
    name: "Estelle Nguimgo",
    designation: "Responsable Communication chez Build Together Group",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "L’intégration du système de paiement NotchPay sur notre plateforme a facilité les transactions de nos clients au Cameroun et dans la sous-région. Un vrai plus pour notre entreprise.",
    name: "Mickaël Tchinda",
    designation: "CTO chez Caline House",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Le design du site de notre clinique reflète parfaitement notre image : professionnel, moderne et humain. Nos patients trouvent facilement toutes les informations dont ils ont besoin.",
    name: "Dr. Emilie Ndongo",
    designation: "Directrice de la Clinique Sainte Monique",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "L’équipe a livré un site vitrine élégant et fluide pour notre restaurant. Le design est à la fois attractif et fidèle à notre identité culinaire.",
    name: "Jean-Baptiste Kamdem",
    designation: "Fondateur du restaurant KMC",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Nous avons été impressionnés par la qualité du travail et le respect des délais. Le nouveau site e-commerce de Promo Store a boosté nos ventes dès les premières semaines.",
    name: "Linda Awa",
    designation: "Responsable Marketing chez Promo Store Cameroun",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


export function TestimonialSection() {
  return (
    <section
      id="testimonial"
      className="min-h-screen w-full bg-[#0f172a] relative py-10 "
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />
      <div className="container mx-auto px-6">
        {/* <h2 className="text-4xl font-bold mb-2">Ils m’ont fait confiance</h2> */}
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  )
}