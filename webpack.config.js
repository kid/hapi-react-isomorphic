const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
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
    new webpack.HotModuleReplacementPlugin(),
  ],
  assets: {
    stats: {
      chunks: false,
      colors: true,
    },
  },
};
