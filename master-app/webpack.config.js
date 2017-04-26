module.exports = {
   entry: {
      main: './client/main.js'
   },
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: "[name].out.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};

