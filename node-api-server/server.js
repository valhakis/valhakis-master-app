var path = require('path');

var express = require('express')

var app = express()

var port = process.env.PORT || 2000
var host = process.env.HOST || '192.168.0.2'

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'app/views'));
app.locals.basedir = path.join(__dirname, 'app/views');

var mongoose = require('mongoose');
var Item = require('./api/models/item.model');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/app');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(fileUpload());

var routes = require('./api/routes/item.routes');

require('./app/routes')(app);
routes(app);

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/', express.static(__dirname + '/public'));

app.listen(port, host);

console.log(`RESTful Api app at ${host}:${port}`);
