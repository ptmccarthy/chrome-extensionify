'use strict';

// Listener for first install
chrome.runtime.onInstalled.addListener(function(details) {
  if(details.reason === 'install') {
    chrome.tabs.create({'url': 'index.html'});
  }
});
