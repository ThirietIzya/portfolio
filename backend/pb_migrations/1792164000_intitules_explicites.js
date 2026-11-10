/// <reference path="../pb_data/types.d.ts" />

// La page d'étude de cas n'invente plus de texte : un champ vide n'est pas affiché.
// Pour que les pages existantes restent identiques, on enregistre dans PocketBase
// les intitulés qui étaient jusque-là ajoutés par le code (seulement s'ils sont vides).
migrate((app) => {
  const remplir = (slug, valeurs) => {
    let record;
    try {
      record = app.findFirstRecordByData("projets", "slug", slug);
    } catch (e) {
      return; // projet absent
    }
    for (const [champ, valeur] of Object.entries(valeurs)) {
      if (!record.get(champ)) record.set(champ, valeur);
    }
    app.save(record);
  };

  remplir("olyvia", {
    contexte_label_realisation: "Ce que nous avons réalisé",
  });

  remplir("le-poids-de-l-ia", {
    contexte_label_realisation: "Ce que nous avons réalisé",
    contexte_titre_encart: "À retenir",
    strategie_phrase: "Mon rôle dans le projet.",
  });
}, (app) => {
  // Pas de retour arrière : les textes restent modifiables dans l'admin.
});
