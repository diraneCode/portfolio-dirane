export type Project = {
  slug: string
  name: string
  description: string
  fullDescription: string
  image: { src: string; alt: string }[]
  link?: string
  github?: string
  Figma?: string
  tech: string[]
  year: string
  category: string
  /** Rôle tenu sur le projet. */
  role?: string
}

/**
 * Visuels générés par `scripts/project-visuals.py` à partir des captures brutes
 * (`public/projets/<slug>/<slug>-N.png`) : une couverture inclinée, puis un visuel par écran.
 */
const visuals = (slug: string, n: number, alt: string) => [
  { src: `/projets/${slug}/cover.webp`, alt: `${alt} — aperçu du projet` },
  ...Array.from({ length: n }, (_, i) => ({ src: `/projets/${slug}/visuel-${i + 1}.webp`, alt: `${alt} — écran ${i + 1}` })),
]

export const projectData: Project[] = [
  {
    slug: "cortex-agency",
    name: "Cortex Agency",
    description: "Site de Cortex Agency, agence digitale et communication 360 basée à Douala : dix expertises, une seule équipe.",
    fullDescription:
      
      "Conception et développement du site de Cortex Agency. Le site présente les dix expertises de l'agence (IA et automatisation, développement web et mobile, sécurité informatique, marketing digital, design…), ses outils connectés et son équipe basée à Douala. Interface claire, animations fluides, parcours pensés pour convertir : démarrer un projet ou demander un audit gratuit.",
    image: visuals("cortex-agency", 4, "Cortex Agency"),
    tech: ["Next.js", "Tailwind CSS", "Motion", "Figma"],
    year: "2025",
    category: "Agence",
    role: "Design & développement",
  },
  {
    slug: "crm-bt",
    name: "CRM Build Together",
    description: "Plateforme de gestion intégrée pour centraliser les opérations commerciales et administratives.",
    fullDescription:
      "Un CRM moderne conçu pour optimiser la gestion d'entreprise : marketing (prospects, clients, tableau de bord), ressources humaines, comptabilité (ventes, finances, salaires), topographie et recouvrement. La solution améliore la productivité, facilite le suivi des activités et renforce la relation client.",
    image: visuals("crm-bt", 4, "CRM Build Together"),
    link: "https://crm.buildtogethers.com/",
    tech: ["Next.js", "Supabase", "React Query", "Tailwind CSS"],
    year: "2025",
    category: "Outil métier",
    role: "Fullstack & UI/UX",
  },
  {
    slug: "website-bt",
    name: "Build Together Group",
    description: "Site institutionnel pour présenter l'entreprise Build Together et ses services.",
    fullDescription:
      "Vitrine digitale de Build Together Group : présentation des services (développement web et mobile, solutions cloud, infrastructure, consulting), mise en avant de l'équipe et des réalisations, interface moderne et responsive, optimisée pour le référencement afin de renforcer la présence en ligne de l'entreprise.",
    image: visuals("website-bt", 4, "Build Together Group"),
    link: "https://buildtogethers.com",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    year: "2025",
    category: "Site vitrine",
    role: "Design & développement",
  },
  {
    slug: "caline-house",
    name: "Caline House",
    description: "Application web & mobile pour simplifier la recherche et la réservation de logements.",
    fullDescription:
      "Plateforme immobilière moderne : découverte de logements adaptés à ses besoins, réservation de visites, paiement sécurisé via NotchPay, favoris, portefeuille numérique et profil personnalisé. Interface intuitive et responsive, déclinée en application mobile.",
    image: [
      ...visuals("caline-house", 5, "Caline House"),
      { src: "/projets/caline-house/mockup.webp", alt: "Caline House — maquette sur ordinateur portable" },
    ],
    link: "https://calinehouse.com",
    tech: ["React Native", "Expo", "Next.js", "Supabase", "NotchPay"],
    year: "2025",
    category: "Application",
    role: "Fullstack & mobile",
  },
  {
    slug: "kmc",
    name: "KMC Restaurant",
    description: "Conception UI/UX sur Figma pour le site vitrine d'un restaurant moderne.",
    fullDescription:
      "Maquette UI/UX conçue sur Figma pour mettre en valeur l'identité et les services de KMC : page d'accueil immersive, carte des menus interactive, section réservations et version mobile optimisée. Un prototype fluide qui sert de base au développement du site.",
    image: visuals("kmc", 4, "KMC Restaurant"),
    Figma: "https://www.figma.com/design/TCugtAxhhVAUKikIZOt4vc/KMC-website?node-id=26-620&t=XLtDSzqPb2z8mTHm-1",
    tech: ["Figma", "UI/UX Design"],
    year: "2025",
    category: "Design",
    role: "UI/UX Designer",
  },
  {
    slug: "crm-powerlink",
    name: "CRM PowerLink",
    description: "Plateforme de gestion pour PowerLink : relances commerciales, finances, stock et pointage des équipes.",
    fullDescription:
      
      "Un outil métier qui centralise l'activité de PowerLink : suivi des prospects, relances et actions commerciales, tableau de bord financier (trésorerie, créances, ventes par produit), gestion du stock avec alertes de rupture, et ressources humaines avec fiche de pointage et statistiques de présence. Rôles, agences et filtres par période.",
    image: visuals("crm-powerlink", 4, "CRM PowerLink"),
    tech: ["Next.js", "Supabase", "React Query", "Tailwind CSS"],
    year: "2025",
    category: "Outil métier",
    role: "Fullstack",
  },
  {
    slug: "fjoe-construction",
    name: "FJOE Construction",
    description: "Site vitrine d'une entreprise générale de bâtiment : services, réalisations et devis gratuit sous 24 h.",
    fullDescription:
      
      "Site institutionnel pour FJOE Construction : présentation des services (construction neuve, gros œuvre, second œuvre et finitions), réalisations, histoire de l'entreprise et formulaire de demande de devis avec pièces jointes. Direction artistique sobre, structure claire et référencement local pour générer des contacts qualifiés.",
    image: visuals("fjoe-construction", 4, "FJOE Construction"),
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    year: "2025",
    category: "Site vitrine",
    role: "Design & développement",
  },
  {
    slug: "tara-card",
    name: "Tara Card",
    description: "Carte de visite NFC : une seule carte pour tout partager, en un tap.",
    fullDescription:
      
      "Tara Card permet de partager ses coordonnées, ses réseaux et son site d'un simple tap, sans application. Le site présente le produit, les offres Solo, Pro et Business, et donne accès à un tableau de bord pour modifier sa carte, suivre son activité et gérer sa page personnelle.",
    image: visuals("tara-card", 4, "Tara Card"),
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    year: "2025",
    category: "Application",
    role: "Fullstack & UI/UX",
  },
  {
    slug: "magic-booster",
    name: "Magic Booster",
    description: "Plateforme de vente de numéros virtuels, e-SIM, VPN et comptes réseaux sociaux.",
    fullDescription:
      
      "Magic Booster réunit sur une seule plateforme les numéros virtuels pour la réception de SMS, les e-SIM de voyage, les VPN et les comptes réseaux sociaux. Portefeuille rechargeable par mobile money, historique des transactions, livraison instantanée des codes et identité visuelle affirmée, en noir et vert acide.",
    image: visuals("magic-booster", 4, "Magic Booster"),
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    year: "2025",
    category: "Plateforme",
    role: "Fullstack & UI/UX",
  },
  {
    slug: "cortex-art-deco",
    name: "Cortex Art Déco",
    description: "Site vitrine d'un studio de décoration et d'aménagement intérieur : univers, services et réalisations.",
    fullDescription:
      
      "Site de Cortex Art & Déco, studio de décoration et d'aménagement intérieur. Typographie élégante, palette chaleureuse et grandes images mettent en valeur les univers (salons, chambres, cuisines, salles de bain), les services et la galerie de réalisations, avec une demande de devis accessible à chaque étape.",
    image: visuals("cortex-art-deco", 4, "Cortex Art Déco"),
    tech: ["Next.js", "Tailwind CSS", "Motion"],
    year: "2025",
    category: "Site vitrine",
    role: "Design & développement",
  },
  {
    slug: "ps5",
    name: "Landing Page PS5",
    description: "Landing page immersive pour mettre en avant les manettes PlayStation 5.",
    fullDescription:
      "Concept de landing page valorisant les manettes PS5 : design élégant, animations fluides et expérience immersive pensée pour les gamers.",
    image: visuals("ps5", 4, "Landing page PS5"),
    Figma: "https://www.figma.com/design/0pqD9RyPMi9ydD9uVd29wP/Untitled?node-id=0-1&t=SDhzwOalVRSIKQ9T-1",
    tech: ["Figma", "UI/UX Design"],
    year: "2023",
    category: "Design",
    role: "UI/UX Designer",
  },
]
