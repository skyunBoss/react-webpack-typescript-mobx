/*
 * @Author: xuchao 
 * @Date: 2018-07-06 11:30:47 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-24 16:48:49
 */
const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname, '..');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlwebpackPlugin({
            title: 'monitoring system',
            filename: 'index.html',
            template: path.resolve(ROOT_PATH, 'index.html'),
            // favicon: './src/assets/images/favicon.ico',
            inject: 'body'
        }),
        // webapck运行的警告和错误
        new FriendlyErrorsPlugin(),
        new ExtractTextPlugin("css/[name].[hash].css")
    ]
})