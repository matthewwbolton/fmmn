//create a writable stream with a write and flush function

const to = require("to2");
const split = require("split2");

process.stdin.pipe(split()).pipe(
  to(function (buf, next) {
    console.log(buf.length);
    next();
  })
);
