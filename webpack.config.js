const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=http://localhost:8000/__webpack_hmr',
    './client.jsx',
  ],
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: 'bundle.js',
    // publicPath: '/dist/js/',
    chunkFilename: '[name].[id].js',
    publicPath: './',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'index.html'),
    //   hash: true,
    //   filename: 'index.html',
    // }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  assets: {
    stats: {
      chunks: false,
      colors: true,
    },
  },
};
