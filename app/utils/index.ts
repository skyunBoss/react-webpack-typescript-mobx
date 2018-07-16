/*
 * @Author: xuchao 
 * @Date: 2018-07-13 14:03:10 
 * @Last Modified by: xuchao
 * @Last Modified time: 2018-07-13 14:04:42
 */
const path = require('path');

const resolve= (dir: string) =>{
    return path.join(__dirname, './../', dir)
}

export default {
    resolve
}