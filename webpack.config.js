/**
 * Created by wangsijun on 2016/4/10.
 */
module.exports = {
    entry: [
        './ReactFiles/assets/js/entry.js'
    ],
    output: {
        path: __dirname + '/ReactFiles/assets/',
        publicPath: "/ReactFiles/assets/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['jsx-loader?harmony'] }
        ]
    }
};