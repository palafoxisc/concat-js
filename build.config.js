var pkg = require('./package.json');

module.exports = {

  karma: {
    confFile: '/karma.conf.js',
    moduleName: 'concat-js',
    files: ['lib/*.js']
  },

  coverageDirectory: 'coverage',

  workingDir: ['coverage'],

  minCoverage: 90,

  complexity: {
    cyclomatic: 20,
    halstead: 20,
    maintainability: 100
  },

  baseDirectory: 'client',

  sourceFiles: ['lib/index.js', 'lib/import.data.js'],

  testFiles: ['test/*.js'],

  buildDirectory: 'build',

  reporter: {reporter: 'spec'}
  //reporter: {reporter: 'nyan'}

};
