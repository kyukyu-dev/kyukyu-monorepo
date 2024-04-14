module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  root: true,
  env: {
    node: true
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json'
      }
    }
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    eqeqeq: ['error', 'always'],
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc'
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent', 'index']]
      }
    ],
    'import/newline-after-import': 'error',
    'prettier/prettier': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        allowExpressions: true
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {
        overrides: {
          constructors: 'no-public'
        }
      }
    ],
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        classes: {
          memberTypes: [
            'private-static-field',
            '#private-static-field',
            'private-decorated-field',
            'private-instance-field',

            'protected-static-field',
            'protected-instance-field',
            'protected-abstract-field',

            'public-static-field',
            'public-decorated-field',
            'public-instance-field',
            'public-abstract-field',

            'signature',

            'public-constructor',
            'protected-constructor',
            'private-constructor',

            'public-static-method',
            'public-decorated-method',
            'public-instance-method',
            'public-abstract-method',

            'protected-static-method',
            'protected-decorated-method',
            'protected-instance-method',
            'protected-abstract-method',

            'private-static-method',
            'private-decorated-method',
            'private-instance-method'
          ]
        }
      }
    ],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'interface',
        format: ['PascalCase']
      },
      {
        selector: ['accessor', 'typeLike'],
        format: ['PascalCase']
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE']
      }
    ],
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_+', ignoreRestSiblings: true }],
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/require-await': 'warn'
  }
}
