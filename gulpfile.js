var gulp = require('gulp'),
    minifyHtml = require("gulp-minify-html"),
    minifyCss = require("gulp-minify-css"),
    imagemin = require('gulp-imagemin'),
    stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps'),
    data = require('gulp-data'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync');

var paths = {
    app:    'src/',
    dist:   'dist/',
    stylus: 'styles/',
    css:    'css/',
    js:     'js/',
    //html:    '*.html'
    fonts: 'fonts/',
    images: 'images/'
};

// gulp.task('minify-html', function () {
//     gulp.src('app/*.html') // path to your files
//         .pipe(minifyHtml())
//         .pipe(gulp.dest('dist'));
// });

gulp.task('html', function () {
    gulp.src(paths.app + '*.html')
        .pipe(gulp.dest(paths.dist))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('fonts', function () {
    gulp.src(paths.app + paths.fonts + '*')
        .pipe(gulp.dest(paths.dist + paths.fonts))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('js', function () {
    gulp.src(paths.app + paths.js + '*.js')
        .pipe(gulp.dest(paths.dist + paths.js))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('minify-css', function () {
    gulp.src(paths.app + paths.css + 'app.css')
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(gulp.dest(paths.dist + 'css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('compress-images', function() {
    gulp.src(paths.app + paths.images + '*')
        .pipe(imagemin())
        .pipe(gulp.dest(paths.dist + paths.images))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('stylus', function () {
    return gulp.src(paths.app + paths.stylus + 'app.styl')
        .pipe(stylus())
        .pipe(gulp.dest(paths.app + paths.css));
});

gulp.task('watcher',function(){
    gulp.watch(paths.app + paths.stylus + '*.styl', ['stylus']);
    gulp.watch(paths.app + paths.css + '*.css', ['minify-css']);
    gulp.watch(paths.app + '*.html', ['html']);
    gulp.watch(paths.app + paths.images + '*', ['compress-images']);
    gulp.watch(paths.app + paths.js + '*.js', ['js']);
    gulp.watch(paths.app + paths.fonts, ['fonts']);
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "dist"
        },
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.task('dev', ['watcher', 'browser-sync']);
gulp.task('prod', ['stylus', 'minify-css', 'html', 'compress-images', 'js', 'fonts']);
