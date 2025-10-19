import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

export default tseslint.config(
  // --- Base Configurations ---
  js.configs.recommended, // ESLint's recommended rules for JavaScript
  ...tseslint.configs.recommended, // TypeScript-ESLint's recommended rules

  // --- Prettier Integration ---
  // IMPORTANT: This MUST come after other configs to disable their stylistic rules.
  prettierConfig,

  // --- Custom Project-Specific Configuration ---
  {
    files: ['**/*.{js,mjs,cjs,ts}'], // Apply this config to all JS and TS files
    
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: prettierPlugin,
    },
    
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser, // Use the TypeScript parser for all files
      globals: {
        ...globals.browser, // Or globals.node depending on your project
        ...globals.jest,
      },
    },
    
    rules: {
      // Enforces Prettier formatting as an ESLint rule.
      'prettier/prettier': 'error',

      // "Do not use var; use let or const"
      // This is enabled by default in the recommended configs, but we can be explicit.
      'no-var': 'error',

      // "Do not use switch; use if/else, object maps, or strategy patterns"
      // This rule bans the use of the `switch` statement entirely.
      'no-restricted-syntax': [
        'error',
        {
          selector: 'SwitchStatement',
          message: 'Switch statements are disallowed; use if/else, object maps, or other patterns instead.',
        },
      ],

      // "If a function has more than two arguments, use an object with a defined type or interface"
      // This rule will flag any function with more than 2 parameters.
      'max-params': ['error', 2],

      // "No hardcoded values (use tokens/constants)"
      // This rule helps catch "magic numbers." It can be very strict,
      // so you might need to adjust it to ignore common numbers like -1, 0, 1.
      'no-magic-numbers': ['warn', { ignore: [-1, 0, 1] }],

      // "Remove anything not used (dead code, empty folders, unused imports/files)"
      // This rule for unused variables is on by default, but setting it to "warn"
      // is often more convenient during development.
      'no-unused-vars': 'warn',
    },
  }
);