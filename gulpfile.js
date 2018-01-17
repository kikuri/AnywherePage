var path = require('path');
var fs = require('fs');
var pkg = JSON.parse(fs.readFileSync('./package.json'));
var assetsPath = path.resolve(pkg.path.assetsDir);

var gulp = require('gulp');

// sass compiler
var sass = require('gulp-sass');

var sourcemaps =require('gulp-sourcemaps');

// add vender prifix
var autoprefixer = require('gulp-autoprefixer');

// error handling
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
    gulp.src(path.join(assetsPath, 'sass/application.scss'))
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ["last 2 versions", "ie >= 10", "Android >= 4","ios_saf >= 9"],
            cascade: false
        }))
        .pipe(gulp.dest(path.join(assetsPath, 'css/')));
});

gulp.task('default', function() {
    gulp.watch(path.join(assetsPath, 'sass/**/*.scss'),['sass']);
});
