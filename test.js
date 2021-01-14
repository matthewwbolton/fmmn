const fs = require("fs");
const through = require("through2");
const Transform = require("stream").Transform;

// process.stdin.pipe(through(loud)).pipe(process.stdout);

// function loud(buf, enc, next) {
//   next(null, buf.toString().toUpperCase());
// }

const toUpper = new Transform({
  transform: function (buf, enc, next) {
    next(null, buf.toString().toUpperCase());
  },
});

fs.createReadStream(process.argv[2]).pipe(toUpper).pipe(process.stdout);
