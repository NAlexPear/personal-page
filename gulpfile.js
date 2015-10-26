var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var header = require('gulp-header');

gulp.task('default', ['add-headers', 'bower-port', 'misc-port'], function() {
   gulp.src('index.html')
        .pipe(usemin({
            assetsDir: '',
            css: [minifyCss(), 'concat'],
            js: [uglify(), 'concat']
        }))
        .pipe(gulp.dest('public'));
});
gulp.task('add-headers', function() {
    gulp.src('index.html')
        .pipe(header("<!-- This file is generated — do not edit by hand! -->\n"))
        .pipe(gulp.dest('public'));

    gulp.src('public/theme/js/site.js')
        .pipe(header("/* This file is generated — do not edit by hand! */\n"))
        .pipe(gulp.dest('public/theme/js'));

    gulp.src('public/theme/css/site.css')
        .pipe(header("/* This file is generated — do not edit by hand! */\n"))
        .pipe(gulp.dest('public/theme/css'));
});
gulp.task('bower-port', function(){
  gulp.src(['bower_components/**/*'])
    .pipe(gulp.dest('public/bower_components'));
});
gulp.task('misc-port', function(){
  gulp.src(['misc/**/*'])
    .pipe(gulp.dest('public'));
});
