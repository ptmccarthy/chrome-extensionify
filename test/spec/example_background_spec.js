'use strict';

var App = require('../../src/chrome/background');

// a trivial example test
describe('Sample test', function() {

  beforeAll(function() {
    spyOn(window.chrome.runtime.onInstalled, 'addListener');

    App.initialize();
  });

  it('Should have a test variable set to 7', function() {
    expect(App.testVariable).toEqual(7);
  });

  it('should set up event listeners', function() {
    expect(window.chrome.runtime.onInstalled.addListener).toHaveBeenCalled();
  });
});
