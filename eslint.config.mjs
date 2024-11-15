import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,

  {
    rules: {
      "eqeqeq": "warn",
      "no-unused-vars": ["warn"],
      // "no-console": "warn",
      "semi": ["error", "always"],
      "indent": ["error", 2],
      "no-undef": "error",
      "no-empty": "warn",
      "prefer-const": "warn",
      "arrow-spacing": ["error", { before: true, after: true }],
      "no-duplicate-imports": "error",
      "max-len": ["error", { code: 80 }],
      "consistent-return": "warn",
      "no-commonjs": "warn",
    },
  },
];
