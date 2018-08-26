const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const template = require('html-webpack-template');
const webpack = require('webpack');
const merge = require('webpack-merge');


const htmlWebpackPlugin = new HtmlWebpackPlugin({
  appMountId: 'root',
  inject: false,
  links: [
  ],
  mobile: true,
  template,
  title: 'Savvy Screencasts',
});

const shared = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[hash].js',
    chunkFilename: '[chunkhash].js',
  },
};

const dev = merge(shared, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    './src',
    'webpack-hot-middleware/client',
  ],
  plugins: [
    htmlWebpackPlugin,
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: [
          {
            loader: 'elm-hot-webpack-loader',
          },
          {
            loader: 'elm-webpack-loader',
            options: {
              cwd: __dirname,
              pathToElm: './node_modules/.bin/elm',
            },
          },
        ],
      },
    ],
  },
});

const prod = merge(shared, {
  devtool: 'source-map',
  mode: 'production',
  entry: './src',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    htmlWebpackPlugin,
  ],
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: {
          loader: 'elm-webpack-loader',
        },
      },
    ],
  },
});

const configurations = {
  dev,
  prod,
};

module.exports = env => configurations[env || 'dev'];
