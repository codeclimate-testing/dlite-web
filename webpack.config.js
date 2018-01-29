'use strict';

const path                = require('path');
const webpack             = require('webpack');
const ExtractTextPlugin   = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin   = require('html-webpack-plugin');

const childProcess = require('child_process');
const GITHASH = process.env.SOURCE_VERSION ? process.env.SOURCE_VERSION: childProcess.execSync('git rev-parse HEAD').toString();

let configDev = {
  entry: ['babel-polyfill', './client.js'],
  output: {
    path: path.resolve('./public'),
    filename: 'app.dev.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            'css-loader',
            'sass-loader?includePaths[]=' + path.resolve(__dirname, "./node_modules/compass-mixins/lib")]
        })
      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.json']
  },
  plugins: [
    new ExtractTextPlugin('app.dev.css'),
    new webpack.DefinePlugin({
      APP_ENV: JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      template: './server/templates/layout.html',
      gitHash: GITHASH,
      stylesheet: '/app.dev.css',
      filename: 'index.dev.html'
    })
  ]
};

let configStage = {
  entry: ['babel-polyfill', './client.js'],
  output: {
    path: path.resolve('./public'),
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            'css-loader',
            'sass-loader?includePaths[]=' + path.resolve(__dirname, "./node_modules/compass-mixins/lib")]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new webpack.DefinePlugin({
      APP_ENV: JSON.stringify('stage')
    }),
    new HtmlWebpackPlugin({
      template: './server/templates/layout.html',
      gitHash: GITHASH,
      stylesheet: '/app.css',
      filename: 'index.html'
    })
  ]
};

module.exports = [ configDev, configStage ];
