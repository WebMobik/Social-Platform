
const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "browser",
    mode: "development",
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|png|webp|jpe?g|gif)(\?[\s\S]+)?$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        },
        fallback: {
            'crypto': require.resolve('crypto-browserify'),
            'zlib': require.resolve('browserify-zlib'),
            'path': require.resolve('path-browserify'),
            'stream': require.resolve('stream-browserify'),
            'http': require.resolve('stream-http'),
            'url': require.resolve('url/'),
            'buffer': require.resolve('buffer/'),
            'util': require.resolve('util/'),
            'assert': require.resolve('assert/')
        }
    }
}

module.exports = config
