'use strict';

const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      browserify   = require('browserify'),
      source       = require('vinyl-source-stream'),
      babel        = require('babelify'),
      browserSync  = require('browser-sync').create(),
      md5          = require('gulp-md5-plus'),
      cleanCSS     = require('gulp-clean-css'),
      uglify       = require('gulp-uglify'),
      del          = require('del'),
      runSequence  = require('run-sequence'),
      svgSprite    = require('gulp-svg-sprite'),
      replace      = require('gulp-replace');


gulp.task('build:sass', () => {
  return gulp.src('./src/styles/index.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

gulp.task('build:js', () => {
  return browserify('./src/scripts/index.js', {debug: true, extensions: ['.js']})
    // .transform('browserify-shim')
    .transform('brfs')
    .transform('babelify', {presets: ['es2015']})
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./documentation'))
    .pipe(browserSync.stream());
});

gulp.task('build:doc:sass', () => {
  return gulp.src('./src/styles/documentation.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./documentation'))
    .pipe(browserSync.stream());
});

gulp.task('build:sprite', () => {
  return gulp.src('./src/images/**/*.svg')
    .pipe(svgSprite({
      mode: {
        symbol: {
          dest: '',
          sprite: 'scpr-sprite.svg'
        }
      }
    }))
    .pipe(replace('<?xml version="1.0" encoding="utf-8"?>', ''))
    .pipe(gulp.dest('./documentation/'))
});

gulp.task('build', ['build:sass', 'build:js']);

gulp.task('serve', ['build:doc:sass', 'build:js', 'build:sprite'], () => {
  browserSync.init({
    server: "./documentation"
  });
  gulp.watch(['./src/styles/**/*.sass', './src/styles/**/*.scss'], ['build:doc:sass']);
  gulp.watch('./src/scripts/*.js', ['build:js']);
  gulp.watch('./src/images/*.svg').on('change', browserSync.reload);
  gulp.watch('./documentation/index.html').on('change', browserSync.reload);
})

gulp.task('default', ['serve']);



gulp.task('clean', () => {
  // return del(['./build/**/*', '!./build/.git/']);
  return del(['./dist/**/*']);
});

// gulp.task('compile', (cb) => {
//   return runSequence('clean', 'build', 'compile:html', 'compile:css', 'compile:js', 'compile:images', cb)
// });

