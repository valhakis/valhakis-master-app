var Something = require('./model');

exports.index = function(req, res) {
   res.status(200).send({
      msg: "I have a bird in my eye."
   });
};

exports.create = function(req, res) {
   var something = {
      body: req.body.body
   };

   Something.create(something, function(err, something) {
      if (err) throw err;
      res.status(200).send(something);
   });
};

exports.create_db = function(req, res) {
   Something.create_table(function(err) {
      if (err) {
         res.status(200).send({
            message: err
         });
      } else {
         res.status(200).send({
            message: 'Table has been created.'
         });
      }
   });
};

exports.delete_db = function(req, res) {
   Something.delete_table(function(err) {
      if (err) {
         res.status(200).send({
            message: err
         });
      } else {
         res.status(200).send({
            message: 'Table has been deleted.'
         });
      }
   });
};

exports.all = function(req, res) {
   Something.findAll(function(err, somethings) {
      res.status(200).send(somethings);
   });
};
