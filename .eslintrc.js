module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended'],
  globals: {
    React: 'readonly',
  },
  rules: {
    'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
  },
}
