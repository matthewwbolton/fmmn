const pump = require("pump");
const pumpify = require('pumpify');

pump(stream1, stream2, stream3, ...)

let pump = pumpify(stream1, stream2, stream3, ...)