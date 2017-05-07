var autoprefixer = require( "gulp-autoprefixer" );
var blog = require( "blog-runner" );
var gulp = require( "gulp" );
var gulpif = require( "gulp-if" );
var gzip = require( "gulp-gzip" );
var imagemin = require( "gulp-imagemin" );
var minifyCss = require( "gulp-minify-css" );
var minifyHtml = require( "gulp-minify-html" );
var pngquant = require( "imagemin-pngquant" );
var useref = require( "gulp-useref" );
var sass = require( "gulp-sass" );
var sitemap = require( "gulp-sitemap" );
var webpack = require( "webpack" );
var webpackConfig = require( "./config/webpack.config" );
var webpackStream = require( "webpack-stream" );

gulp.task(
    "webpack",
    () => gulp.src( "./theme/js/main.jsx" )
        .pipe( webpackStream( webpackConfig, webpack ) )
        .pipe( gulp.dest( "public/theme/js/" ) )
);

gulp.task(
    "blog",
    () => {
        blog.roll( "blog", { "snippetChars": 300 } );
        blog.build( "blog" );
    }
);

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

gulp.task(
    "imagemin",
    () => gulp
        .src( [ "theme/images/**/*.jpg","theme/images/**/*.png" ] )
        .pipe(
            imagemin( {
                "optimizationLevel": 7,
                "progressive": true,
                "use": [ pngquant() ]
            } )
        )
        .pipe( gulp.dest( "public/theme/images" ) )
);

gulp.task(
    "sass",
    () => gulp
        .src( "theme/sass/main.scss" )
        .pipe( sass() )
        .pipe( gulp.dest( "theme/css/" ) )
);

gulp.task(
    "autoprefixer",
    [ "sass" ],
    () => gulp
        .src( "theme/css/*.css" )
        .pipe( autoprefixer( {
            "browsers": [ "last 2 versions" ],
            "cascade": "false"
        } ) )
        .pipe( gulp.dest( "theme/css/" ) )
);

gulp.task(
    "css",
    [ "blog","copy","autoprefixer" ],
    () => {
        gulp
            .src( "index.html" )
            .pipe( useref( { "searchPath": "." } ) )
            .pipe( gulpif( "*.css", minifyCss() ) )
            .pipe( minifyHtml() )
            .pipe( gulp.dest( "public" ) );

        gulp
            .src( "blog/_site/**/*.html" )
            .pipe( useref( { "searchPath": "." } ) )
            .pipe( gulpif( "*.css", minifyCss() ) )
            .pipe( minifyHtml() )
            .pipe( gulp.dest( "public/blog" ) );
    }
);

// Sitemap generator for SEO and search engine ease-of-use (XML format)
gulp.task(
    "map",
    () => gulp
        .src( "public/**/*.html" )
        .pipe(
            sitemap( {
                "siteUrl": "https://alexpear.com"
            } )
        )
        .pipe( gulp.dest( "./public" ) )
);

gulp.task(
    "default",
    [ "webpack", "css" ],
    () => gulp
        .src( [ "public/**/*.html", "public/**/*.css", "public/**/*.js" ] )
        .pipe( gzip() )
        .pipe( gulp.dest( "public" ) )
);


gulp.task( "production", [ "default", "imagemin", "map" ] );
