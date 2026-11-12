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

Semaine 3 (06/11/2026)
J'ai changé d'outil d'IA : je continue mon portfolio avec Claude Code, et je lui ai d'abord fait faire un état des lieux de mon projet par rapport aux consignes (voir IA.md).
Ce qui a coincé : ma base de données PocketBase (avec mon compte admin et les messages du formulaire) était publiée sur mon GitHub public. Je l'ai retirée du dépôt, ajoutée au .gitignore et j'ai changé mon mot de passe admin. J'ai aussi découvert que n'importe quel visiteur pouvait modifier ou supprimer mes projets : seule l'admin peut maintenant le faire.
J'ai remplacé SavouFest' par mon projet de SAÉ 303, « Le poids de l'IA », que j'ai rempli directement dans PocketBase, y compris ma contribution.
Mes trois études de cas passent maintenant par une seule page dynamique alimentée par PocketBase, au lieu de pages écrites en dur pour Olyvia et Wenddy. Chaque partie ne s'affiche que si ses champs sont remplis, ce qui me permet d'ajouter un projet même incomplet.
Les textes d'Olyvia dans PocketBase étaient provisoires (« Couleurs... ») et le lien vers le site était cassé : tout a été corrigé.
Les images d'Olyvia et Wenddy avaient été exportées de Figma déjà penchées, donc elles ne rentraient pas dans leurs cadres. Je les ai remplacées par les captures d'origine, c'est maintenant le code qui ajoute le cadre et la rotation.

Semaine 4 (10/11/2026)
J'ai remplacé Wenddy par mon projet TiK•TaK, un configurateur de montres que j'ai développé de la base de données jusqu'au déploiement. Je l'ai rempli dans PocketBase et sa page s'est créée toute seule grâce à la page d'étude de cas dynamique.
Ce qui a coincé : en appliquant cette règle, la phrase « Mon rôle dans le projet. » avait disparu de la page TiK•TaK. C'est un intitulé de rubrique et non un contenu, donc je l'ai remis par défaut (il reste personnalisable, comme pour Olyvia).
TiK•TaK a 4 captures, dont 3 très larges : sur une seule ligne elles devenaient minuscules. La galerie passe maintenant à la ligne quand il y a trop d'images.
Toute la carte d'aperçu d'un projet est maintenant cliquable, sur l'accueil et sur la page Mes projets. Elle n'est pas accessible au clavier, pour ne pas doubler le lien « Explorer le projet ».
J'ai rendu active ma page 404 « Page introuvable », en reprenant ma maquette Figma. Elle s'affiche pour toute adresse qui n'existe pas, renvoie bien le code d'erreur 404 et n'est pas indexée par Google. J'ai aussi vérifié qu'aucun lien interne du site n'était cassé.
Petite correction : « À propos » prend maintenant une majuscule dans le menu.


Présence professionnelle — choix de mes réseaux (12/11/2026)
LinkedIn est le réseau des recruteurs : c'est là que les agences de communication que je vise publient leurs offres de stage et d'alternance et vérifient le profil des candidats. Je l'ai mis à jour avec le même message que mon portfolio : chargée de communication digitale, en recherche de stage.
Pinterest est cohérent avec ma direction artistique : c'est là que je rassemble mes inspirations (édition, papeterie, typographie, univers « poste »), et il montre ma sensibilité esthétique, l'un des mots-clés de mon positionnement.
GitHub montre la partie technique de mon profil : le code de ce portfolio et de mes projets est public, ce qui prouve que je comprends aussi le développement, un atout pour une chargée de communication digitale qui travaille avec des équipes web.
Les trois liens sont présents dans le footer de toutes les pages et sur la page Contact, pour qu'un recruteur passe facilement du portfolio à mes réseaux.
