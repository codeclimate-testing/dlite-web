'use strict';

const path                = require('path');
const webpack             = require('webpack');
const ExtractTextPlugin   = require("extract-text-webpack-plugin");
let apiHost;

const setupAPI = () => {
  switch(process.env.APP_ENV) {
    case 'development':
      apiHost = "'http://localhost:3000/api'";
      break;
    case 'test':
      apiHost = "'http://localhost:3033/api'";
      break;
    default:
      apiHost = "'http://localhost:3000/api'"
      break;
  };
}

setupAPI();

let config = {
  entry: './client.js',
  output: {
    path: path.resolve('./public'),
    filename: 'app.js'
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
    new ExtractTextPlugin('app.css'),
    new webpack.DefinePlugin({
      __API__: apiHost
    })
  ]
};

module.exports = config;
