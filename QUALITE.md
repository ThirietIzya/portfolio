# Grille de contrôle qualité

Cette grille regroupe les critères que j'ai retenus pour **mon** portfolio, ce que j'ai vérifié, comment, et ce que j'ai corrigé.

Je les ai choisis à partir de ce qui caractérise mon site :
- **beaucoup d'images** : captures de projets, photos, timbres ;
- **une palette pastel** dans un univers « poste et édition », où les contrastes de couleurs sont à surveiller ;
- **des contenus qui viennent d'une base de données** (PocketBase) ;
- **un formulaire de contact** qui collecte des données personnelles ;
- **des projets réalisés en groupe**, ce qui pose la question des droits d'auteur.

**Légende :** ✅ vérifié et conforme · 🔧 problème trouvé puis corrigé · ⚠️ reste à faire

**Outils utilisés :**
- calcul des contrastes selon la formule WCAG ;
- analyse des pages générées (`npm run build`, dossier `dist/`) ;
- Chrome en mode automatique (Puppeteer) à 390 px de large, pour détecter les débordements sur mobile ;
- navigation au clavier ;
- `astro preview` pour tester les codes de réponse ;
- réglage « réduire les animations » de Windows.

---

## 1. Accessibilité

| Critère | Pourquoi pour mon site | Vérification | Résultat | Statut |
|---|---|---|---|---|
| Contraste du texte courant (WCAG AA : 4,5:1) | Ma palette pastel sur fond crème | Calcul du ratio pour chaque couple de couleurs | Texte principal 14,9:1, texte secondaire 5,98:1, labels violets 6,15:1, footer 10,9:1, bouton « Mon CV » 6,71:1 | ✅ |
| Contraste des labels colorés et des blocs de couleur | Mes petits labels en majuscules (12 px) et les blocs « Ma contribution » des études de cas | Même calcul | Avant : rose `#ce7372` **2,91:1**, vert `#768765` **3,39:1**, vert clair sur la carte verte **2,93:1**. J'ai foncé les deux couleurs de ma palette en gardant leur teinte : rose `#a75251` et vert `#627054`, à **4,63:1** dans les deux sens (texte coloré sur crème, texte crème sur fond coloré). Les textes vert clair sur fond vert sont passés en crème | 🔧 |
| Message d'erreur du formulaire | Texte rose sur fond rose pâle | Même calcul | 3,99:1 → texte passé en foncé sur le fond rose pâle | 🔧 |
| Indicateur de focus | Mes champs de formulaire n'avaient pas de contour (`outline-none`) | Navigation au clavier sur tout le site | Contour de 2 px en couleur du texte sur tous les éléments au focus (`:focus-visible`), donc sombre sur fond clair et clair sur le footer foncé. `outline-none` retiré des champs | 🔧 |
| Textes alternatifs des images | Mon portfolio repose sur des images | Lecture des balises `<img>` des pages générées | Images de projet : texte alternatif tiré des légendes PocketBase (« Olyvia! — Le salon d'Olyvia! · Un espace de parole libre »). Icônes décoratives : `alt=""` | ✅ / ⚠️ les légendes de TiK•TaK restent à rédiger (texte alternatif générique pour l'instant) |
| Un seul titre principal par page | Repère pour les lecteurs d'écran | Comptage des `<h1>` sur les 9 pages | 1 `<h1>` par page | ✅ |
| Langue de la page | Prononciation des lecteurs d'écran | `<html lang="fr">` | Présent sur toutes les pages | ✅ |
| Liens en double au clavier | Sur l'accueil et la page Projets, toute la carte d'aperçu est un lien, comme « Explorer le projet » | Navigation avec la touche Tab | Carte retirée de la navigation clavier (`tabindex="-1"`, `aria-hidden`) : un seul arrêt par projet | 🔧 |
| Formulaire de contact | Seul élément où le visiteur saisit des données | Lecture du code | Champs dans un `<label>`, `required`, `autocomplete` sur le nom et l'e-mail, message de confirmation ou d'erreur affiché sur la page | ✅ |
| Animations | Défilement doux (Lenis), animations au survol, étoile qui clignote dans le hero | Activation de « réduire les animations » dans Windows | Lenis ne démarre pas, les mouvements au survol sont désactivés (`motion-safe`). L'étoile du hero clignotait même avec ce réglage : passée en `motion-safe:animate-pulse` | 🔧 |
| Liens qui ouvrent un nouvel onglet | Liens vers mes réseaux et vers les sites des projets | Lecture du code | `aria-label` sur les liens des réseaux (« Profil LinkedIn d'Izya Thiriet »). « (nouvel onglet) » annoncé aux lecteurs d'écran sur le lien de chaque projet | ✅ |
| Menu mobile | Navigation sur téléphone | Lecture du code | Le bouton du menu indique son état ouvert ou fermé (`aria-expanded`) | ✅ |
| Zoom | Les personnes malvoyantes zooment | Balise viewport | `width=device-width, initial-scale=1`, sans blocage du zoom | 🔧 `initial-scale` ajouté |

## 2. Responsive

| Critère | Pourquoi pour mon site | Vérification | Résultat | Statut |
|---|---|---|---|---|
| Pas de défilement horizontal sur mobile | Mes grands titres en 140 px et mes éléments décoratifs (étoiles, cachet) peuvent dépasser | Chrome automatisé à 390 px de large : largeur de chaque page comparée à celle de l'écran | Débordements trouvés : étoile du titre « Mes Projets » (3 px), étoile du titre des études de cas (10 px), titre et cachet de la page 404 (23 px). Étoiles placées dans une marge du titre, titre 404 réduit sur mobile, cachet recentré. Les 9 pages font maintenant 390 px | 🔧 |
| Textes longs | L'adresse e-mail en grand sur la page Contact | Capture d'écran à 390 px | Elle se coupait en plein milieu (« gmail.co / m ») → taille réduite sur mobile, coupure seulement entre deux mots | 🔧 |

## 3. Sobriété et performance

| Critère | Pourquoi pour mon site | Vérification | Résultat | Statut |
|---|---|---|---|---|
| Poids de chaque page | Un portfolio chargé en images pèse vite très lourd | Somme du HTML, du CSS, du JS et des images de chaque page générée | **Avant → après :** Accueil 5,8 Mo → **426 Ko** · À propos 3,0 Mo → **541 Ko** · Olyvia 2,1 Mo → **661 Ko** · Projets 1,2 Mo → **330 Ko** · Le poids de l'IA 1,2 Mo → **487 Ko** · TiK•TaK 0,6 Mo → **393 Ko** · Contact, Mentions, 404 : environ 180 Ko | 🔧 |
| Photos du site | `portrait-izya.png` pesait **4,7 Mo** à lui seul (80 % du poids de l'accueil) | Taille des fichiers dans `dist/_astro` | Converties en WebP à 2× leur taille d'affichage avec les outils d'image d'Astro (`<Image>`, `getImage`) : portrait 4,7 Mo → **49 Ko**, photos de la page À propos de 244 Ko – 1,2 Mo → **24 – 201 Ko** | 🔧 |
| Captures des projets | Elles venaient de PocketBase en PNG pleine taille | Comparaison avant / après | Téléchargées et converties en WebP (largeur max 1 600 px) au moment du build. Bonus : le site en ligne ne dépend plus de PocketBase pour ses images | 🔧 |
| Dimensions des images | Évite que la page « saute » pendant le chargement | Présence de `width` / `height` sur les `<img>` | Toutes les images de toutes les pages ont leurs dimensions | 🔧 |
| Chargement différé | Les images en bas de page ne doivent pas ralentir l'affichage | Attribut `loading` | `loading="lazy"` partout, sauf la première image visible (`eager`) | ✅ |
| Polices | Deux familles (Playfair Display et Inter) | Lecture du layout et du CSS | Google Fonts était chargé **deux fois**. Les polices sont maintenant hébergées par le site (Fontsource) et chargées une seule fois : 3 fichiers WOFF2, 123 Ko, et le navigateur ne télécharge que les caractères latins | 🔧 |
| Icônes des réseaux | Affichées sur toutes les pages, dans le footer | Taille des fichiers | Les icônes GitHub et Pinterest pèsent **55 Ko chacune** pour un dessin de 30 px : tracés exportés de Figma trop détaillés | ⚠️ à ré-exporter simplifiées |
| JavaScript | Je n'en ai besoin que pour quelques interactions | Taille des fichiers générés | 47 Ko de CSS et de JS en tout. Lenis ne se lance pas si le visiteur réduit les animations | ✅ |
| Génération du site | Le site ne doit pas interroger la base à chaque visite | Configuration d'Astro | Site statique : PocketBase n'est lu qu'au moment du build | ✅ |

## 4. Référencement

| Critère | Pourquoi pour mon site | Vérification | Résultat | Statut |
|---|---|---|---|---|
| Titre et description de chaque page | Ce que Google affiche dans ses résultats | Lecture de `<title>` et `<meta name="description">` | Uniques sur chaque page. Les études de cas utilisent la description courte du projet dans PocketBase. La description de la page Projets se construit à partir des titres des projets | 🔧 elle citait encore SavouFest' et Wenddy |
| Structure des titres | Aide les moteurs à comprendre la page | Comptage des `<h1>` | 1 par page | ✅ |
| Adresses lisibles | `/projets/olyvia` plutôt qu'un identifiant | Lecture des URL | Chaque projet a un `slug` dans PocketBase | ✅ |
| Liens internes cassés | Un lien mort fait mauvaise impression et nuit au référencement | Script qui teste tous les liens internes de toutes les pages | Aucun lien cassé | ✅ |
| Page 404 | Adresse mal tapée, lien obsolète | `astro preview` puis requête d'une adresse inconnue | Ma page « Page introuvable » s'affiche avec le code HTTP **404** et une balise `noindex` | 🔧 |
| Plan du site et robots.txt | Aider Google à trouver toutes mes pages | Présence des fichiers dans `dist/` | Ajoutés : `sitemap-index.xml` (8 pages, sans la 404, généré par `@astrojs/sitemap`) et `robots.txt` qui l'indique | 🔧 |
| Adresse canonique | Éviter que la même page soit indexée sous plusieurs adresses | Lecture du `<head>` | `<link rel="canonical">` sur chaque page, sauf la 404 | 🔧 |
| Aperçu au partage | Je partage mon portfolio sur LinkedIn | Recherche des balises Open Graph | Ajoutées sur toutes les pages : titre, description, adresse et une image d'aperçu de 1 200 × 630 px aux couleurs de mon site (42 Ko) | 🔧 |

## 5. Conformité juridique

| Critère | Pourquoi pour mon site | Vérification | Résultat | Statut |
|---|---|---|---|---|
| Protection de la base de données | Elle contient mon compte admin et les messages des visiteurs | Liste des fichiers suivis par Git | `data.db` était publié sur mon GitHub public : retiré du dépôt, ajouté au `.gitignore`, mot de passe admin changé | 🔧 |
| Droits sur les données | N'importe qui ne doit pas pouvoir modifier mes projets | Règles d'API de PocketBase | Elles permettaient à n'importe quel visiteur de créer, modifier ou supprimer un projet. Maintenant, lecture publique et modification réservée à l'admin. Les messages ne sont lisibles que par moi | 🔧 |
| Mentions légales (loi LCEN) | Obligatoires pour tout site | Lecture de la page Mentions légales | L'URL et l'hébergeur étaient « À renseigner ». Ajoutés : `izya-thiriet.fr`, Infomaniak Network SA (adresse vérifiée sur les mentions légales d'Infomaniak) | 🔧 |
| Protection de mes propres données | Je suis une particulière | Lecture de la page | Mon adresse personnelle et mon numéro de téléphone étaient publiés. Retirés, comme le permet l'article 6-III-2 de la LCEN à une éditrice non professionnelle : l'hébergeur connaît mes coordonnées | 🔧 |
| Information RGPD du formulaire | Je collecte un nom, un e-mail et un message | Lecture de la page Mentions légales | Ajoutés : responsable, finalité, base légale (intérêt légitime), destinataire, durée de conservation (1 an maximum après le dernier échange), droits d'accès, de rectification, d'effacement et d'opposition, et recours auprès de la CNIL | 🔧 |
| Cookies et traceurs | Un bandeau n'est obligatoire qu'en cas de traceurs | Lecture du code et des requêtes | Aucun cookie, aucun outil de statistiques. Google Fonts transmettait l'adresse IP des visiteurs à Google : polices désormais hébergées par le site, donc plus aucune requête vers un service tiers. Pas de bandeau nécessaire | 🔧 |
| Droits d'auteur des projets de groupe | Olyvia! et Le poids de l'IA ont été réalisés en équipe | Lecture des études de cas et des mentions | Les mentions disaient que j'étais propriétaire de tous les contenus. Maintenant, mes coéquipières sont créditées (Bambou Franceschini et Laura Bailly) dans les mentions légales et en haut de chaque étude de cas (« En équipe avec … », champ `equipe` dans PocketBase) | 🔧 |
| Droit à l'image | Une capture d'Olyvia! montre la photo d'une personne | Revue des images | Accord de la personne obtenu dans le cadre de la SAÉ, mentionné dans les mentions légales | ✅ |
| Licences des outils | Je dois déclarer les librairies utilisées | Liste des dépendances (`package.json`) | Déclarées dans le README et les mentions légales : Astro, Tailwind CSS, PocketBase, Lenis, @astrojs/sitemap (MIT), Playfair Display et Inter (SIL Open Font License) | 🔧 |
| Liens externes | Sécurité des liens qui ouvrent un nouvel onglet | Lecture du code | `rel="noopener noreferrer"` sur tous les liens `target="_blank"` | ✅ |

---

## Reste à faire

1. Rédiger les légendes des images de TiK•TaK dans PocketBase (`legendes_mockups`, `legendes_realisation`).
2. Ré-exporter les icônes GitHub et Pinterest simplifiées.
3. Mettre en ligne le formulaire de contact : aujourd'hui, il envoie les messages à PocketBase sur mon ordinateur.
4. Une fois le site en ligne : mesurer les scores Lighthouse, tester l'aperçu LinkedIn (Post Inspector) et noter les résultats ici.
