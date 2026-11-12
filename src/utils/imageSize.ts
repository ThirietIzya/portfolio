import { getImage } from 'astro:assets';

export interface OptimizedImage {
  src: string;
  width?: number;
  height?: number;
}

/**
 * Prépare une image PocketBase pour le site, au moment du build :
 * Astro la télécharge, la redimensionne (largeur max) et la convertit en WebP
 * dans dist/_astro. Le site en ligne ne dépend donc plus de PocketBase pour ses images,
 * et chaque image a ses dimensions (le cadre prend sa forme exacte, la page ne « saute » pas).
 * Si l'image est inaccessible, on garde l'adresse d'origine.
 */
export async function optimizeImage(src: string, maxWidth = 1600): Promise<OptimizedImage> {
  if (!src) return { src };
  try {
    const original = await getImage({ src, inferSize: true });
    const width = Math.min(Number(original.attributes.width), maxWidth);
    const img = await getImage({ src, inferSize: true, width, format: 'webp', quality: 80 });
    return { src: img.src, width: Number(img.attributes.width), height: Number(img.attributes.height) };
  } catch {
    return { src };
  }
}
