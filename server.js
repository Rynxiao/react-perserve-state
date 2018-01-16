'use strict';

var http = require('http');
var express = require('express');
var app = express();

var webpack = require('webpack');
var config = require('./webpack.config.js');
var compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, 
    publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var server = http.createServer(app);
server.listen(8080, function() {
    console.log("Listening on %j", server.address());
});


