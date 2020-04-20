const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
    const isProduction = env.NODE_ENV === 'production';
    return {
  entry: {
    common: [
        path.resolve(__dirname, 'src', 'index.tsx'),
        path.resolve(__dirname, 'src', 'index.scss'),
    ]
 },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].js',
    publicPath: '/',
  },
  mode: "development",
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.html/,
        use: ['html-loader']
      },
      {
        test: /\.scss$/i,
        use: [
          // Translates CSS into CommonJS
          MiniCssExtractPlugin.loader,
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      }
    ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new MiniCssExtractPlugin({filename: 'assets/css/[name].css'})
      ],
      devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000
      }
    }
};