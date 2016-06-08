'use strict';

module.exports = function(app) {

  // RENDER ALL PAGES TO APP VIEW
  app.get('*', function (req, res) {
    res.render('app', {
      config: app.get('config')
    });
  });

};
