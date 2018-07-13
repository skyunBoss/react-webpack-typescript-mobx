/*
 * @Author: xuchao 
 * @Date: 2018-07-06 11:30:47 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-13 10:27:53
 */
const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
module.exports = {
    entry: {
        app: [path.resolve(SRC_PATH, 'index.tsx')]
    },
    output: {
        path: BUILD_PATH,
        publicPath: "",
        filename: 'js/[name].[hash:5].js',
    },
    // 开启dev source map
    devtool: 'eval-source-map',
    resolve: {
        extensions: [".js", ".json", ".jsx", '.tsx', ".css", ".scss"],
        alias: { //配置公共路径
            '@': path.resolve(SRC_PATH)
        }
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: path.resolve(SRC_PATH, 'node_modules'),
            include: SRC_PATH,
            use: {
                loader: ['babel-loader', 'react-hot'],
                options: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }

        }, {
            test: /\.scss$/,
            use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({ // css-hot-loader结局热替换CSS不自动刷新
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            }))
        }, {
            test: /\.(png|jpg|gif)$/,
            use:[{
                loader: 'url-loader',
                options: {
                    limit: 8192 // 小于8KB 使用base64格式图片
                }
            }]
        }, {
            test: /\.css$/,
            use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            }))
        }, {
            test: /\.(mp3|webm|ogg)/,
            use: {
                loader: 'file-loader',
            }
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.(woff|woff2|svg|ttf|eot)($|\?)/i,
            loader: 'url-loader'
        }, {
            test: /\.tsx$/,
            use: ['ts-loader']
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        // JS压缩
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        new HtmlwebpackPlugin({
            title: 'monitoring system',
            filename: 'index.html',
            template: path.resolve(ROOT_PATH, 'index.html'),
            // favicon: './src/assets/images/favicon.ico',
            inject: 'body'
        }),
        new ExtractTextPlugin("css/main.css"),
        // 热更新
        new webpack.HotModuleReplacementPlugin()
    ]
};