var gulp = require('gulp');
var sass = require('gulp-sass');
var ng = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var path = require('path');
var uglify = require('gulp-uglify');
var Builder = require('systemjs-builder');

var connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src('./src/**/*.html')
        .pipe(connect.reload());
});

gulp.task('reload', function() {
    connect.reload();
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*.html', ['reload']);
    gulp.watch('./src/**/*.css', ['reload']);
    gulp.watch('../angular-material/src/**/*.scss', ['sass']);
    gulp.watch('./src/**/*.ts', ['js']);
});

gulp.task('default', ['connect', 'watch']);

gulp.task('ts', function() {
    var tsResult = gulp.src('./src/**/**.ts')
        .pipe(ts({
            'module': 'commonjs',
            'inlineSourceMap': true,
            'inlineSources': true,
            'noImplicitAny': false,
            'removeComments': false,
            'preserveConstEnums': true,
            'target': 'ES5'
        }));

    return tsResult.js
        .pipe(ng())
        .pipe(gulp.dest('./src'))
        .pipe(connect.reload());
});

gulp.task('compress', function() {
    return gulp.src('src/build.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('bundle', function() {
    var builder = new Builder();

    builder.loadConfig('./src/config.js')
        .then(function() {
            return builder.buildSFX('./src/app.js', './src/bundle.js', {
                minify: true,
                mangle: true
            });
        });
});

gulp.task('sass', function() {
    gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src'))
        .pipe(connect.reload());
});
