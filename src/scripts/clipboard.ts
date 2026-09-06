/**
 * Clipboard utils. Contains helpers to copy data
 * onto the user's clipboard.
 */

import { maybeLog } from "./console";

/**
 * Evaluates whether the Clipboard object is available
 * to the browser.
 *
 * @returns `true` if the clipboard is enabled.
 *   `false` otherwise.
 */
export function clipboardEnabled(): boolean {
  return !!navigator.clipboard;
}

/**
 * Copies textual data onto the user's clipboard.
 *
 * @param text Textual data.
 * @returns Promise evaluating to `true` if the data has
 *   been copied successfully, `false` otherwise.
 */
export async function copyText(text: string): Promise<boolean> {
  if (!navigator.clipboard) {
    maybeLog("warn", "Clipboard unavailable on the current execution context.");
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}