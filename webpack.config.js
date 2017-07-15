const webpack = require('webpack');
const path = require('path');

// webpack.config.js
module.exports = {
  entry: {
    index: path.join(__dirname, 'index.ts')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'gmHttp',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.coffee', '.ts']
  },
  module: {
    loaders: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      test: /\.min\.js$/
    })
  ]
};
