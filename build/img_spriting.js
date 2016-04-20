/*
 * A postcss task to create a sprite of all CSS background images and update
 * the references to them in the CSS.
 */

var fs = require('fs');
var postcss = require('postcss');

var css = fs.readFileSync('./public/css/scpr_style.css', 'utf8');

var opts = {
  filterBy: function(image) {
    if (!/\.png$/.test(image.url)) {
      return Promise.reject();
    }

    return Promise.resolve();
  },
  stylesheetPath: './public/css',
  spritePath: './public/img'
};

postcss([ require('postcss-sprites').default(opts) ])
    .process(css, { 
      from: './public/css/scpr_style.css',
      to: './public/css/scpr_style.css',
    })
    .then(function (result) {
      fs.writeFileSync('./public/css/scpr_style.css', result.css);
    });
