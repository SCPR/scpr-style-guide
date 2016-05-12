
  var spritePath = ASSETS_PATH + "img/scpr-sprite.svg";
  var ajax = new XMLHttpRequest();
  ajax.open("GET", spritePath, true);
  ajax.send();
  ajax.onload = function(e) {
    var div = document.createElement("div");
    div.style.display = "none";
    div.innerHTML = ajax.responseText;
    document.body.insertBefore(div, document.body.childNodes[0]);
  }
