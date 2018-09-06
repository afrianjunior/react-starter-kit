const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJSWebpackPlugin()
  ]
})
