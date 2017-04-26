var path = require('path');
var webpack = require("webpack");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//process.traceDeprecation = true;
process.noDeprecation = true;


module.exports = {
   devtool: 'eval-source-map', // 'eval', 'cheap-eval-source-map', 'cheap-source-map', 'cheal-module-eval-source-map', 'eval-source-map', 'source-map'
   entry: {
      'webpack-app': './webpack-app/index.js',
      'webpack-canvas-app': './webpack-canvas-app/index.js'
   },
   output: {
      path: path.join(__dirname, 'public', 'lib'),
      filename: '[name].bundle.js'
   },
   module: {
      loaders: [
         //{test: /\.ttf$/, loader: "file-loader?prefix=font/"},
         {
            //test: /\.(eot|svg|ttf|woff|woff2)$/,
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader: 'file'
         }
      ],
      rules: [{
         test: /\.scss$/,
         use: [{
            loader: 'style-loader'
         },{
            loader: 'css-loader'
         },{
            loader: 'sass-loader'
         }]
      },{
         test: /\.js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
            loader: 'babel-loader',
            options: {
               presets: []
            }
         }
      }]
   },
   plugins: [
      new BrowserSyncPlugin({
         //host: 'localhost',
         proxy: '192.168.0.2:4000',
         port: '4020',
         open: false
      }),
      //new HtmlWebpackPlugin({
         //template: './app/index.html',
         //favicon: './app/favicon.ico'
      //}),
      new webpack.DefinePlugin({
         //'example': 'example from define plugin'
      }),
      new webpack.ProvidePlugin({
         //'example': 'example from provide plugin'
      })
   ]
};
