const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin('css/bundle.css');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index.js'
    ],
    plugins: [
        extractLess,
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname + '/../resources/static/',
        filename: 'js/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            enforce: 'pre',
            loader: 'eslint-loader',
        }, {
            loaders: ['babel-loader'],
            include: [
                path.resolve(__dirname, 'src'),
            ],
            test: /\.js$/
        }, {
            test: /\.(less|css)$/,
            use: extractLess.extract({
                use: [{
                    loader: 'css-loader', options: {minimize: true}
                }, {
                    loader: 'less-loader'
                }],
                // use style-loader in development
                fallback: 'style-loader'
            })
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }
        ]
    }
};