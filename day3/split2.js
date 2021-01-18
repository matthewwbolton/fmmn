// split2

// This program counts the number of lines on input, like 'wc -1'

const split = require("split2");
const through = require("through2");

let count = 0;

process.stdin.pipe(split()).pipe(through(write, end));

function write(buf, enc, next) {
  count++;
  next();
}

function end(next) {
  console.log(count);
  next();
}
