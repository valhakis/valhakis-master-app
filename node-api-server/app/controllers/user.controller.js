var User = require('../../api/models/user.model');

exports.render_index = function(req, res) {
   res.render('user/index');
};

exports.render_register = function(req, res) {
   res.render('user/register');
};

exports.register_user = function(req, res) {

   var email = req.body.email;
   var password = req.body.password;
   var password2 = req.body.password2;

   if (password !== password2) {
      console.log('Passwords do not match.');
      res.redirect('/users/register');
   } else {
      var new_user = new User({
         email: email,
         password: password
      });
      new_user.save(function(err, user) {
         if (err) {
            res.send(err);
         } else {
            console.log('Registration was successful.');
            res.redirect('/users/register');
         }
      });
   }

};
