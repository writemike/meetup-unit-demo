#!/usr/bin/env node

require("unit-http").createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello, Node.js Unit!")
}).listen()

