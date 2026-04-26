const THEMES = Object.freeze([
  "light", "dark", "retro-light", "retro-dark"
]);

/**
 * Retrieves the browser's preferred color scheme.
 * @returns Browser's preferred color scheme.
 */
export function browserPreference(): string {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Retrieves the theme set on localStorage. Defaults to "an empty string.
 * @returns Theme set on local storage.
 */
export function getLocalStorageTheme(): string {
  const localStorageTheme = window.localStorage?.getItem("theme") ?? "";

  if (THEMES.includes(localStorageTheme)) {
    return localStorageTheme;
  }

  return "";
}

/**
 * Gets the currently set theme or the browser's preference. Defaults to "light".
 * @returns Current theme.
 */
export function getTheme(): string {
  return getLocalStorageTheme() || browserPreference();
}

/**
 * Sets a new theme.
 */
export function setTheme(theme: string): void {
  document.documentElement.setAttribute("data-theme", theme);
  window.localStorage?.setItem("theme", theme);
}
