const { src, dest, parallel, series, watch } = require('gulp');
const sync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const del = require('del');
const panini = require('panini');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');

// HTML
const html = () => {
    return src('src/*.html')
        .pipe(panini({
            root: 'src/',
            layouts: 'src/layouts/',
            partials: 'src/partials/',
            pages: 'src/pages/'
        }))
        .pipe(htmlmin({
            removeComments: true,
            collapseWhitespace: true
        }))
        .pipe(dest('dist'))
        .pipe(sync.stream())
}

// Styles
const styles = () => {
    return src(['src/less/main.less'])
    .pipe(less())
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], cascade: false }))
    .pipe(cleancss(({ level: { 1: { specialComments: 0}}})))
    .pipe(rename({
        basename: 'style',
        suffix: '.min'
      }))
    .pipe(dest('src/css/'))
    .pipe(dest('dist/css/'))
    .pipe(sync.stream())
}

// Scripts
const scripts = () => {
    return src(['src/js/script.js', 'src/js/**/*.js', '!src/js/script.min.js'])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(dest('src/js/'))
    .pipe(dest('dist/js/'))
    .pipe(sync.stream())
}

// server
const server = () => {
    sync.init({
        server: { baseDir: './dist'},
        notify: false,
        online: true
    })
}

// Copy
const copy = () => {
    return src([
        'src/fonts/**/*',
        'src/images/**/*'
    ], {
        base: 'src/'
    })
    .pipe(dest('dist/'))
    .pipe(sync.stream());
}

// cleandist
const cleandist = () => {
    return del('dist/**/*', { force: true })
}

// build copy
// function buildcopy() {
//     return src(['src/css/**/*.min.css',
//         'src/js/**/*.min.js',
//         'src/images/**/*',
//         'src/fonts/**/*',
//         'src/**/*.html',
//         ], { base: 'src' })
//     .pipe(dest('dist'))
// }

// Watch
const startwatch = () => {
    watch('src/**/*.html', html);
    watch('src/**/*.less', styles);
    watch(['src/**/*.js', '!src/js/script.min.js'], scripts);
    // watch(['src/images/**/*', 'src/fonts/**/*'], copy);
    watch('src/**/*.html').on('change', sync.reload);
}
const build = series(cleandist, parallel(html, styles, scripts, copy));

exports.default = parallel(startwatch, server);

exports.server = server;
exports.html = html;
exports.scripts = scripts;
exports.styles = styles;
exports.copy = copy;
exports.cleandist = cleandist;
exports.build = build;

