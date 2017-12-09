const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('config')

const baseConfig = require('./webpack-base-config')

module.exports = merge(baseConfig, {
  output: {
    filename: '[name].js',
    path: config.get('BUILD_PATH')
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'eval',
  devServer: {
    contentBase: config.get('APP_PATH'),
    disableHostCheck: true,
    hot: true,
    stats: 'errors-only',
    historyApiFallback: true,
    inline: true
  }
})
