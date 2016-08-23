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
    all: ['Gruntfile.js', 'js/**/*.js','app.js' ,'test/**/*.js']
  },
  casperjs: {
    options: {
      async: {
        parallel: false
      },
      silent: false
    },
    files: ['test/app-spec.js']
  },
  express: {
    options: {
      // Override defaults here
    },
    dev: {
      options: {
        script: 'server.js'
      }
    }
  }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-casperjs');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.registerTask('server', ['express']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('css', ['sass']);
  grunt.registerTask('test', ['casperjs']);
  grunt.registerTask('default', ['express','sass','jshint','casperjs']);
};
