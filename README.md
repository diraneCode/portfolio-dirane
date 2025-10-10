# Portfolio Next.js

Il s'agit d'un **portfolio Next.js** créé avec [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  
Il présente mon travail, mes projets et mes compétences à travers une interface moderne, responsive et performante.

## 🚀 Fonctionnalités

- **Application mono-page (SPA)** avec navigation fluide entre les sections.
- **Design responsive** optimisé pour ordinateur, tablette et mobile.
- **UI Glassmorphism** pour un rendu moderne et élégant.
- **Animations et transitions** avec GSAP pour une expérience utilisateur soignée.
- **SEO-friendly** avec meta tags, sitemap et données structurées.
- **Chargement paresseux des images** pour améliorer les performances.
- **Mode sombre** disponible.
- **Accessibilité** et HTML sémantique pour une meilleure UX.

## 🛠 Stack technique

- [Next.js](https://nextjs.org/) - Framework React pour SSR et sites statiques
- [React](https://reactjs.org/) - Librairie UI
- [GSAP](https://greensock.com/gsap/) - Librairie d’animations
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [React Icons](https://react-icons.github.io/react-icons/) - Librairie d’icônes
- [Vercel](https://vercel.com/) - Plateforme de déploiement

## 📦 Installation et démarrage

Clonez le projet :

````bash
git clone https://github.com/votre-utilisateur/portfolio.git
cd portfolio

Installez les dépendances :
npm install
# ou
yarn install
# ou
pnpm install

## Getting Started

Lancez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
````

Ouvrez http://localhost:3000
 dans votre navigateur pour voir le portfolio.

Vous pouvez commencer à modifier la page en éditant app/page.tsx. La page se mettra à jour automatiquement.

⚙️ Configuration et SEO

Le site utilise next-sitemap
 pour générer le sitemap et le robots.txt.

Meta tags et Open Graph inclus pour le partage sur les réseaux sociaux et le SEO.

Les images sont optimisées et chargées de manière paresseuse grâce au composant Image de Next.js.

portfolio/
├─ app/                 # Fichiers principaux de l'application
│  └─ page.tsx          # Page d'accueil
├─ components/          # Composants React réutilisables
├─ public/              # Assets statiques (images, fonts, icônes)
├─ styles/              # Styles Tailwind & globaux
├─ next.config.js       # Configuration Next.js
├─ package.json         # Dépendances et scripts
└─ next-sitemap.config.js # Configuration du sitemap

🌐 Déploiement

npm run build
npm run start

Ou connectez directement votre repository GitHub à Vercel
 pour un déploiement automatique.

📖 Ressources

Documentation Next.js
 - Tout savoir sur Next.js.

Learn Next.js
 - Tutoriel interactif Next.js.

Documentation Tailwind CSS
 - Guide de stylisation.

Documentation GSAP
 - Guide d’animations.

💡 Notes

Le portfolio est une application mono-page avec sections ancrées pour une navigation fluide.

Optimisations SEO : meta tags, sitemap, robots.txt et HTML sémantique.

Design léger, rapide et esthétique avec glassmorphism et animations subtiles.

Fait avec ❤️ avec Next.js, React, Tailwind CSS et GSAP.
