/**
 * Created by wangsijun on 2016/3/9.
 */
//导入工具包 require('node_modules里对应的模块')
var gulp = require('gulp'),                     //本地安装gulp所用到的地方
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    config = require('./config');

var folders = {
    source_file :config.base+"public/stylesheets/*.less",
    target_file: config.dist+"styles/"
}

//定义个testLess任务（自定义任务名称）
gulp.task('tastLess',function(){
    gulp.src(folders.source_file)    //该任务针对的文件
        .pipe(less())                                    //该任务调用的模块
        .pipe(minifyCSS())                           //生成压缩CSS文件
        .pipe(gulp.dest(folders.target_file));                //将会在src/css下生成所有的css文件
});

//gulp.task('default',['tastLess']);   //定义默认任务
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径
