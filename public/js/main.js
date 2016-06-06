'use strict';

// LIBS
window.$ = window.jQuery = require('jquery');

$(document).ready(function() {

  let config = require('../../_config/app.js');

  // ENABLE SOCKETS
  if (config.socket) {
    const Socket = require('./components/socket.js');
    Socket.init();
  }

});
