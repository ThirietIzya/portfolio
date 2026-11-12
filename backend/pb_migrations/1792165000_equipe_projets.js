/// <reference path="../pb_data/types.d.ts" />

// Crédit des coéquipières sur les projets réalisés en groupe (droit d'auteur).
// Affiché en haut de l'étude de cas : « En équipe avec … ». Vide pour un projet individuel.
migrate((app) => {
  const collection = app.findCollectionByNameOrId("projets");
  collection.fields.add(new TextField({ name: "equipe" }));
  app.save(collection);

  const remplir = (slug, equipe) => {
    try {
      const record = app.findFirstRecordByData("projets", "slug", slug);
      if (!record.get("equipe")) {
        record.set("equipe", equipe);
        app.save(record);
      }
    } catch (e) {
      // projet absent
    }
  };

  remplir("olyvia", "Bambou Franceschini, Laura Bailly");
  remplir("le-poids-de-l-ia", "Laura Bailly");
}, (app) => {
  const collection = app.findCollectionByNameOrId("projets");
  collection.fields.removeByName("equipe");
  return app.save(collection);
});
