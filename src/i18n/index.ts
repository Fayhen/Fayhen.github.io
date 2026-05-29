import { type Locale, defaultLocale } from "./locales";
import { ui } from "./ui";

export type UIKey = keyof (typeof ui)[typeof defaultLocale];

export function t(key: UIKey, locale: Locale): string {
  return ui[locale][key] ?? ui[defaultLocale][key] ?? key;
};

export function useTranslation(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key] ?? key;
  }; ;
};
