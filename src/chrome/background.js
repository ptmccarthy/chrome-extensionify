'use strict';

// If running tests, the Chrome API won't be injected to the global scope.
// This block injects the stubbed out chrome in its place so tests can run.
if (!window.chrome) {
  window.chrome = require('../../test/stubs/chrome');
}

module.exports = {

  testVariable: 7,

  initialize: function() {
    this.setupListeners();
  },

  setupListeners: function() {
    // Listener for first install
    chrome.runtime.onInstalled.addListener(function (details) {
      if (details.reason === 'install') {
        chrome.tabs.create({'url': 'index.html'});
      }
    });
  }
};