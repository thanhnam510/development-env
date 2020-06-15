const webpack = require('webpack');
const sassGlobImporter = require('node-sass-glob-importer');

module.exports = {
  stories: ['../src/**/*.stories.[tj]sx'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-backgrounds/register',
  ],
  webpackFinal: (config) => {
    config.module.rules.push(
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.scss$/i,
        use: [
          // Translates CSS into CommonJS
          'style-loader',
          'css-loader',
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sassOptions: { importer: sassGlobImporter() },
            },
          },
        ],
      }
    );
    return config;
  },
};
