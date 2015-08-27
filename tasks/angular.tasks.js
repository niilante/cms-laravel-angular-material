var gulp = require('gulp');
var plug = require('gulp-load-plugins')();

var Elixir = require('laravel-elixir');

var Task = Elixir.Task;

var paths = {
    "vendor" : [
        "./node_modules/angular/angular.min.js",
        "./node_modules/angular-*/angular-*.min.js"
    ],
    "js"       : [
        "./resources/angular/**/*module*.js",
        "./resources/angular/**/*.js"
    ],

    "sass" : "./node_modules/angular-material/angular-material.scss",

    "build"    : "./public/js/"
};


Elixir.extend('angular_vendor', function ()
{
    new Task('vendor-js', function ()
    {
        console.log('Bundling, minifying, and copying the Angular Vendor JavaScript files');

        return gulp.src(paths.vendor)
            .pipe(plug.concat('angular-vendor.min.js'))
            .pipe(plug.bytediff.start())
            .pipe(plug.uglify())
            .pipe(plug.bytediff.stop(bytediffFormatter))
            .pipe(gulp.dest(paths.build))
            .pipe(plug.notify({
                title: 'Laravel Elixir',
                subtitle: 'Angular Vendor Compiled!',
                icon: __dirname + '/../node_modules/laravel-elixir/icons/laravel.png',
                message: ' '
            }));
    });

    new Task('vendor-scss', function ()
    {
        return gulp.src(paths.sass)
            .pipe(gulp.dest("./resources/assets/sass/"))
            .pipe(plug.notify({
                title: 'Laravel Elixir',
                subtitle: 'Angular Material css Vendor Copied!',
                icon: __dirname + '/../node_modules/laravel-elixir/icons/laravel.png',
                message: ' '
            }));
    });
});

Elixir.extend('angular_js', function ()
{
    /**
     * Minify and bundle the app's JavaScript
     */
    new Task('angular_js', function ()
    {
        console.log("Bundling, minifying, and copying the app's JavaScript");

        var source = paths.js;
        return gulp
            .src(source)
            // .pipe(plug.sourcemaps.init()) // get screwed up in the file rev process
            .pipe(plug.concat('angular-all.min.js'))
            .pipe(plug.ngAnnotate({
                add           : true,
                single_quotes : true
            }))
            .pipe(plug.bytediff.start())
            .pipe(plug.uglify({
                mangle : true
            }))
            .pipe(plug.bytediff.stop(bytediffFormatter))
            // .pipe(plug.sourcemaps.write('./'))
            .pipe(gulp.dest(paths.build))
            .pipe(plug.notify({
                title: 'Laravel Elixir',
                subtitle: 'Angular App files Compiled!',
                icon: __dirname + '/../node_modules/laravel-elixir/icons/laravel.png',
                message: ' '
            }));
    }).watch(paths.js);
});

/**
 * Formatter for bytediff to display the size changes after processing
 * @param  {Object} data - byte data
 * @return {String}      Difference in bytes, formatted
 */
function bytediffFormatter(data)
{
    var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
    return data.fileName + ' went from ' +
        (data.startSize / 1000).toFixed(2) + ' kB to ' + (data.endSize / 1000).toFixed(2) + ' kB' +
        ' and is ' + formatPercent(1 - data.percent, 2) + '%' + difference;
}

/**
 * Format a number as a percentage
 * @param  {Number} num       Number to format as a percent
 * @param  {Number} precision Precision of the decimal
 * @return {String}           Formatted percentage
 */
function formatPercent(num, precision)
{
    return (num * 100).toFixed(precision);
}