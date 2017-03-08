var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './index.js'
  ],
  output: {
      publicPath: '/',
      filename: 'main.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader',
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  node: {
    net: 'empty',
    tls: 'empty',
    //dns: 'empty',
    fs: 'empty'
  },
  externals: {
    //'crypto': 'crypto'
  },
  debug: true
};
