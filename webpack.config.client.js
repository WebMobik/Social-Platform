const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
  name: 'browser',
  mode: 'development',
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.join(CURRENT_WORKING_DIR, 'client/main.js'),
  ],
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ttf|eot|svg|webp|png|jpe?g|gif)(\?[\s\S]+)?$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      zlib: require.resolve('browserify-zlib'),
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      http: require.resolve('stream-http'),
      url: require.resolve('url/'),
      buffer: require.resolve('buffer/'),
      util: require.resolve('util/'),
      assert: require.resolve('assert/'),
    },
  },
}

module.exports = config
