var path = require('path');
var GET = {};

var root = path.join(__dirname, '../..');

GET.root = function(name) {
   return root + '/' + name;
};


module.exports = GET;
