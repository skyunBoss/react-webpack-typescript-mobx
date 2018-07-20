/*
 * @Author: xuchao 
 * @Date: 2018-07-06 11:30:47 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-20 16:47:49
 */
const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const tsImportPlugin = require('ts-import-plugin');

const ROOT_PATH = path.resolve(__dirname, '..');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

const resolve = dir => {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
    entry: {
        index: path.resolve(SRC_PATH, 'index.tsx')
    },
    output: {
        path: BUILD_PATH,
        filename: process.env.NODE_ENV === 'development' ? 'js/[name].js' : 'js/[name].[hash].js',
        chunkFilename: process.env.NODE_ENV === 'development' ? 'js/[name].js' : 'js/[name].[id].[hash].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        modules: [
            resolve('src'), 
            resolve('node_modules')
        ],
        alias: { //配置别名
            '@components': resolve('src/components'),
            '@views': resolve('src/views'),
            '@stores': resolve('src/stores'),
            '@routes': resolve('src/routes')
        }
    },
    module: {
        rules: [{
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
                getCustomTransformers: () => ({
                    before: [tsImportPlugin({
                        libraryName: 'antd',
                        style: true,
                        libraryDirectory: 'lib'
                    })]
                })
            }
        }, {
            test: /\.(scss|css)$/,
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
                limit: 10000,
                name: 'images/[name].[hash:8].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: 'fonts/[name].[hash:8].[ext]'
            }
        }]
    },
    plugins: [
        // 作用域提升，减少代码量，加快代码运行速度（webpack 3.0）
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};