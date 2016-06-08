config      = require('../../../server/_config/app')
gulp        = require('gulp')
jade        = require('gulp-jade')
runSequence = require('run-sequence')

# COMPILE JADE TEMPLATES
gulp.task 'compile:jade', ->
  gulp.src(config.gulp.src.assets.jade.templates)
      .pipe(jade(
        pretty: true
        locals: config: config))
      .pipe gulp.dest(config.gulp.dest.assets.jade.templates)
  # WATCH & RELOAD ON CHANGE
  if process.argv.watch && !process.argv.watchJade
    process.argv.watchJade = true
    gulp.watch config.gulp.src.assets.jade.templates, ->
      runSequence 'compile:jade', 'reload'
