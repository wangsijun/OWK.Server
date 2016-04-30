/**
 * Created by wangsijun on 2016/4/2.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('./config');

//压缩所有第三方的CSS
gulp.task('vendorCss',function() {
    return gulp.src(config.vendorcss)
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest(config.dist+"styles/"));
});
