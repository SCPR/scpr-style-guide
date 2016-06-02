
// Masthead JS
var s,
mast = {

  settings: {
    mobileMenu: document.getElementsByClassName("js-mast__menu-mobile"),
    mobileMenuToggleBtn: document.getElementsByClassName("js-mast__menu-toggler"),
    mobileMenuCloseBtn: document.getElementsByClassName("js-mast__menu-close"),
    search: document.getElementsByClassName("js-search"),
    searchForm: document.getElementById("site-search"),
    searchFormInput: document.getElementById("q"),
    searchToggleBtn: document.getElementsByClassName("js-search--toggle"),
    searchElementsToHide: document.getElementsByClassName("js-search--hide"),
    searchHiddenElements: document.getElementsByClassName("js--hidden")
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
    s.mobileMenuToggleBtn[0].addEventListener("click", function( event ) {
      mast.showMobileMenu();
      mast.hideElement(this);
      mast.showElement(s.mobileMenuCloseBtn[0]);
      event.preventDefault();
    }, false);

    s.mobileMenuCloseBtn[0].addEventListener("click", function( event ) {
      mast.hideMobileMenu();
      mast.hideElement(this);
      mast.showElement(s.mobileMenuToggleBtn[0]);
      event.preventDefault();
    }, false);

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

  showMobileMenu: function() {
    mast.forEach(s.mobileMenu, function (index, element) {
      element.classList.add("js-mast__nav--active");
    });

    // Prevent content underneath menu from scrolling when menu is engaged
    document.addEventListener('touchmove', function(e) {
    	e.preventDefault();
    }, false);
  },

  hideMobileMenu: function() {
    mast.forEach(s.mobileMenu, function (index, element) {
      element.classList.remove("js-mast__nav--active");
    });

    // Reset document scrolling
    document.addEventListener('touchmove', function(e) {
    	return true;
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
    element.classList.add("js--hidden");
    element.blur();
  },

  showElement: function(element, index) {
    element.classList.remove("js--hidden");
  }

};

(function() {
  if (document.getElementsByClassName("mast").length) {
    mast.init();
  }
})();
