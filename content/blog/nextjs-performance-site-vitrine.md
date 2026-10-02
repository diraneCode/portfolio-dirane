---
title: "Next.js : 7 réglages pour un site vitrine qui charge vite"
description: "Les optimisations concrètes que j'applique sur chaque site client pour obtenir un score Lighthouse élevé sans sacrifier le design."
date: "2026-09-12"
tags: ["Next.js", "Performance", "SEO"]
cover: "/projets/website-bt/bt-1.png"
readingTime: 6
---

Un site vitrine qui met trois secondes à s'afficher perd une bonne partie de ses visiteurs avant même la première ligne de texte. Sur mes projets récents (clinique, agence, restaurant), voici les réglages qui font réellement la différence.

## 1. Des images servies par `next/image`

C'est le levier numéro un. Le composant `Image` redimensionne, convertit en WebP ou AVIF et charge en différé tout ce qui n'est pas visible à l'écran.

- Donnez toujours une largeur et une hauteur (ou `fill` avec un conteneur dimensionné) pour éviter les sauts de mise en page.
- Renseignez `sizes` : sans cette information, le navigateur télécharge l'image la plus large.
- Marquez l'image du hero avec `priority` et rien d'autre.

```tsx
<Image
  src="/projets/clinique-1.png"
  alt="Page d'accueil de la clinique"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  priority
/>
```

## 2. Des polices chargées avec `next/font`

Les polices Google chargées par un lien classique bloquent le rendu. Avec `next/font/google`, elles sont auto-hébergées, découpées par sous-ensemble et appliquées avec `display: swap`.

## 3. Un hero sans vidéo lourde

Une vidéo d'arrière-plan de 8 Mo ruine tous les autres efforts. Préférez une image fixe soignée, ou une vidéo très courte, compressée, sans son, chargée après l'affichage du texte.

## 4. Les composants lourds en chargement différé

Galeries 3D, cartes interactives, lecteurs vidéo : importez-les avec `next/dynamic` et `ssr: false` quand ils n'ont pas besoin d'être indexés.

## 5. Des métadonnées complètes

Titre, description, image Open Graph, URL canonique, `robots.ts` et `sitemap.ts`. Next.js génère tout cela depuis l'App Router, sans dépendance.

## 6. Des animations respectueuses

Les animations au scroll doivent être légères (opacité, translation) et désactivées quand l'utilisateur demande moins de mouvement (`prefers-reduced-motion`).

## 7. Mesurer, puis recommencer

Lancez Lighthouse en mode mobile, sur un vrai build de production. Corrigez le point le plus coûteux, remesurez. Trois itérations suffisent souvent pour passer de 60 à plus de 90.

> Un site rapide n'est pas un site vide. C'est un site où chaque octet a une raison d'être.
