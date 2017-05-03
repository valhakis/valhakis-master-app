var path = require('path');

var root = path.join(__dirname, '..');

exports.root = function(name) {
   return root + '/' + name;
};
