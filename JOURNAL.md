Semaine 1 (13/10/2026)
Je viens de créer mon projet portfolio sur vs code en intégrant Astro. 
Pour réaliser le site de mon portfolio, j'utilise Antigravity à qui je donne le lien de mon composant Figma (voir explication dans IA.md).
J'ai pour l'instant réalisé ma page d'accueil en gros mais beaucoup de détails sont à revoir. Antigravity ne m'a par exemple pas penché les images que je voulais pencher et il n'utilise pas forcément les bonnes typographies. 
Je n'avais pas encore importé mes variables depuis Figma, ce qui l'empêchait d'utiliser les bonnes typographies.

Semaine 2 (22/10/2026)
J'ai amélioré la page d'accueil, j'ai créé les autres pages en gros, pour m'occuper des détails par la suite.
J'ai créé mon pocketbase et je l'ai lié au reste de mon projet. Cela permet que les projets soient modifiable et ajoutable facilement sur le site. Cela permet également que le formulaire de contact soit bien actif. 
La page « Mes projets » a été créée avec un système de filtres par catégorie (Communication, Création, Développement). Les pages pour mes projets Olyvia! et Wenddy, en reprenant fidèlement les blocs de contexte, de stratégie, d'identité visuelle et les maquettes. Je n'ai pas encore fait la page de Wenddy mais je pense à changer de projet et mettre plutot le dernière projet réalisé en SAE 303.
Résolution du formulaire de contact : au début, cliquer sur « Envoyer » ouvrait mon application Outlook. Nous avons corrigé cela pour que ca enregistre directement les messages (nom, email, message) dans la collection `formulaire` de PocketBase et affiche un message de confirmation vert sur la page sans recharger ni ouvrir de logiciel externe.
J'ai ajusté la responsivité que ne s'adapter pas bien sur desktop. Je doit encore m'occuper de la version mobile.
J'ai ajouté mon fichier PDF de CV dans le dossier `public/` d'Astro et configuré le bouton « Mon CV » du header avec l'attribut `download` pour qu'il se télécharge directement sous le nom `CV-Izya-Thiriet.pdf` lorsqu'un recruteur clique dessus.