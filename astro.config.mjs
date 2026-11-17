// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Adresse de PocketBase (serveur en ligne par défaut, voir .env.example pour utiliser un PocketBase local)
const { PUBLIC_POCKETBASE_URL = 'https://api.izya-thiriet.fr' } = loadEnv(
  process.env.NODE_ENV ?? 'development',
  process.cwd(),
  ''
);

// https://astro.build/config
export default defineConfig({
  // Adresse du site en ligne : sert au plan du site, aux liens canoniques et aux aperçus de partage
  site: 'https://portfolio.izya-thiriet.fr',
  // Génère sitemap-index.xml (la page 404 en est exclue automatiquement)
  integrations: [sitemap()],
  image: {
    // Autorise Astro à lire les images de PocketBase (dimensions, optimisation)
    domains: [new URL(PUBLIC_POCKETBASE_URL).hostname],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
