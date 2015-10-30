var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var header = require('gulp-header');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var exec = require('child_process').exec;
var gutil = require('gulp-util');
var gzip = require('gulp-gzip');



gulp.task('default', ['bower-port', 'misc-port','image-min', 'svg-min', 'downloads-port','jekyll'], function() {
   gulp.src('index.html')
        .pipe(usemin({
            assetsDir: '',
            html: [minifyHtml({empty:true})],
            css: [minifyCss(), 'concat'],
            js: [uglify(), 'concat']
        }))
        .pipe(gzip())
        .pipe(gulp.dest('public'));
});
gulp.task('bower-port', function(){
  gulp.src(['bower_components/**/*'])
    .pipe(gulp.dest('public/bower_components'));
});
gulp.task('misc-port', function(){
  gulp.src(['misc/**/*'])
    .pipe(gulp.dest('public'));
});
gulp.task('downloads-port', function(){
  gulp.src(['downloads/**/*'])
    .pipe(gulp.dest('public/downloads'));
});
gulp.task('image-min', function () {
    gulp.src(['theme/images/*.jpg','theme/images/*.png'])
        .pipe(imagemin({
          optimizationLevel: 7,
          progressive:true,
          use: [pngquant()]
        }))
        .pipe(gulp.dest('public/theme/images'));
});
gulp.task('svg-min', function () {
    gulp.src(['theme/images/*.svg'])
        .pipe(gulp.dest('public/theme/images'));
});
gulp.task('jekyll', function (){
exec('jekyll build --source blog/ --destination public/blog/', function(err, stdout, stderr) {
      console.log(stdout);
  });
});
