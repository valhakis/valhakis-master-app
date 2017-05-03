var mongoose = require('mongoose');
var Item = mongoose.model('Item');

exports.all_items = function(req, res) {
   Item.find({}, function(err, item) {
      if (err)
         res.send(err);
      res.json(item);
   });
};

exports.create_item = function(req, res) {
   var new_item = new Item(req.body);
   new_item.save(function(err, item) {
      if (err)
         res.send(err);
      res.json(item);
   });
};

exports.single_item = function(req, res) {
   Item.findById(req.params.itemId, function(err, item) {
      if (err) 
         res.send(err);
      res.json(item)
   });
};

exports.update_item = function(req, res) {
   Item.findONeAndUpdate(req.params.itemId, req.body, {new: true}, function(err, item) {
      if (err) res.send(err);
      res.json(item);
   });
};

exports.delete_item = function(req, res) {
   Item.remove({
      _id: req.params.itemId
   }, function(err, item) {
      if (err) 
         res.send(err);
      res.json({ message: 'Item sucessfully deleted.' });
   });
};
