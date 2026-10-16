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
        "help": "",
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
        "help": "",
        "hidden": false,
        "id": "text_title",
        "max": 0,
        "min": 0,
        "name": "title",
        "pattern": "",
        "presentable": true,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "",
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
        "help": "Ex: CONCEPTION UI, DÉVELOPPEMENT WEB",
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
        "help": "Description synthétique pour les cartes",
        "hidden": false,
        "id": "text_short_description",
        "max": 0,
        "min": 0,
        "name": "short_description",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "help": "Mockups principaux du projet",
        "hidden": false,
        "id": "file_hero_mockups",
        "maxSelect": 10,
        "maxSize": 10485760,
        "mimeTypes": ["image/jpeg", "image/png", "image/svg+xml", "image/gif", "image/webp"],
        "name": "hero_mockups",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text_context_section_title",
        "max": 0,
        "min": 0,
        "name": "context_section_title",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text_context_sidebar_label",
        "max": 0,
        "min": 0,
        "name": "context_sidebar_label",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text_context_sidebar_text",
        "max": 0,
        "min": 0,
        "name": "context_sidebar_text",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text_context_main_description",
        "max": 0,
        "min": 0,
        "name": "context_main_description",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text_context_highlight_box",
        "max": 0,
        "min": 0,
        "name": "context_highlight_box",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text_strategy_section_title",
        "max": 0,
        "min": 0,
        "name": "strategy_section_title",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text_strategy_sidebar_label",
        "max": 0,
        "min": 0,
        "name": "strategy_sidebar_label",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text_strategy_main_description",
        "max": 0,
        "min": 0,
        "name": "strategy_main_description",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "Tags séparés par virgules ex: UX/UI, IDENTITÉ VISUELLE, SEO",
        "hidden": false,
        "id": "text_strategy_skills_tags",
        "max": 0,
        "min": 0,
        "name": "strategy_skills_tags",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text_design_section_title",
        "max": 0,
        "min": 0,
        "name": "design_section_title",
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
        "id": "file_design_moodboard_images",
        "maxSelect": 10,
        "maxSize": 10485760,
        "mimeTypes": ["image/jpeg", "image/png", "image/svg+xml", "image/gif", "image/webp"],
        "name": "design_moodboard_images",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text_design_symbol_title",
        "max": 0,
        "min": 0,
        "name": "design_symbol_title",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text_design_symbol_description",
        "max": 0,
        "min": 0,
        "name": "design_symbol_description",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text_design_typography_description",
        "max": 0,
        "min": 0,
        "name": "design_typography_description",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text_design_colors_description",
        "max": 0,
        "min": 0,
        "name": "design_colors_description",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text_execution_section_title",
        "max": 0,
        "min": 0,
        "name": "execution_section_title",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "help": "Assets UI, wireframes, personas, composants",
        "hidden": false,
        "id": "file_execution_ui_assets",
        "maxSelect": 10,
        "maxSize": 10485760,
        "mimeTypes": ["image/jpeg", "image/png", "image/svg+xml", "image/gif", "image/webp"],
        "name": "execution_ui_assets",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text_live_link_label",
        "max": 0,
        "min": 0,
        "name": "live_link_label",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "exceptDomains": [],
        "help": "",
        "hidden": false,
        "id": "url_live_link_url",
        "name": "live_link_url",
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
  record.set("title", "Olyvia!");
  record.set("slug", "olyvia");
  record.set("roles", "CONCEPTION UI, DÉVELOPPEMENT WEB");
  record.set("short_description", "Informations, soutien et outils pratiques pour traverser la périménopause et la ménopause avec sérénité.");

  // Contexte
  record.set("context_section_title", "Une solidarité au quotidien.");
  record.set("context_sidebar_label", "BUT - CONTEXTE DU PROJET");
  record.set("context_sidebar_text", "POURQUOI CE CHOIX ?...");
  record.set("context_main_description", "Olyvia est une plateforme web centrée sur l'accompagnement des femmes qui traversent la période de la ménopause...");
  record.set("context_highlight_box", "Soutien émotionnel et entraide. Olyvia rassemble une communauté...");

  // Stratégie
  record.set("strategy_section_title", "Faire connaître Olyvia!");
  record.set("strategy_sidebar_label", "STRATÉGIE DE COMMUNICATION");
  record.set("strategy_main_description", "Notre objectif de communication est d'aborder ce sujet souvent tabou avec douceur, bienveillance et sororité...");
  record.set("strategy_skills_tags", "UX/UI, IDENTITÉ VISUELLE, SEO, RÉSEAUX SOCIAUX");

  // Identité visuelle
  record.set("design_section_title", "Définir un univers de soutien.");
  record.set("design_symbol_title", "Le lotus, une renaissance.");
  record.set("design_symbol_description", "Pourquoi ce choix du lotus ? Dans de nombreuses cultures, le lotus est un symbole d'épanouissement...");
  record.set("design_typography_description", "Une typographie douce...");
  record.set("design_colors_description", "Couleurs...");

  // Réalisation
  record.set("execution_section_title", "Préparer la réalisation.");

  // Lien live
  record.set("live_link_label", "Découvrir le site web");
  record.set("live_link_url", "https://olyvia.les-lunes.fr");

  // Fichiers d'images réels depuis le projet
  try {
    const heroMockupFiles = [
      $filesystem.fileFromPath("src/assets/olyvia/olyvia-salon.png"),
      $filesystem.fileFromPath("src/assets/olyvia/olyvia-accueil-mobile.png"),
      $filesystem.fileFromPath("src/assets/olyvia/olyvia-compte-mobile.png"),
    ];
    record.set("hero_mockups", heroMockupFiles);

    const moodboardFiles = [
      $filesystem.fileFromPath("src/assets/olyvia/olyvia-moodboard.png"),
      $filesystem.fileFromPath("src/assets/olyvia/olyvia-recherches-logo.png"),
    ];
    record.set("design_moodboard_images", moodboardFiles);

    const uiAssetsFiles = [
      $filesystem.fileFromPath("src/assets/olyvia/olyvia-maquette-accueil.png"),
      $filesystem.fileFromPath("src/assets/olyvia/olyvia-maquette-praticiens.png"),
      $filesystem.fileFromPath("src/assets/olyvia/olyvia-maquette-mag.png"),
    ];
    record.set("execution_ui_assets", uiAssetsFiles);
  } catch (err) {
    // Si chemins introuvables lors de la migration, enregistre le record textuel
  }

  return app.save(record);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("projets");
    return app.delete(collection);
  } catch (e) {}
});

