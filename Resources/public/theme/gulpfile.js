let gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
let sourcemaps = require('gulp-sourcemaps');
let concat = require('gulp-concat');

gulp.task('sass', () => {
    return gulp.src([
        'src/css/bootstrap.min.css',
        'src/css/templatemo-breezed.css',
        'src/css/user.css',
        'src/css/flex-slider.css',
        'src/css/lightbox.css',
        'src/css/owl-carousel.css',
    ])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('bundle.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('css', gulp.series(['sass']));

gulp.task('js-global', function () {
    return gulp
        .src([
            'src/js/jquery-2.1.0.min.js',
            'src/js/isotope.js',
            'src/js/popper.js',
            'src/js/bootstrap.min.js',
            'src/js/imgfix.min.js',
            'src/js/jquery.counterup.min.js',
            'src/js/lightbox.js',
            'src/js/owl-carousel.js',
            'src/js/scrollreveal.min.js',
            'src/js/slick.js',
            'src/js/waypoints.min.js',
            'src/js/custom.js',
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.min.js'))
        .pipe(sourcemaps.write('.'))
        //.pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

/*gulp.task('js-customizer', function () {
    return gulp
        .src([
            //'src/js/customizer.js',
            'src/js/editor-plugins.js'
        ])
        .pipe(gulp.dest('dist/js/'));
});*/

gulp.task('images', function () {
    return gulp
        .src('src/images/**/*')
        .pipe(gulp.dest('dist/images/'));
});

gulp.task('fonts', function () {
    return gulp
        .src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('js', gulp.series(['js-global'/*, 'js-customizer'*/]));

gulp.task('publish', () => {
    return gulp.src(['dist/**/*'])
        .pipe(gulp.dest('../../../../../../../public/assets/theme/templatemo/breezed/theme'));
});

gulp.task('default', gulp.series(['css', 'js', 'images', 'fonts', 'publish'], () => {
    gulp.watch('src/css/*', gulp.series(['css', 'publish']));
    gulp.watch('src/js/*', gulp.series(['js', 'publish']));
    gulp.watch('src/images/**/*', gulp.series(['images', 'publish']));
}));
