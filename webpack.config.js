const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

require('dotenv').config();

const { ENV } = process.env;
const isDev = ENV === 'development';
const entry = ['./src/frontend/index.js'];



module.exports = {
  entry,
  mode: ENV,
  output: {
    path: path.resolve(__dirname, 'src/server/ssr/public'),
    filename: isDev ? 'build/app.js' : 'build/app-[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    isDev ? new webpack.HotModuleReplacementPlugin() : () => {},

    !isDev
      ? new CompressionWebpackPlugin({
          test: /\.js$|\.css$/,
          filename: '[path].gz',
        })
      : () => {},

    !isDev ? new ManifestPlugin() : () => {},

    !isDev
      ? new CleanWebpackPlugin({
          cleanOnceBeforeBuildPatterns: path.resolve(
            __dirname,
            'src/server/public/build'
          ),
        })
      : () => {},

    new MiniCssExtractPlugin({
      filename: isDev ? 'build/app.css' : 'build/app-[hash].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
  },
};