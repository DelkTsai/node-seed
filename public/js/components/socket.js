const io = require('socket.io-client');
const config = require('../../../_config/app.js');

module.exports = {

  socket: io('/' + config.namespace),

  init: function() {
    this.socket.on('connected', function(data) {
      console.log('socket connected', data);
    });

    this.socket.on('user:connected', function(data) {
      console.log('user logged in.');
      self.connecting = 'Hola ' + data.info.name.first + '!';
    });

  }

};
