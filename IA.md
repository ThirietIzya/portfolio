# Déclaration d'usage de l'intelligence artificielle

Ce fichier liste les outils d'IA utilisés pour mon portfolio : à quelle étape, pour quoi faire, et ce que j'ai modifié, corrigé ou rejeté dans ce qu'ils ont produit.

## 1. Gemini — mise en place (octobre 2026)

- **Étape :** début du développement.
- **Pour quoi faire :** m'aider à relier Antigravity à Figma, pour qu'Antigravity puisse lire mes composants en auto-layout.
- **Ce que j'en ai fait :** j'ai créé un token d'accès dans Figma et je l'ai donné à Antigravity.

## 2. Antigravity (Google) — intégration des pages (13 au 22 octobre 2026)

Pour le développement web de mon portfolio, j'ai décidé d'utiliser Antigravity car c'est une IA directement intégrée dans VS Code. J'ai également Google IA Pro, ce qui me permet d'avoir une meilleure performance d'Antigravity.

- **Étape :** intégration de toutes les pages (accueil, projets, études de cas, à propos, contact, mentions légales) et liaison avec PocketBase.
- **Pour quoi faire :** transformer mes composants Figma en composants Astro + Tailwind CSS. Voici le prompt que j'utilisais :
  > Utilise l'outil Figma pour lire la structure Auto Layout de ce nœud : https://www.figma.com/design/rhWt8jA2l5kC2LH0jxSnWV/Projet-individuel_Portfolio_Izya_Thiriet_A2?node-id=324-3268. Génère le composant correspondant en Astro et Tailwind CSS, puis importe-le proprement dans index.astro.
- **Ce que j'ai corrigé :**
  - Les typographies n'étaient pas les bonnes : j'ai importé mes variables Figma dans `global.css` pour qu'il les utilise.
  - Les images que je voulais pencher ne l'étaient pas : j'ai dû le redemander.
  - Le bouton « Envoyer » du formulaire de contact ouvrait Outlook : nous l'avons corrigé pour que les messages soient enregistrés dans PocketBase avec un message de confirmation sur la page.
  - La responsivité ne s'adaptait pas bien sur desktop : je l'ai ajustée.

## 3. Claude Code (Anthropic) — reprise et consolidation (à partir du 6 novembre 2026)

J'ai continué le projet avec Claude Code, dans VS Code, connecté à ma maquette Figma.

- **Étape :** reprise du code existant, sécurité, contenus dynamiques, qualité.
- **Pour quoi faire :**
  - Faire un état des lieux de mon projet par rapport aux consignes : livrables manquants, problèmes techniques.
  - Repérer et corriger des problèmes de sécurité : base de données publiée sur GitHub, règles PocketBase qui laissaient n'importe qui modifier mes projets.
  - Remplacer les pages Olyvia et Wenddy écrites en dur par une seule page d'étude de cas générée depuis PocketBase (`ProjectCaseStudy.astro`), avec les migrations PocketBase pour les nouveaux champs.
  - Récupérer dans Figma les captures d'origine (droites) de mes projets et les convertir en WebP.
  - Rédiger une première version de ce fichier et de l'entrée du 6 novembre de mon JOURNAL.md, que j'ai relues.
- **Ce que j'ai fait moi-même ou décidé :**
  - J'ai choisi de remplacer SavouFest' par mon projet de SAÉ 303 et j'ai rédigé tous ses contenus dans PocketBase, dont ma contribution.
  - J'ai changé moi-même mon mot de passe admin PocketBase.
- **Ce que j'ai rejeté ou modifié :**
  - Claude Code proposait de mettre PocketBase en ligne tout de suite. J'ai refusé pour l'instant : je garde PocketBase en local tant que je modifie mes contenus, et je ferai la mise en ligne à la fin.
  - Claude Code avait rédigé un guide de mise en ligne (`DEPLOIEMENT.md`). Je l'ai supprimé : je n'en ai pas besoin.
- **Ce que j'ai vérifié :** après chaque modification, le site compile sans erreur (`npm run build`), et je contrôle le rendu des pages dans le navigateur.
