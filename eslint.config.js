import pluginJs from "@eslint/js";
import importPlugin from 'eslint-plugin-import';
import pluginReact from "eslint-plugin-react";
import globals from "globals";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {ignores: ["dist/**/*", "node_modules", "vite.config.js"]},
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }
  },
  pluginJs.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    ...pluginReact.configs.flat['jsx-runtime'],
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    rules: {
      'import/order': [
        'error',
        {
          groups: [["builtin", "external"], "internal", ["sibling", "parent"], "object"],
          pathGroups: [
            {
              pattern: "**/*.+(css|scss)",
              patternOptions: {dot: true, nocomment: true},
              group: "unknown",
              position: "after",
            },
            {
              pattern: "{.,..}/**/*.+(css|scss)",
              patternOptions: {dot: true, nocomment: true},
              group: "unknown",
              position: "after",
            },
          ],
          alphabetize: {
            order: "asc",
            orderImportKind: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
        },
      ],
      "sort-imports": ["error", {ignoreCase: true, ignoreDeclarationSort: true}],
    }
  }
];
