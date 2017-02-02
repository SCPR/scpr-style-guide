if (!Array.forEach) Array.forEach = require('array-foreach');
NodeList.prototype.forEach = Array.prototype.forEach; 
HTMLCollection.prototype.forEach = Array.prototype.forEach; // Because of https://bugzilla.mozilla.org/show_bug.cgi?id=14869


// ^^^ INTERNET EXPLORER BILL GATES WHYYYYYYYY


document.querySelectorAll('main xmp').forEach(function(el){
  el.insertAdjacentHTML('beforebegin','<output>' + el.innerText + '</output>');
});
document.querySelectorAll('main > section > h3').forEach(function(el){
  var anchorId = el.innerText.replace(/[\W_]+/g, "-").toLowerCase();
  el.setAttribute('id', anchorId);
});
if(window.location.hash.length) {
  window.location.assign(window.location.hash);
}


require('./index');