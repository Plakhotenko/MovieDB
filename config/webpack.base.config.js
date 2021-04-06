const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const { SourceMapDevToolPlugin } = require("webpack")
const Dotenv = require('dotenv-webpack')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[hash]-[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new ExtractTextPlugin('style.css'),
    new SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
    new Dotenv()
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../src/components'),
      Helpers: path.resolve(__dirname, '../src/helpers'),
      Store: path.resolve(__dirname, '../src/store'),
      Constants: path.resolve(__dirname, '../src/constants'),
      Utils: path.resolve(__dirname, '../src/utils'),
      Api: path.resolve(__dirname, '../src/api'),
      Schemas: path.resolve(__dirname, '../src/schemas')
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.themoviedb.org/3/',
        pathRewrite: {'^/api' : ''}
      },
      secure: false
    }
  }
}
