# Déclaration d'usage de l'intelligence artificielle

Ce fichier liste les outils d'IA utilisés pour mon portfolio : à quelle étape, pour quoi faire, et ce que j'ai modifié, corrigé ou rejeté dans ce qu'ils ont produit.

## 1. Gemini — mise en place (octobre 2026)

- Étape : début du développement.
- Pour quoi faire : m'aider à relier Antigravity à Figma, pour qu'Antigravity puisse lire mes composants en auto-layout.
- Ce que j'en ai fait : j'ai créé un token d'accès dans Figma et je l'ai donné à Antigravity.

## 2. Antigravity (Google) — intégration des pages (13 au 22 octobre 2026)

Pour le développement web de mon portfolio, j'ai décidé d'utiliser Antigravity car c'est une IA directement intégrée dans VS Code. J'ai également Google IA Pro, ce qui me permet d'avoir une meilleure performance d'Antigravity.

- Étape : intégration de toutes les pages (accueil, projets, études de cas, à propos, contact, mentions légales) et liaison avec PocketBase.
- Pour quoi faire : transformer mes composants Figma en composants Astro + Tailwind CSS. Voici le prompt que j'utilisais :
  > Utilise l'outil Figma pour lire la structure Auto Layout de ce nœud : https://www.figma.com/design/rhWt8jA2l5kC2LH0jxSnWV/Projet-individuel_Portfolio_Izya_Thiriet_A2?node-id=324-3268. Génère le composant correspondant en Astro et Tailwind CSS, puis importe-le proprement dans index.astro.
- Ce que j'ai corrigé :
  - Les typographies n'étaient pas les bonnes : j'ai importé mes variables Figma dans `global.css` pour qu'il les utilise.
  - Les images que je voulais pencher ne l'étaient pas : j'ai dû le redemander.
  - Le bouton « Envoyer » du formulaire de contact ouvrait Outlook : nous l'avons corrigé pour que les messages soient enregistrés dans PocketBase avec un message de confirmation sur la page.
  - La responsivité ne s'adaptait pas bien sur desktop : je l'ai ajustée.

## 3. Claude Code (Anthropic) — reprise et consolidation (à partir du 6 novembre 2026)

J'ai continué le projet avec Claude Code, dans VS Code, connecté à ma maquette Figma.

- Étape : reprise du code existant, sécurité, contenus dynamiques, qualité.
- Pour quoi faire :
  - Faire un état des lieux de mon projet par rapport aux consignes : livrables manquants, problèmes techniques.
  - Repérer et corriger des problèmes de sécurité : base de données publiée sur GitHub, règles PocketBase qui laissaient n'importe qui modifier mes projets.
  - Remplacer les pages Olyvia et Wenddy écrites en dur par une seule page d'étude de cas générée depuis PocketBase (`ProjectCaseStudy.astro`), avec les migrations PocketBase pour les nouveaux champs.
  - Récupérer dans Figma les captures d'origine (droites) de mes projets et les convertir en WebP.
  - Rédiger une première version de ce fichier et de l'entrée du 6 novembre de mon JOURNAL.md, que j'ai relues.
- Ce que j'ai fait moi-même ou décidé :
  - J'ai choisi de remplacer SavouFest' par mon projet de SAÉ 303 et j'ai rempli tous ses contenus dans PocketBase, dont ma contribution, à partir de textes proposés par Claude (voir partie 4) que j'ai relus.
  - J'ai changé moi-même mon mot de passe admin PocketBase.
- Ce que j'ai rejeté ou modifié :
  - Claude Code avait rédigé un guide de mise en ligne (`DEPLOIEMENT.md`). Je l'ai supprimé : je n'en ai pas besoin.
- Ce que j'ai vérifié : après chaque modification, le site compile sans erreur (`npm run build`), et je contrôle le rendu des pages dans le navigateur.

## 4. Claude (claude.ai) — contenus, déploiement et réseaux (6 au 18 novembre 2026)

J'ai aussi utilisé Claude directement sur claude.ai, à côté de Claude Code.

### Textes des projets dans PocketBase (6 et 10 novembre)

- Étape : ajout de « Le poids de l'IA » et de TiK•TaK dans mon portfolio.
- Pour quoi faire : je lui ai donné le lien de chaque site et les consignes de la SAÉ, et il m'a proposé un texte pour chaque champ de PocketBase (titre, description, contexte, stratégie, légendes des images…), en me disant ce que je devais remplir moi-même.
- Ce que j'ai modifié ou décidé :
  - J'ai demandé que TiK•TaK soit présenté comme un projet de développement, sans la partie marketing.
  - J'ai choisi de ne pas remplir la partie « Identité visuelle » du poids de l'IA : c'était une SAÉ de développement, sans recherche graphique, et je ne voulais pas en inventer une.
  - J'ai relu les textes avant de les mettre dans PocketBase, et j'ai complété moi-même ce qu'il ne pouvait pas savoir (images, ma part du travail).

### Déploiement (14 au 17 novembre)

- Étape : mise en ligne de PocketBase et du portfolio sur mon VPS.
- Pour quoi faire :
  - Me guider pas à pas dans le déploiement : PocketBase, Apache, certificat Let's Encrypt, GitHub Actions.
  - Diagnostiquer les erreurs rencontrées pendant le déploiement.
- Ce que j'ai rejeté ou modifié :
  - Claude m'a proposé de passer à Bun : j'ai refusé et je suis restée sur npm. L'erreur que j'avais en essayant Bun venait en fait d'un serveur de développement déjà lancé.
  - Le guide de mon cours construisait le site sur le serveur : avec Claude, j'ai choisi de le construire sur GitHub, ce qui m'évitait d'installer Bun sur le VPS.
  - Claude avait rédigé une première version technique de mon journal pour cette semaine : je l'ai trouvée trop compliquée et j'ai demandé une version simple, sans mots techniques.

### Présence professionnelle (16 et 17 novembre)

- Étape : publication de mes projets et de mon portfolio sur LinkedIn.
- Pour quoi faire :
  - Rédiger mes posts LinkedIn sur TiK•TaK et sur mon portfolio.
  - Réécrire mon ancien post sur Olyvia! : il présentait la marque comme réelle (« 5000 femmes », « 50 praticiens »). J'ai demandé qu'on comprenne clairement que c'est un projet étudiant, et ces chiffres inventés ont été retirés.
  - Créer les visuels de mes posts : un mockup d'ordinateur avec la capture de TiK•TaK, puis une illustration de bureau. Ces images sont dessinées par du code écrit par Claude, à partir de ma capture d'écran.
- Ce que j'ai modifié ou décidé :
  - J'ai demandé que le post TiK•TaK reprenne la structure de mon post Olyvia!.
  - Je voulais une scène dans le style d'une photo de bureau trouvée en ligne : Claude ne l'a pas utilisée directement pour une question de droits d'auteur, et a dessiné une illustration originale dans le même esprit.
  - J'ai ajouté Olyvia! comme troisième projet dans le post de mon portfolio.

### Relecture des documents (18 novembre)

- Pour quoi faire : relire mon dossier par rapport aux consignes. Claude a repéré que la partie « Sobriété et performance » manquait dans QUALITE.md et a rédigé une première version de cette partie, de ces ajouts dans IA.md et de la fin de la semaine 5 de mon journal, que j'ai relues.
