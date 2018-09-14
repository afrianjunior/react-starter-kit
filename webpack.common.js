const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    app: './src/index.jsx',
    vendors: ['react', 'react-dom', 'react-redux', 'react-router-dom', 'redux', 'redux-thunk', 'styled-components', 'axios']
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      api: path.resolve(__dirname, 'src/common/api')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Boilerplate'
    })
  ]
}
