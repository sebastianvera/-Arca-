const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/Arca.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Arca_min.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'static/index.html'
    })
  ]
};