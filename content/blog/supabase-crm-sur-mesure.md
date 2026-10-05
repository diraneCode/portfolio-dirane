---
title: "Supabase pour un CRM sur mesure : ce que j'ai appris"
description: "Retour d'expérience sur la construction d'un CRM d'entreprise avec Next.js et Supabase : schéma, sécurité par lignes, temps réel et pièges à éviter."
date: "2026-06-20"
tags: ["Supabase", "Next.js", "Back-end"]
cover: "/projets/crm-bt/cover.webp"
readingTime: 7
---

Pour Build Together Group, j'ai conçu un CRM qui centralise prospects, clients, ressources humaines et comptabilité. Supabase a permis de livrer vite sans renoncer à la robustesse. Voici ce qui a compté.

## Un schéma pensé avant la première ligne de code

J'ai commencé par un schéma relationnel propre : `organisations`, `contacts`, `opportunites`, `factures`, avec des clés étrangères et des contraintes. Le temps passé là se récupère dix fois plus tard.

## La sécurité au niveau des lignes (RLS)

C'est la fonctionnalité qui change tout. Chaque table a des politiques qui définissent qui peut lire ou modifier quoi, directement dans la base.

```sql
create policy "Les commerciaux voient leurs prospects"
on prospects for select
using (auth.uid() = commercial_id or exists (
  select 1 from profils where id = auth.uid() and role = 'admin'
));
```

Résultat : même si une requête côté client est mal écrite, la base refuse ce qui ne doit pas sortir.

## Le temps réel, avec parcimonie

Supabase Realtime permet d'écouter les changements d'une table. Je l'utilise uniquement pour le tableau de bord et les notifications. Partout ailleurs, React Query avec une invalidation ciblée suffit et coûte moins cher.

## Les fonctions Edge pour la logique sensible

Génération de factures PDF, envoi d'e-mails, calcul de commissions : tout ce qui ne doit pas être manipulable depuis le navigateur passe par une fonction Edge ou une fonction SQL `security definer`.

## Les pièges rencontrés

- **Oublier d'activer RLS sur une nouvelle table** : par défaut, tout est ouvert. Je l'active dès la création.
- **Les requêtes trop larges** : sélectionner `*` sur une table de 40 colonnes pour afficher trois champs. Précisez les colonnes.
- **Les migrations faites à la main dans l'interface** : utilisez le CLI Supabase et versionnez vos migrations.

## Ce que j'en retiens

Supabase est un excellent choix pour un outil métier de petite ou moyenne taille, à condition de traiter la base comme une vraie base : schéma, contraintes, politiques. Le gain de temps est réel, la dette technique reste maîtrisée.
