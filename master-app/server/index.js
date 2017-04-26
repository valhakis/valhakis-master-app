var express = require('express');
var path = require('path');

var config = {
   port: 4000,
   host: '192.168.0.2'
};

var port = config.port;
var host = config.host;

var app = express();

app.use('/bower_components', express.static(path.join(__dirname, '../bower_components')));

app.listen(port, host, function() {
   console.log(`SERVER AT ${host}:${port}, not sure tho.`);
});
