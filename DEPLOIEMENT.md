# Mise en ligne du portfolio

Hébergement : VPS Infomaniak (Linux).

## Architecture

```
Visiteur ──HTTPS──▶ Caddy (VPS)
                     ├─ mon-domaine.fr      → fichiers statiques du site (dossier dist/ d'Astro)
                     └─ api.mon-domaine.fr  → PocketBase (127.0.0.1:8090, non exposé directement)
```

- **Astro** génère un site statique : les projets sont lus dans PocketBase **au moment du build**.
  Si je modifie un projet dans l'admin PocketBase, je dois relancer le build et renvoyer `dist/`.
- **PocketBase** tourne en permanence sur le VPS pour le formulaire de contact, les images des projets et l'admin.
- **Caddy** sert le site, fait le lien vers PocketBase et gère seul les certificats HTTPS (Let's Encrypt).

Dans ce document, remplacer `mon-domaine.fr` par mon domaine, `IP_DU_VPS` par l'adresse IP du VPS
et `utilisateur` par l'utilisateur SSH donné par Infomaniak (souvent `ubuntu` ou `debian`).

## 1. DNS (Manager Infomaniak → Domaines → Zone DNS)

| Type | Nom | Valeur |
|------|-----|--------|
| A | `@` (domaine nu) | `IP_DU_VPS` |
| A | `www` | `IP_DU_VPS` |
| A | `api` | `IP_DU_VPS` |

Dans le pare-feu du VPS (Manager Infomaniak), ouvrir les ports **22**, **80** et **443**.

## 2. Installer Caddy sur le VPS

```bash
ssh utilisateur@IP_DU_VPS
sudo apt update && sudo apt install -y caddy unzip
```

## 3. Installer PocketBase

Sur le VPS :

```bash
sudo mkdir -p /opt/pocketbase
cd /opt/pocketbase
sudo wget https://github.com/pocketbase/pocketbase/releases/download/v0.40.5/pocketbase_0.40.5_linux_amd64.zip
sudo unzip pocketbase_0.40.5_linux_amd64.zip pocketbase && sudo rm pocketbase_0.40.5_linux_amd64.zip
sudo useradd -r -s /usr/sbin/nologin pocketbase
```

Depuis mon PC (PowerShell, à la racine du projet, **PocketBase local arrêté**), envoyer la base et les migrations :

```powershell
scp -r backend/pb_data backend/pb_migrations utilisateur@IP_DU_VPS:~/
```

Puis sur le VPS :

```bash
sudo mv ~/pb_data ~/pb_migrations /opt/pocketbase/
sudo chown -R pocketbase:pocketbase /opt/pocketbase
```

Créer le service pour que PocketBase démarre tout seul : `sudo nano /etc/systemd/system/pocketbase.service`

```ini
[Unit]
Description=PocketBase du portfolio
After=network.target

[Service]
User=pocketbase
ExecStart=/opt/pocketbase/pocketbase serve --http=127.0.0.1:8090 --dir=/opt/pocketbase/pb_data --migrationsDir=/opt/pocketbase/pb_migrations
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable --now pocketbase
sudo systemctl status pocketbase   # doit afficher "active (running)"
```

## 4. Configurer Caddy

`sudo nano /etc/caddy/Caddyfile` (remplacer tout le contenu) :

```caddy
mon-domaine.fr {
	root * /var/www/portfolio
	encode zstd gzip
	file_server

	# Fichiers générés par Astro (nom unique) : cache long
	header /_astro/* Cache-Control "public, max-age=31536000, immutable"
}

www.mon-domaine.fr {
	redir https://mon-domaine.fr{uri} permanent
}

api.mon-domaine.fr {
	reverse_proxy 127.0.0.1:8090
}
```

```bash
sudo mkdir -p /var/www/portfolio
sudo chown utilisateur /var/www/portfolio
sudo systemctl reload caddy
```

## 5. Construire et envoyer le site

Sur mon PC, créer `.env.production` (copie de `.env.example`) :

```
PUBLIC_POCKETBASE_URL=https://api.mon-domaine.fr
```

Puis :

```powershell
npm run build
scp -r dist/* utilisateur@IP_DU_VPS:/var/www/portfolio/
```

À refaire à chaque modification du code **ou** des projets dans PocketBase.

## 6. Réglages PocketBase en ligne

Sur `https://api.mon-domaine.fr/_/` → Paramètres :

- **Application URL** : `https://api.mon-domaine.fr`
- **Rate limiting** : activer (limite les envois en masse sur le formulaire de contact).

## Vérifications

- `https://mon-domaine.fr` affiche le site avec le cadenas HTTPS.
- Les images des projets s'affichent (elles viennent de `api.mon-domaine.fr`).
- Un message envoyé depuis la page contact apparaît dans la collection `formulaire`.
- En navigation privée, impossible de modifier un projet via l'API (règles réservées à l'admin).
