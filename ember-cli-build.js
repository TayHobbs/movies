/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {});

  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
  app.import('bower_components/bootstrap-material-design/dist/css/material-wfont.min.css');
  app.import('bower_components/bootstrap-material-design/dist/css/ripples.min.css');
  app.import('bower_components/bootstrap-material-design/dist/js/material.min.js');
  app.import('bower_components/bootstrap-material-design/dist/js/ripples.min.js');

  return app.toTree();
};
