const path = require("path")
const webpack = require("webpack")
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "browser",
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: [
        "webpack-hot-middleware/client?reload=true",
        path.join(CURRENT_WORKING_DIR , "client/main.js")
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , "/dist/"),
        filename: "bundle.js",
        publicPath: "/dist/",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ "babel-loader" ]
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
            "react-dom": "@hot-loader/react-dom"
        }
    }
}

module.exports = config
