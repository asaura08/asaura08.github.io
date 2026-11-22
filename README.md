# Portfolio de Alfonso

Portfolio bilingüe en Astro 7 con contenido estático en español e inglés.

Con Node 24, ejecuta `npm ci` y `npm run dev`. Para comprobar tipos y construir la versión de producción, usa `npm run check` y `npm run build`. Puedes revisar la compilación con `npm run preview`.

Los textos se editan en `src/content/projects/es` y `src/content/projects/en`. Cada caso necesita el mismo identificador en ambos idiomas. Las categorías, los datos de contacto y las referencias públicas se mantienen en `src/data/site.ts`.

El workflow de GitHub Pages construye la rama principal usando el dominio y la ruta base de Pages. En una compilación local se pueden configurar con `PAGES_SITE` y `PAGES_BASE`.
