const net = require("net");
const crypto = require("crypto");
const pw = "abc123";

const stream = net.connect(5005, "localhost");

process.stdin
  .pipe(crypto.createCipheriv("aes192", pw))
  .pipe(stream)
  .pipe(crypto.createDecipheriv("aes192", pw))
  .pipe(process.stdout);
