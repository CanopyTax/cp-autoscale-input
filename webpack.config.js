var path = require('path');
var webpack = require('webpack');
var ngminPlugin = require('ngmin-webpack-plugin');

var version = require('./package.json').version;


module.exports = {
  entry: "./src/cp-autoscale-input.js",
  output: {
    path: './build',
    filename: 'cp-autoscale-input.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: '6to5-loader' }
    ]
  },
  plugins: [
    new webpack.BannerPlugin("\
cp-autoscale-input\n\
author: Bret Little\n\
copyright: 2015\n\
license: MIT\n\
version: " + version)
  ]
};
