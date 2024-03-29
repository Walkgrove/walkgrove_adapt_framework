module.exports = function(grunt) {
  const Helpers = require('../helpers')(grunt);
  grunt.registerTask('tracking-insert', 'Adds any missing tracking IDs (starting at the highest existing ID)', function() {
    if (!Helpers.isPluginInstalled('walkgrove_adapt_spoor')) return;
    const data = Helpers.getFramework().getData();
    data.addTrackingIds();
  });
};
