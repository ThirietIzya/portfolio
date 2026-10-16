/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("projets");

  // Vérifie si le record existe déjà
  try {
    const existing = app.findRecordById("projets", "projet_wenddy_02");
    if (existing) {
      app.delete(existing);
    }
  } catch (e) {}

  const record = new Record(collection);
  record.set("id", "projet_wenddy_02");
  record.set("titre", "Wenddy");
  record.set("slug", "wenddy");
  record.set("roles", "ERGONOMIE, ÉCO-CONCEPTION, GRAPHISME, DÉVELOPPEMENT WEB");
  record.set("description_courte", "Apprendre la Langue des Signes Française de manière ludique et gamifiée. Une web app conçue en groupe, entre leçons, dictionnaire et petits jeux.");

  // Contexte & Enjeux
  record.set("contexte_titre_section", "Apprendre, jouer, progresser.");
  record.set("contexte_label_lateral", "CE QUI ÉTAIT ATTENDU");
  record.set("contexte_texte_lateral", "Il nous était demandé de créer une web app pour apprendre la langue des signes. Ce projet de groupe m’a permis de valider mes compétences en développement web et en design.");
  record.set("contexte_description_principale", "Wenddy est une web app qui permet d’apprendre la langue des signes de façon ludique, avec de petits jeux et un mode histoire. Notre but était de créer un site qui donne envie aux personnes souhaitant apprendre la langue des signes de se tourner vers notre application grâce à son fonctionnement. Nous avons mis en place des fonctionnalités pensées pour encourager les utilisateurs à choisir Wenddy et à poursuivre leur apprentissage.");
  record.set("contexte_encart_mis_en_avant", "Wenddy est une plateforme ludo-pédagogique dédiée à l’apprentissage inclusif de la Langue des Signes Française (LSF), conçue pour transformer l’acquisition du vocabulaire en une expérience immersive et motivante. La progression prend la forme d’un parcours thématique : vie quotidienne, émotions, voyage… L’utilisateur évolue par paliers et valide des étapes clés pour préserver ses « vies » et entretenir sa « streak ».");

  // Stratégie & Contribution
  record.set("strategie_titre_section", "Penser l’usage, en équipe.");
  record.set("strategie_label_lateral", "ERGONOMIE & ÉCO-CONCEPTION");
  record.set("strategie_description_principale", "Pour ce projet, j’ai réalisé un dossier sur l’ergonomie de notre web app Wenddy ainsi qu’un dossier sur notre pratique de l’éco-conception. J’ai également travaillé avec mon équipe sur l’aspect graphique de l’application et sur le développement web. Ce site a été un vrai travail d’équipe qui nous a demandé beaucoup d’organisation et de réflexion.");
  record.set("strategie_tags_competences", "UX / Ergonomie, Éco-conception, Développement web, Travail en équipe, Figma, VS Code, Jira, Affinity");

  // Recherches graphiques & Identité
  record.set("design_titre_section", "Donner envie d’apprendre.");
  record.set("design_titre_symbole", "La mascotte Wenddy");
  record.set("design_description_symbole", "Une mascotte amicale et chaleureuse imaginée pour accompagner l'utilisateur tout au long de sa progression et rendre l'apprentissage bienveillant.");
  record.set("design_description_typographie", "Des typographies rondes et accessibles favorisant la lisibilité et le confort visuel sur tous les supports.");
  record.set("design_description_couleurs", "Une palette douce et vivante dominée par des teintes terracotta pastel (#f6d6d2) et jaune pastel (#f8e6b4).");

  // Réalisation
  record.set("realisation_titre_section", "Préparer la réalisation.");

  // Lien live
  record.set("lien_site_label", "Découvrir la web app");
  record.set("lien_site_url", "https://wenddyapp.bambou-franceschini.fr/accueil");

  // Images réelles attachées
  try {
    const heroMockupFiles = [
      $filesystem.fileFromPath("src/assets/wenddy/wenddy-accueil-stamp.png"),
      $filesystem.fileFromPath("src/assets/wenddy/wenddy-compte-stamp.png"),
      $filesystem.fileFromPath("src/assets/wenddy/wenddy-progres-stamp.png"),
    ];
    record.set("mockups_principaux", heroMockupFiles);

    const moodboardFiles = [
      $filesystem.fileFromPath("src/assets/wenddy/wenddy-moodboard-stamp.png"),
      $filesystem.fileFromPath("src/assets/wenddy/wenddy-mascotte-stamp.png"),
      $filesystem.fileFromPath("src/assets/wenddy/wenddy-recherches-logo-card.png"),
    ];
    record.set("design_images_moodboard", moodboardFiles);

    const uiAssetsFiles = [
      $filesystem.fileFromPath("src/assets/wenddy/wenddy-maquette-accueil.png"),
      $filesystem.fileFromPath("src/assets/wenddy/wenddy-maquette-progres.png"),
      $filesystem.fileFromPath("src/assets/wenddy/wenddy-maquette-dictionnaire.png"),
      $filesystem.fileFromPath("src/assets/wenddy/wenddy-maquette-suivi.png"),
    ];
    record.set("realisation_visuels_ui", uiAssetsFiles);
  } catch (err) {}

  return app.save(record);
}, (app) => {
  try {
    const record = app.findRecordById("projets", "projet_wenddy_02");
    if (record) {
      app.delete(record);
    }
  } catch (e) {}
});

