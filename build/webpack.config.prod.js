/*
 * @Author: xuchao 
 * @Date: 2018-07-09 16:12:15 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-16 17:09:22
 */
const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname, '..');
const SRC_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    mode: 'production',
    entry: {
        app: [path.resolve(SRC_PATH, 'index.tsx')]
    },
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].[hash:5].js'
    },
    resolve: {
        extensions: ['.ts', ".json", '.tsx', ".scss"],
        modules: [
            resolve('app'), 
            resolve('node_modules')
        ],
        alias: { //配置别名
            '@components': resolve('app/components'),
            '@views': resolve('app/views')
        }
    },
    module: {
        rules: [{
            test: /\.(ts(x?)|js(x?))$/,
            exclude: /node_modules/,
            include: resolve('app'),
            use: [{
                loader: 'react-hot-loader/webpack',
              }, {
                loader: 'ts-loader',
                options: {
                    // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
                    happyPackMode: true,
                    transpileOnly: true
                }
            }]
        }, {
            test: /\.scss$/,
            use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({ // css-hot-loader结局热替换CSS不自动刷新
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            }))
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000
            }
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
        new HtmlwebpackPlugin({
            title: 'monitoring system',
            filename: 'index.html',
            template: path.resolve(ROOT_PATH, 'index.html'),
            // favicon: './src/assets/images/favicon.ico',
            inject: 'body'
        }),
        new ExtractTextPlugin('css/[name].[hash:5].css'),
        // build前先删除dist文件
        // new CleanWebpackPlugin(
        //     ['dist/js/main.*.js', 'dist/js/index.*.js', 'dist/css/**.css'],　 //匹配删除的文件
        //     {
        //         root: ROOT_PATH,       　　　　　　　　　　//根目录
        //         verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
        //         dry:      false        　　　　　　　　　　//启用删除文件
        //     }
        // )
    ]
};