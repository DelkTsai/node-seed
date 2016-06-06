config      = require('../../_config/app')
gulp        = require('gulp')
sass        = require('gulp-sass')
sourcemaps  = require('gulp-sourcemaps')

# COMPILE MAIN SASS FILE
gulp.task 'compile:sass', ['vet:sass'], ->
  return gulp.src(config.gulp.src.assets.sassMain)
    .pipe(sourcemaps.init())
      .pipe(sass()).on('error', sass.logError)
    .pipe(sourcemaps.write('.'))
    .pipe gulp.dest(config.gulp.dest.assets.sass)
