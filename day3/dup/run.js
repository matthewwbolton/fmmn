const log = require("./api");

let stream = log();
let n = 0;
let iv = setInterval(function () {
  stream.write(Date.now() + "\n");
  if (n++ == 5) {
    clearInterval(iv);
    stream.end();
  }
}, 100);
