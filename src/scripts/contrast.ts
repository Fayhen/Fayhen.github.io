/**
 * This module contains color contrast measurement helpers
 * used to audit theme palettes against WCAG standards.
 *
 * Themes in this application contain color token pairings
 * coupling background and foreground UI elements. To comply
 * with modern accessibility standards, we must ensure these
 * pairings obey WCAG contrast ratio requirements needed for
 * the visually impaired.
 *
 * In this module you'll find the tools to measure and audit
 * these ratios for each application theme. Functions are
 * documented so as to explain what they do and why.
 *
 * Fully understanding the calculations performed below will
 * require an understanding of physics and human physiology.
 * For a basic primer, read on.
 *
 * The human visual system distinguishes different surfaces,
 * such as text and other glyphs against the background they
 * sit in, by the difference in how much light reaches the eye
 * from each source. This difference, called "contrast", can
 * be expressed as a ratio between each of these components:
 *
 *         light from the brighter surface
 * ratio = ───────────────────────────────
 *          light from the darker surface
 *
 * This is the contrast ratio. The higher it is, the easier
 * to tell surfaces apart, and vice-versa. Designers and web
 * developers must keep this in mind on their day-to-day work:
 * a low ratio will make text harder to read, and may prevent
 * visually impaired users from effectively using the system.
 *
 * WCAG gives us both the target ratios we need for different
 * UI, and the formulas for computing luminance and contrast.
 * The constants mathed on the math below come from there, in
 * particular:
 *
 * - Contrast criteria documentation:
 *   https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum
 *   https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
 * - Contrast ratio formula:
 *   https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio
 * - Relative luminance formula:
 *   https://www.w3.org/TR/WCAG22/#dfn-relative-luminance
 *
 * Some particular notes for this application:
 *
 * Palettes are defined with the OKLCH format, which offers
 * superior perceptual uniformity during the design process.
 * However, WCAG 2.x computes luminance from linearized sRGB.
 * Therefore, this module handles conversions and the sRGB
 * gamma stripping needed for luminance measurements.
 *
 * Furthermore, the palettes include translucent colors. A
 * translucent color does not have luminance on its own,
 * instead it has luminance over a backdrop. We handle this
 * via compositing: the process of combining visual elements
 * from different sources into a single image.
 *
 * Here we delegate compositing to a canvas element, rather
 * than implementing by hand. Both canvas and CSS handle
 * alpha compositing the same way: with gamma-encoded values
 * instead of linear light. This seems like the wrong color
 * space to work with, but its what the browser paints with.
 * Because we audit what the user is seeing, we use the
 * browser's built-in tools.
 *
 * We perform linearization on a subsequent step, over
 * already-composited colors.
 */

/**
 * An 8-bit sRGB triple (`[r, g, b]`). Each channel is a
 * 0-255 integer.
 */
type RGB = [number, number, number];

/**
 * WCAG UI element type for contrast ratio auditing.
 */
export type UIKind = "body" | "large" | "nonText"

/**
 * The canvas context used on OKLCH -> sRGB conversion pipelines.
 * `willReadFrequently: true` keeps the canvas in CPU memory,
 * so we don't stall with successive GPU round trips.
 */
const CTX: CanvasRenderingContext2D = (() => {
  const context = document.createElement("canvas")
    .getContext("2d", { willReadFrequently: true });

  if (!context) {
    throw new Error("2D canvas unavailable, cannot audit contrast");
  }

  return context;
})();

/**
 * Guard against invalid CSS color strings passed down to the
 * canvas context object during OKLCH -> sRGB conversion. The
 * chosen near-black tone does not match other colors in use
 * by the themes, preventing false positives.
 */
const OKLCH_CONVERSION_GUARD = "#010203";

/**
 * WCAG Thresholds for different kinds of UI:
 *
 * - 4.5:1 body text                          (SC 1.4.3)
 * - 3:1   large text >=24px, >=18.66px bold  (SC 1.4.3)
 * - 3:1   non-text UI                        (SC 1.4.11)
 */
export const THRESHOLDS: Record<UIKind, number> = {
  "body": 4.5,
  "large": 3,
  "nonText": 3
};

/**
 * Composites a stack of CSS colors into a single opaque sRGB
 * triple.
 *
 * Leverages a 2D canvas rendering context object to perform
 * composting. Also converts colors from any color spaces to
 * sRGB for free, as the canvas parses any valid CSS colors.
 *
 * - `CTX.clearRect` gives a transparent black 1px rectangle.
 * - `OKLCH_CONVERSION_GUARD` applies a known, opaque color to
 *   read back from should `CTX.fillStyle` receive invalid
 *   values.
 * - `CTX.fillStyle` accepts and normalizes valid CSS color
 *   strings.
 * - `.data` gives us `[r, g, b, a]` as 0-255 integers.
 * - Destructuring drops the alpha, leaving us with an 8-bit
 *   sRGB triple.
 *
 * Note we always use one pixel - enough to resolve a flat color.
 *
 * @param colors Layer stack in paint order, back to front.
 *   Each is any valid CSS color string. The first color must
 *   be opaque: `clearRect` leaves transparent black and the
 *   dropped alpha would corrupt the channel otherwise.
 * @returns An `[r, g, b]` array, `null` if any color fails to
 *   parse.
 */
