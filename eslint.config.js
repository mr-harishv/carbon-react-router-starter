/*
 * This config file started as the base config file included by Vite when creating a new React application March 24th 2025.
 * Where it differs from this default will be noted in comments.
 */

import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
/* added (eslint-plugin-react) - as the most popular eslint plugin for React March 24th 2025 */
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';
  /* added (eslint-plugin-jsx-a11y) - ensures attributes needed for accessibility are added */
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

export default [
  { ignores: ['dist', 'vite.config.js'] },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    ignores: ['dist', 'vite.config.js'],
    languageOptions: {
      /* added (globals.node) - for server side elements */
      globals: { ...globals.browser, ...globals.node, ...globals.jest },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx'],
        },
      },
    },
  },
  importPlugin.flatConfigs.recommended,
  /* added (eslint-plugin-react) - popular recommended config March 24th 2025 */
  pluginReact.configs.flat['jsx-runtime'],
  pluginReactHooks.configs['recommended-latest'],
  pluginReactRefresh.configs.vite,
  /* added (eslint-plugin-jsx-a11y) - ensures attributes needed for accessibility are added */
  eslintPluginJsxA11y.flatConfigs.recommended,
  {
    rules: {
      ...pluginJs.configs.recommended.rules,
      /* import named is off because @carbon/react uses default exports in some components April 10th 2025 */
      'import/named': 'off',
      /* no-unused-vars - ignore pattern for React component usage */
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      /* no-irregular-whitespace 
        - ignore to allow prettier of the text layout. April 10th 2025. 

        NOTE: Should be removable after https://github.com/Mikadv/carbon-react-starter/issues/32
        */
      'no-irregular-whitespace': ['error', { skipJSXText: true }],
    },
  },
];
