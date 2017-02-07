// POLYFILLS
if (!Array.forEach) Array.forEach = require('array-foreach');
NodeList.prototype.forEach = Array.prototype.forEach; 
HTMLCollection.prototype.forEach = Array.prototype.forEach; // Because of https://bugzilla.mozilla.org/show_bug.cgi?id=14869
if (!Array.from) Array.from = require('array-from');


// REQUIRE MODULES
require('./media.js');
require('./wells.js');
require('./mast.js');
require('svgxuse'); 