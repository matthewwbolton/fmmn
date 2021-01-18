//reliably detect when a stream has finished

const onend = require("end-of-stream");
const net = require("net");

const server = net.createServer(function (stream) {
  let iv = setInterval(function () {
    stream.write(Date.now() + "\n");
  }, 1000);
  onend(stream, function () {
    clearInterval(iv);
  });
});

server.listen(5000);
