import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";
import { linkedin, pages, segment } from "./src/data/site.ts";
const site = process.env.PAGES_SITE || "https://saura.dev";
const base = process.env.PAGES_BASE || "/";
const translations = new Map();
for (const id of pages) {
  const links = ["es", "en"].map((lang) => ({
    lang,
    url: new URL(
      "/" +
        [base, lang === "en" ? "en" : "", segment(id, lang)]
          .join("/")
          .split("/")
          .filter(Boolean)
          .join("/"),
      site,
    ).href.replace(/\/?$/, "/"),
  }));
  for (const item of links)
    translations.set(item.url, [
      ...links,
      { lang: "x-default", url: links[0].url },
    ]);
}
export default defineConfig({
  site,
  base,
  redirects: { "/contacto": linkedin, "/en/contact": linkedin },
  trailingSlash: "always",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwind()] },
  integrations: [
    sitemap({
      filter: (url) => translations.has(url),
      serialize: (item) => ({ ...item, links: translations.get(item.url) }),
    }),
  ],
});
