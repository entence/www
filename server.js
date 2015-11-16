var newrelic= require('newrelic');
var path = require('path');
var ghost = require('ghost');


ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
  ghostServer.start();
});
