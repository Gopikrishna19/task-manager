/* eslint-disable no-var */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel?sourceMap',
                test: /\.js$/
            },
            {
                loader: ExtractTextPlugin.extract('css?sourceMap!less?sourceMap'),
                test: /\.(css|less)$/
            }
        ]
    },
    output: {
        filename: 'index.js',
        path: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: './src/resources/favico.ico',
            inject: 'body',
            template: './src/index.html'
        }),
        new ExtractTextPlugin('index.css')
    ]
};
