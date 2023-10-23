module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/display-name': 'off',
    '@typescript-eslint/no-empty-interface': [
      'off',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
