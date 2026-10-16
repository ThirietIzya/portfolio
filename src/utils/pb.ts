import PocketBase from 'pocketbase';

/**
 * URL de base de PocketBase.
 * Peut être configurée via la variable d'environnement PUBLIC_POCKETBASE_URL
 * ou utilise par défaut http://127.0.0.1:8090 (PocketBase local).
 */
export const POCKETBASE_URL =
  import.meta.env.PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090';

export const pb = new PocketBase(POCKETBASE_URL);

// Désactive l'auto-cancellation pour éviter l'annulation des requêtes concurrentes
pb.autoCancellation(false);

export interface ProjectContext {
  section_title?: string;
  sidebar_label?: string;
  sidebar_text?: string;
  main_description?: string;
  highlight_box?: string;
}

export interface ProjectStrategy {
  section_title?: string;
  sidebar_label?: string;
  main_description?: string;
  skills_tags?: string[];
}

export interface ProjectDesignIdentity {
  section_title?: string;
  moodboard_images?: string[];
  symbol_title?: string;
  symbol_description?: string;
  typography_description?: string;
  colors_description?: string;
}

export interface ProjectExecution {
  section_title?: string;
  ui_assets?: string[];
}

export interface ProjectLiveLink {
  label?: string;
  url?: string;
}

export interface PocketBaseProject {
  id: string;
  // Champs en français (natifs PocketBase)
  titre: string;
  slug?: string;
  roles?: string;
  description_courte?: string;
  mockups_principaux?: string[];

  // Contexte
  contexte_titre_section?: string;
  contexte_label_lateral?: string;
  contexte_texte_lateral?: string;
  contexte_description_principale?: string;
  contexte_encart_mis_en_avant?: string;

  // Stratégie
  strategie_titre_section?: string;
  strategie_label_lateral?: string;
  strategie_description_principale?: string;
  strategie_tags_competences?: string;

  // Identité visuelle
  design_titre_section?: string;
  design_images_moodboard?: string[];
  design_titre_symbole?: string;
  design_description_symbole?: string;
  design_description_typographie?: string;
  design_description_couleurs?: string;

  // Réalisation
  realisation_titre_section?: string;
  realisation_visuels_ui?: string[];

  // Lien direct vers le site
  lien_site_label?: string;
  lien_site_url?: string;

  // Alias anglophones & rétro-compatibilité
  title?: string;
  short_description?: string;
  hero_mockups?: string[];
  context_section_title?: string;
  context_sidebar_label?: string;
  context_sidebar_text?: string;
  context_main_description?: string;
  context_highlight_box?: string;
  strategy_section_title?: string;
  strategy_sidebar_label?: string;
  strategy_main_description?: string;
  strategy_skills_tags?: string;
  design_section_title?: string;
  design_moodboard_images?: string[];
  design_symbol_title?: string;
  design_symbol_description?: string;
  design_typography_description?: string;
  design_colors_description?: string;
  execution_section_title?: string;
  execution_ui_assets?: string[];
  live_link_label?: string;
  live_link_url?: string;

  // Objets imbriqués (pour accès pratique)
  context?: ProjectContext;
  strategy?: ProjectStrategy;
  design_identity?: ProjectDesignIdentity;
  execution?: ProjectExecution;
  live_link?: ProjectLiveLink;

  // Alias historiques
  Titre?: string;
  SousTitre?: string;
  Description?: string;
  imagesPrincipales?: string[];
  GalerieImages?: string[];
  LienSite?: string;
  categorie?: 'communication' | 'creation' | 'developpement' | string;
  tags?: string;
  contribution?: string;
  ordre?: number;
  created: string;
  updated: string;
  collectionId: string;
  collectionName: string;
}

export interface PocketBaseMessage {
  id?: string;
  Nom: string;
  Email: string;
  Message: string;
  created?: string;
  updated?: string;
}

/**
 * Retourne l'URL complète d'un fichier hébergé dans PocketBase
 */
export function getPbImageUrl(
  record: { id?: string; collectionId?: string; collectionName?: string },
  filename?: string,
  thumb?: string
): string {
  if (!record || !filename) return '';
  if (filename.startsWith('/') || filename.startsWith('http')) return filename;
  return pb.files.getURL(record, filename, thumb ? { thumb } : undefined);
}

