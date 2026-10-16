/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
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
        "id": "text3208210256",
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
        "help": "",
        "hidden": false,
        "id": "json_roles",
        "maxSize": 0,
        "name": "roles",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "autogeneratePattern": "",
        "help": "",
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
        "help": "",
        "hidden": false,
        "id": "json_hero_mockups",
        "maxSize": 0,
        "name": "hero_mockups",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "help": "",
        "hidden": false,
        "id": "json_context",
        "maxSize": 0,
        "name": "context",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "help": "",
        "hidden": false,
        "id": "json_strategy",
        "maxSize": 0,
        "name": "strategy",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "help": "",
        "hidden": false,
        "id": "json_design_identity",
        "maxSize": 0,
        "name": "design_identity",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "help": "",
        "hidden": false,
        "id": "json_execution",
        "maxSize": 0,
        "name": "execution",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "help": "",
        "hidden": false,
        "id": "json_live_link",
        "maxSize": 0,
        "name": "live_link",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
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
  record.set("roles", [
    "CONCEPTION UI",
    "DÉVELOPPEMENT WEB"
  ]);
  record.set("short_description", "Informations, soutien et outils pratiques pour traverser la périménopause et la ménopause avec sérénité.");
  record.set("hero_mockups", [
    "/assets/olyvia/hero_desktop.png",
    "/assets/olyvia/hero_mobile.png",
    "/assets/olyvia/hero_newsletter.png"
  ]);
  record.set("context", {
    "section_title": "Une solidarité au quotidien.",
    "sidebar_label": "BUT - CONTEXTE DU PROJET",
    "sidebar_text": "POURQUOI CE CHOIX ?...",
    "main_description": "Olyvia est une plateforme web centrée sur l'accompagnement des femmes qui traversent la période de la ménopause...",
    "highlight_box": "Soutien émotionnel et entraide. Olyvia rassemble une communauté..."
  });
  record.set("strategy", {
    "section_title": "Faire connaître Olyvia!",
    "sidebar_label": "STRATÉGIE DE COMMUNICATION",
    "main_description": "Notre objectif de communication est d'aborder ce sujet souvent tabou avec douceur, bienveillance et sororité...",
    "skills_tags": ["UX/UI", "IDENTITÉ VISUELLE", "SEO", "RÉSEAUX SOCIAUX"]
  });
  record.set("design_identity", {
    "section_title": "Définir un univers de soutien.",
    "moodboard_images": [
      "/assets/olyvia/moodboard.png",
      "/assets/olyvia/logos_variations.png"
    ],
    "symbol_title": "Le lotus, une renaissance.",
    "symbol_description": "Pourquoi ce choix du lotus ? Dans de nombreuses cultures, le lotus est un symbole d'épanouissement...",
    "typography_description": "Une typographie douce...",
    "colors_description": "Couleurs..."
  });
  record.set("execution", {
    "section_title": "Préparer la réalisation.",
    "ui_assets": [
      "/assets/olyvia/wireframe_home.png",
      "/assets/olyvia/personas.png",
      "/assets/olyvia/components.png"
    ]
  });
  record.set("live_link", {
    "label": "Découvrir le site web",
    "url": "olyvia.les-lunes.fr"
  });

  return app.save(record);
}, (app) => {
  try {
    const collection = app.findCollectionByNameOrId("projets");
    return app.delete(collection);
  } catch (e) {
    // ignore
  }
});

