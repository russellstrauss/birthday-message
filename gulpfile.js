// Include gulp
var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('./assets/less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./assets/less'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./assets/less/**/*.less', ['less']);
});

// Default Task
gulp.task('default', ['less', 'watch']);