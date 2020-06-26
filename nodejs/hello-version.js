#!/usr/bin/env node

var node_version = require('./package').version;

require("unit-http").createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(`Hello, Node.js ${node_version} Unit!`);
}).listen()

