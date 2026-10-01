export type ArtKind = "photo" | "dessin"

export type ArtPiece = {
  title: string
  kind: ArtKind
  /** Image dans /public/art/ (format portrait conseillé, la grille est en 3:4). */
  src: string
  /** Lien externe optionnel. */
  href?: string
  year?: string
}

/**
 * Galerie photo : remplacez ces entrées par vos propres photos.
 * Déposez les fichiers dans /public/art/ puis référencez-les ici.
 */
export const artPieces: ArtPiece[] = [
  { title: "Studio", kind: "photo", src: "/art/dessin-1.jpg", year: "2025" },
  { title: "Lumière rouge", kind: "photo", src: "/art/dessin-2.jpg", year: "2024" },
  { title: "Douala", kind: "photo", src: "/art/video-1.jpg", year: "2025" },
  { title: "Code Connect", kind: "photo", src: "/art/dessin-3.jpg", year: "2025" },
  { title: "En ville", kind: "photo", src: "/art/video-2.jpg", year: "2025" },
  { title: "Lumière & béton", kind: "photo", src: "/art/photo-1.jpg", year: "2024" },
]

export const artKindLabel: Record<ArtKind, string> = {
  photo: "Photo",
  dessin: "Dessin",
}
