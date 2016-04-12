'use strict';

let gulp = require('gulp-help')(require('gulp'));
let del = require('del');
let uglify = require('gulp-uglify');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');
let gls = require('gulp-live-server');

gulp.task('sass', () => {
  return gulp.src('src/assets/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/assets/css'));
});

gulp.task('copy', false, () => {
  gulp.src([
    'src/index.html',
    'src/assets/**/*.html',
    'src/assets/vendor/**/*',
    'src/assets/css/**/*',
    'src/assets/images/**/*'
  ],{
    'base' : './src'
  })
  .pipe(gulp.dest('build'));
});

gulp.task('build', 'builds applicaton', ['copy'], () => {
  return gulp.src('src/assets/js/**/*.js', {'base': './src'})
    .pipe(sourcemaps.init())
    // .pipe(uglify({ preserveComments: 'license' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'));
});

gulp.task('watch', 'developing', ['build'], () => {
  let server = gls.static('build', 8888);
  server.start();

  gulp.watch(['src/assets/scss/**/*.scss'], ['sass']);
  gulp.watch(['src/**/*'], ['build']);
  gulp.watch(['build/**/*'], function (file) {
    server.notify.apply(server, [file]);
  });

  process.on('exit', function() {
    server.stop();
  });
});
