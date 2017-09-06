const express = require('express');
const app = express();

// webpack
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

// middlewares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.use(express.static(__dirname + '/public'));

const port = 3000;
app.listen(port, () => {
  console.log(`Server on port ${port}`)
});
