var http = require('http');
var config = require('./config');
var app = require('./app');

var server = http.createServer(app);

var port = config.port;
var host = config.host;

var listener = server.listen(port, host, function() {
   console.log(`server is listening at ${host}:${port}`);
});
