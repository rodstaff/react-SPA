var webpack = require('webpack');
module.exports = {

  entry: './vendor/client.js',  
  module: {
  	loaders: [
      {
      	test: /\.js$/,
      	exclude: /node_modules/,
        loader:  'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
  	]
  },
  devtool:  'inline-source-map',
  plugins: [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin()
  //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  devServer: {
  	publicPath: '/',   
  	filename: 'bundle.js',  // located here => 'localhost:<port>/bundle.js'
  	host: '0.0.0.0',
  	port: 8087
  }
}