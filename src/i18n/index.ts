import { type Locale, defaultLocale } from "./locales";
import { ui } from "./ui";

export type UIKey = keyof (typeof ui)[typeof defaultLocale];

export function useTranslation(locale: Locale) {
  return function t(key: UIKey, params?: Record<string, string | number>): string {
    let text: string = ui[locale][key] ?? ui[defaultLocale][key] ?? key;

    if (params) {
      for (const [token, value] of Object.entries(params)) {
        text = text.replaceAll(`{${token}}`, String(value));
      }
    }

    return text;
  };
}
