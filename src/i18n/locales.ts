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
