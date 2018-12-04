const gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  console.log('Gulp funcionando...');
});

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on('change', browserSync.reload)
});
