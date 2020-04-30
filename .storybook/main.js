
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.[tj]sx'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-docs',
    '@storybook/addon-storysource'
  ],
};
