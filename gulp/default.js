/**
 * Created by wangsijun on 2016/3/12.
 */
var gulp = require('gulp');
var config = require('./config');
gulp.task('default', ['clean','css']);

// 监听任务 运行语句 gulp watch
gulp.task('watch',function(){

    server.listen(port, function(err){
        if (err) {
            return console.log(err);
        }

        //// 监听html
        //gulp.watch(config.base+'public/**/*.html', function(event){
        //    gulp.run('html');
        //})

        // 监听css
        gulp.watch(config.base+'public/stylesheets/**/*.less', function(){
            gulp.run('css');
        });

        // 监听images
        gulp.watch(config.base+'public/images/**/*', function(){
            gulp.run('images');
        });

        // 监听js
        gulp.watch(config.base+'public/javascripts/**/*.js', function(){
            gulp.run('js');
        });

    });
});
