module.exports = function(grunt) {

  // A very basic default task.
  grunt.registerTask('default', 'Log some stuff.', function() {
    grunt.log.write('My name is Grunt and I'm logging some stuff...').ok();
  });

};
