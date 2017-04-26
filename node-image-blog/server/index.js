var express = require('express');
var bodyParser = require('body-parser');

var config = {
   port: 4000,
   host: '192.168.0.2'
};

var port = config.port;
var host = config.host;

var app = express();

app.use(function(req, res, next) {
   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', '*');

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/upload', function(req, res) {
   res.status(200).send({"example": "example"});
});

app.listen(port, host, function() {
   console.log(`Listening: ${host}:${port}`);
});
