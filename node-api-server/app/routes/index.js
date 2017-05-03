var main = require('../controllers/main.controller');

module.exports = function(app) {
   app.get('/', main.index);
   require('./item.route')(app);
   require('./file.route')(app);
   require('./user.route')(app);
};
