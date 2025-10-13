// eslint.config.js
import globals from 'globals';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

export default [
  // Apply ESLint's recommended rules
  js.configs.recommended,

  // Apply Prettier's rules to disable conflicting ESLint rules
  prettierConfig,

  {
    // Configuration for all JavaScript files
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      // You can add any custom rules here
    },
  },
];
