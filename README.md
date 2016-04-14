# KPCC Style Guide
This repository houses scpr-style-guide, a shared style library for KPCC web products. Major HT to the [US Web Design Standards](https://github.com/18F/web-design-standards) project and their [cg-style](https://github.com/18F/cg-style) project; the code and structure for KPCC's style guide are based in large part on their work.

The scpr-style-guide provides the assets (CSS, SCSS, JS, images and font declarations) to design a KPCC-branded website. This allows multiple sites built in separate repositories and with different languages to share a global style without repeating styling code. The scpr-style-guide library is primarily distributed on the node/npm ecosystem but also includes a ruby jekyll package.

## Install and use
### node/npm
The best way to install scpr-style-guide is with the node package manager or [npm](https://www.npmjs.com/). Run the following command on a computer with node/npm installed to install scpr-style-guide into your project

```
npm install scpr-style-guide --save
```

Once installed, all the assets from scpr-style-guide have to be consumed by your project. This can be done in multiple ways depending on what assets and your project setup. For example, a simple site could copy over the relevant assets with build commands and include them from the html with link tags. 

```
# build commands
cp ./node_modules/scpr-style-guide/js/* ./public/js
cp ./node_modules/scpr-style-guide/css/* ./public/css
cp -R ./node_modules/scpr-style-guide/img/**/* ./public/img
cp -R ./node_modules/scpr-style-guide/font/**/* ./public/font
```

Another possibility for importing the JS and SCSS is to use browserify and SASS to import them into the project.

```js
require('scpr-style-guide');
```

```css
@import './node_modules/scpr-style-guide/src/css/main.scss';
```

## Using svg images
Images that are part of the scpr-style-guide project are available as one central svg sprite with each image consisting of a svg `<symbol>`. To use these images, you can use the svg `xlink` attribute as follows:
```
  <svg class="icon">
    <use xlink:href="/public/img/cloudgov-sprite.svg#i-agreement"/>
  </svg>
```

## Running the styleguide
The styleguide allows you to see changes to components from the scpr-style-guide project rather then another site and is used for visual regression testing of components. To get the jekyll styleguide site working:

- Ensure you have ruby and bundler installed
- Install ruby gems by running `bundle install`
- Configure jekyll to use the local gem by running `bundle config local.scpr-style-guide ./gem/`
- Build and run the jekyll server by running `bundle exec jekyll serve`

