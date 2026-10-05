# Portfolio — Dirane Mekem

Portfolio personnel de **Dirane Mekem**, Software Engineer & UI/UX Designer (Douala, Cameroun), construit avec Next.js 15 (App Router), React 19, Tailwind CSS et Motion.

Site : https://www.dirane.me

## Direction artistique

- **Palette** : nuit (`#121212`), blanc, bleu de marque `#2F5BEB` (token `brand`, contraste ≥ 4.5:1 avec du blanc) et `brand-light` `#7D9BFF` pour le texte bleu sur fond sombre. Sections claires en alternance. Tokens dans `tailwind.config.ts`.
- **Filigrane de marque** : `components/shared/BrandPattern.tsx` (monogramme D+M avec repère de maquette, variantes `mark`, `grid`, `arc`) et `BrandMark` (logo seul). Posé discrètement en fond du hero, de l'à-propos, des services, de la section Art, de la bande CTA et du blog.
- **Typographie** : Poppins (texte et nom géant du hero, `--font-sans`), Syne (titres de section, menu, blog, `--font-display`), Geist Mono (étiquettes, `--font-mono`). Chargées avec `next/font/google` dans `app/layout.tsx`.
- **Animations** : nom géant lettre par lettre et parallaxe du portrait (hero), titres qui montent mot à mot avec un trait bleu sous les mots entre `*astérisques*` (`SectionHeading`), signe de marque minimal : une courbe fine qui se trace au scroll (`BrushBlob`), manifeste plein écran qui s'allume au scroll (`Manifesto.tsx`), ouverture plein écran d'un projet en rideau (`ProjectOverlay.tsx`), survols orange sur cartes et boutons, respect de `prefers-reduced-motion`.

## Sections

Hero (style image de référence : nom géant sur portrait, pastille disponibilité, CTA orange, défilé d'outils) → À propos (+ statistiques) → Manifeste (plein écran, scroll) → Parcours (frise Expérience / Formation) → Services → Projets (bento / grille sur desktop, vertical / 2×2 sur mobile, présentation plein écran) → Art & création « Mes activités » (grille uniforme de photos portrait 3:4, légende au survol, lightbox, lien créateur de contenu) → Outils → Témoignages → Galerie → Bande CTA (devis, CV, WhatsApp) → Contact (carte en deux panneaux : coordonnées sur fond crème avec motif de courbes de niveau `TopoPattern`, formulaire sur fond blanc) → Footer.

Pages : `/blog` (liste : vignette, date, titre, résumé) et `/blog/[slug]` (article sur une colonne avec image de couverture, barre de partage — copie du lien, X, LinkedIn, WhatsApp, Facebook — et bloc d'abonnement à la newsletter), générées statiquement à partir de `content/blog/*.md`.

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
- Projets : `lib/projectData.ts` ; captures brutes dans `public/projets/<slug>/<slug>-N.png`. Lancez `python3 scripts/project-visuals.py` (ou `… <slug>` pour un seul projet) pour générer `cover.webp` et `visuel-N.webp`, puis déclarez-les avec `visuals("<slug>", N, "Nom")`. Couleurs du dégradé et recadrages par projet : dictionnaire `PROJECTS` en tête du script (Pillow et numpy requis).
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

Tables attendues côté Supabase : `contact`, `devis` et `newsletter`. Pour la newsletter :

```sql
create table if not exists public.newsletter (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text default 'blog',
  created_at timestamptz default now()
);
alter table public.newsletter enable row level security;
create policy "insertion publique" on public.newsletter for insert to anon with check (true);
```

## Qualité et SEO

- Métadonnées complètes (titre, description, canonical, hreflang, Open Graph `profile`, Twitter `summary_large_image`, géolocalisation Douala), images OG/Twitter générées, `robots.ts`, `sitemap.ts` (accueil, blog, articles), `manifest.ts`.
- Données structurées JSON-LD : `Person`, `WebSite`, `ProfessionalService` (avec `GeoCoordinates`), `Blog`, et `BlogPosting` sur chaque article.
- Chatbot local (sans API) dans `app/components/chatbot.tsx` : réponses sur les services, tarifs, projets, parcours, disponibilité, contact, blog et contenu, construites à partir de `lib/site.ts`, `lib/projectData.ts` et `lib/experienceData.ts`.
- Audit Lighthouse (build de production, page d'accueil) : SEO 100, bonnes pratiques 100, accessibilité ≥ 97. La galerie 3D et le chatbot sont chargés à la demande.
