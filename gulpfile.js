"use strict";

const gulp = require("gulp");
const fs = require("fs");
const rename = require("gulp-rename");
const fileinclude = require("gulp-file-include");
const argv = require('yargs').argv;

gulp.task("translate", () => {

  const build = argv.build;

  const translations = JSON.parse(fs.readFileSync(`./projects/${build}/translations.json`));
  for (let i = 0; i < translations.length; i++) {
    let lang = "";
    if (translations[i].languageCode !== "en") {
      lang = `-${translations[i].languageCode}`;
    }

    let context = translations[i];

    gulp
      .src(`./projects/${build}/index.html`)
      .pipe(
        fileinclude({
          context
        })
      )
      .pipe(rename({ suffix: lang }))
      .pipe(gulp.dest(`./projects/${build}/dist`));
  }
});

gulp.task("default", ["translate"]);
