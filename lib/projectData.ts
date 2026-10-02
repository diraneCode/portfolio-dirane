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

const shots = (dir: string, prefix: string, n: number, alt: string) =>
  Array.from({ length: n }, (_, i) => ({ src: `/projets/${dir}/${prefix}-${i + 1}.png`, alt: `${alt} — écran ${i + 1}` }))

/** Projets dont les visuels ne sont pas encore déposés : une couverture provisoire est affichée. */
const placeholder = (dir: string, alt: string) => [{ src: `/projets/${dir}/cover.svg`, alt }]

export const projectData: Project[] = [
  {
    slug: "cortex-agency",
    name: "Cortex Agency",
    description: "Site vitrine d'une agence créative : identité forte, animations soignées et parcours de conversion clair.",
    fullDescription:
      "Conception et développement du site de Cortex Agency. L'objectif : traduire l'univers créatif de l'agence en une expérience web immersive, avec des animations fluides, une typographie affirmée et des pages services pensées pour convertir. Le site est responsive, optimisé pour le référencement et déployé en continu.",
    image: placeholder("cortex-agency", "Cortex Agency"),
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
    image: shots("crm-bt", "crm", 6, "CRM Build Together"),
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
    image: shots("website-bt", "bt", 5, "Build Together Group"),
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
    image: shots("caline-house", "calinehouse", 7, "Caline House"),
    link: "https://calinehouse.com",
    tech: ["React Native", "Expo", "Next.js", "Supabase", "NotchPay"],
    year: "2025",
    category: "Application",
    role: "Fullstack & mobile",
  },
  {
    slug: "erp-lavish",
    name: "ERP Lavish",
    description: "Progiciel de gestion sur mesure : stocks, ventes, facturation et tableaux de bord.",
    fullDescription:
      "Conception d'un ERP pour centraliser les opérations de Lavish : gestion des stocks et des achats, ventes et facturation, suivi des équipes et tableaux de bord décisionnels. Rôles et permissions, exports et automatisations réduisent les tâches répétitives et fiabilisent les données.",
    image: placeholder("erp-lavish", "ERP Lavish"),
    tech: ["Next.js", "Supabase", "PostgreSQL", "React Query"],
    year: "2025",
    category: "Outil métier",
    role: "Fullstack & UI/UX",
  },
  {
    slug: "kmc",
    name: "KMC Restaurant",
    description: "Conception UI/UX sur Figma pour le site vitrine d'un restaurant moderne.",
    fullDescription:
      "Maquette UI/UX conçue sur Figma pour mettre en valeur l'identité et les services de KMC : page d'accueil immersive, carte des menus interactive, section réservations et version mobile optimisée. Un prototype fluide qui sert de base au développement du site.",
    image: shots("kmc", "kmc", 6, "KMC Restaurant"),
    Figma: "https://www.figma.com/design/TCugtAxhhVAUKikIZOt4vc/KMC-website?node-id=26-620&t=XLtDSzqPb2z8mTHm-1",
    tech: ["Figma", "UI/UX Design"],
    year: "2025",
    category: "Design",
    role: "UI/UX Designer",
  },
  {
    slug: "crm-powerlink",
    name: "CRM PowerLink",
    description: "CRM léger pour suivre prospects, relances et opportunités commerciales.",
    fullDescription:
      "Un CRM pensé pour une équipe commerciale : pipeline d'opportunités, fiches prospects, rappels de relance, historique des échanges et statistiques de conversion. Interface rapide, filtres puissants et notifications pour ne manquer aucune opportunité.",
    image: placeholder("crm-powerlink", "CRM PowerLink"),
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    year: "2025",
    category: "Outil métier",
    role: "Fullstack",
  },
  {
    slug: "website-lavish",
    name: "Site Lavish",
    description: "Site vitrine élégant pour présenter la marque Lavish et ses produits.",
    fullDescription:
      "Site vitrine conçu pour refléter le positionnement premium de Lavish : direction artistique épurée, mise en avant des produits, pages optimisées pour le référencement et formulaire de contact. Responsive et rapide.",
    image: placeholder("website-lavish", "Site Lavish"),
    tech: ["Next.js", "Tailwind CSS", "Figma"],
    year: "2025",
    category: "Site vitrine",
    role: "Design & développement",
  },
  {
    slug: "fjoe-construction",
    name: "FJOE Construction",
    description: "Site vitrine d'une entreprise de construction : réalisations, services et demande de devis.",
    fullDescription:
      "Site institutionnel pour FJOE Construction : présentation des services (gros œuvre, rénovation, aménagement), galerie de réalisations, équipe et formulaire de demande de devis. Structure claire et référencement local pour générer des contacts qualifiés.",
    image: placeholder("fjoe-construction", "FJOE Construction"),
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    year: "2025",
    category: "Site vitrine",
    role: "Design & développement",
  },
  {
    slug: "tara-card",
    name: "Tara Card",
    description: "Carte de visite digitale : profil partageable par QR code et lien unique.",
    fullDescription:
      "Tara Card permet de créer une carte de visite numérique partageable en un scan : coordonnées, réseaux, liens et bouton d'enregistrement du contact. Génération de QR code, page personnalisable et statistiques de consultation.",
    image: placeholder("tara-card", "Tara Card"),
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    year: "2025",
    category: "Application",
    role: "Fullstack & UI/UX",
  },
  {
    slug: "magic-booster",
    name: "Magic Booster",
    description: "Landing page produit orientée conversion, avec animations et preuve sociale.",
    fullDescription:
      "Page de présentation de Magic Booster : proposition de valeur claire, sections bénéfices, témoignages, FAQ et appels à l'action optimisés. Animations légères, chargement rapide et suivi des conversions.",
    image: placeholder("magic-booster", "Magic Booster"),
    tech: ["Next.js", "Motion", "Tailwind CSS"],
    year: "2025",
    category: "Landing page",
    role: "Design & développement",
  },
  {
    slug: "cortex-art-deco",
    name: "Cortex Art Déco",
    description: "Direction artistique et maquettes Figma dans un style Art déco contemporain.",
    fullDescription:
      "Exploration visuelle pour Cortex : système de design inspiré de l'Art déco (géométries, dorures, typographies à fort contraste) décliné en maquettes d'écrans, composants et déclinaisons mobiles.",
    image: placeholder("cortex-art-deco", "Cortex Art Déco"),
    tech: ["Figma", "UI/UX Design", "Branding"],
    year: "2025",
    category: "Design",
    role: "UI/UX Designer",
  },
  {
    slug: "ps5",
    name: "Landing Page PS5",
    description: "Landing page immersive pour mettre en avant les manettes PlayStation 5.",
    fullDescription:
      "Concept de landing page valorisant les manettes PS5 : design élégant, animations fluides et expérience immersive pensée pour les gamers.",
    image: shots("ps5", "ps5", 4, "Landing page PS5"),
    Figma: "https://www.figma.com/design/0pqD9RyPMi9ydD9uVd29wP/Untitled?node-id=0-1&t=SDhzwOalVRSIKQ9T-1",
    tech: ["Figma", "UI/UX Design"],
    year: "2023",
    category: "Design",
    role: "UI/UX Designer",
  },
]
