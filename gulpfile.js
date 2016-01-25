var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var exec = require('child_process').exec;
// var gutil = require('gulp-util');
var gzip = require('gulp-gzip');
var critical = require('critical');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
// var postcss = require('gulp-postcss');
// var sourcemaps = require('gulp-sourcemaps');
// var autoprefixer = require('autoprefixer');

//Porters of non-critical content
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
gulp.task('other-image-port', function () {
    gulp.src(['theme/images/**/*.svg','theme/images/**/*.ico'])
        .pipe(gulp.dest('public/theme/images'));
});

//image minifier (no CSS, HTML, or JS)
gulp.task('image-min', function () {
    gulp.src(['theme/images/**/*.jpg','theme/images/**/*.png'])
        .pipe(imagemin({
          optimizationLevel: 7,
          progressive:true,
          use: [pngquant()]
        }))
        .pipe(gulp.dest('public/theme/images'));
});

//css auto-prefixer for compatibility
// gulp.task('autoprefixer', function(){
//   gulp.src('theme/css/*.css')
//     .pipe(sourcemaps.init())
//     .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('theme/css/'));
// });

//jekyll builder (through executables)
gulp.task('jekyll', function (){
exec('jekyll build --source blog/ --destination public/blog/', function(err, stdout, stderr) {
    if(err){
      console.log('There was an error! Error message: ' + err);
    } else {
      console.log(stdout);
    }
  });
});

//CSS and JS minifier, retaining async on javascript files, after all other files have been ported over
gulp.task('async',['bower-port', 'misc-port', 'downloads-port','image-min', 'other-image-port', 'jekyll'],function(){
  var assets = useref.assets();
  return gulp.src('index.html')
    .pipe(assets)
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('public'));
});

//CSS inliner post-CSS and JS minification, pre-HTML minification and gzipping
gulp.task('css-inline',['async'], function(){
  return critical.generateInline({
    base:'public/',
    src:'index.html',
    dest: 'public/index.html',
    width: 1300,
    height: 900
  });
});

//HTML minifier (run after ports, image-minification, and critical CSS inlining)
gulp.task('cruncher', ['css-inline'], function() {
   gulp.src('public/index.html')
        .pipe(usemin({
            assetsDir: '',
            html: [minifyHtml({empty:true})]
        }))
        .pipe(gulp.dest('public'));
});


// Post-port zipping (renamed default)
gulp.task('default', ['cruncher'], function(){
  gulp.src(['public/**/*','!public/**/*.gz','!public/**/*.md','!public/**/*.txt', '!public/**/*.json','!public/**/*.xml', '!public/theme/images/**/*'])
    .pipe(gzip()).pipe(gulp.dest('public'));
});
