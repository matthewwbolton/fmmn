const net = require("net");
const multiplex = require("multiplex");
const rpc = require("rpc-stream");
const { Stream } = require("stream");

const plex = multiplex(function (stream, id) {
  if (/^file-/.test(id)) {
    console.log("RECEIVED FILE " + id.replace(/^file-/, ""));
    stream.pipe(process.stdout);
  }
});

plex.pipe(net.connect(5000)).pipe(plex);

const client = rpc();
client.pipe(plex.createSharedStream("rpc")).pipe(client);

const remote = client.wrap(["read"]);
remote.read(process.argv[2], function (err) {
  if (err) console.error(err);
});
