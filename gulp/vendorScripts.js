/**
 * Created by wangsijun on 2016/4/2.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('./config');

//压缩所有第三方的CSS
gulp.task('vendorScripts',['vendorCss'], function() {
    return gulp.src(config.vendorjs)
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest(config.dist+'scripts/'));
});

gulp.task('vendorAssets',['vendorScripts'], function() {
    return gulp.src(config.vendorassets)
        .pipe(gulp.dest(config.dist + 'fonts/'));
});