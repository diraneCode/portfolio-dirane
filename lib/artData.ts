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
  { title: "Cortex Agency", kind: "photo", src: "/art/dirane-cortex.webp", year: "2026" },
  { title: "CEO", kind: "photo", src: "/art/dirane-ceo.webp", year: "2026" },
  { title: "Studio Photo", kind: "photo", src: "/art/dirane-conference.webp", year: "2025" },
]

export const artKindLabel: Record<ArtKind, string> = {
  photo: "Photo",
  dessin: "Dessin",
}
