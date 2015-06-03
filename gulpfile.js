var paths = {
    js: '/apps/**/*.js'
};

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');

gulp.task('default', function () {
    return gulp.src('spec/enzymes.js')
        .pipe(jasmine());
});

gulp.task('jslint', function () {
    return gulp.src(paths.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});

