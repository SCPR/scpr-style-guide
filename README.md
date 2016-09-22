[![Code Climate](https://codeclimate.com/github/SCPR/scpr-style-guide/badges/gpa.svg)](https://codeclimate.com/github/SCPR/scpr-style-guide)
[![Build Status](https://travis-ci.org/SCPR/scpr-style-guide.svg?branch=master)](https://travis-ci.org/SCPR/scpr-style-guide)

# KPCC Style Guide

This repository houses scpr-style-guide, a shared style library for KPCC web products. Major HT to the [US Web Design Standards](https://github.com/18F/web-design-standards) project and their [cg-style](https://github.com/18F/cg-style) project; the code and structure for KPCC's style guide are based in large part on their work.

The scpr-style-guide provides the assets (CSS, SCSS, JS, images and font declarations) to design KPCC-branded, consumer-facing, editorial websites. This allows multiple sites, built in separate repositories and with different languages, to share a unified global style. The scpr-style-guide library is distributed on the node/npm ecosystem.

## Installation and usage

scpr-style-guide can be consumed by a project by installing it via [npm](https://www.npmjs.com/). Run the following command on a computer with node/npm installed to install scpr-style-guide into your project:

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

Another possibility for importing the JS and SCSS is to use Browserify and SASS to import them into the project.

```js
require('scpr-style-guide');
```

```css
@import './node_modules/scpr-style-guide/src/css/main.scss';
```

### Configuring asset paths for your project

scpr-style-guide sometimes references relative paths to assets in its javascript modules, and has a configuration variable set up to allow you to define the relative path to assets, since your relative asset paths will likely vary depending on your project/framework. Somewhere in your project before you load `scpr-style.js`, you'll want to declare the local path to assets in your project, which will look something like:

```html
<script>
  ASSETS_PATH = "<your-path-to-scpr-style-guide-assets>";
</script>
```

If `ASSETS_PATH` isn't defined anywhere in your project, then scpr-style-guide sets a default path of `/`.

### Using svg images
Images that are part of the scpr-style-guide project are available as one central SVG sprite with each image consisting of a SVG `<symbol>`. To use these images, you can use the SVG `xlink` attribute as follows:
```
  <svg class="icon">
    <use xlink:href="/public/img/scpr-sprite.svg#i-share"/>
  </svg>
```

## Contributing to the style guide

Anyone at SCPR can contribute improvements to scpr-style-guide. Making changes/improvements typically involves getting the repo set up for local development, adding/refactoring one or more patterns, committing those changes, and then publishing a new version of the style guide to npm.

### Local Development

To get scpr-style-guide up and running for local development:

1. clone the repo to your machine: `git clone git@github.com:SCPR/scpr-style-guide.git`
2. `cd` into the `scpr-style-guide` directory.
3. Run `npm install` to install javascript dependencies.
4. Run `bundle install` to install Ruby gem dependencies.
5. To get the documentation site running locally, fire up Middleman by running `bundle exec middleman server` and navigate to `http://localhost:4567`.
6. To have the project watch for file changes and recompile CSS, JS and image assets on the fly, run `npm run watch` in another terminal window.  

### Adding a new CSS pattern

Adding a new CSS pattern to the style guide looks something like:

1. Create a new SCSS partial in `src/css/*`, (e.g. a new modal component would be created at `src/css/components/_modals.scss`).
2. Import the new SCSS partial into the `all.scss` file in the same directory (e.g. `src/css/components/all.scss`).
3. Author your CSS inside the partial for the new pattern, taking care to use [BEMIT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/) conventions and [KSS](http://warpspire.com/kss/) at the top of each file to document your CSS.
4. To document your new pattern, add one or more new HTML file(s) at `documentation/web/patterns`. File naming conventions should follow BEMIT conventions (e.g. `c-modal.html`, `c-modal--large.html`).
5. In the html file, add YAML Frontmatter at the top of the file (see other files in `documentation/web/patterns/` for examples). Below the Frontmatter, add the markup that corresponds to your new CSS pattern.
6. View your new pattern in the Middleman documentation site, and confirm that its appearance and behavior is as expected.
7. Commit your changes (typically in a feature branch) and issue a Pull Request.

### Publishing a new version of the style guide to npm

scpr-style-guide uses Travis CI to test builds, and also can publish passing builds to npm automatically using git tags and releases. When you're ready to release a new version of the style guide, follow these steps:

1. Make sure the changes that make up your release have been merged into `master`.
2. Update the project's version number in `package.json` (https://github.com/SCPR/scpr-style-guide/blob/master/package.json#L3).
3. Commit the update to the `package.json` file.
4. On `master`, create a new tag and give it a brief description, e.g.: `git tag -a v1.4 -m "my version 1.4"`.
5. Push the tag to Github: `git push origin v1.4`.
6. The push to Github will kick off a new build on Travis CI. Once that succeeds, Travis should automatically publish the new version to npm.
7. Verify that your new version has published to npm: https://www.npmjs.com/package/scpr-style-guide.

## Running the style guide documentation

The style guide allows you to see changes to components from the scpr-style-guide project and is used for visual regression testing of components. To get the Middleman style guide site working:

- Ensure you have ruby and bundler installed
- Install ruby gems by running `bundle install`
- Build and run the Middleman server by running `bundle exec middleman serve`
