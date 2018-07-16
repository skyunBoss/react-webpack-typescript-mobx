/*
 * @Author: xuchao 
 * @Date: 2018-07-09 16:12:15 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-13 13:52:17
 */
const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    entry: {
        app: [path.resolve(SRC_PATH, 'index.tsx')]
    },
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].[hash:5].js'
    },
    resolve: {
        extensions: [".js",'.ts', ".json", ".jsx", '.tsx', ".css", ".scss"],
        alias: { //配置公共路径
            '@': path.resolve(SRC_PATH)
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: path.resolve(SRC_PATH, 'node_modules'),
            include: SRC_PATH,
            use: {
                loader: 'babel-loader',
                options: {
                    presets:['react', 'es2015','stage-0']
                }
            }

        }, {
            test: /\.scss$/,
            use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({ // css-hot-loader结局热替换CSS不自动刷新
                fallback: 'style-loader',
                use:[{
                    loader:'css-loader',
                    options:{
                        minimize:true
                    }
                },{
                    loader:'sass-loader',
                }]
            }))
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192 // 小于8KB 使用base64格式图片
                }
            }]
        }, {
            test: /\.css$/,
            use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use:{
                    loader: 'css-loader',
                    options:{
                        minimize: true //css压缩
                    }
                }
            }))
        }, {
            test: /\.(mp3|webm|ogg)/,
            use: {
                loader: 'file-loader',
            }
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        },{
            test:/\.(woff|woff2|svg|ttf|eot)($|\?)/i,
            loader:'url-loader'
        }, {
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        babelrc: true,
                        plugins: ['react-hot-loader/babel'],
                    },
                },
                'ts-loader' // (or awesome-typescript-loader)
            ]
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'main',
            filename: 'js/[name].[hash:5].js'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlwebpackPlugin({
            title: 'monitoring system',
            filename: 'index.html',
            template: path.resolve(ROOT_PATH, 'index.html'),
            // favicon: './src/assets/images/favicon.ico',
            inject: 'body'
        }),
        new ExtractTextPlugin('css/[name].[hash:5].css'),
        // build前先删除dist文件
        new CleanWebpackPlugin(
            ['dist/js/main.*.js', 'dist/js/index.*.js', 'dist/css/**.css'],　 //匹配删除的文件
            {
                root: ROOT_PATH,       　　　　　　　　　　//根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                dry:      false        　　　　　　　　　　//启用删除文件
            }
        )
    ]
};