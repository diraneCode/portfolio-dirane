export type TimelineEntry = {
  title: string;
  organization: string;
  /** Logo de la structure (fichier dans /public/logos). Les .svg sont des placeholders à remplacer. */
  logo?: string;
  start: string;
  end: string;
  duration: string;
  location?: string;
  summary?: string;
};

export const experiences: TimelineEntry[] = [
  {
    title: "Développeur web (stagiaire)",
    organization: "2TCorp",
    logo: "/logos/2tcorp.svg",
    start: "Juin 2023",
    end: "Juil. 2023",
    duration: "02 mois",
    location: "Douala, Cameroun",
    summary:
      "Participation à la conception et à la mise en œuvre d'applications web : intégration d'interfaces, optimisation du code et amélioration des fonctionnalités.",
  },
  {
    title: "Développeur Frontend",
    organization: "CINAF",
    logo: "/logos/cinaf.svg",
    start: "Août 2024",
    end: "Déc. 2024",
    duration: "05 mois",
    location: "Douala, Cameroun",
    summary:
      "Intégration des maquettes Figma et développement web de la plateforme : transformation des concepts visuels en interfaces fonctionnelles, performantes et fidèles au design.",
  },
  {
    title: "Fullstack Developer & UI/UX Designer",
    organization: "Build Together Group",
    logo: "/logos/build-together.png",
    start: "Fév. 2025",
    end: "Oct. 2025",
    duration: "09 mois",
    location: "Douala, Cameroun",
    summary:
      "Conception des interfaces et des applications web et mobiles, formation des collaborateurs aux outils internes (CRM), suivi technique des plateformes : correctifs, mises à jour et monitoring.",
  },
];

export const education: TimelineEntry[] = [
  {
    title: "Informatique — Licence 1",
    organization: "Université de Dschang",
    logo: "/logos/univ-dschang.png",
    start: "2021",
    end: "2022",
    duration: "01 an",
  },
  {
    title: "Diplôme d'Études Collégiales (Canada)",
    organization: "Institut Universitaire de la Côte",
    logo: "/logos/iuc.png",
    start: "2022",
    end: "2024",
    duration: "02 ans",
  },
  {
    title: "Licence Technologique",
    organization: "Institut Universitaire de Technologie",
    logo: "/logos/iut.svg",
    start: "2024",
    end: "2025",
    duration: "01 an",
  },
];
