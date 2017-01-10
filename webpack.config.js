var path = require("path");
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  context: __dirname,

  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index.jsx',
    ]
  },

  output: {
    path: path.resolve('./public/'),
    filename: "bundle.js",
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}
