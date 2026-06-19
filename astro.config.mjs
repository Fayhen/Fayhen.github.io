// @ts-check
import { defineConfig, fontProviders } from "astro/config";

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
  }
});
