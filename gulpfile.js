var gulp = require('gulp');
var sass = require('gulp-sass');


// Styles task
// Compiles Scss
gulp.task('sass', function () {
    return gulp.src('scss/styles.scss')
               .pipe(sass())
               .pipe(gulp.dest('css'))
});


// Watch task
// Watches Scss files
gulp.task('watch', function () {
    return gulp.watch('scss/*.scss',['sass']);
               
});

