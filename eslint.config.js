// @ts-check
const eslint = require('@eslint/js');
const { defineConfig } = require('eslint/config');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = defineConfig([
  {
    ignores: [
      'projects/app/src/environments/environment*.ts',
    ],
  },
  {
    files: ['projects/app/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: [
          'projects/app/tsconfig.app.json',
          'projects/app/tsconfig.spec.json',
        ],
        tsconfigRootDir: __dirname,
      },
      globals: {
        $localize: 'readonly',
      },
    },
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    plugins: {
      import: require('eslint-plugin-import'),
      '@stylistic': require('@stylistic/eslint-plugin'),
    },
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'tm',
          style: 'kebab-case',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@stylistic/no-explicit-any': 'off',
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'tm',
          style: 'camelCase',
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            constructors: 'off',
          },
        },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          caughtErrors: 'none',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'arrow-parens': ['off', 'always'],
      'comma-dangle': 'off',
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-underscore-dangle': 'off',
      'import/no-default-export': 'error',
      'import/order': 'off',
      'arrow-body-style': 'off',
      semi: 'off',
      '@stylistic/semi': 'error',
      '@stylistic/member-ordering': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
        },
        {
          selector: ['objectLiteralProperty', 'classProperty'],
          format: ['camelCase', 'UPPER_CASE', 'snake_case'],
          leadingUnderscore: 'allowSingleOrDouble',
        },
      ],
      'space-before-function-paren': 'off',
      '@stylistic/space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'ignore',
          asyncArrow: 'always',
        },
      ],
      '@angular-eslint/prefer-standalone': 'off',
      'object-curly-spacing': ['error', 'always'],
      'no-array-constructor': ['error'],
      'array-bracket-spacing': [
        'error',
        'always',
        {
          arraysInArrays: false,
          objectsInArrays: false,
          singleValue: false,
        },
      ],
      'comma-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      'max-len': ['error', 180],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        },
      ],
    },
  },
  {
    files: ['projects/app/**/*.spec.ts', 'projects/app/**/*.mock.ts'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@stylistic/ban-ts-comment': 'off',
      '@stylistic/no-empty-function': 'off',
    },
  },
  {
    files: ['projects/app/**/*.html'],
    extends: [
      angular.configs.templateRecommended,
    ],
    rules: {},
  },
]);
