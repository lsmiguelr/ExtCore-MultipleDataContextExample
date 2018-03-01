﻿var gulp = require("gulp");

gulp.task(
  "copy-extensions", function (cb) {
    gulp.src(["../WebApplication.ExtensionA/bin/Debug/netcoreapp2.0/WebApplication.ExtensionA.dll"]).pipe(gulp.dest("Extensions"));
    gulp.src(["../WebApplication.ExtensionA.Data.Abstractions/bin/Debug/netcoreapp2.0/WebApplication.ExtensionA.Data.Abstractions.dll"]).pipe(gulp.dest("Extensions"));
    gulp.src(["../WebApplication.ExtensionA.Data.EntityFramework.Sqlite/bin/Debug/netcoreapp2.0/WebApplication.ExtensionA.Data.EntityFramework.Sqlite.dll"]).pipe(gulp.dest("Extensions"));
    gulp.src(["../WebApplication.ExtensionA.Data.Entities/bin/Debug/netcoreapp2.0/WebApplication.ExtensionA.Data.Entities.dll"]).pipe(gulp.dest("Extensions"));
    gulp.src(["../WebApplication.ExtensionB/bin/Debug/netcoreapp2.0/WebApplication.ExtensionB.dll"]).pipe(gulp.dest("Extensions"));
    gulp.src(["../WebApplication.ExtensionB.Data.Abstractions/bin/Debug/netcoreapp2.0/WebApplication.ExtensionB.Data.Abstractions.dll"]).pipe(gulp.dest("Extensions"));
    gulp.src(["../WebApplication.ExtensionB.Data.EntityFramework.Sqlite/bin/Debug/netcoreapp2.0/WebApplication.ExtensionB.Data.EntityFramework.Sqlite.dll"]).pipe(gulp.dest("Extensions"));
    gulp.src(["../WebApplication.ExtensionB.Data.Entities/bin/Debug/netcoreapp2.0/WebApplication.ExtensionB.Data.Entities.dll"]).pipe(gulp.dest("Extensions"));
    cb();
  }
);