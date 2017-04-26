var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   context: __dirname,
   devtool: 'eval-source-map',
   entry: './app.js',
   output: {
      path: __dirname + '/dist',
      filename: '[name].out.js'
   },
   module: {
      loaders: [
         { test: /\.scss/,   loader: "style-loader!css-loader!sass-loader" },
         { test: /\.json$/,   loader: "json-loader" },
         { test: /\.coffee$/, loader: "coffee-loader" },
         { test: /\.css$/,    loader: "style-loader!css-loader" },
         { test: /\.less$/,   loader: "style-loader!css-loader!less-loader" },
         { test: /\.jade$/,   loader: "jade-loader?self" },
         { test: /\.png$/,    loader: "url-loader?prefix=img/&limit=5000" },
         { test: /\.jpg$/,    loader: "url-loader?prefix=img/&limit=5000" },
         { test: /\.gif$/,    loader: "url-loader?prefix=img/&limit=5000" },
         { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000" },
         { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
         { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
         { test: /\.svg$/,    loader: "file-loader?prefix=font/" },
      ]
   },
   plugins: [
      new BrowserSyncPlugin({
         host: '192.168.0.2',
         port: '3000',
         server: {
            baseDir: ['dist']
         }
      }),
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
};
