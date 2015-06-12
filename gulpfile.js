var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass-client', function () {
  return sass('client/assets/styles', {container: 'gulp-ruby-sass-client'})
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('client/assets/styles'));
});

gulp.task('sass-test', function () {
  return sass('test/animation', {container: 'gulp-ruby-sass-test'})
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('test/animation'));
});

gulp.task('default', function () {
  gulp.start('sass')
});

gulp.task('sass', ['sass-client', 'sass-test'])

// 监听
gulp.watch('client/assets/styles/main.scss', ['sass-client']);
gulp.watch('test/animation/style.scss', ['sass-test']);








