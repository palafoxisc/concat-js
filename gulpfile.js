'use strict';

var CONFIG = require('./build.config');
var gulp = require('gulp');
var del = require('del');
var KarmaServer = require('karma').Server;

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

gulp.task('default', ['clean', 'test']);
