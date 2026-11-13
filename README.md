# Portfolio — Izya Thiriet

Portfolio d'Izya Thiriet, étudiante en 2e année de BUT MMI à Montbéliard (parcours Com - Strat-UX), en recherche de stage en communication digitale.

Site : https://izya-thiriet.fr


## Technologies et librairies

Le site est construit avec [Astro](https://astro.build) (version 7), qui me permet de découper mes pages en composants, de générer des pages statiques et d'optimiser les images. Pour le style, j'utilise [Tailwind CSS](https://tailwindcss.com) (version 4), que j'ai adapté à ma charte en reprenant les couleurs et les typographies de ma maquette Figma.

Mes projets sont gérés dans [PocketBase](https://pocketbase.io), une base de données avec une interface d'administration. C'est aussi là que sont enregistrés les messages envoyés depuis le formulaire de contact.

J'ai ajouté [Lenis](https://github.com/darkroomengineering/lenis) pour rendre le défilement plus doux. Il se désactive si le visiteur a choisi de réduire les animations sur son appareil. Le plan du site est créé automatiquement par [@astrojs/sitemap](https://docs.astro.build/fr/guides/integrations-guide/sitemap/).

Mes polices, Playfair Display et Inter, viennent de [Fontsource](https://fontsource.org) : elles sont hébergées directement sur mon site, sans passer par Google.

Tous ces outils sont sous licence libre : MIT pour Astro, Tailwind CSS, PocketBase, Lenis et @astrojs/sitemap, et SIL Open Font License pour les polices.

Aucun thème ni template prédéfini : toutes les pages sont développées à partir de ma maquette Figma.

## Fonctionnement

- Les projets sont saisis dans PocketBase (collection `projets`). Une seule page, [`ProjectCaseStudy.astro`](src/components/project/ProjectCaseStudy.astro), génère l'étude de cas de chaque projet ; une partie ne s'affiche que si ses champs sont remplis.
- La structure de la base est versionnée dans [`backend/pb_migrations`](backend/pb_migrations). Les données elles-mêmes (`backend/pb_data`) ne sont pas publiées.
- Le formulaire de contact enregistre les messages dans la collection `formulaire`, lisible uniquement par l'administratrice.

## Documents du projet

- [JOURNAL.md](JOURNAL.md) — journal de bord
- [IA.md](IA.md) — déclaration d'usage de l'intelligence artificielle
- [QUALITE.md](QUALITE.md) — grille de contrôle qualité