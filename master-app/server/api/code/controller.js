var Sequelize = require('sequelize');
var sequelize = new Sequelize('database', '', '', {
   dialect: 'sqlite',
   storage: GET.root('data/database.sqlite')
});

// var Code = new sequelize.define('code', {
   // body: Sequelize.STRING
// });

// sequelize.sync().then(function() {
// 
// });

exports.index = function(req, res) {
   res.send('index');
};

exports.new = function(req, res) {
   var body = req.body.body;

   res.status(200).send({
      body: req.body,
      xhr: req.xhr
   });
};