export const flatten = (...colors: string[]): RGB | null => {
  CTX.clearRect(0, 0, 1, 1);

  for (const color of colors) {
    CTX.fillStyle = OKLCH_CONVERSION_GUARD;
    CTX.fillStyle = color;

    if (CTX.fillStyle === OKLCH_CONVERSION_GUARD) return null;

    CTX.fillRect(0, 0, 1, 1);
  }

  const [r, g, b] = CTX.getImageData(0, 0, 1, 1).data;
  return [r, g, b];
};

/**
 * Computes the WCAG relative luminance of an sRGB color:
 * the proportion of light it emits, normalized so black
 * = 0 and white = 1.
 *
 * Two corrections are applied to sRGB channels to achieve
 * this result:
 *
 * LINEARIZATION. sRGB has a non-linear scale, but we must
 * convert these to a linear color space in order to perform
 * the contrast calculations we want. This is because, due
 * to its non-linearity, sRGB is not proportional to light.
 * A color in the middle of its scale only emits ~21.6% of
 * light, not 50%. We correct this with the `f` helper:
 *
 * - `** 2.4` with the `0.055` offset: This is the sRGB
 *   decode curve.
 *   Used on screen calibration and web standards.
 * - `(c /= 255) <= 0.03928`: This encodes a linear toe
 *   near the black end of the scale. Compensates for the
 *   zero slope near the origin of the power curve, so we
 *   avoid mathematical artifacts.
 *
 * It is useful to understand why sRGB is non-linear on the
 * first place. This is rooted both on hardware engineering
 * history and human physiology, but to keep it short:
 *
 * - The RGB non-linearity comes from its original inception
 *   aimed towards the common CRT screens of the time. It's
 *   related to CRT physics and image encoding on 1950's
 *   hardware.
 * - This coincidentally relates to an aspect of the human
 *   visual system: luminance perception is also non-linear.
 *   This is likely due to the evolutionary advantages of
 *   perceiving a wide brightness range, while still being
 *   capable of distinguishing details across this whole
 *   range - from moonless nights to bright sunlight. These
 *   stimuli levels differ by orders of magnitude, favoring
 *   a non-linear/logarithmic scale over human evolutionary
 *   history. Read about the Weber-Fechner laws and more
 *   recent models if you're interested in learning more.
 * - The RGB non-linearity was deliberately kept when sRGB
 *   was drafted in the 1990's, both due to physics and the
 *   era's dominant hardware, and the coincidental relation
 *   with the human brightness perception.
 * - Modern color spaces circle back to the human perceptual
 *   quirk and improve upon the older standards. CIELAB and
 *   OKLab/OKLCH both cover the entire gamut of human color
 *   perception and use cube roots on their cores. Both were
 *   designed to te perceptually uniform, and OKLab/OKLCH
 *   (Ottosson, 2020) was built from scratch to fix CIELAB's
 *   shortcomings.
 *
 * CHANNEL WEIGHTING: each RGB channel contributes unequally
 * to the perceived brightness. This comes from catarrhine
 * primate trichromacy physiology, including humans. Retina
 * cone cells have different wavelength sensitivities: L and
 * M cells are many and respond strongly to green-yellow
 * hues, while blue-perceiving S cells are fewer, and thus,
 * contribute less to perceived brightness. We correct this
 * by multiplying coefficients to each channel accordingly
 * on the final luminance calculation. The coefficients
 * were grabbed from ITU-R Recommendation 709.
 *
 * @param rgb 8-bit `[r, g, b]` RGB channels (0-255 each).
 * @returns Relative luminance as a floating point number.
 */
function luminance([r, g, b]: RGB): number {
  const f = (c: number) => (c /= 255) <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

/**
 * Computes the WCAG contrast ratio between two opaque colors.
 *
 * Luminances are sorted so the results are symmetric. Contrast
 * is a property of the color pair, therefore, the argument
 * order must not change its value.
 *
 * The `+ 0.05` constant is modelling visual flare, such as
 * ambient light reflecting on the screen and changing the
 * user's brightness perception. The value defined by WCAG,
 * based on the IEC-4WD specification - the draft to the
 * sRGB specification (IEC 61966-2-1).
 *
 * It also bounds the scale, preventing divisions by zero:
 *
 * - Minimum contrast:  1:1 - identical colors
 * - Maximum contrast: 21:1 - white on black (1.0 + 0.05) / (0.0 + 0.05)
 *
 * For WCAG Thresholds, refer to THRESHOLDS within this
 * module.
 *
 * @param a Opaque `[r, g, b]` color.
 * @param b Opaque `[r, g, b]` color.
 * @returns The contrast ratio in the 1-21 range.
 */
export function ratio(a: RGB, b: RGB): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

/**
 * Audits whether a contrast ratio conforms to the WCAG
 * standards, according to its UI type.
 *
 * @param ct Contrast ratio in the 1-21 range.
 * @param kind UI element type.
 * @returns `true` if the contrast ration passes the audit,
 *   `false` otherwise.
 */
export function audit(ct: number, kind: UIKind): boolean {
  const threshold = THRESHOLDS[kind];
  return ct >= threshold;
}

/**
 * Type guard for arbitrary values to be assumed as the
 * UIKind type.
 *
 * @param kind Any value.
 * @returns `true` if the argument matches a valid UIKind.
 *   `false` otherwise.
 */
export function isUIKind(kind: unknown): kind is UIKind {
  return typeof kind === "string" && Object.hasOwn(THRESHOLDS, kind);
}
