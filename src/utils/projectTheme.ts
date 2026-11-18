/**
 * Couleurs associées à chaque projet, selon sa position dans la liste.
 * Partagées entre les listes (accueil, page Projets) et les pages d'étude de cas,
 * pour qu'un projet garde la même couleur partout.
 */
export interface ProjectTheme {
  /** Couleur d'accent : labels, filets, puces */
  accent: string;
  /** Fond pastel des cartes et de la galerie */
  cardBg: string;
  /** Couleur des petits textes posés sur le fond pastel (contraste ≥ 4,5:1, norme WCAG AA) */
  cardText: string;
}

const palette: ProjectTheme[] = [
  { accent: 'var(--couleur-élément2)', cardBg: '#d9cfe6', cardText: 'var(--couleur-élément2)' }, // violet
  { accent: 'var(--couleur-élément)', cardBg: '#f6d6d2', cardText: '#8f4645' },                  // rose
  { accent: 'var(--couleur-élément3)', cardBg: '#dbe3cf', cardText: '#565f48' },                 // vert
  { accent: '#7a3e1d', cardBg: '#f8e6b4', cardText: '#7a3e1d' },                                 // jaune
];

export function getProjectTheme(index: number): ProjectTheme {
  return palette[index % palette.length];
}

/** Numéro affiché « 03 / 03 » */
export function formatProjectNumber(index: number, total: number): string {
  return `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
}

/** Découpe un texte PocketBase en paragraphes (une ligne = un paragraphe) */
export function toParagraphs(text?: string): string[] {
  if (!text) return [];
  return text.split(/\r?\n/).map((p) => p.trim()).filter(Boolean);
}
