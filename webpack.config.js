const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    filename: 'bundle.[hash].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  context: resolve(__dirname, 'src'),
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'src'),
    publicPath: '/',
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          'postcss-loader',
          "sass-loader"
        ]
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        use: ['file-loader']
      },
      {
        test: /\.(mp4|webm)$/,
        use: ['url-loader?limit=10000']
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [require("autoprefixer")({ browsers: ['last 2 versions'] })]
        }
      }
    })
  ],
};
