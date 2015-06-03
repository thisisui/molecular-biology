var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodeunit = require('gulp-nodeunit');
var plumber = require('gulp-plumber');

gulp.task('jslint', function () {
    return gulp.src('./apps/cut/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});

gulp.task('watch', function () {
    gulp.watch('./apps/cut/**/*.js', ['jslint', 'test']);
    gulp.watch('./spec/**/*.js', ['test']);
});

gulp.task('test', function () {
    gulp.src('./spec/**/*.js')
        .pipe(plumber())
        .pipe(nodeunit());
});