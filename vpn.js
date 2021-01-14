const net = require("net");
const crypto = require("crypto");
const pw = "abc123";

net
  .createServer(function (stream) {
    stream
      .pipe(crypto.createDecipheriv("aes192", pw))
      .pipe(net.connect(5000, "localhost"))
      .pipe(crypto.createCipheriv("aes192", pw))
      .pipe(stream);
  })
  .listen(5005);
