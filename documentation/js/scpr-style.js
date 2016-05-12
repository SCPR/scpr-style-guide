(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// ASSET PATHS SETUP
// Global config to allow each project to define the correct relative path to assets
// defined in our javascript modules.

if (typeof ASSETS_PATH == "undefined") {
  ASSETS_PATH = "/";
}

},{}],2:[function(require,module,exports){

// Collect large headlines that might need resizing.
var headlines = document.getElementsByClassName("media__headline--h1");

function checkLengthAndResize(headline, index) {

  // Look inside the headline's hyperlink to get the text
  // character count.
  var charCount = headline.getElementsByTagName("a")[0].textContent.length;

  // If this is a headline likely to wrap to three lines,
  // let's add a class to typeset it smaller.
  if (charCount > 60) {
    headline.classList.add("media__headline--h1-verbose");
  }
}

// Iterate through large headlines and resize where appropriate.
Array.from(headlines).forEach(checkLengthAndResize);

},{}],3:[function(require,module,exports){

var spritePath = ASSETS_PATH + "img/scpr-sprite.svg";
var ajax = new XMLHttpRequest();
ajax.open("GET", spritePath, true);
ajax.send();
ajax.onload = function (e) {
  var div = document.createElement("div");
  div.style.display = "none";
  div.innerHTML = ajax.responseText;
  document.body.insertBefore(div, document.body.childNodes[0]);
};

},{}],4:[function(require,module,exports){

// REQUIRE MODULES

require('./configAssetPaths.js');
require('./loadSvg.js');
require('./fitText.js');

},{"./configAssetPaths.js":1,"./fitText.js":2,"./loadSvg.js":3}]},{},[4]);
