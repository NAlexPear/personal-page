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
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css',
    'https://pro.fontawesome.com/releases/v5.2.0/css/all.css',
  ],
  mobile: true,
  template,
  title: 'Alex Pearson\'s Personal Page',
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
          { loader: 'elm-hot-webpack-loader' },
          {
            loader: 'elm-webpack-loader',
            options: {
              cwd: __dirname,
              debug: true,
              pathToElm: './node_modules/.bin/elm',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
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
