interface ColorPairing {
  surface: string
  on: Array<{
    token: string
    kind?: Kind
    note?: string
  }>
}

type Kind = "body" | "large" | "nonText"

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
        kind: "nonText",
        note: "resolves to currentColor in light/retro — inherits, not standalone"
      }
    ]
  }
  // { surface: "--surface-logo-backdrop", on:
  //   [
  //     { token: "" }
  //   ]
  // },
  // { surface: "--surface-media-placeholder", on:
  //   [
  //     { token: "" }
  //   ]
  // },
];
