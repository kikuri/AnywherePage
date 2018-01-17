var gulp = require('gulp');
var sass = require('gulp-sass');

// SassとCssの保存先を指定
gulp.task('scss', function(){
  gulp.src('./scss/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./css/'));
});

//自動監視のタスクを作成(sass-watchと名付ける)
gulp.task('scss-watch', ['sass'], function(){
  var watcher = gulp.watch('./scss/*.scss', ['sass']);
  watcher.on('change', function(event) {
  });
});

// タスク"task-watch"がgulpと入力しただけでdefaultで実行されるようになる
gulp.task('default', ['sass-watch']);
