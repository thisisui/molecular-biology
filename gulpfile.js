var gulp = require('gulp');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
var mocha = require('gulp-mocha');
var cover = require('gulp-coverage');
const eslint = require('gulp-eslint');

gulp.task('default', ['watch']);

gulp.task('watch', function () {
    gulp.watch('./cut/**/*.js', ['lint', 'jstest']);
    gulp.watch('./spec/**/*.js', ['jstest']);
});

gulp.task('jstest', function () {
    gulp.src('./apps/spec/**/*.js')
        .pipe(plumber())
        .pipe(cover.instrument({
            pattern: ['./apps/cut/**/*.js'],
            debugDirectory: 'debug'
        }))
        .pipe(mocha({reporter: 'nyan'}))
        .pipe(cover.gather())
        .pipe(cover.format())
        .pipe(gulp.dest('reports'));
});


gulp.task('jslint', function () {
    return gulp.src('./apps/cut/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});