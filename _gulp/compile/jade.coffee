config      = require('../../_config/app')
gulp        = require('gulp')
jade        = require('gulp-jade')
runSequence = require('run-sequence')

# COMPILE JADE TEMPLATES
gulp.task 'compile:jade', ->
  gulp.watch config.gulp.src.assets.jade.templates, ->
    runSequence 'compile:jade', 'reload'
