const gulp = require("gulp");
const sass=require("gulp-sass");
const concat=require("gulp-concat");
const uglify=require("gulp-uglify");
const minfyCSS=require("gulp-minify-css");
const imagemin=require("gulp-imagemin");

// 监听任务
gulp.task("watchall",async()=>{
    // 监听html.进行复制
    gulp.watch("*.html",async()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("D:\\phpStudy2016\\phpStudy\\WWW\\test\\naturalFarm"))
    });
    // 监听sass文件
    gulp.watch("sass/**/*",async()=>{
        gulp.src("sass/**/*")
        .pipe(sass())
        .pipe(minfyCSS())
        .pipe(gulp.dest("D:\\phpStudy2016\\phpStudy\\WWW\\test\\naturalFarm\\css"))
    })
    //监听js
     gulp.watch("js/**/*",async()=>{
        gulp.src("js/**/*")
//      .pipe(concat("js/**/*"))
//      .pipe(uglify())
        .pipe(gulp.dest("D:\\phpStudy2016\\phpStudy\\WWW\\test\\naturalFarm\\js"))
    })
    //监听img
     gulp.watch("img/**/*",async()=>{
        gulp.src("img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("D:\\phpStudy2016\\phpStudy\\WWW\\test\\naturalFarm\\img"))
    })
     //监听php
//   gulp.watch("php/**/*",async()=>{
//      gulp.src("php/**/*")
//      .pipe(gulp.dest("D:\\phpStudy2016\\phpStudy\\WWW\\test\\naturalFarm\\php"))
//  })
})
//gulp.task("copy",function(){
//	return gulp.src("./**/*").pipe(gulp.dest("D:\\phpStudy2016\\phpStudy\\WWW\\test\\naturalFarm"));
//});
