const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './js/main.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/(node_modules)/, /\.spec\.jsx$/],
        include: [
          path.resolve(__dirname, '../js')
        ],
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html')
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '../'),
    compress: true,
    port: 3000,
    historyApiFallback: true
  }
};
