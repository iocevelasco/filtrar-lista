const gulp = require('gulp')
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('autoPrefixer', () =>
    gulp.src('web/scss/**/*.scss')
        .pipe(gulp.dest('web/src/css'))
);

gulp.task('sass', function () {
  gulp.src('web/scss/**/*.scss')
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: true
  }))
  .pipe(gulp.dest('web/src/css'))
  .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
  browserSync.init({
      server: "web"
  });
  gulp.watch ("web/*.html");
  gulp.watch ("web/scss/**/*.scss", ['sass']);
  gulp.watch ("web/*.html").on('change', browserSync.reload);
});