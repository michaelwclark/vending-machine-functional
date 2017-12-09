const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackStrip = require('webpack-strip')
const config = require('config')
const strip_logs = config.get('STRIP_CONSOLE_LOG') === true
console.log('strip logs:', strip_logs)
module.exports = {
  entry: {
    app: config.get('APP_PATH')
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=25000' },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(es6$|jsx)/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['env']
        }
      },
      strip_logs
        ? {
          test: /\.js$/,
          loader: WebpackStrip.loader('debug', 'console.log')
        }
        : {}
    ],
    noParse: [new RegExp('localForage/dist/localforage.js')]
  },

  resolve: {
    modules: ['app', 'node_modules'],
    extensions: ['.json', '.js', '.jsx', '.html']
  },
  plugins: [
    new CopyWebpackPlugin([{ from: config.get('APP_STATIC_PATH') }]),
    new webpack.optimize.CommonsChunkPlugin({ name: ['vendor'] }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: config.get('APP_INDEX')
    })
  ]
}
