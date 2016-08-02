/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';
let webpack = require('webpack');

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
  return {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.(png|jpg|gif|ttf|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }, {
        test: /\.(eot|mp4|ogg)$/,
        loader: 'file-loader'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
      test: /\.svg$/,
      loader: 'svg-sprite?' + JSON.stringify({
        name: '[name]_[hash]',
        prefixize: true
      })
    }
    ],
    plugins: [new webpack.ProvidePlugin({'$': 'jquery', 'jQuery': 'jquery', 'window.jQuery': 'jquery'})]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules: getDefaultModules
};
