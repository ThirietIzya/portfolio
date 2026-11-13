# Grille de contrôle qualité

Cette grille regroupe les critères que j'ai retenus pour mon portfolio, ce que j'ai vérifié, comment, et ce que j'ai corrigé.

Je les ai choisis à partir de ce qui caractérise mon site :
- beaucoup d'images : captures de projets, photos, timbres ;
- des contenus qui viennent d'une base de données (PocketBase) ;
- un formulaire de contact qui collecte des données personnelles ;
- des projets réalisés en groupe, ce qui pose la question des droits d'auteur.


Outils utilisés :
- calcul des contrastes selon la formule WCAG ;
- analyse des pages générées (`npm run build`, dossier `dist/`) ;
- Chrome en mode automatique (Puppeteer) à 390 px de large, pour détecter les débordements sur mobile ;
- navigation au clavier ;
- réglage « réduire les animations » de Windows.


## 1. Accessibilité


En naviguant au clavier, je ne voyais pas quel champ du formulaire était sélectionné : j'ai ajouté un contour visible sur tous les liens, boutons et champs du site. Les cartes de projets, qui doublaient le lien « Explorer le projet », ont été retirées de la navigation clavier.

En activant « réduire les animations » dans Windows, j'ai vérifié que le défilement doux et les animations au survol se désactivent. L'étoile du hero continuait de clignoter : corrigé.

J'ai aussi contrôlé dans le code des pages : un seul titre `<h1>` par page, la langue `fr`, des textes alternatifs sur les images (tirés des légendes PocketBase), des champs de formulaire avec leur libellé, et des liens vers mes réseaux nommés pour les lecteurs d'écran.


## 2. Responsive

J'ai testé toutes les pages sur un écran de téléphone (390 px de large). Mes grands titres et mes décorations (étoiles, cachet) dépassaient parfois de l'écran, ce qui créait un défilement sur le côté : c'était le cas sur la page « Mes Projets », les études de cas et la page 404. J'ai déplacé les étoiles, réduit le titre de la 404 et recentré le cachet. Maintenant, les 9 pages tiennent dans la largeur de l'écran.

Sur la page Contact, mon adresse e-mail écrite en grand se coupait en plein milieu du mot. Je l'ai rendue plus petite sur mobile pour qu'elle ne se coupe plus qu'entre deux mots.


## 4. Référencement

Chaque page a son propre titre et sa propre description : c'est ce que Google affiche dans ses résultats. Pour les études de cas, la description vient directement de PocketBase. Celle de la page Projets se crée à partir des titres des projets. Avant, elle citait encore d'anciens projets (SavouFest' et Wenddy), alors je l'ai corrigée.

Chaque page a un seul grand titre (`<h1>`), et les adresses sont lisibles, par exemple `/projets/olyvia` plutôt qu'un identifiant. J'ai aussi vérifié avec un script que tous les liens internes du site fonctionnent : aucun n'est cassé.

Quand on tape une adresse qui n'existe pas, ma page « Page introuvable » s'affiche bien avec le code d'erreur 404, et elle est marquée pour ne pas apparaître dans Google.

Pour aider Google à trouver toutes mes pages, j'ai ajouté un plan du site (sitemap) et un fichier `robots.txt`. J'ai aussi indiqué sur chaque page son adresse officielle (adresse canonique), pour qu'une même page ne soit pas comptée deux fois.

Enfin, comme je partage mon portfolio sur LinkedIn, j'ai ajouté les balises Open Graph : quand on partage un lien, un aperçu s'affiche avec le titre, la description et une image aux couleurs de mon site.

## 5. Conformité juridique

Ma base de données (`data.db`), qui contient mon compte admin et les messages des visiteurs, était publiée par erreur sur mon GitHub public. Je l'ai retirée du dépôt, je l'ai ajoutée au `.gitignore` et j'ai changé mon mot de passe admin. Les règles de PocketBase permettaient aussi à n'importe quel visiteur de créer, modifier ou supprimer un projet. Maintenant, tout le monde peut lire les projets, mais seule l'admin peut les modifier, et je suis la seule à pouvoir lire les messages.

Dans mes mentions légales, l'adresse du site et l'hébergeur étaient encore « À renseigner ». J'ai ajouté `izya-thiriet.fr` et mon hébergeur, Infomaniak. J'ai aussi retiré mon adresse personnelle et mon numéro de téléphone : en tant que particulière, la loi (LCEN) me permet de ne pas les publier, car mon hébergeur connaît mes coordonnées.

Comme mon formulaire de contact récupère un nom, un e-mail et un message, j'ai expliqué dans les mentions légales ce que je fais de ces données (RGPD) : pourquoi je les garde, qui les reçoit, combien de temps je les conserve (1 an maximum), quels sont les droits des visiteurs et comment contacter la CNIL.

Mon site n'utilise aucun cookie ni outil de statistiques. Par contre, Google Fonts envoyait l'adresse IP des visiteurs à Google : j'héberge maintenant les polices directement sur mon site. Je n'ai donc pas besoin de bandeau cookies.

Olyvia! et Le poids de l'IA sont des projets de groupe, mais les mentions disaient que tous les contenus m'appartenaient. Maintenant, mes coéquipières, Bambou Franceschini et Laura Bailly, sont créditées dans les mentions légales et en haut de chaque étude de cas. Une capture d'Olyvia! montre la photo d'une personne : elle a donné son accord dans le cadre de la SAÉ, et c'est indiqué dans les mentions légales.

J'ai aussi cité dans le README et les mentions légales les outils et polices que j'utilise, avec leur licence (Astro, Tailwind CSS, PocketBase, Lenis, Playfair Display, Inter…). Enfin, les liens qui s'ouvrent dans un nouvel onglet sont sécurisés avec `rel="noopener noreferrer"`.
