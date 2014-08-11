module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      css: {
        src: [
        'app/bower_components/html5-boilerplate/css/normalize.css',
        'app/bower_components/html5-boilerplate/css/main.css',
        'app/css/bootstrap.min.css',
        'app/css/bootstrap-theme.min.css',
        'app/css/app.css'
        ],
        dest: 'app/css/combined.css'
      },
      js: {
        src: [
        'app/js/*'
        ],
        dest: 'app/js/combined.js'
      }
    },
    cssmin: {
      css: {
        src: 'app/css/combined.css',
        dest: 'app/css/combined.min.css'
      }
    },
    uglify: {
      js: {
        files: {
          'combined.js': ['combined.js']
        }
      }
    },
    watch: {
      files: ['app/css/*', 'app/js/*'],
      tasks: ['concat', 'cssmin', 'uglify']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['concat:css', 'cssmin:css', 'concat:js', 'uglify:js']);
};
