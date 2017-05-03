var user = require('../controllers/user.controller');

module.exports = function(app) {
   app.get('/users', user.render_index);
   app.get('/users/register', user.render_register);
   app.post('/users/register', user.register_user);
};
