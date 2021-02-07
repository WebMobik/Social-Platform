const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
  mode: 'production',
  entry: [path.join(CURRENT_WORKING_DIR, 'client/main.js')],
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist/'),
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ttf|eot|svg|webp|png|jpe?g|gif)(\?[\s\S]+)?$/,
        type: 'asset/resource',
      },
    ],
  },
}

module.exports = config
