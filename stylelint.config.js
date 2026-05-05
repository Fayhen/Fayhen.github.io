export default {
  "extends": ["stylelint-config-standard"],
  "overrides": [
    {
      files: ["*.astro", "**/*.astro"],
      extends: ["stylelint-config-standard", "stylelint-config-html/astro"],
      rules: {
        "selector-pseudo-class-no-unknown": [
          true,
          { ignorePseudoClasses: ["global"] }
        ]
      }
    }
  ]
};
