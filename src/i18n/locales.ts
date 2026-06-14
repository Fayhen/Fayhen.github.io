export const locales = ["en", "pt-br"] as const;
export const defaultLocale = "en" satisfies Locale;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  "en": "English",
  "pt-br": "Português"
};

export function isLocale(value: string | undefined): value is Locale {
  if (value === undefined) return false;
  return (locales as readonly string[]).includes(value);
}

/**
 * Strips a leading locale segment from a URL path, returning the bare
 * route with **no** leading or trailing slash.
 *
 * Works by paths are split into segments; if the first one is a known
 * locale (e.g. "pt-br"), it is dropped.
 *
 * @param path - A URL path, typically `Astro.url.pathname`.
 * @returns The route without its locale prefix or surrounding slashes.
 *
 * @example
 * stripLocaleFromUrlPath("/pt-br/projects"); // "projects"
 * stripLocaleFromUrlPath("/projects");       // "projects"
 * stripLocaleFromUrlPath("/");               // ""
 */
export function stripLocaleFromPath(path: string): string {
  const segments = path.split("/").filter(Boolean);
  const [maybeLocale, ...rest] = segments;
  return (isLocale(maybeLocale) ? rest : segments).join("/");
}
