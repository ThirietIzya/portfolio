import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/**
 * Défilement doux avec Lenis (https://github.com/darkroomengineering/lenis).
 * Désactivé si le visiteur a demandé de réduire les animations dans ses réglages :
 * il garde alors le défilement normal du navigateur.
 */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const lenis = reduceMotion
  ? null
  : new Lenis({
      autoRaf: true, // Lenis gère lui-même sa boucle d'animation
      // Liens vers une ancre (#projets…) : défilement doux, décalé de la hauteur du header collant
      anchors: { offset: -90 },
    });

/** Remonte en haut de la page (doux avec Lenis, instantané sinon) */
export function scrollToTop() {
  if (lenis) lenis.scrollTo(0);
  else window.scrollTo({ top: 0 });
}
