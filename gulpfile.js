var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var minify = require('gulp-minify');

// concat js
gulp.task('js', function() {
  return gulp.src(['js/hashedit.js'])
    .pipe(concat('hashedit.js'))
    .pipe(minify({
        exclude: ['tasks'],
        ignoreFiles: ['.min.js', '-min.js']
    }))
    .pipe(gulp.dest('dist/'));
});

// concat css
gulp.task('css', function() {
  return gulp.src(['css/hashedit.css'])
    .pipe(concat('hashedit.css'))
    .pipe(gulp.dest('dist/'))
    .pipe(minifyCss())
    .pipe(rename('hashedit-min.css'))
    .pipe(gulp.dest('dist/'));
});


gulp.task('default', ['js', 'css']);