var http = require('http');
var WebSocketServer = require('websocket').server;

var app = require('./app');

var port = '4000';
var host = '192.168.0.2';

var server = http.createServer(app);

server.listen(port, host, function () {
   console.log(`server is at ${host}:${port}`);
});

var webSocketServer = new WebSocketServer({
   httpServer: server,
   autoAcceptConnection: false
});

webSocketServer.on('request', function(request) {
   var connection = request.accept('echo-protocol', request.origin);
   connection.on('message', function(message) {
      if (message.type === 'utf8') {
         console.log(`Received message:`, message.utf8Data);
         connection.sendUTF(message.utf8Data);
      } else if (message.type === 'binary') {
         console.log(`Received binary message of`, message.binaryData.length, `bytes`);
         connection.sendBytes(message.binaryData);
      }
   });
   connection.on('close', function(code, description) {
      console.log(`${new Date()} peer ${connection.remoteAddress} disconnected.`);
   });
});
