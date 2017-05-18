var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('bs', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        plugins: ["bs-html-injector?files[]=*.html"],
        open: false
    });
});
