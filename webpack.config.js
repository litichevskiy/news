const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const NODE_ENV = process.env.NODE_ENV || "development";
const IS_PRODUCTION = NODE_ENV === "production";

module.exports = [
  {
    entry: {
      bundle: ['./src/js/index.js', './src/js/utils/polyfills.js'],
      css: ['./src/style/index.scss']
    },
    output: {
      path: path.resolve(__dirname, './dist/js'),
      filename: '[name].js',
      chunkFilename: '[name].bundle.js',
      // assetModuleFilename: path.join('images', '[name][ext]'),
      assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
    },
    mode: NODE_ENV,
    devtool: IS_PRODUCTION ? false : 'source-map',
    resolve: {
      extensions: [' ', '.js', '.jsx', '.scss', 'css'],
    },
    watchOptions: {
      ignored: /node_modules/,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "../css/bundle.css",
        chunkFilename: "[id].css",
      }),
      new webpack.DefinePlugin ({
        'process.env.NODE_ENV': JSON.stringify ( NODE_ENV )
      }),
    ],
    devtool: IS_PRODUCTION ? false : 'source-map',
    watch: !IS_PRODUCTION,
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          test: /\.(png)$/,
          // type: 'asset/resource',
          // type: 'asset/resource',
          // exclude: /\/node_modules\//,
          // use: [{
          //   loader: 'file-loader',
          //   options:{
          //     limit:15.000,
          //     // name: '[name].[ext]',
          //     outputPath: '../images',
          //     // publicPath: '/'
          //   }
          // }],
        },
        {
          exclude: /\/node_modules\//,
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {sourceMap: !IS_PRODUCTION}
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: !IS_PRODUCTION
              }
            },
            {
              loader: 'sass-loader',
              options: {sourceMap: !IS_PRODUCTION}
            }
          ]
        }
      ]
    }
  }
];