var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodeunit = require('gulp-nodeunit');
var plumber = require('gulp-plumber');

gulp.task('default', ['watch']);

gulp.task('watch', function () {
    gulp.watch('./apps/cut/**/*.js', ['jslint', 'jstest']);
    gulp.watch('./spec/**/*.js', ['jstest']);
});

gulp.task('jstest', function () {
    gulp.src('./spec/**/*.js')
        .pipe(plumber())
        .pipe(nodeunit());
});

gulp.task('jslint', function () {
    return gulp.src('./apps/cut/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});
