const http = require("http");
const wsock = require("websocket-stream");
const through = require("through2");
const ecstatic = require("ecstatic");

const server = http.createServer(ecstatic(__dirname + "/public")).listen(5000);

wsock.createServer({ server: server }, function (stream) {
  stream.pipe(louder().pipe(stream));
});

function louder() {
  return through(function (buf, enc, next) {
    next(null, buf.toString().toUpperCase());
  });
}
