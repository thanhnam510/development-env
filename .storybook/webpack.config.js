const sassGlobImporter = require('node-sass-glob-importer');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { plugins: [autoprefixer()] },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: { importer: sassGlobImporter() },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            options: {
              // context: path.resolve(__dirname, '../src/assets/images'),
              outputPath: 'images',
              name: '[name].[ext]',
            },
            loader: 'file-loader',
          }
        ],
      },
    ],
  }
}
