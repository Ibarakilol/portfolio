import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, prettier],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      curly: 'error',
      'default-case': 'error',
      'require-await': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'],
            [
              '^@/layouts/',
              '^@/pages/((?!/hooks/).)*$',
              '^@/components/',
              'components',
              '^\\.(\\.)?/((?!components)[a-z\\d-]+/)?[a-z\\d-]+(?<!-store|/contexts)$',
              '^@/assets/',
            ],
            ['^@/stores/', '^\\.(\\.)?/([a-z\\d-]+)-store$'],
            [
              '/contexts',
              '/hooks/',
              '^@/(?!interfaces)',
              '^@/interfaces',
              '\\.(props|interface)\\u0000$',
            ],
            ['^.+\\.s?css$'],
          ],
        },
      ],
    },
  }
);