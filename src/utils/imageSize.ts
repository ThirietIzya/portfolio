import { inferRemoteSize } from 'astro:assets';

/**
 * Lit les dimensions d'une image PocketBase au moment du build
 * (inferRemoteSize ne télécharge que le début du fichier).
 * Sert à donner au cadre la forme exacte de l'image : rien n'est recadré.
 */
export async function getImageSize(src: string): Promise<{ imageWidth?: number; imageHeight?: number }> {
  if (!src) return {};
  try {
    const { width, height } = await inferRemoteSize(src);
    return { imageWidth: width, imageHeight: height };
  } catch {
    return {};
  }
}
