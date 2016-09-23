'use strict';

var CONFIG = require('./build.config');
var gulp = require('gulp');
var del = require('del');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var coverage = require('gulp-coverage');
var gutil = require('gulp-util');

gulp.task('hello', function () {
  console.log('Hello World!');
});

gulp.task('clean', function (done) {
  del(CONFIG.workingDir, function () {
    console.log("cleaning done");
    done();
  });
});

gulp.task('pre-test', function () {
  return gulp.src(CONFIG.sourceFiles)
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('error', gutil.log);
});

gulp.task('test', ['pre-test'], function () {
  return gulp.src(CONFIG.testFiles)
    .pipe(mocha(CONFIG.reporter))
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({thresholds: {global: CONFIG.minCoverage}}))
    .on('error', gutil.log);
});

gulp.task('default', ['clean', 'test']);
