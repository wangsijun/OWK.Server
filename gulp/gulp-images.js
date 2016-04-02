/**
 * Created by wangsijun on 2016/4/3.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('./config');
var publicImages = "public/images/";
var distImages = "image";
var filesPath = [];
//压缩Image文件（按照目录结构压缩）
gulp.task('images',['vendorAssets'], function() {
    var stream;
    for(var index =0; index< filesPath.length ; index++) {
        var imagePath = publicImages+filesPath[index]+'/';
        var distPath = distImages+filesPath[index]+'/';
        stream = gulp.src(config.base +imagePath+ "*.js")
            .pipe(concat('script.min.js'))
            .pipe(gulp.dest(config.dist+distPath));
    }
    return  stream;
});
