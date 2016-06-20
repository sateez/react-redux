var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
   new webpack.ProvidePlugin({
     "$":"jquery",
     "jQuery":"jquery",
     "window.jQuery":"jquery"
   }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: [ 'babel' ], exclude: /node_modules/, include: __dirname },
      { test: /\.css$/, loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext'] },
      //{test:/\.css$/,loader:['style','css?modules&localIdentName=[local]---[hash:base64:5]','cssnext']},
      { test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]' },
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff2" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ],
    resolve : {
        alias: {
             jquery      : "vendor/jquery.js",
            "jquery-ui": "vendor/jquery-ui.js",
             modules: path.join(__dirname, "node_modules")
                }
         }
  }
}
