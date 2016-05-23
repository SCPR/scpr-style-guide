(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// ASSET PATHS SETUP
// Global config to allow each project to define the correct relative path to assets
// defined in our javascript modules.

if (typeof ASSETS_PATH === "undefined") {
  ASSETS_PATH = "/";
}

},{}],2:[function(require,module,exports){

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

},{}],3:[function(require,module,exports){

// REQUIRE MODULES

require('./configAssetPaths.js');
require('./icons.js');
require('./mast.js');
require('./media.js');

},{"./configAssetPaths.js":1,"./icons.js":2,"./mast.js":4,"./media.js":5}],4:[function(require,module,exports){

// Masthead JS goes here.
var s,
    mast = {

  settings: {
    search: document.getElementsByClassName("js-search"),
    searchForm: document.getElementById("site-search"),
    searchFormInput: document.getElementById("q"),
    searchToggleBtn: document.getElementsByClassName("js-search--toggle"),
    searchElementsToHide: document.getElementsByClassName("js-search--hide"),
    searchHiddenElements: document.getElementsByClassName("js-search--hidden")
  },

  init: function () {
    s = this.settings;
    this.bindUIActions();
  },

  forEach: function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  },

  bindUIActions: function () {
    s.searchToggleBtn[0].addEventListener("click", function (event) {
      mast.hideAdjacentElements();
      mast.showSearchForm();
      mast.focusSearchForm();
      event.preventDefault();
    }, false);

    s.searchForm.addEventListener("focusout", function (event) {
      setTimeout(function () {
        if (!s.searchForm.contains(document.activeElement)) {
          mast.showAdjacentElements();
          mast.hideSearchForm();
        }
      }, 10);
    }, false);
  },

  hideAdjacentElements: function () {
    mast.forEach(s.searchElementsToHide, function (index, value) {
      mast.hideElement(value);
    });
  },

  showAdjacentElements: function () {
    mast.forEach(s.searchElementsToHide, function (index, value) {
      mast.showElement(value);
    });
  },

  showSearchForm: function () {
    mast.forEach(s.search, function (index, value) {
      mast.showElement(value);
    });
  },

  hideSearchForm: function () {
    mast.forEach(s.search, function (index, value) {
      mast.hideElement(value);
    });
  },

  focusSearchForm: function () {
    s.searchFormInput.focus();
  },

  hideElement: function (element, index) {
    element.classList.add("js-search--hidden");
  },

  showElement: function (element, index) {
    element.classList.remove("js-search--hidden");
  }

};

(function () {
  if (document.getElementsByClassName("mast").length) {
    mast.init();
  }
})();

},{}],5:[function(require,module,exports){

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

},{}]},{},[3]);
