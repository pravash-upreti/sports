/**
 * @author Sagun Karanjit <sagunkaranjit@lftechnology.com>
 */

const webpack = require('webpack');
const resolve = require('path').resolve;

// Plugins
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/bundle.[hash].js',
    chunkFilename: '[id].js'
  },
  context: resolve(__dirname, 'src/'),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use:
          'file-loader?name=[name].[ext]&publicPath=/images/&outputPath=/images/'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use:
          'file-loader?name=[name].[ext]&publicPath=/fonts/&outputPath=/fonts/'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/bundle.css'),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html')
    }),
    new CopyWebpackPlugin([
      {
        from: resolve(__dirname, 'public/assets/images'),
        to: resolve(__dirname, 'dist/assets/images')
      }
    ]),
    new webpack.optimize.UglifyJsPlugin({ beautify: false, comments: false })
  ]
};
