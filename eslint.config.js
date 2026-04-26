import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";

export default [
  { ignores: [".astro/"] },

  // Astro parser and recommended rules
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],

  // Parser for .ts and .tsx files
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser
    },
  },

  // Delegate TS in Astro files to tsParser
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tsParser
      },
    },
  },

  {
    rules: {
      "arrow-body-style": ["error", "as-needed"],
      "indent": ["error", 2, { "VariableDeclarator": "first" }],
      "no-console": "warn",
      "no-empty": "warn",
      "no-invalid-this": "error",
      "no-unused-vars": ["warn", { "vars": "all" }],
      "no-trailing-spaces": "error",
      "quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
      "sort-imports": ["error", {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
        "allowSeparatedGroups": false
      }]
    }
  }
]
