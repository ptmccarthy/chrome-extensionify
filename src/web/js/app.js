'use strict';

var template = require('../templates/example.hbs');

exports.main = function() {

  document.body.innerHTML = template({appname: 'chrome-extensionify'});

};
