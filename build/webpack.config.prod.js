/*
 * @Author: xuchao 
 * @Date: 2018-07-09 16:12:15 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-18 10:01:37
 */
const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ROOT_PATH = path.resolve(__dirname, '..');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV:JSON.stringify('production')
            }
        }),
        new HtmlwebpackPlugin({
            title: 'monitoring system',
            filename: 'index.html',
            template: path.resolve(ROOT_PATH, 'index.html'),
            // favicon: './src/assets/images/favicon.ico',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css'
        })
    ]
})