// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var minify = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// Compile Our Sass
gulp.task('sass', function() {
    // Return async stream as dependency for 'clean-css'
    var stream = gulp.src('scss/main.scss')
        .pipe(sass())
        .pipe(minify())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./build'));
    return stream;
});

// Concatenate & Minify JS
// gulp.task('scripts', function() {
//     return gulp.src('js/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('dist'))
//         .pipe(rename('all.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });

// Watch Files For Changes
gulp.task('watch', function() {
    // gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass']);