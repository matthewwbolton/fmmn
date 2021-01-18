const duplexify = require("duplexify");
const mkdirp = require("mkdirp");
const fs = require("fs");

module.exports = function (name) {
  let d = duplexify();

  mkdirp("logs", function (err) {
    let w = fs.createWriteStream("logs/" + name + ".log");
    d.setWritable(w);
  });

  return d;
};
