const gulp = require("gulp");
const concat = require("gulp-concat");
const jsMin = require('gulp-jsmin');
const rename = require("gulp-rename");
const sass = require('gulp-sass')(require('node-sass'));
const cssMin = require('gulp-css');
const browserSync = require('browser-sync').create();

function minifyMainJs() {
	return gulp.src('src/js/common.js').pipe(jsMin()).pipe(rename("common.min.js")).pipe(gulp.dest('src/js/'));
}
gulp.task(minifyMainJs);

// Specific Task
function js() {
	return gulp
		.src([
			'src/libs/OwlCarousel/owl.carousel.min.js',
			'src/libs/CounterUp/jquery.countup.min.js',
			'src/libs/CounterUp/waypoint.js',
			'src/libs/magnific/jquery.magnific-popup.min.js',
			'src/libs/validate/jquery.validate.min.js',
			'src/libs/chart/chart.js',
			'src/libs/chart/chart.bundle.js',
			'src/libs/jarallax-master/dist/jarallax.min.js',
			'src/libs/jarallax-master/dist/jarallax-element.min.js',
			'src/libs/flipclock/flipclock.min.js',
			'src/libs/aos-master/aos.js',
			'src/js/common.min.js',
		])
		.pipe(concat('scripts.min.js'))
		.pipe(gulp.dest('src/js'))
		.pipe(browserSync.stream());
}
gulp.task(js);

// Specific Task
function gulpSass() {
	return gulp
		.src(['src/sass/*.sass'])
		.pipe(sass())
		.pipe(cssMin())
		.pipe(rename("main.min.css"))
		.pipe(gulp.dest('src/css/'))
		.pipe(browserSync.stream());
}
gulp.task(gulpSass);

// Run multiple tasks
gulp.task('start', gulp.series(minifyMainJs, js, gulpSass));