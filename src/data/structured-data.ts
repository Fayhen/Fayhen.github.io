import type { Graph } from "schema-dts";
import type { Locale } from "../i18n/locales";

import { socialProfiles } from "./contacts";
import { useTranslation } from "../i18n";

interface Args {
  site: URL;
  locale: Locale;
  siteName: string;
  imageUrl: string;
}

export function buildStructuredData({
  site,
  locale,
  siteName,
  imageUrl
}: Args): Graph {
  const t = useTranslation(locale);
  const homeUrl = new URL("/", site).href;
  const personId = new URL("#person", site).href;
  const websiteId = new URL("#website", site).href;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        "name": siteName,
        "url": homeUrl,
        "image": imageUrl,
        "jobTitle": t("intro.role"),
        "description": t("meta.description"),
        "sameAs": socialProfiles
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        "url": homeUrl,
        "name": siteName,
        "inLanguage": locale === "pt-br" ? "pt-BR" : "en",
        "author": { "@id": personId },
        "publisher": { "@id": personId }
      }
    ]
  };
}
