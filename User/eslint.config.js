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
      // --- ADD YOUR CUSTOM RULES HERE ---

      // Enforce using const instead of let for variables that are not reassigned.
      'prefer-const': 'error',

      // Require the use of `===` and `!==`
      eqeqeq: 'error',

      // Customize the 'no-unused-vars' rule.
      'no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      // --- NAMING CONVENTION RULE ---
      camelcase: [
        'error',
        {
          properties: 'always',
          ignoreDestructuring: true,
          allow: ['^UNSAFE_'],
        },
      ],
    },
  },
];
