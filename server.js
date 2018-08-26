const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const config = require('./webpack.config');


const app = express();
const compiler = webpack(config('dev'));

app.use(
  devMiddleware(compiler, {
    hot: true,
    quiet: false,
  }),
);

app.use(hotMiddleware(compiler));

/* eslint-disable no-console */
app.listen(8080, () => console.log('dev server listening on port 8080'));
