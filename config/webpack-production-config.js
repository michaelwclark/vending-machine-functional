const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const config = require('config')

const baseConfig = require('./webpack-base-config')

module.exports = merge(baseConfig, {
  output: {
    filename: '[name].[hash].js',
    path: config.get('BUILD_PATH')
  },
  plugins: [
    new ExtractTextPlugin('[name].bundle.[hash].css'),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new CleanWebpackPlugin(config.get('BUILD_PATH'), { root: process.cwd() }),
    new webpack.DefinePlugin({ __DEVTOOLS__: false })
  ]
})
