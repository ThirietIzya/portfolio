/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  try {
    const old = app.findCollectionByNameOrId("projets");
    if (old) app.delete(old);
  } catch (e) {}

  const collection = new Collection({
    "name": "projets",
    "type": "base",
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9_]{15}",
        "help": "Identifiant unique du projet",
        "hidden": false,
        "id": "text_id",
        "max": 50,
        "min": 1,
        "name": "id",
        "pattern": "^[a-z0-9_]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "Titre du projet (ex: Olyvia!)",
        "hidden": false,
        "id": "text_titre",
        "max": 0,
        "min": 0,
        "name": "titre",
        "pattern": "",
        "presentable": true,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "Identifiant d'URL court (ex: olyvia)",
        "hidden": false,
        "id": "text_slug",
        "max": 0,
        "min": 0,
        "name": "slug",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "Rôles / missions (ex: CONCEPTION UI, DÉVELOPPEMENT WEB)",
        "hidden": false,
        "id": "text_roles",
        "max": 0,
        "min": 0,
        "name": "roles",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "Courte description pour les cartes et aperçus",
        "hidden": false,
        "id": "text_description_courte",
        "max": 0,
        "min": 0,
        "name": "description_courte",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "help": "Images / mockups principaux de présentation",
        "hidden": false,
        "id": "file_mockups_principaux",
        "maxSelect": 10,
        "maxSize": 10485760,
        "mimeTypes": ["image/jpeg", "image/png", "image/svg+xml", "image/gif", "image/webp"],
        "name": "mockups_principaux",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "autogeneratePattern": "",
        "help": "Titre de la section Contexte",
        "hidden": false,
        "id": "text_contexte_titre_section",
        "max": 0,
        "min": 0,
        "name": "contexte_titre_section",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "En-tête latérale du contexte (ex: BUT - CONTEXTE DU PROJET)",
        "hidden": false,
        "id": "text_contexte_label_lateral",
        "max": 0,
        "min": 0,
        "name": "contexte_label_lateral",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "Texte latéral (ex: POURQUOI CE CHOIX ?...)",
        "hidden": false,
        "id": "text_contexte_texte_lateral",
        "max": 0,
        "min": 0,
        "name": "contexte_texte_lateral",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "Description principale et détaillée du contexte",
        "hidden": false,
        "id": "text_contexte_description_principale",
        "max": 0,
        "min": 0,
        "name": "contexte_description_principale",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "Encart mis en avant (citation, point clé)",
        "hidden": false,
        "id": "text_contexte_encart_mis_en_avant",
        "max": 0,
        "min": 0,
        "name": "contexte_encart_mis_en_avant",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "Titre de la section Stratégie",
        "hidden": false,
        "id": "text_strategie_titre_section",
        "max": 0,
        "min": 0,
        "name": "strategie_titre_section",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "En-tête latérale de stratégie (ex: STRATÉGIE DE COMMUNICATION)",
        "hidden": false,
        "id": "text_strategie_label_lateral",
        "max": 0,
        "min": 0,
        "name": "strategie_label_lateral",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "Description principale de la stratégie de communication",
        "hidden": false,
        "id": "text_strategie_description_principale",
        "max": 0,
        "min": 0,
        "name": "strategie_description_principale",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "Tags de compétences (ex: UX/UI, IDENTITÉ VISUELLE, SEO)",
        "hidden": false,
        "id": "text_strategie_tags_competences",
        "max": 0,
        "min": 0,
        "name": "strategie_tags_competences",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "Titre de la section Identité visuelle & Design",
        "hidden": false,
        "id": "text_design_titre_section",
        "max": 0,
        "min": 0,
        "name": "design_titre_section",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "help": "Images du moodboard et variations du logo",
        "hidden": false,
        "id": "file_design_images_moodboard",
        "maxSelect": 10,
        "maxSize": 10485760,
        "mimeTypes": ["image/jpeg", "image/png", "image/svg+xml", "image/gif", "image/webp"],
        "name": "design_images_moodboard",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "autogeneratePattern": "",
        "help": "Titre du symbole (ex: Le lotus, une renaissance)",
        "hidden": false,
        "id": "text_design_titre_symbole",
        "max": 0,
        "min": 0,
        "name": "design_titre_symbole",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "Explication de la symbolique",
        "hidden": false,
        "id": "text_design_description_symbole",
        "max": 0,
        "min": 0,
        "name": "design_description_symbole",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "Explication du choix typographique",
        "hidden": false,
        "id": "text_design_description_typographie",
        "max": 0,
        "min": 0,
        "name": "design_description_typographie",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "Description de l'harmonie des couleurs",
        "hidden": false,
        "id": "text_design_description_couleurs",
        "max": 0,
        "min": 0,
        "name": "design_description_couleurs",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "Titre de la section Réalisation",
        "hidden": false,
        "id": "text_realisation_titre_section",
        "max": 0,
        "min": 0,
        "name": "realisation_titre_section",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "help": "Visuels UI, wireframes, personas, composants",
        "hidden": false,
        "id": "file_realisation_visuels_ui",
        "maxSelect": 10,
        "maxSize": 10485760,
        "mimeTypes": ["image/jpeg", "image/png", "image/svg+xml", "image/gif", "image/webp"],
        "name": "realisation_visuels_ui",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "autogeneratePattern": "",
        "help": "Texte du bouton lien (ex: Découvrir le site web)",
        "hidden": false,
        "id": "text_lien_site_label",
        "max": 0,
        "min": 0,
        "name": "lien_site_label",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "exceptDomains": [],
        "help": "URL complète vers le site en ligne",
        "hidden": false,
        "id": "url_lien_site_url",
        "name": "lien_site_url",
        "onlyDomains": [],
        "presentable": false,
        "required": false,
        "system": false,
        "type": "url"
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": true,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": true,
        "type": "autodate"
      }
    ],
    "indexes": []
  });

  app.save(collection);

  const record = new Record(collection);
  record.set("id", "projet_olyvia_01");
  record.set("titre", "Olyvia!");
  record.set("slug", "olyvia");
  record.set("roles", "CONCEPTION UI, DÉVELOPPEMENT WEB");
  record.set("description_courte", "Informations, soutien et outils pratiques pour traverser la périménopause et la ménopause avec sérénité.");

  // Contexte
  record.set("contexte_titre_section", "Une solidarité au quotidien.");
  record.set("contexte_label_lateral", "BUT - CONTEXTE DU PROJET");
  record.set("contexte_texte_lateral", "POURQUOI CE CHOIX ?...");
  record.set("contexte_description_principale", "Olyvia est une plateforme web centrée sur l'accompagnement des femmes qui traversent la période de la ménopause...");
  record.set("contexte_encart_mis_en_avant", "Soutien émotionnel et entraide. Olyvia rassemble une communauté...");

  // Stratégie
  record.set("strategie_titre_section", "Faire connaître Olyvia!");
  record.set("strategie_label_lateral", "STRATÉGIE DE COMMUNICATION");
  record.set("strategie_description_principale", "Notre objectif de communication est d'aborder ce sujet souvent tabou avec douceur, bienveillance et sororité...");
  record.set("strategie_tags_competences", "UX/UI, IDENTITÉ VISUELLE, SEO, RÉSEAUX SOCIAUX");

  // Identité visuelle
  record.set("design_titre_section", "Définir un univers de soutien.");
  record.set("design_titre_symbole", "Le lotus, une renaissance.");
  record.set("design_description_symbole", "Pourquoi ce choix du lotus ? Dans de nombreuses cultures, le lotus est un symbole d'épanouissement...");
  record.set("design_description_typographie", "Une typographie douce...");
  record.set("design_description_couleurs", "Couleurs...");

  // Réalisation
  record.set("realisation_titre_section", "Préparer la réalisation.");

  // Lien live
  record.set("lien_site_label", "Découvrir le site web");
  record.set("lien_site_url", "https://olyvia.les-lunes.fr");

  // Fichiers d'images réels depuis le projet
  try {
    const heroMockupFiles = [
      $filesystem.fileFromPath("src/assets/olyvia/olyvia-salon.png"),
      $filesystem.fileFromPath("src/assets/olyvia/olyvia-accueil-mobile.png"),
      $filesystem.fileFromPath("src/assets/olyvia/olyvia-compte-mobile.png"),
    ];
    record.set("mockups_principaux", heroMockupFiles);

    const moodboardFiles = [
      $filesystem.fileFromPath("src/assets/olyvia/olyvia-moodboard.png"),
      $filesystem.fileFromPath("src/assets/olyvia/olyvia-recherches-logo.png"),
    ];
    record.set("design_images_moodboard", moodboardFiles);

    const uiAssetsFiles = [
      $filesystem.fileFromPath("src/assets/olyvia/olyvia-maquette-accueil.png"),
      $filesystem.fileFromPath("src/assets/olyvia/olyvia-maquette-praticiens.png"),
      $filesystem.fileFromPath("src/assets/olyvia/olyvia-maquette-mag.png"),
    ];
    record.set("realisation_visuels_ui", uiAssetsFiles);
  } catch (err) {}

  return app.save(record);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("projets");
    return app.delete(collection);
  } catch (e) {}
});

