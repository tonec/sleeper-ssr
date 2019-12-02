const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
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
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/react',
            ['@babel/env', { targets: { browsers: ['last 2 versions'] } }]
          ],
          plugins: [
            'react-hot-loader/babel',
            '@babel/plugin-proposal-class-properties',
          ]
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
