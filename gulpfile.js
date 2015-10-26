var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

gulp.task('default', function() {
   gulp.src('index.html')
        .pipe(usemin({
            assetsDir: 'public',
            css: [minifyCss(), 'concat'],
            js: [uglify(), 'concat']
        }))
        .pipe(gulp.dest('public'));
});