/**
 * Récupère tous les projets depuis PocketBase avec gestion de fallback
 */
export async function getProjects(): Promise<PocketBaseProject[]> {
  try {
    let records: PocketBaseProject[] = [];
    try {
      records = await pb.collection('projets').getFullList<PocketBaseProject>({
        sort: 'created',
        requestKey: null,
      });
    } catch {
      records = await pb.collection('projet').getFullList<PocketBaseProject>({
        sort: 'created',
        requestKey: null,
      });
    }

    return records.map((p) => {
      const title = p.titre || p.title || p.Titre || 'Sans titre';
      const shortDesc = p.description_courte || p.short_description || p.Description || '';
      const heroMockups = p.mockups_principaux || p.hero_mockups || p.imagesPrincipales || [];
      const moodboardImages = p.design_images_moodboard || p.design_moodboard_images || [];
      const uiAssets = p.realisation_visuels_ui || p.execution_ui_assets || p.GalerieImages || [];
      const siteUrl = p.lien_site_url || p.live_link_url || p.LienSite || '';
      const siteLabel = p.lien_site_label || p.live_link_label || 'Découvrir le site';

      const rolesArray = typeof p.roles === 'string'
        ? p.roles.split(',').map((r: string) => r.trim()).filter(Boolean)
        : (Array.isArray(p.roles) ? p.roles : []);

      const skillsTags = typeof (p.strategie_tags_competences || p.strategy_skills_tags) === 'string'
        ? (p.strategie_tags_competences || p.strategy_skills_tags || '').split(',').map((t: string) => t.trim()).filter(Boolean)
        : [];

      return {
        ...p,
        titre: title,
        title: title,
        Titre: title,
        description_courte: shortDesc,
        short_description: shortDesc,
        Description: shortDesc,
        mockups_principaux: heroMockups,
        hero_mockups: heroMockups,
        imagesPrincipales: heroMockups,
        design_images_moodboard: moodboardImages,
        design_moodboard_images: moodboardImages,
        realisation_visuels_ui: uiAssets,
        execution_ui_assets: uiAssets,
        GalerieImages: uiAssets,
        lien_site_url: siteUrl,
        live_link_url: siteUrl,
        LienSite: siteUrl,
        lien_site_label: siteLabel,
        live_link_label: siteLabel,
        tags: p.tags || (rolesArray.length > 0 ? rolesArray.join(' / ') : ''),
        context: p.context || {
          section_title: p.contexte_titre_section || p.context_section_title,
          sidebar_label: p.contexte_label_lateral || p.context_sidebar_label,
          sidebar_text: p.contexte_texte_lateral || p.context_sidebar_text,
          main_description: p.contexte_description_principale || p.context_main_description,
          highlight_box: p.contexte_encart_mis_en_avant || p.context_highlight_box,
        },
        strategy: p.strategy || {
          section_title: p.strategie_titre_section || p.strategy_section_title,
          sidebar_label: p.strategie_label_lateral || p.strategy_sidebar_label,
          main_description: p.strategie_description_principale || p.strategy_main_description,
          skills_tags: skillsTags,
        },
        design_identity: p.design_identity || {
          section_title: p.design_titre_section || p.design_section_title,
          moodboard_images: moodboardImages,
          symbol_title: p.design_titre_symbole || p.design_symbol_title,
          symbol_description: p.design_description_symbole || p.design_symbol_description,
          typography_description: p.design_description_typographie || p.design_typography_description,
          colors_description: p.design_description_couleurs || p.design_colors_description,
        },
        execution: p.execution || {
          section_title: p.realisation_titre_section || p.execution_section_title,
          ui_assets: uiAssets,
        },
        live_link: p.live_link || {
          label: siteLabel,
          url: siteUrl,
        },
      };
    });
  } catch (error) {
    console.warn(
      '[PocketBase] Impossible de contacter PocketBase sur ' + POCKETBASE_URL + '. Utilisation des données locales de secours.',
      error
    );
    return [];
  }
}

/**
 * Envoie un message dans la collection "formulaire"
 */
export async function sendContactMessage(data: {
  Nom: string;
  Email: string;
  Message: string;
}): Promise<PocketBaseMessage> {
  return await pb.collection('formulaire').create<PocketBaseMessage>(data);
}

export default pb;

