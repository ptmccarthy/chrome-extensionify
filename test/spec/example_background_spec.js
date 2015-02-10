'use strict';

var App = require('../../src/chrome/background');

// a trivial example test
describe('Sample test', function() {

  App.initialize();

  it('Should have a test variable set to 7', function() {
    expect(App.testVariable).toEqual(7);
  });

});
