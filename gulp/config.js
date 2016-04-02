/**
 * Created by wangsijun on 2016/3/11.
 */
module.exports = {
    base: './',             //基础目录
    dist: './src/',         //压缩目录
    vendorjs: [               //第三方文件
        "./node_modules/jquery/dist/jquery.min.js",
        "./node_modules/bootstrap/dist/js/bootstrap.js"
    ],
    vendorcss: [
        "./node_modules/bootstrap/dist/css/bootstrap.min.css",
        "./node_modules/bootstrap/dist/css/bootstrap-theme.min.css"
    ],
    vendorassets:[
        "./node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.eot",
        "./node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.svg",
        "./node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf",
        "./node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff",
        "./node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2"
    ]
}