
// Wells JS
var s,
wells = {

  settings: {
    well: document.getElementsByClassName("js-well"),
    wellDismissBtn: document.getElementsByClassName("js-well--dismiss-btn")
  },

  init: function() {
    s = this.settings;
    this.bindUIActions();
    this.onLoadActions();
  },

  forEach: function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  },

  bindUIActions: function() {
    wells.forEach(s.wellDismissBtn, function (index, element) {
      element.addEventListener("click", function( event ) {
        wells.dismissWell(element);
        event.preventDefault();
      }, false);
    });
  },

  onLoadActions: function() {
    wells.forEach(s.well, function (index, element) {
      // check cookies and hide wells where viewsLeft === 0
      var cookieName = element.getAttribute("data-name");
      var cookieValue = element.getAttribute("data-views");

      wells.createOrUpdateCookie(cookieName, cookieValue, element);
    });
  },

  getCookie: function(name) {
    var keyValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
  },

  setCookie: function(name, viewsLeft) {
    var expires = new Date();

    expires.setTime(expires.getTime() + 31536000000); // 1 year
    document.cookie = name + "=" + viewsLeft + "; expires=" + expires.toUTCString();
  },

  createOrUpdateCookie: function(name, viewsLeft, element) {
    var cookie = wells.getCookie(name);
    var cookieValue = parseInt(cookie, 10);

    if (cookie === null) {
      wells.setCookie(name, viewsLeft);
    }
    else if (cookieValue > 0) {
      // Read cookie and update if it needs to be decremented
      viewsLeft = cookieValue - 1;
      wells.setCookie(name, viewsLeft);
    }
    else if (cookieValue === 0) {
      wells.dismissWell(element);
    }
  },

  dismissWell: function(element) {
    if (element.classList.contains("js-well")) {
      var wellElement = element;
    }
    else {
      var wellElement = element.parentNode;
    }
    var name = wellElement.getAttribute("data-name");

    wellElement.classList.add("js--hidden");
    wells.setCookie(name, 0);
  }

};

(function() {
  if (document.getElementsByClassName("js-well").length) {
    wells.init();
  }
})();
