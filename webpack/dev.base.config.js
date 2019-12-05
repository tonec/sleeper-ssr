const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',

  context: path.resolve(__dirname, '..'),

  resolve: {
    modules: [
      'src',
      'node_modules'
    ],
    extensions: ['.json', '.js'],
    alias: { 'react-dom': '@hot-loader/react-dom' }
  },

  devtool: 'inline-source-map',

  stats: {
    warningsFilter: warning => {
      let block = false

      const blockedFiles = [
        'node_modules/express/lib/view.js',
        'node_modules/require_optional/index.js'
      ]

      blockedFiles.forEach(modulePath => {
        if (RegExp(modulePath).test(warning) === true) {
          block = true
        }
      })

      return block
    }
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin()
  ]
}
