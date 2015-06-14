var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    mainBowerFiles = require('main-bower-files'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    stripDebug = require('gulp-strip-debug'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    livereload = require('gulp-livereload'),
    jshint = require('gulp-jshint');

var src = {
  root: 'public/assets/src/',
  css:  'public/assets/src/css/',
  js:   'public/assets/src/js/',
  img:  'public/assets/img/',
  html: 'craft/templates/'
};

var dest = 'public/assets/dist/';

gulp.task('css', function() {
  return sass(src.css+'main.scss', { loadPath: 'bower_components', style: 'expanded'})
          .on('error', function (err) { console.log(err.message); })
          .pipe(autoprefixer({cascade: false}))
          .pipe(rename('main.css'))
          .pipe(livereload())
          .pipe(gulp.dest(dest+'css'))
          .pipe(rename('main.min.css'))
          .pipe(minifyCSS({keepBreaks: true}))
          .pipe(gulp.dest(dest+'css'));
});

gulp.task('js', function() {

  gulp.src(src.js+'*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));

  gulp.src(mainBowerFiles("**/*.js", {includeDev: true}).concat([src.js+'*/*.js', src.js+'*.js']))
      .pipe(concat('main.js'))
      .pipe(gulp.dest(dest+'js'))
      .pipe(livereload())
      .pipe(rename('main.min.js'))
      .pipe(stripDebug())
      .pipe(uglify())
      .pipe(gulp.dest(dest+'js'));

});

gulp.task('watch', function(){
  livereload.listen();

  gulp.watch(src.css+'**/*.scss', ['css']);
  gulp.watch(src.js+'**/*.js', ['js']);
  // gulp.watch(src.img+'**/*', ['images']);
  gulp.watch(src.html+'**/*.html', function(e) {
    livereload.reload(e.path.split(src.html)[1]);
  });
});

gulp.task('default', ['watch', 'css', 'js']);
gulp.task('build', ['css', 'js']);
