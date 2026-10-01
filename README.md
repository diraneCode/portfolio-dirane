# Portfolio — Dirane Mekem

Portfolio personnel de **Dirane Mekem**, Software Engineer & UI/UX Designer (Douala, Cameroun), construit avec Next.js 15 (App Router), React 19, Tailwind CSS et Motion.

Site : https://www.dirane.me

## Direction artistique

- **Palette** : nuit (`#121212`), blanc, bleu de marque (`#3B6CFF`, token `brand`), sections claires en alternance. Tokens dans `tailwind.config.ts` (`night`, `paper`, `brand`, `ash`, `ink`).
- **Filigrane de marque** : `components/shared/BrandPattern.tsx` (monogramme D+M avec repère de maquette, variantes `mark`, `grid`, `arc`) et `BrandMark` (logo seul). Posé discrètement en fond du hero, de l'à-propos, des services, de la section Art, de la bande CTA et du blog.
- **Typographie** : Poppins (texte et titres géants, `--font-sans`), Caveat Brush (titres de section façon "brush", `--font-brush`), Geist Mono (étiquettes, `--font-mono`). Chargées avec `next/font/google` dans `app/layout.tsx`.
- **Animations** : nom géant lettre par lettre et parallaxe du portrait (hero), titres qui se dessinent avec trait de pinceau bleu (`SectionHeading` : entourez des mots d'`*astérisques*`), manifeste plein écran qui s'allume au scroll (`Manifesto.tsx`), ouverture plein écran d'un projet en rideau (`ProjectOverlay.tsx`), survols orange sur cartes et boutons, respect de `prefers-reduced-motion`.

## Sections

Hero (style image de référence : nom géant sur portrait, pastille disponibilité, CTA orange, défilé d'outils) → À propos (+ statistiques) → Manifeste (plein écran, scroll) → Parcours (frise Expérience / Formation) → Services → Projets (bento / grille sur desktop, vertical / 2×2 sur mobile, présentation plein écran) → Art & création « Mes activités » (grille uniforme de photos portrait 3:4, légende au survol, lightbox, lien créateur de contenu) → Outils → Témoignages → Galerie → Bande CTA (devis, CV, WhatsApp) → Contact → Footer.

Pages : `/blog` (liste) et `/blog/[slug]` (article), générées statiquement à partir de `content/blog/*.md`.

## Structure

```
app/
  layout.tsx            # polices, métadonnées SEO, JSON-LD, Navbar/Footer
  page.tsx              # composition des sections
  robots.ts, sitemap.ts, manifest.ts
  opengraph-image.tsx   # image OG générée (1200×630, nuit/orange), réutilisée pour Twitter
  blog/                 # page de liste et page article (markdown via react-markdown)
  components/           # sections de la page
components/
  shared/               # Reveal, SectionHeading, BrushStroke, Marquee, Timeline (parcours), SocialLinks
  ui/                   # primitives shadcn restylées (button, input, drawer…)
  StaggeredMenu.tsx, DomeGallery.tsx, LogoLoop.tsx, CountUp.tsx
lib/
  site.ts               # identité, coordonnées, réseaux, navigation
  projectData.ts        # projets
  experienceData.ts     # expériences et formations (frise)
  artData.ts            # galerie d'art (dessins, vidéos, photos)
  blog.ts               # lecture des articles markdown (frontmatter + contenu)
  schemas.ts            # schémas zod des formulaires
services/, hooks/       # envoi contact / devis vers Supabase (React Query)
```

## Modifier le contenu

- Coordonnées, réseaux, disponibilité : `lib/site.ts`
- Projets : `lib/projectData.ts`
- Parcours : `lib/experienceData.ts` ; les logos sont dans `public/logos/` (les fichiers `.svg` 2tcorp, cinaf et iut sont des **placeholders** à remplacer par les vrais logos)
- Galerie photo : `lib/artData.ts` + fichiers dans `public/art/` (les images actuelles sont des **placeholders** à remplacer par vos photos, format portrait conseillé)
- Articles de blog : un fichier `.md` par article dans `content/blog/` avec un frontmatter `title`, `description`, `date`, `tags`, `cover`, `readingTime`
- Chaîne de contenu (TikTok…) : `lib/site.ts` → `content`
- Témoignages : `app/components/Testimonials.tsx`
- Outils : `app/components/Tools.tsx`

## Développement

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build && pnpm start
pnpm lint
```

Variables d'environnement (formulaires) :

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Le client Supabase est créé à la demande : le build fonctionne sans ces variables, seuls les envois de formulaire en ont besoin.
