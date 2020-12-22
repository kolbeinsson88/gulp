const browserSync = require('browser-sync');
const gulp = require('gulp');
const less = require('gulp-less');

function styles(){
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('public'))
        .pipe(browserSync.stream());
}


gulp.task('default', function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("less/*.less").on('change', () => {
        styles();
        browserSync.reload();
    })
});

