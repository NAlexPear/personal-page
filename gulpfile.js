var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var exec = require('child_process').exec;
var gzip = require('gulp-gzip');
var critical = require('critical');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var autoprefixer = require('gulp-autoprefixer');
var blog = require('blog-runner');

//jekyll builder (through shell/child process)
gulp.task('jekyll', function (){
exec('jekyll build --source blog/ --destination public/blog/', function(err, stdout, stderr) {
    if(err){
      console.log('There was an error! Error message: ' + err);
    } else {
      console.log(stdout);
    }
  });
});

//blog-runner build task
gulp.task('build',function(){
  blog.build('blog');
});
//Porter of blog content
gulp.task('blog-port',['build'],function(){
  gulp.src('blog/_site/**/*')
    .pipe(gulp.dest('public/blog'));
});
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
  gulp.src(['download/**/*'])
    .pipe(gulp.dest('public/download'));
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
gulp.task('autoprefixer', function(){
  return gulp.src('theme/css/*.css')
    .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade:'false'
          }))
    .pipe(gulp.dest('./theme/css/'));
});

//CSS and JS minifier, retaining async on javascript files, after all other files have been ported over
gulp.task('async',['blog-port','bower-port', 'misc-port', 'downloads-port','image-min', 'other-image-port', 'autoprefixer'],function(){
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
