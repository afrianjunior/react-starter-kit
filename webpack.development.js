const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: process.env.PORT || 9000,
    compress: true
  }
})