/// <reference path="../pb_data/types.d.ts" />

// Champs nécessaires pour que la page d'étude de cas générique reproduise
// les pages Olyvia et Wenddy (jusque-là écrites en dur dans le code),
// puis reprise dans PocketBase des textes qui n'existaient que dans le code.
migrate((app) => {
  const collection = app.findCollectionByNameOrId("projets");

  collection.fields.add(new TextField({ name: "contexte_titre_encart" }));
  collection.fields.add(new TextField({ name: "contexte_label_realisation" }));
  collection.fields.add(new TextField({ name: "strategie_phrase" }));
  collection.fields.add(new TextField({ name: "outils" }));
  collection.fields.add(new FileField({
    name: "design_image_symbole",
    maxSelect: 1,
    maxSize: 5242880,
    mimeTypes: ["image/png", "image/jpeg", "image/webp", "image/svg+xml"],
  }));
  // Une légende par ligne, dans l'ordre des images (sert aussi de texte alternatif)
  collection.fields.add(new TextField({ name: "legendes_mockups" }));
  collection.fields.add(new TextField({ name: "legendes_moodboard" }));
  collection.fields.add(new TextField({ name: "legendes_realisation" }));
  // Coché si les images sont déjà exportées avec leur cadre « timbre » (cas de Wenddy)
  collection.fields.add(new BoolField({ name: "images_cadre_inclus" }));

  app.save(collection);

  const trouver = (slug) => {
    try {
      return app.findFirstRecordByData("projets", "slug", slug);
    } catch (e) {
      return null;
    }
  };

  // ───────── Olyvia : textes de l'ancienne page OlyviaCaseStudy.astro ─────────
  const olyvia = trouver("olyvia");
  if (olyvia) {
    olyvia.set("lien_site_url", "https://olyvia.bailly-laura.fr/");
    olyvia.set("lien_site_label", "Découvrir l’application");

    olyvia.set("contexte_label_lateral", "Ce qui était attendu");
    olyvia.set("contexte_texte_lateral", "Il nous était demandé de créer une web app pour accompagner les femmes durant leur période de ménopause. Il fallait créer l’application sur WordPress ainsi que réaliser toute la création graphique et la communication. Plusieurs compétences étaient attendues : communication, design et développement web.");
    olyvia.set("contexte_description_principale", "Olyvia est une application web WordPress qui accompagne les femmes durant leurs périodes de préménopause, de ménopause et de périménopause. Elle répond à leurs questions, leur apporte un soutien émotionnel et propose des solutions avec des professionnels de santé, comme la prise de rendez-vous médicaux. Les femmes peuvent partager leur vécu autour de la ménopause et échanger entre elles pour se soutenir et s’accompagner.");
    olyvia.set("contexte_titre_encart", "Soutenir, sans promesse miracle");
    olyvia.set("contexte_encart_mis_en_avant", "Une application de solidarité féminine qui ne prône pas de solutions miracles, mais souhaite apporter un véritable soutien durant une période qui peut être compliquée. Le choix de cibler les femmes en préménopause et ménopause repose sur une réalité démographique et sociale : en France, environ 11 millions de femmes sont concernées, soit près de la moitié de la population féminine adulte. Chaque année, 400 000 femmes entrent dans cette phase de transition, souvent entre 45 et 55 ans.");

    olyvia.set("strategie_label_lateral", "Communication & audiovisuel");
    olyvia.set("strategie_phrase", "Ma contribution au sein du projet collaboratif.");
    olyvia.set("strategie_description_principale", "Pour ce projet, j’ai réalisé l’intégralité de la communication de la web app Olyvia! J’ai préparé les contenus audiovisuels, de la réalisation des vidéos au montage, ainsi que les contenus des différents posts pour sa promotion. J’ai également réalisé un plan de communication et un budget détaillé pour préparer le lancement d’Olyvia!");
    olyvia.set("outils", "Figma, WordPress, Jira, DaVinci Resolve");

    olyvia.set("design_description_symbole", "La fleur de lotus est un symbole de force, de résilience, de renaissance et de sérénité. Elle commence sa vie au fond de l’eau, dans la boue. Cette « boue » représente les moments où l’on se sent fatiguée ou de mauvaise humeur à cause des changements du corps. Sans cette boue, la fleur ne pourrait pas grandir. Ce grand changement n’est pas un déclin : c’est comme une deuxième naissance. Une fois cette étape passée, la femme devient comme une fleur de lotus qui sort de l’eau : magnifique, calme et prête à vivre une nouvelle partie de sa vie avec beaucoup de bonheur.\nLa géométrie symétrique des pétales du lotus apporte un sentiment d’ordre, d’apaisement et d’équilibre, répondant visuellement au besoin de stabilité des femmes traversant des variations hormonales.");
    // Textes provisoires (« Une typographie douce... », « Couleurs... ») remplacés
    olyvia.set("design_description_typographie", "");
    olyvia.set("design_description_couleurs", "Selon sa couleur, le lotus change de signification. Le lotus violet n’a pas été choisi au hasard : il peut avoir un sens spirituel d’ascension et d’illumination.");

    olyvia.set("legendes_mockups", "Le salon d’Olyvia! · Un espace de parole libre\nAccueil · Version mobile\nCompte · Version mobile");
    olyvia.set("legendes_moodboard", "Moodboard · Nos recherches graphiques\nRecherches du logo · Explorations de la fleur et du nom");
    olyvia.set("legendes_realisation", "Accueil · Maquette complète\nNos praticiens · Maquette complète\nLe Mag · Maquette complète");

    // Icône du lotus (chemin relatif au dossier depuis lequel PocketBase est lancé)
    try {
      olyvia.set("design_image_symbole", $filesystem.fileFromPath("backend/pb_import/olyvia-icone-lotus.png"));
    } catch (e) {
      // Image introuvable : à ajouter à la main dans l'admin
    }

    app.save(olyvia);
  }

  // ───────── Wenddy : seuls les intitulés et légendes manquaient ─────────
  const wenddy = trouver("wenddy");
  if (wenddy) {
    wenddy.set("contexte_titre_encart", "Un parcours thématique");
    wenddy.set("strategie_phrase", "Participation au graphisme et au développement avec mon équipe.");
    wenddy.set("strategie_tags_competences", "UX / Ergonomie, Éco-conception, Développement web, Travail en équipe");
    wenddy.set("outils", "Figma, VS Code, Jira, Affinity");
    wenddy.set("legendes_mockups", "Accueil · Entrée dans le parcours d’apprentissage\nCompte · Version mobile\nProgrès · Version mobile");
    wenddy.set("legendes_moodboard", "Moodboard · Nos recherches graphiques\nIcône · La mascotte Wenddy\nRecherches du logo · Explorations collectives");
    wenddy.set("legendes_realisation", "Accueil · Maquette complète\nProgrès · Maquette complète\nDictionnaire LSF · Maquette complète\nSuivi de progression · Maquette complète");
    wenddy.set("images_cadre_inclus", true);
    app.save(wenddy);
  }
}, (app) => {
  const collection = app.findCollectionByNameOrId("projets");
  [
    "contexte_titre_encart", "contexte_label_realisation", "strategie_phrase", "outils",
    "design_image_symbole", "legendes_mockups", "legendes_moodboard",
    "legendes_realisation", "images_cadre_inclus",
  ].forEach((name) => collection.fields.removeByName(name));
  return app.save(collection);
});
