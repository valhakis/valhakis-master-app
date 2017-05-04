var ws = new WebSocket("ws://192.168.0.2:4000", 'echo-protocol');
var ws = new WebSocket("ws://192.168.0.2:4000/example", 'echo-protocol');

ws.onopen = function() {
   console.log('connected');
};

ws.onmessage = function (event) {
   console.log(event);
};
