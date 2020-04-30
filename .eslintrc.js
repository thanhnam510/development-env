const { resolve } = require('path');

module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  extends: ['@fourdigit/eslint-config-fourdigit/.eslintrc', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/indent': [2, 2, { SwitchCase: 1 }],
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-explicit-any': 0
  }
};
