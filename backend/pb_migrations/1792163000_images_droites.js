/// <reference path="../pb_data/types.d.ts" />

// Remplace les images exportées déjà inclinées ou déjà encadrées (« timbres » Figma)
// par les captures d'origine, droites et sans cadre, au format WebP.
// Le cadre et la légère rotation sont désormais ajoutés par le code (Stamp.astro),
// ce qui garantit que chaque image remplit exactement son cadre.
// Les fichiers sources sont dans backend/pb_import/ (chemin relatif au dossier
// depuis lequel PocketBase est lancé : la racine du projet avec « npm run backend »).
migrate((app) => {
  const fichier = (nom) => $filesystem.fileFromPath(`backend/pb_import/${nom}.webp`);

  const remplacer = (slug, champs) => {
    let record;
    try {
      record = app.findFirstRecordByData("projets", "slug", slug);
    } catch (e) {
      return; // projet absent
    }
    for (const [champ, valeur] of Object.entries(champs)) {
      record.set(champ, Array.isArray(valeur) ? valeur.map(fichier) : valeur);
    }
    app.save(record);
  };

  // L'ordre des images suit celui des légendes (legendes_mockups, legendes_moodboard)
  remplacer("olyvia", {
    mockups_principaux: ["olyvia-salon", "olyvia-accueil-mobile", "olyvia-compte-mobile"],
    design_images_moodboard: ["olyvia-moodboard", "olyvia-recherches-logo"],
  });

  remplacer("wenddy", {
    mockups_principaux: ["wenddy-accueil", "wenddy-compte-mobile", "wenddy-progres-mobile"],
    design_images_moodboard: ["wenddy-moodboard", "wenddy-mascotte", "wenddy-recherches-logo"],
    // Les images n'ont plus leur cadre : le code l'ajoute, comme pour les autres projets
    images_cadre_inclus: false,
  });
}, (app) => {
  // Pas de retour arrière automatique : les anciennes images sont supprimées par PocketBase.
});
