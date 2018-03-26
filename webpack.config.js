"use strict";


const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");   
const extractSass = new ExtractTextPlugin({
    filename : "app.css",
    disable: process.env.NODE_ENV === "development",
    allChunks: true
});
const IconfontWebpackPlugin = require('iconfont-webpack-plugin');
const webpack = require('webpack');
const path = require("path");

// const cssDev = ['style-loader', 'css-loader', 'sass-loader'];

module.exports = {
    entry: {
        app: './src/index.js',
        script: './src/script2.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
                {
                    test: /\.(scss|sass|css)$/i,
                    use: extractSass.extract({
                        use: [
                            {
                                loader: "css-loader"
                            }, {
                                loader: "sass-loader"
                            },
                            {
                                loader: 'postcss-loader',
                                options:{
                                    plugins: (loader) => [
                                        // Add the plugin
                                        new IconfontWebpackPlugin({
                                        resolve: loader.resolve,
                                        fontNamePrefix: 'custom-',
                                        modules: false,
                                        })
                                    ]
                                }
                            }
                        ],
                        // use style-loader in development
                        fallback: "style-loader"                        
                    })
                },
                {
        test: /\.css$/,
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                // Add the plugin
                new IconfontWebpackPlugin({
                  resolve: loader.resolve,
                  fontNamePrefix: 'custom-',
                  modules: false,
                })
              ]
            }
          }
        ]
      },
            {
                test: /\.jsx?$/,
                exclude : '/node_modules/',
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }, {
                test: /\.(png|jpe?g|gif)$/i,
                use: 'file-loader'
            }, {
                test: /\.(woff2?|svg)$/,
                use: 'file-loader'
            }, {
                test: /\.(ttf|eot)$/,
                use: 'file-loader'
            }
        ]
    },
    devServer: {
            // headers : {
            //     "Access-Control-Allow-Origin": "*",
            //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            //     "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            // },
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        stats: "errors-only",
        open: true,
        historyApiFallback : true
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        extractSass,        
    ]
}