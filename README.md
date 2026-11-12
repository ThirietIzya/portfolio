# Portfolio — Izya Thiriet

Portfolio d'Izya Thiriet, étudiante en 2e année de BUT MMI à Montbéliard (parcours Com - Strat-UX), en recherche de stage en communication digitale.

Site : https://izya-thiriet.fr

Direction artistique : l'univers du livre et de la correspondance (timbres, cachets, papier crème), en lien avec le secteur qui m'intéresse le plus, l'édition.

## Technologies et librairies

| Outil | Rôle | Licence |
|---|---|---|
| [Astro](https://astro.build) 7 | Framework : composants, pages générées en statique, optimisation des images | MIT |
| [Tailwind CSS](https://tailwindcss.com) 4 | Styles, entièrement adaptés à ma charte (couleurs et typographies importées de Figma) | MIT |
| [PocketBase](https://pocketbase.io) | Base de données et back-office des projets, et stockage des messages du formulaire de contact | MIT |
| [Lenis](https://github.com/darkroomengineering/lenis) | Défilement doux, désactivé si le visiteur réduit les animations | MIT |
| [@astrojs/sitemap](https://docs.astro.build/fr/guides/integrations-guide/sitemap/) | Génération du plan du site | MIT |
| [Fontsource](https://fontsource.org) — Playfair Display, Inter | Polices hébergées par le site, sans appel à Google | SIL Open Font License |

Aucun thème ni template prédéfini : toutes les pages sont développées à partir de ma maquette Figma.

## Fonctionnement

- Les **projets** sont saisis dans PocketBase (collection `projets`). Une seule page, [`ProjectCaseStudy.astro`](src/components/project/ProjectCaseStudy.astro), génère l'étude de cas de chaque projet ; une partie ne s'affiche que si ses champs sont remplis.
- La structure de la base est versionnée dans [`backend/pb_migrations`](backend/pb_migrations). Les données elles-mêmes (`backend/pb_data`) ne sont pas publiées.
- Le **formulaire de contact** enregistre les messages dans la collection `formulaire`, lisible uniquement par l'administratrice.

## Lancer le projet

```sh
npm install
npm run backend   # PocketBase sur http://127.0.0.1:8090 (admin : /_/)
npm run dev       # site sur http://localhost:4321
npm run build     # génère le site dans dist/ (PocketBase doit être lancé)
```

## Documents du projet

- [JOURNAL.md](JOURNAL.md) — journal de bord
- [IA.md](IA.md) — déclaration d'usage de l'intelligence artificielle
- [QUALITE.md](QUALITE.md) — grille de contrôle qualité
