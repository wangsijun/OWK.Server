/**
 * Created by wangsijun on 2016/3/9.
 */
    //���빤�߰� require('node_modules���Ӧ��ģ��')
var gulp = require('gulp'),                     //���ذ�װgulp���õ��ĵط�
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css');

//�����testLess�����Զ����������ƣ�
gulp.task('tastLess',function(){
   gulp.src('public/stylesheets/*.less')    //��������Ե��ļ�
   .pipe(less())                                    //��������õ�ģ��
   .pipe(minifyCSS())                           //����ѹ��CSS�ļ�
   .pipe(gulp.dest('src/css'));                //������src/css���������е�css�ļ�
});

gulp.task('default',['tastLess']);   //����Ĭ������

//gulp.task(name[, deps], fn) ��������  name���������� deps�������������� fn���ص�����
//gulp.src(globs[, options]) ִ����������ļ�  globs��������ļ�·��(�ַ��������ַ�������)
//gulp.dest(path[, options]) ��������ļ�����·��