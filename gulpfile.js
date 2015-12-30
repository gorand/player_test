var gulp = require('gulp'),
	jade = require('gulp-jade'),
	postcss = require('gulp-postcss'),
  precss = require('precss'),
  cssnext = require('cssnext'),
	autoprefixer = require('autoprefixer'),
	colorFunction = require("postcss-color-function"),	
	browserSync = require('browser-sync').create(),
	rename = require("gulp-rename"),
	plumber = require('gulp-plumber'),	
	notify = require('gulp-notify');

// runing a webserver
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

// convert from Jade to HTML
gulp.task('template', function(){
	gulp.src('app/templates/pages/*.jade')
		.pipe(jade({
			pretty: true
		}))	
		.pipe(gulp.dest('dist'))
});

// convert from PostCSS to CSS
gulp.task('postcss',  function() {
	var processors = [
			precss,
      autoprefixer({ browsers: ['last 3 versions'] }),
      cssnext,
			colorFunction
		];
    return gulp.src(['app/css/main.css'])
    	.pipe(plumber())
		.pipe(postcss(processors))
		.pipe(notify('CSS-файлы успешно обновлены'))
		.pipe(rename('style.css'))
		.pipe(gulp.dest('dist/css/'));
});

// javascript
gulp.task('js', function(){
	gulp.src("app/js/main.js")
	.pipe(gulp.dest("dist/js/"))
  .pipe(notify('JS update'))
});

// convert from HTML to Jade
 gulp.task('convert', function(){
 	gulp.src('raw/builder/html/*.html')
 		.pipe(html2jade())
		.pipe(notify('Шаблоны .jade обновлены'))
 		.pipe(gulp.dest('raw/builder/jade'));
 });

// watcher
gulp.task('watch', function() {
  gulp.watch([
      'app/css/*.css', 
      'app/css/**/*.css', 
      'app/templates/*.jade', 
      'app/templates/**/*.jade',
      'app/js/*.js'
    ], 
    [
      'postcss', 
      'template',
      'js'
    ])
    .on("change", browserSync.reload);
});

// default task
gulp.task('default', ['browser-sync', 'postcss', 'template', 'js', 'watch']);

// other tasks
gulp.task('update', [ 'mainBower', 'postcss', 'template']);
