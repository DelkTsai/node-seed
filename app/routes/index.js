'use strict';

module.exports = function(app) {

  const controller = app.get('controller')();

  // INDEX PAGE
  app.get('/', function (req, res) {
    controller.get('index');
  });

};
