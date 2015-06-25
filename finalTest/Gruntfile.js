module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['js/src/config.js','js/src/util.js','js/src/html-editor.js','js/src/button-action.js','js/main.js'],
        dest: 'js/grunt.js'
      },
     
    },

    cssmin: {
        options: {
          shorthandCompacting: false,
          roundingPrecision: -1
        },
        target: {
          files: {
            'css/grunt.min.css': ['css/*.css', '!*.min.css']
          }
        }
      }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
