//create a readable stream with a pull function

const from = require("from2");
const messages = ["hello", "word\n", null];

from(function (size, next) {
  next(null, messages.shift());
}).pipe(process.stdout);
