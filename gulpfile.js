var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

//Compilar o SASS
gulp.task('sass', function(){
   
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
    
});


//Mover o JS para src/js
gulp.task('js', function(){
    
    return gulp.src(['node_modules/bootstrap/dist/js/boostrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
    
});



//Servidor para olhar o HTML e CSS
gulp.task('serve', ['sass'], function(){
    
    browserSync.init({
        server: "./"
    });
    
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    
});

gulp.task('default', ['js', 'serve']);