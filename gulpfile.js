const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const replace = require("gulp-replace");

// Static server
gulp.task("server", function () {
  browserSync.init({
    server: {
      baseDir: "./src/",
    },
  });
});

gulp.task("styles", function () {
  return gulp
    .src("./src/scss/**/*.+(scss|sass)")
    .pipe(
      sass({ outputStyle: "compressed", imagePath: "" }).on(
        "error",
        sass.logError
      )
    )
    .pipe(
      rename({
        prefix: "",
        suffix: ".min",
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(replace("/src/", "../"))
    .pipe(gulp.dest("./src/css"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  gulp.watch("./src/scss/**/*.+(scss|sass)", gulp.parallel("styles"));
  gulp.watch("./src/*.html").on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel("watch", "server", "styles"));