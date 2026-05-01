import eslintPluginAstro from "eslint-plugin-astro";
import tsEslint from "@typescript-eslint/eslint-plugin";
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
      parser: tsParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      }
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

  // TS rules plugin
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.astro"],
    plugins: {
      "@typescript-eslint": tsEslint,
    },
    rules: {
      "@typescript-eslint/no-empty-object-type": "error",
      "@typescript-eslint/no-explicit-any": "error",
    }
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
      "object-curly-spacing": ["error", "always"],
      "quotes": ["error", "double", { avoidEscape: true, allowTemplateLiterals: false }],
      "semi": ["error", "always"],
      "sort-imports": ["error", {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
        "allowSeparatedGroups": true
      }]
    }
  }
];
