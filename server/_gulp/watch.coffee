config      = require('../../server/_config/app')
gulp        = require('gulp')
runSequence = require('run-sequence')

# WATCH ASSETS FOR CHANGES
gulp.task 'watch', ->

  gulp.watch config.gulp.src.assets.sass, ->
    runSequence 'compile:sass', 'reload'

  gulp.watch config.gulp.src.assets.js, ->
    runSequence 'compile:js', 'reload'

  gulp.watch config.gulp.src.assets.jade.templates, ->
    runSequence 'compile:jade', 'reload'

  gulp.watch config.gulp.src.assets.ts, ->
    runSequence 'ts-files', 'compile:ts', 'reload'
