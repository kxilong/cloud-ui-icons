var gulp = require("gulp");

var iconfont = require("gulp-iconfont");
var iconfontCss = require("gulp-iconfont-css");

var fontName = "cloudui-icomoon";
var devUIFontDir = "./icomoon/";
var runTimestamp = Math.round(Date.now() / 1000);

gulp.task("iconfont", function (done) {
  gulp
    .src(devUIFontDir + "svg/**/*.svg")
    .pipe(
      iconfontCss({
        fontName: fontName,
        path: "./templates/_icon.less",
        targetPath: "../cloudui-icon.css",
        cssClass: "icon",
        fontPath: "fonts/",
      })
    )
    .pipe(
      iconfont({
        fontName: fontName,
        formats: ["svg", "ttf", "eot", "woff"],
        normalize: true,
        fontHeight: 1001,
        cacheBuster: runTimestamp,
      })
    )
    .on("glyphs", function (glyphs, options) {
      console.log(glyphs, options);
    })
    .pipe(gulp.dest("./icomoon/fonts"));
  done();
});
