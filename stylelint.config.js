export default {
  "extends": ["stylelint-config-standard"],
  "rules": {
    "custom-property-empty-line-before": null
  },
  "overrides": [
    {
      files: ["*.astro", "**/*.astro"],
      extends: ["stylelint-config-html/astro"],
      rules: {
        "selector-pseudo-class-no-unknown": [
          true,
          { ignorePseudoClasses: ["global"] }
        ]
      }
    }
  ]
};
