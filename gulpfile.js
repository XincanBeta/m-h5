var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
  return sass('client/assets/styles')
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('client/assets/styles'));
});

gulp.task('default', function () {
  gulp.start('styles')
});

// 监听
gulp.watch('client/styles/main.scss', ['styles']);


