import type { UIKind } from "./contrast";

interface ColorPairing {
  surface: string
  on: Array<{
    token: string
    kind?: UIKind
  }>
}

/**
 * List of the application's themes paired with a human-readable
 * theme name.
 */
export const THEMES = [
  ["light", "Light"],
  ["dark", "Dark"],
  ["retro-light", "Retro light"],
  ["retro-dark", "Retro dark"]
];

/**
 * Palette color pairings. Contains mappings of all surface-text
 * color token pairings across the codebase.
 *
 * Surface tokens are used for background colors. Text tokens are
 * colors for text and other UI rendered over a given surface
 * token.
 */
export const COLOR_PAIRINGS: ColorPairing[] = [
  { surface: "--surface-base", on:
    [
      { token: "--text-on-base" },
      { token: "--text-link" },
      { token: "--text-link-hover" }
    ]
  },
  { surface: "--surface-subtle", on:
    [
      { token: "--text-on-subtle" }
    ]
  },
  { surface: "--surface-inverse", on:
    [
      { token: "--text-on-inverse" },
      { token: "--text-on-inverse-hover" }
    ]
  },
  { surface: "--surface-raised-on-base", on:
    [
      { token: "--text-on-raised" }
    ]
  },
  { surface: "--surface-raised-on-subtle", on:
    [
      { token: "--text-on-raised" }
    ]
  },
  { surface: "--surface-raised", on:
    [
      { token: "--text-on-raised" }
    ]
  },
  { surface: "--surface-overlay", on:
    [
      { token: "--text-on-overlay" },
      { token: "--text-link" },
      { token: "--text-link-hover" }
    ]
  },
  { surface: "--surface-overlay-panel", on:
    [
      { token: "--text-on-overlay" },
      { token: "--text-link" },
      { token: "--text-link-hover" }
    ]
  },
  { surface: "--surface-overlay-active", on:
    [
      { token: "--text-on-selected" }
    ]
  },
  { surface: "--surface-footer", on:
    [
      { token: "--text-on-footer" },
      { token: "--footer-highlight-luv" },
      { token: "--footer-highlight-made" },
      { token: "--footer-highlight-me" },
      { token: "--footer-highlight-this" }
    ]
  },
  { surface: "--surface-action-primary", on:
    [
      { token: "--text-on-action-primary" }
    ]
  },
  { surface: "--surface-action-secondary", on:
    [
      { token: "--text-on-action-secondary" }
    ]
  },
  { surface: "--surface-accent-backend", on:
    [
      { token: "--text-on-accent-backend" }
    ]
  },
  { surface: "--surface-accent-frontend", on:
    [
      { token: "--text-on-accent-frontend" }
    ]
  },
  { surface: "--surface-accent-fullstack", on:
    [
      { token: "--text-on-accent-fullstack" }
    ]
  },
  { surface: "--surface-chip", on:
    [
      { token: "--text-on-chip" },
      {
        token: "--icon-brand",
        kind: "nonText"
      }
    ]
  }
];

/**
 * Flat list of all available palette tokens.
 */
export const ALL_COLORS = [
  ...new Set(
    COLOR_PAIRINGS.flatMap(pairing => [
      pairing.surface,
      ...pairing.on.map(on => on.token)
    ])
  )
].sort();

export const FONT_TOKENS = [
  { property: "font-size", propertyName: "Font sizes", tokens: [
    "--font-size-xs",
    "--font-size-sm",
    "--font-size-md",
    "--font-size-lg",
    "--font-size-xl",
    "--font-size-2xl",
    "--font-size-3xl",
    "--font-size-5xl",
    "--font-size-6xl"
  ] },
  { property: "font-weight", propertyName: "Weights", tokens: [
    "--font-weight-normal",
    "--font-weight-medium",
    "--font-weight-semibold"
  ] },
  { property: "line-height", propertyName: "Line height", tokens: [
    "--line-height-base",
    "--line-height-display",
    "--line-height-heading",
    "--line-height-ui",
    "--line-height-body"
  ] },
  { property: "text-decoration", propertyName: "Decorations", tokens: [
    "--link-decoration"
  ] }
];

export const TYPOGRAPHY = [
  { fontName: "Inter", variable: "--font-inter" }
];
