// /user

var express = require('express');
var router = express.Router();

router.get('/register', function(req, res) {
   res.render('user/register');
});

router.post('/register', function(req, res) {
   res.render('user/register');
});

module.exports = router;
