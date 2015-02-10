'use strict';

var App = require('../../src/web/js/app');

// a trivial example test
describe('Sample test', function() {

  App.main();

  it('Index should display the browserify hat', function() {
    var expected = '<img id="browserify-logo" src="img/browserify-logo.png">';
    var actual = window.document.getElementById('browserify-logo').outerHTML;
    expect(actual).toEqual(expected);
  });

});
