/*
 * @Author: xuchao 
 * @Date: 2018-07-06 11:30:47 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-16 15:10:04
 */
const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname, '..');
const SRC_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

const resolve = dir => {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        app: ['babel-polyfill', path.resolve(SRC_PATH, 'index.tsx')]
    },
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].[hash:5].js',
    },
    resolve: {
        extensions: ['.ts', ".json", '.tsx', ".scss"],
        modules: [
            path.resolve(SRC_PATH), 
            path.resolve(SRC_PATH, 'node_modules')
        ],
        alias: { //配置别名
            '@components': resolve('app/components'),
            '@views': resolve('app/views')
        }
    },
    // devServer: {
    //     publicPath: '/',
    //     contentBase: BUILD_PATH,
    //     host: 'localhost',
    //     port: '8080',
    //     hot: true,
    //     noInfo: true,
    //     quiet: false,
    //     inline: true,
    //     stats: "errors-only",
    //     proxy: {}
    // },
    module: {
        rules: [{
            test: /\.(ts(x?)|js(x?))$/,
            exclude: path.resolve(SRC_PATH, 'node_modules'),
            include: SRC_PATH,
            use: ['babel-loader', {
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
        new HtmlwebpackPlugin({
            title: 'monitoring system',
            filename: 'index.html',
            template: path.resolve(ROOT_PATH, 'index.html'),
            // favicon: './src/assets/images/favicon.ico',
            inject: 'body'
        }),
        // 当开启 HMR 的时候使用该插件会显示模块的相对路径
        new webpack.NamedModulesPlugin(),
        // 热更新
        new webpack.HotModuleReplacementPlugin()
    ]
};