var webpack = require('webpack');
module.exports = {

  entry: './jsrc/', 
  output: {
        path: './bsrc',
        filename: 'bundle.js'  //react-articles/bsrc/bundle.js when running 'webpack'
    }, 
  module: {
  	loaders: [
      {
      	test: /\.js$/,
      	exclude: /(node_modules|bower_components)/,
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
  	publicPath: '/bsrc',    
  	filename: 'bundle.js',  //localhost:8088/webpack-dev-server/bsrcbundle.js
  	host: '0.0.0.0',
  	port: 8088
  }
}