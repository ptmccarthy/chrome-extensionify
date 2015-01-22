# chrome-extensionify

Chrome-extensionify is a pre-configured project scaffold for developing Chrome extensions using browserify and commonJS/npm. This allows you to write modular, node-style code using commonJS 'require' statements for dependency management and package it for the front-end. No more ordering of `<script src>` tags, no more `vendor` or `lib` folder, and no more global namespacing! Simply `require` your favorite libraries and frameworks.

Chrome-extensionify produces a valid Chrome extension out of the box, try it!

## Features
------

* [**Grunt**](http://gruntjs.com/) for task running and building.
* [**nodejs/npm**](https://www.npmjs.com/) for module dependency resolution.
* [**Browserify**](http://browserify.org/) for module and dependency bundling.
* [**Handlebars**](http://handlebarsjs.com/) for HTML templating and precompilation.
* [**Less**](http://lesscss.org/) for CSS preprocessing and generally making CSS suck less.
* [**JSHint**](http://jshint.com/) for code quality and static analysis.
* [**Jasmine**](http://jasmine.github.io/) for writing tests.
* [**Karma**](http://karma-runner.github.io/0.12/index.html) and [**PhantomJS**](http://phantomjs.org/) for running tests.

## Getting Started
------

### Prerequisites
This project assumes that you have node.js with npm installed. If you don't, install them from [nodejs.org](http://www.nodejs.org).

### Set Up
1. Clone this repository to your project directory.

2. If you do not already have Grunt globally installed via npm, install it with `npm install -g grunt`.

3. While in the project directory root, run `npm install` to install project dependencies.

### Running Grunt Tasks
Two Grunt build tasks have been provided by default, `build:bundle` and `build:debug`. The primary difference between the two is that `build:bundle` will exit after it has built, bundled, and tested the app, while `build:debug` goes into watch mode and will rebuild and retest when files it is watching are changed.

### Loading the Bundle into Chrome
You can load your extension project in Chrome by typing `chrome://extensions` in the URL bar. Check the box for "developer mode", then choose to "Load unpacked extension...". Choose the `dist` folder, which is the generated output of a build.

### Building a Chrome Extension and Deploying to the Chrome Store
Read the [Getting Started](https://developer.chrome.com/extensions/getstarted) documentation provided by Google, it is quite good.

### License
chrome-extensionify is distributed under the MIT license so feel free to use or modify without limitation.
