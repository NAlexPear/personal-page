var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var header = require('gulp-header');
var imagemin = require('gulp-imagemin');
var exec = require('child_process').exec;
var gutil = require('gulp-util');



gulp.task('default', ['add-headers', 'bower-port', 'misc-port','image-min', 'image-port', 'jekyll'], function() {
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
gulp.task('image-min', function () {
    gulp.src(['theme/images/*.jpg','theme/images/*.png'])
        .pipe(imagemin({
          optimizationLevel: 5,
          progressive:true
        }))
        .pipe(gulp.dest('public/theme/images'));
});
gulp.task('image-port', function () {
    gulp.src(['theme/images/*.svg'])
        .pipe(gulp.dest('public/theme/images'));
});
gulp.task('jekyll', function (){
exec('jekyll build --source blog/ --destination public/blog/', function(err, stdout, stderr) {
      console.log(stdout);
  });
});
