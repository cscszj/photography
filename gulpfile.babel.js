// generated on 2016-01-06 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {stream as wiredep} from 'wiredep';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

var xmdd = {
  root: 'WebContent'
};

gulp.task('serve',  function() {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: [xmdd.root],

      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'WebContent/*.html',
    'WebContent/js/**/*.js',
    'WebContent/images/**/*',
    'WebContent/css/*.css'
  ]).on('change', reload);


});


// inject bower components


gulp.task('build', ['lint', 'html', 'extras'], function() {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
