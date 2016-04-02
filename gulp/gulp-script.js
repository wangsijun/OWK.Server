/**
 * Created by wangsijun on 2016/4/2.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('./config');
var publicScripts = "public/javascripts/";
var distScripts = "scripts/";
var filesPath = ["home"];
//压缩JS文件（按照目录结构压缩）
gulp.task('scripts',['images'], function() {
    var stream;
    for(var index =0; index< filesPath.length ; index++) {
        var stylePath = publicScripts+filesPath[index]+'/';
        var distPath = distScripts+filesPath[index]+'/';
        stream = gulp.src(config.base +stylePath+ "*.js")
            .pipe(concat('script.min.js'))
            .pipe(gulp.dest(config.dist+distPath));
    }
    return stream;
});
