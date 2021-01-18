// collect a streams output in a single buffer

//for object streams, collect output into an array of objects

const collect = require("collect-stream");
const split = require("split2");

const sp = process.stdin.pipe(split(JSON.parse));
collect(sp, function (err, rows) {
  if (err) console.log(err);
  else console.log(rows);
});

// This module is very useful for unit tests!
