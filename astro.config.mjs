// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter"
    }
  ],

  site: "https://fayhen.github.io",

  i18n: {
    locales: ["en", "pt-br"],
    defaultLocale: "en",
    fallback: {
      "pt-br": "en"
    },
    routing: {
      prefixDefaultLocale: false,
      fallbackType: "redirect"
    }
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          "en": "en",
          "pt-br": "pt-BR"
        }
      }
    })
  ]
});