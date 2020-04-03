"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task("default", watch);

gulp.task("sass", compilaSass);

function compilaSass() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./css"));
}
function watch() {
  gulp.watch("/scss/**/*.scss", compilaSass);
}
