var gulp = require( "gulp" );
var usemin = require( "gulp-usemin" );
var minifyHtml = require( "gulp-minify-html" );
var minifyCss = require( "gulp-minify-css" );
var imagemin = require( "gulp-imagemin" );
var pngquant = require( "imagemin-pngquant" );
var gzip = require( "gulp-gzip" );
var useref = require( "gulp-useref" );
var gulpif = require( "gulp-if" );
var autoprefixer = require( "gulp-autoprefixer" );
var sitemap = require( "gulp-sitemap" );
var blog = require( "blog-runner" );
var webpack = require( "webpack" );
var webpackConfig = require( "./config/webpack" );
var webpackStream = require( "webpack-stream" );

// DEVELOPMENT ENVIRONMENT TASKS (for ./build)
    // port in relevant content without any async operations
gulp.task(
    "webpack",
    () => gulp.src( "./theme/js/src/main.js" )
        .pipe( webpackStream( webpackConfig, webpack ) )
        .pipe( gulp.dest( "public/theme/js/" ) )
);

// PRODUCTION BUILD TASKS
// blog-runner build tasks
gulp.task(
    "blog",
    () => {
        blog.roll( "blog", { "snippetChars": 300 } );
        blog.build( "blog" );
    }
);

// Porters of non-async content
gulp.task(
    "copy",
    () => {
        gulp.src( [ "bower_components/**/*" ] )
          .pipe( gulp.dest( "public/bower_components" ) );
        gulp.src( [ "misc/**/*" ] )
          .pipe( gulp.dest( "public" ) );
        gulp.src( [ "download/**/*" ] )
          .pipe( gulp.dest( "public/download" ) );
        gulp.src( [ "theme/images/**/*.svg","theme/images/**/*.ico" ] )
          .pipe( gulp.dest( "public/theme/images" ) );
    }
);

  // image minifier (no CSS, HTML, or JS)
gulp.task(
    "imagemin",
    () => gulp.src( [ "theme/images/**/*.jpg","theme/images/**/*.png" ] )
        .pipe(
            imagemin( {
                "optimizationLevel": 7,
                "progressive": true,
                "use": [ pngquant() ]
            } )
        )
        .pipe( gulp.dest( "public/theme/images" ) )
);

  // css auto-prefixer for compatibility
gulp.task(
    "autoprefixer",
    () => gulp.src( "theme/css/*.css" )
      .pipe( autoprefixer( {
          "browsers": [ "last 2 versions" ],
          "cascade": "false"
      } ) )
      .pipe( gulp.dest( "./theme/css/" ) )
);

// CSS
gulp.task(
    "css",
    [ "blog","copy","autoprefixer" ],
    () => {
        gulp.src( "index.html" )
          .pipe( useref( { "searchPath": "." } ) )
          .pipe( gulpif( "*.css", minifyCss() ) )
          .pipe( gulp.dest( "public" ) );

        gulp.src( "blog/_site/**/*.html" )
          .pipe( useref( { "searchPath": "." } ) )
          .pipe( gulpif( "*.css", minifyCss() ) )
          .pipe( gulp.dest( "public/blog" ) );
    }
);

// Sitemap generator for SEO and search engine ease-of-use (XML format)
gulp.task(
    "map",
    () => gulp.src( "public/**/*.html" )
      .pipe(
          sitemap( {
              "siteUrl": "https://alexpear.com"
          } )
      )
      .pipe( gulp.dest( "./public" ) )
);

// HTML minifier (run after ports, image-minification, and critical CSS inlining)
gulp.task(
    "html",
    [ "css" ],
    () => gulp.src( "public/index.html" )
          .pipe(
              usemin( {
                  "assetsDir": "",
                  "html": [ minifyHtml( { "empty": true } ) ]
              } )
          )
          .pipe( gulp.dest( "public" ) )
);


// Post-port zipping (renamed default) and
gulp.task(
    "default",
    [ "html" ],
    () => gulp.src( [ "public/**/*","!public/**/*.gz","!public/**/*.md","!public/**/*.txt", "!public/**/*.json","!public/**/*.xml", "!public/theme/images/**/*" ] )
      .pipe( gzip() )
      .pipe( gulp.dest( "public" ) )
);


gulp.task( "production", [ "default", "imagemin", "map" ] );
