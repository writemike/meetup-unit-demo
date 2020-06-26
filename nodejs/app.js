#!/usr/bin/env node

const cr = require("crypto")
const bd = require("body")
require("unit-http").createServer(function (req, res) {
    bd (req, res, function (err, body) {
        res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"})

        var r = {
            "agent":    "NGINX Unit 1.18.0",
            "message":  "Kirov reporting"
        }

        r["headers"] = req.headers
        r["body"] = body
        r["sha256"] = cr.createHash("sha256").update(r["body"]).digest("hex")

        res.end(JSON.stringify(r, null, "    ").toString("utf8"))
    })
}).listen()

