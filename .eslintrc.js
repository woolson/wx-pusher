
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    'block-spacing': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'func-call-spacing': ['error', 'never'],
    'indent': ['error', 2],
    'max-len': ['error', { 'code': 100 }],
    'no-multi-spaces': ['error'],
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'semi': ['error', 'always'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'object-curly-newline': [
      'error',
      {
        'ImportDeclaration': { 'multiline': true, 'minProperties': 3 },
        'ExportDeclaration': 'never',
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
};