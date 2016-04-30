/**
 * Created by wangsijun on 2016/3/12.
 */
var gulp = require('gulp');
var del = require('del');
var config = require('./config');

//清理生成目录
gulp.task('clean', function(cb) {
    del([
        config.dist + 'fonts/**',
        config.dist + 'styles/**',
        config.dist + 'scripts/**',
        config.dist + 'assets/**',
        config.dist + 'image/**'
        ],cb);
});

