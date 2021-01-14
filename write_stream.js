const { worker } = require("cluster");
const fs = require("fs");

const W = fs.createWriteStream("cool_write_stream.txt");

W.on("finish", () => console.log("FINISHED"));
W.write("hi\n");
W.write("wow\n");
W.end();
