module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'bin/main.css': 'sass/base.scss',
        }
      }
    },
    jshint: {
    all: ['Gruntfile.js', 'app.js', 'test/**/*.js']
  }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('css', ['sass']);
  grunt.registerTask('default', ['sass','jshint']);
};
