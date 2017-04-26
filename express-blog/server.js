var config = {
   host: '192.168.0.2',
   port: '4000',
   livereload: {
      port: '4010'
   }
};

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var livereload = require('livereload').createServer({
   host: config.host,
   port: config.livereload.port,
   exts: ['html', 'js', 'png', 'gif', 'jpg', 'php', 'php5', 'rb', 'py', 'pug']
});
livereload.watch([
   __dirname + '/views'
]);

var port = config.port;
var host = config.host;

app.set('view engine', 'pug');
app.locals.basedir = __dirname + '/views';

app.use(require('connect-livereload')({
	host: config.host,
	port: config.livereload.port,
	ignore: [
		/\.js(\?.*)?$/, /\.css(\?.*)?$/, /\.svg(\?.*)?$/, /\.ico(\?.*)?$/, /\.woff(\?.*)?$/,
		/\.png(\?.*)?$/, /\.jpg(\?.*)?$/, /\.jpeg(\?.*)?$/, /\.gif(\?.*)?$/, /\.pdf(\?.*)?$/
	],
	include: [/.*/],
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
   res.render('index');
});

require('./routes')(app);

app.listen(port, host, function() {
   console.log(`SERVER AT ${host}:${port}`);
});
