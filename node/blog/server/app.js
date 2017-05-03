var express = require('express');
var GET = require('./GET');
var app = express();

require('./routes')(app);

app.use(express.static(GET.root('dist')));
app.use('/bower_components', express.static(GET.root('bower_components')));

module.exports = app;
