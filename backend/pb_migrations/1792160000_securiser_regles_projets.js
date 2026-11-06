/// <reference path="../pb_data/types.d.ts" />

// Les projets sont lisibles par tout le monde (le site doit pouvoir les afficher),
// mais seule l'administratrice peut les créer, modifier ou supprimer.
// En PocketBase : "" = public, null = superutilisateurs uniquement.
migrate((app) => {
  const collection = app.findCollectionByNameOrId("projets");

  collection.listRule = "";
  collection.viewRule = "";
  collection.createRule = null;
  collection.updateRule = null;
  collection.deleteRule = null;

  return app.save(collection);
}, (app) => {
  // Retour arrière : remet les anciennes règles (tout public)
  const collection = app.findCollectionByNameOrId("projets");

  collection.createRule = "";
  collection.updateRule = "";
  collection.deleteRule = "";

  return app.save(collection);
});
