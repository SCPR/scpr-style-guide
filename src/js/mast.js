
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

  init: function() {
    s = this.settings;
    this.bindUIActions();
  },

  forEach: function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  },

  bindUIActions: function() {
    s.searchToggleBtn[0].addEventListener("click", function( event ) {
      mast.hideAdjacentElements();
      mast.showSearchForm();
      mast.focusSearchForm();
      event.preventDefault();
    }, false);

    s.searchForm.addEventListener("focusout", function( event ) {
      setTimeout(function() {
        if (!s.searchForm.contains(document.activeElement)) {
          mast.showAdjacentElements();
          mast.hideSearchForm();
        }
      }, 10);
    }, false);
  },

  hideAdjacentElements: function() {
    mast.forEach(s.searchElementsToHide, function (index, value) {
      mast.hideElement(value);
    });
  },

  showAdjacentElements: function() {
    mast.forEach(s.searchElementsToHide, function (index, value) {
      mast.showElement(value);
    });
  },

  showSearchForm: function() {
    mast.forEach(s.search, function (index, value) {
      mast.showElement(value);
    });
  },

  hideSearchForm: function() {
    mast.forEach(s.search, function (index, value) {
      mast.hideElement(value);
    });
  },

  focusSearchForm: function() {
    s.searchFormInput.focus();
  },

  hideElement: function(element, index) {
    element.classList.add("js-search--hidden");
  },

  showElement: function(element, index) {
    element.classList.remove("js-search--hidden");
  }

};

(function() {
  if (document.getElementsByClassName("mast").length) {
    mast.init();
  }
})();
