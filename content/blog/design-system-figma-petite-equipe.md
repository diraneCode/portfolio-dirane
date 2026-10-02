---
title: "Construire un design system Figma pour une petite équipe"
description: "Comment je structure un design system léger (couleurs, typographie, composants) qui accélère la production sans devenir une usine à gaz."
date: "2026-08-04"
tags: ["UI/UX", "Figma", "Design system"]
cover: "/projets/kmc/kmc-1.png"
readingTime: 5
---

Un design system n'est pas réservé aux grandes entreprises. Pour une start-up ou un restaurant qui lance son site, un système léger évite de redessiner le même bouton quinze fois et garantit une interface cohérente du premier écran au dernier.

## Commencer par les fondations

Avant tout composant, je fixe trois choses :

1. **Les couleurs** : une couleur de marque, une neutre pour les fonds, une pour le texte, et deux ou trois états (succès, erreur, information). Chaque couleur a une variable Figma et son équivalent dans le code.
2. **La typographie** : une police pour les titres, une pour le texte, et une échelle de six tailles maximum.
3. **L'espacement** : une grille de 4 px et une poignée de valeurs (4, 8, 12, 16, 24, 32, 48, 64).

## Des composants, mais pas trop

Je démarre avec les composants qui reviennent partout : bouton, champ de formulaire, carte, badge, navigation. Chacun a ses variantes (taille, état, type) gérées par les propriétés de composant Figma.

Tout le reste attend d'être utilisé au moins deux fois sur deux écrans différents avant d'entrer dans le système.

## Nommer comme dans le code

Le gain le plus sous-estimé : nommer les styles Figma comme les tokens du code. `brand/600`, `text/muted`, `radius/lg`. Quand un développeur ouvre la maquette, il reconnaît immédiatement ce qu'il doit écrire.

## Documenter en une page

Une page Figma « Guide » avec les couleurs, les tailles de texte et un exemple de chaque composant. Pas de PDF de quarante pages : personne ne le lit.

## Faire vivre le système

Un design system meurt quand il n'est pas maintenu. Je prévois un moment court après chaque projet pour y intégrer les nouveaux composants et retirer ceux qui ne servent plus.

> Le bon design system est celui qu'on utilise vraiment, pas celui qui impressionne en réunion.
