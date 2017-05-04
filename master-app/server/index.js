global.GET = require('./GET');

var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var path = require('path');

var config = {
   port: 4000,
   host: '192.168.0.2'
};

var port = config.port;
var host = config.host;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));

app.use('/', express.static(GET.root('dist')));

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// Add headers
app.use(function (req, res, next) {

   // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', '*');

   // Request methods you wish to allow
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

   // Request headers you wish to allow
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

   // Set to true if you need the website to include cookies in the requests sent
   // to the API (e.g. in case you use sessions)
   res.setHeader('Access-Control-Allow-Credentials', true);

   // Pass to next layer of middleware
   next();
});

app.get('/', function(req, res) {
   res.send({
      message: 'Welcome to server!'
   });
});

app.use('/bower_components', express.static(path.join(__dirname, '../bower_components')));

app.get('/webgl', function(req, res) {
   res.send('welcome hooman');
});

require('./routes')(app);

app.listen(port, host, function() {
   console.log(`SERVER AT ${host}:${port}, not sure tho.`);
});
