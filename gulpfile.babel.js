import gulp from 'gulp';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import del from 'del';
import Builder from 'systemjs-builder';

var $ = require('gulp-load-plugins')({
    lazy: true
});

const SERVER_NAME = 'SERVER';

const root = __dirname;
const config = {
    root: root,
    /**
     * The config files
     */
    gulp: `${root}/gulpfile.babel.js`,
    systemjs: `${root}/system.config.js`,
    typescript: `${root}/tsconfig.json`,

    templatesModuleName: 'templates',

    /**
     * This is a collection of file patterns that refer to our app code (the
     * stuff in `src/`). These file paths are used in the configuration of
     * build tasks.
     */
    app: {
        basePath: `${root}/src/`,
        sources: `${root}/src/**/*.{css,ts,html,jpg,png}`,
        typescripts: `${root}/src/**/!(*.spec).ts`,
        images: `${root}/src/images/**/*`,
        fonts: `${root}/src/fonts/**/*`,
        styles: [`${root}/src/styles/app.scss`],
        html: [`${root}/src/**/*.html`]
    },

    /**
     * The 'dist' folder is where our app resides once it's
     * completely built.
     */
    dist: {
        basePath: `${root}/dist/`,
        scripts: `${root}/dist/scripts/`,
        styles: `${root}/dist/styles/`,
        images: `${root}/dist/images/`,
        fonts: `${root}/dist/fonts/`
    }
};

/**
 * The 'server' task start BrowserSync and open the browser.
 */
gulp.task('server', () => {
    let server = browserSync.create(SERVER_NAME);
    let browser = 'google chrome';
    let files = [
        config.app.sources,
        config.typescript,
        config.systemjs
    ];

    server.init({
        open: true,
        port: 3000,
        directory: true,
        notify: true,
        startPath: `src/index.html`,
        files: files,
        server: {
            baseDir: './'
        },
        browser: browser
    });
});

/**
 * The 'SASS' task.
 */
gulp.task('sass', function () {
    return gulp.src(config.app.styles)
        .pipe($.sass().on('error', $.sass.logError))
        .pipe(gulp.dest(config.dist.styles));
});

/**
 * The 'clean' task delete 'build' and '.tmp' directories.
 *
 * @param {Function} done - callback when complete
 */
gulp.task('clean', (cb) => {
    const files = [].concat(config.dist.basePath);
    return del(files, cb);
});

/**
 * The 'copy' task just copies files from A to B. We use it here
 * to copy our files that haven't been copied by other tasks
 * e.g. (favicon, etc.) into the `build/dist` directory.
 *
 * @return {Stream}
 */
gulp.task('copy', () => {
    return gulp.src(
            [config.app.basePath + '*.{ico,png,txt}',
                config.app.basePath + '404.html'
            ])
        .pipe(gulp.dest(config.dist.basePath));
});

/**
 * The 'images' task optimize and copies images to `build/dist` directory.
 *
 * @return {Stream}
 */
gulp.task('images', () => {
    return gulp.src(config.app.images)
        .pipe(gulp.dest(config.dist.images));
});

/**
 * The 'fonts' task copies fonts to `build/dist` directory.
 *
 * @return {Stream}
 */
gulp.task('fonts', () => {
    return gulp.src(config.app.fonts)
        .pipe(gulp.dest(config.dist.fonts));
});

/**
 * The 'HTML' templates to JS task.
 */

gulp.task('html', function () {
    return gulp.src(config.app.html)
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe($.ngHtml2js({
            moduleName: config.templatesModuleName
        }))
        .pipe($.concat('templates.js'))
        .pipe(gulp.dest(config.dist.scripts));
});

/**
 * The 'compile' task compile all js, css and html files.
 */
gulp.task('compile', ['bundle', 'html', 'sass'], () => {
    return gulp.src(`${config.app.basePath}index.html`)
        .pipe($.inject(gulp.src(`${config.dist.scripts}*.js`, {read: false})))
        .pipe($.usemin())
        .pipe(gulp.dest(config.dist.basePath));
});

/**
 * The 'htmlhint' task defines the rules of our hinter as well as which files we
 * should check. It helps to detect errors and potential problems in our
 * HTML code.
 */
gulp.task('htmlhint', () => {
    return gulp.src(config.app.html)
        .pipe($.htmlhint({
            'doctype-first': false,
            'spec-char-escape': false
        }))
        .pipe($.htmlhint.reporter())
        .pipe($.htmlhint.failReporter());
});

/**
 * The 'Typescript' tasks.
 */
gulp.task('typescript', () => {
    let project = $.typescript.createProject(
        config.typescript
    );

    return project.src()
        .pipe($.typescript(project))
        .js.pipe($.ngAnnotate())
        .pipe(gulp.dest(config.dist.scripts));
});

/**
 * The 'Bundle' task.
 */

gulp.task('bundle', ['typescript'], () => {
    let builder = new Builder(config.root);

    builder.loadConfig(config.systemjs)
        .then(() => {
            return builder.buildStatic(
                `${config.dist.scripts}src/modules/app.js`,
                `${config.dist.scripts}bundle.js`, {
                    minify: false,
                    mangle: false,
                    sourceMaps: false
                });
        }).then(() => del(`${config.dist.scripts}src`));
});

/**
 * The 'build' task gets app ready for deployment by processing files
 * and put them into directory ready for production.
 *
 * @param {Function} done - callback when complete
 */
gulp.task('build', (cb) => {
    runSequence(
        ['clean'], ['compile', 'copy', 'images', 'fonts'],
        cb
    );
});

gulp.task('default', ['server']);
