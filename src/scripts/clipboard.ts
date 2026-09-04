/**
 * Clipboard utils. Contains helpers to copy data
 * onto the user's clipboard.
 */

/**
 * Copies textual data onto the user's clipboard.
 *
 * @param text Textual data.
 * @returns Promise evaluating to `true` if the data has
 *   been copied successfully, `false` otherwise.
 */
export async function copyText(text: string): Promise<boolean> {
  if (!navigator.clipboard) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}