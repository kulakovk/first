var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel');

gulp.task('default', function() {
    gulp.src('js/*.js')
        .pipe(babel({
            presets: ['env']
            }))
        .pipe(uglify())
        .pipe(concat('dist.js'))
        .pipe(gulp.dest('dist'));
     gulp.src('css/*.css')
         .pipe(concat('style.css'))
         .pipe(gulp.dest('./dist'));
});
gulp.task('concat', function() {
     gulp.src('js/*.js')
         .pipe(concat('dist.js'))
         .pipe(gulp.dest('./'));
});
gulp.task('minify', function () {
     gulp.src('js/*.js')
         .pipe(babel({
            presets: ['env']
            }))
         .pipe(uglify())
         .pipe(gulp.dest('build'));
});
gulp.task('concatCss', function() {
     gulp.src('css/*.css')
         .pipe(concat('style.css'))
         .pipe(gulp.dest('./'));
});
