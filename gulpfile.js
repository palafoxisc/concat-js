'use strict';

var CONFIG = require('./build.config');
var gulp = require('gulp');
var del = require('del');
var KarmaServer = require('karma').Server;
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('hello', function () {
  console.log('Hello World!');
});

gulp.task('clean', function (done) {
  del(CONFIG.workingDir, function () {
    console.log("cleaning done");
    done();
  });
});

gulp.task('test', function (done) {
  new KarmaServer({
    configFile: __dirname + CONFIG.karma.confFile,
    singleRun: true
  }, done).start();
});

gulp.task('compress', function (cb) {
  pump([
      gulp.src('lib/*.js'),
      uglify(),
      gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('default', ['clean', 'test', 'compress']);
