/// <reference path="../pb_data/types.d.ts" />

// Ajoute les champs utilisés par les listes de projets (accueil + page Projets),
// qui étaient jusque-là écrits en dur dans le code pour Olyvia et Wenddy :
// - categorie    : clé du filtre de la page Projets
// - type_projet  : sur-titre coloré (ex. « PROJET EN ÉQUIPE · WEB APP »)
// - contribution : texte « Ma contribution » de la liste
migrate((app) => {
  const collection = app.findCollectionByNameOrId("projets");

  collection.fields.add(new SelectField({
    name: "categorie",
    maxSelect: 1,
    values: ["communication", "creation", "developpement"],
  }));
  collection.fields.add(new TextField({ name: "type_projet" }));
  collection.fields.add(new TextField({ name: "contribution" }));

  app.save(collection);

  // Reprise des textes qui étaient écrits en dur dans le code
  const remplir = (slug, valeurs) => {
    try {
      const record = app.findFirstRecordByData("projets", "slug", slug);
      for (const [champ, valeur] of Object.entries(valeurs)) {
        if (!record.get(champ)) record.set(champ, valeur);
      }
      app.save(record);
    } catch (e) {
      // Projet absent : rien à remplir
    }
  };

  remplir("olyvia", {
    categorie: "communication",
    type_projet: "PROJET COLLABORATIF · APPLICATION FICTIVE",
    contribution: "J’ai pris en charge la communication : plan de communication, budget détaillé de lancement, contenus de promotion, réalisation audiovisuelle et montage.",
  });

  remplir("wenddy", {
    categorie: "developpement",
    type_projet: "PROJET EN ÉQUIPE · WEB APP",
    contribution: "J’ai réalisé les dossiers d’ergonomie et d’éco-conception, et travaillé avec mon équipe sur le graphisme et le développement web de l’application.",
  });

  // La contribution reste à rédiger dans l'admin PocketBase
  remplir("le-poids-de-l-ia", {
    categorie: "developpement",
    type_projet: "SAÉ 303 · OPEN DATA UNIVERSITY",
  });
}, (app) => {
  const collection = app.findCollectionByNameOrId("projets");

  collection.fields.removeByName("categorie");
  collection.fields.removeByName("type_projet");
  collection.fields.removeByName("contribution");

  return app.save(collection);
});
