exports.index = function(req, res) {
   res.render('post/index');
};

exports.create = function(req, res) {
   res.send(req.body);
};
