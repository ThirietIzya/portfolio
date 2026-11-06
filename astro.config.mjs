// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';

// Adresse de PocketBase (locale par défaut, voir .env.example pour la production)
const { PUBLIC_POCKETBASE_URL = 'http://127.0.0.1:8090' } = loadEnv(
  process.env.NODE_ENV ?? 'development',
  process.cwd(),
  ''
);

// https://astro.build/config
export default defineConfig({
  image: {
    // Autorise Astro à lire les images de PocketBase (dimensions, optimisation)
    domains: [new URL(PUBLIC_POCKETBASE_URL).hostname],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
