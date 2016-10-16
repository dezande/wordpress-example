// Gruntfile.js
module.exports = function (grunt) {
  var options = {
    config : { // location of grunt's config files
      src : "config/grunt/**/*.js"
    },
    pkg: grunt.file.readJSON('package.json'),
    paths : {
      bootstrap: 'bower_components/bootstrap-sass',
      jquery: 'bower_components/jquery',
      font_awesome: 'bower_components/font-awesome'
    }
  };

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('default', ['sass']);
}
