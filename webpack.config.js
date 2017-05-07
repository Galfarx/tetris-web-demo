const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const phaserModule = path.join(__dirname, '/node_modules/phaser-ce/');
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
const pixi = path.join(phaserModule, 'build/custom/pixi.js');
const p2 = path.join(phaserModule, 'build/custom/p2.js');
const VENDOR_LIBS = ['pixi', 'p2', 'phaser'];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'assets/[name].[chunkhash].js',
    publicPath: '',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        use: ['babel-loader', 'eslint-loader'],
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: ['expose-loader?PIXI'],
        test: /pixi\.js/,
      },
      {
        use: ['expose-loader?Phaser'],
        test: /phaser-split\.js$/,
      },
      {
        use: ['expose-loader?p2'],
        test: /p2\.js/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets/images/*',
        to: 'assets/',
        flatten: true,
      },
      {
        from: 'src/assets/data/*',
        to: 'assets/',
        flatten: true,
      },
    ]),
  ],
  resolve: {
    alias: {
      phaser,
      pixi,
      p2,
    },
  },
};
