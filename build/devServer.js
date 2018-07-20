/*
 * @Author: xuchao 
 * @Date: 2018-07-09 14:41:04 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-20 14:38:35
 */
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config.dev');
const HOST = 'localhost';
const PORT = 8080;

new WebpackDevServer(webpack(config), {
    publicPath: '/',
    historyApiFallback: true, 
    hot: true,
    inline: true,
    open: true,
    stats: "errors-only",
    proxy: {
        // '/api': {
        //     target: '',
        //     changeOrigin:true,
        //     pathRewrite: {
        //         "^/api" : ""
        //     }
        // }
    }
}).listen(PORT, HOST, function(err) {
    if (err) {
        console.log(err);
    } 
    console.log(`start app http://${HOST}:${PORT}/`);
});
