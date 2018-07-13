/*
 * @Author: xuchao 
 * @Date: 2018-07-09 14:41:04 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-13 10:00:00
 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const HOST='0.0.0.0';
const PORT=3000;
config.entry.app.unshift(`webpack-dev-server/client?http://${HOST}:${PORT}/`);

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    historyApiFallback: true, 
    hot: true,
    inline:true,
    noInfo: false,
    overlay: true,
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
    console.log(`start app ${HOST}:${PORT}`);
});
